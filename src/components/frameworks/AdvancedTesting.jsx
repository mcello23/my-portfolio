const apiRepos = [
  {
    id: 'k6',
    icon: 'trending_up',
    color: '#6a1b9a',
    lightBg: 'linear-gradient(135deg, #f3e5f5 0%, #ce93d8 100%)',
    borderColor: '#ab47bc',
    shadowColor: 'rgba(171, 71, 188, 0.15)',
    textClass: 'purple-text text-darken-2',
    iconClass: 'purple-text',
    title: 'Performance & Load Testing',
    subtitle: 'k6 · JavaScript',
    stats: ['3 test suites', '13 endpoints', 'up to 90 VUs'],
    items: [
      {
        icon: 'smoking_rooms',
        label: 'Smoke',
        text: '3 VUs — walk every happy-path endpoint with response-shape checks',
      },
      {
        icon: 'group',
        label: 'Load',
        text: 'Up to 18 VUs — sustained traffic validation over ~90 s',
      },
      {
        icon: 'bolt',
        label: 'Stress',
        text: 'Up to 90 VUs — degrade-under-load testing over ~60 s',
      },
      {
        icon: 'public',
        label: 'APIs tested',
        text: 'Dog API v2 · EmojiHub · Art Institute of Chicago',
      },
    ],
    repo: {
      name: 'k6-example-repo',
      href: 'https://github.com/mcello23/k6-example-repo',
      tech: 'JavaScript · k6 · Smoke / Load / Stress · JSON + HTML Reports',
    },
  },
  {
    id: 'supertest',
    icon: 'api',
    color: '#1565c0',
    lightBg: 'linear-gradient(135deg, #e3f2fd 0%, #90caf9 100%)',
    borderColor: '#1e88e5',
    shadowColor: 'rgba(30, 136, 229, 0.15)',
    textClass: 'blue-text text-darken-2',
    iconClass: 'blue-text',
    title: 'API Testing',
    subtitle: 'Jest + Supertest · JavaScript',
    stats: ['12 tests', '3 services', 'schema validation'],
    items: [
      {
        icon: 'code',
        label: 'Stack',
        text: 'JavaScript · Jest · Supertest · Node.js',
      },
      {
        icon: 'schema',
        label: 'Validation',
        text: 'JSON schema contracts — shape & type checked on every response',
      },
      {
        icon: 'fact_check',
        label: 'Coverage',
        text: '12 tests covering documented read-only endpoints',
      },
      {
        icon: 'public',
        label: 'APIs tested',
        text: 'Dog API v2 · EmojiHub · Art Institute of Chicago',
      },
    ],
    repo: {
      name: 'supertest-example-repo',
      href: 'https://github.com/mcello23/supertest-example-repo',
      tech: 'JavaScript · Jest · Supertest · Schema Validation · HTML Reports',
    },
  },
  {
    id: 'postman',
    icon: 'send',
    color: '#e65100',
    lightBg: 'linear-gradient(135deg, #fff3e0 0%, #ffcc80 100%)',
    borderColor: '#ff9800',
    shadowColor: 'rgba(255, 152, 0, 0.15)',
    textClass: 'orange-text text-darken-3',
    iconClass: 'orange-text text-darken-1',
    title: 'API Collections',
    subtitle: 'Postman / Newman · JavaScript',
    stats: ['1 collection', 'CLI + JUnit + HTML', 'fail-fast CI mode'],
    items: [
      {
        icon: 'code',
        label: 'Runner',
        text: 'Newman CLI (Node.js) — runs the Postman collection headlessly',
      },
      {
        icon: 'description',
        label: 'Collection',
        text: 'Single Postman JSON collection with env variable overrides',
      },
      {
        icon: 'receipt_long',
        label: 'Reports',
        text: 'CLI summary, JUnit XML, and full HTML report per run',
      },
      {
        icon: 'public',
        label: 'APIs tested',
        text: 'Dog API v2 · EmojiHub · Art Institute of Chicago',
      },
    ],
    repo: {
      name: 'postman-example-repo',
      href: 'https://github.com/mcello23/postman-example-repo',
      tech: 'JavaScript · Newman · Postman Collections · JUnit + HTML Reports',
    },
  },
];

const AdvancedTesting = () => {
  return (
    <div className="container" style={{ padding: '80px 0' }}>
      <div className="row">
        <div className="col s12">
          <div
            className="card"
            style={{
              background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)',
              borderRadius: '15px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.12)',
            }}
          >
            <div className="card-content" style={{ padding: '40px 30px' }}>
              <div className="center-align" style={{ marginBottom: '40px' }}>
                <h5 className="purple-text text-darken-3" style={{ marginBottom: '10px' }}>
                  <i
                    className="material-icons"
                    style={{ verticalAlign: 'middle', fontSize: '36px' }}
                  >
                    science
                  </i>
                  <b> API & Performance Testing Repos</b>
                </h5>
                <p className="flow-text grey-text text-darken-3">
                  k6 load testing, Supertest API validation, and Postman/Newman collections
                </p>
              </div>

              <div
                className="row"
                style={{ marginBottom: 0, marginLeft: '-15px', marginRight: '-15px' }}
              >
                {apiRepos.map((repo) => (
                  <div
                    key={repo.id}
                    className="col s12 m4"
                    style={{ padding: '0 15px', marginBottom: '30px' }}
                  >
                    <div
                      style={{
                        background: repo.lightBg,
                        padding: '25px',
                        borderRadius: '12px',
                        height: '100%',
                        borderLeft: `5px solid ${repo.borderColor}`,
                        boxShadow: `0 4px 20px ${repo.shadowColor}`,
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <div className="center-align" style={{ marginBottom: '16px' }}>
                        <i className={`material-icons large ${repo.iconClass}`}>{repo.icon}</i>
                        <h4
                          className={repo.textClass}
                          style={{ margin: '8px 0 2px 0', fontSize: '1.2rem' }}
                        >
                          <b>{repo.title}</b>
                        </h4>
                        <p style={{ margin: '0 0 10px 0', fontSize: '13px', color: '#555' }}>
                          {repo.subtitle}
                        </p>
                        <div
                          style={{
                            display: 'flex',
                            gap: '6px',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                          }}
                        >
                          {repo.stats.map((s, i) => (
                            <span
                              key={i}
                              style={{
                                background: 'rgba(255,255,255,0.7)',
                                border: `1px solid ${repo.borderColor}`,
                                borderRadius: '12px',
                                padding: '2px 10px',
                                fontSize: '11px',
                                fontWeight: '600',
                                color: repo.color,
                              }}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      {repo.items.map((item, i) => (
                        <div
                          key={i}
                          style={{
                            background: 'rgba(255, 255, 255, 0.9)',
                            padding: '11px 14px',
                            borderRadius: '6px',
                            margin: '6px 0',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                          }}
                        >
                          <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5 }}>
                            <i
                              className={`material-icons tiny ${repo.iconClass}`}
                              style={{ verticalAlign: 'middle', marginRight: '6px' }}
                            >
                              {item.icon}
                            </i>
                            <b>{item.label}:</b> {item.text}
                          </p>
                        </div>
                      ))}

                      <div style={{ marginTop: 'auto', paddingTop: '18px' }}>
                        <a
                          href={repo.repo.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'block',
                            padding: '10px 16px',
                            background: 'rgba(255, 255, 255, 0.95)',
                            borderRadius: '8px',
                            border: `1px solid ${repo.borderColor}`,
                            textDecoration: 'none',
                          }}
                        >
                          <span
                            style={{
                              fontWeight: 'bold',
                              color: repo.color,
                              fontSize: '13px',
                              display: 'block',
                            }}
                          >
                            <i
                              className="material-icons tiny"
                              style={{ verticalAlign: 'middle', marginRight: '4px' }}
                            >
                              open_in_new
                            </i>
                            {repo.repo.name}
                          </span>
                          <span
                            style={{
                              fontSize: '11px',
                              color: '#666',
                              marginTop: '3px',
                              display: 'block',
                            }}
                          >
                            {repo.repo.tech}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedTesting;
