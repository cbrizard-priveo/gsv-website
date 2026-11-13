// The service pages, rebuilt with Priveo's modules (src/views/ServicePage.astro): Consultation,
// Vaccination, Prescription, Telemedicine and Companies and groups (old URLs), and Hajj and Umrah (new). Medical site: the text restates the old pages'
// own service descriptions, the clinic's answers (2026-11-12), the telemedicine page and the verified FAQ
// and vaccine pages; the old pages' medical claims that went beyond INSPQ (e.g. Dukoral « probablement »
// recommended for travellers' diarrhea) are left out.
import type { Lang } from './site';

type Text = Record<Lang, string>;

export type Block =
  | { type: 'steps'; tagline: Text; title: Text; steps: { title: Text; text: Text }[] }
  | { type: 'callout'; badge: Text; title: Text; text: Text; cta: { label: Text; href: Text }; asideTitle: Text; items: Text[] }
  | { type: 'cards'; tagline?: Text; title: Text; lede?: Text; columns?: 2 | 3 | 4; tone?: 'plain' | 'soft'; cards: { title: Text; text: Text; href?: Text; linkLabel?: Text; image?: string }[] }
  | { type: 'vaccines'; tagline: Text; title: Text; lede: Text; note: Text }
  | { type: 'faq'; ids: string[] }
  /** Rows of a country page (src/data/countries/<slug>.json), word for word, with the INSPQ source. */
  | { type: 'country'; slug: string; tagline: Text; title: Text; lede: Text; rows: string[]; all: Text }
  | { type: 'clinics' }
  | { type: 'booking' };

export interface ServicePage {
  route: Text;
  hero: { tagline: Text; title: Text; description: Text; image: { src: string; width: number; height: number; alt: Text } };
  blocks: Block[];
}

const tele: Text = { fr: '/consultation-en-telemedecine/', en: '/en/telemedicine-consultation/' };
const faqPage: Text = { fr: '/foire-aux-questions-sur-la-clinique-voyage/', en: '/en/frequently-asked-questions-about-the-travel-clinic/' };
const tarifs: Text = { fr: '/tarifs/', en: '/en/pricing/' };
const more: Text = { fr: 'En savoir plus', en: 'Learn more' };
const contact: Text = { fr: 'mailto:info@cliniquesantevoyage.com', en: 'mailto:info@cliniquesantevoyage.com' };

export const servicePages: ServicePage[] = [
  // ---- Consultation ----------------------------------------------------------------------------------------
  {
    route: { fr: '/consultation/', en: '/en/consultation/' },
    hero: {
      tagline: { fr: 'Consultation santé-voyage', en: 'Travel health consultation' },
      title: { fr: 'Consultation médicale pré-voyage', en: 'Pre-travel medical consultation' },
      description: {
        fr: 'Votre santé et votre sécurité devraient être au cœur de la planification de votre voyage. Nos professionnels de la santé vous aident à vous y retrouver parmi les vaccins et les médicaments destinés aux voyageurs.',
        en: 'Your health and safety should be at the heart of planning your trip. Our health professionals help you find your way through the vaccines and medications designed for travellers.',
      },
      image: { src: '/images/clinics/reception.jpg', width: 1000, height: 1000, alt: { fr: 'Accueil d’une clinique', en: 'Reception at a clinic' } },
    },
    blocks: [
      {
        type: 'steps',
        tagline: { fr: 'Déroulement', en: 'How it works' },
        title: { fr: 'Comment se déroule la consultation', en: 'How the consultation works' },
        steps: [
          {
            title: { fr: 'Nous recueillons vos renseignements', en: 'We gather your information' },
            text: {
              fr: 'Les pays et les régions visités, la durée et le type de voyage (circuit, sac à dos, trek…), votre santé et les vaccins que vous avez reçus.',
              en: 'The countries and regions you will visit, the length and type of trip (tour, backpacking, trek…), your health and the vaccines you have received.',
            },
          },
          {
            title: { fr: 'Nous évaluons vos besoins', en: 'We assess your needs' },
            text: {
              fr: 'Une infirmière spécialisée en santé-voyage évalue votre itinéraire et les risques pour votre santé.',
              en: 'A nurse who specializes in travel health assesses your itinerary and the risks to your health.',
            },
          },
          {
            title: { fr: 'Nous vous conseillons', en: 'We advise you' },
            text: {
              fr: 'Vous recevez des conseils santé pour votre voyage, des recommandations de vaccins et, au besoin, une prescription.',
              en: 'You receive health advice for your trip, vaccine recommendations and, if needed, a prescription.',
            },
          },
        ],
      },
      {
        type: 'cards',
        tagline: { fr: 'Deux façons de consulter', en: 'Two ways to consult' },
        title: { fr: 'En clinique ou à distance', en: 'In clinic or remotely' },
        columns: 2,
        cards: [
          {
            title: { fr: 'En clinique', en: 'In clinic' },
            text: {
              fr: '<p>Dans l’une de nos quatre cliniques, à Montréal, Laval, Longueuil et Blainville, sur rendez-vous. Les vaccins recommandés vous sont donnés pendant la même visite.</p>',
              en: '<p>At one of our four clinics, in Montreal, Laval, Longueuil and Blainville, by appointment. The recommended vaccines are given during the same visit.</p>',
            },
            href: { fr: '/cliniques/', en: '/en/clinics/' },
            linkLabel: { fr: 'Nos cliniques', en: 'Our clinics' },
          },
          {
            title: { fr: 'En télémédecine', en: 'By telemedicine' },
            text: {
              fr: '<p>De chez vous : évaluation de votre itinéraire, conseils, recommandations de vaccins et, au besoin, une prescription envoyée à votre pharmacie. Les vaccins sont ensuite donnés à domicile ou dans l’une de nos cliniques.</p>',
              en: '<p>From home: an assessment of your itinerary, advice, vaccine recommendations and, if needed, a prescription sent to your pharmacy. Vaccines are then given at home or at one of our clinics.</p>',
            },
            href: tele,
            linkLabel: { fr: 'La télémédecine', en: 'Telemedicine' },
          },
        ],
      },
      {
        type: 'callout',
        badge: { fr: 'Avant la visite', en: 'Before your visit' },
        title: { fr: 'Préparer votre rendez-vous', en: 'Preparing for your appointment' },
        text: {
          fr: 'Le gouvernement du Canada recommande de consulter environ six semaines avant le départ. Il n’est jamais trop tard pour une consultation. Vous êtes reçu par une infirmière spécialisée en santé-voyage ; au besoin, une consultation complémentaire avec un médecin vous est offerte sans frais.',
          en: 'The Government of Canada advises consulting about six weeks before your trip. It’s never too late for a consultation. You are seen by a nurse who specializes in travel health; if needed, a follow-up consultation with a doctor is offered at no charge.',
        },
        cta: { label: { fr: 'Voir nos tarifs', en: 'See our prices' }, href: tarifs },
        asideTitle: { fr: 'À apporter :', en: 'What to bring:' },
        items: [
          { fr: 'Votre carnet de vaccination', en: 'Your vaccination booklet' },
          { fr: 'L’itinéraire de votre voyage', en: 'Your travel itinerary' },
          { fr: 'La liste des médicaments que vous prenez', en: 'The list of medications you take' },
        ],
      },
      {
        type: 'cards',
        tagline: { fr: 'Pour tous les voyageurs', en: 'For every traveller' },
        title: { fr: 'Situations particulières', en: 'Special situations' },
        tone: 'soft',
        columns: 3,
        cards: [
          {
            title: { fr: 'Voyage en altitude', en: 'High-altitude travel' },
            text: {
              fr: '<p>Un séjour en altitude comporte son lot de défis. Selon votre état de santé et votre destination, nos experts peuvent vous prescrire une médication contre le mal aigu des montagnes.</p>',
              en: '<p>A stay at altitude has its own challenges. Depending on your health and your destination, our experts can prescribe medication for acute mountain sickness.</p>',
            },
            image: '/wp-content/uploads/2023/08/montain-travel-1024x1536.jpg',
            href: { fr: '/prescription/', en: '/en/prescription-travel/' },
            linkLabel: more,
          },
          {
            title: { fr: 'Voyage en groupe', en: 'Group travel' },
            text: {
              fr: '<p>Consultation, conférence et vaccination pour les groupes : voyage étudiant, groupe d’une agence, gens d’affaires… La vaccination de groupe contre la rage est possible dans la majorité de nos cliniques.</p>',
              en: '<p>Consultations, talks and vaccination for groups: student trips, agency groups, business travellers… Group rabies vaccination is available at most of our clinics.</p>',
            },
            image: '/wp-content/uploads/2023/08/group-travel-1024x683.jpg',
            href: { fr: `${faqPage.fr}#clinique`, en: `${faqPage.en}#clinique` },
            linkLabel: more,
          },
          {
            title: { fr: 'Enfants, bébés et grossesse', en: 'Children, babies and pregnancy' },
            text: {
              fr: '<p>Nous recevons les voyageurs de tout âge, bébés inclus. Voyager avec des enfants ou pendant une grossesse : consultez les réponses de notre FAQ.</p>',
              en: '<p>We see travellers of all ages, including babies. Travelling with children or during pregnancy: see the answers in our FAQ.</p>',
            },
            image: '/wp-content/uploads/2019/10/travel-itinary-683x1024.jpg',
            href: { fr: `${faqPage.fr}#avant-depart`, en: `${faqPage.en}#avant-depart` },
            linkLabel: { fr: 'Voir la FAQ', en: 'See the FAQ' },
          },
        ],
      },
      { type: 'faq', ids: ['quand-consulter-avant-depart', 'ou-consulter-reseau-public', 'rendez-vous', 'vaccins-meme-visite', 'quoi-apporter', 'medecin-ou-infirmiere', 'frais-consultation'] },
      { type: 'clinics' },
      { type: 'booking' },
    ],
  },

  // ---- Vaccination ------------------------------------------------------------------------------------------
  {
    route: { fr: '/vaccination/', en: '/en/pre-travel-vaccination-clinic/' },
    hero: {
      tagline: { fr: 'Vaccination voyage', en: 'Travel vaccination' },
      title: { fr: 'Clinique de vaccination pré-voyage', en: 'Pre-travel vaccination clinic' },
      description: {
        fr: 'Selon votre voyage, certains vaccins peuvent être fortement recommandés, et d’autres exigés pour entrer dans certains pays.',
        en: 'Depending on your trip, some vaccines may be strongly recommended, and others required to enter certain countries.',
      },
      image: { src: '/wp-content/uploads/2021/12/groupe-sante-voyage-vaccins-obligatoire-vaccination.jpg', width: 1200, height: 768, alt: { fr: 'Vaccination', en: 'Vaccination' } },
    },
    blocks: [
      {
        type: 'callout',
        badge: { fr: 'Sur mesure', en: 'Tailored' },
        title: { fr: 'Un plan de vaccination adapté à votre voyage', en: 'A vaccination plan tailored to your trip' },
        text: {
          fr: 'Nos infirmières d’expérience tiennent compte de votre santé et de votre voyage pour établir votre plan de vaccination. Les vaccins recommandés vous sont donnés pendant la consultation.',
          en: 'Our experienced nurses take your health and your trip into account to build your vaccination plan. The recommended vaccines are given during the consultation.',
        },
        cta: { label: { fr: 'Vaccins par destination', en: 'Vaccines by destination' }, href: { fr: '/pays/', en: '/en/countries/' } },
        asideTitle: { fr: 'Ce que nous considérons :', en: 'What we take into account:' },
        items: [
          { fr: 'Les pays et les régions visités', en: 'The countries and regions you visit' },
          { fr: 'La durée du voyage', en: 'The length of the trip' },
          { fr: 'Votre historique de santé et votre état actuel', en: 'Your health history and current condition' },
          { fr: 'Le type de voyage : circuit, sac à dos, trek…', en: 'The type of trip: tour, backpacking, trek…' },
        ],
      },
      {
        type: 'vaccines',
        tagline: { fr: 'Nos vaccins', en: 'Our vaccines' },
        title: { fr: 'Les vaccins offerts en clinique', en: 'Vaccines available at our clinics' },
        lede: { fr: 'Vaccins de voyage et vaccins généraux. Chaque fiche explique la maladie, à qui le vaccin est recommandé, et ses sources.', en: 'Travel and general vaccines. Each page explains the disease, who the vaccine is recommended for, and its sources.' },
        note: {
          fr: 'Certains vaccins du Programme québécois d’immunisation sont gratuits pour les personnes admissibles ; Groupe Santé Voyage étant une clinique privée, des frais d’injection s’appliquent alors.',
          en: 'Some vaccines in the Québec Immunization Program are free for eligible people; as Groupe Santé Voyage is a private clinic, an injection fee then applies.',
        },
      },
      { type: 'faq', ids: ['vaccins-obligatoires-ou-recommandes', 'plusieurs-vaccins-meme-jour', 'effets-secondaires-vaccins', 'fievre-jaune-centre', 'rage-groupe', 'preuve-vaccination-certificat'] },
      { type: 'clinics' },
      { type: 'booking' },
    ],
  },

  // ---- Prescription ------------------------------------------------------------------------------------------
  {
    route: { fr: '/prescription/', en: '/en/prescription-travel/' },
    hero: {
      tagline: { fr: 'Médicaments de voyage', en: 'Travel medications' },
      title: { fr: 'Prescription de médicament', en: 'Prescription drugs' },
      description: {
        fr: 'Nos professionnels de la santé peuvent vous prescrire les médicaments nécessaires à votre voyage, si votre situation s’y prête.',
        en: 'Our health professionals can prescribe the medications you need for your trip, if your situation calls for it.',
      },
      image: { src: '/wp-content/uploads/2023/08/drinking-water-1536x914.jpg', width: 1536, height: 914, alt: { fr: 'Voyageuse qui boit de l’eau', en: 'Traveller drinking water' } },
    },
    blocks: [
      {
        type: 'cards',
        tagline: { fr: 'Prescription', en: 'Prescriptions' },
        title: { fr: 'Ce que nous pouvons vous prescrire', en: 'What we can prescribe' },
        columns: 3,
        cards: [
          {
            title: { fr: 'Diarrhée du voyageur', en: 'Travellers’ diarrhea' },
            text: {
              fr: '<p>Des conseils pour la prévenir et, lorsque c’est indiqué, une prescription pour la traiter.</p>',
              en: '<p>Advice on preventing it and, when indicated, a prescription to treat it.</p>',
            },
            href: { fr: '/vaccination/diarrhee-du-voyageur-dukoral/', en: '/en/vaccination/travelers-diarrhea-vaccination-dukoral/' },
            linkLabel: more,
          },
          {
            title: { fr: 'Paludisme (malaria)', en: 'Malaria' },
            text: {
              fr: '<p>Selon votre destination, un médicament préventif peut être recommandé, en plus de la protection contre les piqûres de moustiques.</p>',
              en: '<p>Depending on your destination, a preventive medication may be recommended, in addition to protection against mosquito bites.</p>',
            },
            href: { fr: '/vaccination/malaria/', en: '/en/vaccination/malaria/' },
            linkLabel: more,
          },
          {
            title: { fr: 'Mal aigu des montagnes', en: 'Acute mountain sickness' },
            text: {
              fr: '<p>Pour un séjour en altitude, selon votre état de santé et votre destination, une médication préventive peut vous être prescrite.</p>',
              en: '<p>For a stay at altitude, depending on your health and your destination, preventive medication may be prescribed.</p>',
            },
          },
        ],
      },
      {
        type: 'callout',
        badge: { fr: 'Bon à savoir', en: 'Good to know' },
        title: { fr: 'Vos médicaments habituels', en: 'Your usual medications' },
        text: {
          fr: 'La consultation santé-voyage porte seulement sur les médicaments liés à votre voyage. Pour renouveler vos médicaments habituels, vous pouvez prendre un autre rendez-vous avec un médecin ou une infirmière praticienne spécialisée (IPS).',
          en: 'The travel health consultation covers only medications related to your trip. To renew your usual medications, you can book a separate appointment with a doctor or a nurse practitioner (IPS).',
        },
        cta: { label: { fr: 'Consulter à distance', en: 'Consult remotely' }, href: tele },
        asideTitle: { fr: 'En télémédecine aussi :', en: 'By telemedicine too:' },
        items: [
          { fr: 'Évaluation de votre itinéraire et des risques', en: 'Assessment of your itinerary and the risks' },
          { fr: 'Conseils santé pour votre voyage', en: 'Health advice for your trip' },
          { fr: 'Au besoin, une prescription envoyée à votre pharmacie', en: 'If needed, a prescription sent to your pharmacy' },
        ],
      },
      { type: 'faq', ids: ['paludisme-medicaments-duree', 'diarrhee-du-voyageur-prevenir', 'dukoral-diarrhee-du-voyageur', 'medicaments-habituels', 'telemedecine'] },
      { type: 'booking' },
    ],
  },

  // ---- Telemedicine ------------------------------------------------------------------------------------------
  {
    route: tele,
    hero: {
      tagline: { fr: 'Télémédecine', en: 'Telemedicine' },
      title: { fr: 'Télémédecine santé voyage', en: 'Travel Health Telemedicine' },
      description: {
        fr: 'Notre service de consultation en télémédecine vous permet de consulter un professionnel de la santé voyage du confort de votre foyer.',
        en: 'Our telemedicine consultation service lets you consult a travel health professional from the comfort of your home.',
      },
      image: { src: '/wp-content/uploads/elementor/thumbs/pexels-karolina-grabowska-7195306-scaled-qawxr71gezhq8230tpb29symkujsxx3mupc4tvgxnc.jpg', width: 1200, height: 800, alt: { fr: 'Consultation en ligne', en: 'Online consultation' } },
    },
    blocks: [
      {
        type: 'steps',
        tagline: { fr: 'Comment ça fonctionne', en: 'How it works' },
        title: { fr: 'Votre consultation à distance', en: 'Your remote consultation' },
        steps: [
          {
            title: { fr: 'Prenez rendez-vous', en: 'Book an appointment' },
            text: { fr: 'Choisissez une consultation en télémédecine, à la date et à l’heure qui vous conviennent.', en: 'Choose a telemedicine consultation, on the date and at the time that suit you.' },
          },
          {
            title: { fr: 'Consultez de chez vous', en: 'Consult from home' },
            text: { fr: 'Un professionnel de la santé voyage évalue votre itinéraire et les risques pour votre santé, et vous donne des conseils pour votre voyage.', en: 'A travel health professional assesses your itinerary and the risks to your health, and gives you advice for your trip.' },
          },
          {
            title: { fr: 'Recevez vos vaccins et vos médicaments', en: 'Get your vaccines and medications' },
            text: { fr: 'Les vaccins recommandés sont donnés à domicile ou dans l’une de nos cliniques ; au besoin, la prescription est envoyée à votre pharmacie.', en: 'The recommended vaccines are given at home or at one of our clinics; if needed, the prescription is sent to your pharmacy.' },
          },
        ],
      },
      {
        type: 'cards',
        tagline: { fr: 'Pendant la consultation', en: 'During the consultation' },
        title: { fr: 'Ce que vous recevez', en: 'What you receive' },
        columns: 4,
        tone: 'soft',
        cards: [
          { title: { fr: 'Une évaluation', en: 'An assessment' }, text: { fr: '<p>De votre itinéraire et des risques pour votre santé.</p>', en: '<p>Of your itinerary and the risks to your health.</p>' } },
          { title: { fr: 'Des conseils', en: 'Advice' }, text: { fr: '<p>Des conseils santé pour votre prochain voyage.</p>', en: '<p>Health advice for your next trip.</p>' } },
          { title: { fr: 'Des recommandations', en: 'Recommendations' }, text: { fr: '<p>Des recommandations de vaccins personnalisées.</p>', en: '<p>Personalized vaccine recommendations.</p>' } },
          { title: { fr: 'Une prescription', en: 'A prescription' }, text: { fr: '<p>Au besoin, envoyée directement à votre pharmacie.</p>', en: '<p>If needed, sent directly to your pharmacy.</p>' } },
        ],
      },
      { type: 'faq', ids: ['telemedecine', 'rendez-vous', 'quoi-apporter', 'quand-consulter-avant-depart', 'frais-consultation'] },
      { type: 'clinics' },
      { type: 'booking' },
    ],
  },

  // ---- Companies and groups (replaces the imported « Vaccination en entreprise ») --------------------------
  {
    route: { fr: '/vaccination-en-entreprise/', en: '/en/vaccination-in-the-workplace/' },
    hero: {
      tagline: { fr: 'Entreprises et groupes', en: 'Companies and groups' },
      title: { fr: 'Vaccination en entreprise et services de groupe', en: 'Workplace vaccination and group services' },
      description: {
        fr: 'Offrir la santé à vos employés, c’est possible, et nous nous déplaçons. Nous accompagnons aussi les écoles et les groupes de voyageurs.',
        en: 'Offering health to your employees is possible, and we come to you. We also serve schools and groups of travellers.',
      },
      image: { src: '/images/home/service-entreprise.jpg', width: 1200, height: 800, alt: { fr: 'Employés au travail', en: 'Employees at work' } },
    },
    blocks: [
      {
        type: 'cards',
        tagline: { fr: 'Nos services', en: 'Our services' },
        title: { fr: 'Pour les entreprises, les écoles et les groupes', en: 'For companies, schools and groups' },
        columns: 3,
        cards: [
          {
            title: { fr: 'Vaccination en entreprise', en: 'Workplace vaccination' },
            text: {
              fr: '<p>Toute la gamme de vaccins peut être donnée en entreprise. Nos professionnels de la santé se déplacent aux lieux et aux heures qui vous conviennent.</p>',
              en: '<p>The full range of vaccines can be given at your workplace. Our health professionals come to the place and at the time that suit you.</p>',
            },
          },
          {
            title: { fr: 'Vaccination contre la grippe', en: 'Flu vaccination' },
            text: {
              fr: '<p>La saison de la grippe approche ? Faites vacciner vos employés sur place, sans file d’attente.</p>',
              en: '<p>Flu season is coming? Have your employees vaccinated on site, without lining up.</p>',
            },
            href: { fr: '/vaccination/grippe-influenza/', en: '/en/vaccination/influenza-vaccination/' },
            linkLabel: more,
          },
          {
            title: { fr: 'Employés qui voyagent à l’étranger', en: 'Employees travelling abroad' },
            text: {
              fr: '<p>Consultation santé-voyage et vaccins pour vos employés qui partent à l’international, en clinique ou en télémédecine ; les vaccins peuvent aussi être donnés dans vos locaux.</p>',
              en: '<p>Travel health consultations and vaccines for your employees going abroad, in clinic or by telemedicine; vaccines can also be given at your workplace.</p>',
            },
            href: { fr: '/consultation/', en: '/en/consultation/' },
            linkLabel: more,
          },
          {
            title: { fr: 'Voyages scolaires et de groupe', en: 'School and group trips' },
            text: {
              fr: '<p>Une conférence santé-voyage pour les groupes de voyageurs (voyage étudiant, groupe organisé par une agence, gens d’affaires, etc.), à partir de 10 participants.</p>',
              en: '<p>A travel health talk for groups of travellers (student trips, groups organized by an agency, business travellers, etc.), from 10 participants.</p>',
            },
          },
          {
            title: { fr: 'Vaccination de groupe contre la rage', en: 'Group rabies vaccination' },
            text: {
              fr: '<p>Possible dans la majorité de nos cliniques. Un service qui permet d’économiser de façon importante sur les frais de vaccination.</p>',
              en: '<p>Available at most of our clinics. A service that lets you save significantly on vaccination costs.</p>',
            },
            href: { fr: '/vaccination/rage/', en: '/en/vaccination/rabies-vaccination/' },
            linkLabel: more,
          },
          {
            title: { fr: 'Forfaits de groupe', en: 'Group packages' },
            text: {
              fr: '<p>Des forfaits pour les entreprises, les écoles et les groupes de voyageurs. Écrivez-nous pour obtenir une offre.</p>',
              en: '<p>Packages for companies, schools and groups of travellers. Email us for an offer.</p>',
            },
            href: contact,
            linkLabel: { fr: 'Demander une offre', en: 'Ask for an offer' },
          },
        ],
      },
      {
        type: 'callout',
        badge: { fr: 'Forfaits de groupe', en: 'Group packages' },
        title: { fr: 'Des forfaits pour votre groupe', en: 'Packages for your group' },
        text: {
          fr: 'Nous offrons des forfaits de groupe pour les entreprises, les écoles et les groupes de voyageurs. Écrivez-nous ou appelez au 1-855-582-2246 pour obtenir une offre adaptée à votre groupe.',
          en: 'We offer group packages for companies, schools and groups of travellers. Email us or call 1-855-582-2246 for an offer tailored to your group.',
        },
        cta: { label: { fr: 'Demander une offre', en: 'Ask for an offer' }, href: contact },
        asideTitle: { fr: 'Pourquoi vacciner en entreprise :', en: 'Why vaccinate at work:' },
        items: [
          { fr: 'Prévenir l’absentéisme', en: 'Prevent absenteeism' },
          { fr: 'Un milieu de travail plus sain et sécuritaire', en: 'A healthier and safer workplace' },
          { fr: 'Faire preuve de solidarité envers vos employés', en: 'Show your employees you care' },
        ],
      },
      { type: 'faq', ids: ['groupes', 'rage-groupe', 'frais-consultation', 'modes-de-paiement'] },
      { type: 'booking' },
    ],
  },

  // ---- Hajj and Umrah ----------------------------------------------------------------------------------------
  {
    route: { fr: '/pelerinage-hadj-omra/', en: '/en/hajj-umrah-pilgrimage/' },
    hero: {
      tagline: { fr: 'Pèlerinage', en: 'Pilgrimage' },
      title: { fr: 'Pèlerinage du Hadj et de la Omra', en: 'Hajj and Umrah pilgrimage' },
      description: {
        fr: 'Le vaccin contre le méningocoque est exigé pour le Hadj et la Omra. Voici les exigences et les recommandations de l’INSPQ pour l’Arabie saoudite.',
        en: 'The meningococcal vaccine is required for the Hajj and Umrah. Here are the INSPQ requirements and recommendations for Saudi Arabia.',
      },
      image: { src: '/wp-content/uploads/2025/02/prophet-mohammed-mosque-al-masjid-an-nabawi-um-2023-11-27-05-14-01-utc.jpg', width: 1200, height: 800, alt: { fr: 'Mosquée du Prophète à Médine', en: 'The Prophet’s Mosque in Medina' } },
    },
    blocks: [
      {
        type: 'country',
        slug: 'arabie-saoudite',
        tagline: { fr: 'Selon l’INSPQ', en: 'According to the INSPQ' },
        title: { fr: 'Exigences et recommandations pour l’Arabie saoudite', en: 'Requirements and recommendations for Saudi Arabia' },
        lede: { fr: 'Extraits de notre fiche Arabie saoudite, tirée des recommandations de l’INSPQ.', en: 'From our Saudi Arabia page, based on the INSPQ recommendations.' },
        rows: ['meningocoque', 'influenza', 'hepatite-a', 'hepatite-b'],
        all: { fr: 'Toutes les recommandations pour l’Arabie saoudite', en: 'All recommendations for Saudi Arabia' },
      },
      {
        type: 'callout',
        badge: { fr: 'Avant de partir', en: 'Before you leave' },
        title: { fr: 'Préparer votre pèlerinage', en: 'Preparing for your pilgrimage' },
        text: {
          fr: 'Le gouvernement du Canada recommande de consulter environ six semaines avant le départ. Il n’est jamais trop tard pour une consultation. Nos quatre cliniques sont des centres désignés de vaccination contre la fièvre jaune.',
          en: 'The Government of Canada advises consulting about six weeks before your trip. It’s never too late for a consultation. Our four clinics are designated yellow fever vaccination centres.',
        },
        cta: { label: { fr: 'Voir nos tarifs', en: 'See our prices' }, href: tarifs },
        asideTitle: { fr: 'À apporter :', en: 'What to bring:' },
        items: [
          { fr: 'Votre carnet de vaccination', en: 'Your vaccination booklet' },
          { fr: 'L’itinéraire de votre voyage', en: 'Your travel itinerary' },
          { fr: 'La liste des médicaments que vous prenez', en: 'The list of medications you take' },
        ],
      },
      { type: 'faq', ids: ['vaccins-obligatoires-ou-recommandes', 'preuve-vaccination-certificat', 'quand-consulter-avant-depart', 'famille-ensemble'] },
      { type: 'clinics' },
      { type: 'booking' },
    ],
  },
];

export const serviceCopy: Record<Lang, { more: string; price: (p: string) => string; book: string }> = {
  fr: { more: 'Voir la fiche', price: (p) => `Prix : ${p}`, book: 'Prendre rendez-vous' },
  en: { more: 'See the page', price: (p) => `Price: ${p}`, book: 'Book an appointment' },
};
