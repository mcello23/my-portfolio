import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

Object.assign(global, { TextDecoder, TextEncoder });

// Mock Vite environment variables for Jest tests
global.__VITE_ENV__ = {
  VITE_WEB3FORMS_KEY: '9b0257eb-d6be-4449-9eeb-af664f2bec38',
  VITE_GIST_USERNAME: 'mcello23',
  VITE_GIST_ID: '357c72c8e92ae6cf7eaef887e076fc42',
  DEV: false,
  PROD: true,
  MODE: 'test',
};
