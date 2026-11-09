// Navigation and contact details shared by the header and footer. Contact details are verbatim from the
// site's contact page and footer; medical site, so don't add descriptive copy here.

export interface Link {
  label: string;
  href: string;
}

export interface Dropdown {
  label: string;
  group: string;
  links: Link[];
  intro: { title: string; cta: Link };
}

export type Item = Link | Dropdown;

export const BOOKING = 'https://appointment.priveosante.com/booking?t=s&uuid=34440e80-bf1a-4f3b-b815-888d4b8d7bf2';
export const PRIVEO = 'https://priveosante.com';

export type Lang = 'fr' | 'en';

export const menus: Record<Lang, { items: Item[]; book: string; menu: string; openMenu: string; closeMenu: string }> = {
  fr: {
    book: 'Prendre rendez-vous',
    menu: 'Menu principal',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    items: [
      {
        label: 'Santé-voyage',
        group: 'Santé-voyage',
        links: [
          { label: 'Consultation', href: '/consultation/' },
          { label: 'Destinations', href: '/regions-du-monde/' },
          { label: 'Vaccination', href: '/vaccination/' },
          { label: 'Prescription', href: '/prescription/' },
        ],
        intro: {
          title: 'Santé-voyage',
          cta: { label: 'Clinique du voyageur', href: '/clinique-du-voyageur/' },
        },
      },
      {
        label: 'Vaccination',
        group: 'Vaccination',
        links: [
          { label: 'Vaccination générale', href: '/vaccination-generale/' },
          { label: 'Vaccination pédiatrique', href: '/vaccination-infantile/' },
          { label: 'Vaccination voyage', href: '/vaccination/' },
          { label: 'Vaccination en entreprise', href: '/vaccination-en-entreprise/' },
        ],
        intro: {
          title: 'Vaccination',
          cta: { label: 'Prendre rendez-vous', href: BOOKING },
        },
      },
      {
        label: 'Cliniques',
        group: 'Nos cliniques',
        links: [
          { label: 'Laval', href: `${PRIVEO}/cliniques/laval/` },
          { label: 'Montréal', href: `${PRIVEO}/cliniques/montreal/` },
          { label: 'Longueuil', href: `${PRIVEO}/cliniques/longueuil/` },
          { label: 'Blainville', href: `${PRIVEO}/cliniques/blainville/` },
        ],
        intro: {
          title: 'Cliniques',
          cta: { label: 'Nos cliniques', href: `${PRIVEO}/cliniques/` },
        },
      },
      {
        label: 'À propos',
        group: 'Découvrir',
        links: [
          { label: 'À propos', href: '/a-propos/' },
          { label: 'Équipe médicale', href: `${PRIVEO}/equipe/` },
          { label: 'Abonnement', href: `${PRIVEO}/abonnement/` },
          { label: 'Carrières', href: '/carriere/' },
          { label: 'Blogue', href: '/info-sante/' },
          { label: 'Nous joindre', href: '/contact/' },
        ],
        intro: {
          title: 'À propos',
          cta: { label: 'Qui nous sommes', href: '/a-propos/' },
        },
      },
    ],
  },
  en: {
    book: 'Book an appointment',
    menu: 'Main menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    items: [
      {
        label: 'Travel health',
        group: 'Travel health',
        links: [
          { label: 'Consultation', href: '/en/consultation/' },
          { label: 'Destinations', href: '/en/recommended-vaccination-by-world-region/' },
          { label: 'Vaccination', href: '/en/pre-travel-vaccination-clinic/' },
          { label: 'Prescription', href: '/en/prescription-travel/' },
        ],
        intro: {
          title: 'Travel health',
          cta: { label: "Traveller's clinic", href: '/en/travellers-clinic/' },
        },
      },
      {
        label: 'Vaccination',
        group: 'Vaccination',
        links: [
          { label: 'General vaccination', href: '/en/general-vaccination/' },
          { label: 'Pediatric vaccination', href: '/en/infant-vaccination/' },
          { label: 'Travel vaccination', href: '/en/pre-travel-vaccination-clinic/' },
          { label: 'Workplace vaccination', href: '/en/vaccination-in-the-workplace/' },
        ],
        intro: {
          title: 'Vaccination',
          cta: { label: 'Book an appointment', href: BOOKING },
        },
      },
      {
        label: 'Clinics',
        group: 'Our clinics',
        links: [
          { label: 'Laval', href: `${PRIVEO}/en/clinics/laval/` },
          { label: 'Montréal', href: `${PRIVEO}/en/clinics/montreal/` },
          { label: 'Longueuil', href: `${PRIVEO}/en/clinics/longueuil/` },
          { label: 'Blainville', href: `${PRIVEO}/en/clinics/blainville/` },
        ],
        intro: {
          title: 'Clinics',
          cta: { label: 'Our clinics', href: `${PRIVEO}/en/clinics/` },
        },
      },
      {
        label: 'About',
        group: 'Discover',
        links: [
          { label: 'About us', href: '/en/about-us/' },
          { label: 'Medical team', href: `${PRIVEO}/en/team/` },
          { label: 'Membership', href: `${PRIVEO}/en/membership/` },
          { label: 'Careers', href: '/en/career/' },
          { label: 'Blog', href: '/en/info-sante/' },
          { label: 'Contact us', href: '/en/contact/' },
        ],
        intro: {
          title: 'About',
          cta: { label: 'Who we are', href: '/en/about-us/' },
        },
      },
    ],
  },
};

export const CONTACT = {
  phone: '855-582-2246',
  email: 'info@cliniquesantevoyage.com',
  hours: { fr: 'Lundi au Vendredi : 8:30AM – 4:30PM', en: '8:30 to 16:30, Monday to Friday' },
};

export const SOCIAL = {
  facebook: 'https://www.facebook.com/groupesantevoyage',
  instagram: 'https://www.instagram.com/grsantevoyage/',
  linkedin: 'https://www.linkedin.com/company/10534724/',
};

export const footers: Record<Lang, { about: string; contactTitle: string; privacy: Link; rights: string; social: string }> = {
  fr: {
    // The homepage's meta description.
    about: 'Médecins et infirmières spécialisées en santé-voyage et en vaccination depuis 1997 à Montréal, Laval, Longueuil et Blainville',
    contactTitle: 'Contactez-nous',
    privacy: { label: 'Politique de confidentialité', href: '/politique-confidentialite/' },
    rights: 'Tous droits réservés.',
    social: 'Réseaux sociaux',
  },
  en: {
    about: 'Doctors and nurses specializing in travel health and vaccination since 1997 in Montreal, Laval, Longueuil and Blainville',
    contactTitle: 'Contact us',
    privacy: { label: 'Privacy policy', href: '/en/privacy-policy/' },
    rights: 'All rights reserved.',
    social: 'Social media',
  },
};

export interface Clinic {
  city: string;
  address: string;
  locality: string;
  href: Record<Lang, string>;
}

export const CLINICS: Clinic[] = [
  {
    city: 'Laval',
    address: '1435 Boul. Saint-Martin Ouest, suite 425',
    locality: 'Laval, H7S 2C6',
    href: { fr: `${PRIVEO}/cliniques/laval/`, en: `${PRIVEO}/en/clinics/laval/` },
  },
  {
    city: 'Montréal (Outremont)',
    address: '2645 Avenue Van Horne, suite 206',
    locality: 'Montréal H3S 1P6',
    href: { fr: `${PRIVEO}/cliniques/montreal/`, en: `${PRIVEO}/en/clinics/montreal/` },
  },
  {
    city: 'Longueuil',
    address: '5125 Boulevard Cousineau, Suite 206',
    locality: 'Longueuil, J3Y 3K7',
    href: { fr: `${PRIVEO}/cliniques/longueuil/`, en: `${PRIVEO}/en/clinics/longueuil/` },
  },
  {
    city: 'Blainville',
    address: '1099 Boul Curé-Labelle, suite 201',
    locality: 'Blainville J7C 2M8',
    href: { fr: `${PRIVEO}/cliniques/blainville/`, en: `${PRIVEO}/en/clinics/blainville/` },
  },
];
