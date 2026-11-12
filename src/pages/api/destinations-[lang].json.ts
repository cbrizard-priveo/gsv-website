// Country data for the homepage's destination search (src/components/home/TripPlanner.astro), fetched when
// a visitor starts typing so the homepage itself stays light. Only what the country pages already show.
import type { APIRoute } from 'astro';
import type { Lang } from '../../data/site';
import { REGIONS, countries, countryPath } from '../../lib/countries';

export function getStaticPaths() {
  return [{ params: { lang: 'fr' } }, { params: { lang: 'en' } }];
}

export const GET: APIRoute = ({ params }) => {
  const lang = params.lang as Lang;
  const other: Lang = lang === 'fr' ? 'en' : 'fr';
  const data = countries
    .map((c) => ({
      name: c.name[lang],
      alt: c.name[other],
      path: countryPath(c, lang),
      region: REGIONS.find((r) => r.id === c.region)!.name[lang],
      updated: c.inspq.updated,
      // The diseases INSPQ lists for the country, linked to their row on the country page.
      topics: c.diseases.map((d) => [d.name[lang], `risque-${d.id}`]),
    }))
    .sort((a, b) => a.name.localeCompare(b.name, lang));
  return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
