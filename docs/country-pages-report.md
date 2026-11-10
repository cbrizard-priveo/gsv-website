# Country pages: build report

November 10–11, 2026 · 113 countries and territories · French and English (226 pages + 2 hubs)

## What was built

- **Regions:** Central America (7), South America (14), Caribbean (24), Africa (57), South-East Asia (11). Mexico (North America) and Bermuda (Atlantic) are not included.
- **URLs:** `/pays/{pays}/` and `/en/countries/{country}/`, hubs at `/pays/` and `/en/countries/`. Every page is in `sitemap.xml` with its FR/EN pair (hreflang fr-CA, en-CA, x-default).
- **Page content:** every row of the INSPQ "Interventions recommandées" table (vaccines and diseases) and "Autres mesures préventives" table (insects, water and food, environment, sexual health, safety, and occasional extra rows such as viral hemorrhagic fevers), in INSPQ's order. Each disease links to our own page when we have one. Each page ends with the INSPQ source (linked), the INSPQ update date, our check date (Nov. 10, 2026) and a disclaimer.
- **Data:** one file per country in `src/data/countries/`; the template is `src/views/Country.astro`.

## How the content was made (no INSPQ authorization needed)

1. **Read:** each INSPQ country page was read in full in a browser (INSPQ blocks automated downloads; the summarizing fetch tool loses details, so it wasn't used for facts).
2. **Write:** facts only, restated in our own words and structure, French first, English translated from our French. Short labels and proper nouns stay as INSPQ writes them; no INSPQ paragraphs are copied.
3. **Verify:** a separate pass re-read every INSPQ page and compared every row, fact by fact, and fixed what didn't match.
4. **Automated checks:** valid data, allowed formatting only, links only to official sites (INSPQ, MSSS, Government of Canada, WHO/PAHO, COCQ-SIDA, Clic Santé), no broken internal links on the 228 pages.

## What verification caught and fixed

About 20 corrections across 113 countries, for example:
- **Additions that INSPQ doesn't state** (removed): "(sans médicament préventif)" in the malaria rows for South Africa and Botswana; two explanatory glosses (Honduras, Colombia); an interpretation of Panama's malaria and Oropouche areas.
- **Wording that drifted from INSPQ:** Thailand ("visité", not "séjourné"); the yellow fever "situation" sentence for Bolivia, Brazil, Colombia and Ecuador.
- **Sentences too close to INSPQ's text** (reworded): Peru, Myanmar, Nicaragua.
- **Spelling:** place names returned to INSPQ's spelling where our writer had "corrected" them (Venezuela, Suriname, Honduras).
- **Formatting:** superscripts, an English place name, one link not on the INSPQ page.

## To review (decisions for you or the medical team)

1. **Barbade, yellow fever entry rule:** INSPQ writes "la Guyane", which can mean Guyana or French Guiana. We kept "Guyane" in both languages; INSPQ should be asked, or the medical team should decide.
2. **Costa Rica, yellow fever:** INSPQ's clause about Trinidad and Tobago is ambiguous; our text reads it as exempting travellers in transit and Tobago-only itineraries.
3. **Probable INSPQ typos kept as written:** Nicaragua ("Boaca", "Zinotega", "Léon"), Indonesia ("Pulan Seribu"), Somalia ("Gado", "Galgadud"), Honduras ("Roátan"). Where the correct spelling appears elsewhere on the same INSPQ page, we used it (Brazil "São Paulo"; Ecuador "Guayaquil", "Esmeraldas", "Morona-Santiago"; Dominican Republic "Minas Gerais", "La Altagracia").
4. **Puerto Rico:** INSPQ lists MERS-CoV under respiratory infections; it's on the INSPQ page, so it's on ours.
5. **English pages** are our translation of our French summary (INSPQ is French only).
6. **Medical review:** all 226 pages should be reviewed by the medical team before publishing, as for the rest of the site.

## Keeping it current

INSPQ dates on these pages range from March to November 2026, and INSPQ publishes updates every 2–4 weeks (often a dozen countries at a time). The pages must be refreshed when INSPQ changes, or they become wrong. Next step proposed in the SEO plan: a weekly check of INSPQ's news feed and each page's "Dernière mise à jour" against the `inspq.updated` date in our data, listing the countries to update.

## Not done yet

- The menu's "Destinations" link still goes to the old `/regions-du-monde/` page; it could point to the new `/pays/` hub.
- Other regions (Europe, Asia outside South-East Asia, Middle East, Oceania, North America) — about 106 more countries.
- Disease pages and vaccine updates from the SEO plan.
