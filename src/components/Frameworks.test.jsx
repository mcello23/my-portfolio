import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Frameworks from './Frameworks';
import { frameworksData } from './frameworks/Frameworks.data';

const API_REPOS = [
  {
    title: 'k6',
    subtitle: 'Performance & Load Testing',
    stats: ['3 suites', '13 endpoints', '90 VUs'],
    items: ['Smoke', 'Load', 'Stress', 'CI/CD'],
    repoHref: 'https://github.com/mcello23/k6-example-repo',
    reportHref: 'https://mcello23.github.io/k6-example-repo/',
  },
  {
    title: 'Jest + Supertest',
    subtitle: 'API Testing',
    stats: ['12 tests', '3 services', 'schema validation'],
    items: ['Validation', 'Coverage', 'Stack', 'Contracts'],
    repoHref: 'https://github.com/mcello23/supertest-example-repo',
    reportHref: 'https://mcello23.github.io/supertest-example-repo/',
  },
  {
    title: 'Postman / Newman',
    subtitle: 'API Collections',
    stats: ['1 collection', 'JUnit + HTML', 'fail-fast CI'],
    items: ['Runner', 'Collection', 'Reports', 'Env Overrides'],
    repoHref: 'https://github.com/mcello23/postman-example-repo',
    reportHref: 'https://mcello23.github.io/postman-example-repo/',
  },
];

const API_TARGETS = [
  { name: 'Dog API', href: 'https://dog.ceo/dog-api/' },
  { name: 'EmojiHub', href: 'https://github.com/cheatsnake/emojihub' },
  { name: 'Art Institute', href: 'https://api.artic.edu/docs/' },
];

const renderComponent = () =>
  render(
    <MemoryRouter>
      <Frameworks />
    </MemoryRouter>
  );

describe('Frameworks Component', () => {
  beforeEach(() => {
    window.M = {
      AutoInit: jest.fn(),
    };

    renderComponent();
  });

  test('initializes Materialize on mount', () => {
    expect(window.M.AutoInit).toHaveBeenCalledTimes(1);
  });

  test('renders the page header and saucedemo target badge', () => {
    expect(screen.getByText('Testing Frameworks & Open-Source Repos')).toBeInTheDocument();
    expect(screen.getByText(/E2E, API, and performance automation/i)).toBeInTheDocument();
    expect(screen.getByText('Testing')).toBeInTheDocument();

    const sauceDemoLink = screen.getByRole('link', { name: /saucedemo\.com/i });
    expect(sauceDemoLink).toHaveAttribute('href', 'https://www.saucedemo.com');
    expect(sauceDemoLink).toHaveAttribute('target', '_blank');
    expect(sauceDemoLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('renders one framework card for every framework entry', () => {
    expect(document.querySelectorAll('.fw-grid .fw-card')).toHaveLength(frameworksData.length);
  });

  test.each(frameworksData)('renders the $cardTitle framework card content', (framework) => {
    const title = screen.getByRole('heading', { name: framework.cardTitle });
    const card = title.closest('.fw-card');

    if (!card) {
      throw new Error(`Expected a .fw-card ancestor for "${framework.cardTitle}"`);
    }

    const scopedCard = within(card);

    expect(scopedCard.getByText(framework.cardSubtitle)).toBeInTheDocument();

    framework.stats.slice(0, 3).forEach((stat) => {
      expect(scopedCard.getByText(stat)).toBeInTheDocument();
    });

    framework.factoryPattern.features.slice(0, 6).forEach((feature) => {
      expect(scopedCard.getByText(feature.title)).toBeInTheDocument();
    });

    const primaryCta = scopedCard.getByRole('link', { name: /View on GitHub/i });
    expect(primaryCta).toHaveAttribute('href', framework.cta.href);
    expect(primaryCta).toHaveAttribute('target', '_blank');
    expect(primaryCta).toHaveAttribute('rel', 'noopener noreferrer');

    if (framework.report) {
      const reportLink = scopedCard.getByRole('link', { name: /Live Report/i });
      expect(reportLink).toHaveAttribute('href', framework.report.href);
      expect(reportLink).toHaveAttribute('target', '_blank');
      expect(reportLink).toHaveAttribute('rel', 'noopener noreferrer');
    } else {
      expect(scopedCard.queryByRole('link', { name: /Live Report/i })).not.toBeInTheDocument();
    }
  });

  test('renders all framework and API GitHub links', () => {
    const githubLinks = screen.getAllByRole('link', { name: /View on GitHub/i });
    expect(githubLinks).toHaveLength(frameworksData.length + API_REPOS.length);
  });

  test('renders the API and performance section header and endpoint links', () => {
    expect(screen.getByText(/API & Performance Testing/i)).toBeInTheDocument();
    expect(
      screen.getByText(/k6 load testing, Supertest API validation, and Postman collections/i)
    ).toBeInTheDocument();
    expect(screen.getByText('Endpoints Tested')).toBeInTheDocument();

    API_TARGETS.forEach((target) => {
      const link = screen.getByRole('link', { name: new RegExp(target.name, 'i') });
      expect(link).toHaveAttribute('href', target.href);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  test.each(API_REPOS)('renders the $title API repo card content', (repo) => {
    const title = screen.getByRole('heading', { name: repo.title });
    const card = title.closest('.fw-api-card');

    if (!card) {
      throw new Error(`Expected a .fw-api-card ancestor for "${repo.title}"`);
    }

    const scopedCard = within(card);

    expect(scopedCard.getByText(repo.subtitle)).toBeInTheDocument();

    repo.stats.forEach((stat) => {
      expect(scopedCard.getByText(stat)).toBeInTheDocument();
    });

    repo.items.forEach((item) => {
      expect(scopedCard.getByText(item)).toBeInTheDocument();
    });

    const githubLink = scopedCard.getByRole('link', { name: /View on GitHub/i });
    expect(githubLink).toHaveAttribute('href', repo.repoHref);
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');

    const reportLink = scopedCard.getByRole('link', { name: /Live Report/i });
    expect(reportLink).toHaveAttribute('href', repo.reportHref);
    expect(reportLink).toHaveAttribute('target', '_blank');
    expect(reportLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
