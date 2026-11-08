// Imports the live WordPress site (cliniquesantevoyage.com) into this Astro project.
//
//   node scripts/wp-import/import.mjs            crawl (cached) + convert + download assets
//   node scripts/wp-import/import.mjs --refresh  re-download every page
//
// Pages are cached in .wp-cache/ (git-ignored). Output:
//   src/wp/pages.json          one entry per route (head, styles, scripts, body class)
//   src/wp/html/*.html         page markup between the shared header and footer
//   src/wp/{header,footer}-{fr,en}.html
//   public/wp-content, public/wp-includes   assets, same paths as the live site
//   public/assets/inline/*.js  inline WordPress scripts, de-duplicated by hash
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import * as cheerio from 'cheerio';

const ORIGIN = 'https://cliniquesantevoyage.com';
const ROOT = path.resolve(import.meta.dirname, '../..');
const CACHE = path.join(ROOT, '.wp-cache');
const OUT = path.join(ROOT, 'src/wp');
const PUBLIC = path.join(ROOT, 'public');
const REFRESH = process.argv.includes('--refresh');
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36';

// Never crawl these: WordPress internals, feeds, old drafts, the Imunify360 bot trap.
const SKIP_ROUTE = /^\/(wp-admin|wp-json|wp-login|feed|cdn-cgi|comments|xmlrpc)|\/feed\/$|-old\/$|imunify-bot-check|\?|\/wp-content\/|\/wp-includes\//;

// Third-party scripts are re-added by src/components/ThirdParty.astro (production only).
const FLYING_PRESS = /data-loading-method|flying-?press/i;
const THIRD_PARTY = /googletagmanager|gtm\.start|gtag\(|concord\.tech|crisp|cdn-cgi|email-decode/i;

// Posts that reprint third-party news articles: the article text is not imported,
// the page links to the original instead.
const REPRINTED_ARTICLES = [
  '/gare-a-la-rougeole-en-france-et-en-italie/',
  '/en/beware-of-measles-in-france-and-italy/',
  '/terre-neuve-facebook-ferme-une-page-antivaccination-utilisant-limage-dune-fillette-decedee/',
  '/en/newfoundland-facebook-closes-anti-vaccination-page-using-image-of-dead-girl/',
  '/fils-danti-vaccins-ce-survivant-de-la-rougeole-a-un-message-pour-vous/',
  '/en/son-of-an-anti-vaccine-this-measles-survivor-has-a-message-for-you/',
];
const NEWS_SOURCE = /https?:\/\/(www\.)?(lapresse\.ca|tvanouvelles\.ca)\/[^"'\s]+/;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const sha = (s) => crypto.createHash('sha1').update(s).digest('hex').slice(0, 12);
const write = (file, data) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, data);
};

async function get(url, asText = true) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': UA }, redirect: 'follow' });
      if (res.status === 404) return { status: 404, url: res.url };
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return { status: res.status, url: res.url, body: asText ? await res.text() : Buffer.from(await res.arrayBuffer()) };
    } catch (err) {
      if (attempt === 2) return { status: 0, url, error: err.message };
      await sleep(1000 * (attempt + 1));
    }
  }
}

// --- URL helpers -----------------------------------------------------------

function toRoute(href) {
  try {
    const u = new URL(href, ORIGIN);
    if (u.hostname.replace(/^www\./, '') !== 'cliniquesantevoyage.com') return null;
    let p = decodeURI(u.pathname);
    if (!p.endsWith('/') && !path.extname(p)) p += '/';
    return p;
  } catch {
    return null;
  }
}

const cacheFile = (route) => path.join(CACHE, (route === '/' ? 'index' : route.slice(1, -1).replaceAll('/', '__')) + '.html');

// Rewrites absolute links to the live site into root-relative ones (also inside JSON / escaped JS).
function localize(s) {
  return s
    .replace(/https?:(\\*\/)\1(www\.)?cliniquesantevoyage\.com(?=\\*\/|["'\s)<&]|$)/g, '')
    .replace(/(["'(\s])\/\/(www\.)?cliniquesantevoyage\.com(?=\/)/g, '$1');
}

// Cloudflare "email protection" obfuscation.
function decodeCfEmail(hex) {
  const key = parseInt(hex.slice(0, 2), 16);
  let out = '';
  for (let i = 2; i < hex.length; i += 2) out += String.fromCharCode(parseInt(hex.slice(i, i + 2), 16) ^ key);
  return out;
}

// --- 1. Crawl ----------------------------------------------------------------

async function sitemapRoutes() {
  const index = await get(`${ORIGIN}/sitemap_index.xml`);
  const maps = [...index.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const routes = [];
  for (const map of maps) {
    const xml = (await get(map)).body ?? '';
    for (const [, loc] of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      const r = toRoute(loc);
      if (r && !SKIP_ROUTE.test(r)) routes.push(r);
    }
  }
  return routes;
}

async function crawl() {
  fs.mkdirSync(CACHE, { recursive: true });
  const queue = [...new Set(await sitemapRoutes())];
  const seen = new Set(queue);
  const pages = new Map(); // route -> html
  const missing = [];
  while (queue.length) {
    const route = queue.shift();
    const file = cacheFile(route);
    let html;
    if (!REFRESH && fs.existsSync(file)) {
      html = fs.readFileSync(file, 'utf8');
    } else {
      const res = await get(ORIGIN + encodeURI(route));
      await sleep(250);
      if (!res.body) {
        missing.push(`${route} (${res.status || res.error})`);
        continue;
      }
      // Redirected elsewhere on the site: follow the target instead.
      const finalRoute = toRoute(res.url);
      if (finalRoute && finalRoute !== route) {
        if (!seen.has(finalRoute)) {
          seen.add(finalRoute);
          queue.push(finalRoute);
        }
        redirects[route] = finalRoute;
        continue;
      }
      html = res.body;
      write(file, html);
    }
    pages.set(route, html);
    // Follow every internal link so pages missing from the sitemap are included too.
    for (const [, href] of html.matchAll(/href="([^"#]+)/g)) {
      const r = toRoute(href.replaceAll('&#038;', '&').replaceAll('&amp;', '&'));
      if (r && !SKIP_ROUTE.test(r) && !seen.has(r)) {
        seen.add(r);
        queue.push(r);
      }
    }
  }
  console.log(`crawled ${pages.size} pages, ${Object.keys(redirects).length} redirects`);
  if (missing.length) console.log(`not found:\n  ${missing.join('\n  ')}`);
  return pages;
}

const redirects = {};

// --- 2. Convert ------------------------------------------------------------------

const assets = new Set(); // root-relative asset paths to download
const inlineScripts = new Map(); // hash -> code

function collectAssets(s) {
  s = s.replace(/\\+\//g, '/'); // URLs inside (possibly double-encoded) JSON, e.g. Elementor data-settings
  for (const [, p] of s.matchAll(/(\/wp-(?:content|includes)\/[^"'\s)<>\\,]+?\.[a-z0-9]{2,5})(?=[?"'\s)<>\\,#&]|$)/gi)) {
    assets.add(decodeURI(p));
  }
}

// Strips per-page menu state so the header/footer can be shared by every page.
function normalizeChrome(html) {
  return html
    .replace(/\s(current-menu-item|current_page_item|current-menu-ancestor|current-menu-parent|current_page_parent|current_page_ancestor|current-page-ancestor|page_item|page-item-\d+|active)(?=[\s"])/g, '')
    .replace(/\saria-current="page"/g, '')
    // Elementor form fields recording the current page.
    .replace(/(name="referer_title" value=")[^"]*"/g, '$1"')
    .replace(/\s*<input type="hidden" name="queried_id" value="[^"]*">/g, '')
    .replace(/ fetchpriority="high"/g, '');
}

function convert(route, html) {
  const $ = cheerio.load(html, { decodeEntities: false });

  // Hidden honeypot link injected by the host's Imunify360 firewall.
  $('a[href*="imunify-bot-check"]').remove();

  // Emails hidden by Cloudflare.
  $('a[href*="/cdn-cgi/l/email-protection#"]').each((_, el) => {
    const hex = $(el).attr('href').split('#')[1];
    $(el).attr('href', `mailto:${decodeCfEmail(hex)}`);
  });
  $('[data-cfemail]').each((_, el) => {
    const email = decodeCfEmail($(el).attr('data-cfemail'));
    if (el.tagName === 'a') $(el).attr('href', `mailto:${email}`).removeAttr('data-cfemail').removeClass('__cf_email__').text(email);
    else $(el).replaceWith(email);
  });
  // FlyingPress rendering hints differ on every page; they are not part of the design.
  $('[style*="content-visibility"]').each((_, el) => {
    const style = $(el).attr('style').replace(/content-visibility:[^;]*;?|contain-intrinsic-size:[^;]*;?/g, '').trim();
    style ? $(el).attr('style', style) : $(el).removeAttr('style');
  });

  const lang = ($('html').attr('lang') || 'fr').startsWith('en') ? 'en' : 'fr';

  if (REPRINTED_ARTICLES.includes(route)) {
    const source = (html.match(NEWS_SOURCE) || [])[0]?.replaceAll('&amp;', '&');
    const note = lang === 'fr'
      ? `<p>Cet article est une reprise d’un article de presse. <a href="${source}" target="_blank" rel="noopener">Lire l’article original</a>.</p>`
      : `<p>This post shared a news article. <a href="${source}" target="_blank" rel="noopener">Read the original article</a>.</p>`;
    $('[data-widget_type^="theme-post-content"] .elementor-widget-container').first().html(note);
    $('[data-elementor-type="wp-post"]').html(`<div class="elementor-widget-container">${note}</div>`);
  }
  const htmlLang = $('html').attr('lang') || (lang === 'fr' ? 'fr-CA' : 'en-CA');
  const title = $('title').first().text();

  // SEO tags keep absolute production URLs.
  const head = [];
  $('head link[rel="icon"], head link[rel="apple-touch-icon"], head meta[name="msapplication-TileImage"]').each((_, el) => {
    const html = localize($.html(el));
    collectAssets(html);
    head.push(html);
  });
  $('head meta[name="description"], head meta[name="robots"], head meta[property^="og:"], head meta[name^="twitter:"], head link[rel="canonical"], head link[rel="alternate"][hreflang], head script[type="application/ld+json"]').each((_, el) => {
    head.push($.html(el));
  });

  // Stylesheets and inline <style> blocks, in document order.
  const styles = [];
  $('link[rel="stylesheet"], style').each((_, el) => {
    if ($(el).attr('id') === 'flying-press-css') return; // critical-CSS copy of the stylesheets below
    if (el.tagName === 'link') {
      // FlyingPress defers stylesheets via data-href; load them directly.
      const href = localize($(el).attr('href') ?? $(el).attr('data-href') ?? '');
      if (!href) return;
      if (/^https?:/.test(href)) return; // external (e.g. Google Fonts) – none expected
      styles.push({ href, media: $(el).attr('media') || undefined });
      collectAssets(href);
    } else {
      const css = localize($(el).html());
      collectAssets(css);
      styles.push({ css, id: $(el).attr('id') || undefined });
    }
  });

  // Scripts, in document order: local files, inline code (stored as files), third party dropped.
  // All are emitted with `defer` at the end of <body>, which keeps their relative order.
  const scripts = [];
  $('script').each((_, el) => {
    const type = $(el).attr('type');
    if (type === 'application/ld+json' || (type && !/javascript|module/.test(type))) return;
    const src = $(el).attr('src') ?? $(el).attr('data-src'); // data-src: FlyingPress "load on interaction"
    let code = null;
    if (src?.startsWith('data:')) code = decodeURIComponent(src.slice(src.indexOf(',') + 1));
    else if (!src) code = $(el).html() ?? '';
    if (code !== null) {
      if (THIRD_PARTY.test(code) || FLYING_PRESS.test(code) || !code.trim()) return;
      code = localize(code);
      collectAssets(code);
      const hash = sha(code);
      inlineScripts.set(hash, code);
      scripts.push({ src: `/assets/inline/${hash}.js` });
    } else {
      if (THIRD_PARTY.test(src) || /^https?:\/\/(?!(www\.)?cliniquesantevoyage)/.test(src)) return;
      const local = localize(src);
      collectAssets(local);
      scripts.push({ src: local });
    }
  });
  $('script').not('[type="application/ld+json"]').remove();
  $('noscript').filter((_, el) => /googletagmanager/.test($(el).html())).remove();

  // Language switcher target for this page.
  const otherLang = lang === 'fr' ? 'en' : 'fr';
  const altHref = $(`.wpml-ls-item-${otherLang} a`).first().attr('href');
  const alt = altHref ? toRoute(altHref) : null;

  const header = $('[data-elementor-type="header"]').first();
  const footer = $('[data-elementor-type="footer"]').first();
  let chrome = null;
  if (header.length && footer.length) {
    $(`.wpml-ls-item-${otherLang} a`).attr('href', '{{ALT_URL}}');
    chrome = {
      header: normalizeChrome(localize($.html(header))),
      footer: normalizeChrome(localize($.html(footer))),
    };
    header.replaceWith('<!--wp:header-->');
    footer.replaceWith('<!--wp:footer-->');
  }

  const body = localize($('body').html().trim());
  collectAssets(body);
  if (chrome) collectAssets(chrome.header + chrome.footer);

  return {
    page: { route, lang, htmlLang, title, alt, bodyClass: $('body').attr('class') || '', head, styles, scripts },
    body,
    chrome,
  };
}

// --- 3. Download assets (and assets referenced from CSS) -----------------------------

async function downloadAssets() {
  const queue = [...assets];
  const done = new Set();
  const failed = [];
  let downloaded = 0;
  const worker = async () => {
    while (queue.length) {
      const p = queue.shift();
      if (done.has(p)) continue;
      done.add(p);
      const file = path.join(PUBLIC, p);
      let css = null;
      if (fs.existsSync(file)) {
        if (p.endsWith('.css')) css = fs.readFileSync(file, 'utf8');
      } else {
        const res = await get(ORIGIN + encodeURI(p), !!p.match(/\.css$/));
        if (!res.body) {
          failed.push(`${p} (${res.status || res.error})`);
          continue;
        }
        if (p.endsWith('.css')) {
          css = localize(res.body);
          write(file, css);
        } else {
          write(file, res.body);
        }
        downloaded++;
      }
      // Follow url(...) and @import inside stylesheets.
      if (css) {
        for (const [, ref] of css.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)|@import\s+['"]([^'"]+)['"]/g)) {
          if (!ref || /^(data:|https?:|#)/.test(ref)) continue;
          const resolved = decodeURI(new URL(ref, ORIGIN + p).pathname);
          if (!done.has(resolved)) queue.push(resolved);
        }
      }
    }
  };
  await Promise.all(Array.from({ length: 6 }, worker));
  console.log(`assets: ${done.size} referenced, ${downloaded} downloaded`);
  if (failed.length) console.log(`assets not found (${failed.length}):\n  ${failed.slice(0, 50).join('\n  ')}`);
}

// --- main ----------------------------------------------------------------------

const pages = await crawl();
fs.rmSync(path.join(OUT, 'html'), { recursive: true, force: true });
const manifest = [];
const chromeByLang = {};
for (const [route, html] of pages) {
  const { page, body, chrome } = convert(route, html);
  page.file = sha(route) + '.html';
  write(path.join(OUT, 'html', page.file), body);
  manifest.push(page);
  if (chrome) {
    const key = page.lang;
    const sig = sha(chrome.header) + sha(chrome.footer);
    (chromeByLang[key] ??= {})[sig] ??= { chrome, routes: [] };
    chromeByLang[key][sig].routes.push(route);
  }
}

// The most common header/footer per language becomes the shared one.
for (const [lang, variants] of Object.entries(chromeByLang)) {
  const sorted = Object.values(variants).sort((a, b) => b.routes.length - a.routes.length);
  write(path.join(OUT, `header-${lang}.html`), sorted[0].chrome.header);
  write(path.join(OUT, `footer-${lang}.html`), sorted[0].chrome.footer);
  if (sorted.length > 1) {
    console.log(`${lang}: ${sorted.length} header/footer variants; using the one on ${sorted[0].routes.length} pages. Others on:`);
    for (const v of sorted.slice(1)) console.log(`  ${v.routes.slice(0, 5).join(', ')}${v.routes.length > 5 ? ' …' : ''}`);
  }
}

manifest.sort((a, b) => a.route.localeCompare(b.route));
write(path.join(OUT, 'pages.json'), JSON.stringify(manifest, null, 1));
write(path.join(OUT, 'redirects.json'), JSON.stringify(redirects, null, 1));

fs.rmSync(path.join(PUBLIC, 'assets/inline'), { recursive: true, force: true });
for (const [hash, code] of inlineScripts) write(path.join(PUBLIC, 'assets/inline', `${hash}.js`), code);

await downloadAssets();

// Elementor loads some scripts on demand (sliders, forms, popups…); fetch every chunk its loaders know.
function chunkAssets() {
  const found = [];
  const scan = (dir, fn) => {
    if (!fs.existsSync(dir)) return;
    for (const f of fs.readdirSync(dir, { recursive: true })) if (f.endsWith('.js')) fn(fs.readFileSync(path.join(dir, f), 'utf8'));
  };
  const free = '/wp-content/plugins/elementor/assets/js/';
  const pro = '/wp-content/plugins/elementor-pro/assets/js/';
  const scanAll = (code) => {
    for (const [, name] of code.matchAll(/__elementorLoadChunk\(`([a-z0-9-]+)`\)/g)) found.push(`${free}chunks/${name}.min.js`);
    for (const [file] of code.matchAll(/[a-z0-9-]+\.[a-f0-9]{20}\.bundle\.min\.js/g)) found.push(pro + file);
  };
  scan(path.join(PUBLIC, free), scanAll);
  scan(path.join(PUBLIC, pro), scanAll);
  return found.filter((p) => !assets.has(p));
}
for (let pending = chunkAssets(); pending.length; pending = chunkAssets()) {
  pending.forEach((p) => assets.add(p));
  await downloadAssets();
}
console.log(`wrote ${manifest.length} pages`);
