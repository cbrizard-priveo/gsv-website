// Marks parts of the imported Elementor markup that the theme restyles (see src/styles/theme.css).
import * as cheerio from 'cheerio';

const CHROME = new Set(['header', 'footer', 'popup']);

/**
 * Tags the page-title banner: the first section shown on desktop in the page's main Elementor
 * document that has a background overlay. Templates for posts and vaccines get the light variant.
 */
export function themeBody(html: string, route: string): string {
  const $ = cheerio.load(html, null, false);
  const doc = $('[data-elementor-type]')
    .filter((_, el) => !CHROME.has($(el).attr('data-elementor-type') ?? '') && !$(el).parents('[data-elementor-type]').length)
    .first();
  const hero = doc
    .children('.elementor-section, .e-con')
    .filter((_, el) => !$(el).hasClass('elementor-hidden-desktop'))
    .first()
    .filter((_, el) => $(el).children('.elementor-background-overlay').length > 0);
  if (!hero.length) return html;

  const variant = route === '/' || route === '/en/' ? 'home' : doc.attr('data-elementor-type') === 'single-post' ? 'light' : 'photo';
  hero.addClass(`gsv-hero gsv-hero--${variant}`);
  return $.html();
}
