// Routes rebuilt as components; the WordPress catch-all route skips them.
export const REBUILT_HOME = ['/', '/en/'];

// Vaccine pages moved to the rebuilt template so far (a pilot before the other 55).
export const REBUILT_VACCINES = ['/vaccination/rage/', '/en/vaccination/rabies-vaccination/'];

export const REBUILT = new Set([...REBUILT_HOME, ...REBUILT_VACCINES]);
