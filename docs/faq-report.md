# FAQ: report

November 12, 2026 · French and English

## What was built

- **Main FAQ** at the old site's URLs, `/foire-aux-questions-sur-la-clinique-voyage/` and
  `/en/frequently-asked-questions-about-the-travel-clinic/`. It replaces the imported page and has four
  themes:
  - Avant le départ (8 questions);
  - Les vaccins (4);
  - Maladies et prévention (11);
  - La clinique (6).
- **FAQ at the bottom of every vaccine and disease page:** 3 questions each, 84 in all, written only from that
  page's verified text.
- **FAQ on every country page:** yellow fever, malaria and hepatitis A, when INSPQ lists them. These are
  generated from the page's own verified rows, word for word, with no new text.
- **FAQ on every clinic page:** hours, address and access, what's on site, and telemedicine. These are generated
  from the clinic data.
- **Structured data:** each FAQ has FAQPage structured data. Google now shows FAQ rich results mainly for
  authoritative health and government sites; the markup is harmless either way.
- **Look and behaviour:** Priveo's FAQ module and accordion behaviour.
- **Files:** content is in `src/data/faq/*.json` and the code in `src/lib/faq.ts`.

## How the answers were made

1. **Topics:** taken from the questions travellers ask (cliniquevoyageur.ca's FAQ was used only as a list of
   topics; none of its text) and from the clinic's own FAQ.
2. **Medical answers:** facts from INSPQ, the PIQ (MSSS), Québec.ca or the Government of Canada, restated in
   our own words, with the source shown under each answer. The vaccine-page answers restate the pages' own
   verified texts.
3. **Practical answers (« La clinique »):** restated from the clinic's current FAQ and telemedicine page.
   They are the clinic's facts and need its confirmation.
4. **Verification:** a separate pass re-read every source and compared each answer.
   - About 40 answers were corrected, mostly conditions lost in summarizing, wording stronger or weaker than
     the source, or a fact generalized from a single vaccine.
   - The clinic's old « 6 à 8 semaines » was replaced by the Government of Canada's « environ six
     semaines ».
   - The clinic's « Il n'est jamais trop tard pour une consultation » is kept, labelled as the clinic's own
     message.

## To review before publishing

- **Questionnaire:** the questions only the clinic can answer are in `docs/faq-questionnaire.md`. They are
  not on the site yet.
- **« La clinique » theme:** confirm payment methods, kits, group talks and the contact details (the old
  site's 1-855-582-2246 and info@cliniquesantevoyage.com, versus Priveo's on the clinic pages).
- **Long answers:** several are over 120 words (chikungunya, Zika, children, family visits) because a
  shorter version would drop a condition or a safety warning.
- **Points for the medical team** (each item's `notes` has the details):
  - rabies sign-off;
  - chikungunya vaccine availability;
  - the 2-month Zika wait (who it applies to);
  - the varicella schedule (2019 sources);
  - the HPV free offer for ages 21–45;
  - the yellow fever booster groups.
- **Keeping it current:** answers that rest on country data (« destination soleil », the country-page
  FAQs) change when INSPQ updates those countries.
