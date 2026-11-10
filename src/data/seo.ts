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
    description: `Le chikungunya est une maladie virale ; le vaccin Ixchiq est disponible au Canada depuis 2024.${frGm}`,
    where: 'le chikungunya',
  },
  '/vaccination/cholera-et-etec/': {
    title: `Vaccination Choléra et ETEC${FR}`,
    description: `Le choléra est une infection intestinale aiguë due à l’ingestion d’eau ou d’aliments contaminés.${frGm}`,
    where: 'le choléra et l’ETEC',
  },
  '/vaccination/combinaison-de-lhepatite-a-et-b-twinrix/': {
    title: `Vaccination Hépatite A et B (Twinrix®)${FR}`,
    description: `Le Twinrix® est un vaccin combiné contre l’hépatite A et l’hépatite B.${fr4}`,
    where: 'l’hépatite A et B',
  },
  '/vaccination/coqueluche/': {
    title: `Vaccination Coqueluche${FR}`,
    description: `La coqueluche est une maladie très contagieuse marquée par de fortes quintes de toux.${frGm}`,
    where: 'la coqueluche',
  },
  '/vaccination/dengue/': {
    title: `Dengue${FR}`,
    description: `La dengue est une infection virale transmise surtout par la piqûre d’un moustique infecté.${frConsult}`,
    noVaccine: true,
  },
  '/vaccination/diarrhee-du-voyageur-dukoral/': {
    title: 'Dukoral® : vaccin contre la diarrhée du voyageur | Santé Voyage',
    description: `Le Dukoral® est un vaccin oral contre la diarrhée du voyageur.${fr4}`,
    h1: 'Dukoral® : vaccin contre la diarrhée du voyageur',
    where: 'la diarrhée du voyageur (Dukoral®)',
  },
  '/vaccination/diphterie/': {
    title: `Vaccination Diphtérie${FR}`,
    description: `La diphtérie est une maladie contagieuse causée par une bactérie.${fr4}`,
    where: 'la diphtérie',
  },
  '/vaccination/encephalite-japonaise/': {
    title: `Vaccination Encéphalite japonaise${FR}`,
    description: `L’encéphalite japonaise se transmet à l’humain par la piqûre d’un moustique infecté.${frGm}`,
    where: 'l’encéphalite japonaise',
  },
  '/vaccination/fievre-jaune/': {
    title: `Vaccination Fièvre jaune${FR}`,
    description: `La fièvre jaune est une maladie virale des régions tropicales d’Afrique et des Amériques.${frGm}`,
    where: 'la fièvre jaune',
  },
  '/vaccination/grippe-influenza/': {
    title: `Vaccination Grippe (Influenza)${FR}`,
    description: `L’influenza est une infection respiratoire due au virus de l’influenza.${fr4}`,
    where: 'la grippe',
  },
  '/vaccination/hepatite-a/': {
    title: `Vaccination Hépatite A${FR}`,
    description: `L’hépatite A est une maladie du foie causée par le virus de l’hépatite A.${frGm}`,
    where: 'l’hépatite A',
  },
  '/vaccination/hepatite-b/': {
    title: `Vaccination Hépatite B${FR}`,
    description: `L’hépatite B est causée par un virus qui infecte le foie.${fr4}`,
    where: 'l’hépatite B',
  },
  '/vaccination/infections-a-meningocoque/': {
    title: `Vaccination Méningocoque (Voyage et Hajj)${FR}`,
    description: `Le vaccin contre le méningocoque est obligatoire pour le pèlerinage du Hajj en Arabie Saoudite.${frGm}`,
    where: 'le méningocoque',
  },
  '/vaccination/infections-a-pneumocoque/': {
    title: `Vaccination Pneumocoque${FR}`,
    description: `Le pneumocoque est une bactérie présente dans les voies respiratoires d’un grand nombre de gens.${frGm}`,
    where: 'le pneumocoque',
  },
  '/vaccination/infections-graves-a-haemophilus-influenza-de-type-b-hib/': {
    title: `Vaccination Hib${FR}`,
    description: `Le vaccin Hib protège très bien contre les infections invasives à Hæmophilus influenza de type B.${frGm}`,
    where: 'les infections à Hib',
  },
  '/vaccination/infections-par-les-virus-du-papillome-humain-vph/': {
    title: `Vaccin VPH (Papillomavirus Humain)${FR}`,
    description: `Le virus du papillome humain (VPH) est l’un des virus les plus répandus dans le monde.${frGm}`,
    where: 'les VPH',
  },
  '/vaccination/malaria/': {
    title: `Paludisme (Malaria)${FR}`,
    description: `Le paludisme (malaria) est une maladie transmise par les piqûres de moustiques.${frConsult}`,
    noVaccine: true,
  },
  '/vaccination/meningite-serogroupe-b-bexsero/': {
    title: `Vaccination Méningite B (Bexsero®)${FR}`,
    description: `Le Bexsero® est un vaccin contre le méningocoque du sérogroupe B.${fr4}`,
    where: 'la méningite B (Bexsero®)',
  },
  '/vaccination/oreillons/': {
    title: `Vaccination Oreillons${FR}`,
    description: `Les oreillons sont une maladie infectieuse aiguë causée par le virus des oreillons.${frGm}`,
    where: 'les oreillons',
  },
  '/vaccination/poliomyelite/': {
    title: `Vaccination Poliomyélite${FR}`,
    description: `La poliomyélite est une infection virale très contagieuse qui touche surtout les enfants.${frGm}`,
    where: 'la poliomyélite',
  },
  '/vaccination/rage/': {
    title: `Vaccination Antirabique (Rage)${FR}`,
    description: `La rage est une infection causée par un Lyssavirus, mortelle une fois les symptômes apparus.${frGm}`,
    where: 'la rage',
  },
  '/vaccination/rougeole/': {
    title: `Vaccination Rougeole${FR}`,
    description: `La rougeole est une maladie virale extrêmement contagieuse qui touche surtout les enfants.${frGm}`,
    where: 'la rougeole',
  },
  '/vaccination/rubeole/': {
    title: `Vaccination Rubéole${FR}`,
    description: `La rubéole est une infection virale aiguë contagieuse.${fr4}`,
    where: 'la rubéole',
  },
  '/vaccination/tetanos/': {
    title: `Vaccination Tétanos${FR}`,
    description: `Le tétanos est une maladie infectieuse causée par les spores de la bactérie Clostridium tetani.${frGm}`,
    where: 'le tétanos',
  },
  '/vaccination/typhoide/': {
    title: `Vaccination Typhoïde${FR}`,
    description: `La typhoïde est une infection potentiellement mortelle causée par la bactérie Salmonella typhi.${frGm}`,
    where: 'la typhoïde',
  },
  '/vaccination/varicelle/': {
    title: `Vaccination Varicelle${FR}`,
    description: `La varicelle est une maladie causée par un virus très contagieux qui touche surtout les enfants.${frGm}`,
    where: 'la varicelle',
  },
  '/vaccination/zika/': {
    title: `Zika${FR}`,
    description: `Il n’existe aucun vaccin disponible contre le virus Zika à l’heure actuelle.${frConsult}`,
    noVaccine: true,
  },
  '/vaccination/zona/': {
    title: `Vaccination Zona${FR}`,
    description: `Le zona se manifeste par des éruptions cutanées douloureuses le long d’un nerf.${frGm}`,
    where: 'le zona',
  },

  // English
  '/en/vaccination/chikungunya/': {
    title: `Chikungunya Vaccination${EN}`,
    description: `Chikungunya is a viral disease; the Ixchiq vaccine has been available in Canada since 2024.${enGm}`,
    where: 'chikungunya',
  },
  '/en/vaccination/cholera-and-etec-vaccination/': {
    title: `Cholera and ETEC Vaccination${EN}`,
    description: `Cholera is an acute intestinal infection caused by ingesting contaminated water or food.${enGm}`,
    where: 'cholera and ETEC',
  },
  '/en/vaccination/combination-hepatitis-a-and-b-vaccination-twinrix/': {
    title: `Hepatitis A and B Vaccination (Twinrix®)${EN}`,
    description: `Twinrix® is a combined vaccine against hepatitis A and hepatitis B.${en4}`,
    where: 'hepatitis A and B (Twinrix®)',
  },
  '/en/vaccination/dengue-fever/': {
    title: `Dengue${EN}`,
    description: `Dengue is a viral infection transmitted mainly by the bite of an infected mosquito.${enConsult}`,
    noVaccine: true,
  },
  '/en/vaccination/diphtheria-vaccination/': {
    title: `Diphtheria Vaccination${EN}`,
    description: `Diphtheria is a contagious disease caused by bacteria.${en4}`,
    where: 'diphtheria',
  },
  '/en/vaccination/hepatitis-a-vaccination/': {
    title: `Hepatitis A Vaccination${EN}`,
    description: `Hepatitis A is a liver disease caused by the hepatitis A virus.${en4}`,
    where: 'hepatitis A',
  },
  '/en/vaccination/hepatitis-b-vaccination/': {
    title: `Hepatitis B Vaccination${EN}`,
    description: `Hepatitis B is caused by a virus that infects the liver.${en4}`,
    where: 'hepatitis B',
  },
  '/en/vaccination/influenza-vaccination/': {
    title: `Influenza Vaccination${EN}`,
    description: `Influenza is a respiratory infection caused by the influenza virus.${en4}`,
    where: 'influenza',
  },
  '/en/vaccination/japanese-encephalitis-vaccination/': {
    title: `Japanese Encephalitis Vaccination${EN}`,
    description: `Japanese encephalitis is transmitted to humans by the bite of an infected mosquito.${enGm}`,
    where: 'Japanese encephalitis',
  },
  '/en/vaccination/malaria/': {
    title: `Malaria${EN}`,
    description: `Malaria is a disease transmitted by mosquito bites.${enConsult}`,
    noVaccine: true,
  },
  '/en/vaccination/measles-vaccination/': {
    title: `Measles Vaccination${EN}`,
    description: `Measles is a highly contagious viral disease that mainly affects children.${enGm}`,
    where: 'measles',
  },
  '/en/vaccination/meningitis-serogroup-b-vaccination-bexsero/': {
    title: `Meningitis B Vaccination (Bexsero®)${EN}`,
    description: `Bexsero® is a vaccine against serogroup B meningococcus.${en4}`,
    where: 'meningitis B (Bexsero®)',
  },
  '/en/vaccination/meningococcal-vaccination-travel-and-hajj/': {
    title: `Meningococcal Vaccination (Travel and Hajj)${EN}`,
    description: `The meningococcal vaccine is mandatory for the Hajj pilgrimage to Saudi Arabia.${enGm}`,
    where: 'meningococcal',
  },
  '/en/vaccination/mumps-vaccination/': {
    title: `Mumps Vaccination${EN}`,
    description: `Mumps is an acute infectious disease caused by the mumps virus.${en4}`,
    where: 'mumps',
  },
  '/en/vaccination/poliomyelitis-vaccination/': {
    title: `Polio Vaccination${EN}`,
    description: `Polio is a highly contagious viral infection that mainly affects children.${enGm}`,
    where: 'polio',
  },
  '/en/vaccination/rabies-vaccination/': {
    title: `Rabies Vaccination${EN}`,
    description: `Rabies is an infection caused by a Lyssavirus that is fatal once symptoms appear.${enGm}`,
    where: 'rabies',
  },
  '/en/vaccination/rubella-vaccination/': {
    title: `Rubella Vaccination${EN}`,
    description: `Rubella is an acute contagious viral infection.${en4}`,
    where: 'rubella',
  },
  '/en/vaccination/shingles-vaccination/': {
    title: `Shingles Vaccination${EN}`,
    description: `Shingles is a painful rash along a nerve, caused by reactivation of the chickenpox virus.${enGm}`,
    where: 'shingles',
  },
  '/en/vaccination/tetanus-vaccination/': {
    title: `Tetanus Vaccination${EN}`,
    description: `Tetanus is an infectious disease caused by spores of the bacterium Clostridium tetani.${enGm}`,
    where: 'tetanus',
  },
  '/en/vaccination/travelers-diarrhea-vaccination-dukoral/': {
    title: 'Dukoral® Vaccine for Traveler’s Diarrhea | Travel Health',
    description: `Dukoral® is an oral vaccine that protects against traveler’s diarrhea.${en4}`,
    h1: 'Dukoral® Vaccine for Traveler’s Diarrhea',
    where: 'Dukoral®',
  },
  '/en/vaccination/typhoid-vaccination/': {
    title: `Typhoid Vaccination${EN}`,
    description: `Typhoid fever is a potentially fatal infection caused by the Salmonella typhi bacterium.${enGm}`,
    where: 'typhoid',
  },
  '/en/vaccination/vaccination-human-papillomavirus-hpv-infections/': {
    title: `HPV Vaccine (Human Papillomavirus)${EN}`,
    description: `The human papillomavirus (HPV) is one of the most widespread viruses in the world.${enGm}`,
    h1: 'HPV Vaccine (Human Papillomavirus)',
    where: 'HPV',
  },
  '/en/vaccination/vaccination-pneumococcal-infections/': {
    title: `Pneumococcal Vaccination${EN}`,
    description: `Pneumococcus is a bacterium found in the respiratory tract of many people.${enGm}`,
    where: 'pneumococcal',
  },
  '/en/vaccination/vaccination-severe-haemophilus-influenza-type-b-hib-infections/': {
    title: `Hib Vaccination${EN}`,
    description: `The Hib vaccine protects very well against invasive Hæmophilus influenza type B infections.${enGm}`,
    where: 'Hib',
  },
  '/en/vaccination/varicella-vaccination/': {
    title: `Chickenpox (Varicella) Vaccination${EN}`,
    description: `Chickenpox is caused by a highly contagious virus that mainly affects children.${enGm}`,
    where: 'chickenpox',
  },
  '/en/vaccination/whooping-cough-vaccination/': {
    title: `Whooping Cough Vaccination${EN}`,
    description: `Whooping cough (pertussis) is a highly contagious disease marked by severe coughing fits.${enGm}`,
    where: 'whooping cough',
  },
  '/en/vaccination/yellow-fever-vaccination/': {
    title: `Yellow Fever Vaccination${EN}`,
    description: `Yellow fever is a viral disease found in tropical regions of Africa and the Americas.${enGm}`,
    where: 'yellow fever',
  },
  '/en/vaccination/zika/': {
    title: `Zika${EN}`,
    description: `There is currently no vaccine available against the Zika virus.${enConsult}`,
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
    description: 'Consultez un professionnel de la santé voyage en télémédecine, puis recevez vos vaccins à domicile ou dans l’une de nos cliniques du Grand Montréal.',
    h1: 'Télémédecine santé voyage',
  },
  '/en/telemedicine-consultation/': {
    title: 'Virtual Clinic & Telehealth Services | Travel Health',
    description: 'Consult a travel health professional by telemedicine, then get your vaccines at home or at one of our clinics across Greater Montreal.',
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
