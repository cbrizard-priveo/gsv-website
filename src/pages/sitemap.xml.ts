// sitemap.xml: imported WordPress pages plus pages built from our data, with FR/EN alternates.
import type { APIRoute } from 'astro';
import pages from '../wp/pages.json';
import redirects from '../data/redirects.json';
import type { WpPageData } from '../layouts/WpPage.astro';
import { countries, countryPath, hubPath } from '../lib/countries';
import { absolute } from '../lib/seo';
import { clinicPages, clinicPath, clinicsHubPath } from '../data/clinics';
import { tarifsCopy } from '../data/tarifs';

interface Entry {
  path: string;
  alternates?: { fr: string; en: string };
  lastmod?: string;
}

const byRoute = new Map((pages as WpPageData[]).map((p) => [p.route, p]));
// Not in the sitemap: REST API responses, redirected pages, date archives and anything marked noindex.
const isJunk = (route: string) => {
  const page = byRoute.get(route);
  return (
    route.includes('/wp-json/') ||
    route in redirects ||
    /^\/(en\/)?\d{4}\//.test(route) ||
    !!page?.head.some((tag) => /<meta name="robots"[^>]*noindex/.test(tag))
  );
};

export const GET: APIRoute = () => {
  const entries: Entry[] = [];
  for (const p of pages as WpPageData[]) {
    if (isJunk(p.route)) continue;
    // hreflang pairs must point both ways.
    const alt = p.alt && byRoute.get(p.alt)?.alt === p.route && !isJunk(p.alt) ? p.alt : null;
    entries.push({ path: p.route, alternates: alt ? (p.lang === 'fr' ? { fr: p.route, en: alt } : { fr: alt, en: p.route }) : undefined });
  }
  entries.push({ path: hubPath('fr'), alternates: { fr: hubPath('fr'), en: hubPath('en') } });
  entries.push({ path: hubPath('en'), alternates: { fr: hubPath('fr'), en: hubPath('en') } });
  const tarifs = { fr: tarifsCopy.fr.path, en: tarifsCopy.en.path };
  entries.push({ path: tarifs.fr, alternates: tarifs }, { path: tarifs.en, alternates: tarifs });
  // Service pages with no imported WordPress page behind them (Hajj and Umrah).
  const hajj = { fr: '/pelerinage-hadj-omra/', en: '/en/hajj-umrah-pilgrimage/' };
  entries.push({ path: hajj.fr, alternates: hajj }, { path: hajj.en, alternates: hajj });
  const hubs = { fr: clinicsHubPath('fr'), en: clinicsHubPath('en') };
  entries.push({ path: hubs.fr, alternates: hubs }, { path: hubs.en, alternates: hubs });
  for (const c of clinicPages) {
    const alternates = { fr: clinicPath(c, 'fr'), en: clinicPath(c, 'en') };
    entries.push({ path: alternates.fr, alternates }, { path: alternates.en, alternates });
  }
  for (const c of countries) {
    const alternates = { fr: countryPath(c, 'fr'), en: countryPath(c, 'en') };
    entries.push({ path: alternates.fr, alternates, lastmod: c.inspq.checked });
    entries.push({ path: alternates.en, alternates, lastmod: c.inspq.checked });
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries.map((e) =>
      [
        '<url>',
        `<loc>${absolute(e.path)}</loc>`,
        e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : '',
        ...(e.alternates
          ? [
              `<xhtml:link rel="alternate" hreflang="fr-CA" href="${absolute(e.alternates.fr)}"/>`,
              `<xhtml:link rel="alternate" hreflang="en-CA" href="${absolute(e.alternates.en)}"/>`,
              `<xhtml:link rel="alternate" hreflang="x-default" href="${absolute(e.alternates.fr)}"/>`,
            ]
          : []),
        '</url>',
      ].join(''),
    ),
    '</urlset>',
  ].join('\n');
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
