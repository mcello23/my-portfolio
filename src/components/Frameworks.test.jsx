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
    expect(screen.getByText(/Testing Frameworks & Open-Source Examples/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Real-world automation repos covering E2E, API, and performance testing/i)
    ).toBeInTheDocument();
  });

  describe('Playwright Section', () => {
    test('renders hero title and subtitle', () => {
      expect(screen.getByText(/Playwright Testing/i)).toBeInTheDocument();
      expect(
        screen.getByText(/TypeScript • Chromium • Firefox • Multi-Browser/i)
      ).toBeInTheDocument();
    });

    test('renders card title and subtitle', () => {
      expect(screen.getByText(/E2E Automation with Playwright/i)).toBeInTheDocument();
      expect(screen.getByText(/TypeScript-first, cross-browser test suite/i)).toBeInTheDocument();
    });

    test('renders key capabilities', () => {
      expect(screen.getAllByText(/Stack:/i)[0]).toBeInTheDocument();
      expect(screen.getAllByText(/Browsers:/i)[0]).toBeInTheDocument();
      expect(screen.getAllByText(/Login:/i)[0]).toBeInTheDocument();
      expect(screen.getAllByText(/Checkout:/i)[0]).toBeInTheDocument();
      expect(screen.getAllByText(/CI\/CD:/i)[0]).toBeInTheDocument();
    });

    test('renders stat badges', () => {
      expect(screen.getByText(/^29 tests$/i)).toBeInTheDocument();
      expect(screen.getByText(/^2 browsers$/i)).toBeInTheDocument();
      expect(screen.getByText(/^58 CI runs$/i)).toBeInTheDocument();
    });

    test('renders Multi-Browser Execution Strategy section', () => {
      expect(screen.getByText(/Multi-Browser Execution Strategy/i)).toBeInTheDocument();
      expect(screen.getByText(/True Parallelism/i)).toBeInTheDocument();
      expect(screen.getByText(/Automatic Trace Capture/i)).toBeInTheDocument();
      expect(screen.getByText(/Centralised Fixtures/i)).toBeInTheDocument();
    });

    test('renders View on GitHub CTA link', () => {
      const link = screen.getByRole('link', { name: /View on GitHub/i });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', 'https://github.com/mcello23/playwright-example');
    });
  });

  describe('Cypress Section', () => {
    test('renders hero title and subtitle', () => {
      expect(screen.getByText(/Cypress Testing/i)).toBeInTheDocument();
      expect(
        screen.getByText(/TypeScript • BDD\/Gherkin • Mochawesome • Allure/i)
      ).toBeInTheDocument();
    });

    test('renders card title and subtitle', () => {
      expect(screen.getByText(/E2E Automation with Cypress/i)).toBeInTheDocument();
      expect(screen.getByText(/Two repos, two styles/i)).toBeInTheDocument();
    });

    test('renders key capabilities', () => {
      expect(screen.getByText(/TS Repo:/i)).toBeInTheDocument();
      expect(screen.getByText(/BDD Repo:/i)).toBeInTheDocument();
      expect(screen.getByText(/Gherkin:/i)).toBeInTheDocument();
      expect(screen.getByText(/Scenarios:/i)).toBeInTheDocument();
    });

    test('renders stat badges', () => {
      expect(screen.getByText(/^28 TS tests$/i)).toBeInTheDocument();
      expect(screen.getByText(/^27 BDD scenarios$/i)).toBeInTheDocument();
      expect(screen.getAllByText(/^2 repos$/i)[0]).toBeInTheDocument();
    });

    test('renders Dual-Approach Cypress Suite section', () => {
      expect(screen.getByText(/Dual-Approach Cypress Suite/i)).toBeInTheDocument();
      expect(screen.getByText(/TypeScript Spec Style/i)).toBeInTheDocument();
      expect(screen.getByText(/BDD \/ Gherkin Style/i)).toBeInTheDocument();
      expect(screen.getByText(/Full CI\/CD on Both/i)).toBeInTheDocument();
    });

    test('renders TypeScript and BDD CTA buttons', () => {
      const tsLink = screen.getByRole('link', { name: /View TypeScript Repo/i });
      expect(tsLink).toBeInTheDocument();
      expect(tsLink).toHaveAttribute(
        'href',
        'https://github.com/mcello23/cypress-typescript-example'
      );

      const bddLink = screen.getByRole('link', { name: /View BDD Repo/i });
      expect(bddLink).toBeInTheDocument();
      expect(bddLink).toHaveAttribute(
        'href',
        'https://github.com/mcello23/cypress-with-cucumber-example'
      );
    });
  });

  describe('Selenium Section', () => {
    test('renders hero title and subtitle', () => {
      expect(screen.getByText(/Selenium Testing/i)).toBeInTheDocument();
      expect(
        screen.getByText(/Java 17 • JUnit 5 • TestNG 7 • Page Object Model/i)
      ).toBeInTheDocument();
    });

    test('renders card title and subtitle', () => {
      expect(screen.getByText(/E2E Automation with Selenium/i)).toBeInTheDocument();
      expect(screen.getByText(/Classic POM pattern in Java/i)).toBeInTheDocument();
    });

    test('renders key capabilities', () => {
      expect(screen.getByText(/JUnit 5:/i)).toBeInTheDocument();
      expect(screen.getByText(/TestNG 7:/i)).toBeInTheDocument();
      expect(screen.getByText(/POM:/i)).toBeInTheDocument();
      expect(screen.getByText(/@DataProvider:/i)).toBeInTheDocument();
      expect(screen.getByText(/Headless:/i)).toBeInTheDocument();
      expect(screen.getByText(/Driver Mgmt:/i)).toBeInTheDocument();
    });

    test('renders stat badges', () => {
      expect(screen.getByText(/^12 JUnit 5 tests$/i)).toBeInTheDocument();
      expect(screen.getByText(/^7\+ TestNG runs$/i)).toBeInTheDocument();
    });

    test('renders Page Object Model in Java section', () => {
      expect(screen.getByText(/Page Object Model in Java/i)).toBeInTheDocument();
      expect(screen.getByText(/Clean POM Architecture/i)).toBeInTheDocument();
      expect(screen.getByText(/TestNG @DataProvider Matrix/i)).toBeInTheDocument();
      expect(screen.getAllByText(/Allure Reporting/i)[0]).toBeInTheDocument();
    });

    test('renders JUnit and TestNG CTA buttons', () => {
      const junitLink = screen.getByRole('link', { name: /View JUnit Repo/i });
      expect(junitLink).toBeInTheDocument();
      expect(junitLink).toHaveAttribute(
        'href',
        'https://github.com/mcello23/selenium-java-example'
      );

      const testngLink = screen.getByRole('link', { name: /View TestNG Repo/i });
      expect(testngLink).toBeInTheDocument();
      expect(testngLink).toHaveAttribute(
        'href',
        'https://github.com/mcello23/selenium-java-testng-example'
      );
    });
  });

  describe('API & Performance Testing Section', () => {
    test('renders hero title', () => {
      expect(screen.getAllByText(/API & Performance Testing/i)[0]).toBeInTheDocument();
      expect(screen.getByText(/k6 • Supertest • Postman\/Newman/i)).toBeInTheDocument();
    });

    test('renders section card header', () => {
      expect(screen.getByText(/API & Performance Testing Repos/i)).toBeInTheDocument();
      expect(
        screen.getByText(
          /k6 load testing, Supertest API validation, and Postman\/Newman collections/i
        )
      ).toBeInTheDocument();
    });

    test('renders k6 Performance Testing card', () => {
      expect(screen.getAllByText(/Performance Testing/i)[0]).toBeInTheDocument();
      expect(screen.getByText(/k6 · JavaScript/i)).toBeInTheDocument();
      expect(screen.getByText(/Smoke:/i)).toBeInTheDocument();
      expect(screen.getByText(/Load:/i)).toBeInTheDocument();
      expect(screen.getByText(/Stress:/i)).toBeInTheDocument();
    });

    test('renders Supertest API Testing card', () => {
      expect(screen.getByText(/API Testing/i)).toBeInTheDocument();
      expect(screen.getByText(/Jest \+ Supertest/i)).toBeInTheDocument();
      expect(screen.getByText(/Validation:/i)).toBeInTheDocument();
    });

    test('renders Postman API Collections card', () => {
      expect(screen.getByText(/API Collections/i)).toBeInTheDocument();
      expect(screen.getByText(/Postman \/ Newman/i)).toBeInTheDocument();
      expect(screen.getByText(/Runner:/i)).toBeInTheDocument();
      expect(screen.getByText(/Collection:/i)).toBeInTheDocument();
    });

    test('renders k6-example-repo GitHub link', () => {
      const link = screen.getByRole('link', { name: /k6-example-repo/i });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', 'https://github.com/mcello23/k6-example-repo');
    });

    test('renders supertest-example-repo GitHub link', () => {
      const link = screen.getByRole('link', { name: /supertest-example-repo/i });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', 'https://github.com/mcello23/supertest-example-repo');
    });

    test('renders postman-example-repo GitHub link', () => {
      const link = screen.getByRole('link', { name: /postman-example-repo/i });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', 'https://github.com/mcello23/postman-example-repo');
    });
  });
});
