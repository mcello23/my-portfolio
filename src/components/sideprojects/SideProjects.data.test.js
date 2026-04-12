import { sideProjectsData } from './SideProjects.data';

describe('SideProjects.data', () => {
  test('exports an array of 3 projects', () => {
    expect(Array.isArray(sideProjectsData)).toBe(true);
    expect(sideProjectsData).toHaveLength(3);
  });

  test.each(sideProjectsData.map((p) => [p.cardTitle, p]))(
    '%s has required fields',
    (_title, project) => {
      expect(project).toHaveProperty('id');
      expect(project).toHaveProperty('cardTitle');
      expect(project).toHaveProperty('cardSubtitle');
      expect(project).toHaveProperty('stats');
      expect(project).toHaveProperty('factoryPattern');
      expect(project).toHaveProperty('cta');
      expect(typeof project.id).toBe('string');
      expect(typeof project.cardTitle).toBe('string');
      expect(typeof project.cardSubtitle).toBe('string');
      expect(Array.isArray(project.stats)).toBe(true);
    }
  );

  test.each(sideProjectsData.map((p) => [p.cardTitle, p]))(
    '%s has at least 3 stats',
    (_title, project) => {
      expect(project.stats.length).toBeGreaterThanOrEqual(3);
    }
  );

  test.each(sideProjectsData.map((p) => [p.cardTitle, p]))(
    '%s has exactly 6 factoryPattern features',
    (_title, project) => {
      expect(project.factoryPattern.features).toHaveLength(6);
      project.factoryPattern.features.forEach((feat) => {
        expect(feat).toHaveProperty('icon');
        expect(feat).toHaveProperty('title');
        expect(typeof feat.icon).toBe('string');
        expect(typeof feat.title).toBe('string');
      });
    }
  );

  test.each(sideProjectsData.map((p) => [p.cardTitle, p]))(
    '%s has a valid CTA with href, text, and icon',
    (_title, project) => {
      expect(project.cta.href).toMatch(/^https:\/\/github\.com\/mcello23\//);
      expect(project.cta.text).toBe('View on GitHub');
      expect(typeof project.cta.icon).toBe('string');
    }
  );

  test('all project IDs are unique', () => {
    const ids = sideProjectsData.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  test('all CTA hrefs are unique', () => {
    const hrefs = sideProjectsData.map((p) => p.cta.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });

  test('contains expected project IDs', () => {
    const ids = sideProjectsData.map((p) => p.id);
    expect(ids).toEqual(['ai-testplan', 'music-downloader', 'doom-game']);
  });
});
