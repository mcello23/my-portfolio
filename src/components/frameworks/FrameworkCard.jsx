const FrameworkCard = ({ framework }) => {
  const { cardTitle, cardSubtitle, stats, features, factoryPattern, cta, secondaryCta } = framework;

  return (
    <div className="row">
      <div className="col s12">
        <div
          className="card"
          style={{
            background: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)',
            borderRadius: '15px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.12)',
          }}
        >
          <div className="card-content" style={{ padding: '40px 30px' }}>
            <div className="center-align" style={{ marginBottom: '30px' }}>
              <h5 className="cyan-text text-darken-3" style={{ marginBottom: '10px' }}>
                <i className="material-icons" style={{ verticalAlign: 'middle', fontSize: '36px' }}>
                  verified_user
                </i>
                <b> {cardTitle}</b>
              </h5>
              <p className="flow-text grey-text text-darken-3" style={{ marginBottom: '16px' }}>
                {cardSubtitle}
              </p>

              {stats && stats.length > 0 && (
                <div
                  style={{
                    display: 'inline-flex',
                    gap: '8px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  }}
                >
                  {stats.map((stat, i) => (
                    <span
                      key={i}
                      style={{
                        background: 'rgba(0, 188, 212, 0.12)',
                        border: '1px solid rgba(0, 188, 212, 0.35)',
                        color: '#006064',
                        borderRadius: '20px',
                        padding: '4px 14px',
                        fontSize: '13px',
                        fontWeight: '600',
                      }}
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="row" style={{ marginBottom: '30px' }}>
              {features.map((feature, index) => (
                <div className="col s12 m6 l3" key={index}>
                  {feature.items.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        padding: '16px 18px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #00bcd4',
                        marginBottom: '12px',
                      }}
                    >
                      <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5 }}>
                        <i
                          className="material-icons tiny cyan-text"
                          style={{ verticalAlign: 'middle', marginRight: '5px' }}
                        >
                          {item.icon}
                        </i>
                        <b>{item.label}:</b> {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div
              style={{
                background: 'linear-gradient(135deg, #b2dfdb 0%, #80cbc4 100%)',
                padding: '25px',
                borderRadius: '10px',
                marginTop: '10px',
              }}
            >
              <h5 className="center-align teal-text text-darken-3" style={{ marginBottom: '25px' }}>
                <i className="material-icons" style={{ verticalAlign: 'middle' }}>
                  lightbulb
                </i>
                <b> {factoryPattern.title}</b>
              </h5>

              <div className="row" style={{ marginBottom: 0 }}>
                {factoryPattern.features.map((feature, index) => (
                  <div className="col s12 m4" key={index}>
                    <div className="center-align">
                      <i className="material-icons medium teal-text text-darken-2">
                        {feature.icon}
                      </i>
                      <h6 className="teal-text text-darken-3" style={{ margin: '10px 0 5px 0' }}>
                        <b>{feature.title}</b>
                      </h6>
                      <p style={{ fontSize: '14px', margin: 0, color: '#37474f' }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="center-align"
              style={{
                marginTop: '35px',
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-large waves-effect waves-light cyan darken-2"
                style={{
                  padding: '0 50px',
                  borderRadius: '25px',
                  boxShadow: '0 4px 15px rgba(0, 188, 212, 0.3)',
                }}
              >
                <i className="material-icons left">{cta.icon}</i>
                {cta.text}
              </a>
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-large waves-effect waves-light teal darken-1"
                  style={{
                    padding: '0 50px',
                    borderRadius: '25px',
                    boxShadow: '0 4px 15px rgba(0, 150, 136, 0.3)',
                  }}
                >
                  <i className="material-icons left">{secondaryCta.icon}</i>
                  {secondaryCta.text}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameworkCard;
