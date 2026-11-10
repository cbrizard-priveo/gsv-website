# SEO recommendations: status

Source: "Recommandations SEO - Groupe Santé Voyage.xlsx" (27 rows). Titles, descriptions and H1s live in `src/data/seo.ts`.

## Applied

- **Titles (all rows):** the recommended title on each page. For vaccine pages without a specific row, the expert's patterns: "Vaccination + (maladie) | Clinique Santé Voyage" and "(Disease) Vaccination | Travel Health Clinic". Typo fixed: "Pe-travel" became "Pre-travel".
- **Meta descriptions (155 characters max):**
  - Homepage and hub: the expert's examples. The English homepage one was trimmed slightly.
  - Rabies and Dukoral: the expert's suggestions. Rabies was reworded to match the 2026 INSPQ text now on the page.
  - All other vaccine pages, telemedicine and the six service pages: the expert's template. The first sentence restates the page's own text.
  - This also fixes wrong descriptions on the live site: chikungunya, dengue, malaria and zika had the hepatitis A description, telemedicine had the general-vaccination one, and the English traveller's clinic page had a French one.
- **H1s:**
  - Dukoral (FR/EN) and HPV (EN) as recommended. French H1s use French capitalization ("Dukoral® : vaccin contre la diarrhée du voyageur").
  - English homepage: "Your travel clinic since 1997".
  - Telemedicine: "Télémédecine santé voyage" / "Travel Health Telemedicine" (typo fixed).
  - Hub: "Vaccination recommandée par pays et régions" / "Travel Vaccination by Country and Region".
  - The six imported service pages had no H1 at all; their hero heading is now the H1. On the English prescription page that heading was in French, so it now uses the page's English title.
- **Location under the H1 on every vaccine page:** "Vaccination offerte à Montréal, Laval, Longueuil et Blainville." On dengue, malaria and zika, where our text names no vaccine, it reads "Consultation santé-voyage offerte à…" instead.
- **Section 7 on every vaccine page:** "Où obtenir le vaccin contre … dans le Grand Montréal ?" with the four clinics and the button "Prenez votre rendez-vous vaccin dès aujourd'hui" linking to booking. Dengue, malaria and zika get the consultation version.
- **Locations:**
  - Homepage clinics section heading: "Groupe Santé Voyage dessert tout le Grand Montréal".
  - Its first sentence lists the four cities (Laval was listed twice in the sheet).
  - The footer of every page lists each clinic's address.
- **Regions pages:**
  - `/regions-du-monde/` and the English page now redirect to the country hubs, which apply that row: title, H1, description, the "vaccines vary by country" statement and a booking button instead of the health-advice link.
  - Links to the old pages were pointed to the hubs.
- **Image descriptions (alt):** the homepage photos, written from what each photo shows. The hero slideshow stays decorative, as it should for accessibility.

## Not applied: needs your input

1. **Clinic pages (5 rows, priority 5):**
   - They would need each clinic's own facts: phone, hours, access, amenities. The priveosante.com pages have them, but with Priveo's phone numbers.
   - Which details should these pages use?
   - **West Island / Pointe-Claire:** our site lists four clinics, but the telemedicine page also lists Pointe-Claire. Is there a West Island clinic?
   - The Blainville H1 in the sheet says "Rive Sud"; it should be Rive-Nord.
2. **"Clinique de vaccination voyage" section on the homepage:** it should feature "the most used and quasi-exclusive vaccines" at GSV. Only the clinic knows which ones these are.
3. **Vaccine page sections 1–6** (what it is, who it's for, doses, side effects, price and insurance, monograph):
   - This is new medical content for about 50 pages.
   - It can be written like the country pages: facts from the PIQ/INSPQ, our own wording, independent verification, source cited.
   - Price and insurance coverage have to come from the clinic.
4. **Telemedicine content:** the sheet asks to rewrite the first section around travel health only, rename "Vaccins généraux" and add a FAQ. The answers (prescription by teleconsultation, vaccines after it, how far ahead to book) need the clinic's own facts.
5. **Fewer uses of "voyage" on the homepage (44):** this means rewording the homepage copy, which is the original site text. It needs your approval of new wording.
6. **Alt text on the other images** (vaccine and blog photos, about 60 images): to do in a later pass.

## Found while applying

- The English dengue, malaria and zika pages contain "Lorem Ipsum" placeholder text, copied from the live site. They should be written or hidden before publishing.
