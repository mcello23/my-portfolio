import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Frameworks from './Frameworks';

// Mock window.M for Materialize
window.M = {
  AutoInit: jest.fn(),
};

describe('Frameworks Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Frameworks />
      </MemoryRouter>
    );
  });

  test('initializes Materialize on mount', () => {
    expect(window.M.AutoInit).toHaveBeenCalled();
  });

  test('renders main title and description', () => {
    expect(screen.getByText(/Testing Frameworks & Open-Source Repos/i)).toBeInTheDocument();
    expect(screen.getByText(/E2E, API, and performance automation/i)).toBeInTheDocument();
  });

  describe('Shared saucedemo.com target card', () => {
    test('renders saucedemo.com badge', () => {
      expect(screen.getAllByText(/saucedemo\.com/i).length).toBeGreaterThanOrEqual(1);
    });

    test('saucedemo.com badge links to the site', () => {
      const link = screen.getByRole('link', { name: /saucedemo\.com/i });
      expect(link).toHaveAttribute('href', 'https://www.saucedemo.com');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('renders Testing label', () => {
      expect(screen.getAllByText(/Testing/i).length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('renders correct number of E2E cards', () => {
    test('renders 5 framework cards', () => {
      const allGitHubLinks = screen.getAllByRole('link', { name: /View on GitHub/i });
      // 5 E2E + 3 API = 8 total
      expect(allGitHubLinks.length).toBe(8);
    });
  });

  describe('Playwright Section', () => {
    test('renders card title and subtitle', () => {
      expect(screen.getByText(/E2E Automation with Playwright/i)).toBeInTheDocument();
      expect(screen.getByText(/TypeScript-first, cross-browser test suite/i)).toBeInTheDocument();
    });

    test('renders stat badges', () => {
      expect(screen.getByText(/^29 tests$/i)).toBeInTheDocument();
      expect(screen.getByText(/^2 browsers$/i)).toBeInTheDocument();
      expect(screen.getByText(/^58 CI runs$/i)).toBeInTheDocument();
    });

    test('renders all 6 highlights', () => {
      expect(screen.getByText(/True Parallelism/i)).toBeInTheDocument();
      expect(screen.getByText(/Trace Capture/i)).toBeInTheDocument();
      expect(screen.getByText(/Centralised Fixtures/i)).toBeInTheDocument();
      expect(screen.getAllByText(/CI\/CD on Push & PR/i).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(/HTML Reports/i).length).toBeGreaterThanOrEqual(1);
      expect(screen.getByText(/Chromium \+ Firefox/i)).toBeInTheDocument();
    });

    test('renders View on GitHub CTA link with correct href', () => {
      const links = screen.getAllByRole('link', { name: /View on GitHub/i });
      const pwLink = links.find(
        (l) => l.getAttribute('href') === 'https://github.com/mcello23/playwright-example'
      );
      expect(pwLink).toBeTruthy();
      expect(pwLink).toHaveAttribute('target', '_blank');
      expect(pwLink).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('Cypress TypeScript Section', () => {
    test('renders card title and subtitle', () => {
      expect(screen.getByText(/Cypress · TypeScript/i)).toBeInTheDocument();
      expect(screen.getAllByText(/Mochawesome/i).length).toBeGreaterThanOrEqual(1);
    });

    test('renders stat badges', () => {
      expect(screen.getByText(/^28 tests$/i)).toBeInTheDocument();
      expect(screen.getByText(/^5 specs$/i)).toBeInTheDocument();
      expect(screen.getByText(/^Cypress 14$/i)).toBeInTheDocument();
    });

    test('renders all 6 highlights', () => {
      expect(screen.getByText(/TypeScript Specs/i)).toBeInTheDocument();
      expect(screen.getByText(/cy\.login\(\) Command/i)).toBeInTheDocument();
      expect(screen.getAllByText(/Mochawesome Reports/i).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(/GitHub Actions CI/i).length).toBeGreaterThanOrEqual(1);
      expect(screen.getByText(/Video Recording/i)).toBeInTheDocument();
      expect(screen.getByText(/Failure Screenshots/i)).toBeInTheDocument();
    });

    test('renders CTA link with correct href', () => {
      const links = screen.getAllByRole('link', { name: /View on GitHub/i });
      const tsLink = links.find(
        (l) => l.getAttribute('href') === 'https://github.com/mcello23/cypress-typescript-example'
      );
      expect(tsLink).toBeTruthy();
    });
  });

  describe('Cypress BDD Section', () => {
    test('renders card title and subtitle', () => {
      expect(screen.getByText(/Cypress · Cucumber BDD/i)).toBeInTheDocument();
      expect(
        screen.getByText(/Gherkin feature files with JavaScript step definitions/i)
      ).toBeInTheDocument();
    });

    test('renders stat badges', () => {
      expect(screen.getByText(/^27 scenarios$/i)).toBeInTheDocument();
      expect(screen.getByText(/^Gherkin$/i)).toBeInTheDocument();
      expect(screen.getAllByText(/^Allure$/i).length).toBeGreaterThanOrEqual(1);
    });

    test('renders all 6 highlights', () => {
      expect(screen.getAllByText(/Feature Files/i).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(/Step Definitions/i).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(/Allure Reports/i).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(/CI\/CD Pipeline/i).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(/Cart & Checkout/i).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(/Gherkin Scenarios/i).length).toBeGreaterThanOrEqual(1);
    });

    test('renders CTA link with correct href', () => {
      const links = screen.getAllByRole('link', { name: /View on GitHub/i });
      const bddLink = links.find(
        (l) =>
          l.getAttribute('href') === 'https://github.com/mcello23/cypress-with-cucumber-example'
      );
      expect(bddLink).toBeTruthy();
    });
  });

  describe('Selenium JUnit Section', () => {
    test('renders card title and subtitle', () => {
      expect(screen.getByText(/Selenium · JUnit 5/i)).toBeInTheDocument();
      expect(screen.getAllByText(/Clean POM architecture/i).length).toBeGreaterThanOrEqual(1);
    });

    test('renders stat badges', () => {
      expect(screen.getAllByText(/^12 tests$/i).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(/^Java 17$/i).length).toBeGreaterThanOrEqual(1);
    });

    test('renders all 6 highlights', () => {
      expect(screen.getAllByText(/Clean POM/i).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(/JUnit 5 Runner/i).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(/Allure Reports/i).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(/GitHub Actions CI/i).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(/Login Flows/i).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(/Checkout E2E/i).length).toBeGreaterThanOrEqual(1);
    });

    test('renders CTA link with correct href', () => {
      const links = screen.getAllByRole('link', { name: /View on GitHub/i });
      const junitLink = links.find(
        (l) => l.getAttribute('href') === 'https://github.com/mcello23/selenium-java-example'
      );
      expect(junitLink).toBeTruthy();
    });
  });

  describe('Selenium TestNG Section', () => {
    test('renders card title and subtitle', () => {
      expect(screen.getByText(/Selenium · TestNG/i)).toBeInTheDocument();
      expect(
        screen.getByText(/@DataProvider matrix covering all 5 saucedemo/i)
      ).toBeInTheDocument();
    });

    test('renders stat badges', () => {
      expect(screen.getByText(/^7\+ runs$/i)).toBeInTheDocument();
      expect(screen.getAllByText(/@DataProvider/).length).toBeGreaterThanOrEqual(1);
    });

    test('renders all 6 highlights', () => {
      expect(screen.getByText(/@DataProvider Matrix/)).toBeInTheDocument();
      expect(screen.getByText(/5 User Accounts/i)).toBeInTheDocument();
      expect(screen.getAllByText(/Allure Reports/i).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(/GitHub Actions CI/i).length).toBeGreaterThanOrEqual(1);
      expect(screen.getByText(/Headless Chrome/i)).toBeInTheDocument();
      expect(screen.getByText(/WebDriverManager/i)).toBeInTheDocument();
    });

    test('renders CTA link with correct href', () => {
      const links = screen.getAllByRole('link', { name: /View on GitHub/i });
      const testngLink = links.find(
        (l) => l.getAttribute('href') === 'https://github.com/mcello23/selenium-java-testng-example'
      );
      expect(testngLink).toBeTruthy();
    });
  });

  describe('API & Performance Testing Section', () => {
    test('renders section header and description', () => {
      expect(screen.getByText(/API & Performance Testing/i)).toBeInTheDocument();
      expect(
        screen.getByText(/k6 load testing, Supertest API validation, and Postman collections/i)
      ).toBeInTheDocument();
    });

    test('renders shared endpoints card with label', () => {
      expect(screen.getByText(/Endpoints Tested/i)).toBeInTheDocument();
    });

    test('renders endpoint badges as links with correct hrefs', () => {
      const dogLink = screen.getByRole('link', { name: /Dog API/i });
      expect(dogLink).toHaveAttribute('href', 'https://dog.ceo/dog-api/');
      expect(dogLink).toHaveAttribute('target', '_blank');

      const emojiLink = screen.getByRole('link', { name: /EmojiHub/i });
      expect(emojiLink).toHaveAttribute('href', 'https://github.com/cheatsnake/emojihub');

      const artLink = screen.getByRole('link', { name: /Art Institute/i });
      expect(artLink).toHaveAttribute('href', 'https://api.artic.edu/docs/');
    });

    test('renders k6 card title, subtitle, stats, and highlights', () => {
      expect(screen.getByText(/^k6$/i)).toBeInTheDocument();
      expect(screen.getByText(/Performance & Load Testing/i)).toBeInTheDocument();
      expect(screen.getByText(/^3 suites$/i)).toBeInTheDocument();
      expect(screen.getByText(/^13 endpoints$/i)).toBeInTheDocument();
      expect(screen.getByText(/^90 VUs$/i)).toBeInTheDocument();
      expect(screen.getByText('Smoke')).toBeInTheDocument();
      expect(screen.getByText('Load')).toBeInTheDocument();
      expect(screen.getByText('Stress')).toBeInTheDocument();
      expect(screen.getByText('CI/CD')).toBeInTheDocument();
    });

    test('renders Supertest card title, subtitle, stats, and highlights', () => {
      expect(screen.getByText(/Jest \+ Supertest/i)).toBeInTheDocument();
      expect(screen.getByText(/^API Testing$/i)).toBeInTheDocument();
      expect(screen.getAllByText(/^12 tests$/i).length).toBeGreaterThanOrEqual(1);
      expect(screen.getByText(/^3 services$/i)).toBeInTheDocument();
      expect(screen.getByText(/^schema validation$/i)).toBeInTheDocument();
      expect(screen.getByText('Validation')).toBeInTheDocument();
      expect(screen.getByText('Coverage')).toBeInTheDocument();
      expect(screen.getByText('Contracts')).toBeInTheDocument();
    });

    test('renders Postman card title, subtitle, stats, and highlights', () => {
      expect(screen.getByText(/Postman \/ Newman/i)).toBeInTheDocument();
      expect(screen.getByText(/API Collections/i)).toBeInTheDocument();
      expect(screen.getByText(/^1 collection$/i)).toBeInTheDocument();
      expect(screen.getByText(/^JUnit \+ HTML$/i)).toBeInTheDocument();
      expect(screen.getByText(/^fail-fast CI$/i)).toBeInTheDocument();
      expect(screen.getByText('Runner')).toBeInTheDocument();
      expect(screen.getByText('Collection')).toBeInTheDocument();
      expect(screen.getByText('Reports')).toBeInTheDocument();
      expect(screen.getByText('Env Overrides')).toBeInTheDocument();
    });

    test('renders View on GitHub links for all 3 API repos with correct hrefs', () => {
      const allLinks = screen.getAllByRole('link', { name: /View on GitHub/i });
      const k6Link = allLinks.find(
        (l) => l.getAttribute('href') === 'https://github.com/mcello23/k6-example-repo'
      );
      const supertestLink = allLinks.find(
        (l) => l.getAttribute('href') === 'https://github.com/mcello23/supertest-example-repo'
      );
      const postmanLink = allLinks.find(
        (l) => l.getAttribute('href') === 'https://github.com/mcello23/postman-example-repo'
      );
      expect(k6Link).toBeTruthy();
      expect(supertestLink).toBeTruthy();
      expect(postmanLink).toBeTruthy();
    });

    test('all API CTA links open in new tab', () => {
      const allLinks = screen.getAllByRole('link', { name: /View on GitHub/i });
      const apiLinks = allLinks.filter((l) => {
        const href = l.getAttribute('href') || '';
        return (
          href.includes('k6-example') || href.includes('supertest') || href.includes('postman')
        );
      });
      apiLinks.forEach((link) => {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      });
    });
  });
});
