import { memo } from 'react';

const ArticleCard = ({ article }) => {
  return (
    <div className="col s12 m6 l4">
      <div className="card gradient-card" style={{ height: '100%' }}>
        <div className="card-image">
          <div
            style={{
              background: article.bannerGradient,
              padding: '60px 20px',
              textAlign: 'center',
            }}
          >
            <i
              className="material-icons"
              style={{ fontSize: '80px', color: '#fff' }}
              aria-hidden="true"
            >
              {article.bannerIcon}
            </i>
            <h5
              className="white-text"
              style={{ marginTop: '10px', fontWeight: 600, fontSize: '1.5rem' }}
            >
              {article.bannerTitle}
            </h5>
          </div>
        </div>
        <div className="card-content">
          <h5 style={{ fontWeight: 700, color: 'var(--ink)', fontSize: '1.2rem' }}>
            {article.title}
          </h5>
          <p className="grey-text" style={{ margin: '15px 0', lineHeight: 1.7 }}>
            {article.summary}
          </p>
          <div style={{ marginTop: '15px' }}>
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className="skill-tag"
                style={{
                  fontSize: '0.75rem',
                  padding: '5px 12px',
                  background: tag.color,
                }}
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        <div className="card-action">
          <a
            className={`btn waves-effect waves-light ${article.id === 1 ? 'teal' : ''}`}
            style={article.linkStyle}
            href={article.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`${article.linkIcon} left`} aria-hidden="true"></i>
            {article.linkText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(ArticleCard);
