import { frameworksData } from './Frameworks.data';

describe('Frameworks.data', () => {
  test('exports an array of 5 frameworks', () => {
    expect(Array.isArray(frameworksData)).toBe(true);
    expect(frameworksData).toHaveLength(5);
  });

  test.each(frameworksData.map((f, i) => [f.cardTitle, f, i]))(
    '%s has required fields',
    (_title, framework) => {
      expect(framework).toHaveProperty('id');
      expect(framework).toHaveProperty('cardTitle');
      expect(framework).toHaveProperty('cardSubtitle');
      expect(framework).toHaveProperty('stats');
      expect(framework).toHaveProperty('factoryPattern');
      expect(framework).toHaveProperty('cta');
      expect(typeof framework.id).toBe('string');
      expect(typeof framework.cardTitle).toBe('string');
      expect(typeof framework.cardSubtitle).toBe('string');
    }
  );

  test.each(frameworksData.map((f) => [f.cardTitle, f]))(
    '%s has at least 3 stats',
    (_title, framework) => {
      expect(framework.stats.length).toBeGreaterThanOrEqual(3);
    }
  );

  test.each(frameworksData.map((f) => [f.cardTitle, f]))(
    '%s has exactly 6 factoryPattern features',
    (_title, framework) => {
      expect(framework.factoryPattern.features).toHaveLength(6);
      framework.factoryPattern.features.forEach((feat) => {
        expect(feat).toHaveProperty('icon');
        expect(feat).toHaveProperty('title');
        expect(typeof feat.icon).toBe('string');
        expect(typeof feat.title).toBe('string');
      });
    }
  );

  test.each(frameworksData.map((f) => [f.cardTitle, f]))(
    '%s has a valid CTA with href, text, and icon',
    (_title, framework) => {
      expect(framework.cta.href).toMatch(/^https:\/\/github\.com\/mcello23\//);
      expect(typeof framework.cta.text).toBe('string');
      expect(typeof framework.cta.icon).toBe('string');
    }
  );

  test('framework IDs are playwright, cypress, or selenium', () => {
    const validIds = ['playwright', 'cypress', 'selenium'];
    frameworksData.forEach((f) => {
      expect(validIds).toContain(f.id);
    });
  });

  test('contains one Playwright entry', () => {
    const pw = frameworksData.filter((f) => f.id === 'playwright');
    expect(pw).toHaveLength(1);
  });

  test('contains two Cypress entries (TS and BDD)', () => {
    const cy = frameworksData.filter((f) => f.id === 'cypress');
    expect(cy).toHaveLength(2);
    expect(cy.map((c) => c.cardTitle)).toEqual(
      expect.arrayContaining(['Cypress · TypeScript', 'Cypress · Cucumber BDD'])
    );
  });

  test('contains two Selenium entries (JUnit and TestNG)', () => {
    const se = frameworksData.filter((f) => f.id === 'selenium');
    expect(se).toHaveLength(2);
    expect(se.map((s) => s.cardTitle)).toEqual(
      expect.arrayContaining(['Selenium · JUnit 5', 'Selenium · TestNG'])
    );
  });

  test('all CTA hrefs are unique', () => {
    const hrefs = frameworksData.map((f) => f.cta.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });
});
