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
    },
    book: 'Book an appointment',
    results: (n) => `${n} result${n > 1 ? 's' : ''}`,
  },
};

// Numbers drawn from the site itself: the founding year (« depuis 1997 », homepage), the country pages,
// the vaccine and disease pages, and the clinics. Computed at build time (src/components/home/Stats.astro).
export const FOUNDED = 1997;

export const stats: Record<Lang, { label: string; years: string; destinations: string; topics: string; clinics: string }> = {
  fr: {
    label: 'Groupe Santé Voyage en chiffres',
    years: 'ans au service des voyageurs',
    destinations: 'destinations avec les recommandations de l’INSPQ',
    topics: 'fiches sur les vaccins et les maladies',
    clinics: 'cliniques dans le Grand Montréal',
  },
  en: {
    label: 'Groupe Santé Voyage in numbers',
    years: 'years serving travellers',
    destinations: 'destinations with INSPQ recommendations',
    topics: 'vaccine and disease pages',
    clinics: 'clinics across Greater Montreal',
  },
};
