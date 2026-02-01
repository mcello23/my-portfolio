import { memo } from 'react';

const MoreArticlesCard = () => {
  return (
    <div className="col s12 m6 l4">
      <div
        className="card gradient-card"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        }}
      >
        <div className="card-content center-align">
          <i
            className="material-icons"
            style={{ fontSize: '100px', color: '#667eea', marginBottom: '20px' }}
            aria-hidden="true"
          >
            article
          </i>
          <h5 style={{ fontWeight: 700, color: 'var(--ink)' }}>More Articles Coming Soon</h5>
          <p className="grey-text" style={{ margin: '15px 0', lineHeight: 1.7 }}>
            Follow for deep dives on modern testing, CI/CD, and test architecture.
          </p>
          <div style={{ marginTop: '15px' }}>
            <a
              className="btn waves-effect waves-light"
              style={{ background: '#008454', margin: '5px', display: 'inline-block' }}
              href="https://medium.com/@marcelocosta_72783"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-medium left" aria-hidden="true"></i>Medium
            </a>
            <a
              className="btn waves-effect waves-light"
              style={{ background: '#0a0a0a', margin: '5px', display: 'inline-block' }}
              href="https://dev.to/marcelo_sqe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-dev left" aria-hidden="true"></i>Dev.to
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(MoreArticlesCard);
