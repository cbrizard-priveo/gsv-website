// SEO tags for pages built from our own data (the imported pages keep their Yoast tags).
const SITE = 'https://cliniquesantevoyage.com';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

interface Seo {
  description: string;
  path: string;
  alternates: { fr: string; en: string };
  lang: 'fr' | 'en';
  title: string;
  jsonLd?: object;
}

export function seoHead({ description, path, alternates, lang, title, jsonLd }: Seo): string[] {
  return [
    `<meta name="description" content="${esc(description)}">`,
    `<link rel="canonical" href="${SITE}${path}">`,
    `<link rel="alternate" hreflang="fr-CA" href="${SITE}${alternates.fr}">`,
    `<link rel="alternate" hreflang="en-CA" href="${SITE}${alternates.en}">`,
    `<link rel="alternate" hreflang="x-default" href="${SITE}${alternates.fr}">`,
    `<meta property="og:locale" content="${lang === 'fr' ? 'fr_CA' : 'en_CA'}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:url" content="${SITE}${path}">`,
    `<meta property="og:site_name" content="Groupe Santé Voyage">`,
    ...(jsonLd ? [`<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>`] : []),
  ];
}

export const absolute = (path: string) => `${SITE}${path}`;
