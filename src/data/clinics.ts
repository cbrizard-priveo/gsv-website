// Clinic pages. Details (phone, fax, email, hours, amenities, access) are copied from Priveo Santé's
// clinic pages (priveosante.com/cliniques/…, checked 2026-11-10), as the client asked; the access
// sentence restates Priveo's in our words. Titles and H1s from the SEO expert's sheet.
// Priveo's English Montréal page gives a different address (3550 Côte-des-Neiges): we follow the
// French page, which matches this site (Outremont).
import type { Lang } from './site';

type Amenity = 'fr' | 'en' | 'elevator' | 'parking' | 'pharmacy' | 'radiology';

export interface ClinicPage {
  slug: Record<Lang, string>;
  /** Index in CLINICS (src/data/site.ts), for the address. */
  index: number;
  name: string;
  title: Record<Lang, string>;
  h1: Record<Lang, string>;
  description: Record<Lang, string>;
  access: Record<Lang, string>;
  amenities: Amenity[];
  map: string;
}

export const CLINIC_CONTACT = { phone: '450-639-1561', fax: '579-306-0302', email: 'info@priveosante.com' };

export const clinicPages: ClinicPage[] = [
  {
    slug: { fr: 'laval', en: 'laval' },
    index: 0,
    name: 'Laval',
    title: { fr: 'Clinique Santé Voyage | Laval - Rive-Nord', en: 'Travel Health Clinic | Laval - North Shore' },
    h1: { fr: 'Clinique de voyage à Laval – Rive-Nord de Montréal', en: 'Travel Clinic in Laval – North Shore of Montreal' },
    description: {
      fr: 'Clinique voyage à Laval : consultation pré-voyage, vaccination et prescriptions au 1435 boul. Saint-Martin Ouest, près des autoroutes 15 et 440.',
      en: 'Travel clinic in Laval: pre-travel consultation, vaccination and prescriptions at 1435 boul. Saint-Martin Ouest, near highways 15 and 440.',
    },
    access: {
      fr: 'La clinique se trouve à la même adresse que la Polyclinique St-Martin et le centre de radiologie St-Martin & Bois-de-Boulogne, et on y accède facilement par les autoroutes 15 et 440.',
      en: 'The clinic is at the same address as the Polyclinique St-Martin and the St-Martin & Bois-de-Boulogne radiology centre, and is easy to reach from highways 15 and 440.',
    },
    amenities: ['fr', 'en', 'radiology', 'elevator', 'parking', 'pharmacy'],
    map: 'https://www.google.com/maps/search/?api=1&query=1435%20Boulevard%20Saint-Martin%20Ouest%20%23425%2C%20Laval%2C%20QC%2C%20Canada',
  },
  {
    slug: { fr: 'montreal', en: 'montreal' },
    index: 1,
    name: 'Montréal (Outremont)',
    title: { fr: 'Clinique Santé Voyage | Outremont - Montréal', en: 'Travel Health Clinic | Outremont - Montreal' },
    h1: { fr: 'Clinique de voyage à Outremont – Montréal', en: 'Travel Clinic in Outremont – Montreal' },
    description: {
      fr: 'Clinique voyage à Montréal (Outremont) : consultation pré-voyage, vaccination et prescriptions au 2645 avenue Van Horne, près du métro et du REM.',
      en: 'Travel clinic in Montreal (Outremont): pre-travel consultation, vaccination and prescriptions at 2645 Van Horne Avenue, near the metro and REM.',
    },
    access: {
      fr: 'La clinique est dans le quartier Outremont, à quelques minutes des stations de métro de la ligne bleue et du REM.',
      en: 'The clinic is in the Outremont neighbourhood, a few minutes from blue line metro stations and the REM.',
    },
    amenities: ['fr', 'en', 'parking', 'elevator'],
    map: 'https://www.google.com/maps/search/?api=1&query=2645%20Avenue%20Van%20Horne%20suite%20206%2C%20Montr%C3%A9al%2C%20QC%2C%20Canada',
  },
  {
    slug: { fr: 'longueuil', en: 'longueuil' },
    index: 2,
    name: 'Longueuil',
    title: { fr: 'Clinique Santé Voyage | Longueuil - Rive-Sud', en: 'Travel Health Clinic | Longueuil - South Shore' },
    h1: { fr: 'Clinique de voyage à Longueuil – Rive-Sud de Montréal', en: 'Travel Clinic in Longueuil – South Shore of Montreal' },
    description: {
      fr: 'Clinique voyage sur la Rive-Sud : consultation pré-voyage, vaccination et prescriptions au 5125 boul. Cousineau, à Longueuil, près de l’autoroute 116.',
      en: 'Travel clinic on the South Shore: pre-travel consultation, vaccination and prescriptions at 5125 boul. Cousineau, Longueuil, near Highway 116.',
    },
    access: {
      fr: 'La clinique est à la jonction du boulevard Cousineau et de l’autoroute 116, facile d’accès depuis Longueuil, Boucherville, Saint-Lambert, Saint-Bruno et Brossard.',
      en: 'The clinic is at the junction of Cousineau Boulevard and Highway 116, easy to reach from Longueuil, Boucherville, Saint-Lambert, Saint-Bruno and Brossard.',
    },
    amenities: ['fr', 'en', 'elevator', 'parking', 'pharmacy'],
    map: 'https://www.google.com/maps/search/?api=1&query=5125%20Bd%20Cousineau%20Suite%20206%2C%20Saint-Hubert%2C%20QC%20J3Y%203K7%2C%20Canada',
  },
  {
    slug: { fr: 'blainville', en: 'blainville' },
    index: 3,
    name: 'Blainville',
    title: { fr: 'Clinique Santé Voyage | Blainville - Rive-Nord', en: 'Travel Health Clinic | Blainville - North Shore' },
    // The sheet's H1 says "Rive Sud"; Blainville is on the North Shore, as its title says.
    h1: { fr: 'Clinique de voyage à Blainville – Rive-Nord de Montréal', en: 'Travel Clinic in Blainville – North Shore of Montreal' },
    description: {
      fr: 'Clinique voyage à Blainville : consultation pré-voyage, vaccination et prescriptions pour Blainville, Rosemère, Boisbriand, Mirabel et Sainte-Thérèse.',
      en: 'Travel clinic in Blainville: pre-travel consultation, vaccination and prescriptions for Blainville, Rosemère, Boisbriand, Mirabel and Sainte-Thérèse.',
    },
    access: {
      fr: 'La clinique est à proximité pour les résidents de Blainville, Rosemère, Boisbriand, Mirabel et Sainte-Thérèse.',
      en: 'The clinic is close by for residents of Blainville, Rosemère, Boisbriand, Mirabel and Sainte-Thérèse.',
    },
    amenities: ['fr', 'en', 'elevator', 'parking', 'pharmacy'],
    map: 'https://www.google.com/maps/search/?api=1&query=1099%20Boulevard%20Cur%C3%A9-Labelle%2C%20Blainville%2C%20QC%2C%20Canada',
  },
];

export const clinicPath = (c: ClinicPage, lang: Lang) => (lang === 'fr' ? `/cliniques/${c.slug.fr}/` : `/en/clinics/${c.slug.en}/`);

// Labels.
export const clinicCopy: Record<Lang, {
  home: string;
  section: { label: string; href: string };
  crumbs: string;
  badge: string;
  book: string;
  directions: string;
  contact: string;
  phone: string;
  fax: string;
  email: string;
  hours: string;
  weekdays: string;
  weekend: string;
  closed: string;
  amenitiesTitle: string;
  amenities: Record<Amenity, string>;
  servicesEyebrow: string;
  servicesTitle: (name: string) => string;
  services: { title: string; href: string }[];
  more: string;
  others: string;
}> = {
  fr: {
    home: 'Accueil',
    section: { label: 'Cliniques', href: '/contact/' },
    crumbs: 'Fil d’Ariane',
    badge: 'Clinique santé-voyage',
    book: 'Prendre rendez-vous',
    directions: 'Voir l’itinéraire',
    contact: 'Contact',
    phone: 'Téléphone',
    fax: 'Télécopieur',
    email: 'Courriel',
    hours: 'Heures d’ouverture',
    weekdays: 'Lundi au vendredi',
    weekend: 'Samedi et dimanche',
    closed: 'Fermé',
    amenitiesTitle: 'Sur place',
    amenities: { fr: 'Français', en: 'Anglais', elevator: 'Ascenseur', parking: 'Stationnement', pharmacy: 'Pharmacie sur place', radiology: 'Radiologie sur place' },
    servicesEyebrow: 'Nos services',
    servicesTitle: (name) => `Services santé-voyage à ${name}`,
    // Page titles of the service pages.
    services: [
      { title: 'Consultation médicale pré-voyage', href: '/consultation/' },
      { title: 'Clinique de vaccination pré-voyage', href: '/vaccination/' },
      { title: 'Prescription de médicament', href: '/prescription/' },
      { title: 'Vaccination recommandée par pays et régions', href: '/pays/' },
    ],
    more: 'En savoir plus',
    others: 'Nos cliniques',
  },
  en: {
    home: 'Home',
    section: { label: 'Clinics', href: '/en/contact/' },
    crumbs: 'Breadcrumb',
    badge: 'Travel health clinic',
    book: 'Book an appointment',
    directions: 'Get directions',
    contact: 'Contact',
    phone: 'Phone',
    fax: 'Fax',
    email: 'Email',
    hours: 'Opening hours',
    weekdays: 'Monday to Friday',
    weekend: 'Saturday and Sunday',
    closed: 'Closed',
    amenitiesTitle: 'On site',
    amenities: { fr: 'French', en: 'English', elevator: 'Elevator', parking: 'Parking', pharmacy: 'On-site pharmacy', radiology: 'On-site radiology' },
    servicesEyebrow: 'Our services',
    servicesTitle: (name) => `Travel health services in ${name}`,
    services: [
      { title: 'Pre-travel medical consultation', href: '/en/consultation/' },
      { title: 'Pre-travel vaccination clinic', href: '/en/pre-travel-vaccination-clinic/' },
      { title: 'Prescription drugs', href: '/en/prescription-travel/' },
      { title: 'Travel Vaccination by Country and Region', href: '/en/countries/' },
    ],
    more: 'Learn more',
    others: 'Our clinics',
  },
};
