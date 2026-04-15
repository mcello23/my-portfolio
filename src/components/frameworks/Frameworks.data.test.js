import { frameworksData } from './Frameworks.data';

describe('Frameworks.data', () => {
  test('exports the expected framework collection', () => {
    expect(Array.isArray(frameworksData)).toBe(true);
    expect(frameworksData).toHaveLength(5);
  });

  test.each(frameworksData)('defines the required fields for $cardTitle', (framework) => {
    expect(framework).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        title: expect.any(String),
        subtitle: expect.any(String),
        cardTitle: expect.any(String),
        cardSubtitle: expect.any(String),
        stats: expect.any(Array),
        targets: expect.any(Array),
        features: expect.any(Array),
        factoryPattern: expect.any(Object),
        cta: expect.any(Object),
      })
    );
  });

  test.each(frameworksData)('stores exactly three stats for $cardTitle', (framework) => {
    expect(framework.stats).toHaveLength(3);
    framework.stats.forEach((stat) => {
      expect(stat).toEqual(expect.any(String));
    });
  });

  test.each(frameworksData)('stores a six-tile highlight pattern for $cardTitle', (framework) => {
    expect(framework.factoryPattern).toEqual(
      expect.objectContaining({
        title: expect.any(String),
        features: expect.any(Array),
      })
    );

    expect(framework.factoryPattern.features).toHaveLength(6);

    framework.factoryPattern.features.forEach((feature) => {
      expect(feature).toEqual(
        expect.objectContaining({
          icon: expect.any(String),
          title: expect.any(String),
        })
      );
    });
  });

  test.each(frameworksData)('uses GitHub CTA links for $cardTitle', (framework) => {
    expect(framework.cta).toEqual(
      expect.objectContaining({
        href: expect.stringMatching(/^https:\/\/github\.com\/mcello23\//),
        text: 'View on GitHub',
        icon: expect.any(String),
      })
    );
  });

  test.each(frameworksData)('uses saucedemo as the shared target for $cardTitle', (framework) => {
    expect(framework.targets).toEqual([{ icon: 'language', name: 'saucedemo.com' }]);
  });

  test('keeps the expected framework family distribution', () => {
    const countsById = frameworksData.reduce((counts, framework) => {
      counts[framework.id] = (counts[framework.id] || 0) + 1;
      return counts;
    }, {});

    expect(countsById).toEqual({
      playwright: 1,
      cypress: 2,
      selenium: 2,
    });
  });

  test('includes the current framework card titles', () => {
    expect(frameworksData.map((framework) => framework.cardTitle)).toEqual([
      'Playwright + TypeScript',
      'Cypress + TypeScript',
      'Cypress + Cucumber',
      'Selenium + Java 17',
      'Selenium + TestNG',
    ]);
  });

  test('keeps GitHub CTA links unique', () => {
    const hrefs = frameworksData.map((framework) => framework.cta.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });

  test('only includes live reports for the frameworks that publish them', () => {
    const frameworksWithReports = frameworksData.filter((framework) => framework.report);
    const reportHrefs = frameworksWithReports.map((framework) => framework.report.href);

    expect(frameworksWithReports.map((framework) => framework.id)).toEqual([
      'playwright',
      'cypress',
      'cypress',
      'selenium',
    ]);
    expect(reportHrefs).toEqual([
      'https://mcello23.github.io/playwright-example/',
      'https://mcello23.github.io/cypress-typescript-example/',
      'https://mcello23.github.io/cypress-with-cucumber-example/',
      'https://mcello23.github.io/selenium-java-testng-example/',
    ]);
  });
});
