// @ts-check
import { defineConfig } from 'astro/config';
import wpRedirects from './src/wp/redirects.json' with { type: 'json' };
import siteRedirects from './src/data/redirects.json' with { type: 'json' };

// https://astro.build/config
export default defineConfig({
  site: 'https://cliniquesantevoyage.com',
  trailingSlash: 'always',
  // Old WordPress URLs that redirect elsewhere on the live site, plus our own.
  redirects: { ...wpRedirects, ...siteRedirects },
});
