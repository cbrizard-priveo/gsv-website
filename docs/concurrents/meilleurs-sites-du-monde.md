# Les meilleurs sites santé-voyage du monde : inspiration pour Groupe Santé Voyage

Vérifié le 2026-11-13. Seuls les faits vus sur les sites ou dans les résultats de recherche sont notés. « Non vérifié » signale ce que je n'ai pas pu confirmer.
Ce document complète `docs/analyse-concurrentielle.md`, qui portait sur le Québec et le SEO. Ici, on cherche des modèles de fonctionnalités et de contenu.

## 1. Tableau récapitulatif

| Site | Pays / type | Points forts | Points faibles |
|---|---|---|---|
| Passport Health (passporthealthusa.com) | É.-U. / chaîne (300+ cliniques en Amérique du Nord, y compris au Canada) | Pages destination signées (rédacteur, médecin réviseur, date), avis par page, réservation qui commence par le motif de visite, appli | Aucun prix affiché |
| Superdrug Health Clinics (healthclinics.superdrug.com) | R.-U. / chaîne de pharmacies | Grille de prix complète : par dose, doses par cours, prix du cours, enfants à part, règles des frais de consultation | Page brute, pas d'outil de destination sur la page vue |
| Boots (boots.com/travelhealth) | R.-U. / chaîne de pharmacies | Parcours en 3 étapes, durée de la consultation affichée (40 min), grille de prix, « Quick Check Tool » par destination, FAQ, alerte d'actualité datée | Site lourd, filtre anti-robot, l'outil demande du JavaScript |
| MASTA / Nomad Travel (masta.com, nomadtravel.co.uk) | R.-U. / chaîne (Nomad a racheté MASTA) | Vérificateur de vaccins, « Travel Health Brief » personnalisé et téléchargeable, compte patient avec suivi des vaccins, note Trustpilot affichée, boutique de trousses | Prix des vaccins dans un PDF ou une page à part, pas de dates sur le contenu |
| CDC Travelers' Health (wwwnc.cdc.gov/travel) | É.-U. / public | Fiche pays de référence : vue voyageur et vue clinicien, avis de santé par niveau, paludisme structuré, « Page last reviewed », liste de bagages, section « après le voyage » | Long, pas de personnalisation, pas de réservation |
| TravelHealthPro (NaTHNaC, travelhealthpro.org.uk) | R.-U. / public (UKHSA) | Vaccins classés « tous / la plupart / certains voyageurs » avec critères, onglet éclosions, export PDF, flux RSS | Pas de date de mise à jour sur la fiche vue, conçu pour les professionnels |
| Fit for Travel (NHS Scotland) | R.-U. / public | Ancienne référence grand public | **Retiré** : UKHSA écrit que « The NHS TRAVAX website, including FitforTravel, has been retired » (page mise à jour le 31 juillet 2026). Le certificat TLS du site a expiré |
| Institut Pasteur, centre médical (pasteur.fr) | France / fondation, CVI | Dates « Publié le / Mis à jour le », conseils par destination, réservation Doctolib | Pas de tarifs sur la page vue |
| Elsan, CVI Paris République (elsan.care) | France / groupe de cliniques, CVI | Page tarifs exemplaire : consultation solo, duo ou groupe, prix par injection, certificats, non-remboursement indiqué, date des prix | Pas de questionnaire en ligne vu |
| MesVaccins.net (SYADEM) | France / service d'intérêt public | Carnet de vaccination électronique, rappels, partage avec les soignants, outil Mentor | Actif selon une copie en cache (non vérifié en direct) |
| The Travel Doctor-TMVC (traveldoctor.com.au) | Australie / réseau | Couvre beaucoup de profils de voyageurs (aventure, entreprise, famille, groupe, étudiant) | **Site très pauvre** : « Book appointment » mène à une liste de cliniques avec téléphone et courriel. Aucun outil, aucun prix. À ne pas imiter |

## 2. Fiches

### Passport Health (É.-U.)
- Plus de 100 pages « Destination Advice ». La page Brésil contient : un sommaire « On This Page », deux tableaux (vaccins de voyage et vaccins de routine) en trois colonnes (vaccin, mode de transmission, détails), puis la fièvre jaune par région, le paludisme, les autres risques et les éclosions en cours (rougeole, Oropouche).
- **Bloc de crédibilité** : rédacteur nommé, médecin réviseur nommé (MD), « last updated » au 11 nov. 2026, encadré « History » des versions. Sources citées : CDC, OMS, ISTM.
- **Avis sur la page destination elle-même** : 4,9 étoiles sur 15 avis, en carrousel.
- **Réservation** : la première étape demande le motif (consultation ou vaccins, **« Follow-up or Booster Shot »**, examen d'immigration), puis le lieu et le **nombre de personnes** (1 à 5+). Le message promet des rendez-vous le jour même ou le lendemain dans la plupart des cliniques.
- L'appli Passport Health est mise en avant pour les dossiers et les formulaires d'admission (« intake forms »). Une page « Records Requests » existe. Le détail de l'appli n'est pas vérifié (page 404).
- Aucun prix public.

### Superdrug Health Clinics (R.-U.)
- **Transparence de prix de référence** : une fiche par vaccin avec trois chiffres, le prix par dose, le nombre de doses et le prix du cours complet. Exemple : rage, 82 £ × 3 = 246 £.
- Prix pédiatriques à part. Médicaments (antipaludiques, diarrhée du voyageur) au comprimé ou à la boîte.
- **Règle des frais de consultation expliquée en clair** : 20 £, facturés seulement si rien n'est administré. Une seule facturation pour un groupe. Les exemptions sont listées.
- Réservation en ligne (système tiers) ou par téléphone, bouton répété six fois sur la page.

### Boots (R.-U.)
- Parcours expliqué en 3 étapes : réserver 6 à 8 semaines avant le départ, faire une évaluation des risques personnalisée de **40 minutes** avec un pharmacien, puis recevoir les vaccins et les conseils.
- Grille de prix en quatre colonnes (prix total, nombre de doses, prix par dose), avec le remplacement du certificat de fièvre jaune et le certificat d'exemption (20 £ chacun), et la mention « prix corrects à la date de publication ».
- « Quick Check Tool » par destination, plus des pages par destination populaire (Thaïlande, Inde, Bali, Hajj, Cap-Vert).
- Pages par profil de voyageur : grossesse, allaitement, enfants, aînés, croisière.
- **Bandeau d'actualité daté** : retrait d'un vaccin chikungunya en octobre 2026, avec la précision que celui de Boots n'est pas concerné. Le site répond donc à l'inquiétude du moment.
- Services connexes vendus : retard des règles, décalage horaire, mal d'altitude, otite du baigneur.
- Une citation de pharmacien nommé, et une FAQ.

### MASTA / Nomad Travel (R.-U.)
- Nomad a racheté MASTA (communiqué sur le blogue de Nomad).
- MASTA propose un **vérificateur de destination** (« country-level guide ») et un **vérificateur de vaccins** (services.masta.com/VaccineChecker).
- **Travel Health Brief** : un rapport personnalisé et téléchargeable. Selon les conditions de MASTA, il est gratuit (10 par mois) et lié à un questionnaire et à une réservation. Je n'ai pas vérifié en direct.
- Réservation : on choisit d'abord le type de rendez-vous (santé-voyage, santé au travail, bilan), puis on suit 3 étapes affichées.
- **Compte patient** : suivi des vaccinations, historique médical, commandes.
- Note Trustpilot de 4,5 affichée, section « Trusted by Our Patients ».
- Nomad : rendez-vous le jour même, consultation « Free Kit Outs », trousses médicales sur mesure, bulletin mensuel pour les professionnels de santé.
- Aucune date sur le contenu.

### CDC Travelers' Health (É.-U.)
- Deux vues par pays : **Traveler View** et **Clinician View**.
- **Avis de santé par niveau** (« Level 1 Practice Usual Precautions », etc.), datés.
- Pour chaque vaccin : une phrase de recommandation (« Recommended for unvaccinated travelers one year old or older »), les cas particuliers, puis un lien vers le Yellow Book.
- **Paludisme structuré** : zones de transmission, résistance, répartition des espèces (P. vivax 90 %, P. falciparum 10 %), prophylaxie recommandée, carte. Bloc daté.
- Maladies non évitables par la vaccination, regroupées par voie de transmission (eau et aliments, insectes, air).
- Neuf panneaux repliables « Stay Healthy and Safe ».
- Liste de bagages santé, section **« After Your Trip »** (fièvre au retour, finir les antipaludiques), lien « Find a Clinic ».
- « Page last reviewed: September 03, 2026. »

### TravelHealthPro / NaTHNaC (R.-U.)
- Fiche pays à onglets : informations générales, vaccins, paludisme, autres risques, actualités, éclosions.
- Vaccins en catégories : **tous les voyageurs, la plupart, certains**, plus les exigences de certificat (RSI). Chaque vaccin suit le même gabarit : maladie, risque dans le pays, prévention, qui devrait être vacciné.
- Fiches pratiques liées (eau et aliments, piqûres, sécurité, soleil), section « Outbreak Surveillance », **téléchargement PDF**, **flux RSS**.
- C'est désormais la référence britannique depuis le retrait de Fit for Travel.

### Fit for Travel (NHS Scotland)
- Retiré selon UKHSA (page mise à jour le 31 juillet 2026). Le site ne se charge plus : certificat expiré. Leçon : un site santé non entretenu perd sa confiance et son trafic. La fraîcheur est un atout concurrentiel.

### Institut Pasteur et CVI français
- Pasteur Paris : « Publié le 10 juillet 2026 / Mis à jour le 21 août 2026 », destinations mises en avant (Thaïlande, Vietnam, Sénégal), Doctolib ou téléphone. Pas de tarifs sur la page vue.
- **Elsan CVI Paris République** : page tarifs modèle. Consultation à 15 € seul, 20 € en duo, 30 € pour un groupe de 3 à 5. Gratuit pour les suivis de protocole. Prix par injection (fièvre jaune 84 €, typhoïde 62 €), certificats à 20 €, mention claire du non-remboursement, prix datés du 12 octobre 2026.
- Pasteur Lille : grille tarifaire en PDF daté (2026), rendez-vous par téléphone.

### MesVaccins.net (France)
- Carnet de vaccination électronique gratuit, date du prochain rappel, partage avec les soignants (CVN Pro), outil Mentor de recommandations (y compris pour un séjour à l'étranger).
- Éditeur SYADEM, avec le soutien d'une ARS. Se présente comme « sans financement de l'industrie pharmaceutique ».

### The Travel Doctor-TMVC (Australie)
- Page d'accueil minimale : six services, « Book appointment » qui renvoie à une liste par État avec l'adresse, le téléphone et le courriel.
- Aucun outil de destination, aucun prix, aucun contenu par pays sur les pages vues.
- Réputé dans le milieu, mais son site n'est pas un modèle.

## 3. Ce qu'ils font mieux que nous

Le nouveau site GSV a déjà 56 pages vaccins/maladies, 218 pays INSPQ, une carte, un planificateur et une FAQ. Voici ce que les meilleurs ont en plus :

1. **Prix publiés et lisibles** (Superdrug, Boots, Elsan) : prix par dose, nombre de doses, prix du cours, prix de la consultation et ses règles, certificats, date des prix.
2. **Crédibilité visible sur chaque page** (Passport Health, CDC, Pasteur) : réviseur médical nommé, date « révisé le », historique des versions.
3. **Le planificateur débouche sur un résultat personnalisé** (Travel Health Brief de MASTA, Quick Check de Boots), un document que le voyageur garde.
4. **Réservation qui commence par le motif**, avec **« dose de suivi / rappel »** et **nombre de voyageurs** (Passport Health), et tarif famille ou groupe (Elsan, Superdrug).
5. **Suivi après la visite** : compte patient avec historique (MASTA), carnet électronique et rappels (MesVaccins).
6. **Actualité datée** : avis par niveau (CDC), onglet éclosions (TravelHealthPro), bandeau sur un sujet chaud (Boots, chikungunya).
7. **Structure des fiches pays** : vaccins par catégorie de voyageurs, paludisme en champs structurés, section « après le voyage », liste de bagages, PDF imprimable.
8. **Avis patients affichés sur la page** (Passport Health par destination, MASTA via Trustpilot).
9. **Durée et déroulement de la consultation expliqués** (Boots : 3 étapes, 40 min).

## 4. Idées à reprendre (classées par impact et faisabilité pour une clinique québécoise)

1. **Page « Tarifs » complète et datée.** Consultation (seul, couple, famille, groupe), chaque vaccin (prix par dose × doses = prix du cours), certificat de fièvre jaune, télémédecine, frais d'annulation. Préciser ce que la RAMQ ne couvre pas et que les assurances privées remboursent souvent (à faire confirmer par la clinique), plus « prix en vigueur au [date] ». C'est rare au Québec et ça rassure énormément. *Les prix doivent venir de la clinique, jamais estimés.*
2. **Bloc « Révisé par » sur chaque page médicale.** Nom et titre de l'infirmière ou du médecin réviseur, date de dernière révision, source (INSPQ / Guide d'intervention santé-voyage), lien « historique ». Schema `MedicalWebPage` avec `lastReviewed` et `reviewedBy`. Faisable tout de suite. Il faut seulement que la clinique désigne le réviseur.
3. **Le planificateur produit une fiche « Mon voyage » imprimable ou en PDF.** Destination(s), date de départ, vaccins à discuter selon l'INSPQ, délai avant le départ, bouton « Réserver ». Même formule que MASTA et Boots, mais gratuite et sans compte. Toujours avec la mention « à confirmer en consultation ». Repose uniquement sur le contenu INSPQ déjà présent.
4. **Première étape de réservation par motif.** Première consultation, **dose de suivi ou rappel**, fièvre jaune seulement, télémédecine. Puis le nombre de voyageurs et la clinique. Les patients qui reviennent pour une 2e ou 3e dose (hépatite, rage, encéphalite japonaise) ont ainsi un chemin court.
5. **Rappels de doses suivantes.** Au minimum : à la fin de la visite, un fichier calendrier (.ics) ou un courriel ou SMS de rappel, si le système de rendez-vous le permet. Sur le site : une page « Vos prochaines doses » qui explique les calendriers. *Ne pas construire de dossier médical maison* (Loi 25, sécurité) : renvoyer au **Carnet santé Québec**, qui montre les vaccins inscrits au Registre de vaccination du Québec.
6. **Questionnaire pré-consultation en ligne**, envoyé avec la confirmation du rendez-vous (itinéraire, dates, santé, vaccins antérieurs, photo du carnet). Il raccourcit la visite. Il faut un outil conforme à la Loi 25 avec hébergement au Canada. C'est à décider avec le fournisseur de rendez-vous (formulaires en pause, voir mémoire « Forms on hold »).
7. **Section « Alertes santé-voyage » datée** sur l'accueil et sur les pages pays concernées (rougeole, dengue, chikungunya, Oropouche…). Sources : ASPC « Conseils de santé aux voyageurs » et INSPQ, avec la date. Courte, mise à jour mensuellement. Un bandeau comme celui de Boots quand un sujet fait la manchette.
8. **Enrichir le gabarit des pages pays** (avec le contenu INSPQ seulement) : vaccins classés « tous les voyageurs / selon l'activité ou le séjour », bloc paludisme structuré, section **« Au retour »** (fièvre au retour = consulter), liste de bagages santé, bouton « Imprimer / PDF ».
9. **Expliquer la consultation** : 3 étapes, durée, quoi apporter (carnet de vaccination, itinéraire, liste de médicaments), délai idéal de 6 à 8 semaines, et quoi faire en cas de départ imminent. Les durées et délais doivent être confirmés par la clinique.
10. **Avis Google affichés** (note et quelques avis récents, par clinique), avec les données structurées appropriées (attention aux règles de Google sur les avis d'une entreprise sur son propre site).
11. **Pages par profil** : grossesse, enfants, aînés, croisière, groupes et entreprises (Boots, Travel Doctor), en contenu INSPQ ou validé par la clinique.
12. **Boutique ou trousse** (Nomad, Passport Health) : seulement si la clinique vend déjà des trousses ou des moustiquaires. Sinon, à ne pas faire.

**À ne pas copier** : le site sans outils de The Travel Doctor, les prix cachés dans des PDF (Nomad, Pasteur Lille), l'absence de dates (MASTA, Nomad) et l'abandon progressif (Fit for Travel).

## 5. Sources (consultées le 2026-11-13)

- https://www.passporthealthusa.com/ · /destination-advice/brazil/ · /book-now/
- https://healthclinics.superdrug.com/travel-clinic/
- https://www.boots.com/healthhub/travel-health-advice/travel-vaccinations
- https://masta.com/ · https://masta.com/terms-and-conditions/ (résultat de recherche) · https://services.masta.com/VaccineChecker
- https://www.nomadtravel.co.uk/
- https://wwwnc.cdc.gov/travel/destinations/traveler/none/brazil
- https://travelhealthpro.org.uk/ (fiche pays)
- https://www.gov.uk/government/publications/malaria-prevention-guidelines-for-travellers-from-the-uk-2026/executive-summary (retrait de Fit for Travel)
- https://www.pasteur.fr/fr/centre-medical/preparer-son-voyage
- https://www.elsan.care/fr/centre-de-vaccination-internationale-paris-republique/tarifs
- https://pasteur-lille.fr/wp-content/uploads/2026/03/TARIFS-VACCINATIONS-2026-1303.pdf (résultat de recherche)
- https://www.mesvaccins.net/
- https://www.traveldoctor.com.au/ · /locations/vic/
