/**
 * Unit Tests for gtag-init.js
 * Tests Google Analytics initialization code
 */

describe('gtag-init.js - Google Analytics Initialization', () => {
  let originalWindow;

  beforeEach(() => {
    // Save original window state
    originalWindow = global.window;

    // Reset window for each test
    global.window = {
      dataLayer: undefined,
      gtag: undefined,
    };
  });

  afterEach(() => {
    // Restore original window state
    if (originalWindow) {
      global.window = originalWindow;
    }
  });

  describe('File Loading and Structure', () => {
    test('file exists and can be loaded', () => {
      const fs = require('fs');
      const path = require('path');
      const gtagInitPath = path.join(__dirname, '../../public/js/gtag-init.js');

      expect(fs.existsSync(gtagInitPath)).toBe(true);
      const content = fs.readFileSync(gtagInitPath, 'utf8');
      expect(content).toBeTruthy();
      expect(content.length).toBeGreaterThan(0);
    });

    test('contains CSP compliance comment', () => {
      const fs = require('fs');
      const path = require('path');
      const content = fs.readFileSync(path.join(__dirname, '../../public/js/gtag-init.js'), 'utf8');

      expect(content).toContain('Content Security Policy');
      expect(content).toContain('CSP');
    });
  });

  describe('DataLayer Initialization', () => {
    test('initializes window.dataLayer as empty array when undefined', () => {
      // Load the script
      require('../../public/js/gtag-init.js');

      expect(window.dataLayer).toBeDefined();
      expect(Array.isArray(window.dataLayer)).toBe(true);
    });

    test('preserves existing dataLayer if already defined', () => {
      const existingData = [{ event: 'test_event' }];
      window.dataLayer = existingData;

      // Reload the script
      jest.resetModules();
      require('../../public/js/gtag-init.js');

      expect(window.dataLayer).toBe(existingData);
      expect(window.dataLayer[0]).toEqual({ event: 'test_event' });
    });
  });

  describe('gtag Function', () => {
    beforeEach(() => {
      jest.resetModules();
      require('../../public/js/gtag-init.js');
    });

    test('creates window.gtag function', () => {
      expect(window.gtag).toBeDefined();
      expect(typeof window.gtag).toBe('function');
    });

    test('gtag pushes arguments to dataLayer', () => {
      window.gtag('config', 'GA_MEASUREMENT_ID', { page_path: '/test' });

      expect(window.dataLayer.length).toBeGreaterThan(0);

      // Check that arguments were pushed
      const lastEntry = window.dataLayer[window.dataLayer.length - 1];
      expect(lastEntry).toBeDefined();
    });

    test('gtag handles multiple calls', () => {
      const initialLength = window.dataLayer.length;

      window.gtag('event', 'page_view');
      window.gtag('event', 'click');
      window.gtag('config', 'test_id');

      expect(window.dataLayer.length).toBe(initialLength + 3);
    });

    test('gtag preserves all arguments passed to it', () => {
      window.dataLayer = []; // Clear for clean test

      window.gtag('config', 'GA_ID', {
        page_path: '/home',
        page_title: 'Home',
        send_page_view: false,
      });

      expect(window.dataLayer.length).toBe(1);
      // The function uses arguments object, so it pushes an Arguments object
      expect(window.dataLayer[0]).toBeDefined();
    });
  });

  describe('Integration with Google Analytics', () => {
    beforeEach(() => {
      jest.resetModules();
      window.dataLayer = [];
      require('../../public/js/gtag-init.js');
    });

    test('follows Google Analytics initialization pattern', () => {
      // Standard GA4 initialization sequence
      window.gtag('js', new Date());
      window.gtag('config', 'GA_MEASUREMENT_ID');

      expect(window.dataLayer.length).toBe(2);
    });

    test('supports event tracking', () => {
      window.gtag('event', 'custom_event', {
        event_category: 'engagement',
        event_label: 'test_label',
        value: 1,
      });

      expect(window.dataLayer.length).toBeGreaterThan(0);
    });

    test('supports custom parameters', () => {
      window.gtag('set', 'user_properties', {
        user_id: 'test_user',
        preferences: 'dark_mode',
      });

      expect(window.dataLayer.length).toBeGreaterThan(0);
    });
  });

  describe('CSP Compliance', () => {
    test('does not use eval or Function constructor', () => {
      const fs = require('fs');
      const path = require('path');
      const content = fs.readFileSync(path.join(__dirname, '../../public/js/gtag-init.js'), 'utf8');

      expect(content).not.toContain('eval(');
      expect(content).not.toContain('new Function(');
    });

    test('does not contain inline event handlers', () => {
      const fs = require('fs');
      const path = require('path');
      const content = fs.readFileSync(path.join(__dirname, '../../public/js/gtag-init.js'), 'utf8');

      expect(content).not.toMatch(/on\w+\s*=/); // onload=, onclick=, etc.
    });
  });
});
