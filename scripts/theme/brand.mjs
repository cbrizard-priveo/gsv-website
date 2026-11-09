// Rebrands the imported Elementor stylesheets: old colors and fonts → the Priveo-style palette and type.
// Idempotent; the importer runs it after downloading assets, and it can be run on its own:
//   node scripts/theme/brand.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Elementor's generated CSS, and FlyingPress's cached copies of some of it.
const CSS_DIRS = ['public/wp-content/uploads/elementor/css', 'public/wp-content/cache/flying-press'];

// 6-digit hex, matched case-insensitively; an 8-digit color keeps its alpha.
const COLORS = {
  '0456A3': '014A97', // old primary blue
  '0054A4': '014A97',
  '1C3563': '014A97', // Priveo navy, replaced by the new primary
  '00E5CC': '3C70C3', // teal accent → secondary blue
  '00DBC3': '3C70C3',
  '29A4FF': '5499E8',
  'D9F4F4': 'EEF3F9', // pale teal panels → pale blue
  '000E44': '012A56', // dark navy in gradients
  '848E9F': '3A4F6E', // grey body text → navy-grey
};

const FONTS = {
  Inter: 'Plus Jakarta Sans',
  Heebo: 'Plus Jakarta Sans',
};

export function brandCss(css) {
  for (const [from, to] of Object.entries(COLORS)) css = css.replace(new RegExp(`#${from}(?=[0-9a-f]{2}\\b|\\b)`, 'gi'), `#${to}`);
  css = css.replace(/rgba\(0,\s*229,\s*204[.0-9]*,/g, 'rgba(60, 112, 195,'); // teal shadows
  for (const [from, to] of Object.entries(FONTS)) css = css.replaceAll(`"${from}"`, `"${to}"`);
  return css;
}

export function brandElementorCss(root = '.') {
  let changed = 0;
  for (const file of CSS_DIRS.flatMap((dir) => fs.readdirSync(path.join(root, dir)).map((f) => path.join(root, dir, f)))) {
    if (!file.endsWith('.css')) continue;
    const css = fs.readFileSync(file, 'utf8');
    const out = brandCss(css);
    if (out !== css) {
      fs.writeFileSync(file, out);
      changed++;
    }
  }
  return changed;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) console.log(`rebranded ${brandElementorCss()} stylesheets`);
