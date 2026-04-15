const THEMES = {
  playwright: {
    accent: '#6a1b9a',
    accentSoft: 'rgba(106, 27, 154, 0.08)',
    accentLine: 'rgba(106, 27, 154, 0.2)',
    accentShadow: 'rgba(106, 27, 154, 0.18)',
    accentLight: '#9c4dcc',
    icon: 'theaters',
  },
  cypress: {
    accent: '#2e7d32',
    accentSoft: 'rgba(46, 125, 50, 0.08)',
    accentLine: 'rgba(46, 125, 50, 0.2)',
    accentShadow: 'rgba(46, 125, 50, 0.18)',
    accentLight: '#60ad5e',
    icon: 'eco',
  },
  selenium: {
    accent: '#c62828',
    accentSoft: 'rgba(198, 40, 40, 0.08)',
    accentLine: 'rgba(198, 40, 40, 0.2)',
    accentShadow: 'rgba(198, 40, 40, 0.18)',
    accentLight: '#ff5f52',
    icon: 'science',
  },
};

const FrameworkCard = ({ framework }) => {
  const { id, cardTitle, cardSubtitle, stats, factoryPattern, cta, report } = framework;
  const theme = THEMES[id] || THEMES.playwright;

  const vars = {
    '--fw-accent': theme.accent,
    '--fw-accent-soft': theme.accentSoft,
    '--fw-accent-line': theme.accentLine,
    '--fw-accent-shadow': theme.accentShadow,
    '--fw-accent-light': theme.accentLight,
  };

  const highlights = factoryPattern.features.slice(0, 6);
  const topStats = stats.slice(0, 3);

  return (
    <article className="fw-card" style={vars}>
      <div className="fw-card__accent" />
      <div className="fw-card__body">
        {/* Identity */}
        <div className="fw-card__identity">
          <div className="fw-card__icon-row">
            <span className="fw-card__logo">
              <i className="material-icons">{theme.icon}</i>
            </span>
            <div>
              <h3 className="fw-card__title">{cardTitle}</h3>
              <p className="fw-card__subtitle">{cardSubtitle}</p>
            </div>
          </div>
          <div className="fw-card__stats">
            {topStats.map((stat, i) => (
              <span key={i} className="fw-card__stat">
                {stat}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights — visual tile: icon + title */}
        <div className="fw-card__highlights">
          {highlights.map((h, i) => (
            <div key={i} className="fw-card__highlight">
              <span className="fw-card__highlight-icon">
                <i className="material-icons">{h.icon}</i>
              </span>
              <strong className="fw-card__highlight-label">{h.title}</strong>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="fw-card__actions">
          <a
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="fw-card__cta fw-card__cta--primary"
          >
            <i className="material-icons">{cta.icon}</i>
            {cta.text}
          </a>
          {report && (
            <a
              href={report.href}
              target="_blank"
              rel="noopener noreferrer"
              className="fw-card__cta fw-card__cta--secondary"
            >
              <i className="material-icons">{report.icon}</i>
              {report.text}
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default FrameworkCard;
