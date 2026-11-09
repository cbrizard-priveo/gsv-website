// Homepage copy, French and English. Text comes from the original site unless noted.
import { BOOKING, type Lang } from './site';

type Icon = 'compass' | 'clipboard' | 'globe';

export interface HomeContent {
  title: string;
  hero: { badge: string; title: string; titleEm: string; text: string; primary: { label: string; href: string }; secondary: { label: string; href: string } };
  audience: { title: string; cards: { badge: string; title: string; href: string; image: string }[] };
  about: { eyebrow: string; title: string; titleEm: string; paragraphs: string[]; cta: { label: string; href: string }; image: string };
  points: { eyebrow: string; title: string; items: { icon: Icon; title: string; text: string }[]; cta: { label: string; href: string } };
  team: { eyebrow: string; title: string; text: string; members: { name: string; role: string }[]; cta: { label: string; href: string } };
  testimonials: { eyebrow: string; title: string; text: string; previous: string; next: string; items: { quote: string; name: string; role: string }[] };
  blog: { eyebrow: string; title: string; cta: { label: string; href: string }; readMore: string };
  clinics: { eyebrow: string; title: string; text: string; parking: string; details: string; cta: { label: string; href: string } };
}

const IMG = '/wp-content/uploads';

export const home: Record<Lang, HomeContent> = {
  fr: {
    title: 'Clinique Santé Voyage | Experts en vaccination depuis 1997',
    hero: {
      badge: 'Clinique santé-voyage et vaccination',
      title: 'Votre partenaire de voyage',
      titleEm: 'depuis 1997',
      // New lede, built from the "about" paragraph below.
      text: 'Vaccination voyage, consultation médicale pré-voyage et prescription de médicaments : nous prenons en charge la planification médicale de votre périple.',
      primary: { label: 'Prendre rendez-vous', href: BOOKING },
      secondary: { label: 'Découvrir nos services', href: '/clinique-du-voyageur/' },
    },
    audience: {
      // New heading and card titles, for the three offerings in the menu.
      title: 'Santé-voyage et vaccination, pour les voyageurs, les familles et les entreprises.',
      cards: [
        { badge: 'Santé-voyage', title: 'Consultation, vaccins et prescriptions avant le départ', href: '/clinique-du-voyageur/', image: '/images/home/travel-main.jpg' },
        { badge: 'Vaccination', title: 'Vaccins pour les adultes et les enfants', href: '/vaccination-generale/', image: '/images/home/vaccination.jpg' },
        { badge: 'Entreprises', title: 'Vaccination en milieu de travail', href: '/vaccination-en-entreprise/', image: '/images/home/service-entreprise.jpg' },
      ],
    },
    about: {
      eyebrow: 'À propos du Groupe Santé Voyage',
      title: 'Clinique du voyageur',
      titleEm: 'tout-en-un',
      paragraphs: [
        'L’une des premières institutions à s’être intéressée à la santé des globe-trotteurs, le Groupe Santé Voyage est une clinique du voyageur qui prend en charge la planification médicale de votre périple.',
        'En mettant à votre disposition une gamme de services tels que la <a href="/vaccination/">vaccination voyage</a>, la <a href="/consultation/">consultation médicale pré-voyage</a> et la <a href="/prescription/">prescription de médicaments</a>, nous contribuons à votre tranquillité d’esprit à l’étranger.',
      ],
      cta: { label: 'Découvrir le groupe', href: '/a-propos/' },
      image: `${IMG}/2021/11/groupe-sante-voyage-tout-en-un.jpg`,
    },
    points: {
      eyebrow: 'Notre expertise',
      title: 'Les avantages de faire appel à notre clinique du voyageur',
      items: [
        // Short item titles are new; the text is the original.
        { icon: 'compass', title: 'Expérience et expertise', text: 'La combinaison de notre expérience et de l’expertise de nos experts de la santé promet de vous aider à voyager sans tracas.' },
        { icon: 'clipboard', title: 'Un plan sur mesure', text: 'Nos infirmières détiennent des compétences qui vont bien au-delà de l’administration d’un vaccin. En analysant les modalités de votre voyage, celles-ci sont en effet capables d’élaborer un plan d’action efficace et détaillé.' },
        { icon: 'globe', title: 'Un savoir toujours à jour', text: 'Puisqu’il s’agit d’un monde en constante évolution, notre équipe actualise fréquemment son savoir en risques sanitaires internationaux et contextes géopolitiques.' },
      ],
      cta: { label: 'Découvrir la clinique du voyageur', href: '/clinique-du-voyageur/' },
    },
    team: {
      eyebrow: 'Notre équipe',
      title: 'Notre équipe d’experts de la santé',
      text: 'Fondateur du Groupe Santé Voyage et médecin de famille de formation, le Dr Martin Brizard a toujours eu à cœur de développer des services personnalisés en santé-voyage pour honorer le caractère unique de votre propre aventure.',
      members: [
        { name: 'Dr Martin Brizard', role: 'Fondateur et médecin de famille' },
        { name: 'Dre Dominique Tessier', role: 'Directrice médicale et présidente du Colloque annuel sur la santé des voyageurs' },
        { name: 'Éric Latendresse', role: 'Directeur général' },
      ],
      cta: { label: 'En savoir plus', href: '/a-propos/' },
    },
    testimonials: {
      eyebrow: 'Témoignages',
      title: 'Des milliers de voyageurs satisfaits',
      text: 'Ce que nos patients disent de leur consultation santé-voyage.',
      previous: 'Témoignage précédent',
      next: 'Témoignage suivant',
      items: [
        { quote: 'De très bons conseils adaptés à nos besoins. L’infirmière avait une connaissance approfondie des différents risques selon notre itinéraire et a pris le temps de nous expliquer les avantages de chacun des vaccins ou traitements proposés.', name: 'Amélie', role: 'Voyageuse satisfaite' },
        { quote: 'Service de classe mondiale! Excellent service client, très efficace et serviable. J’ai appelé pour faire réimprimer un certificat de vaccin, ils ont pu le trouver dans mes dossiers sans aucun problème.', name: 'Maria', role: 'Voyageuse satisfaite' },
        { quote: 'J’ai beaucoup apprécié les informations communiquées sur les risques pour la santé des divers pays de notre itinéraire lors de la rencontre. Très professionnel.', name: 'Léo', role: 'Voyageur satisfait' },
        { quote: 'L’infirmière a pris le temps de bien nous informer des vaccins nécessaires selon le pays visité. Très intègre et professionnel.', name: 'Lucie', role: 'Voyageuse satisfaite' },
        { quote: 'Voilà une clinique qui offre un service extraordinaire! Très bonne évaluation du dossier en vue du voyage et excellents conseils! Et en plus, il n’y a jamais d’attente!', name: 'Lorena', role: 'Voyageuse satisfaite' },
        { quote: 'Super accueil et excellent service de l’infirmière. Nous avons même pu échanger avec la médecin pour des conseils voyage avec bébé.', name: 'Marie-Gille', role: 'Voyageuse satisfaite' },
      ],
    },
    blog: { eyebrow: 'Info Santé', title: 'Notre blogue', cta: { label: 'Voir tous les articles', href: '/info-sante/' }, readMore: 'Lire l’article' },
    clinics: {
      eyebrow: 'Nos cliniques',
      title: 'Trouvez une de nos cliniques santé-voyage',
      text: 'De la Rive-Nord à la Rive-Sud de Montréal, nos points de service vous facilitent l’accès à des conseils santé-voyage de qualité.',
      parking: 'Stationnement gratuit',
      details: 'Voir la clinique',
      cta: { label: 'Nous joindre', href: '/contact/' },
    },
  },
  en: {
    title: 'Clinique Santé Voyage | Vaccination experts since 1997',
    hero: {
      badge: 'Travel health and vaccination clinic',
      title: 'Your travel partner',
      titleEm: 'since 1997',
      text: 'Travel vaccinations, pre-travel medical consultations and prescription medication: we take care of the medical planning of your trip.',
      primary: { label: 'Book an appointment', href: BOOKING },
      secondary: { label: 'Discover our services', href: '/en/travellers-clinic/' },
    },
    audience: {
      title: 'Travel health and vaccination for travellers, families and businesses.',
      cards: [
        { badge: 'Travel health', title: 'Consultation, vaccines and prescriptions before you leave', href: '/en/travellers-clinic/', image: '/images/home/travel-main.jpg' },
        { badge: 'Vaccination', title: 'Vaccines for adults and children', href: '/en/general-vaccination/', image: '/images/home/vaccination.jpg' },
        { badge: 'Businesses', title: 'Vaccination in the workplace', href: '/en/vaccination-in-the-workplace/', image: '/images/home/service-entreprise.jpg' },
      ],
    },
    about: {
      eyebrow: 'About Groupe Santé Voyage',
      title: 'An',
      titleEm: 'all-in-one travel clinic',
      paragraphs: [
        'One of the first institutions to take an interest in the health of globetrotters, Groupe Santé Voyage is a travel clinic that takes care of the medical planning of your trip.',
        'By providing a range of services such as <a href="/en/pre-travel-vaccination-clinic/">travel vaccinations</a>, <a href="/en/consultation/">pre-travel medical consultations</a> and <a href="/en/prescription-travel/">prescription medication</a>, we contribute to your peace of mind abroad.',
      ],
      cta: { label: 'Discover the group', href: '/en/about-us/' },
      image: `${IMG}/2021/11/groupe-sante-voyage-tout-en-un.jpg`,
    },
    points: {
      eyebrow: 'Our expertise',
      title: 'The advantages of using our travel clinic',
      items: [
        { icon: 'compass', title: 'Experience and expertise', text: 'The combination of our experience and the expertise of our health experts promises to help you travel worry-free.' },
        { icon: 'clipboard', title: 'A tailored plan', text: 'Our nurses have skills that go far beyond administering a vaccine. By analyzing the terms and conditions of your trip, they are able to draw up an effective, detailed action plan.' },
        { icon: 'globe', title: 'Always up to date', text: 'As the world is constantly evolving, our team frequently updates its knowledge of international health risks and geopolitical contexts.' },
      ],
      cta: { label: 'Discover the travel clinic', href: '/en/travellers-clinic/' },
    },
    team: {
      eyebrow: 'Our team',
      title: 'Our team of health experts',
      text: 'Founder of Groupe Santé Voyage and a family doctor by training, Dr. Martin Brizard has always been committed to developing personalized travel health services to honour the uniqueness of your own adventure.',
      members: [
        { name: 'Dr. Martin Brizard', role: 'Founder and family doctor' },
        { name: 'Dr. Dominique Tessier', role: 'Medical Director and Chair of the Annual Symposium on Travellers’ Health' },
        { name: 'Éric Latendresse', role: 'General Manager' },
      ],
      cta: { label: 'Learn more', href: '/en/about-us/' },
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'Thousands of satisfied travellers',
      text: 'What our patients say about their travel health consultation.',
      previous: 'Previous testimonial',
      next: 'Next testimonial',
      items: [
        { quote: 'Very good advice tailored to our needs. The nurse had a thorough knowledge of the different risks according to our itinerary and took the time to explain the benefits of each of the vaccines or treatments proposed.', name: 'Amélie', role: 'Satisfied traveller' },
        { quote: 'World-class service! Excellent customer service, very efficient and helpful. I called to have a vaccination certificate reprinted, and they were able to find it in my files without any problem.', name: 'Maria', role: 'Satisfied traveller' },
        { quote: 'I very much appreciated the information provided on the health risks of the various countries on our itinerary during the meeting. Very professional.', name: 'Léo', role: 'Satisfied traveller' },
        { quote: 'The nurse took the time to inform us about the vaccinations required for the country we were visiting. Very honest and professional.', name: 'Lucie', role: 'Satisfied traveller' },
        { quote: 'Here’s a clinic that offers extraordinary service! Very good assessment of the travel file and excellent advice! And what’s more, there’s never a wait!', name: 'Lorena', role: 'Satisfied traveller' },
        { quote: 'Super welcome and excellent service from the nurse. We were even able to talk to the doctor for advice on travelling with a baby.', name: 'Marie-Gille', role: 'Satisfied traveller' },
      ],
    },
    blog: { eyebrow: 'Health info', title: 'Our blog', cta: { label: 'See all articles', href: '/en/info-sante/' }, readMore: 'Read the article' },
    clinics: {
      eyebrow: 'Our clinics',
      title: 'Find one of our travel health clinics',
      text: 'From the North Shore to the South Shore of Montréal, our points of service give you easy access to quality travel health advice.',
      parking: 'Free parking',
      details: 'View the clinic',
      cta: { label: 'Contact us', href: '/en/contact/' },
    },
  },
};
