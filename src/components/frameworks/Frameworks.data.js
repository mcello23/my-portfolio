export const frameworksData = [
  {
    id: 'playwright',
    title: '🎭 Playwright Testing',
    subtitle: 'TypeScript • Chromium • Firefox • Multi-Browser',
    cardTitle: 'E2E Automation with Playwright',
    cardSubtitle: 'TypeScript-first, cross-browser test suite targeting saucedemo.com',
    stats: ['29 tests', '2 browsers', '58 CI runs', 'TypeScript 5', 'Playwright 1.55'],
    features: [
      {
        items: [
          { label: 'Stack', icon: 'code', text: 'TypeScript 5 + Playwright 1.55' },
          { label: 'Browsers', icon: 'devices', text: 'Chromium & Firefox in parallel' },
          { label: 'Target', icon: 'language', text: 'saucedemo.com (e-commerce demo)' },
        ],
      },
      {
        items: [
          { label: 'Login', icon: 'lock', text: '5 flows — valid, locked-out, invalid creds' },
          { label: 'Inventory', icon: 'inventory', text: 'Sort by name & price, product detail' },
          { label: 'Cart', icon: 'shopping_cart', text: 'Add multiple items, badge count, remove' },
        ],
      },
      {
        items: [
          {
            label: 'Checkout',
            icon: 'receipt_long',
            text: 'Info form, confirm page, error states',
          },
          { label: 'Parallel', icon: 'blur_on', text: '29 tests × 2 browsers = 58 CI runs' },
          { label: 'Retries', icon: 'replay', text: 'Traces & screenshots on first failure' },
        ],
      },
      {
        items: [
          { label: 'Test Data', icon: 'storage', text: 'Centralized via src/test-data.ts' },
          { label: 'Reports', icon: 'assessment', text: 'HTML report auto-published to Pages' },
          { label: 'CI/CD', icon: 'sync_alt', text: 'GitHub Actions on push & PR' },
        ],
      },
    ],
    factoryPattern: {
      title: 'Multi-Browser Execution Strategy',
      features: [
        {
          icon: 'blur_on',
          title: 'True Parallelism',
          description:
            'Chromium and Firefox run simultaneously — every push executes 58 test instances',
        },
        {
          icon: 'replay',
          title: 'Automatic Trace Capture',
          description: 'On first retry, full HAR trace + screenshot is saved as a CI artifact',
        },
        {
          icon: 'storage',
          title: 'Centralised Fixtures',
          description:
            'All test credentials live in src/test-data.ts — one place to update, everywhere reflected',
        },
      ],
    },
    cta: {
      href: 'https://github.com/mcello23/playwright-example',
      text: 'View on GitHub',
      icon: 'code',
    },
  },
  {
    id: 'cypress',
    title: '🌿 Cypress Testing',
    subtitle: 'TypeScript • BDD/Gherkin • Mochawesome • Allure',
    cardTitle: 'E2E Automation with Cypress',
    cardSubtitle: 'Two repos, two styles — TypeScript spec-based and Cucumber BDD',
    stats: ['28 TS tests', '27 BDD scenarios', '2 repos', 'Cypress 14', 'Node 24 LTS'],
    features: [
      {
        items: [
          { label: 'TS Repo', icon: 'code', text: 'TypeScript 5 + Cypress 14' },
          { label: 'BDD Repo', icon: 'eco', text: 'JavaScript + Cypress + Cucumber' },
          { label: 'Node', icon: 'terminal', text: 'Node 24 LTS, ESBuild bundler' },
        ],
      },
      {
        items: [
          { label: 'Login', icon: 'lock', text: 'cy.login() custom command, 5 user types' },
          { label: 'Inventory', icon: 'inventory', text: 'Sort A–Z / Z–A / price, detail pages' },
          { label: 'Cart', icon: 'shopping_cart', text: 'Multi-item add/remove, state checks' },
        ],
      },
      {
        items: [
          { label: 'Checkout', icon: 'receipt_long', text: 'Full purchase flow + error states' },
          { label: 'Gherkin', icon: 'description', text: 'Feature files for every user journey' },
          { label: 'Scenarios', icon: 'fact_check', text: '27 BDD + 28 TypeScript across 5 specs' },
        ],
      },
      {
        items: [
          { label: 'TS Reports', icon: 'assessment', text: 'Mochawesome HTML + screenshots' },
          { label: 'BDD Reports', icon: 'insert_chart', text: 'Allure HTML on GitHub Pages' },
          { label: 'CI/CD', icon: 'sync_alt', text: 'Videos & artifacts uploaded per run' },
        ],
      },
    ],
    factoryPattern: {
      title: 'Dual-Approach Cypress Suite',
      features: [
        {
          icon: 'code',
          title: 'TypeScript Spec Style',
          description:
            'Typed fixtures, a reusable cy.login() command, and Mochawesome HTML reports with embedded failure screenshots',
        },
        {
          icon: 'eco',
          title: 'BDD / Gherkin Style',
          description:
            'Plain-English .feature files paired with JavaScript step definitions — 27 scenarios covering login, inventory, cart, and checkout',
        },
        {
          icon: 'sync_alt',
          title: 'Full CI/CD on Both',
          description:
            'GitHub Actions runs both repos on every push and PR, deploying updated reports to GitHub Pages automatically',
        },
      ],
    },
    cta: {
      href: 'https://github.com/mcello23/cypress-typescript-example',
      text: 'View TypeScript Repo',
      icon: 'code',
    },
    secondaryCta: {
      href: 'https://github.com/mcello23/cypress-with-cucumber-example',
      text: 'View BDD Repo',
      icon: 'eco',
    },
  },
  {
    id: 'selenium',
    title: '🔬 Selenium Testing',
    subtitle: 'Java 17 • JUnit 5 • TestNG 7 • Page Object Model',
    cardTitle: 'E2E Automation with Selenium',
    cardSubtitle:
      'Classic POM pattern in Java — one repo per test runner, both with Allure reporting',
    stats: ['12 JUnit 5 tests', '7+ TestNG runs', '2 repos', 'Java 17', 'Selenium WebDriver 4'],
    features: [
      {
        items: [
          { label: 'Language', icon: 'local_cafe', text: 'Java 17' },
          { label: 'WebDriver', icon: 'web', text: 'Selenium WebDriver 4' },
          { label: 'Build', icon: 'build', text: 'Maven 3 + Surefire plugin' },
        ],
      },
      {
        items: [
          { label: 'JUnit 5', icon: 'fact_check', text: '8 login tests + 4 checkout tests' },
          { label: 'TestNG 7', icon: 'grid_view', text: '7 parameterised login invocations' },
          { label: 'E2E', icon: 'shopping_cart', text: '2-item cart, sort, order confirm' },
        ],
      },
      {
        items: [
          { label: 'POM', icon: 'layers', text: 'BasePage → LoginPage → CheckoutPage' },
          { label: '@DataProvider', icon: 'table_chart', text: 'All 5 saucedemo user accounts' },
          {
            label: 'Headless',
            icon: 'visibility_off',
            text: 'Chrome headless via -Dheadless flag',
          },
        ],
      },
      {
        items: [
          { label: 'Driver Mgmt', icon: 'settings', text: 'WebDriverManager (auto chromedriver)' },
          { label: 'Reports', icon: 'assessment', text: 'Allure HTML auto-deployed to Pages' },
          { label: 'CI/CD', icon: 'sync_alt', text: 'GitHub Actions on push & PR' },
        ],
      },
    ],
    factoryPattern: {
      title: 'Page Object Model in Java',
      features: [
        {
          icon: 'layers',
          title: 'Clean POM Architecture',
          description:
            'Five page classes (BasePage, LoginPage, ProductsPage, CartPage, CheckoutPage) keep selectors and actions strictly separated from test logic',
        },
        {
          icon: 'grid_view',
          title: 'TestNG @DataProvider Matrix',
          description:
            'One parameterised test covers all 5 saucedemo accounts — valid users, locked-out, and invalid passwords in a single data-driven run',
        },
        {
          icon: 'assessment',
          title: 'Allure Reporting',
          description:
            'Step-by-step HTML test results generated by Maven and automatically deployed to GitHub Pages on every merge to main',
        },
      ],
    },
    cta: {
      href: 'https://github.com/mcello23/selenium-java-example',
      text: 'View JUnit Repo',
      icon: 'code',
    },
    secondaryCta: {
      href: 'https://github.com/mcello23/selenium-java-testng-example',
      text: 'View TestNG Repo',
      icon: 'grid_view',
    },
  },
];
