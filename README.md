# gsv-website

Astro replica of [cliniquesantevoyage.com](https://cliniquesantevoyage.com) (Groupe Santé Voyage), French and English.

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## How it's built

The pages are imported from the live WordPress/Elementor site so they match it exactly:

- `scripts/wp-import/import.mjs` crawls every page (sitemaps plus internal links), then writes:
  - `src/wp/pages.json`: one entry per URL (title, SEO tags, stylesheets, scripts, body class)
  - `src/wp/html/*.html`: each page's content between the header and footer
  - `src/wp/header-{fr,en}.html`, `src/wp/footer-{fr,en}.html`: shared by every page
  - `public/wp-content/`, `public/wp-includes/`: images, fonts, CSS and JS, same paths as the live site
- `src/pages/[...slug].astro` renders every route through `src/layouts/WpPage.astro`.
- `src/components/ThirdParty.astro` adds Google Tag Manager/Analytics, Crisp chat and the Concord cookie banner in production builds only.

## Design

The design system is Priveo's, taken from the [web-priveo-sante](https://github.com/priveo-sante/web-priveo-sante) repository (the site at dev.priveosante.com), with `#014A97` as the primary blue.

`scripts/design/sync-priveo.mjs` copies it from a checkout of that repository next to this one:

- `src/styles/priveo/tokens.css`: every token (colors, spacing, type scale, radii, shadows).
- `src/styles/priveo/fonts.css` and `public/assets/fonts/`: Lora and Plus Jakarta Sans, self-hosted.
- `src/styles/priveo/header.css` and `public/assets/priveo/header.js`: the header's styles and scripts.

Don't edit those files. After Priveo's design changes, run:

```bash
node scripts/design/sync-priveo.mjs
```

Priveo sizes everything for a 10px root font size; the script converts its `rem` values to this site's 16px.

What is this site's own:

- `src/styles/tokens.css`: the blue and the few other values that differ from Priveo's, and the `--gsv-*` names the components use.
- `src/components/Header.astro`: Priveo's header markup with this site's menu (`src/data/site.ts`). Its class names and ids must stay Priveo's. `src/styles/header.css` keeps the page's styles out of it and sizes the logo.
- `src/components/Footer.astro`: written after Priveo's footer, not yet taken from its source.
- `src/styles/theme.css`: restyles the imported Elementor pages (buttons, banners, cards, archive lists). `src/lib/theme.ts` tags each page's title banner for it.
- `scripts/theme/brand.mjs`: swaps the old colors and fonts in the Elementor stylesheets; the importer runs it after each import.

To re-import after the live site changes:

```bash
node scripts/wp-import/import.mjs --refresh
```

Downloaded pages are cached in `.wp-cache/` (git-ignored); without `--refresh` only new pages are fetched.

## Known differences from the live site

- Elementor forms (contact, careers, newsletter) render but don't submit: they posted to WordPress, which this static site doesn't have.
- Six blog posts that reprinted La Presse / TVA Nouvelles articles link to the original article instead of including its text (see `REPRINTED_ARTICLES` in the importer).
