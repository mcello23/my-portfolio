import '@testing-library/jest-dom';
import { ReadableStream, TransformStream, WritableStream } from 'stream/web';
import { TextDecoder, TextEncoder } from 'util';

// Suppress React 18 act() warnings from lazy-loaded routes
// These are internal React Router async updates that don't affect test validity
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('A suspended resource finished loading inside a test')
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

const testGlobals = {
  TextDecoder,
  TextEncoder,
  ReadableStream,
  WritableStream,
  TransformStream,
  MessageChannel: undefined,
  MessagePort: undefined,
};

// React's scheduler uses MessageChannel when available. In Jest/Node this can keep
// the event loop alive and trigger the final "Jest did not exit" warning.
// Force the timer fallback in tests.

Object.assign(global, testGlobals);

// Mock Vite environment variables for Jest tests
global.__VITE_ENV__ = {
  VITE_WEB3FORMS_KEY: '9b0257eb-d6be-4449-9eeb-af664f2bec38',
  VITE_GIST_USERNAME: 'mcello23',
  VITE_GIST_ID: '357c72c8e92ae6cf7eaef887e076fc42',
  DEV: false,
  PROD: true,
  MODE: 'test',
};
