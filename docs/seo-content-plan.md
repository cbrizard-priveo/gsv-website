# SEO content plan: vaccines, diseases and countries

Groupe Santé Voyage · proposal for review · November 10, 2026

Goal: make cliniquesantevoyage.com the reference travel-health site in Québec, with a page for every vaccine, every travel-health disease and every country, sourced from the INSPQ and cited on each page.

Detailed competitor findings (in French): [analyse-concurrentielle.md](analyse-concurrentielle.md).

## 1. Where the competition stands

| | Clinique du Voyageur (cliniquevoyageur.ca) | Passport Health | Others (Jean Coutu, Clinique Vaccination Rive-Sud, local yellow-fever clinics) |
|---|---|---|---|
| Country pages | ~260 FR + ~260 EN | ~261 per market (FR-CA, EN-CA, EN-GB) | None |
| Disease / vaccine pages | ~42 FR + ~44 EN, mixed together, 350–600 words, no sources | 24 FR vaccine pages, no disease pages | A few service pages |
| Freshness | 437 of 519 country pages last modified in 2021, while headings say "en 2026" | No dates shown | — |
| Source cited | Generic links to INSPQ / WHO | PHAC, WHO (US content translated) | — |
| FR/EN linking for Google | No hreflang in pages (only in the sitemap) | Clean hreflang | — |
| Medical structured data | None (standard Yoast only) | Clinic and offer data on the Laval page | None |
| Prices | Contradictory ($20 vs $70 consultation) | None | — |
| Medical review shown | None | None | — |

Verified by me on Nov. 10, 2026: Clinique du Voyageur's page counts, the 2021 dates, and the missing hreflang in page HTML. The rest comes from the competitor analysis and is marked "non vérifié" there where it couldn't be checked. Actual Google rankings in Québec were not measured.

**Takeaway:** only two competitors have country pages, both templated, undated and not tied to Québec sources. Nobody has well-linked disease pages, visible medical review, or the INSPQ as a primary, deep-linked source. That is the opening.

## 2. How we win

1. **INSPQ-first and dated.** Every page cites the exact INSPQ chapter or country page, with the INSPQ update date and the date we last checked it.
2. **Visibly fresh.** Pages show "Révisé le … par [nom, titre]"; the same dates go into the structured data (`lastReviewed`, `reviewedBy`).
3. **Accurate.** The competitor has visible medical errors; our process makes accuracy checkable: facts only, source linked, medical review.
4. **Connected.** Country → diseases present → vaccines → nearest clinic → booking, and back. Competitor pages are dead ends.
5. **Decision-first country pages.** What to get before leaving, by traveller profile, at the top: yellow fever (entry requirement vs. recommendation), malaria, rabies, current outbreaks, lead time before departure.
6. **Technically clean.** fr-CA at the root, en-CA under `/en/`, full hreflang with `x-default`, medical structured data (MedicalWebPage, MedicalCondition, MedicalClinic with hours), fast static pages. The rebuilt Astro site already gives us most of this.
7. **Local.** Rich pages for each of the four clinics. Competitors have no Blainville or Outremont page, and Passport Health has nothing on the North or South Shore. Consistent name, address and phone across Google Business Profile and directories.
8. **Booking everywhere.** A contextual booking card on every page (already in the vaccine template).
9. **Prices (if you choose to publish them).** Nobody shows clear vaccine prices; "prix vaccin [x]" searches are uncontested.

## 3. The INSPQ as a source: what it means in practice

- **Coverage:** 219 countries and territories; 38 travel-health topics, including 18 with a vaccine section. Routine vaccines on our site (tetanus, HPV, shingles, pneumococcus, Hib) are not in the travel guide; their Québec government source is the Protocole d'immunisation du Québec (MSSS) or Québec.ca.
- **Freshness:** the guide is "mis à jour en temps réel et en continu". INSPQ news bulletins come out every 2–4 weeks and often touch a dozen countries at once (yellow fever in West Africa, measles in the US, cholera in Laos…). Country pages carry dated outbreak notes (e.g. Mexique, updated May 11, 2026: measles outbreak "en cours (2026)"). **A copy that isn't kept up to date becomes medically wrong.**
- **Audience:** INSPQ writes for health professionals (nurses, doctors, pharmacists). Our pages present the same facts for patients, without adding anything.
- **Language:** INSPQ publishes in French only; our English pages are translations.
- **Reuse rights:** INSPQ content is Government of Québec copyright, and reproducing or adapting it requires prior authorization (requested at droitauteur.gouv.qc.ca). The rabies page uses the approach that needs no authorization: a shorter summary of the facts in our own words, with the source linked. At the scale of 219 country recommendation tables, that is close to republishing INSPQ's compilation, so **requesting authorization is the safer route** (and would also let us quote the recommendations verbatim, which is the most accurate option).

## 4. Site structure

| Type | French | English | Count (FR + EN) |
|---|---|---|---|
| Country | `/pays/{pays}/` | `/en/countries/{country}/` | 219 + 219 (tiny or uninhabited territories merged or not indexed) |
| Disease / risk | `/maladies/{maladie}/` | `/en/diseases/{disease}/` | ~38 + ~38 |
| Vaccine | `/vaccination/{vaccin}/` (existing URLs kept) | `/en/vaccination/{vaccine}/` | 28 existing + new travel vaccines |
| Hubs | `/pays/`, `/maladies/`, `/vaccination/` (A–Z, search, map later) | same under `/en/` | 6 |

Each page links to the related pages of the other types (a country lists its diseases and vaccines; a disease lists its at-risk countries and its vaccine; a vaccine lists its diseases and countries), plus the clinics and booking.

## 5. Page templates (same design system as the rebuilt vaccine pages)

- **Country:** hero (country, last INSPQ update, booking) → "Avant de partir" summary (vaccines by profile, yellow fever, malaria, rabies) → current outbreaks (dated) → other risks (insects, water and food, environment, safety) → related diseases and vaccines → clinics → source block.
- **Disease:** hero → what it is and how it spreads → symptoms → where (linked countries) → prevention (vaccine link, insect or food precautions) → what to do if exposed → source block.
- **Vaccine:** the current template, with the text updated from INSPQ (or the PIQ for routine vaccines) and links to diseases and countries.
- **Source block on every page:** "Source : INSPQ, Guide d'intervention santé-voyage, « … » (mis à jour le …). Information vérifiée le …. Révisée par …" with a direct link.

## 6. Content process

1. **Extract:** a script reads each INSPQ page and stores its facts and update date as structured data in the repository, so every fact on our site traces back to a dated source.
2. **Write:** each page presents only those facts (summary, or verbatim if INSPQ authorizes it). Nothing is added or deduced.
3. **Medical review:** your medical team approves pages in batches; the reviewer's name and date appear on the page.
4. **Monitor:** a weekly check of the INSPQ news feed and of each source page's "Dernière mise à jour" date lists the pages whose source changed since our last check. Those go back through steps 2–3.

## 7. Rollout

| Wave | Content | Pages (FR + EN) |
|---|---|---|
| 0 | Templates + pilot: one country (Mexique), one disease (dengue), one vaccine update (fièvre jaune); medical review of the pilot | ~6 |
| 1 | Highest-demand destinations (list to be set from Search Console / keyword data, not guessed) | ~60 |
| 2 | All diseases and remaining vaccine updates | ~110 |
| 3 | Remaining countries | ~380 |
| Ongoing | Weekly freshness check and updates | — |

## 8. Decisions needed

1. **INSPQ authorization:** request it now (recommended), or proceed with facts-only summaries?
2. **Medical reviewer(s):** who signs off, and can their name and title appear on pages?
3. **Prices:** publish consultation and vaccine prices?
4. **Routine vaccines:** OK to use the PIQ (MSSS) / Québec.ca as their source?
5. **English:** translated pages reviewed by the same medical reviewer?
6. **Small territories:** merge into their parent country, or no page?
7. **Directories:** a Cortico listing named "Clinique Santé Voyage MV" may show an outdated address (non vérifié); worth checking with Google Business Profile.
