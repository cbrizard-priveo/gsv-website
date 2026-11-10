// Labels shared by every vaccine page. Medical site: no descriptive copy here; the page text comes
// verbatim from each imported vaccine page (src/lib/vaccines.ts).
import type { Lang } from './site';

export interface VaccineCopy {
  home: string;
  crumbs: string;
  section: { label: string; href: string };
  badge: string;
  book: string;
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
    source: 'Source:',
    about: { eyebrow: 'Vaccine', title: 'What you need to know' },
    explorer: { eyebrow: 'Our vaccines', title: 'Explore our vaccines' },
  },
};
