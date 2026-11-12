// Country pages: data written from the INSPQ "Recommandations par pays" (src/data/countries/*.json).
// Each file states only facts from its INSPQ page, in our own wording, with the INSPQ update date.
import type { Lang } from '../data/site';

type Text = Record<Lang, string>;

export interface CountryItem {
  id: string;
  name: Text;
  /** HTML: p, ul, li, strong, em, a. */
  text: Text;
}

export interface Country {
  slug: string;
  slugEn: string;
  region: RegionId;
  name: Text;
  inspq: { url: string; updated: string; checked: string };
  diseases: CountryItem[];
  otherRisks: CountryItem[];
}

export type RegionId =
  | 'amerique-du-nord'
  | 'amerique-centrale'
  | 'amerique-du-sud'
  | 'caraibes'
  | 'europe'
  | 'afrique'
  | 'moyen-orient'
  | 'asie-centrale'
  | 'asie-du-sud'
  | 'asie-de-l-est'
  | 'asie-du-sud-est'
  | 'oceanie';

export const REGIONS: { id: RegionId; name: Text }[] = [
  { id: 'amerique-du-nord', name: { fr: 'Amérique du Nord', en: 'North America' } },
  { id: 'amerique-centrale', name: { fr: 'Amérique centrale', en: 'Central America' } },
  { id: 'amerique-du-sud', name: { fr: 'Amérique du Sud', en: 'South America' } },
  { id: 'caraibes', name: { fr: 'Caraïbes', en: 'Caribbean' } },
  { id: 'europe', name: { fr: 'Europe', en: 'Europe' } },
  { id: 'afrique', name: { fr: 'Afrique', en: 'Africa' } },
  { id: 'moyen-orient', name: { fr: 'Moyen-Orient', en: 'Middle East' } },
  { id: 'asie-centrale', name: { fr: 'Asie centrale et Caucase', en: 'Central Asia and the Caucasus' } },
  { id: 'asie-du-sud', name: { fr: 'Asie du Sud', en: 'South Asia' } },
  { id: 'asie-de-l-est', name: { fr: 'Asie de l’Est', en: 'East Asia' } },
  { id: 'asie-du-sud-est', name: { fr: 'Asie du Sud-Est', en: 'South-East Asia' } },
  { id: 'oceanie', name: { fr: 'Océanie', en: 'Oceania' } },
];

const files = import.meta.glob<Country>('../data/countries/*.json', { eager: true, import: 'default' });

export const countries: Country[] = Object.values(files).sort((a, b) => a.name.fr.localeCompare(b.name.fr, 'fr'));

export const countryPath = (c: Country, lang: Lang) => (lang === 'fr' ? `/pays/${c.slug}/` : `/en/countries/${c.slugEn}/`);
export const hubPath = (lang: Lang) => (lang === 'fr' ? '/pays/' : '/en/countries/');

/** Our page about each INSPQ disease, where we have one. */
export const DISEASE_PAGES: Record<string, Record<Lang, string>> = {
  chikungunya: { fr: '/vaccination/chikungunya/', en: '/en/vaccination/chikungunya/' },
  cholera: { fr: '/vaccination/cholera-et-etec/', en: '/en/vaccination/cholera-and-etec-vaccination/' },
  dengue: { fr: '/vaccination/dengue/', en: '/en/vaccination/dengue-fever/' },
  'encephalite-japonaise': { fr: '/vaccination/encephalite-japonaise/', en: '/en/vaccination/japanese-encephalitis-vaccination/' },
  'fievre-jaune': { fr: '/vaccination/fievre-jaune/', en: '/en/vaccination/yellow-fever-vaccination/' },
  'hepatite-a': { fr: '/vaccination/hepatite-a/', en: '/en/vaccination/hepatitis-a-vaccination/' },
  'hepatite-b': { fr: '/vaccination/hepatite-b/', en: '/en/vaccination/hepatitis-b-vaccination/' },
  influenza: { fr: '/vaccination/grippe-influenza/', en: '/en/vaccination/influenza-vaccination/' },
  meningocoque: { fr: '/vaccination/infections-a-meningocoque/', en: '/en/vaccination/meningococcal-vaccination-travel-and-hajj/' },
  paludisme: { fr: '/vaccination/malaria/', en: '/en/vaccination/malaria/' },
  poliomyelite: { fr: '/vaccination/poliomyelite/', en: '/en/vaccination/poliomyelitis-vaccination/' },
  rage: { fr: '/vaccination/rage/', en: '/en/vaccination/rabies-vaccination/' },
  rougeole: { fr: '/vaccination/rougeole/', en: '/en/vaccination/measles-vaccination/' },
  typhoide: { fr: '/vaccination/typhoide/', en: '/en/vaccination/typhoid-vaccination/' },
  zika: { fr: '/vaccination/zika/', en: '/en/vaccination/zika/' },
};

export const formatDate = (iso: string, lang: Lang) =>
  new Intl.DateTimeFormat(lang === 'fr' ? 'fr-CA' : 'en-CA', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`));
