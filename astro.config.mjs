// @ts-check
import { defineConfig } from 'astro/config';
import redirects from './src/wp/redirects.json' with { type: 'json' };

// https://astro.build/config
export default defineConfig({
  site: 'https://cliniquesantevoyage.com',
  trailingSlash: 'always',
  // Old WordPress URLs that redirect elsewhere on the live site.
  redirects,
});
