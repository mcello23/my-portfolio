# Marcelo Costa – QA / SDET Portfolio

[![CI Pipeline](https://github.com/mcello23/webpage/actions/workflows/ci.yml/badge.svg)](https://github.com/mcello23/webpage/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/react-v19.2.4-61dafb.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/vite-v7.3.1-646cff.svg)](https://vitejs.dev/)

A modern, performance-oriented, and accessibility-aware portfolio showcasing large-scale E2E automation, test architecture, and delivery impact.

## Live Page

**[www.marcelo-costa.com](https://www.marcelo-costa.com/)**

---

## Project Evolution: From Static to React

This project evolved from a traditional static HTML/CSS/JS website into a modern **React application**.

- **Legacy**: Originally built with direct DOM manipulation, jQuery, and Materialize CSS.
- **Modernization**: Migrated to **React 19** using **Vite** for lightning-fast builds and **React Router v7** for client-side routing.
- **Hybrid Approach**: While the core architecture is React, some legacy Materialize styling is preserved to maintain the original design language.

---

## Pages & Routes

The application has three routes managed by React Router v7:

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, Skills, Experience, Articles, and Contact sections |
| `/side-projects` | Side Projects | Showcase of personal projects (AI tools, Python, games) |
| `/frameworks` | Frameworks | Deep-dive into testing framework setups and automation repos |

### Home Page Sections

- **Hero** – Introduction, headshot, and key CTAs (Calendly booking, Certificates modal)
- **Skills** – Technical skills grouped by category (Languages, Testing, CI/CD, Cloud, APIs)
- **Experience** – Work history timeline
- **Articles** – Featured blog posts from Dev.to
- **Contact** – Web3Forms-powered contact form with validation
- **Footer** – Links and social contacts

### Side Projects Page

Personal projects outside of professional work:

- **AI Test Plan Generator** – GPT-4 powered CLI + Web UI built with TypeScript
- **Python Music Downloader** – YouTube-to-MP3 converter using yt-dlp and FFmpeg
- **Doom Game in Python** – 3D raycasting engine built with PyGame

### Frameworks Page

Hands-on automation framework showcases, each linking to a dedicated GitHub repository:

- **Playwright TypeScript** – Multi-browser testing (Chromium + Firefox) with CI/CD integration
- **Cypress TypeScript** – 28 tests across 5 specs with Mochawesome reports
- **Cypress BDD** – Cucumber/Gherkin feature files with Allure reports
- **Selenium JUnit** – Java 17, Page Object Model, Allure reporting
- **Selenium TestNG** – `@DataProvider` matrix testing across 5 user accounts
- **Advanced Testing section** – API testing and k6 load testing examples

---

## Live Test Dashboard & Gist Integration

One of the unique features of this portfolio is the **Live Test Dashboard** (accessible via the FAB button on the homepage).

- **Real-time Data**: The website displays *actual* test results from the latest CI run.
- **How it works**:
  1. **GitHub Actions** runs the test suite (Jest & k6) on every push to `main`.
  2. Results are processed and uploaded to a **GitHub Gist** as a JSON payload.
  3. The live website fetches this Gist to display:
     - **Jest Results**: Pass/fail counts and coverage metrics.
     - **k6 Performance**: Request rates, P95 latency, and throughput.
  4. **Fallback**: If the Gist fetch fails, it gracefully falls back to a static snapshot.

---

## Technology Stack

### Frontend Core

- **React 19.2.4**: Component-based UI architecture with functional components and hooks.
- **React Router DOM 7.13.0**: Client-side routing for the three-page application.
- **Vite 7.3.1**: Build tool with CSS code splitting and manual chunk optimization.
- **Materialize CSS**: Responsive grid and styling (legacy integration).
- **Font Awesome 5.15.1**: Iconography.
- **Prism.js**: Code syntax highlighting used in the Frameworks page.

### Testing Strategy

This project employs a **Testing Pyramid** approach:

1. **Unit & Integration (Jest + React Testing Library)**
   - Validates components, accessibility (A11y), data integrity (certificates, links).
   - Coverage thresholds: 50% lines/statements, 40% branches, 35% functions.
   - *Command:* `yarn test`

2. **End-to-End (Puppeteer)**
   - Simulates real user interactions in headless Chrome.
   - Includes a realistic human-simulation test script.
   - *Command:* `yarn test:puppeteer`

3. **Performance (k6)**
   - Load testing with ramping arrival rate scenarios.
   - Measures latency, throughput, and error rates.
   - *Command:* `yarn test:k6`

4. **Lighthouse CI**
   - Runs automated audits against all three routes (`/`, `/side-projects`, `/frameworks`).
   - Minimum thresholds: Performance ≥ 0.8, Accessibility ≥ 0.9, SEO ≥ 0.9.
   - Configured in `lighthouserc.js`.

### CI/CD & Infrastructure

- **GitHub Actions**: Four-stage automated pipeline — Lint → Test → Deploy → Lighthouse.
- **Cloudflare Pages**: High-performance edge hosting (project: `marcelocosta`).
- **Wrangler 4.61.1**: CLI tool for Cloudflare Pages deployments.
- **GitHub Gist**: Lightweight "database" for storing the latest test metrics.
- **Dependabot**: Weekly automated dependency updates (max 5 open PRs).
- **Calendly**: Integration for scheduling calls (Navbar and Footer).
- **Google Analytics**: Page-view and event tracking via `gtag`.
- **Web3Forms**: Backend-free contact form submission service.

#### Secure Deployment Pipeline

The `deploy` job has a hard dependency on the `test` job (`needs: [test]`).

- **If tests fail**: The pipeline stops — no broken code is ever deployed.
- **If tests pass**: The site is built, CSP headers are generated, and deployed to Cloudflare Pages.

Required secrets: `VITE_WEB3FORMS_KEY`, `VITE_GIST_USERNAME`, `VITE_GIST_ID`, `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, `GIST_TOKEN`.

---

## Security & Performance

### Security Headers

Implemented via Cloudflare's `_headers` configuration and generated by `scripts/generate-csp-headers.js`:

- **Content-Security-Policy (CSP)**: Restricts sources for scripts, styles, and images to prevent XSS.
- **Strict-Transport-Security (HSTS)**: Enforces HTTPS connections.
- **X-Frame-Options**: Prevents clickjacking (`DENY`).
- **X-Content-Type-Options**: Prevents MIME-type sniffing.
- **Permissions-Policy**: Disables unused browser features (camera, microphone, geolocation).

### Quality Assurance (Husky & Lint-Staged)

Code quality is enforced *before* commits reach the repository using **Husky** git hooks.

- **Pre-commit Hook**: Runs `lint-staged` on changed files only.
  - JS/JSX: ESLint + Prettier
  - CSS: Stylelint + Prettier
  - JSON/HTML: Prettier

---

## Project Structure

```
├── .github/
│   ├── workflows/ci.yml         # Four-stage CI/CD pipeline
│   └── dependabot.yml           # Automated dependency updates
├── public/
│   ├── js/                      # Legacy JavaScript (Materialize, Prism, gtag)
│   ├── images/                  # Static images and thumbnails
│   ├── favicon/                 # Favicon assets
│   ├── _headers                 # Cloudflare security & cache headers
│   ├── _redirects               # URL redirect rules
│   ├── robots.txt
│   └── sitemap.xml
├── scripts/
│   ├── generate-csp-headers.js  # Generates CSP header hashes post-build
│   ├── generate-test-data.js    # Parses Jest/k6 results into public/test-data.js
│   ├── prepare-cloudflare-build.js
│   └── test-csp-server.js       # Local CSP testing server
├── src/
│   ├── App.jsx                  # Root component with React Router routes
│   ├── main.jsx                 # React DOM entry point
│   ├── index.css                # Global styles
│   ├── components/
│   │   ├── Hero.jsx             # Landing hero section
│   │   ├── Navbar.jsx           # Responsive navigation bar
│   │   ├── Skills.jsx           # Skills section
│   │   ├── Experience.jsx       # Work experience timeline
│   │   ├── Articles.jsx         # Featured Dev.to articles
│   │   ├── Contact.jsx          # Web3Forms contact form
│   │   ├── Footer.jsx           # Footer with links
│   │   ├── CertificatesModal.jsx   # Lazy-loaded certificates gallery
│   │   ├── TestDashboardModal.jsx  # Lazy-loaded test results dashboard
│   │   ├── CookieConsent.jsx    # Cookie consent banner
│   │   ├── ErrorBoundary.jsx    # React error boundary
│   │   ├── Loading.jsx          # Loading spinner
│   │   ├── Frameworks.jsx       # /frameworks route page
│   │   ├── SideProjects.jsx     # /side-projects route page
│   │   ├── articles/
│   │   │   ├── ArticleCard.jsx
│   │   │   └── MoreArticlesCard.jsx
│   │   ├── common/
│   │   │   └── SkillTag.jsx     # Reusable skill tag
│   │   ├── frameworks/
│   │   │   ├── Frameworks.data.js   # Framework definitions (5 frameworks)
│   │   │   ├── FrameworkCard.jsx
│   │   │   ├── FrameworkHero.jsx
│   │   │   ├── AdvancedTesting.jsx  # API & k6 testing section
│   │   │   └── ComingSoonHero.jsx   # Placeholder for future sections
│   │   ├── hooks/
│   │   │   ├── useFetch.jsx     # Generic data fetching hook
│   │   │   ├── useFocusTrap.jsx # Accessibility focus trap for modals
│   │   │   ├── useKeyPress.jsx  # Keyboard event handler
│   │   │   └── useModal.jsx     # Modal open/close state
│   │   ├── sideprojects/
│   │   │   ├── SideProjects.data.js # Project definitions (3 projects)
│   │   │   └── SideProjectCard.jsx
│   │   └── skills/
│   │       ├── skillsData.jsx   # Skills grouped by category
│   │       ├── SkillCategory.jsx
│   │       └── SkillIcon.jsx
│   ├── data/
│   │   ├── articles.js          # Featured Dev.to article metadata
│   │   └── certificates.js      # 25+ professional certificates
│   ├── styles/                  # CSS files per feature area
│   └── utils/
│       └── env.js               # Environment variable helpers
├── tests/
│   ├── jest/                    # Unit/integration tests (13 test files)
│   ├── k6/                      # Performance load tests
│   └── puppeteer/               # Browser automation E2E tests
├── lighthouserc.js              # Lighthouse CI thresholds
├── vite.config.js               # Vite build configuration
├── jest.config.js               # Jest + SWC configuration
└── package.json                 # Dependencies and scripts
```

---

## Getting Started

### Prerequisites

- Node.js >= 22.20.0
- Yarn >= 4.0.0

### Installation

```bash
# Clone the repository
git clone https://github.com/mcello23/webpage.git

# Install dependencies
yarn install
```

### Development

```bash
# Start local dev server (port 3000)
yarn dev

# Preview production build locally
yarn preview
```

### Running Tests

```bash
# Unit & Integration tests with coverage
yarn test

# E2E browser tests (Puppeteer)
yarn test:puppeteer

# Performance load tests (requires k6 installed globally)
yarn test:k6

# Run all test suites
yarn test:all
```

### Quality Checks

```bash
# Check linting and formatting
yarn quality

# Auto-fix all linting and formatting issues
yarn quality:fix
```

---

## Dependencies

### Production

- `react`, `react-dom` – Core UI library (v19.2.4).
- `react-router-dom` – Client-side routing (v7.13.0).

### Development

- **Build**: `vite`, `@vitejs/plugin-react`
- **Testing**: `jest`, `@testing-library/react`, `puppeteer`, `jsdom`, `@swc/jest`
- **Linting**: `eslint`, `prettier`, `stylelint`, `husky`, `lint-staged`
- **Deployment**: `wrangler` (Cloudflare Pages CLI)

---

## Third-Party Services

| Service | Purpose |
|---------|---------|
| **Cloudflare Pages** | Edge hosting and DNS |
| **GitHub Actions** | CI/CD automation |
| **GitHub Gist** | Test metrics storage |
| **Dependabot** | Automated dependency updates |
| **Calendly** | "Book a 15-min call" integration |
| **Web3Forms** | Contact form backend |
| **Google Analytics** | Page-view and event tracking |
