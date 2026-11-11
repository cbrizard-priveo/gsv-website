# Vaccine and disease pages: update report

November 10, 2026 · 28 topics · French and English (56 pages)

## What changed

- Every vaccine and disease page now has a new text written from the latest official Québec sources. The old WordPress text (often Santé Canada, 2019) is no longer used.
- The source list is at the bottom of each page, each one linked, with its last-update date as shown on the source page.
- Empty or placeholder pages are filled:
  - the English Hib page was empty;
  - the English dengue, malaria and zika pages had Lorem Ipsum.
- The meta description of each page restates a fact from the new text (`src/data/seo.ts`).
- The texts are in `src/data/vaccines/<topic>.json` (rabies is in `src/data/vaccine-texts.ts`). Each file has a `notes` field: what was left out on purpose, what the checker changed, and open questions.

## Sources

| Source | Topics |
|---|---|
| INSPQ, Guide d’intervention santé-voyage | rage, hépatite A, hépatite B, Twinrix, typhoïde, poliomyélite, fièvre jaune, encéphalite japonaise, méningocoque, grippe, choléra et ETEC, diarrhée du voyageur (Dukoral), rougeole, chikungunya, paludisme, dengue, zika |
| Protocole d’immunisation du Québec (PIQ), as a complement where INSPQ refers to it | Bexsero, choléra/Dukoral (doses), chikungunya (vaccine safety), coqueluche, diphtérie, tétanos, oreillons, rubéole |
| Gouvernement du Québec, Québec.ca (INSPQ has no travel chapter on these routine vaccines) | coqueluche, diphtérie, tétanos, oreillons, rubéole, varicelle, zona, VPH, pneumocoque, Hib, grippe, Bexsero |

## How it was made

This followed the same method as the country pages:
1. Every source was read in full in a browser. INSPQ blocks automated downloads, and summarizing tools lose details.
2. The facts were written in our own words, French first; the English is translated from our French. No source paragraphs were copied. Product names, numbers and place names are kept exactly as the source gives them.
3. A separate pass re-read every source and compared each sentence. It fixed facts that went beyond the source, wording too close to the source, and dates. It also removed statistics tied to a single past year.
4. Automated checks covered allowed HTML only, links only to official sites, no Lorem Ipsum, and descriptions of 155 characters or less.

## To review before publishing (medical team / clinic)

1. **Dukoral:** INSPQ does not recommend it routinely for travellers' diarrhea, and in trials it showed no benefit over placebo. The page says so. Its title and H1 ("vaccin contre la diarrhée du voyageur", from the SEO sheet) may suggest otherwise and should be reconsidered.
2. **Chikungunya:** the page gives the Ixchiq indications, contraindications and the safety warnings from the PIQ (serious reactions, deaths reported after the vaccine came on the market, the Health Canada warning of January 2026). Please confirm the vaccine is still available and how the PIQ's 1.6 % figure should read.
3. **Sources with no date or an old date:**
   - INSPQ hepatitis A, typhoid, influenza, malaria and dengue show no update date.
   - Québec.ca pages from 2015–2019: Hib, diphtheria, varicella, mumps, rubella, and the shingles disease page.
   - The latest official pages were used, but the team should confirm they are still current.
4. **Programs that change:** HPV free offer for ages 21–45 ("selon la disponibilité des stocks", no end date on Québec.ca). The groups offered free flu vaccination also change by season.
5. **Topics where the source is thin:**
   - Diphtheria: the source doesn't say how it spreads.
   - Hib: the source doesn't say what Hib is.
   - Twinrix: INSPQ names no product and gives only the accelerated schedule, so the product name appears only in the page title.
6. **Length:** most texts run 450–700 words; polio is about 900 words.
7. **Each file's `notes`** lists the remaining smaller questions (wording choices, items left out).

## Keeping it current

INSPQ and Québec.ca update these pages over time. The source dates on each page make it easy to see which ones need a refresh. The weekly INSPQ check proposed for the country pages could cover these chapters too.
