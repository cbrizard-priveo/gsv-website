// Text of the homepage's interactive tools (src/components/home/TripPlanner.astro, Stats.astro).
// Medical site: the tools only point to existing content (the INSPQ country pages) and to one official
// statement, quoted with its source: the Government of Canada advises seeing a travel health clinic about
// six weeks before leaving, and says an appointment is still worthwhile when the date is close
// (voyage.gc.ca « Vaccins et médicaments avant le départ » / travel.gc.ca "Vaccines and medications before
// travel", modified 2026-09-22).
import type { Lang } from './site';

/** The Government of Canada's advice: consult about six weeks before departure. */
export const CONSULT_WEEKS_BEFORE = 6;

export const planner: Record<
  Lang,
  {
    title: string;
    where: { label: string; placeholder: string; noResult: string; clear: string };
    when: { label: string };
    preview: { topics: string; updated: (date: string) => string; open: string };
    timing: {
      ahead: (days: number, by: string) => string;
      soon: (days: number) => string;
      today: string;
      past: string;
      source: { label: string; href: string };
      /** The clinic's own message, shown apart from the government's advice and its source. */
      neverTooLate: string;
    };
    book: string;
    results: (n: number) => string;
  }
> = {
  fr: {
    title: 'Préparez votre voyage',
    where: { label: 'Où partez-vous ?', placeholder: 'Pays ou territoire', noResult: 'Aucun pays ne correspond.', clear: 'Effacer' },
    when: { label: 'Quand partez-vous ?' },
    preview: {
      topics: 'Vaccins et risques présentés par l’INSPQ',
      updated: (date) => `Recommandations de l’INSPQ mises à jour le ${date}`,
      open: 'Voir les recommandations',
    },
    timing: {
      ahead: (days, by) =>
        `Départ dans ${days} jours. Le gouvernement du Canada recommande de consulter une clinique santé-voyage environ six semaines avant le départ, soit vers le ${by}.`,
      soon: (days) =>
        `Départ dans ${days} jour${days > 1 ? 's' : ''}. Selon le gouvernement du Canada, même si la date approche, il vaut la peine de prendre rendez-vous.`,
      today: 'Départ aujourd’hui. Selon le gouvernement du Canada, même si la date approche, il vaut la peine de prendre rendez-vous.',
      past: 'Choisissez une date à venir.',
      source: { label: 'Source : gouvernement du Canada', href: 'https://voyage.gc.ca/voyager/sante-securite/vaccins' },
      neverTooLate: 'Il n’est jamais trop tard pour une consultation.',
    },
    book: 'Prendre rendez-vous',
    results: (n) => `${n} résultat${n > 1 ? 's' : ''}`,
  },
  en: {
    title: 'Plan your trip',
    where: { label: 'Where are you going?', placeholder: 'Country or territory', noResult: 'No country matches.', clear: 'Clear' },
    when: { label: 'When are you leaving?' },
    preview: {
      topics: 'Vaccines and risks covered by the INSPQ',
      updated: (date) => `INSPQ recommendations updated ${date}`,
      open: 'See the recommendations',
    },
    timing: {
      ahead: (days, by) =>
        `Leaving in ${days} days. The Government of Canada advises visiting a travel health clinic about 6 weeks before your trip, that is around ${by}.`,
      soon: (days) =>
        `Leaving in ${days} day${days > 1 ? 's' : ''}. According to the Government of Canada, even if your travel date is coming up soon, it’s still worthwhile to make an appointment.`,
      today: 'Leaving today. According to the Government of Canada, even if your travel date is coming up soon, it’s still worthwhile to make an appointment.',
      past: 'Choose a date in the future.',
      source: { label: 'Source: Government of Canada', href: 'https://travel.gc.ca/travelling/health-safety/vaccines' },
      neverTooLate: 'It’s never too late for a consultation.',
    },
    book: 'Book an appointment',
    results: (n) => `${n} result${n > 1 ? 's' : ''}`,
  },
};

// The numbers band (src/components/home/Stats.astro): the founding year (« depuis 1997 », homepage), the
// number of clinics (src/data/clinics.ts) and the number of travellers, given by the client on 2026-11-12.
export const FOUNDED = 1997;
export const TRAVELLERS = 200_000;

// Google reviews of all Groupe Santé Voyage and Priveo Santé listings, read on Google Maps on 2026-11-13
// (rating as shown, rounded to one decimal by Google). The combined rating is the average weighted by the
// number of reviews. Update the listings and the date together. Not used in JSON-LD: Google does not show
// review stars that a business publishes about itself.
export const GOOGLE_REVIEWS_CHECKED = '2026-11-13';
export const GOOGLE_REVIEWS: { name: string; address: string; rating: number; count: number }[] = [
  { name: 'Groupe Santé Voyage (Laval)', address: '1435 boul. Saint-Martin O.', rating: 4.3, count: 98 },
  { name: 'Groupe Santé Voyage - Montréal', address: '2645 av. Van Horne', rating: 3.4, count: 5 },
  { name: 'Groupe Santé Voyage - Longueuil', address: '5125 boul. Cousineau', rating: 4.0, count: 3 },
  { name: 'Groupe Santé Voyage - Blainville', address: '20 boul. des Châteaux (old address on Google)', rating: 4.7, count: 19 },
  { name: 'Priveo Santé - Laval', address: '1435 boul. Saint-Martin O.', rating: 4.8, count: 728 },
  { name: 'Priveo Santé - Montréal', address: '2645 av. Van Horne', rating: 4.8, count: 76 },
  { name: 'Priveo Santé - Longueuil', address: '5125 boul. Cousineau', rating: 4.8, count: 186 },
];
export const googleReviews = {
  count: GOOGLE_REVIEWS.reduce((n, l) => n + l.count, 0),
  rating: Math.round((GOOGLE_REVIEWS.reduce((n, l) => n + l.rating * l.count, 0) / GOOGLE_REVIEWS.reduce((n, l) => n + l.count, 0)) * 10) / 10,
};

export const stats: Record<Lang, { label: string; founded: string; clinics: string; travellers: string; reviews: (count: string) => string }> = {
  fr: {
    label: 'Groupe Santé Voyage en chiffres',
    founded: 'Au service des voyageurs depuis',
    clinics: 'cliniques dans le Grand Montréal',
    travellers: 'voyageurs',
    reviews: (count) => `sur Google (${count} avis, Groupe Santé Voyage et Priveo Santé)`,
  },
  en: {
    label: 'Groupe Santé Voyage in numbers',
    founded: 'Serving travellers since',
    clinics: 'clinics across Greater Montreal',
    travellers: 'travellers',
    reviews: (count) => `on Google (${count} reviews, Groupe Santé Voyage and Priveo Santé)`,
  },
};

// « Une seule clinique » band (src/components/home/Destinations.astro): the slogan chosen by the client
// on 2026-11-13, over a single row of travel settings (public/images/destinations), not clickable.
// Mountain and desert photos: Unsplash v7BkDZg7pK8 and mhJml7Fusfs (Unsplash licence), downloaded 2026-11-13.
export const destinations: Record<
  Lang,
  { title: string; text: string; cta: { label: string; href: string }; tiles: { label: string; image: string }[] }
> = {
  fr: {
    title: 'Une seule clinique, peu importe la destination',
    text: 'Montagne, désert, jungle, plage ou pèlerinage : une consultation santé-voyage pour des conseils, des vaccins et des médicaments de voyage dans nos quatre cliniques du Grand Montréal.',
    cta: { label: 'Trouver ma destination', href: '/pays/' },
    tiles: [
      { label: 'Montagne', image: '/images/destinations/montagne.jpg' },
      { label: 'Désert', image: '/images/destinations/desert.jpg' },
      { label: 'Plage', image: '/images/destinations/plage.jpg' },
      { label: 'Hadj et Omra', image: '/images/destinations/pelerinage.jpg' },
      { label: 'Campagne', image: '/images/destinations/rizieres.jpg' },
    ],
  },
  en: {
    title: 'A clinic for every traveller and every destination',
    text: 'Mountains, desert, jungle, beach or pilgrimage: a travel health consultation for advice, vaccines and travel medication at our four clinics across Greater Montreal.',
    cta: { label: 'Find my destination', href: '/en/countries/' },
    tiles: [
      { label: 'Mountains', image: '/images/destinations/montagne.jpg' },
      { label: 'Desert', image: '/images/destinations/desert.jpg' },
      { label: 'Beach', image: '/images/destinations/plage.jpg' },
      { label: 'Hajj and Umrah', image: '/images/destinations/pelerinage.jpg' },
      { label: 'Countryside', image: '/images/destinations/rizieres.jpg' },
    ],
  },
};

// Last-minute band (src/components/home/LastMinute.astro). « Il n'est jamais trop tard pour une
// consultation » is the clinic's own line (its FAQ); the title was chosen by the client on 2026-11-13.
export const lastMinute: Record<Lang, { title: string; text: string; cta: string }> = {
  fr: {
    title: 'Départ de dernière minute ? On s’occupe de vous.',
    text: 'Il n’est jamais trop tard pour une consultation. Prenez rendez-vous dès maintenant pour être accompagné avant votre départ.',
    cta: 'Prendre rendez-vous',
  },
  en: {
    title: 'Last-minute departure? We’ve got you covered.',
    text: 'It’s never too late for a consultation. Book an appointment now to get support before you leave.',
    cta: 'Book an appointment',
  },
};
