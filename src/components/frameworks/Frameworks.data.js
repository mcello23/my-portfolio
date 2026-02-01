export const frameworksData = [
  {
    id: 'playwright',
    title: '🎭 Advanced Playwright Testing',
    subtitle: 'Cross-browser • Visual Regression • API Validation',
    cardTitle: 'Identity Verification Platform',
    cardSubtitle: 'Enterprise-Grade E2E Testing with TypeScript',
    features: [
      {
        items: [
          { label: 'Auth', icon: 'security', text: 'OAuth2, SAML, JWT' },
          { label: 'Real-time', icon: 'bar_chart', text: 'WebSocket testing' },
          { label: 'Multi-persona', icon: 'theater_comedy', text: 'Role workflows' },
        ],
      },
      {
        items: [
          { label: 'i18n', icon: 'language', text: 'Unicode, RTL' },
          { label: 'Responsive', icon: 'smartphone', text: 'Mobile viewports' },
          { label: 'Test Data', icon: 'casino', text: 'Faker.js' },
        ],
      },
      {
        items: [
          { label: 'API', icon: 'public', text: 'REST & GraphQL' },
          { label: 'Visual AI', icon: 'photo_camera', text: 'Percy integration' },
          { label: 'Performance', icon: 'speed', text: 'Lighthouse' },
        ],
      },
      {
        items: [
          { label: 'Database', icon: 'storage', text: 'Direct queries' },
          { label: 'API-First', icon: 'api', text: 'Data validation' },
          { label: 'UI Validation', icon: 'check_circle', text: 'Visual checks' },
        ],
      },
    ],
    factoryPattern: {
      title: 'Test Data Factory Pattern',
      features: [
        {
          icon: 'data_object',
          title: 'Dynamic Generation',
          description: 'Realistic test data with Faker.js',
        },
        {
          icon: 'api',
          title: 'API-First Testing',
          description: 'Validates API before UI verification',
        },
        {
          icon: 'check_circle',
          title: 'UI Validation',
          description: 'Automated visual & data binding tests',
        },
      ],
    },
    cta: {
      href: 'https://github.com/mcello23/playwright-demonstration',
      text: 'Explore Repository',
      icon: 'code',
    },
  },
  {
    id: 'cypress',
    title: '🌿 Enterprise Cypress Testing',
    subtitle: 'BDD • GraphQL • Docker • CI/CD',
    cardTitle: 'KYB Platform Automation',
    cardSubtitle: 'Behavior-Driven Development with Real-World Integration',
    features: [
      {
        items: [
          { label: 'Documents', icon: 'description', text: 'e-signatures' },
          { label: 'User Mgmt', icon: 'groups', text: 'Bulk ops, roles' },
          { label: 'Regulatory', icon: 'gavel', text: 'KYB/KYC, AML' },
        ],
      },
      {
        items: [
          { label: 'Comms', icon: 'email', text: 'MailSlurp, Twilio' },
          { label: 'Financial', icon: 'attach_money', text: 'Payment processing' },
          { label: 'Test Data', icon: 'casino', text: 'Faker.js, Chance.js' },
        ],
      },
      {
        items: [
          { label: 'GraphQL & REST', icon: 'sync_alt', text: 'Hasura' },
          { label: 'Feature Flags', icon: 'flag', text: 'LaunchDarkly' },
          { label: 'Containerized', icon: 'dns', text: 'Docker' },
        ],
      },
      {
        items: [
          { label: 'Reporting', icon: 'insert_chart', text: 'Allure, dashboards' },
          { label: 'Real-time', icon: 'sync', text: 'Live data sync' },
          { label: 'Workflows', icon: 'account_tree', text: 'Complex flows' },
        ],
      },
    ],
    factoryPattern: {
      title: 'Behavior-Driven Development Pattern',
      features: [
        {
          icon: 'business_center',
          title: 'Gherkin Syntax',
          description: 'Business-readable scenarios',
        },
        {
          icon: 'sync',
          title: 'Real-Time Tests',
          description: 'GraphQL subscriptions testing',
        },
        {
          icon: 'account_tree',
          title: 'Complex Workflows',
          description: 'Multi-step registration flows',
        },
        {
          icon: 'verified_user',
          title: 'Living Docs',
          description: 'Auto-validated documentation',
        },
      ],
    },
    cta: {
      href: 'https://github.com/mcello23/cypress-automation-real-proj',
      text: 'View Enterprise Project',
      icon: 'integration_instructions',
    },
  },
  {
    id: 'identity',
    title: '🔐 Identity Platform Builder',
    subtitle: 'GitHub Actions • Docker • Nightly Testing',
    cardTitle: 'Enterprise Builder Platform',
    cardSubtitle: 'Advanced CI/CD with Automated Deployment Pipelines',
    features: [
      {
        items: [
          { label: 'Dynamic UI', icon: 'palette', text: 'Component libs' },
          { label: 'SDK Testing', icon: 'settings', text: 'Multi-language' },
        ],
      },
      {
        items: [
          { label: 'Cross-platform', icon: 'devices', text: 'Mobile, web' },
          { label: 'Integrations', icon: 'link', text: 'OAuth, CRM' },
        ],
      },
      {
        items: [
          { label: 'Test Data', icon: 'casino', text: 'Faker.js' },
          { label: 'Performance', icon: 'speed', text: 'Lighthouse CI' },
        ],
      },
      {
        items: [
          { label: 'Monitoring', icon: 'analytics', text: 'Dashboards' },
          { label: 'Reports', icon: 'assessment', text: 'Artifacts, diagnostics' },
        ],
      },
    ],
    factoryPattern: {
      title: 'CI/CD Pipeline Integration',
      features: [
        {
          icon: 'browser_updated',
          title: 'Matrix Testing',
          description: 'Parallel execution across browsers',
        },
        {
          icon: 'hub',
          title: 'Multi-Environment',
          description: 'Staging & production testing',
        },
        {
          icon: 'schedule',
          title: 'Auto Triggers',
          description: 'Push, PRs, scheduled runs',
        },
        {
          icon: 'precision_manufacturing',
          title: 'Matrix Builds',
          description: 'Parallel execution pipeline',
        },
      ],
    },
    cta: {
      href: 'https://github.com/mcello23/cypress-demonstration-repo',
      text: 'Explore CI/CD Pipeline',
      icon: 'auto_awesome',
    },
  },
];
