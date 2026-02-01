// Mock implementation of env.js for Jest tests
// Uses global.__VITE_ENV__ set in setup.js

export const getEnv = (key) => {
  if (typeof global !== 'undefined' && global.__VITE_ENV__) {
    return global.__VITE_ENV__[key];
  }
  return undefined;
};

export const isDev = () => {
  if (typeof global !== 'undefined' && global.__VITE_ENV__) {
    return global.__VITE_ENV__.DEV || false;
  }
  return false;
};

export const isProd = () => {
  if (typeof global !== 'undefined' && global.__VITE_ENV__) {
    return global.__VITE_ENV__.PROD !== undefined ? global.__VITE_ENV__.PROD : true;
  }
  return true;
};
