// Vaccine pages: content pulled from the imported WordPress pages, cleaned for the rebuilt template.
import * as cheerio from 'cheerio';
import pages from '../wp/pages.json';
import type { WpPageData } from '../layouts/WpPage.astro';
import type { Lang } from '../data/site';

export interface Vaccine {
  page: WpPageData;
  title: string;
  /** Short label for lists, e.g. "Rage" for "Vaccination Rage". */
  name: string;
  image: string;
  lede: string;
  body: string;
  source: string | null;
}

const bodies = import.meta.glob<string>('../wp/html/*.html', { query: '?raw', import: 'default' });

const FALLBACK_IMAGE = '/images/home/vaccination.jpg';
// Pages whose text comes from another page. /vaccination/rage-2/ holds the updated rabies text
// (INSPQ 2025), chosen by the client over the 2019 Santé Canada text; its own title, image and
// meta description were copied from the hepatitis A page, so only its text is used. It redirects
// to /vaccination/rage/ (astro.config.mjs).
const TEXT_FROM: Record<string, string> = { '/vaccination/rage/': '/vaccination/rage-2/' };
const TEXT_ONLY = new Set(Object.values(TEXT_FROM));

const allPages = pages as WpPageData[];
const vaccinePages = allPages.filter((p) => /\bsingle-vaccination\b/.test(p.bodyClass) && !TEXT_ONLY.has(p.route));

const shortName = (title: string) =>
  title
    .replace(/^vaccination\s+/i, '')
    .replace(/\s+vaccination$/i, '')
    .replace(/^./, (c) => c.toUpperCase());

export function vaccineList(lang: Lang): { route: string; name: string }[] {
  return vaccinePages
    .filter((p) => p.lang === lang)
    .map((p) => ({ route: p.route, name: shortName(p.title.replace(/\s*\|\s*Groupe Santé Voyage$/, '')) }))
    .sort((a, b) => a.name.localeCompare(b.name, lang));
}

/** Every vaccine page, both languages. */
export const vaccineRoutes = vaccinePages.map((p) => p.route);

export function vaccinePage(route: string): WpPageData | undefined {
  return vaccinePages.find((p) => p.route === route);
}

export async function vaccine(page: WpPageData): Promise<Vaccine> {
  let $ = cheerio.load(await bodies[`../wp/html/${page.file}`](), null, false);
  const title = $('[data-widget_type="theme-page-title.default"] .elementor-heading-title').first().text().trim();
  const image = $('[data-widget_type="theme-post-featured-image.default"] img').attr('src') ?? null;

  const textPage = TEXT_FROM[page.route] && allPages.find((p) => p.route === TEXT_FROM[page.route]);
  if (textPage) $ = cheerio.load(await bodies[`../wp/html/${textPage.file}`](), null, false);

  const content = $('[data-widget_type="theme-post-content.default"] .elementor-widget-container').first();
  content.find('span, div, font').each((_, el) => {
    $(el).replaceWith($(el).contents());
  });
  content.find('*').each((_, el) => {
    for (const name of Object.keys((el as unknown as { attribs: Record<string, string> }).attribs ?? {})) {
      if (!['href', 'src', 'alt'].includes(name)) $(el).removeAttr(name);
    }
  });
  content.find('p').each((_, el) => {
    if (!$(el).text().replace(/ /g, ' ').trim() && !$(el).find('img').length) $(el).remove();
  });

  const paragraphs = content.children('p');
  const sourceEl = paragraphs.filter((_, el) => /^\s*source\s*:/i.test($(el).text())).last();
  const source = sourceEl.length ? sourceEl.text().replace(/^\s*source\s*:\s*/i, '').trim() : null;
  sourceEl.remove();

  // The opening paragraph becomes the hero's intro, unless the text starts with something else
  // (e.g. a "Description" heading), which must stay with the paragraph it introduces.
  const first = content.children().first();
  const lede = first.is('p') ? (first.html()?.trim() ?? '') : '';
  if (lede) first.remove();

  return {
    page,
    title: title || page.title.replace(/\s*\|\s*Groupe Santé Voyage$/, ''),
    name: shortName(title),
    image: image ?? FALLBACK_IMAGE,
    lede,
    body: content.html()?.trim() ?? '',
    source,
  };
}
