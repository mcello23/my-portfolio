const THEMES = {
  'ai-testplan': {
    accent: '#00897b',
    accentSoft: 'rgba(0, 137, 123, 0.08)',
    accentLine: 'rgba(0, 137, 123, 0.2)',
    accentShadow: 'rgba(0, 137, 123, 0.18)',
    accentLight: '#4db6ac',
    icon: 'psychology',
  },
  'music-downloader': {
    accent: '#c62828',
    accentSoft: 'rgba(198, 40, 40, 0.08)',
    accentLine: 'rgba(198, 40, 40, 0.2)',
    accentShadow: 'rgba(198, 40, 40, 0.18)',
    accentLight: '#ff5252',
    icon: 'music_note',
  },
  'doom-game': {
    accent: '#e65100',
    accentSoft: 'rgba(230, 81, 0, 0.08)',
    accentLine: 'rgba(230, 81, 0, 0.2)',
    accentShadow: 'rgba(230, 81, 0, 0.18)',
    accentLight: '#ff9100',
    icon: 'sports_esports',
  },
  'chatbot-testing': {
    accent: '#1565c0',
    accentSoft: 'rgba(21, 101, 192, 0.08)',
    accentLine: 'rgba(21, 101, 192, 0.2)',
    accentShadow: 'rgba(21, 101, 192, 0.18)',
    accentLight: '#42a5f5',
    icon: 'chat',
  },
};

const SideProjectCard = ({ project }) => {
  const { id, cardTitle, cardSubtitle, stats, factoryPattern, cta } = project;
  const theme = THEMES[id] || THEMES['ai-testplan'];

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

        {/* Highlights */}
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
        </div>
      </div>
    </article>
  );
};

export default SideProjectCard;
