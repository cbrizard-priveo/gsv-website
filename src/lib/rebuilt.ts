// Routes rebuilt as components; the WordPress catch-all route skips them.
import { vaccineRoutes } from './vaccines';

export const REBUILT_HOME = ['/', '/en/'];

export const REBUILT_VACCINES = vaccineRoutes;

export const REBUILT = new Set([...REBUILT_HOME, ...REBUILT_VACCINES]);
