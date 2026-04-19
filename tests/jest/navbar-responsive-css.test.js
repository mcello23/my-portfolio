/**
 * Navbar CSS Regression Test
 *
 * Guarantees that legacy responsive navbar selectors stay out of the shared
 * stylesheet and that the active tablet override uses explicit selectors.
 *
 * This protects against layout glitches when resizing desktop -> mobile.
 */

const fs = require('fs');
const path = require('path');

describe('Navbar responsive CSS scoping', () => {
  test('shared CSS no longer carries legacy responsive navbar selectors', () => {
    const sharedCssPath = path.resolve(__dirname, '../../src/styles/style.css');
    const sharedCss = fs.readFileSync(sharedCssPath, 'utf8');

    expect(sharedCss).not.toContain('nav:not(.main-nav) .nav-wrapper');
    expect(sharedCss).not.toContain('nav:not(.main-nav) .brand-logo');
    expect(sharedCss).not.toContain('nav:not(.main-nav) .hide-on-med-and-down');
    expect(sharedCss).not.toContain('nav:not(.main-nav) .center-nav');
    expect(sharedCss).not.toContain('nav:not(.main-nav) ul:last-child');
  });

  test('tablet override uses explicit social-nav selector', () => {
    const indexCssPath = path.resolve(__dirname, '../../src/index.css');
    const indexCss = fs.readFileSync(indexCssPath, 'utf8');

    expect(indexCss).toContain('nav.main-nav ul.social-nav');
    expect(indexCss).not.toContain('nav.main-nav ul:last-child');
  });
});
