// Applies src/data/seo.ts to the SEO tags kept from the WordPress pages (meta, Open Graph, Yoast JSON-LD).
import * as cheerio from 'cheerio';
import { seoFor } from '../data/seo';

const attr = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

export function withSeo(route: string, title: string, head: string[]): { title: string; head: string[] } {
  const seo = seoFor(route);
  if (!seo) return { title, head };
  const description = seo.description;
  let hasDescription = false;

  const out = head.map((tag) => {
    if (description && /^<meta name="description"/.test(tag)) {
      hasDescription = true;
      return `<meta name="description" content="${attr(description)}">`;
    }
    if (description && /^<meta property="og:description"/.test(tag)) return `<meta property="og:description" content="${attr(description)}">`;
    if (/^<meta property="og:title"/.test(tag)) return `<meta property="og:title" content="${attr(seo.title)}">`;
    if (tag.includes('yoast-schema-graph')) {
      const json = tag.replace(/^<script[^>]*>/, '').replace(/<\/script>$/, '');
      try {
        const data = JSON.parse(json);
        for (const node of data['@graph'] ?? []) {
          if (node['@type'] !== 'WebPage' && !(Array.isArray(node['@type']) && node['@type'].includes('WebPage'))) continue;
          node.name = seo.title;
          if (description) node.description = description;
        }
        return `<script type="application/ld+json" class="yoast-schema-graph">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;
      } catch {
        return tag;
      }
    }
    return tag;
  });

  // Pages imported without a description (e.g. the Hib pages) get one.
  if (description && !hasDescription) out.unshift(`<meta name="description" content="${attr(description)}">`);
  return { title: seo.title, head: out };
}

/**
 * Body changes for imported pages: the hero heading becomes the page's only h1 (with the recommended text,
 * if any), and links to redirected pages point straight at their target.
 */
export function withSeoBody(html: string, route: string, redirects: Record<string, string>): string {
  let out = html;
  for (const [from, to] of Object.entries(redirects)) out = out.split(`href="${from}"`).join(`href="${to}"`);

  // There are four clinics; the client confirmed there is no Pointe-Claire (West Island) clinic any more.
  // Dated blog posts that mention it are left as written.
  if (out.includes('Pointe-Claire')) {
    const $$ = cheerio.load(out, null, false);
    $$('.elementor-icon-list-item, option')
      .filter((_, el) => /^Pointe-Claire\b/.test($$(el).text().trim()))
      .remove();
    out = $$.html();
  }

  const seo = seoFor(route);
  if (!seo) return out;
  const $ = cheerio.load(out, null, false);
  if ($('h1').length) return out;
  // The first heading shown on desktop (Elementor keeps hidden copies of some heroes).
  const hero = $('.elementor-heading-title')
    .filter((_, el) => !$(el).parents('.elementor-hidden-desktop').length)
    .first();
  if (!hero.length) return out;
  if (seo.h1) hero.text(seo.h1);
  (hero.get(0) as unknown as { name: string }).name = 'h1';
  return $.html();
}
