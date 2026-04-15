const apiRepos = [
  {
    id: 'k6',
    icon: 'trending_up',
    accent: '#6a1b9a',
    accentSoft: 'rgba(106, 27, 154, 0.08)',
    accentLine: 'rgba(106, 27, 154, 0.2)',
    accentShadow: 'rgba(106, 27, 154, 0.18)',
    accentLight: '#9c4dcc',
    title: 'k6',
    subtitle: 'Performance & Load Testing',
    stats: ['3 suites', '13 endpoints', '90 VUs'],
    items: [
      { icon: 'smoking_rooms', label: 'Smoke' },
      { icon: 'group', label: 'Load' },
      { icon: 'bolt', label: 'Stress' },
      { icon: 'sync_alt', label: 'CI/CD' },
    ],
    repo: { href: 'https://github.com/mcello23/k6-example-repo' },
    report: { href: 'https://mcello23.github.io/k6-example-repo/' },
  },
  {
    id: 'supertest',
    icon: 'api',
    accent: '#1565c0',
    accentSoft: 'rgba(21, 101, 192, 0.08)',
    accentLine: 'rgba(21, 101, 192, 0.2)',
    accentShadow: 'rgba(21, 101, 192, 0.18)',
    accentLight: '#5e92f3',
    title: 'Jest + Supertest',
    subtitle: 'API Testing',
    stats: ['12 tests', '3 services', 'schema validation'],
    items: [
      { icon: 'schema', label: 'Validation' },
      { icon: 'fact_check', label: 'Coverage' },
      { icon: 'code', label: 'Stack' },
      { icon: 'verified', label: 'Contracts' },
    ],
    repo: { href: 'https://github.com/mcello23/supertest-example-repo' },
    report: { href: 'https://mcello23.github.io/supertest-example-repo/' },
  },
  {
    id: 'postman',
    icon: 'send',
    accent: '#e65100',
    accentSoft: 'rgba(230, 81, 0, 0.08)',
    accentLine: 'rgba(230, 81, 0, 0.2)',
    accentShadow: 'rgba(230, 81, 0, 0.18)',
    accentLight: '#ff9e40',
    title: 'Postman / Newman',
    subtitle: 'API Collections',
    stats: ['1 collection', 'JUnit + HTML', 'fail-fast CI'],
    items: [
      { icon: 'code', label: 'Runner' },
      { icon: 'description', label: 'Collection' },
      { icon: 'receipt_long', label: 'Reports' },
      { icon: 'settings', label: 'Env Overrides' },
    ],
    repo: { href: 'https://github.com/mcello23/postman-example-repo' },
    report: { href: 'https://mcello23.github.io/postman-example-repo/' },
  },
];

const apiTargets = [
  { icon: 'pets', name: 'Dog API', href: 'https://dog.ceo/dog-api/' },
  { icon: 'emoji_emotions', name: 'EmojiHub', href: 'https://github.com/cheatsnake/emojihub' },
  { icon: 'museum', name: 'Art Institute', href: 'https://api.artic.edu/docs/' },
];

const AdvancedTesting = () => {
  return (
    <div className="container">
      {/* Shared endpoints card */}
      <div className="fw-api-endpoints">
        <span className="fw-card__targets-label">Endpoints Tested</span>
        <div className="fw-api-endpoints__list">
          {apiTargets.map((t, i) => (
            <a
              key={i}
              href={t.href}
              target="_blank"
              rel="noopener noreferrer"
              className="fw-api-endpoints__badge"
            >
              <i className="material-icons">{t.icon}</i>
              {t.name}
            </a>
          ))}
        </div>
      </div>

      <div className="fw-api-grid">
        {apiRepos.map((repo) => {
          const vars = {
            '--fw-accent': repo.accent,
            '--fw-accent-soft': repo.accentSoft,
            '--fw-accent-line': repo.accentLine,
            '--fw-accent-shadow': repo.accentShadow,
            '--fw-accent-light': repo.accentLight,
          };
          return (
            <article key={repo.id} className="fw-api-card" style={vars}>
              <div className="fw-api-card__accent" />
              <div className="fw-api-card__body">
                <div className="fw-api-card__header">
                  <span className="fw-api-card__header-icon">
                    <i className="material-icons">{repo.icon}</i>
                  </span>
                  <div>
                    <h4 className="fw-api-card__title">{repo.title}</h4>
                    <p className="fw-api-card__subtitle">{repo.subtitle}</p>
                  </div>
                </div>

                <div className="fw-api-card__stats">
                  {repo.stats.map((s, i) => (
                    <span key={i} className="fw-api-card__stat">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="fw-api-card__tiles">
                  {repo.items.map((item, i) => (
                    <div key={i} className="fw-api-card__tile">
                      <span className="fw-api-card__tile-icon">
                        <i className="material-icons">{item.icon}</i>
                      </span>
                      <span className="fw-api-card__tile-label">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="fw-api-card__actions">
                  <a
                    href={repo.repo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fw-card__cta fw-card__cta--primary fw-api-card__cta"
                  >
                    <i className="material-icons">code</i>
                    View on GitHub
                  </a>
                  {repo.report && (
                    <a
                      href={repo.report.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fw-card__cta fw-card__cta--secondary fw-api-card__cta"
                    >
                      <i className="material-icons">assessment</i>
                      Live Report
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default AdvancedTesting;
