// Québec's recommended vaccination schedule for children, reproduced from Québec.ca « Programme québécois
// d'immunisation » (French page, last updated 2026-11-12; read 2026-11-13). The English page was older
// (2026-06-30) and identical in its tables but without the travel note, so the English text below is a
// translation of the French page. Shown on the pediatric vaccination page (block `calendar`).
// Update this file whenever the Québec schedule changes.
import type { Lang } from './site';

type Text = Record<Lang, string>;

export const CALENDAR_SOURCE = {
  name: {
    fr: 'Québec.ca, « Programme québécois d’immunisation » (calendrier de vaccination recommandé)',
    en: 'Québec.ca, “Québec Immunization Program” (recommended vaccination schedule)',
  } as Text,
  href: {
    fr: 'https://www.quebec.ca/sante/conseils-et-prevention/vaccination/programme-quebecois-d-immunisation',
    en: 'https://www.quebec.ca/en/health/advice-and-prevention/vaccination/quebec-immunisation-program',
  } as Text,
  /** « Dernière mise à jour » of the French page we copied, and the day we checked it. */
  updated: '2026-11-12',
  checked: '2026-11-13',
};

export interface CalendarTable {
  /** Label of the toggle button that shows this table. */
  tab: Text;
  caption: Text;
  /** Column headings after the « Vaccin qui protège contre : » column. */
  ages: Text[];
  /** One row per vaccine; `at` holds the indexes of the ages when it is given. `note` marks the row with *. */
  rows: { vaccine: Text; at: number[]; note?: true; when?: Text }[];
  note?: Text;
}

export const vaccineColumn: Text = { fr: 'Vaccin qui protège contre :', en: 'Vaccine to prevent:' };

export const childCalendar: CalendarTable[] = [
  {
    tab: { fr: 'Nourrissons', en: 'Infants' },
    caption: { fr: 'Calendrier de vaccination pour les nourrissons', en: 'Immunization schedule for infants' },
    ages: [
      { fr: 'Naissance', en: 'Newborn' },
      { fr: 'À 2 mois', en: 'At 2 months' },
      { fr: 'À 4 mois', en: 'At 4 months' },
      { fr: 'À 12 mois', en: 'At 12 months' },
      { fr: 'À 18 mois', en: 'At 18 months' },
    ],
    rows: [
      { vaccine: { fr: 'Virus respiratoire syncytial (VRS)', en: 'Respiratory syncytial virus (RSV)' }, at: [0], when: { fr: 'automne et hiver', en: 'autumn and winter' } },
      { vaccine: { fr: 'Diphtérie-coqueluche-tétanos-hépatite B-polio-Hib', en: 'Diphtheria-tetanus-whooping cough-hepatitis B-polio-Hib' }, at: [1, 2] },
      { vaccine: { fr: 'Pneumocoque', en: 'Pneumococcus' }, at: [1, 2, 3] },
      { vaccine: { fr: 'Rotavirus', en: 'Rotavirus' }, at: [1, 2] },
      { vaccine: { fr: 'Diphtérie-coqueluche-tétanos-polio-Hib', en: 'Diphtheria-tetanus-whooping cough-polio-Hib' }, at: [3] },
      { vaccine: { fr: 'Méningocoque', en: 'Meningococcus' }, at: [4] },
      { vaccine: { fr: 'Rougeole-rubéole-oreillons-varicelle', en: 'Measles-mumps-rubella-varicella' }, at: [3, 4], note: true },
      { vaccine: { fr: 'Hépatite A-hépatite B', en: 'Hepatitis A-hepatitis B' }, at: [4] },
    ],
    note: {
      fr: 'Le VRS est prévenu à la naissance par un traitement préventif (anticorps monoclonal) qui donne au bébé des anticorps déjà fabriqués, pendant la saison où le virus circule. * Dans certaines circonstances, comme un voyage à l’étranger, des vaccins peuvent être donnés avant l’âge recommandé : par exemple, un bébé de 6 à 11 mois qui se rend dans un pays où la rougeole circule pourrait être vacciné contre cette maladie dès 6 mois. D’autres vaccins pourraient être recommandés selon la destination ; parlez-en à un professionnel en santé voyage avant le départ.',
      en: 'RSV is prevented at birth with a preventive treatment (monoclonal antibody) that gives the baby antibodies already made, during the season when the virus circulates. * In some circumstances, such as a trip abroad, vaccines can be given before the recommended age: for example, a baby aged 6 to 11 months travelling to a country where measles circulates could be vaccinated against it from 6 months. Other vaccines may be recommended depending on the destination; talk to a travel health professional before leaving.',
    },
  },
  {
    tab: { fr: 'Âge scolaire', en: 'School age' },
    caption: { fr: 'Calendrier de vaccination pour les enfants d’âge scolaire', en: 'Immunization schedule for school-age children' },
    ages: [
      { fr: 'Entre 4 et 6 ans', en: 'Between 4 and 6 years of age' },
      { fr: 'En 4e année du primaire', en: '4th year of primary school' },
      { fr: 'En 3e année du secondaire', en: '3rd year of high school' },
    ],
    rows: [
      { vaccine: { fr: 'Diphtérie-coqueluche-tétanos-polio', en: 'Diphtheria-tetanus-whooping cough-polio' }, at: [0] },
      { vaccine: { fr: 'Hépatite A', en: 'Hepatitis A' }, at: [1] },
      { vaccine: { fr: 'Virus du papillome humain', en: 'Human papillomavirus' }, at: [1] },
      { vaccine: { fr: 'Diphtérie-tétanos', en: 'Diphtheria-tetanus' }, at: [2] },
      { vaccine: { fr: 'Méningocoque', en: 'Meningococcus' }, at: [2] },
      { vaccine: { fr: 'Hépatite B', en: 'Hepatitis B' }, at: [2] },
    ],
  },
];
