// Prices (src/views/Tarifs.astro). Amounts copied from Priveo Santé's price list
// (priveosante.com/tarifs/, read 2026-11-13); the client confirmed the travel consultation fees apply to
// Groupe Santé Voyage too (the family rate is per person) and asked for every vaccine price on that page. Product names are Priveo's,
// with their typos fixed (Ixiaro, typhoïde, pneumocoque). Update this file whenever Priveo's list changes.
import type { Lang } from './site';

export const PRICES_CHECKED = '2026-11-13';

type Text = Record<Lang, string>;

export const consultationPrices: { label: Text; price: number }[] = [
  { label: { fr: 'Destination soleil et Europe', en: 'Sun destination and Europe' }, price: 50 },
  { label: { fr: 'Asie, Afrique, Amérique du Sud et Amérique centrale', en: 'Asia, Africa, South America and Central America' }, price: 60 },
  { label: { fr: 'Famille (4 personnes et plus), par personne', en: 'Family (4 people or more), per person' }, price: 40 },
];

export const injectionFees: { label: Text; price: number }[] = [
  { label: { fr: 'Vaccins non couverts par la santé publique (RAMQ)', en: 'Vaccines not covered by public health (RAMQ)' }, price: 0 },
  { label: { fr: 'Vaccins couverts par la santé publique (RAMQ)', en: 'Vaccines covered by public health (RAMQ)' }, price: 20 },
];

/** `topic`: the vaccine/disease page key (src/data/vaccines/*.json, or « rage »), when the site has one;
 *  `also`: other pages the same vaccine is for (Dukoral for cholera, dcaT for diphtheria). */
export const vaccinePrices: { disease: Text; product: string; price: number; topic?: string; also?: string[] }[] = [
  { disease: { fr: 'Chikungunya', en: 'Chikungunya' }, product: 'IXCHIQ', price: 260, topic: 'chikungunya' },
  { disease: { fr: 'Choléra et diarrhée à E. coli', en: 'Cholera and E. coli diarrhea' }, product: 'Dukoral (oral)', price: 80, topic: 'dukoral', also: ['cholera-etec'] },
  { disease: { fr: 'Coqueluche et diphtérie', en: 'Whooping cough and diphtheria' }, product: 'Coqueluche / Diphtérie', price: 80, topic: 'coqueluche', also: ['diphterie'] },
  { disease: { fr: 'COVID-19', en: 'COVID-19' }, product: 'Comirnaty', price: 160 },
  { disease: { fr: 'Encéphalite japonaise', en: 'Japanese encephalitis' }, product: 'Ixiaro', price: 270, topic: 'encephalite-japonaise' },
  { disease: { fr: 'Fièvre jaune', en: 'Yellow fever' }, product: 'Fièvre jaune (carnet de certification inclus)', price: 275, topic: 'fievre-jaune' },
  { disease: { fr: 'Grippe (influenza)', en: 'Influenza (flu)' }, product: 'Flucelvax', price: 40, topic: 'grippe' },
  { disease: { fr: 'Hépatite A', en: 'Hepatitis A' }, product: 'Havrix 1440 / Avaxim', price: 95, topic: 'hepatite-a' },
  { disease: { fr: 'Hépatite A (enfant)', en: 'Hepatitis A (child)' }, product: 'Havrix 720 / Avaxim pédiatrique', price: 95, topic: 'hepatite-a' },
  { disease: { fr: 'Hépatite A et B', en: 'Hepatitis A and B' }, product: 'Twinrix', price: 120, topic: 'twinrix' },
  { disease: { fr: 'Hépatite B', en: 'Hepatitis B' }, product: 'Engerix-B', price: 70, topic: 'hepatite-b' },
  { disease: { fr: 'Hépatite B (enfant)', en: 'Hepatitis B (child)' }, product: 'Engerix-B pédiatrique', price: 65, topic: 'hepatite-b' },
  { disease: { fr: 'Méningocoque (méningite)', en: 'Meningococcal disease (meningitis)' }, product: 'Nimenrix / Menveo', price: 160, topic: 'meningocoque' },
  { disease: { fr: 'Méningocoque B', en: 'Meningococcal B' }, product: 'Bexsero', price: 180, topic: 'bexsero' },
  { disease: { fr: 'Pneumocoque', en: 'Pneumococcal disease' }, product: 'Prevnar 20', price: 170, topic: 'pneumocoque' },
  { disease: { fr: 'Rage (intradermique)', en: 'Rabies (intradermal)' }, product: 'Imovax / RabAvert', price: 140, topic: 'rage' },
  { disease: { fr: 'Rage (intramusculaire)', en: 'Rabies (intramuscular)' }, product: 'Imovax / RabAvert', price: 275, topic: 'rage' },
  { disease: { fr: 'Rougeole', en: 'Measles' }, product: 'RRO (MMR)', price: 80, topic: 'rougeole' },
  { disease: { fr: 'Typhoïde', en: 'Typhoid' }, product: 'Typhim Vi / Vivotif', price: 80, topic: 'typhoide' },
  { disease: { fr: 'Virus du papillome humain (VPH)', en: 'Human papillomavirus (HPV)' }, product: 'Gardasil', price: 250, topic: 'vph' },
  { disease: { fr: 'Virus respiratoire syncytial (VRS)', en: 'Respiratory syncytial virus (RSV)' }, product: 'Abrysvo', price: 330 },
  { disease: { fr: 'Zona', en: 'Shingles' }, product: 'Shingrix', price: 230, topic: 'zona' },
];

export const tarifsCopy: Record<
  Lang,
  {
    path: string;
    seoTitle: string;
    description: string;
    tagline: string;
    title: string;
    lede: string;
    consultation: { title: string; text: string };
    vaccines: { title: string; text: string; filter: string; filterPlaceholder: string; none: string; disease: string; product: string; price: string; page: string };
    injection: { title: string };
    insurance: { title: string; text: string; faq: { label: string; href: string } };
    checked: (date: string) => string;
    book: string;
  }
> = {
  fr: {
    path: '/tarifs/',
    seoTitle: 'Tarifs : consultation santé-voyage et vaccins | Clinique Santé Voyage',
    description: 'Prix de la consultation santé-voyage et de chaque vaccin dans nos cliniques de Montréal, Laval, Longueuil et Blainville.',
    tagline: 'Tarifs',
    title: 'Nos tarifs',
    lede: 'Consultation santé-voyage et vaccins : tous nos prix.',
    consultation: {
      title: 'Consultation santé-voyage',
      text: 'Les frais de consultation s’appliquent à la première visite. Aucuns frais de consultation ne s’ajoutent pour les doses suivantes d’une série reçue chez nous.',
    },
    vaccines: {
      title: 'Vaccins',
      text: 'Prix de chaque vaccin. Le nombre de doses dépend du vaccin et de votre situation ; il est déterminé en consultation.',
      filter: 'Rechercher un vaccin',
      filterPlaceholder: 'Ex. : hépatite, rage, fièvre jaune',
      none: 'Aucun vaccin ne correspond.',
      disease: 'Protège contre',
      product: 'Vaccin',
      price: 'Prix',
      page: 'Voir la fiche',
    },
    injection: { title: 'Frais d’injection' },
    insurance: {
      title: 'RAMQ et assurances',
      text: 'Les consultations et la vaccination en santé-voyage ne sont pas couvertes par la RAMQ. Plusieurs assureurs privés remboursent toutefois une partie ou la totalité des frais de vaccination : vérifiez auprès du vôtre. Nous vous remettons un reçu pour vos réclamations.',
      faq: { label: 'Toutes les questions sur les frais', href: '/foire-aux-questions-sur-la-clinique-voyage/#clinique' },
    },
    checked: (date) => `Prix en vigueur au ${date}.`,
    book: 'Prendre rendez-vous',
  },
  en: {
    path: '/en/pricing/',
    seoTitle: 'Pricing: travel health consultation and vaccines | Travel Health Clinic',
    description: 'Prices of the travel health consultation and of each vaccine at our clinics in Montreal, Laval, Longueuil and Blainville.',
    tagline: 'Pricing',
    title: 'Our prices',
    lede: 'Travel health consultation and vaccines: all our prices.',
    consultation: {
      title: 'Travel health consultation',
      text: 'The consultation fee applies at the first visit. No consultation fee is added for the later doses of a series you receive with us.',
    },
    vaccines: {
      title: 'Vaccines',
      text: 'Price of each vaccine. The number of doses depends on the vaccine and on your situation; it is determined during the consultation.',
      filter: 'Search for a vaccine',
      filterPlaceholder: 'E.g. hepatitis, rabies, yellow fever',
      none: 'No vaccine matches.',
      disease: 'Protects against',
      product: 'Vaccine',
      price: 'Price',
      page: 'See the page',
    },
    injection: { title: 'Injection fees' },
    insurance: {
      title: 'RAMQ and insurance',
      text: 'Travel health consultations and vaccination are not covered by the RAMQ. Many private insurers, however, reimburse part or all of the vaccination costs: check with yours. We give you a receipt for your claims.',
      faq: { label: 'All questions about fees', href: '/en/frequently-asked-questions-about-the-travel-clinic/#clinique' },
    },
    checked: (date) => `Prices in effect as of ${date}.`,
    book: 'Book an appointment',
  },
};
