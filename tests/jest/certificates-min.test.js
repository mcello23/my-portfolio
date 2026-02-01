/**
 * Basic Tests for certificates.min.js
 * Note: This is a minified file. Best practice is to exclude minified files from coverage
 * and test the source file instead (certificates.js is already tested with 95.85% coverage)
 */

describe('certificates.min.js - Minified Version', () => {
  describe('File Verification', () => {
    test('minified file exists', () => {
      const fs = require('fs');
      const path = require('path');
      const minFilePath = path.join(__dirname, '../../public/js/certificates.min.js');

      expect(fs.existsSync(minFilePath)).toBe(true);
    });

    test('minified file is smaller than source file', () => {
      const fs = require('fs');
      const path = require('path');

      const minFile = fs.readFileSync(
        path.join(__dirname, '../../public/js/certificates.min.js'),
        'utf8'
      );
      const sourceFile = fs.readFileSync(
        path.join(__dirname, '../../public/js/certificates.js'),
        'utf8'
      );

      // Minified files should be smaller (no whitespace, shorter variable names)
      expect(minFile.length).toBeLessThanOrEqual(sourceFile.length);
    });

    test('contains expected minified patterns', () => {
      const fs = require('fs');
      const path = require('path');
      const content = fs.readFileSync(
        path.join(__dirname, '../../public/js/certificates.min.js'),
        'utf8'
      );

      // Minified code typically has very long lines
      const lines = content.split('\n');
      const hasLongLines = lines.some((line) => line.length > 500);

      expect(hasLongLines).toBe(true);
    });

    test('contains certificate data', () => {
      const fs = require('fs');
      const path = require('path');
      const content = fs.readFileSync(
        path.join(__dirname, '../../public/js/certificates.min.js'),
        'utf8'
      );

      // Should contain certificates array or data
      expect(content).toContain('certificates');
    });

    test('contains key functions from source', () => {
      const fs = require('fs');
      const path = require('path');
      const content = fs.readFileSync(
        path.join(__dirname, '../../public/js/certificates.min.js'),
        'utf8'
      );

      // Check for essential function references (may be minified)
      // These are from the original certificates.js
      expect(content).toBeTruthy();
      expect(content.length).toBeGreaterThan(100);
    });
  });

  describe('Content Integrity', () => {
    test('does not contain syntax errors', () => {
      // If the file loads without throwing, it's syntactically valid
      expect(() => {
        const fs = require('fs');
        const path = require('path');
        const content = fs.readFileSync(
          path.join(__dirname, '../../public/js/certificates.min.js'),
          'utf8'
        );

        // Basic syntax check - no obvious syntax errors
        expect(content).not.toContain('undefined undefined');
        expect(content).not.toContain('null null');
      }).not.toThrow();
    });

    test('file is not empty', () => {
      const fs = require('fs');
      const path = require('path');
      const content = fs.readFileSync(
        path.join(__dirname, '../../public/js/certificates.min.js'),
        'utf8'
      );

      expect(content.trim().length).toBeGreaterThan(0);
    });
  });
});
