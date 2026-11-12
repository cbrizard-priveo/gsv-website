// Vaccine texts that replace the imported WordPress text. Each one summarizes, in our own words, only
// facts stated by its source; the client asked for INSPQ content (2026-11-10). Medical site: do not add
// anything that isn't in the source, and have the medical team review changes before publishing.

export interface Source {
  label: string;
  href?: string;
}

export interface VaccineText {
  lede: string;
  body: string;
  source: Source | Source[];
}

// One file per topic in src/data/vaccines/ (FR and EN), from INSPQ or, for routine vaccines that
// INSPQ's travel guide doesn't cover, the Gouvernement du Québec (Québec.ca / PIQ).
interface TopicFile {
  routes: { fr: string; en: string };
  fr: { lede: string; body: string; sources: Source[] };
  en: { lede: string; body: string; sources: Source[] };
}
const topics = import.meta.glob<TopicFile>('./vaccines/*.json', { eager: true, import: 'default' });

const INSPQ_RAGE = 'https://www.inspq.qc.ca/sante-voyage/guide/immunisation/rage';

const rabies: Record<string, VaccineText> = {
  // Source: INSPQ, Guide d'intervention santé-voyage, « Rage », last updated 2026-05-28.
  '/vaccination/rage/': {
    lede: 'La rage est une infection causée par un virus du genre <em>Lyssavirus</em>. Elle se transmet surtout par la salive d’un mammifère infecté, le plus souvent lors d’une morsure. Une fois les symptômes apparus, elle est mortelle dans 100 % des cas.',
    body: `
<p>Seuls les mammifères transmettent la rage. Les animaux le plus souvent en cause chez l’humain sont le chien, la chauve-souris, le raton laveur, le renard, la moufette, le chat et le singe. Chez les voyageurs, le risque vient surtout des chiens : selon l’Organisation mondiale de la Santé, ils sont à l’origine de plus de 90 % des morsures et de 99 % des cas de rage humaine.</p>
<p>Il y a risque d’exposition lors d’une morsure, d’une griffure, ou si la salive de l’animal entre en contact avec une muqueuse ou une plaie récente (qui a saigné ou suinté dans les 24 dernières heures). Avec une chauve-souris, on soupçonne une exposition dès qu’il y a eu un contact physique et qu’on ne peut pas l’exclure, même sans trace visible sur la peau.</p>
<p>L’incubation dure en moyenne de 8 à 13 semaines, mais peut aller de 9 jours à 1 an; de rares cas ont été rapportés plusieurs années après l’exposition. Les soins de la plaie et le traitement après l’exposition (prophylaxie postexposition) permettent de prévenir la maladie.</p>
<h3>En cas de morsure ou de griffure en voyage</h3>
<ul>
<li>Lavez la plaie à l’eau et au savon pendant 10 à 15 minutes. C’est l’étape la plus efficace pour éliminer le virus.</li>
<li>Appliquez ensuite un virucide (par exemple : proviodine iodée 10 %, iode, éthanol 70 % ou gluconate de chlorhexidine 2 %), même si quelques heures se sont écoulées.</li>
<li>Consultez un professionnel de la santé le plus vite possible, idéalement en moins de 24 heures. Selon son évaluation, vous recevrez des vaccins, des immunoglobulines, ou les deux.</li>
<li>Notez le nom, le numéro de lot, la date d’expiration et la date d’administration des produits reçus, avec une photo si possible.</li>
<li>À votre retour, consultez un professionnel de la santé, même si l’exposition remonte à plusieurs mois.</li>
</ul>
<p>Une morsure ou une griffure de singe doit être évaluée rapidement en infectiologie : en plus de la rage, le macaque peut transmettre le virus herpès B.</p>
<h3>Vaccination avant le départ</h3>
<p>La décision de vacciner avant le voyage dépend du niveau de risque de rage du pays visité, de vos activités et de la disponibilité des vaccins et des immunoglobulines sur place :</p>
<ul>
<li><strong>Risque très faible</strong> : aucune vaccination préventive n’est recommandée.</li>
<li><strong>Risque faible</strong> : elle peut être envisagée pour les voyageurs susceptibles d’être exposés à des chauves-souris (visite de grottes, spéléologie, travail comme vétérinaire, animalier ou agent de conservation de la faune).</li>
<li><strong>Risque modéré</strong> : s’ajoutent les voyageurs exposés à des mammifères sauvages : activités surtout à l’extérieur (vélo, randonnée, camping, travail à l’extérieur ou auprès des animaux), séjours de plusieurs mois ou répétés, et enfants trop jeunes pour éviter les animaux ou pour dire qu’ils ont été mordus.</li>
<li><strong>Risque élevé</strong> : s’ajoutent les voyageurs exposés à des animaux domestiques, surtout des chiens errants, par exemple lors de promenades à l’extérieur en ville, au village ou à la campagne.</li>
</ul>
<p>Le vaccin préventif ne remplace pas le traitement après une exposition, mais il le simplifie : moins de doses, et pas d’immunoglobulines, souvent plus difficiles à obtenir. Les personnes immunosupprimées en auront toutefois besoin, même vaccinées.</p>
`,
    source: { label: 'INSPQ, Guide d’intervention santé-voyage, « Rage » (mis à jour le 28 mai 2026)', href: INSPQ_RAGE },
  },
  // English version of the summary above (same facts, same source).
  '/en/vaccination/rabies-vaccination/': {
    lede: 'Rabies is an infection caused by a virus of the genus <em>Lyssavirus</em>. It is transmitted mainly through the saliva of an infected mammal, most often by a bite. Once symptoms appear, it is fatal in 100% of cases.',
    body: `
<p>Only mammals transmit rabies. The animals most often involved in human cases are dogs, bats, raccoons, foxes, skunks, cats and monkeys. For travellers, the risk comes mainly from dogs: according to the World Health Organization, they cause more than 90% of bites and 99% of human rabies cases.</p>
<p>An exposure can occur through a bite, a scratch, or contact between the animal’s saliva and a mucous membrane or a recent wound (one that bled or oozed in the last 24 hours). With a bat, an exposure is suspected whenever there was physical contact and it cannot be ruled out, even with no visible mark on the skin.</p>
<p>Incubation lasts 8 to 13 weeks on average, but can range from 9 days to 1 year; rare cases have been reported several years after exposure. Wound care and treatment after exposure (post-exposure prophylaxis) prevent the disease.</p>
<h3>If you are bitten or scratched while travelling</h3>
<ul>
<li>Wash the wound with soap and water for 10 to 15 minutes. This is the most effective step to remove the virus.</li>
<li>Then apply a virucide (for example: 10% povidone-iodine, iodine, 70% ethanol or 2% chlorhexidine gluconate), even if a few hours have passed.</li>
<li>See a health professional as soon as possible, ideally within 24 hours. Depending on their assessment, you will receive vaccines, immunoglobulins, or both.</li>
<li>Write down the name, lot number, expiry date and administration date of the products you receive, with a photo if possible.</li>
<li>When you get back, see a health professional, even if the exposure was several months ago.</li>
</ul>
<p>A monkey bite or scratch must be assessed quickly by an infectious disease specialist: besides rabies, macaques can transmit the herpes B virus.</p>
<h3>Vaccination before you leave</h3>
<p>Whether to vaccinate before the trip depends on the rabies risk level of the country, your activities, and the local availability of vaccines and immunoglobulins:</p>
<ul>
<li><strong>Very low risk</strong>: no preventive vaccination is recommended.</li>
<li><strong>Low risk</strong>: it may be considered for travellers likely to be exposed to bats (cave visits, caving, work as a veterinarian, animal handler or wildlife officer).</li>
<li><strong>Moderate risk</strong>: travellers exposed to wild mammals are added: mostly outdoor activities (cycling, hiking, camping, outdoor work or work with animals), stays of several months or repeated stays, and children too young to avoid animals or to say they were bitten.</li>
<li><strong>High risk</strong>: travellers exposed to domestic animals, especially stray dogs, are added, for example during outdoor walks in towns, villages or the countryside.</li>
</ul>
<p>The preventive vaccine does not replace treatment after an exposure, but it simplifies it: fewer doses, and no immunoglobulins, which are often harder to obtain. People who are immunosuppressed will still need them, even if vaccinated.</p>
`,
    source: { label: 'INSPQ, Guide d’intervention santé-voyage, “Rage” (updated May 28, 2026)', href: INSPQ_RAGE },
  },
};

export const vaccineTexts: Record<string, VaccineText> = { ...rabies };
for (const t of Object.values(topics)) {
  for (const lang of ['fr', 'en'] as const) {
    vaccineTexts[t.routes[lang]] = { lede: t[lang].lede, body: t[lang].body, source: t[lang].sources };
  }
}
