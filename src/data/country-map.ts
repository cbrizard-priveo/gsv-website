// Where each country page sits on the world map (src/components/WorldMap.astro).
// Ids are the ISO 3166-1 numeric codes used by world-atlas (Natural Earth). Most country pages match an
// atlas country by English name; the ones below don't. Overseas departments and the former Netherlands
// Antilles are part of France or the Netherlands in the atlas, so their islands are picked out of that
// country's shape by a longitude/latitude box.

export interface MapPart {
  /** Atlas country id. */
  id: string;
  /** Keep only the polygons inside this box: [west, south, east, north]. */
  box?: [number, number, number, number];
}

export const MAP_PARTS: Record<string, MapPart[]> = {
  'antigua-et-barbuda': [{ id: '028' }],
  'antilles-neerlandaises': [{ id: '531' }, { id: '534' }, { id: '528', box: [-70, 11, -62, 19] }],
  'congo-brazzaville': [{ id: '178' }],
  'congo-republique-democratique': [{ id: '180' }],
  'cote-d-ivoire': [{ id: '384' }],
  guadeloupe: [{ id: '250', box: [-62, 15.8, -61, 16.6] }],
  'guinee-equatoriale': [{ id: '226' }],
  'guyane-francaise': [{ id: '250', box: [-55, 2, -51, 6] }],
  'ile-de-la-reunion': [{ id: '250', box: [55, -21.5, 56, -20.8] }],
  'iles-caimans': [{ id: '136' }],
  'iles-falkland': [{ id: '238' }],
  'iles-turques-et-caiques': [{ id: '796' }],
  'iles-vierges-americaines': [{ id: '850' }],
  'iles-vierges-britanniques': [{ id: '092' }],
  martinique: [{ id: '250', box: [-61.3, 14.3, -60.7, 15] }],
  mayotte: [{ id: '250', box: [44.9, -13.1, 45.3, -12.6] }],
  'republique-centrafricaine': [{ id: '140' }],
  'republique-dominicaine': [{ id: '214' }],
  'saint-kitts-et-nevis': [{ id: '659' }],
  'saint-martin': [{ id: '663' }],
  'saint-vincent-et-les-grenadines': [{ id: '670' }],
  'sao-tome-et-principe': [{ id: '678' }],
  'soudan-du-sud': [{ id: '728' }],
};
