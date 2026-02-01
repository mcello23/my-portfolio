/**
 * Tests for src/utils/env.js - Environment Variable Helper
 * Note: This file uses import.meta.env which is replaced by Vite at build time
 * In tests, we use a mocked version (tests/jest/__mocks__/env.js)
 */

import { getEnv, isDev, isProd } from '../../src/utils/env.js';

describe('env.js - Environment Variable Helper', () => {
  let originalEnv;

  beforeEach(() => {
    originalEnv = global.__VITE_ENV__;
    // Reset to default test environment
    global.__VITE_ENV__ = {
      VITE_WEB3FORMS_KEY: 'test-web3forms-key',
      VITE_GIST_USERNAME: 'test-user',
      VITE_GIST_ID: 'test-gist-id',
      DEV: true,
      PROD: false,
      MODE: 'test',
    };
  });

  afterEach(() => {
    global.__VITE_ENV__ = originalEnv;
  });

  describe('getEnv function', () => {
    test('retrieves VITE_WEB3FORMS_KEY from environment', () => {
      const key = getEnv('VITE_WEB3FORMS_KEY');
      expect(key).toBe('test-web3forms-key');
    });

    test('retrieves VITE_GIST_USERNAME from environment', () => {
      const username = getEnv('VITE_GIST_USERNAME');
      expect(username).toBe('test-user');
    });

    test('retrieves VITE_GIST_ID from environment', () => {
      const gistId = getEnv('VITE_GIST_ID');
      expect(gistId).toBe('test-gist-id');
    });

    test('retrieves DEV flag from environment', () => {
      const dev = getEnv('DEV');
      expect(dev).toBe(true);
    });

    test('retrieves PROD flag from environment', () => {
      const prod = getEnv('PROD');
      expect(prod).toBe(false);
    });

    test('retrieves MODE from environment', () => {
      const mode = getEnv('MODE');
      expect(mode).toBe('test');
    });

    test('returns undefined for unknown keys', () => {
      const unknown = getEnv('UNKNOWN_KEY');
      expect(unknown).toBeUndefined();
    });

    test('handles missing environment variables gracefully', () => {
      global.__VITE_ENV__ = {
        VITE_GIST_USERNAME: 'test-user',
        // VITE_WEB3FORMS_KEY is missing
      };

      const missingKey = getEnv('VITE_WEB3FORMS_KEY');
      expect(missingKey).toBeUndefined();
    });

    test('prioritizes global.__VITE_ENV__ in test environment', () => {
      global.__VITE_ENV__ = {
        VITE_WEB3FORMS_KEY: 'mocked-key',
      };

      const key = getEnv('VITE_WEB3FORMS_KEY');
      expect(key).toBe('mocked-key');
    });
  });

  describe('isDev function', () => {
    test('returns true when DEV is true', () => {
      global.__VITE_ENV__ = { DEV: true };
      expect(isDev()).toBe(true);
    });

    test('returns false when DEV is false', () => {
      global.__VITE_ENV__ = { DEV: false };
      expect(isDev()).toBe(false);
    });

    test('returns false when DEV is undefined', () => {
      global.__VITE_ENV__ = {};
      expect(isDev()).toBe(false);
    });

    test('handles missing __VITE_ENV__ gracefully', () => {
      delete global.__VITE_ENV__;
      // Should not throw, returns false as default
      expect(() => isDev()).not.toThrow();
    });
  });

  describe('isProd function', () => {
    test('returns true when PROD is true', () => {
      global.__VITE_ENV__ = { PROD: true };
      expect(isProd()).toBe(true);
    });

    test('returns false when PROD is false', () => {
      global.__VITE_ENV__ = { PROD: false };
      expect(isProd()).toBe(false);
    });

    test('defaults to true when PROD is undefined', () => {
      global.__VITE_ENV__ = {};
      // Production is the default fallback for safety
      expect(isProd()).toBe(true);
    });

    test('handles missing __VITE_ENV__ gracefully', () => {
      delete global.__VITE_ENV__;
      // Should not throw, returns true as safe default
      expect(() => isProd()).not.toThrow();
    });
  });

  describe('Environment switching scenarios', () => {
    test('handles development environment', () => {
      global.__VITE_ENV__ = {
        DEV: true,
        PROD: false,
        MODE: 'development',
      };

      expect(isDev()).toBe(true);
      expect(isProd()).toBe(false);
      expect(getEnv('MODE')).toBe('development');
    });

    test('handles production environment', () => {
      global.__VITE_ENV__ = {
        DEV: false,
        PROD: true,
        MODE: 'production',
      };

      expect(isDev()).toBe(false);
      expect(isProd()).toBe(true);
      expect(getEnv('MODE')).toBe('production');
    });

    test('handles test environment', () => {
      global.__VITE_ENV__ = {
        DEV: true,
        PROD: false,
        MODE: 'test',
      };

      expect(isDev()).toBe(true);
      expect(isProd()).toBe(false);
      expect(getEnv('MODE')).toBe('test');
    });
  });

  describe('Source file structure', () => {
    test('source file exists and is readable', () => {
      const fs = require('fs');
      const path = require('path');
      const envPath = path.join(__dirname, '../../src/utils/env.js');

      expect(fs.existsSync(envPath)).toBe(true);
      const content = fs.readFileSync(envPath, 'utf8');
      expect(content).toBeTruthy();
      expect(content.length).toBeGreaterThan(0);
    });

    test('source file uses switch statement for type safety', () => {
      const fs = require('fs');
      const path = require('path');
      const content = fs.readFileSync(path.join(__dirname, '../../src/utils/env.js'), 'utf8');

      expect(content).toContain('switch (key)');
      expect(content).toContain('case');
      expect(content).toContain('default:');
    });

    test('source file handles global.__VITE_ENV__ for tests', () => {
      const fs = require('fs');
      const path = require('path');
      const content = fs.readFileSync(path.join(__dirname, '../../src/utils/env.js'), 'utf8');

      expect(content).toContain('global.__VITE_ENV__');
    });

    test('source file uses import.meta.env for Vite', () => {
      const fs = require('fs');
      const path = require('path');
      const content = fs.readFileSync(path.join(__dirname, '../../src/utils/env.js'), 'utf8');

      expect(content).toContain('import.meta.env');
    });

    test('exports all required functions', () => {
      const fs = require('fs');
      const path = require('path');
      const content = fs.readFileSync(path.join(__dirname, '../../src/utils/env.js'), 'utf8');

      expect(content).toContain('export const getEnv');
      expect(content).toContain('export const isDev');
      expect(content).toContain('export const isProd');
    });
  });

  describe('Integration with Vite build system', () => {
    test('all environment keys have corresponding switch cases in source', () => {
      const fs = require('fs');
      const path = require('path');
      const content = fs.readFileSync(path.join(__dirname, '../../src/utils/env.js'), 'utf8');

      const requiredKeys = [
        'VITE_WEB3FORMS_KEY',
        'VITE_GIST_USERNAME',
        'VITE_GIST_ID',
        'DEV',
        'PROD',
        'MODE',
      ];

      requiredKeys.forEach((key) => {
        expect(content).toContain(`case '${key}':`);
      });
    });

    test('returns undefined for unmapped keys (safe fallback)', () => {
      const result = getEnv('TOTALLY_UNKNOWN_KEY');
      expect(result).toBeUndefined();
    });
  });

  describe('Type safety and error handling', () => {
    test('handles null/undefined key gracefully', () => {
      expect(() => getEnv(null)).not.toThrow();
      expect(() => getEnv(undefined)).not.toThrow();
    });

    test('handles empty string key', () => {
      const result = getEnv('');
      expect(result).toBeUndefined();
    });

    test('is case-sensitive for keys', () => {
      global.__VITE_ENV__ = {
        VITE_WEB3FORMS_KEY: 'test-key',
      };

      expect(getEnv('VITE_WEB3FORMS_KEY')).toBe('test-key');
      expect(getEnv('vite_web3forms_key')).toBeUndefined(); // lowercase
    });
  });

  describe('Mock implementation', () => {
    test('mock file exists and matches source API', () => {
      const fs = require('fs');
      const path = require('path');
      const mockPath = path.join(__dirname, '__mocks__/env.js');

      expect(fs.existsSync(mockPath)).toBe(true);
      const mockContent = fs.readFileSync(mockPath, 'utf8');

      // Mock should export the same functions
      expect(mockContent).toContain('export const getEnv');
      expect(mockContent).toContain('export const isDev');
      expect(mockContent).toContain('export const isProd');
    });
  });
});
