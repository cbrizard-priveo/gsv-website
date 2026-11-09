// Labels shared by every vaccine page. Medical site: no descriptive copy here; the page text comes
// verbatim from each imported vaccine page (src/lib/vaccines.ts).
import type { Lang } from './site';

export interface VaccineCopy {
  home: string;
  crumbs: string;
  section: { label: string; href: string };
  badge: string;
  book: string;
  card: { title: string; button: string; call: string; hours: string };
  source: string;
  about: { eyebrow: string; title: string };
  explorer: { eyebrow: string; title: string };
}

export const vaccineCopy: Record<Lang, VaccineCopy> = {
  fr: {
    home: 'Accueil',
    crumbs: 'Fil d’Ariane',
    section: { label: 'Vaccination', href: '/vaccination/' },
    badge: 'Vaccination',
    book: 'Prendre rendez-vous',
    card: { title: 'Prendre rendez-vous', button: 'Réserver en ligne', call: 'Par téléphone', hours: 'Heures de service' },
    source: 'Source :',
    about: { eyebrow: 'Vaccin', title: 'Ce qu’il faut savoir' },
    explorer: { eyebrow: 'Nos vaccins', title: 'Explorez nos vaccins' },
  },
  en: {
    home: 'Home',
    crumbs: 'Breadcrumb',
    section: { label: 'Vaccination', href: '/en/pre-travel-vaccination-clinic/' },
    badge: 'Vaccination',
    book: 'Book an appointment',
    card: { title: 'Book an appointment', button: 'Book online', call: 'By phone', hours: 'Hours of operation' },
    source: 'Source:',
    about: { eyebrow: 'Vaccine', title: 'What you need to know' },
    explorer: { eyebrow: 'Our vaccines', title: 'Explore our vaccines' },
  },
};
