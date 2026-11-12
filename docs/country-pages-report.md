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

## Update — November 12, 2026: every INSPQ country (218)

- **105 new countries and territories** (210 pages): Europe (44), Middle East (14), Central Asia and the Caucasus (8), South Asia (8), East Asia (6), Oceania (21), North America (4: Canada, États-Unis, Mexique, Bermudes). The site now has every country in INSPQ's A–Z list. « Swaziland » is a duplicate of Eswatini and is not repeated.
- **New regions** in the hub and on the map: Amérique du Nord, Europe, Moyen-Orient, Asie centrale et Caucase, Asie du Sud, Asie de l’Est, Océanie.
- **Same method:** each page was read in full in a browser (rendered page, links included), written from the facts in our own words, then re-read against INSPQ, row by row, by a separate checker.
- **Corrections applied to all 218 pages (old and new):**
  - *Rabies:* INSPQ uses two different wordings for pre-departure vaccination: « qui seront probablement exposés » and « susceptibles d’être exposés ». Our pages had often merged them into « susceptibles », which widens the recommendation. An automated check of the 218 INSPQ pages found 63 differences, about 30 of them in the 113 earlier pages, and all were aligned with INSPQ.
  - *Tick-borne encephalitis:* on INSPQ, a tooltip in this row says the vaccine is no longer available in Canada but is available in the United States and several European countries. It is now written in that row on the 45 pages where INSPQ shows it, including Tunisie, an earlier page.
- **To review (medical team):**
  1. *Monténégro:* INSPQ places tick-borne encephalitis cases « près de Belgrade », which is in Serbia, probably copied from the Serbie page.
  2. *Pakistan:* the Japanese encephalitis row carries the tick-borne encephalitis tooltip and link (INSPQ error); we left both out.
  3. *Allemagne, Tchéquie:* the tick-borne encephalitis tooltip is broken on INSPQ (it shows « Le vaccin n »); the full sentence, readable in the page code, was used.
  4. *Inde (English):* INSPQ's « Guyane » in the yellow fever list is translated "Guyana", because the same list names French Guiana separately. Barbade keeps « Guyane » as written.
  5. *Allemagne polio:* INSPQ calls Bayern, Hessen and Nordrhein-Westfalen « villes »; they are states. Kept as written.
  6. *Old figures on recent pages:* Mexique malaria (2022–2023 figures, page updated May 2026).
  7. *Not shown on our pages:* INSPQ's general tooltips (rabies availability levels "< 48 h", "transmission probablement interrompue" awaiting WHO confirmation). These are the same on every page; it's a site-wide decision whether to show them.
  8. *Probable INSPQ typos kept as written:* Voralberg, Lappeerenta, Primorié/Primoré, St-Barthélémy, rivières Cayu; Finlande's « minicipalités » (a common word) was corrected.
- **Map:** shapes from Natural Earth. Gibraltar and Tuvalu are too small for the atlas and appear as a dot. Greenland is linked to the Danemark page, which covers it. Areas with no INSPQ page stay grey (Western Sahara, Kosovo, Somaliland, Northern Cyprus).

## Not done yet

- A process to refresh pages when INSPQ updates them (see « Keeping it current »).
