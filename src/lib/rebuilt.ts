// Routes rebuilt as components; the WordPress catch-all route skips them.
import { vaccineRoutes } from './vaccines';
import redirects from '../data/redirects.json';
import { servicePages } from '../data/services';

export const REBUILT_HOME = ['/', '/en/'];

export const REBUILT_VACCINES = vaccineRoutes;

// The FAQ (src/views/FaqPage.astro) keeps the old site's URLs.
export const REBUILT_FAQ = ['/foire-aux-questions-sur-la-clinique-voyage/', '/en/frequently-asked-questions-about-the-travel-clinic/'];

// Redirected (src/data/redirects.json, applied in astro.config.mjs), so no page is generated for them.
// The service pages (src/views/ServicePage.astro) keep the old site's URLs.
export const REBUILT_SERVICES = servicePages.flatMap((p) => [p.route.fr, p.route.en]);

export const REBUILT = new Set([...REBUILT_HOME, ...REBUILT_VACCINES, ...REBUILT_FAQ, ...REBUILT_SERVICES, ...Object.keys(redirects)]);
