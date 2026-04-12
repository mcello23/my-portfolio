import { memo } from 'react';

const MoreArticlesCard = () => {
  return (
    <div className="col s12" style={{ marginTop: '24px' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px',
          flexWrap: 'wrap',
          padding: '32px 24px',
          textAlign: 'center',
        }}
      >
        <p className="grey-text" style={{ margin: 0, fontSize: '1.05rem', lineHeight: 1.6 }}>
          Follow for deep dives on modern testing, CI/CD, and test architecture.
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a
            className="btn waves-effect waves-light"
            style={{ background: '#008454' }}
            href="https://medium.com/@marcelocosta_72783"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-medium left" aria-hidden="true"></i>Medium
          </a>
          <a
            className="btn waves-effect waves-light"
            style={{ background: '#0a0a0a' }}
            href="https://dev.to/marcelo_sqe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-dev left" aria-hidden="true"></i>Dev.to
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(MoreArticlesCard);
