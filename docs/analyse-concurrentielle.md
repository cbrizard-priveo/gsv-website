# Analyse concurrentielle SEO : santé-voyage, Grand Montréal

**Client :** Groupe Santé Voyage (cliniquesantevoyage.com), Laval, Montréal-Outremont, Longueuil, Blainville (Priveo Santé)
**Date de l'analyse :** 10 novembre 2026
**Méthode :** sitemaps XML et robots.txt téléchargés, pages d'exemple récupérées en HTML brut (curl) et analysées par script (title, meta, canonical, hreflang, Hn, JSON-LD, dates, domaines sortants), complétées par des recherches web. Aucun formulaire soumis, aucun compte créé.

**Limites :**
- L'outil de recherche web est basé aux États-Unis. Les **positions Google réelles au Québec ne sont pas vérifiées** : la visibilité indiquée ci-dessous est déduite de la récurrence des domaines dans les résultats, pas d'un outil de rang.
- Les nombres de mots sont calculés sur le `<body>` sans script, style, nav, header ni footer. Une partie du texte de gabarit (bandeaux, liens utiles, infolettre) reste comptée, donc il faut lire ces chiffres comme des ordres de grandeur.
- mcgill.ca répond 403 aux requêtes automatisées : le site n'a pas pu être analysé.

---

## 1. Tableau récapitulatif des concurrents

| Concurrent | URL | Emplacements (Grand Montréal) | Pages vaccins | Pages maladies | Pages pays | Pages indexables (approx.) | Point fort | Point faible |
|---|---|---|---|---|---|---|---|---|
| **Clinique du Voyageur / Summit Health** (concurrent principal) | cliniquevoyageur.ca | Montréal centre-ville (1055 Beaver Hall), Plateau, Rosemont, Westmount, Kirkland/Ouest-de-l'Île, **Laval (800 boul. Chomedey, Tour C-400)**, **Longueuil / Rive-Sud**, Greenfield Park, Sainte-Thérèse, St-Jérôme ; aussi Québec et Sherbrooke, et 13 cliniques en Ontario | ~44 EN + ~42 FR, mélangés avec les maladies (`/travel-vaccines/`, `/maladies/`) | 9 EN (`/travel-illness/`) + quelques FR orphelines | **~252 EN + ~253 FR** (+ alertes et sécurité) | 882 pages + 146 articles (moitié FR, moitié EN) | Couverture pays énorme, pages FR de pays longues (~2 700 à 3 000 mots), FAQPage sur certains pays, 25+ fiches cliniques avec MedicalClinic | Contenu figé en 2020-2021, **aucun hreflang**, FR en `?lang=fr`, erreurs factuelles, prix incohérents, pas de sources ni d'auteur médical |
| **Passport Health Canada** | passporthealthglobal.com (/fr-ca/, /ca/) | Centre-ville (1001 de Maisonneuve O., bureau 660), Westmount (4880 Sherbrooke O.), Pointe-Claire (201 av. Cartier), **Laval (3030 boul. le Carrefour, bureau 501)**, Québec | 24 FR + 24 EN (`/fr-ca/vaccinations/`) | ~0 page maladie dédiée (la maladie est traitée dans la page vaccin) | **261 FR + 261 EN-CA + 261 EN-GB** | ~2 150 URLs (dont ~960 articles de blogue, surtout US/EN) | hreflang propre (en-us, en-ca, fr-ca, en-gb, x-default), gros maillage pays vers vaccins, avis clients, schema MedicalClinic + Offer en microdata sur les fiches cliniques | Contenu traduit de l'américain, cite ASPC/OMS mais **jamais l'INSPQ**, aucune date visible, pas de JSON-LD sur les pages pays et vaccins, bug sur la fiche Laval (« appelant au . », numéro absent) |
| **Jean Coutu, santé-voyage en pharmacie** | jeancoutu.com/sante/services/sante-voyage/ | Plus de 190 pharmacies au Québec (selon des sources tierces), dont plusieurs dans la région | 0 | 0 | 0 | 1 à 2 pages de service | Marque très connue, réseau, prise de rendez-vous intégrée, hreflang fr/en | Page mince (~300 mots), aucun contenu éditorial, qualité variable selon le pharmacien propriétaire |
| **Clinique Vaccination Rive-Sud (CVRS)** | cliniquevaccinationrivesud.com | **Longueuil (386 Gentilly O.)**, La Prairie, St-Jean-sur-Richelieu, Varennes | 1 page « vaccination voyage » + « tous nos vaccins » | 0 | 0 | 22 pages | Centre fièvre jaune désigné, local, prises de sang dès 5 h 30 | Site très mince, FR seulement, aucune page par vaccin ni par pays, schéma JSON-LD limité à Organization |
| **Centre J.D. MacLean / McGill, clinique pré-voyage** | mcgill.ca/tropmed | CUSM site Glen (1001 Décarie) | non vérifié (403) | non vérifié | non vérifié | non vérifié | Autorité académique (médecine tropicale), 50 $ la visite selon les résultats de recherche | Pas un acteur SEO commercial ; site institutionnel |
| **Petites cliniques désignées fièvre jaune** (Groupe Santé Express à Laval, Clinique Provision à Montréal, Clinique Médicym à Blainville, Clinique Médicale Diamant…) | sites non trouvés ou fiches d'annuaires (Cortico, Doctr) | Laval, Côte-des-Neiges, Blainville | 0 | 0 | 0 | non vérifié | Proximité ; présence sur la liste officielle canada.ca des centres fièvre jaune | Quasi absents en SEO organique, visibles seulement via annuaires et Maps |

**Concurrents informationnels sur les requêtes « vaccins pour [pays] » et « vaccin [maladie] »** (pas des cliniques, mais ils prennent les clics) : **inspq.qc.ca/sante-voyage/guide** (la source de référence, qui occupe les SERP), voyage.gc.ca, pasteur.fr, tourdumondiste.com, routard.com, lonelyplanet.fr, mesvaccins.net. Ces sites FR de France captent beaucoup de requêtes francophones : une page qui répond d'abord dans le contexte du Québec (RAMQ, INSPQ, cliniques désignées, carte jaune) est un vrai différenciateur.

**Remarque :** l'annuaire Cortico liste une « Clinique Santé Voyage MV » qui mentionne du stationnement gratuit à **Laval, Longueuil, Outremont, Pointe-Claire et Blainville**. C'est très probablement une ancienne fiche de GSV elle-même (non vérifié). À corriger ou réclamer pour la cohérence NAP.

---

## 2. Analyse approfondie : cliniquevoyageur.ca (Clinique du Voyageur par Summit Health)

### 2.1 Pile technique
- WordPress 7.1.4, Elementor 4.4, **WPML 5.2** (FR/EN), Yoast SEO (sitemap), WP Rocket, Cloudflare (les requêtes curl passent ; pas de blocage).
- Marque : « Clinique du Voyageur » en FR, « Summit Health » dans les titres EN. Entreprise multi-province (QC et ON).
- Langue principale du site : **anglais**. Le français est servi en paramètre `?lang=fr` (p. ex. `/maladies/rage/?lang=fr`), pas en sous-répertoire.
- robots.txt : bloque `/wp-admin/`, `/directives/` et une ordonnance collective PDF. Pas de ligne `Sitemap:`.

### 2.2 Inventaire (sitemaps Yoast, 10 nov. 2026)

| Sitemap | URLs |
|---|---|
| page-sitemap.xml + page-sitemap2.xml | 882 (443 EN / 439 FR) |
| post-sitemap.xml (blogue) | 146 |
| post_tag-sitemap.xml | 140 (pages d'étiquettes indexables, du contenu mince) |
| category-sitemap.xml | 11 |
| author-sitemap.xml | présent |

**Pages par type et gabarit d'URL :**

| Type | EN : gabarit et nombre | FR : gabarit et nombre | Exemples |
|---|---|---|---|
| Pays / destinations | `/countries/traveling-to-{pays}/` : 259, dont 7 pages de continent (`/countries/af/`, `/asia/`…) | `/pays/voyager-{au/en/a}-{pays}/?lang=fr` : 260 | `/countries/traveling-to-thailand/`, `/pays/voyager-au-kenya/?lang=fr` |
| Doublons pays | `/countries-2/…` (3), `/traveling-to-chad-2/`, plus des pages pays à la racine (`/traveling-to-turkey/`, `/voyager-en-perou/`) | idem | `/countries-2/traveling-to-sudan/` |
| Alertes pays | `/alerts/traveling-to-{pays}/` : 22 | `/alertes/voyager-en-{pays}/?lang=fr` : 15 | `/alertes/voyager-en-mexique/?lang=fr` a pour **canonical** `/pays/voyager-au-mexique/` (doublon assumé) |
| Sécurité pays | `/security/` : 2 | `/securite/voyager-en-{pays}/?lang=fr` : 22 | `/securite/voyager-en-inde/?lang=fr` (texte repris d'Affaires mondiales Canada, 2020) |
| Vaccins et maladies (mélangés) | `/travel-vaccines/{maladie}/` : 44 | `/maladies/{maladie}/?lang=fr` : 42 | `/travel-vaccines/rabies/`, `/maladies/rage/?lang=fr`, `/maladies/fievre-jaune/?lang=fr` |
| Maladies de voyage (non vaccinables) | `/travel-illness/{x}/` : 9 (malaria, dengue, zika, lyme, altitude…) | dispersées à la racine : `/paludisme-malaria/`, `/dengue/`, `/zika/`, `/lyme/`, `/turista-diarrhee-voyageur/` | |
| Médicaments | `/drugs/{x}/` : 10 | `/medicaments/{x}/?lang=fr` : 10 | Malarone, doxycycline, azithromycine, acétazolamide… |
| Cliniques | `/clinics/{ville}/` : 28 | `/cliniques/{ville}/?lang=fr` : 26 | `/cliniques/laval-qc/?lang=fr`, `/cliniques/clinique-du-voyageur-longueuil-qc/?lang=fr` |
| Services | `/services/{x}/` : ~14 | `/services/{x}/?lang=fr` : ~14 | grippe, zona, VPH, VRS, prises de sang, entreprise, consultation virtuelle |
| B2B | `/travel-clinic-for-{schools, pharmacies, travel-agents, NPO, film}/` | équivalents FR | |
| Blogue | `/blog/`, articles à la racine | `/blogue/?lang=fr` | `/grossesse-et-voyage/`, `/penurie-vaccin-fievre-jaune-canada/` |
| Divers | FAQ, tuberculose, certificats de visa, DIN, boutique, carrières, conditions d'utilisation de l'appli | | |

**Fraîcheur (lastmod des sitemaps) :** sur 882 pages, 189 datent de 2020, **471 de 2021**, 51 de 2022, 51 de 2023, 22 de 2024, 34 de 2025 et 64 de 2026. Les pages **pays** sont presque toutes de 2021 (204 sur 259 en EN, 233 sur 260 en FR), comme les pages **maladies FR** (34 sur 42 en 2020). Seules les fiches cliniques ont été mises à jour récemment (16 en 2026).

### 2.3 Profondeur du contenu (pages d'exemple)

| Page | Mots (approx.) | Structure Hn | Sources citées | Date (JSON-LD) | FAQ | Observations |
|---|---|---|---|---|---|---|
| `/maladies/rage/?lang=fr` | ~620 (gabarit compris), soit ~350 à 400 de contenu | H1 « TRANSMISSION, SYMPTÔMES ET PRÉVENTION – RAGE » + 3 H2 (Qu'est-ce que…, Qui est à risque, Prévenir) | Aucune (lien vers summittravelhealth.com seulement) | publiée le 2020-02-24, modifiée le **2020-03-11** | Non | **Erreur factuelle grave** : « Les pays à risque sont les États-Unis, l'Europe, le Japon, le Canada et l'Australie » (contresens de traduction). Texte générique, aucune info sur le schéma pré/post-exposition, le prix ou la RAMQ. |
| `/travel-vaccines/rabies/` (EN) | ~570 | H1 + 4 H2, dont un H2 vide | Aucune | modifiée le 2021-10-06 | Non | Structure plus utile (« What to do if bitten ») que la version FR. FR et EN ne sont pas équivalentes. |
| `/maladies/fievre-jaune/?lang=fr` | ~560 | H1 + 3 H2 | Liens vers phac-aspc.gc.ca et who.int | modifiée le 2025-09-22 | Non | Meta description de plus de 400 caractères (tronquée). Mentionne « Centre de la fièvre jaune désigné au Québec ». |
| `/maladies/encephalite-japonaise/?lang=fr` | ~600 | même gabarit | Aucune | 2022-10-25 | Non | |
| `/paludisme-malaria/?lang=fr` | ~460 | H1 + 4 H2 | Aucune | 2015-07-16, mis à jour 2023-11-02 (type Article) | Non | URL à la racine, hors silo `/maladies/`. |
| `/pays/voyager-au-kenya/?lang=fr` | **~2 700** | H1 + ~15 H2 (vaccins, conseils, médicaments, soins, sécurité, urgences, maladies alimentaires et hydriques, insectes, paludisme, animaux, IST, établissements, à retenir) | **Lien vers l'INSPQ** (inspq.qc.ca/sante-voyage/guide/pays) + OMS ; recommandations attribuées au « gouvernement du Canada et aux CDC » | modifiée le **2021-06-01** | **Oui, FAQPage en JSON-LD** | H2 dynamique « …POUR LE KENYA **En 2026** ? » alors que le contenu date de 2021 : fausse fraîcheur. Longue intro touristique. Liste de vaccins incohérente (« Diarrhée du voyageur » listée comme vaccin, COVID-19). Prix intégrés (70 $ consultation, 55 $ en groupe ou pour étudiant, 20 $ le rappel). |
| `/pays/voyager-en-thailande/?lang=fr` | ~3 000 | ~15 H2, avec coquilles (« ÉCURITÉ À L'ÉTRANGER », « MÉDICAMENTS RECOMMANDÉS POUR VOYAGER AU ») | INSPQ + OMS | 2023-11-09 | Mot-clé FAQ présent, mais pas de FAQPage | Le H3 « ou appelez au (438) 266-0855 » sert de titre. |
| `/countries/traveling-to-thailand/` (EN) | ~1 000 | 6 H2 | OMS | 2026-09-23 | Non | La version EN est 3 fois plus courte que la FR : les deux langues ne sont pas alignées. |
| `/countries/traveling-to-bouvet-island/` | ~360 (gabarit) | | | 2020-03-05 | | **Page mince** pour une île inhabitée : signe d'un gabarit généré pour tous les codes ISO. |
| `/pays/voyager-au-perou/?lang=fr` | ~2 800 | gabarit pays | INSPQ + OMS | 2024-05-15 | FAQPage | |
| `/alertes/voyager-en-mexique/?lang=fr` | ~2 900 | gabarit pays + « Alertes concernant ce pays » | | 2023-03-30 | FAQPage | Canonical vers `/pays/voyager-au-mexique/` |
| `/medicaments/malarone/?lang=fr` | ~520 | **2 H1** (« Malarone » et « MALARONE ») + 6 H2 | Aucune | 2020-03-19 | Non | |
| `/cliniques/laval-qc/?lang=fr` | ~1 130 | H1 « CLINIQUE DU VOYAGEUR LAVAL QC » + H2 (consultations, itinéraire, commentaires) | — | 2026-09-23 | Non | Adresse, carte Google, avis (copiés en texte, p. ex. « Laurence F. »), quartiers cités (Chomedey, Duvernay, Vimont, Pont-Viau…) pour le référencement local, encart tuberculose en anglais sur la page FR, prix 70 $ / 55 $ / 20 $. |
| `/penurie-vaccin-fievre-jaune-canada/?lang=fr` | ~150 | H1 seul | — | 2016, modifiée 2021 | | Article périmé toujours indexé ; coquille dans le title (« Clinqiue »). |
| `/faq/?lang=fr` | ~1 140 | 3 H2 par thème | canada.ca | 2026-09-23 | **FAQPage** | |

**Maillage interne :** les pages pays renvoient vers les pages maladies et vaccins (liens dans la liste « vaccins recommandés ») et vers la prise de rendez-vous. Les pages maladies sont des culs-de-sac : pas de lien vers les pays concernés ni vers les cliniques. L'accueil met en avant trois pays : Thaïlande, République dominicaine, Mexique.

**CTA :** bouton « Prendre RDV » dans l'en-tête, « Planifier un rendez-vous ou appelez au (438) 266-0855 » en haut des pages pays, bandeau de pied « Prendre Rendez-Vous : 1-888-224-8809 », infolettre (Brevo / Ascent), widget de clavardage (ascent.summithealth.ca).

### 2.4 SEO technique

| Élément | Constat |
|---|---|
| `<title>` | Gabarits incohérents : FR maladies « {Maladie} : Causes, symptômes, traitement I Clinique Vaccination Voyage à Montréal et les environs » (barre « I » au lieu de « \| », trop long) ; FR pays « Santé et vaccination au {pays} \| Conseils aux voyageurs » (pas de marque ni de ville) ; EN pays « Travel Health & Vaccines for {Country}\| Advice for Travellers » ; EN maladies « … - Montreal & Toronto Travel & Vaccination Clinics » ; titre de l'accueil FR de plus de 100 caractères. |
| Meta description | Présente partout, souvent la première phrase du texte ; parfois plus de 400 caractères (fièvre jaune) ; doublon title et meta sur certains articles. |
| H1 | En majuscules et non optimisé (« LA FIÈVRE JAUNE », « CONSEILS DE SÉCURITÉ ») ; 2 H1 sur les pages médicaments ; H1 littéral « {title} » sur la page de prise de rendez-vous (bogue de gabarit). |
| **hreflang** | **Absent dans `<head>`** sur toutes les pages testées (16 sur 16) et absent des en-têtes HTTP. Les seuls attributs `hreflang` sont sur les liens du sélecteur de langue WPML, ce qui ne compte pas comme annotation. Nuance (vérifiée le 10 nov. 2026) : le sitemap Yoast déclare des alternates `xhtml:link hreflang`, ce qui relie FR et EN pour Google par cette voie seulement. |
| Canonical | Autoréférent, avec `?lang=fr` inclus. Les pages alertes ont pour canonical la page pays. Sur l'accueil FR, le lien de langue contient un `gclid` (paramètre de suivi Google Ads qui a fuité dans le HTML). |
| `<html lang>` | en-US / fr-FR (fr-FR au lieu de fr-CA). |
| JSON-LD (Yoast) | Partout : WebPage, WebSite (+ SearchAction), Organization, BreadcrumbList, ImageObject. **MedicalClinic + PostalAddress** sur les fiches cliniques. **FAQPage** sur certaines pages pays (Kenya, Pérou, Mexique) et la FAQ. **Article + Person** sur les articles. **Aucun** MedicalWebPage, MedicalCondition, Drug, LocalBusiness / openingHours, AggregateRating ni `reviewedBy` / `lastReviewed`. |
| Open Graph | Présent (Yoast) ; og:locale en_US même sur certaines pages FR (à confirmer page par page). |
| Indexation de pages pauvres | 140 pages d'étiquettes et 11 catégories dans le sitemap, pages « -2 » en doublon, `/nous-joindre-old/`, conditions d'utilisation de l'appli, `/maladies/r/`, etc. |
| Performance et pistage | WP Rocket ; nombreux scripts tiers (GTM, GA, Clarity, Bing, Facebook, LinkedIn, WonderPush, Brevo/Sendinblue). Core Web Vitals non mesurés (non vérifié). |
| Bogue | La page de rendez-vous contient en production la chaîne `http://localhost:4010/dev/v2` (configuration de développement exposée). |

### 2.5 Conversion et UX
- **Prise de rendez-vous :** module maison sur `/rendez-vous/` (API `api.ascentemr.com`, le DME Ascent de Summit Health), choix de clinique, patients multiples avec date de naissance, et un portail patient Salesforce (`summithealthclinics.my.site.com`). Pas de fournisseur tiers comme ClicSanté ou Jane. Le module est rendu en JavaScript : la page a ~2 mots indexables et un H1 « {title} ».
- **Prix affichés, mais incohérents :** l'accueil FR annonce « Frais de consultation : 20 $ » (voyage) et 25 $ (hors voyage), alors que les fiches Laval et pays annoncent 70 $ la consultation individuelle, 55 $ par personne en groupe de 2 à 6 ou pour étudiant, et 20 $ le rappel. Le prix des vaccins n'est pas affiché.
- **Téléphone :** numéro central 1-888-224-8809, et (438) 266-0855 sur les pages FR.
- **Emplacements :** 14 fiches Québec et 13 Ontario, avec adresse, carte et itinéraire. **Horaires non trouvés** dans le HTML des fiches testées (non vérifié s'ils sont chargés en JS).
- **Signaux de confiance :** « Centre de vaccination contre la fièvre jaune désigné », témoignages en texte (prénom et initiale), lien « avis Google », « Dans les médias ». **Aucune équipe nommée, aucun médecin ni infirmière identifiés, aucune révision médicale**, aucune note agrégée en schema.
- **Langues :** FR et EN complets ; mais le français est secondaire (paramètre d'URL, `fr-FR`, encarts en anglais sur des pages FR, traduction approximative).
- **Autres :** consultation virtuelle, services entreprise et B2B, boutique, appli mobile Summit Health.

---

## 3. Autres concurrents (passage rapide)

### 3.1 Passport Health Canada (passporthealthglobal.com)
- **Emplacements QC :** Centre-ville, Westmount, Pointe-Claire, Laval (Carrefour Laval), Québec. Tous se disent centres fièvre jaune désignés.
- **Inventaire :** 261 pages pays par marché (`/fr-ca/conseils-destination/{pays}/`, `/ca/destination-advice/{country}/`, `/en-gb/…`), 24 pages vaccins FR (`/fr-ca/vaccinations/{vaccin}/` : fièvre jaune, rage, encéphalite japonaise, typhoïde, choléra, dengue, Vivaxim, hépatites…), 57 fiches cliniques par langue, ~89 articles de blogue FR et ~900 EN (majoritairement américains, 2016-2024).
- **Page pays (Pérou FR) :** ~2 700 mots ; H2 en questions (« Ai-je besoin de vaccins pour le Pérou ? », visa, climat, sécurité, trekking, quoi emporter, ambassade) ; tableau des vaccins (maladie, mode de transmission, détail) ; détail régional de la fièvre jaune ; sources ASPC, OMS, ISTM, voyage.gc.ca. **Pas d'INSPQ**, aucune date, aucun JSON-LD.
- **Page vaccin (fièvre jaune FR) :** ~1 600 mots, H2 en questions, exigences par pays, avis clients.
- **Fiche Laval :** microdata MedicalClinic, GeoCoordinates, **OfferCatalog avec 21 Service/Offer** ; itinéraire en transport en commun ; ★★★★★ ; bogue « en appelant au . » (téléphone manquant) ; des recherches montrent des numéros contradictoires (450-232-0606, 438-815-3589, un 418).
- **SEO :** hreflang complet (en-us, en-ca, fr-ca, en-gb, x-default) ; canonical propre ; titles « Vaccins et conseils aux voyageurs pour le {pays} | Passport Health ».
- **Faiblesses :** contenu traduit et américanisé, pas de cadre québécois (RAMQ, INSPQ, PIQ), pas de prix, pas de date de révision, pas d'auteurs.

### 3.2 Jean Coutu, santé-voyage (jeancoutu.com)
- Deux parcours : « Destination soleil » (Mexique, République dominicaine, Cuba, Caraïbes) et « Autres destinations ». Infirmière en succursale (pharmaciens propriétaires affiliés). Prise de rendez-vous intégrée (`/sante/services/rendez-vous/`).
- Une seule page d'environ 300 mots, hreflang fr/fr-ca/en/en-ca, pas de JSON-LD, aucune page vaccin, maladie ou pays.
- Menace : notoriété de marque et proximité, surtout sur le segment « destination soleil » bon marché. Familiprix, Uniprix et Pharmaprix ont des offres comparables (non vérifié en détail).

### 3.3 Clinique Vaccination Rive-Sud (cliniquevaccinationrivesud.com)
- Longueuil, La Prairie, St-Jean-sur-Richelieu, Varennes. Centre fièvre jaune désigné (Longueuil). Clinique infirmière : vaccins, prises de sang, lavage d'oreilles.
- 22 pages au total : `/vaccination-voyage-2/`, `/tous-nos-vaccins/`, 4 fiches de succursale, FAQ, « aide-mémoire bagages ». **Aucune page vaccin, maladie ni pays.** FR seulement. JSON-LD limité à Organization, ContactPoint et WebSite. Deux H1 sur l'accueil.
- Concurrent local direct de GSV Longueuil, mais très faible en SEO de contenu.

### 3.4 Centre J.D. MacLean, clinique pré-voyage McGill (mcgill.ca/tropmed)
- Site Glen du CUSM ; ~50 $ la visite (35 $ avec une carte McGill) selon les résultats de recherche ; non couvert par la RAMQ. Site bloqué aux robots (403), **non vérifié**. Autorité forte, mais aucune stratégie SEO commerciale.

### 3.5 Cliniques locales désignées fièvre jaune
- Laval : **Groupe Santé Express** (148-4 Place Laval, 450-668-7400). Blainville : **Clinique Médicym** (876 boul. du Curé-Labelle), et une clinique LeBlanc + Savaria annoncée dans un annuaire. Montréal : **Clinique Provision** (5428 av. Victoria), Clinique Médicale Diamant (Côte-des-Neiges), Telus Santé (de Maisonneuve O.).
- Présence surtout via la liste canada.ca et des annuaires (Cortico, Doctr, MapQuest). Pas de contenu éditorial trouvé. Ces cliniques jouent sur le pack local Google Maps, pas sur l'organique.

---

## 4. Matrice de comparaison fonctionnelle et SEO

| Critère | cliniquevoyageur.ca | Passport Health | Jean Coutu | CVRS | McGill | GSV : cible |
|---|---|---|---|---|---|---|
| Pages vaccin dédiées | Oui (~44, mélangées aux maladies) | Oui (24) | Non | Non | n.v. | **Oui, 1 par vaccin (56 déjà gabaritées)** |
| Pages maladie dédiées | Partiel (mélangées, silos dispersés) | Non (fusionnées avec les vaccins) | Non | Non | n.v. | **Oui, silo distinct, avec liens maladie ↔ vaccin** |
| Pages pays | ~250 par langue (2021, gabarit) | 261 par langue (sans date) | Non | Non | n.v. | **Oui, toutes, fondées sur l'INSPQ, datées** |
| Source INSPQ citée | Pages pays seulement (lien générique) | Jamais | Non | Non | n.v. | **Systématique, avec lien profond et date de consultation** |
| Date de mise à jour visible | Non (dateModified en JSON-LD seulement, souvent 2020-2021) | Non | Non | Non | n.v. | **Oui : « Révisé le … par … »** |
| Révision médicale nommée | Non | Non | Non | Non | n.v. | **Oui (infirmière ou médecin)** |
| FAQ + FAQPage | Certains pays + FAQ globale | Non | Non | Page FAQ | n.v. | **Sur chaque page vaccin, maladie et pays** |
| hreflang FR/EN | **Absent** | Complet | Complet | n/a (FR seulement) | n.v. | **Complet, fr-CA par défaut** |
| Structure d'URL FR | `?lang=fr` (paramètre) | `/fr-ca/` | `/` (FR par défaut) | `/` | — | **FR à la racine, `/en/` en sous-dossier** |
| MedicalClinic / LocalBusiness | Oui (JSON-LD, sans horaires) | Oui (microdata + Offer) | Non | Non | n.v. | **Oui, avec horaires, géo, prix (Offer), AggregateRating** |
| MedicalWebPage / MedicalCondition / Drug | Non | Non | Non | Non | n.v. | **Oui** |
| Prix affichés | Oui, mais incohérents (20 $ vs 70 $) | Non | Non | n.v. | 50 $ (via recherche) | **Oui, cohérents, par vaccin** |
| Réservation en ligne | Module maison (Ascent) | « Réservez maintenant » | Module Jean Coutu | Oui (non vérifié) | Téléphone | **Oui, en 1 clic depuis chaque page** |
| Avis clients | Témoignages en texte | Étoiles + avis | Non | n.v. | Non | **Avis Google intégrés + schema** |
| Fiches cliniques locales | 14 QC (Laval, Longueuil, Sainte-Thérèse…) | 5 QC (Laval) | Succursales | 4 | 1 | **4 fiches riches + pages de quartier** |
| Fraîcheur du contenu | Faible (68 % de lastmod en 2020-2021) | Inconnue | n/a | n/a | n/a | **Révision annuelle sur le calendrier INSPQ** |
| Qualité du français | Moyenne à faible (traductions, coquilles, contresens) | Moyenne (traduit) | Bonne | Bonne | n.v. | **Rédigé en français québécois natif** |

(n.v. = non vérifié ; n/a = sans objet)

---

## 5. Opportunités pour Groupe Santé Voyage

### Contenu
1. **Seul site « INSPQ-first » du marché.** Aucun concurrent ne s'appuie sur l'INSPQ comme source principale (Passport Health ne le cite jamais ; Clinique du Voyageur seulement en lien générique sur les pages pays). Citer l'INSPQ page par page, avec lien profond (p. ex. `/sante-voyage/guide/immunisation/…`) et date de consultation, est un avantage E-E-A-T immédiat pour le YMYL santé.
2. **Fraîcheur réelle contre fausse fraîcheur.** Les pages pays du concurrent affichent « en 2026 » dans le H2 alors que le contenu date de 2021. Afficher « Révisé le JJ/MM/AAAA par [nom, titre] » + `dateModified` + `lastReviewed` / `reviewedBy` dans MedicalWebPage, et tenir un cycle de révision documenté.
3. **Exactitude médicale comme argument.** Le concurrent a des erreurs visibles (rage : « pays à risque : États-Unis, Europe, Japon, Canada, Australie » ; « Diarrhée du voyageur » listée comme vaccin ; COVID-19 obligatoire). Des pages vérifiées et sourcées peuvent prendre ces requêtes.
4. **Silo maladie distinct du silo vaccin, avec maillage bidirectionnel.** Concurrent : pages mélangées et culs-de-sac. Passport Health : pas de pages maladies. Proposer maladie → vaccin(s) → pays à risque → clinique la plus proche, et l'inverse.
5. **Pages pays réellement utiles plutôt que gabarits.** Mettre l'information de décision en premier (tableau des vaccins selon le profil du voyageur, statut obligatoire ou recommandé pour la fièvre jaune et le paludisme par région, délai avant départ) plutôt que 300 mots de brochure touristique. Ne pas créer de pages pour des territoires inhabités (Bouvet, Terres australes) ou les mettre en noindex.
6. **Angle québécois que personne ne couvre** : couverture RAMQ ou non, vaccins gratuits du PIQ (DCaT, ROR, hépatite B selon l'âge), carte jaune, pénuries, consultation sans ordonnance, crédit d'impôt et assurances. Les sites de France (Pasteur, Routard, Tourdumondiste) occupent les SERP FR mais ne parlent pas du Québec.
7. **Pages de requêtes transactionnelles** : « prix vaccin fièvre jaune », « prix vaccin rage », « vaccin [maladie] [ville] ». Le concurrent n'affiche pas le prix des vaccins ; Passport Health n'affiche aucun prix.
8. **FAQ structurée (FAQPage) sur chaque page vaccin, maladie et pays** : le concurrent ne l'a que sur une partie des pages pays.

### SEO technique
9. **hreflang complet fr-CA ↔ en-CA + x-default.** C'est la faiblesse la plus nette de cliniquevoyageur.ca (aucun hreflang, FR en `?lang=fr`). Mettre le FR à la racine (ou `/fr/`) et l'EN dans `/en/`, `<html lang="fr-CA">`, avec canonical et hreflang réciproques.
10. **Schémas médicaux riches** : MedicalWebPage (+ `about` MedicalCondition), MedicalCondition, Drug ou Vaccine, MedicalClinic avec `openingHoursSpecification`, `geo`, `priceRange` / Offer, `aggregateRating` (avis Google réels), BreadcrumbList, FAQPage, Person ou Physician pour les réviseurs. Aucun concurrent n'utilise MedicalWebPage ni MedicalCondition.
11. **Hygiène d'indexation** : pas de pages d'étiquettes dans le sitemap, pas de doublons « -2 », un seul H1 par page, titles normalisés (« Vaccin contre la rage : prix, doses, délai | Groupe Santé Voyage Laval, Montréal »), metas de 150 à 160 caractères.
12. **Page de rendez-vous indexable et rapide** : le module du concurrent est 100 % JS (H1 « {title} », ~2 mots). Rendre en HTML les informations clés (cliniques, horaires, prix, ce qu'il faut apporter) et garder le module en surcouche.

### UX et conversion
13. **Prix transparents et cohérents** : grille unique (consultation, chaque vaccin, rappel, groupe ou famille) reprise partout. Le concurrent se contredit (20 $ vs 70 $).
14. **CTA contextuel** sur chaque page : « Ce vaccin est en stock à Laval, Outremont, Longueuil et Blainville : prendre rendez-vous ». Prochaine disponibilité si le système le permet.
15. **Visages et accréditations** : infirmières et médecins nommés, adhésion à la Société canadienne de médecine tropicale et de santé des voyageurs (CATMAT/CSTMTM) ou à l'ISTM si applicable, mention « Centre de vaccination contre la fièvre jaune désigné par l'ASPC » avec lien vers la liste canada.ca (à vérifier pour chaque clinique GSV).

### Référencement local
16. **Fiches cliniques riches pour les 4 emplacements** : adresse, horaires, stationnement, transport en commun (STM, STL, RTL, exo), photos, carte, avis, services et vaccins en stock, quartiers desservis (le concurrent cite Chomedey, Duvernay, Vimont, Pont-Viau pour Laval). Blainville et Outremont sont peu couverts : Clinique du Voyageur n'a ni fiche Blainville (seulement Sainte-Thérèse et St-Jérôme) ni fiche Outremont (Plateau, Rosemont, Westmount), et Passport Health n'a aucune clinique sur la Rive-Nord ni la Rive-Sud.
17. **Cohérence NAP** : nettoyer les fiches d'annuaires (Cortico « Clinique Santé Voyage MV » avec une adresse à Chicoutimi, à vérifier), Google Business Profile, canada.ca (liste fièvre jaune), Doctr, Pages Jaunes.
18. **Pages « ville + service »** limitées et utiles (p. ex. « Vaccin fièvre jaune Laval », « Clinique santé-voyage Rive-Sud / Longueuil », « Clinique voyage Rive-Nord / Blainville ») plutôt que des pages vides par ville.

---

## 6. Sources

**cliniquevoyageur.ca**
- https://cliniquevoyageur.ca/robots.txt
- https://cliniquevoyageur.ca/sitemap_index.xml (+ post-sitemap.xml, page-sitemap.xml, page-sitemap2.xml, category-sitemap.xml, post_tag-sitemap.xml)
- https://cliniquevoyageur.ca/ et https://cliniquevoyageur.ca/?lang=fr
- https://cliniquevoyageur.ca/maladies/rage/?lang=fr
- https://cliniquevoyageur.ca/travel-vaccines/rabies/
- https://cliniquevoyageur.ca/maladies/fievre-jaune/?lang=fr
- https://cliniquevoyageur.ca/maladies/encephalite-japonaise/?lang=fr
- https://cliniquevoyageur.ca/paludisme-malaria/?lang=fr
- https://cliniquevoyageur.ca/pays/voyager-au-kenya/?lang=fr
- https://cliniquevoyageur.ca/pays/voyager-en-thailande/?lang=fr
- https://cliniquevoyageur.ca/pays/voyager-au-perou/?lang=fr
- https://cliniquevoyageur.ca/countries/traveling-to-thailand/
- https://cliniquevoyageur.ca/countries/traveling-to-bouvet-island/
- https://cliniquevoyageur.ca/alertes/voyager-en-mexique/?lang=fr
- https://cliniquevoyageur.ca/securite/voyager-en-inde/?lang=fr
- https://cliniquevoyageur.ca/medicaments/malarone/?lang=fr
- https://cliniquevoyageur.ca/cliniques/laval-qc/?lang=fr
- https://cliniquevoyageur.ca/penurie-vaccin-fievre-jaune-canada/?lang=fr
- https://cliniquevoyageur.ca/rendez-vous/?lang=fr
- https://cliniquevoyageur.ca/faq/?lang=fr

**Passport Health**
- https://www.passporthealthglobal.com/robots.txt, /sitemap.xml, /page-sitemap.xml, /page-sitemap2.xml, /post-sitemap.xml
- https://www.passporthealthglobal.com/fr-ca/conseils-destination/perou/
- https://www.passporthealthglobal.com/fr-ca/vaccinations/fievre-jaune/
- https://www.passporthealthglobal.com/fr-ca/locations/qc/clinique-sante-laval/
- https://www.passporthealthglobal.com/fr-ca/locations/qc/quebec
- https://www.passporthealthglobal.com/ca/locations/qc/downtown-montreal-clinic

**Autres concurrents**
- https://www.jeancoutu.com/sante/services/sante-voyage/
- https://www.jeancoutu.com/en/health/services/travel-health
- https://cliniquevaccinationrivesud.com/ (+ robots.txt, page-sitemap1.xml)
- https://www.mcgill.ca/tropmed/pre-travel-clinic (403, non analysé)
- https://elnamedical.com/en/clinique-privee/ (via recherche)
- https://cortico.health/clinics/laval-qc/groupe-santé-express-7383
- https://cortico.health/clinics/laval-qc/passport-health-laval-clinique-santé-voyage-7378
- https://cortico.health/clinics/saguenay-qc/clinique-sante-voyage-mv-7549/
- https://cortico.health/clinics/montr%C3%A9al-qc/clinique-du-voyageur-par-summit-health-montr%C3%A9al-centre-ville-7289
- https://www.doctr.ca/app/clinics/119352/CLINIQUE-MEDICALE-ET-SANTE-VOYAGE-PROVISION

**Références officielles et SERP**
- https://www.canada.ca/fr/sante-publique/services/sante-voyageurs/fievre-jaune/centres-vaccination-canada-quebec
- https://www.inspq.qc.ca/sante-voyage/guide-des-bonnes-pratiques-en-sante-des-voyageurs
- https://www.inspq.qc.ca/sante-voyage/guide/immunisation/encephalite-japonaise
- https://voyage.gc.ca/fr/voyager/agents-de-voyage/voyager-vaccinations
- https://www.santemonteregie.qc.ca/sites/default/files/2025/04/prix-clinique-sante-voyage.pdf
- https://www.pasteur.fr/fr/centre-medical/preparer-son-voyage/perou ; https://www.tourdumondiste.com/vaccins-et-paludisme-mexique (exemples de concurrents informationnels FR)
