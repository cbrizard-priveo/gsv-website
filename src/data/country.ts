// Labels for country pages. Medical site: no descriptive copy here; facts come from src/data/countries/.
import type { Lang } from './site';

export const countryCopy: Record<Lang, {
  home: string;
  hub: string;
  crumbs: string;
  lede: string;
  updated: string;
  onPage: string;
  book: string;
  diseasesEyebrow: string;
  diseasesTitle: string;
  othersTitle: string;
  more: string;
  sourceLabel: (name: string, date: string) => string;
  checked: string;
  disclaimer: string;
  region: (region: string) => string;
  title: (name: string) => string;
  description: (name: string, diseases: string[]) => string;
  hubTitle: string;
  hubLede: string;
  hubSeoTitle: string;
  hubDescription: string;
}> = {
  fr: {
    home: 'Accueil',
    hub: 'Pays',
    crumbs: 'Fil d’Ariane',
    lede: 'Vaccins recommandés et risques pour la santé des voyageurs, selon les recommandations de l’INSPQ.',
    updated: 'Recommandations de l’INSPQ mises à jour le',
    onPage: 'Sur cette page',
    book: 'Prendre rendez-vous',
    diseasesEyebrow: 'Recommandations',
    diseasesTitle: 'Vaccins et maladies',
    othersTitle: 'Autres risques',
    more: 'En savoir plus',
    sourceLabel: (name, date) => `INSPQ, Guide d’intervention santé-voyage, « Recommandations par pays : ${name} » (mis à jour le ${date})`,
    checked: 'Information vérifiée le',
    disclaimer: 'Ces renseignements résument les recommandations de l’INSPQ pour les voyageurs et ne remplacent pas une consultation santé-voyage.',
    region: (region) => `Autres destinations : ${region}`,
    title: (name) => `${name} : vaccins et santé-voyage | Groupe Santé Voyage`,
    description: (name, diseases) =>
      `${name} : vaccins recommandés et risques pour la santé des voyageurs (${diseases.join(', ')}…), selon l’INSPQ. Clinique santé-voyage à Laval, Montréal, Longueuil et Blainville.`,
    // Title, H1 and description from the SEO expert's recommendations.
    hubTitle: 'Vaccination recommandée par pays et régions',
    hubLede: 'Les vaccins recommandés varient selon le pays. Consultez les recommandations de l’INSPQ pour votre destination, puis préparez votre voyage lors d’une consultation pré-voyage.',
    hubSeoTitle: 'Vaccination recommandée par pays & régions | Santé Voyage',
    hubDescription: 'Découvrez les recommandations de vaccination par pays et préparez votre voyage avec l’aide de nos spécialistes en santé des voyageurs.',
  },
  en: {
    home: 'Home',
    hub: 'Countries',
    crumbs: 'Breadcrumb',
    lede: 'Recommended vaccines and health risks for travellers, based on INSPQ recommendations.',
    updated: 'INSPQ recommendations updated on',
    onPage: 'On this page',
    book: 'Book an appointment',
    diseasesEyebrow: 'Recommendations',
    diseasesTitle: 'Vaccines and diseases',
    othersTitle: 'Other risks',
    more: 'Learn more',
    sourceLabel: (name, date) => `INSPQ, Guide d’intervention santé-voyage, “Recommandations par pays : ${name}” (updated ${date}, in French)`,
    checked: 'Information checked on',
    disclaimer: 'This information summarizes INSPQ recommendations for travellers and does not replace a travel health consultation.',
    region: (region) => `Other destinations: ${region}`,
    title: (name) => `${name}: vaccines and travel health | Groupe Santé Voyage`,
    description: (name, diseases) =>
      `${name}: recommended vaccines and health risks for travellers (${diseases.join(', ')}…), based on the INSPQ. Travel health clinic in Laval, Montréal, Longueuil and Blainville.`,
    hubTitle: 'Travel Vaccination by Country and Region',
    hubLede: 'Recommended vaccines vary by country. See the INSPQ recommendations for your destination, then prepare for your trip at a pre-travel consultation.',
    hubSeoTitle: 'Travel Vaccination by Country & Region | Travel Health',
    hubDescription: 'Discover travel vaccine recommendations by country and prepare for your trip with the support of our travel health specialists.',
  },
};
