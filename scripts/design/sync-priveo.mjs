// Imports the Priveo design system from a checkout of web-priveo-sante (dev.priveosante.com):
//   src/styles/priveo/tokens.css   every design token (colors, spacing, type scale, radii, shadows…)
//   src/styles/priveo/fonts.css    @font-face rules; the font files go to public/assets/fonts/
//   src/styles/priveo/header.css   the header's rules, picked out of Priveo's stylesheets
//   src/styles/priveo/sections.css the page sections this site reuses (clinic pages), picked out the same way
//   public/assets/priveo/header.js the header's scripts, verbatim
// Never edit those files: change Priveo's sources and run this again.
//   node scripts/design/sync-priveo.mjs            (expects ../web-priveo-sante)
//   PRIVEO_REPO=/path/to/web-priveo-sante node scripts/design/sync-priveo.mjs
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import postcss from 'postcss'; // ships with Astro (Vite)

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const PRIVEO = path.resolve(ROOT, process.env.PRIVEO_REPO || '../web-priveo-sante');
const SITE = path.join(PRIVEO, 'site');
const OUT = path.join(ROOT, 'src/styles/priveo');

// Priveo's stylesheets in the order its pages load them (site/src/layouts/Base.astro), icon fonts and sliders left out.
const STACK = [
  'public/assets/layout.css',
  'public/assets/tokens.css',
  'public/assets/default-styles.css',
  'public/assets/header-styles.css',
  'public/assets/content.css',
  'public/assets/global-classes.css',
  'public/assets/shell.css',
  'src/styles/theme.css',
  'public/assets/components.css',
  'public/front/site.css',
];
const SCRIPTS = ['header_js.js', 'floating-header.js', 'site-interactions.js'];
const FONT_FAMILIES = ['Lora', 'Plus Jakarta Sans'];

// Priveo sets the root font size to 62.5% (1rem = 10px); this site keeps the browser's 16px.
const REM = 0.625;
const toRem = (value) => value.replace(/(-?\d*\.?\d+)rem\b/g, (_, n) => `${+(n * REM).toFixed(4)}rem`);

// ---- Parts -------------------------------------------------------------------------------------------------
// Each part is a piece of Priveo's markup this site reuses: its rules are picked out of Priveo's stylesheets
// (only those whose classes all exist in that markup) and scoped to where the part sits on this site.

// Header. Where its elements live: the header itself and the copy of its buttons the script puts at the
// bottom of the mobile menu. Wrapped in :where() so scoping a rule doesn't change its specificity.
const SCOPE = ':where(#site-header, .breakin-container)';

// Classes and ids in src/components/Header.astro, plus the states the scripts set. Keep in sync with it.
const CLASSES = new Set(
  `ui-sticky header header__container header__logo header__nav header__menu header__menu-layout header__items
  header__toggle header__nav-link header__dropdown header__dropdown-layout header__dropdown-layout-2
  header__dropdown-content header__dropdown-content-layout header__dropdown-content-layout-2
  header__dropdown-content-layout-3 header__dropdown-grid header__dropdown-column header__dropdown-title
  header__dropdown-title--redundant header__nav-menu header__panel header__panel--2 header__panel--3
  header__panel-intro header__panel-title header__panel-text header__panel-link header__actions header__lang
  header__lang-layout header__language-link header__action-link-layout header__media-vector-layout
  navigation navigation__items navigation__item navigation__toggle navigation__toggle-icon
  navigation__toggle--squeeze navigation__dropdown navigation__submenu navigation__submenu-toggle
  navigation__link-group navigation__links toggle-animation-wrap toggle-animation-inner
  layout-element layout-section layout-container layout-box layout-stack typography-heading action-link
  embedded-widget media-vector ui-nav-menu-wrapper ui-menu-item never btn btn--primary
  is-widget-open open is-active active menu-open pv-floating breakin-container breakin-active header-overlay`.split(/\s+/),
);
const IDS = new Set(
  ['site-header', 'header__inner'].concat(
    'aseiog dsyywj acbiak eslzdw rrzhea xrcgca sypygv jztazb wghqdj jgxisu phfdzz jueqzb kkoqyg'.split(' ').map((id) => `layout-node-${id}`),
  ),
);
// A selector with one of these can only match in or around the header, so it needs no scope.
const HOOK = /\.header(?![a-zA-Z0-9])|\.navigation|\.toggle-animation|\.breakin-|\.menu-open|\.pv-floating|#site-header|#header__inner|#layout-node-/;
// Elements the header is made of: base rules for anything else are left out.
const TAGS = new Set('a button ul li nav p span div svg path img i header'.split(' '));
// Text settings Priveo puts on <body>; here they go on the header.
const BODY_TEXT = /^(font|line-height|color$|letter-spacing|text-wrap|-webkit-font-smoothing|-moz-osx-font-smoothing)/;

const HEADER = { scope: SCOPE, classes: CLASSES, ids: IDS, hook: HOOK, tags: TAGS };

// Sections: Priveo's page sections, inside an element with the class `pv` (src/components/priveo/). Classes in
// those components, plus the states their script sets. Keep in sync with them.
const SECTIONS = {
  scope: ':where(.pv)',
  classes: new Set(
    `layout-element layout-section layout-container layout-box layout-stack typography-heading text-inline text-flow
    content-body rich-text font-secondary heading-2xl media-image css-filter size-large
    action-button button-base btn btn--primary btn--outline btn--ghost btn--card
    hero hero--sub hero-sub__grid hero-sub__content hero__tagline hero-sub__title hero-sub__description hero__actions
    hero-sub__media hero-sub__image
    section section--compact container section-header section-header--center section-header--left
    section-header__tagline section-header__title section-header__description
    locations locations__container clinic-map clinic-map__grid clinic-map__map clinic-map__canvas clinic-map__cards
    clinic-map__card clinic-map__media clinic-map__photo clinic-map__status clinic-map__body clinic-map__name
    clinic-map__address clinic-map__phone clinic-map__label clinic-map__chips clinic-map__ctas clinic-map__cities
    clinic-map__city clinic-map__pin clinic-map__pin--below clinic-map__tag is-active
    callout-band callout-band--cool callout-band__card callout-band__main badge badge--pill badge-glass
    callout-band__badge callout-band__title callout-band__text callout-band__aside callout-band__aside-title
    callout-band__list callout-band__item callout-band__check
    booking-steps steps-section__inner booking-steps__track booking-steps__step booking-steps__num
    booking-steps__title booking-steps__text
    clinic-intro clinic-intro__grid clinic-intro__aside clinic-intro__title clinic-intro__body
    card-grid card-grid--3 card-grid--4 card card--elevated card--service card__content card__title card__media card__image
    card__text expand-click contact-coords contact-coords__item contact-coords__icon contact-coords__text
    contact-coords__label contact-coords__value contact-coords__link contact-coords__map price-card__pane
    price-card__row price-card__info price-card__name price-card__duration amenities-grid amenities-tile
    amenities-tile__icon amenities-tile__label amenities-card__cta pv`.split(/\s+/),
  ),
  ids: new Set(),
  hook: null,
  tags: new Set('a button ul ol li p span div h1 h2 h3 img i address section article aside svg path'.split(' ')),
};

/** Splits `selector` around its `:name(...)` groups: the text outside them, and what each one holds. */
function groups(selector, names) {
  const re = new RegExp(`:(?:${names})\\(`, 'g');
  const inner = [];
  let outer = '';
  let from = 0;
  for (let m; (m = re.exec(selector)); ) {
    let depth = 1;
    let i = re.lastIndex;
    while (i < selector.length && depth) depth += selector[i] === '(' ? 1 : selector[i] === ')' ? -1 : 0, i++;
    outer += selector.slice(from, m.index);
    inner.push(selector.slice(re.lastIndex, i - 1));
    from = re.lastIndex = i;
  }
  return { outer: outer + selector.slice(from), inner };
}

/** The alternatives of a selector list, split on its top-level commas. */
function alternatives(list) {
  const out = [''];
  let depth = 0;
  for (const c of list) {
    depth += c === '(' ? 1 : c === ')' ? -1 : 0;
    if (c === ',' && !depth) out.push('');
    else out[out.length - 1] += c;
  }
  return out;
}

/** Whether every class and id the selector needs exists in the part (`:not()` needs none). */
function canMatch(part, selector) {
  const choice = groups(groups(selector.replace(/\[[^\]]*\]/g, ''), 'not').outer, 'is|where');
  if (!choice.inner.every((list) => alternatives(list).some((alt) => canMatch(part, alt)))) return false;
  for (const [, name] of choice.outer.matchAll(/\.(-?[_a-zA-Z][\w-]*)/g)) if (!part.classes.has(name)) return false;
  for (const [, name] of choice.outer.matchAll(/#([\w-]+)/g)) if (!part.ids.has(name)) return false;
  return true;
}

/** A selector for the part, scoped where it could match elsewhere; null when it can't match the part. */
function partSelector(part, selector) {
  const SCOPE = part.scope;
  if (selector.includes('%') || !canMatch(part, selector)) return null;
  const plain = groups(selector.replace(/\[[^\]]*\]/g, ''), 'not').outer;
  if (part.hook?.test(selector)) return selector;
  if (/[.#]/.test(plain)) return `${SCOPE} ${selector}`;

  // Base rules on elements: only for the header's elements, and never the page's own.
  if (/\[type=|\[data-|placeholder|upload-button/.test(selector)) return null;
  const tags = [...selector.replace(/\[[^\]]*\]/g, '').replace(/:(?:where|is|not|has)\(/g, '(').replace(/::?[\w-]+/g, '').matchAll(/(?:^|[\s>+~,(])([a-z][a-z0-9]*)/g)].map((m) => m[1]);
  if (tags.some((tag) => !part.tags.has(tag))) return null;
  // A lone element or `*` (and its ::before/::after) also covers the header element itself.
  const lone = /^(\*|[a-z][a-z0-9]*)?(::?(?:before|after))?$/.exec(selector.trim());
  const self = lone && `${lone[1] && lone[1] !== '*' ? lone[1] : ''}${SCOPE}${lone[2] ?? ''}`;
  return `${SCOPE} ${selector}${self ? `, ${self}` : ''}`;
}

function buildPart(part) {
  const { scope: SCOPE, hook: HOOK } = part;
  const layers = { 'priveo-foundations': postcss.root(), priveo: postcss.root() };
  const rootVars = [];
  const keyframes = new Map();
  let last = {};

  const add = (layer, wrappers, rule) => {
    const key = `${layer}|${wrappers.map((w) => `${w.name} ${w.params}`).join('|')}`;
    if (last.key !== key) {
      let parent = layers[layer];
      for (const w of wrappers) parent = parent.append(postcss.atRule({ name: w.name, params: w.params })).last;
      last = { key, parent };
    }
    last.parent.append(rule);
  };

  for (const file of STACK) {
    const css = postcss.parse(fs.readFileSync(path.join(SITE, file), 'utf8'), { from: file });
    css.walkAtRules(/keyframes$/, (at) => keyframes.set(at.params, at));
    css.walkRules((rule) => {
      const wrappers = [];
      let layer = 'priveo';
      for (let p = rule.parent; p.type === 'atrule'; p = p.parent) {
        if (/keyframes$/.test(p.name)) return;
        if (p.name === 'layer') layer = 'priveo-foundations';
        else wrappers.unshift(p);
      }

      if (rule.selector === ':root') {
        if (file !== 'public/assets/tokens.css') rule.walkDecls(/^--/, (decl) => rootVars.push(decl));
        return;
      }
      if (rule.selector === 'body') {
        const text = rule.clone();
        text.selector = SCOPE;
        text.walkDecls((decl) => {
          if (!BODY_TEXT.test(decl.prop)) decl.remove();
        });
        if (text.nodes.length) add(layer, wrappers, text);
        return;
      }
      const selectors = rule.selectors.filter((s) => !/^(html|body|:root)(?![\w-])/.test(s) || HOOK?.test(s)).map((s) => partSelector(part, s)).filter(Boolean);
      if (!selectors.length) return;
      const kept = rule.clone();
      kept.selector = selectors.join(', ');
      add(layer, wrappers, kept);
    });
  }

  // Root variables and animations: only the ones the header's rules use.
  const body = Object.values(layers).map(String).join('\n');
  const used = (name) => new RegExp(`var\\(\\s*${name}\\s*[,)]`).test(body);
  const vars = postcss.rule({ selector: ':root' });
  const seen = new Set(tokenNames());
  for (const decl of rootVars.reverse()) if (!seen.has(decl.prop) && used(decl.prop)) seen.add(decl.prop), vars.prepend(decl.clone());
  const animations = [...keyframes].filter(([name]) => new RegExp(`animation[^;}]*[\\s:,]${name}\\b`).test(body)).map(([, at]) => at);

  const out = postcss.root();
  out.append(postcss.atRule({ name: 'layer', params: 'priveo-foundations, priveo' }));
  if (vars.nodes.length) out.append(vars);
  for (const [name, root] of Object.entries(layers)) out.append(postcss.atRule({ name: 'layer', params: name, nodes: [...animations.splice(0), ...root.nodes] }));
  out.walkDecls((decl) => {
    // Priveo serves its stylesheets as they are; here they're bundled, and the bundler rejects a broken declaration.
    if (!decl.value.trim() || /[:;]/.test(decl.raws.before ?? '')) decl.remove();
    else decl.value = toRem(decl.value);
  });
  return out.toString();
}

// ---- Tokens and fonts --------------------------------------------------------------------------------------
function tokenDecls() {
  const decls = [];
  postcss.parse(fs.readFileSync(path.join(SITE, 'public/assets/tokens.css'), 'utf8')).walkRules(':root', (rule) => rule.walkDecls(/^--/, (decl) => decls.push(decl)));
  return decls;
}
const tokenNames = () => tokenDecls().map((decl) => decl.prop);

function buildTokens() {
  const tokens = postcss.rule({ selector: ':root' });
  for (const decl of tokenDecls()) tokens.append(decl.clone({ value: toRem(decl.value), raws: { before: '\n  ', between: ': ' } }));
  return `${tokens}\n`;
}

function buildFonts() {
  const faces = [];
  const dir = path.join(ROOT, 'public/assets/fonts');
  fs.mkdirSync(dir, { recursive: true });
  for (const file of ['public/assets/fonts.css', 'src/styles/theme.css']) {
    postcss.parse(fs.readFileSync(path.join(SITE, file), 'utf8')).walkAtRules('font-face', (face) => {
      const family = face.nodes.find((d) => d.prop === 'font-family')?.value.replace(/["']/g, '');
      if (!FONT_FAMILIES.includes(family)) return;
      const [, url] = /url\(([^)]+)\)/.exec(face.toString());
      fs.copyFileSync(path.join(SITE, 'public', url), path.join(dir, path.basename(url)));
      faces.push(face.toString().replace(/;?\s*}$/, '}'));
    });
  }
  return `${faces.join('\n')}\n`;
}

// ---- Write -------------------------------------------------------------------------------------------------
const git = (...args) => execFileSync('git', ['-C', PRIVEO, ...args], { encoding: 'utf8' }).trim();
const source = `web-priveo-sante@${git('rev-parse', '--short', 'HEAD')}${git('status', '--porcelain', '--', 'site', 'components') ? ' (with local changes)' : ''}`;
const banner = (what) => `/* ${what}. Generated by scripts/design/sync-priveo.mjs from ${source}: do not edit. */\n`;

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'tokens.css'), banner("Priveo's design tokens (rem values converted to a 16px root)") + buildTokens());
fs.writeFileSync(path.join(OUT, 'fonts.css'), banner("Priveo's self-hosted fonts") + buildFonts());
fs.writeFileSync(path.join(OUT, 'header.css'), banner("Priveo's header styles, in its own cascade layers") + buildPart(HEADER));
fs.writeFileSync(path.join(OUT, 'sections.css'), banner("Priveo's page sections reused here (clinic pages), in its own cascade layers") + buildPart(SECTIONS));

const js = path.join(ROOT, 'public/assets/priveo');
fs.mkdirSync(js, { recursive: true });
fs.writeFileSync(
  path.join(js, 'header.js'),
  banner("Priveo's header scripts") + SCRIPTS.map((f) => `/* ---- ${f} ---- */\n${fs.readFileSync(path.join(SITE, 'public/assets/js', f), 'utf8').trim()}\n`).join('\n'),
);

for (const f of ['tokens.css', 'fonts.css', 'header.css', 'sections.css']) console.log(`src/styles/priveo/${f}  ${(fs.statSync(path.join(OUT, f)).size / 1024).toFixed(1)} kB`);
console.log(`public/assets/priveo/header.js  ${(fs.statSync(path.join(js, 'header.js')).size / 1024).toFixed(1)} kB`);
console.log(`from ${source}`);
