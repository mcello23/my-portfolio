// Environment variable helper for Vite

const getImportMetaEnv = () => {
  // In tests, check if global mock exists first
  if (typeof global !== 'undefined' && global.__VITE_ENV__) {
    return global.__VITE_ENV__;
  }

  try {
    return eval('import.meta.env');
  } catch {
    return {};
  }
};

export const getEnv = (key) => {
  const env = getImportMetaEnv();
  return env[key];
};

export const isDev = () => {
  const env = getImportMetaEnv();
  return env.DEV || false;
};

export const isProd = () => {
  const env = getImportMetaEnv();
  return env.PROD !== undefined ? env.PROD : true;
};
