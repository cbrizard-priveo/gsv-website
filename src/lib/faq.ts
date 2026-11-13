// FAQs (src/data/faq/*.json): the main FAQ page's themes and the short FAQs at the bottom of other pages.
// Medical site: every answer restates a named source (official page, or the site's own verified texts);
// the clinic's practical answers come from its own FAQ. Generated FAQs (country and clinic pages) reuse
// those pages' verified data word for word.
import type { Lang } from '../data/site';
import { vaccineTexts } from '../data/vaccine-texts';
import type { Country } from './countries';
import { CLINICS } from '../data/site';
import { clinicCopy, type ClinicPage } from '../data/clinics';

export interface FaqItem {
  id: string;
  theme: string;
  q: Record<Lang, string>;
  a: Record<Lang, string>;
  sources?: { label: string; href?: string }[];
}

const files = import.meta.glob<{ items: FaqItem[] }>('../data/faq/*.json', { eager: true, import: 'default' });
const all: FaqItem[] = Object.values(files).flatMap((f) => f.items);

export const FAQ_THEMES: { id: string; title: Record<Lang, string> }[] = [
  { id: 'avant-depart', title: { fr: 'Avant le départ', en: 'Before you leave' } },
  { id: 'vaccins', title: { fr: 'Les vaccins', en: 'Vaccines' } },
  { id: 'maladies', title: { fr: 'Maladies et prévention', en: 'Diseases and prevention' } },
  { id: 'clinique', title: { fr: 'La clinique', en: 'The clinic' } },
];

export const faqByTheme = (theme: string) => all.filter((i) => i.theme === theme);

// Vaccine and disease pages: their FAQ is the theme « page:<key> », where <key> is the topic's file in
// src/data/vaccines/ (« rage » for rabies, whose text is in vaccine-texts.ts).
const topics = import.meta.glob<{ routes: Record<Lang, string> }>('../data/vaccines/*.json', { eager: true, import: 'default' });
const keyByRoute = new Map<string, string>([
  ...Object.entries(topics).flatMap(([file, t]) => {
    const key = file.replace(/^.*\/|\.json$/g, '');
    return [
      [t.routes.fr, key],
      [t.routes.en, key],
    ] as [string, string][];
  }),
  ['/vaccination/rage/', 'rage'],
  ['/en/vaccination/rabies-vaccination/', 'rage'],
]);
export const faqForVaccine = (route: string) => (keyByRoute.has(route) ? faqByTheme(`page:${keyByRoute.get(route)}`) : []);

// Guard: a rabies text must exist for the « rage » key used above.
if (!vaccineTexts['/vaccination/rage/']) throw new Error('faq: rabies text missing');

export const faqCopy: Record<Lang, { title: string; lede: string; more: { label: string; href: string }; page: { title: string; lede: string } }> = {
  fr: {
    title: 'Questions fréquentes',
    lede: 'Les réponses aux questions qu’on nous pose le plus souvent.',
    more: { label: 'Toutes les questions', href: '/foire-aux-questions-sur-la-clinique-voyage/' },
    page: {
      title: 'Foire aux questions sur la clinique voyage',
      lede: 'Préparer son voyage, les vaccins, les maladies à prévenir et le fonctionnement de nos cliniques : les réponses aux questions qu’on nous pose le plus souvent.',
    },
  },
  en: {
    title: 'Frequently asked questions',
    lede: 'Answers to the questions we are asked most often.',
    more: { label: 'All questions', href: '/en/frequently-asked-questions-about-the-travel-clinic/' },
    page: {
      title: 'Frequently asked questions about the travel clinic',
      lede: 'Preparing your trip, vaccines, diseases to prevent and how our clinics work: answers to the questions we are asked most often.',
    },
  },
};

/** FAQPage structured data for a list of questions (answers as plain text). */
export const faqJsonLd = (items: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({
    '@type': 'Question',
    name: i.q,
    acceptedAnswer: { '@type': 'Answer', text: i.a.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() },
  })),
});

/** The answer as shown: official sources follow the answer (the clinic's own answers need none). */
export const answerHtml = (item: FaqItem, lang: Lang) => {
  const sources = item.theme === 'clinique' ? [] : (item.sources ?? []).filter((s) => s.href?.startsWith('http'));
  if (!sources.length) return item.a[lang];
  const label = lang === 'fr' ? (sources.length > 1 ? 'Sources :' : 'Source :') : sources.length > 1 ? 'Sources:' : 'Source:';
  const list = sources.map((s) => `<a href="${s.href}" target="_blank" rel="noopener">${s.label}</a>`).join(' ; ');
  return `${item.a[lang]}<p class="faq-source">${label} ${list}</p>`;
};

// ---- Generated FAQs --------------------------------------------------------------------------------------


/** Country pages: the yellow fever, malaria and hepatitis A rows, word for word, as questions. */
export function countryFaq(country: Country, lang: Lang): { q: string; a: string }[] {
  const name = country.name[lang];
  const questions: Record<string, Record<Lang, string>> = {
    'fievre-jaune': { fr: `${name} : faut-il se faire vacciner contre la fièvre jaune ?`, en: `${name}: do I need a yellow fever vaccine?` },
    paludisme: { fr: `${name} : y a-t-il un risque de paludisme (malaria) ?`, en: `${name}: is there a risk of malaria?` },
    'hepatite-a': { fr: `${name} : le vaccin contre l’hépatite A est-il recommandé ?`, en: `${name}: is the hepatitis A vaccine recommended?` },
  };
  const source =
    lang === 'fr'
      ? `<p class="faq-source">Source : <a href="${country.inspq.url}" target="_blank" rel="noopener">INSPQ, Recommandations par pays : ${country.name.fr}</a></p>`
      : `<p class="faq-source">Source: <a href="${country.inspq.url}" target="_blank" rel="noopener">INSPQ, Recommandations par pays: ${country.name.fr}</a> (in French)</p>`;
  return Object.keys(questions).flatMap((id) => {
    const row = country.diseases.find((d) => d.id === id);
    return row ? [{ q: questions[id][lang], a: row.text[lang] + source }] : [];
  });
}

/** Clinic pages: hours, address and access, what's on site, and telemedicine, from the clinic's data. */
export function clinicFaq(clinic: ClinicPage, lang: Lang): { q: string; a: string }[] {
  const t = clinicCopy[lang];
  const place = CLINICS[clinic.index];
  const onSite = clinic.amenities.filter((a) => a !== 'fr' && a !== 'en').map((a) => t.amenities[a].toLowerCase());
  const tele = all.find((i) => i.id === 'telemedecine');
  const list = (items: string[]) => (items.length > 1 ? `${items.slice(0, -1).join(', ')} ${lang === 'fr' ? 'et' : 'and'} ${items.at(-1)}` : items[0]);
  return [
    {
      q: lang === 'fr' ? `Quelles sont les heures d’ouverture de la clinique de ${clinic.short} ?` : `What are the opening hours of the ${clinic.short} clinic?`,
      a:
        lang === 'fr'
          ? `<p>La clinique est ouverte du lundi au vendredi, de 8 h 30 à 16 h 30. Elle est fermée le samedi et le dimanche.</p>`
          : `<p>The clinic is open Monday to Friday, 8:30 a.m. to 4:30 p.m. It is closed on Saturday and Sunday.</p>`,
    },
    {
      q: lang === 'fr' ? `Où se trouve la clinique de ${clinic.short} ?` : `Where is the ${clinic.short} clinic?`,
      a: `<p>${place.address}, ${place.locality}. ${clinic.access[lang]}</p><p><a href="${clinic.map}" target="_blank" rel="noopener">${t.clinic.directions}</a></p>`,
    },
    ...(onSite.length
      ? [
          {
            q: lang === 'fr' ? `Qu’y a-t-il sur place à la clinique de ${clinic.short} ?` : `What is on site at the ${clinic.short} clinic?`,
            a: lang === 'fr' ? `<p>Sur place : ${list(onSite)}. On vous y reçoit en français et en anglais.</p>` : `<p>On site: ${list(onSite)}. Service is in French and English.</p>`,
          },
        ]
      : []),
    ...(tele ? [{ q: tele.q[lang], a: tele.a[lang] }] : []),
  ];
}
