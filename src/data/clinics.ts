// Clinic pages. Details (fax, hours, amenities, access) are copied from Priveo Santé's
// clinic pages (priveosante.com/cliniques/…, checked 2026-11-10), as the client asked; the access
// sentence restates Priveo's in our words. Titles and H1s from the SEO expert's sheet.
// Montréal: the clinic is on Van Horne (Outremont) with a pharmacy in the building, as the client
// confirmed 2026-11-10 (Priveo's English page still shows an older Côte-des-Neiges address).
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
  /** Short name for the map's pins and city buttons. */
  short: string;
  /** [latitude, longitude], as on Priveo's clinic map (dev.priveosante.com/cliniques/). */
  position: [number, number];
  /** Photo of the clinic, from Priveo's clinic pages (used with the client's agreement, 2026-11-12). */
  photo: string;
}

// Phone and email: the old site's, used site-wide (client's choice, 2026-11-12). Fax: Priveo's clinic pages.
export const CLINIC_CONTACT = { phone: '855-582-2246', fax: '579-306-0302', email: 'info@cliniquesantevoyage.com' };

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
    short: 'Laval',
    position: [45.570468, -73.724004],
    photo: '/images/clinics/laval.jpg',
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
    amenities: ['fr', 'en', 'parking', 'elevator', 'pharmacy'],
    map: 'https://www.google.com/maps/search/?api=1&query=2645%20Avenue%20Van%20Horne%20suite%20206%2C%20Montr%C3%A9al%2C%20QC%2C%20Canada',
    short: 'Montréal',
    position: [45.5090323, -73.6250088],
    photo: '/images/clinics/montreal.jpg',
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
    short: 'Longueuil',
    position: [45.5024753, -73.4272094],
    photo: '/images/clinics/longueuil.webp',
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
    short: 'Blainville',
    position: [45.6778826, -73.8871277],
    photo: '/images/clinics/blainville.jpg',
  },
];

export const clinicPath = (c: ClinicPage, lang: Lang) => (lang === 'fr' ? `/cliniques/${c.slug.fr}/` : `/en/clinics/${c.slug.en}/`);

export const clinicsHubPath = (lang: Lang) => (lang === 'fr' ? '/cliniques/' : '/en/clinics/');

// Text of the clinic pages, in the modules of dev.priveosante.com (src/components/priveo/).
// - Module labels ("Trouvez votre clinique", "Nous trouver à…", "Sur place"…): Priveo's own (web-priveo-sante,
//   site/src/lib/i18n.ts), since these are the same clinics.
// - Hub hero: the homepage's clinics section (validated copy, SEO sheet).
// - Telemedicine band: our telemedicine page's own text (/consultation-en-telemedecine/).
// - Booking steps: Priveo's step titles; its step texts named services Groupe Santé Voyage doesn't offer, so
//   they restate this site's services and telemedicine page instead (client agreed, 2026-11-12).
export const clinicCopy: Record<Lang, {
  home: string;
  book: string;
  more: string;
  hub: { seoTitle: string; description: string; tagline: string; title: string; text: string; imageAlt: string };
  map: { eyebrow: string; title: string; lede: string; status: string; services: string; view: string; choose: string; mapLabel: string };
  services: { title: string; href: string }[];
  clinic: {
    eyebrow: string;
    contactEyebrow: string;
    findUs: (name: string) => string;
    reach: string;
    address: string;
    phone: string;
    fax: string;
    email: string;
    directions: string;
    hours: string;
    weekdays: string;
    weekend: string;
    closed: string;
    onSite: string;
    servicesEyebrow: string;
    servicesTitle: (name: string) => string;
    servicesLede: string;
  };
  amenities: Record<Amenity, string>;
  telemedicine: { badge: string; title: string; text: string; cta: { label: string; href: string }; asideTitle: string; items: string[] };
  steps: { tagline: string; title: string; items: { title: string; text: string }[] };
}> = {
  fr: {
    home: 'Accueil',
    book: 'Prendre rendez-vous',
    more: 'En savoir plus',
    hub: {
      seoTitle: 'Nos cliniques santé-voyage | Laval, Montréal, Longueuil, Blainville',
      description: 'Nos cliniques santé-voyage sont situées à Laval, Montréal, Blainville et Longueuil, de la Rive-Nord à la Rive-Sud de Montréal.',
      tagline: 'Nos cliniques',
      title: 'Groupe Santé Voyage dessert tout le Grand Montréal',
      text: 'Nos cliniques sont situées à Laval, Montréal, Blainville et Longueuil. De la Rive-Nord à la Rive-Sud de Montréal, les différentes zones que nous couvrons nous permettent de vous faciliter l’accès à des conseils santé-voyage de qualité.',
      imageAlt: 'Accueil d’une clinique',
    },
    map: {
      eyebrow: 'Nos cliniques',
      title: 'Trouvez votre clinique',
      lede: 'Des cliniques modernes et accueillantes, proches de chez vous, pour un accès rapide à des soins de qualité.',
      status: 'En personne & virtuel',
      services: 'Services offerts',
      view: 'Voir la clinique',
      choose: 'Choisir une clinique',
      mapLabel: 'Carte de la grande région de Montréal',
    },
    // Page titles of the service pages.
    services: [
      { title: 'Consultation médicale pré-voyage', href: '/consultation/' },
      { title: 'Clinique de vaccination pré-voyage', href: '/vaccination/' },
      { title: 'Prescription de médicament', href: '/prescription/' },
      { title: 'Vaccination recommandée par pays et régions', href: '/pays/' },
    ],
    clinic: {
      eyebrow: 'Clinique',
      contactEyebrow: 'Coordonnées',
      findUs: (name) => `Nous trouver à ${name}`,
      reach: 'Nous joindre',
      address: 'Adresse',
      phone: 'Téléphone',
      fax: 'Télécopieur',
      email: 'Courriel',
      directions: 'Itinéraire',
      hours: 'Heures d’ouverture',
      weekdays: 'Lundi au vendredi',
      weekend: 'Samedi et dimanche',
      closed: 'Fermé',
      onSite: 'Sur place',
      servicesEyebrow: 'Services',
      servicesTitle: (name) => `Les soins offerts à ${name}`,
      servicesLede: 'Consultations en clinique et, lorsque c’est possible, en ligne.',
    },
    amenities: { fr: 'Français', en: 'Anglais', elevator: 'Ascenseur', parking: 'Stationnement', pharmacy: 'Pharmacie sur place', radiology: 'Radiologie sur place' },
    telemedicine: {
      badge: 'Télémédecine',
      title: 'Consultation en télémédecine',
      text: 'Notre service de consultation en télémédecine vous permet de consulter un professionnel de la santé voyage du confort de votre foyer.',
      cta: { label: 'Découvrir la télémédecine', href: '/consultation-en-telemedecine/' },
      asideTitle: 'Durant cette consultation, vous recevrez :',
      items: [
        'Une évaluation de votre itinéraire et des risques pour votre santé',
        'Des conseils santé pour votre prochain voyage',
        'Des recommandations pour des vaccins personnalisés',
        'Au besoin, une prescription acheminée directement à votre pharmacie',
      ],
    },
    steps: {
      tagline: 'Comment prendre rendez-vous',
      title: 'Obtenez un accès rapide et facile aux soins',
      items: [
        { title: 'Choisissez un service', text: 'Consultation pré-voyage, vaccination ou prescription de médicaments : sélectionnez le service qui vous convient.' },
        { title: 'Prenez rendez-vous', text: 'Optez pour une consultation en clinique ou en télémédecine, en choisissant l’emplacement, la date et l’heure qui vous conviennent.' },
        { title: 'Consultez un professionnel', text: 'Recevez une évaluation de votre itinéraire, des conseils santé et des recommandations de vaccins pour votre voyage.' },
      ],
    },
  },
  en: {
    home: 'Home',
    book: 'Book an appointment',
    more: 'Learn more',
    hub: {
      seoTitle: 'Our travel health clinics | Laval, Montreal, Longueuil, Blainville',
      description: 'Our travel health clinics are located in Laval, Montreal, Blainville and Longueuil, from the North Shore to the South Shore of Montreal.',
      tagline: 'Our clinics',
      title: 'Groupe Santé Voyage serves all of Greater Montreal',
      text: 'Our clinics are located in Laval, Montreal, Blainville and Longueuil. From the North Shore to the South Shore of Montreal, the different areas we cover give us easy access to quality travel health advice.',
      imageAlt: 'Reception at a clinic',
    },
    map: {
      eyebrow: 'Our clinics',
      title: 'Find your clinic',
      lede: 'Modern, welcoming clinics close to home — fast access to quality care.',
      status: 'In person & virtual',
      services: 'Services offered',
      view: 'View clinic',
      choose: 'Choose a clinic',
      mapLabel: 'Map of the greater Montréal area',
    },
    services: [
      { title: 'Pre-travel medical consultation', href: '/en/consultation/' },
      { title: 'Pre-travel vaccination clinic', href: '/en/pre-travel-vaccination-clinic/' },
      { title: 'Prescription drugs', href: '/en/prescription-travel/' },
      { title: 'Travel Vaccination by Country and Region', href: '/en/countries/' },
    ],
    clinic: {
      eyebrow: 'Clinic',
      contactEyebrow: 'Contact details',
      findUs: (name) => `Find us in ${name}`,
      reach: 'Get in touch',
      address: 'Address',
      phone: 'Phone',
      fax: 'Fax',
      email: 'Email',
      directions: 'Directions',
      hours: 'Opening hours',
      weekdays: 'Monday to Friday',
      weekend: 'Saturday and Sunday',
      closed: 'Closed',
      onSite: 'On site',
      servicesEyebrow: 'Services',
      servicesTitle: (name) => `Care offered at ${name}`,
      servicesLede: 'In-clinic consultations and, where possible, online.',
    },
    amenities: { fr: 'French', en: 'English', elevator: 'Elevator', parking: 'Parking', pharmacy: 'On-site pharmacy', radiology: 'On-site radiology' },
    telemedicine: {
      badge: 'Telemedicine',
      title: 'Telemedicine consultation',
      text: 'Our telemedicine consultation service lets you consult a healthcare professional from the comfort of your own home.',
      cta: { label: 'Discover telemedicine', href: '/en/telemedicine-consultation/' },
      asideTitle: 'During this consultation, you will receive:',
      items: [
        'An assessment of your itinerary and the risks to your health',
        'Health tips for your next trip',
        'Recommendations for personalized vaccines',
        'If required, a prescription sent directly to your pharmacy',
      ],
    },
    steps: {
      tagline: 'How to book',
      title: 'Get quick and easy access to care',
      items: [
        { title: 'Choose a service', text: 'Pre-travel consultation, vaccination or prescription drugs: select the service that suits you.' },
        { title: 'Book an appointment', text: 'Choose an in-clinic or telemedicine consultation, with the location, date and time that suit you.' },
        { title: 'Consult a professional', text: 'Receive an assessment of your itinerary, health tips and vaccine recommendations for your trip.' },
      ],
    },
  },
};
