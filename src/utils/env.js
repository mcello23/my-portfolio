// Environment variable helper for Vite
// Direct property access allows Vite to statically replace values at build time

export const getEnv = (key) => {
  // In tests, use mocked environment
  if (typeof global !== 'undefined' && global.__VITE_ENV__) {
    return global.__VITE_ENV__[key];
  }

  // In production, Vite will replace these with actual values at build time
  // We return undefined for unknown keys - components should handle fallbacks
  switch (key) {
    case 'VITE_WEB3FORMS_KEY':
      return import.meta.env.VITE_WEB3FORMS_KEY;
    case 'VITE_GIST_USERNAME':
      return import.meta.env.VITE_GIST_USERNAME;
    case 'VITE_GIST_ID':
      return import.meta.env.VITE_GIST_ID;
    case 'DEV':
      return import.meta.env.DEV;
    case 'PROD':
      return import.meta.env.PROD;
    case 'MODE':
      return import.meta.env.MODE;
    default:
      return undefined;
  }
};

export const isDev = () => {
  if (typeof global !== 'undefined' && global.__VITE_ENV__) {
    return global.__VITE_ENV__.DEV || false;
  }
  return import.meta.env.DEV || false;
};

export const isProd = () => {
  if (typeof global !== 'undefined' && global.__VITE_ENV__) {
    return global.__VITE_ENV__.PROD !== undefined ? global.__VITE_ENV__.PROD : true;
  }
  return import.meta.env.PROD !== undefined ? import.meta.env.PROD : true;
};
