// Routes rebuilt as components; the WordPress catch-all route skips them.
import { vaccineRoutes } from './vaccines';
import redirects from '../data/redirects.json';

export const REBUILT_HOME = ['/', '/en/'];

export const REBUILT_VACCINES = vaccineRoutes;

// Redirected (src/data/redirects.json, applied in astro.config.mjs), so no page is generated for them.
export const REBUILT = new Set([...REBUILT_HOME, ...REBUILT_VACCINES, ...Object.keys(redirects)]);
