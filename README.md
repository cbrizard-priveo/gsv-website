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

To re-import after the live site changes:

```bash
node scripts/wp-import/import.mjs --refresh
```

Downloaded pages are cached in `.wp-cache/` (git-ignored); without `--refresh` only new pages are fetched.

## Known differences from the live site

- Elementor forms (contact, careers, newsletter) render but don't submit: they posted to WordPress, which this static site doesn't have.
- Six blog posts that reprinted La Presse / TVA Nouvelles articles link to the original article instead of including its text (see `REPRINTED_ARTICLES` in the importer).
