// Health alerts for travellers: the outbreaks the INSPQ marks as ongoing (« Éclosion en cours » /
// "Ongoing outbreak") in our country data (src/data/countries/*.json). Nothing is written by hand: the
// disease name is the row's name, or the name the INSPQ puts before the outbreak (« Virus Nipah : … »),
// and each alert links to its row on the country page. Newest INSPQ update first.
import type { Lang } from '../data/site';
import { countries, countryPath, type Country, type CountryItem } from './countries';

export interface Alert {
  disease: Record<Lang, string>;
  country: Country;
  rowId: string;
  updated: string;
  href: Record<Lang, string>;
}

const MARK: Record<Lang, RegExp> = { fr: /(?<!aucune )éclosion en cours/i, en: /(?<!no )ongoing outbreak/i };

const text = (html: string) => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
// The paragraphs and list items that announce an ongoing outbreak.
const segments = (html: string, lang: Lang) =>
  html
    .split(/<\/?(?:p|li|ul)>/)
    .map(text)
    .filter((s) => MARK[lang].test(s));
// « Virus Nipah : éclosion en cours… » names its disease; « Éclosion en cours (2026). » uses the row's.
const nameOf = (segment: string, row: CountryItem, lang: Lang) => {
  const m = segment.match(lang === 'fr' ? /^([^:]{2,60}?)\s*:\s*éclosion en cours/i : /^([^:]{2,60}?):\s*ongoing outbreak/i);
  return m ? m[1] : row.name[lang];
};

export const alerts: Alert[] = countries
  .flatMap((country) =>
    [...country.diseases, ...country.otherRisks].flatMap((row) => {
      const fr = segments(row.text.fr, 'fr');
      const en = segments(row.text.en, 'en');
      if (fr.length !== en.length) throw new Error(`alerts: ${country.slug}/${row.id} has ${fr.length} FR and ${en.length} EN outbreaks`);
      return fr.map((s, i) => ({
        disease: { fr: nameOf(s, row, 'fr'), en: nameOf(en[i], row, 'en') },
        country,
        rowId: row.id,
        updated: country.inspq.updated,
        href: { fr: `${countryPath(country, 'fr')}#risque-${row.id}`, en: `${countryPath(country, 'en')}#risque-${row.id}` },
      }));
    }),
  )
  .sort((a, b) => b.updated.localeCompare(a.updated) || a.country.name.fr.localeCompare(b.country.name.fr, 'fr'));
