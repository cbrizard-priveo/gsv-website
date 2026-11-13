// Homepage copy, French and English: verbatim from the original site (homepage, its meta description,
// and page titles), plus neutral section labels. Medical site: do not add or rephrase content here.
// Exceptions, from the SEO expert's recommendations: the English hero title, the clinics heading and its
// first sentence, and the image descriptions (alt).
import { BOOKING, type Lang } from './site';

type Icon = 'compass' | 'clipboard' | 'globe';

export interface HomeContent {
  hero: { badge: string; title: string; titleEm: string; text: string; primary: { label: string; href: string }; secondary: { label: string; href: string } };
  audience: { title: string; cards: { title: string; href: string; image: string; alt: string }[] };
  about: { eyebrow: string; title: string; titleEm?: string; paragraphs: string[]; cta: { label: string; href: string }; image: string; imageAlt: string };
  points: { eyebrow: string; title: string; items: { icon: Icon; text: string }[]; cta: { label: string; href: string } };
  team: { eyebrow: string; title: string; text: string; members: { name: string; role: string }[]; cta: { label: string; href: string } };
  testimonials: { eyebrow: string; title: string; previous: string; next: string; items: { quote: string; name: string; role: string }[] };
  blog: { eyebrow: string; title: string; cta: { label: string; href: string }; readMore: string };
  clinics: { eyebrow: string; title: string; text: string; parking: string; details: string; cta: { label: string; href: string } };
}

const IMG = '/wp-content/uploads';

export const home: Record<Lang, HomeContent> = {
  fr: {
    hero: {
      badge: 'Groupe Santé Voyage',
      title: 'Votre partenaire de voyage',
      titleEm: 'depuis 1997',
      // The homepage's meta description.
      text: 'Médecins et infirmières spécialisées en santé-voyage et en vaccination depuis 1997 à Montréal, Laval, Longueuil et Blainville',
      primary: { label: 'Prendre rendez-vous', href: BOOKING },
      secondary: { label: 'Découvrir la clinique du voyageur', href: '/clinique-du-voyageur/' },
    },
    audience: {
      title: 'Nos services',
      // Card titles are the page titles.
      cards: [
        { title: 'Clinique du voyageur', href: '/clinique-du-voyageur/', image: '/images/home/travel-main.jpg', alt: 'Voyageur qui consulte une carte avant une randonnée' },
        { title: 'Vaccination générale', href: '/vaccination-generale/', image: '/images/home/vaccination.jpg', alt: 'Professionnel de la santé qui administre un vaccin dans le bras d’une patiente' },
        { title: 'Vaccination en entreprise', href: '/vaccination-en-entreprise/', image: '/images/home/service-entreprise.jpg', alt: 'Employés au travail dans un café' },
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
      imageAlt: 'Rencontre en clinique du voyageur avec une spécialiste en santé-voyage',
    },
    points: {
      eyebrow: 'Notre expertise',
      title: 'Les avantages de faire appel à notre clinique du voyageur',
      items: [
        { icon: 'compass', text: 'La combinaison de notre expérience et de l’expertise de nos experts de la santé promet de vous aider à voyager sans tracas.' },
        { icon: 'clipboard', text: 'Nos infirmières détiennent des compétences qui vont bien au-delà de l’administration d’un vaccin. En analysant les modalités de votre voyage, celles-ci sont en effet capables d’élaborer un plan d’action efficace et détaillé.' },
        { icon: 'globe', text: 'Puisqu’il s’agit d’un monde en constante évolution, notre équipe actualise fréquemment son savoir en risques sanitaires internationaux et contextes géopolitiques. Nous disposons de connaissances continuellement renouvelées quant aux restrictions et risques sanitaires internationaux.' },
      ],
      cta: { label: 'Découvrir la clinique du voyageur', href: '/clinique-du-voyageur/' },
    },
    team: {
      eyebrow: 'Notre équipe',
      title: 'Notre équipe d’experts de la santé',
      text: 'Fondateur du Groupe Santé Voyage et médecin de famille de formation, le Dr Martin Brizard a toujours eu à cœur de développer des services personnalisés en santé-voyage pour honorer le caractère unique de votre propre aventure.',
      members: [
        { name: 'Dr Martin Brizard', role: 'Fondateur du Groupe Santé Voyage et médecin de famille de formation' },
        { name: 'Dre. Dominique Tessier', role: 'Directrice Médicale et Présidente du Colloque annuel sur la santé des voyageurs' },
        { name: 'Éric Latendresse', role: 'Directeur général du Groupe Santé Voyage' },
      ],
      cta: { label: 'En savoir plus', href: '/a-propos/' },
    },
    testimonials: {
      eyebrow: 'Témoignages',
      title: 'Des milliers de voyageurs satisfaits',
      previous: 'Témoignage précédent',
      next: 'Témoignage suivant',
      items: [
        { quote: 'De très bons conseils adaptés à nos besoins. L’infirmière avait une connaissance approfondie des différents risques selon notre itinéraire et a pris le temps de nous expliquer les avantages de chacun des vaccins ou traitements proposés.', name: 'Amélie', role: 'Voyageuse satisfaite' },
        { quote: 'Service de classe mondiale! Continuez ce bon travail. Excellent service client, très efficace et serviable. J’ai appelé pour faire réimprimer un certificat de vaccin, ils ont pu le trouver dans mes dossiers sans aucun problème. Lorsque je me suis présenté le lendemain, les documents étaient déjà préparés avec la réceptionniste et prêts à être récupérés.', name: 'Maria', role: 'Voyageuse satisfaite' },
        { quote: 'J’ai beaucoup apprécié les informations communiquées sur les risques pour la santé des divers pays de notre itinéraire lors de la rencontre. Très professionnel.', name: 'Léo', role: 'Voyageur satisfait' },
        { quote: 'L’infirmière a pris le temps de bien nous informer des vaccins nécessaires selon le pays visité. Très intègre et professionnel.', name: 'Lucie', role: 'Voyageuse satisfaite' },
        { quote: 'Voilà une clinique qui offre un service extraordinaire! Le service est cordiale et efficace. Très bonne évaluation du dossier en vue du voyage et excellents conseils! Et en plus, il n’y a jamais d’attente! Ma mère et moi ne pouvions pas être plus satisfaites! Merci pour l’excellence de vos services!', name: 'Lorena', role: 'Voyageuse satisfaite' },
        { quote: 'Super accueil et excellent service de l’infirmière. Nous avons même pu échanger avec la médecin pour des conseils voyage avec bébé.', name: 'Marie-Gille', role: 'Voyageuse satisfaite' },
      ],
    },
    blog: { eyebrow: 'Info Santé', title: 'Notre blog', cta: { label: 'Voir tous les articles', href: '/info-sante/' }, readMore: 'En savoir plus' },
    clinics: {
      eyebrow: 'Nos cliniques',
      title: 'Groupe Santé Voyage dessert tout le Grand Montréal',
      text: 'Nos cliniques sont situées à Laval, Montréal, Blainville et Longueuil. Le Groupe Santé Voyage met plusieurs points de service à la disposition des personnes qui souhaitent voyager. De la Rive-Nord à la Rive-Sud de Montréal, les différentes zones que nous couvrons nous permettent de vous faciliter l’accès à des conseils santé-voyage de qualité.',
      parking: 'Stationnement gratuit',
      details: 'Voir la clinique',
      cta: { label: 'Trouver une clinique', href: '/cliniques/' },
    },
  },
  en: {
    hero: {
      badge: 'Groupe Santé Voyage',
      title: 'Your travel clinic',
      titleEm: 'since 1997',
      text: 'Doctors and nurses specializing in travel health and vaccination since 1997 in Montreal, Laval, Longueuil and Blainville',
      primary: { label: 'Book an appointment', href: BOOKING },
      secondary: { label: 'Discover the Travel Clinic', href: '/en/travellers-clinic/' },
    },
    audience: {
      title: 'Our services',
      cards: [
        { title: 'Traveller’s clinic', href: '/en/travellers-clinic/', image: '/images/home/travel-main.jpg', alt: 'Traveller looking at a map before a hike' },
        { title: 'General vaccination', href: '/en/general-vaccination/', image: '/images/home/vaccination.jpg', alt: 'Health professional giving a patient a vaccine in the arm' },
        { title: 'Vaccination in the workplace', href: '/en/vaccination-in-the-workplace/', image: '/images/home/service-entreprise.jpg', alt: 'Employees at work in a café' },
      ],
    },
    about: {
      eyebrow: 'About Travel Health Group',
      title: 'All-in-one travel clinic',
      paragraphs: [
        'One of the first institutions to take an interest in the health of globetrotters, Groupe Santé Voyage is a travel clinic that takes care of the medical planning of your trip.',
        'By providing a range of services such as <a href="/en/pre-travel-vaccination-clinic/">travel vaccinations</a>, <a href="/en/consultation/">pre-travel medical consultations</a> and <a href="/en/prescription-travel/">prescription medication</a>, we contribute to your peace of mind abroad.',
      ],
      cta: { label: 'Discover the group', href: '/en/about-us/' },
      image: `${IMG}/2021/11/groupe-sante-voyage-tout-en-un.jpg`,
      imageAlt: 'Meeting with a travel health specialist at the travel clinic',
    },
    points: {
      eyebrow: 'Our expertise',
      title: 'The advantages of using our travel clinic',
      items: [
        { icon: 'compass', text: 'The combination of our experience and the expertise of our health experts promises to help you travel worry-free.' },
        { icon: 'clipboard', text: 'Our nurses have skills that go far beyond administering a vaccine. By analyzing the terms and conditions of your trip, they are able to draw up an effective, detailed action plan.' },
        { icon: 'globe', text: 'As the world is constantly evolving, our team frequently updates its knowledge of international health risks and geopolitical contexts. We are constantly updating our knowledge of international health restrictions and risks.' },
      ],
      cta: { label: 'Discover the Travel Clinic', href: '/en/travellers-clinic/' },
    },
    team: {
      eyebrow: 'Our team',
      title: 'Our team of health experts',
      text: 'Founder of Groupe Santé Voyage and a family doctor by training, Dr. Martin Brizard has always been committed to developing personalized travel health services to honour the uniqueness of your own adventure.',
      members: [
        { name: 'Dr. Martin Brizard', role: 'Founder of Groupe Santé Voyage and a family doctor by training' },
        { name: 'Dre. Dominique Tessier', role: 'Medical Director and Chair of the Annual Symposium on Travelers’ Health' },
        { name: 'Éric Latendresse', role: 'Travel Health Group General Manager' },
      ],
      cta: { label: 'Learn more', href: '/en/about-us/' },
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'Thousands of satisfied travellers',
      previous: 'Previous testimonial',
      next: 'Next testimonial',
      items: [
        { quote: 'Very good advice tailored to our needs. The nurse had a thorough knowledge of the different risks according to our itinerary and took the time to explain the benefits of each of the vaccines or treatments proposed.', name: 'Amélie', role: 'Satisfied traveler' },
        { quote: 'World-class service! Keep up the good work. Excellent customer service, very efficient and helpful. I called to have a vaccination certificate reprinted, and they were able to find it in my files without any problem. When I arrived the next day, the documents had already been prepared with the receptionist and were ready for collection.', name: 'Maria', role: 'Satisfied traveler' },
        { quote: 'I very much appreciated the information provided on the health risks of the various countries on our itinerary during the meeting. Very professional.', name: 'Léo', role: 'Satisfied traveler' },
        { quote: 'The nurse took the time to inform us about the vaccinations required for the country we were visiting. Very honest and professional.', name: 'Lucie', role: 'Satisfied traveler' },
        { quote: 'Here’s a clinic that offers extraordinary service! The service is friendly and efficient. Very good assessment of the travel file and excellent advice! And what’s more, there’s never a wait! My mother and I couldn’t be happier! Thank you for your excellent service!', name: 'Lorena', role: 'Satisfied traveler' },
        { quote: 'Super welcome and excellent service from the nurse. We were even able to talk to the doctor for advice on traveling with baby.', name: 'Marie-Gille', role: 'Satisfied traveler' },
      ],
    },
    blog: { eyebrow: 'Health info', title: 'Our blog', cta: { label: 'See all articles', href: '/en/info-sante/' }, readMore: 'Read more' },
    clinics: {
      eyebrow: 'Our clinics',
      title: 'Groupe Santé Voyage serves all of Greater Montreal',
      text: 'Our clinics are located in Laval, Montreal, Blainville and Longueuil. Groupe Santé Voyage offers several points of service for people who want to travel. From the North Shore to the South Shore of Montreal, the different areas we cover give us easy access to quality travel health advice.',
      parking: 'Free parking',
      details: 'View the clinic',
      cta: { label: 'Find a clinic', href: '/en/clinics/' },
    },
  },
};
