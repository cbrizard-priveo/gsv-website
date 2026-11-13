// Titles, meta descriptions and H1s from the SEO expert's recommendations
// ("Recommandations SEO - Groupe Santé Voyage.xlsx", see docs/seo-recommandations.md).
// Medical site: each description's first sentence restates a fact from that page's own text
// (or, for rabies, the INSPQ summary in vaccine-texts.ts); nothing else is added. Max 155 characters.
import type { Lang } from './site';

export interface SeoOverride {
  title: string;
  description?: string;
  h1?: string;
}

export interface VaccineSeo extends SeoOverride {
  /** Fills "Où obtenir le vaccin contre … dans le Grand Montréal ?" / "Where to get the … vaccine across Greater Montreal?". */
  where?: string;
  /** The page is about a disease with no vaccine on offer (its text says so, or names none): consultation wording instead. */
  noVaccine?: boolean;
}

const FR = ' | Clinique Santé Voyage';
const EN = ' | Travel Health Clinic';
const fr4 = ' Vaccination offerte dans nos cliniques à Montréal, Laval, Longueuil et Blainville.';
const frGm = ' Vaccination offerte dans nos cliniques du Grand Montréal.';
const frConsult = ' Consultation santé-voyage dans nos cliniques du Grand Montréal.';
const en4 = ' Vaccination is offered at our clinics in Montreal, Laval, Longueuil and Blainville.';
const enGm = ' Vaccination is offered at our clinics across Greater Montreal.';
const enConsult = ' Travel health consultations at our clinics across Greater Montreal.';

export const vaccineSeo: Record<string, VaccineSeo> = {
  // French
  '/vaccination/chikungunya/': {
    title: `Vaccination Chikungunya${FR}`,
    description: `Le chikungunya est transmis surtout par la piqûre des moustiques Aedes.${frGm}`,
    where: 'le chikungunya',
  },
  '/vaccination/cholera-et-etec/': {
    title: `Vaccination Choléra et ETEC${FR}`,
    description: `Le choléra se transmet par l’eau ou les aliments contaminés.${frGm}`,
    where: 'le choléra et l’ETEC',
  },
  '/vaccination/combinaison-de-lhepatite-a-et-b-twinrix/': {
    title: `Vaccination Hépatite A et B (Twinrix®)${FR}`,
    description: `Un même vaccin combiné vise l’hépatite A et l’hépatite B.${fr4}`,
    where: 'l’hépatite A et B',
  },
  '/vaccination/coqueluche/': {
    title: `Vaccination Coqueluche${FR}`,
    description: `La coqueluche, très contagieuse, est plus grave chez les bébés de moins de 1 an.${frGm}`,
    where: 'la coqueluche',
  },
  '/vaccination/dengue/': {
    title: `Dengue${FR}`,
    description: `La dengue est l’arbovirose la plus fréquente au monde.${frConsult}`,
    noVaccine: true,
  },
  '/vaccination/diarrhee-du-voyageur-dukoral/': {
    title: 'Dukoral® : vaccin contre la diarrhée du voyageur | Santé Voyage',
    description: `La turista touche de 30 à 70 % des voyageurs en région à risque élevé.${fr4}`,
    h1: 'Dukoral® : vaccin contre la diarrhée du voyageur',
    where: 'la diarrhée du voyageur (Dukoral®)',
  },
  '/vaccination/diphterie/': {
    title: `Vaccination Diphtérie${FR}`,
    description: `La diphtérie peut causer une paralysie et la mort dans 5 à 10 % des cas.${fr4}`,
    where: 'la diphtérie',
  },
  '/vaccination/encephalite-japonaise/': {
    title: `Vaccination Encéphalite japonaise${FR}`,
    description: `L’encéphalite japonaise est causée par un virus transmis par des moustiques.${frGm}`,
    where: 'l’encéphalite japonaise',
  },
  '/vaccination/fievre-jaune/': {
    title: `Vaccination Fièvre jaune${FR}`,
    description: `La fièvre jaune est causée par un virus transmis par la piqûre d’un moustique.${frGm}`,
    where: 'la fièvre jaune',
  },
  '/vaccination/grippe-influenza/': {
    title: `Vaccination Grippe (Influenza)${FR}`,
    description: `La grippe est une infection respiratoire très contagieuse causée par l’influenza.${frGm}`,
    where: 'la grippe',
  },
  '/vaccination/hepatite-a/': {
    title: `Vaccination Hépatite A${FR}`,
    description: `L’hépatite A s’attrape surtout par de l’eau ou des aliments contaminés.${frGm}`,
    where: 'l’hépatite A',
  },
  '/vaccination/hepatite-b/': {
    title: `Vaccination Hépatite B${FR}`,
    description: `L’hépatite B est une infection du foie évitable par la vaccination.${fr4}`,
    where: 'l’hépatite B',
  },
  '/vaccination/infections-a-meningocoque/': {
    title: `Vaccination Méningocoque (Voyage et Hajj)${FR}`,
    description: `Le méningocoque peut causer une méningite ou une infection du sang.${frGm}`,
    where: 'le méningocoque',
  },
  '/vaccination/infections-a-pneumocoque/': {
    title: `Vaccination Pneumocoque${FR}`,
    description: `Le pneumocoque peut causer pneumonie, méningite et infection du sang.${frGm}`,
    where: 'le pneumocoque',
  },
  '/vaccination/infections-graves-a-haemophilus-influenza-de-type-b-hib/': {
    title: `Vaccination Hib${FR}`,
    description: `Les infections graves à Hib peuvent causer épiglottite, pneumonie et méningite.${frGm}`,
    where: 'les infections à Hib',
  },
  '/vaccination/infections-par-les-virus-du-papillome-humain-vph/': {
    title: `Vaccin VPH (Papillomavirus Humain)${FR}`,
    description: `Les VPH se transmettent surtout lors des relations sexuelles.${frGm}`,
    where: 'les VPH',
  },
  '/vaccination/malaria/': {
    title: `Paludisme (Malaria)${FR}`,
    description: `Le paludisme demeure une cause majeure de décès évitables dans le monde.${frConsult}`,
    noVaccine: true,
  },
  '/vaccination/meningite-serogroupe-b-bexsero/': {
    title: `Vaccination Méningite B (Bexsero®)${FR}`,
    description: `Le Bexsero protège contre le méningocoque de sérogroupe B.${fr4}`,
    where: 'la méningite B (Bexsero®)',
  },
  '/vaccination/oreillons/': {
    title: `Vaccination Oreillons${FR}`,
    description: `Les oreillons, causés par un virus, font enfler les glandes salivaires.${frGm}`,
    where: 'les oreillons',
  },
  '/vaccination/poliomyelite/': {
    title: `Vaccination Poliomyélite${FR}`,
    description: `La poliomyélite, très contagieuse, touche surtout les enfants de 5 ans et moins.${frGm}`,
    where: 'la poliomyélite',
  },
  '/vaccination/rage/': {
    title: `Vaccination Antirabique (Rage)${FR}`,
    description: `La rage est une infection causée par un Lyssavirus, mortelle une fois les symptômes apparus.${frGm}`,
    where: 'la rage',
  },
  '/vaccination/rougeole/': {
    title: `Vaccination Rougeole${FR}`,
    description: `La rougeole est l’une des maladies les plus contagieuses connues.${frGm}`,
    where: 'la rougeole',
  },
  '/vaccination/rubeole/': {
    title: `Vaccination Rubéole${FR}`,
    description: `Pendant la grossesse, la rubéole peut causer une fausse couche ou des malformations.${frGm}`,
    where: 'la rubéole',
  },
  '/vaccination/tetanos/': {
    title: `Vaccination Tétanos${FR}`,
    description: `Le tétanos est causé par une bactérie du sol qui entre par une plaie.${frGm}`,
    where: 'le tétanos',
  },
  '/vaccination/typhoide/': {
    title: `Vaccination Typhoïde${FR}`,
    description: `La typhoïde se transmet surtout par des aliments ou de l’eau contaminés.${frGm}`,
    where: 'la typhoïde',
  },
  '/vaccination/varicelle/': {
    title: `Vaccination Varicelle${FR}`,
    description: `La varicelle (« picote ») est une infection virale très contagieuse.${frGm}`,
    where: 'la varicelle',
  },
  '/vaccination/zika/': {
    title: `Zika${FR}`,
    description: `Le Zika pendant la grossesse peut causer des malformations chez le bébé.${frConsult}`,
    noVaccine: true,
  },
  '/vaccination/zona/': {
    title: `Vaccination Zona${FR}`,
    description: `Le zona apparaît lorsque le virus de la varicelle se réactive.${frGm}`,
    where: 'le zona',
  },

  // English
  '/en/vaccination/chikungunya/': {
    title: `Chikungunya Vaccination${EN}`,
    description: `Chikungunya is spread mainly by the bite of Aedes mosquitoes.${enGm}`,
    where: 'chikungunya',
  },
  '/en/vaccination/cholera-and-etec-vaccination/': {
    title: `Cholera and ETEC Vaccination${EN}`,
    description: `Cholera spreads through contaminated water or food.${enGm}`,
    where: 'cholera and ETEC',
  },
  '/en/vaccination/combination-hepatitis-a-and-b-vaccination-twinrix/': {
    title: `Hepatitis A and B Vaccination (Twinrix®)${EN}`,
    description: `A combined vaccine targets both hepatitis A and hepatitis B.${en4}`,
    where: 'hepatitis A and B (Twinrix®)',
  },
  '/en/vaccination/dengue-fever/': {
    title: `Dengue${EN}`,
    description: `Dengue is the most common arthropod-borne viral disease in the world.${enConsult}`,
    noVaccine: true,
  },
  '/en/vaccination/diphtheria-vaccination/': {
    title: `Diphtheria Vaccination${EN}`,
    description: `Diphtheria can cause paralysis, and death in 5 to 10% of cases.${en4}`,
    where: 'diphtheria',
  },
  '/en/vaccination/hepatitis-a-vaccination/': {
    title: `Hepatitis A Vaccination${EN}`,
    description: `Hepatitis A is mostly caught from contaminated water or food.${en4}`,
    where: 'hepatitis A',
  },
  '/en/vaccination/hepatitis-b-vaccination/': {
    title: `Hepatitis B Vaccination${EN}`,
    description: `Hepatitis B is a liver infection that vaccination can prevent.${en4}`,
    where: 'hepatitis B',
  },
  '/en/vaccination/influenza-vaccination/': {
    title: `Influenza Vaccination${EN}`,
    description: `The flu is a highly contagious respiratory infection caused by influenza.${enGm}`,
    where: 'influenza',
  },
  '/en/vaccination/japanese-encephalitis-vaccination/': {
    title: `Japanese Encephalitis Vaccination${EN}`,
    description: `Japanese encephalitis is caused by a virus transmitted by mosquitoes.${enGm}`,
    where: 'Japanese encephalitis',
  },
  '/en/vaccination/malaria/': {
    title: `Malaria${EN}`,
    description: `Malaria remains a leading cause of preventable deaths worldwide.${enConsult}`,
    noVaccine: true,
  },
  '/en/vaccination/measles-vaccination/': {
    title: `Measles Vaccination${EN}`,
    description: `Measles is one of the most contagious diseases known.${enGm}`,
    where: 'measles',
  },
  '/en/vaccination/meningitis-serogroup-b-vaccination-bexsero/': {
    title: `Meningitis B Vaccination (Bexsero®)${EN}`,
    description: `Bexsero protects against serogroup B meningococcus.${en4}`,
    where: 'meningitis B (Bexsero®)',
  },
  '/en/vaccination/meningococcal-vaccination-travel-and-hajj/': {
    title: `Meningococcal Vaccination (Travel and Hajj)${EN}`,
    description: `Meningococcus can cause meningitis or a blood infection.${enGm}`,
    where: 'meningococcal',
  },
  '/en/vaccination/mumps-vaccination/': {
    title: `Mumps Vaccination${EN}`,
    description: `Mumps is caused by a virus that makes the salivary glands swell.${en4}`,
    where: 'mumps',
  },
  '/en/vaccination/poliomyelitis-vaccination/': {
    title: `Polio Vaccination${EN}`,
    description: `Polio is highly contagious and mainly affects children aged 5 and under.${enGm}`,
    where: 'polio',
  },
  '/en/vaccination/rabies-vaccination/': {
    title: `Rabies Vaccination${EN}`,
    description: `Rabies is an infection caused by a Lyssavirus that is fatal once symptoms appear.${enGm}`,
    where: 'rabies',
  },
  '/en/vaccination/rubella-vaccination/': {
    title: `Rubella Vaccination${EN}`,
    description: `Rubella during pregnancy can cause miscarriage or malformations in the baby.${enGm}`,
    where: 'rubella',
  },
  '/en/vaccination/shingles-vaccination/': {
    title: `Shingles Vaccination${EN}`,
    description: `Shingles appears when the chickenpox virus reactivates.${enGm}`,
    where: 'shingles',
  },
  '/en/vaccination/tetanus-vaccination/': {
    title: `Tetanus Vaccination${EN}`,
    description: `Tetanus is caused by a soil bacterium that enters the body through a wound.${enGm}`,
    where: 'tetanus',
  },
  '/en/vaccination/travelers-diarrhea-vaccination-dukoral/': {
    title: 'Dukoral® Vaccine for Traveler’s Diarrhea | Travel Health',
    description: `Turista affects 30% to 70% of travellers in high-risk areas.${en4}`,
    h1: 'Dukoral® Vaccine for Traveler’s Diarrhea',
    where: 'Dukoral®',
  },
  '/en/vaccination/typhoid-vaccination/': {
    title: `Typhoid Vaccination${EN}`,
    description: `Typhoid spreads mainly through contaminated food or water.${enGm}`,
    where: 'typhoid',
  },
  '/en/vaccination/vaccination-human-papillomavirus-hpv-infections/': {
    title: `HPV Vaccine (Human Papillomavirus)${EN}`,
    description: `HPV is transmitted mainly through sexual contact.${enGm}`,
    h1: 'HPV Vaccine (Human Papillomavirus)',
    where: 'HPV',
  },
  '/en/vaccination/vaccination-pneumococcal-infections/': {
    title: `Pneumococcal Vaccination${EN}`,
    description: `Pneumococcus can cause pneumonia, meningitis and blood infections.${enGm}`,
    where: 'pneumococcal',
  },
  '/en/vaccination/vaccination-severe-haemophilus-influenza-type-b-hib-infections/': {
    title: `Hib Vaccination${EN}`,
    description: `Serious Hib infections can cause epiglottitis, pneumonia and meningitis.${enGm}`,
    where: 'Hib',
  },
  '/en/vaccination/varicella-vaccination/': {
    title: `Chickenpox (Varicella) Vaccination${EN}`,
    description: `Chickenpox is a very contagious viral infection.${enGm}`,
    where: 'chickenpox',
  },
  '/en/vaccination/whooping-cough-vaccination/': {
    title: `Whooping Cough Vaccination${EN}`,
    description: `Whooping cough is highly contagious and more serious in babies under 1 year old.${enGm}`,
    where: 'whooping cough',
  },
  '/en/vaccination/yellow-fever-vaccination/': {
    title: `Yellow Fever Vaccination${EN}`,
    description: `Yellow fever is caused by a virus spread by the bite of an infected mosquito.${enGm}`,
    where: 'yellow fever',
  },
  '/en/vaccination/zika/': {
    title: `Zika${EN}`,
    description: `Zika during pregnancy can cause malformations in the baby.${enConsult}`,
    noVaccine: true,
  },
};

/** Other pages: titles from the sheet; descriptions only where the sheet gives one or the current one is wrong. */
export const pageSeo: Record<string, SeoOverride> = {
  '/': {
    title: 'Clinique Santé Voyage | Vaccination du voyageur depuis 1997',
    description: 'Votre clinique santé voyage depuis 1997 avec services de vaccination, consultation pré-voyage et prescriptions à Montréal, Laval, Longueuil et Blainville.',
  },
  '/en/': {
    title: 'Travel Health Clinic | Travel Vaccination Since 1997',
    description: 'All-in-one travel health clinic since 1997 with vaccination, pre-travel consultation and prescriptions in Montreal, Laval, Longueuil and Blainville.',
  },
  // The current description is the general vaccination page's.
  '/consultation-en-telemedecine/': {
    title: 'Clinique Virtuelle & Télémédecine | Santé Voyage',
    description: 'Consultez un professionnel de la santé voyage en télémédecine, puis recevez vos vaccins dans l’une de nos cliniques du Grand Montréal.',
    h1: 'Télémédecine santé voyage',
  },
  '/en/telemedicine-consultation/': {
    title: 'Virtual Clinic & Telehealth Services | Travel Health',
    description: 'Consult a travel health professional by telemedicine, then get your vaccines at one of our clinics across Greater Montreal.',
    h1: 'Travel Health Telemedicine',
  },
  // Descriptions below restate each page's own opening text.
  '/clinique-du-voyageur/': {
    title: 'Clinique du Voyageur et Vaccination Voyage | Santé Voyage',
    description: 'Clinique du voyageur : consultation pré-voyage et vaccination avec notre équipe d’infirmières et de médecins à Montréal, Laval, Longueuil et Blainville.',
  },
  '/en/travellers-clinic/': {
    title: 'Travel Clinic, Vaccines & Prescriptions | Travel Health',
    description: 'Travel clinic: pre-travel consultation and vaccination with our team of nurses and doctors in Montreal, Laval, Longueuil and Blainville.',
  },
  '/vaccination/': {
    title: 'Clinique de Vaccination Voyage | Santé Voyage',
    description: 'Selon votre voyage, certains vaccins sont fortement recommandés, d’autres obligatoires. Vaccination à Montréal, Laval, Longueuil et Blainville.',
  },
  '/en/pre-travel-vaccination-clinic/': {
    title: 'Pre-travel Vaccination Clinic | Travel Health',
    description: 'Depending on your trip, some vaccines are strongly recommended, others mandatory. Vaccination in Montreal, Laval, Longueuil and Blainville.',
  },
  '/consultation/': {
    title: 'Consultation Médicale Pré-Voyage | Clinique Santé Voyage',
    description: 'Consultation pré-voyage avec des experts en santé-voyage, incluant la vaccination requise avant le départ, à Montréal, Laval, Longueuil et Blainville.',
  },
  '/en/consultation/': {
    title: 'Pre-Travel Health Consultation | Travel Health Clinic',
    description: 'Pre-travel medical consultation with travel health experts, including the vaccinations required before departure. Montreal, Laval, Longueuil, Blainville.',
  },
  '/prescription/': {
    title: 'Médicaments de Voyage & Prescriptions | Santé Voyage',
    description: 'Nos professionnels de la santé peuvent prescrire les médicaments nécessaires à votre voyage, si votre situation s’y prête. Cliniques du Grand Montréal.',
  },
  '/en/prescription-travel/': {
    title: 'Travel Medication & Prescriptions | Travel Health',
    description: 'Our healthcare professionals can prescribe the medication you need for your trip, if your situation so warrants. Montreal, Laval, Longueuil, Blainville.',
    // The English hero heading reads "À propos du Groupe Santé Voyage et ses cliniques" (French); use the page's English title.
    h1: 'Prescription drugs',
  },
  '/vaccination-en-entreprise/': {
    title: 'Vaccination en Entreprise et Groupes | Clinique Santé Voyage',
    description: 'Vaccination en entreprise, vaccin contre la grippe, employés qui voyagent, voyages scolaires et forfaits de groupe. Nos professionnels se déplacent.',
  },
  '/en/vaccination-in-the-workplace/': {
    title: 'Workplace and Group Vaccination | Travel Health Clinic',
    description: 'Workplace vaccination, flu shots, employees travelling abroad, school trips and group packages. Our health professionals come to you.',
  },
  '/pelerinage-hadj-omra/': {
    title: 'Vaccins pour le Hadj et la Omra | Clinique Santé Voyage',
    description: 'Vaccin contre le méningocoque exigé pour le Hadj et la Omra : exigences et recommandations de l’INSPQ pour l’Arabie saoudite. Montréal, Laval, Longueuil, Blainville.',
  },
  '/en/hajj-umrah-pilgrimage/': {
    title: 'Vaccines for Hajj and Umrah | Travel Health Clinic',
    description: 'Meningococcal vaccine required for Hajj and Umrah: INSPQ requirements and recommendations for Saudi Arabia. Montreal, Laval, Longueuil, Blainville.',
  },
  '/vaccination-generale/': {
    title: 'Vaccination Générale : Grippe, Zona, VPH | Clinique Santé Voyage',
    description: 'Mise à jour de la vaccination de base, vaccin contre la grippe saisonnière, zona, VPH et plus, dans nos cliniques de Montréal, Laval, Longueuil et Blainville.',
  },
  '/en/general-vaccination/': {
    title: 'General Vaccination: Flu, Shingles, HPV | Travel Health Clinic',
    description: 'Basic vaccination updates, seasonal flu vaccine, shingles, HPV and more, at our clinics in Montreal, Laval, Longueuil and Blainville.',
  },
  '/vaccination-infantile/': {
    title: 'Vaccination Pédiatrique | Clinique Santé Voyage',
    description: 'Vaccination des enfants de tout âge, y compris les bébés, dans nos quatre cliniques du Grand Montréal. Efficacité, empathie et rigueur pour l’enfant et ses parents.',
  },
  '/en/infant-vaccination/': {
    title: 'Pediatric Vaccination | Travel Health Clinic',
    description: 'Vaccination for children of all ages, babies included, at our four clinics across Greater Montreal. Efficiency, empathy and rigour for the child and the parents.',
  },
};

export function seoFor(route: string): VaccineSeo | undefined {
  return vaccineSeo[route] ?? pageSeo[route];
}

export const vaccineSeoCopy: Record<Lang, {
  served: string;
  servedConsult: string;
  where: (name: string) => string;
  whereConsult: string;
  book: string;
  bookConsult: string;
}> = {
  fr: {
    served: 'Vaccination offerte à Montréal, Laval, Longueuil et Blainville.',
    servedConsult: 'Consultation santé-voyage offerte à Montréal, Laval, Longueuil et Blainville.',
    where: (name) => `Où obtenir le vaccin contre ${name} dans le Grand Montréal ?`,
    whereConsult: 'Où consulter en santé-voyage dans le Grand Montréal ?',
    book: 'Prenez votre rendez-vous vaccin dès aujourd’hui',
    bookConsult: 'Prenez rendez-vous pour une consultation',
  },
  en: {
    served: 'Vaccination offered in Montreal, Laval, Longueuil and Blainville.',
    servedConsult: 'Travel health consultations offered in Montreal, Laval, Longueuil and Blainville.',
    where: (name) => `Where to get the ${name} vaccine across Greater Montreal?`,
    whereConsult: 'Where to get a travel health consultation across Greater Montreal?',
    book: 'Book your vaccination appointment today',
    bookConsult: 'Book a consultation',
  },
};
