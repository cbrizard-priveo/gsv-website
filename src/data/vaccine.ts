// Copy shared by every vaccine page. All of it is new except the booking link and contact details.
import type { Lang } from './site';

export interface VaccineCopy {
  home: string;
  crumbs: string;
  section: { label: string; href: string };
  badge: string;
  book: string;
  card: { title: string; text: string; call: string };
  source: string;
  about: { eyebrow: string; title: string };
  steps: { eyebrow: string; title: string; text: string; items: { title: string; text: string }[] };
  explorer: { eyebrow: string; title: string; text: string };
}

export const vaccineCopy: Record<Lang, VaccineCopy> = {
  fr: {
    home: 'Accueil',
    crumbs: 'Fil d’Ariane',
    section: { label: 'Vaccination', href: '/vaccination/' },
    badge: 'Vaccination',
    book: 'Prendre rendez-vous',
    card: {
      title: 'Planifiez votre vaccination',
      text: 'Une infirmière évalue vos besoins selon votre destination et votre carnet de vaccination, puis vous administre les vaccins recommandés.',
      call: 'Ou appelez-nous au',
    },
    source: 'Source :',
    about: { eyebrow: 'Vaccin', title: 'Ce qu’il faut savoir' },
    steps: {
      eyebrow: 'Comment prendre rendez-vous',
      title: 'Planifiez votre vaccination dès aujourd’hui',
      text: 'Une démarche simple, dans l’une de nos quatre cliniques de la grande région de Montréal.',
      items: [
        { title: 'Prenez rendez-vous', text: 'Réservez en ligne en quelques clics, dans la clinique et à l’heure qui vous conviennent.' },
        { title: 'Préparez votre visite', text: 'Apportez votre carnet de vaccination et les détails de votre voyage : destinations, dates et activités prévues.' },
        { title: 'Recevez vos vaccins', text: 'L’infirmière évalue vos risques, répond à vos questions et vous administre les vaccins recommandés.' },
      ],
    },
    explorer: {
      eyebrow: 'Nos vaccins',
      title: 'Explorez nos vaccins',
      text: 'Vaccins de voyage et vaccins courants, pour les adultes et les enfants.',
    },
  },
  en: {
    home: 'Home',
    crumbs: 'Breadcrumb',
    section: { label: 'Vaccination', href: '/en/pre-travel-vaccination-clinic/' },
    badge: 'Vaccination',
    book: 'Book an appointment',
    card: {
      title: 'Plan your vaccination',
      text: 'A nurse assesses your needs based on your destination and vaccination record, then gives you the recommended vaccines.',
      call: 'Or call us at',
    },
    source: 'Source:',
    about: { eyebrow: 'Vaccine', title: 'What you need to know' },
    steps: {
      eyebrow: 'How to book',
      title: 'Plan your vaccination today',
      text: 'A simple process, in one of our four clinics in the Greater Montréal area.',
      items: [
        { title: 'Book an appointment', text: 'Book online in a few clicks, at the clinic and time that suit you.' },
        { title: 'Prepare your visit', text: 'Bring your vaccination record and your trip details: destinations, dates and planned activities.' },
        { title: 'Get your vaccines', text: 'The nurse assesses your risks, answers your questions and gives you the recommended vaccines.' },
      ],
    },
    explorer: {
      eyebrow: 'Our vaccines',
      title: 'Explore our vaccines',
      text: 'Travel and routine vaccines, for adults and children.',
    },
  },
};
