const AdvancedTesting = () => {
  return (
    <div className="container" style={{ padding: '80px 0' }}>
      <div className="row">
        <div className="col s12">
          <div
            className="card"
            style={{
              background: 'linear-gradient(135deg, #fff9e1 0%, #ffe082 100%)',
              borderRadius: '15px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.12)',
            }}
          >
            <div className="card-content" style={{ padding: '40px 30px' }}>
              {/* Header */}
              <div className="center-align" style={{ marginBottom: '40px' }}>
                <h5 className="amber-text text-darken-4" style={{ marginBottom: '10px' }}>
                  <i
                    className="material-icons"
                    style={{ verticalAlign: 'middle', fontSize: '36px' }}
                  >
                    science
                  </i>
                  <b> Advanced Testing Methodologies</b>
                </h5>
                <p className="flow-text grey-text text-darken-3">
                  Performance, Load, Unit & AI/LLM Testing
                </p>
              </div>

              {/* Testing Types Grid */}
              <div
                className="row"
                style={{ marginBottom: 0, marginLeft: '-15px', marginRight: '-15px' }}
              >
                {/* Performance Testing */}
                <div className="col s12 m6 l3" style={{ padding: '0 15px', marginBottom: '30px' }}>
                  <div
                    style={{
                      background: 'linear-gradient(135deg, #fff3e0 0%, #ffcc80 100%)',
                      padding: '25px',
                      borderRadius: '12px',
                      height: '100%',
                      borderLeft: '5px solid #ff9800',
                      boxShadow: '0 4px 20px rgba(255, 152, 0, 0.15)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                  >
                    <div className="center-align" style={{ marginBottom: '20px' }}>
                      <i className="material-icons large orange-text text-darken-1">speed</i>
                      <h4
                        className="orange-text text-darken-2"
                        style={{ margin: '10px 0 5px 0', fontSize: '1.3rem' }}
                      >
                        <b>Performance Testing</b>
                      </h4>
                    </div>
                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        padding: '14px',
                        borderRadius: '6px',
                        margin: '10px 0',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6 }}>
                        <i
                          className="material-icons tiny orange-text"
                          style={{ verticalAlign: 'middle', marginRight: '6px' }}
                        >
                          assessment
                        </i>
                        <b>Lighthouse CI:</b> Core Web Vitals
                      </p>
                    </div>
                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        padding: '14px',
                        borderRadius: '6px',
                        margin: '10px 0',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6 }}>
                        <i
                          className="material-icons tiny orange-text"
                          style={{ verticalAlign: 'middle', marginRight: '6px' }}
                        >
                          dashboard
                        </i>
                        <b>Metrics:</b> Response time analysis
                      </p>
                    </div>
                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        padding: '14px',
                        borderRadius: '6px',
                        margin: '10px 0',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6 }}>
                        <i
                          className="material-icons tiny orange-text"
                          style={{ verticalAlign: 'middle', marginRight: '6px' }}
                        >
                          analytics
                        </i>
                        <b>Resource:</b> Memory & CPU profiling
                      </p>
                    </div>
                  </div>
                </div>

                {/* Load Testing */}
                <div className="col s12 m6 l3" style={{ padding: '0 15px', marginBottom: '30px' }}>
                  <div
                    style={{
                      background: 'linear-gradient(135deg, #e0f2f1 0%, #80cbc4 100%)',
                      padding: '25px',
                      borderRadius: '12px',
                      height: '100%',
                      borderLeft: '5px solid #00897b',
                      boxShadow: '0 4px 20px rgba(0, 137, 123, 0.15)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                  >
                    <div className="center-align" style={{ marginBottom: '20px' }}>
                      <i className="material-icons large teal-text text-darken-1">trending_up</i>
                      <h4
                        className="teal-text text-darken-2"
                        style={{ margin: '10px 0 5px 0', fontSize: '1.3rem' }}
                      >
                        <b>Load Testing</b>
                      </h4>
                    </div>
                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        padding: '14px',
                        borderRadius: '6px',
                        margin: '10px 0',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6 }}>
                        <i
                          className="material-icons tiny teal-text"
                          style={{ verticalAlign: 'middle', marginRight: '6px' }}
                        >
                          public
                        </i>
                        <b>K6:</b> JavaScript-based, cloud scalable
                      </p>
                    </div>
                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        padding: '14px',
                        borderRadius: '6px',
                        margin: '10px 0',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6 }}>
                        <i
                          className="material-icons tiny teal-text"
                          style={{ verticalAlign: 'middle', marginRight: '6px' }}
                        >
                          group
                        </i>
                        <b>Stress:</b> Concurrent user simulation
                      </p>
                    </div>
                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        padding: '14px',
                        borderRadius: '6px',
                        margin: '10px 0',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6 }}>
                        <i
                          className="material-icons tiny teal-text"
                          style={{ verticalAlign: 'middle', marginRight: '6px' }}
                        >
                          insights
                        </i>
                        <b>Spike:</b> Traffic surge testing
                      </p>
                    </div>
                  </div>
                </div>

                {/* Unit Testing */}
                <div className="col s12 m6 l3" style={{ padding: '0 15px', marginBottom: '30px' }}>
                  <div
                    style={{
                      background: 'linear-gradient(135deg, #e8eaf6 0%, #9fa8da 100%)',
                      padding: '25px',
                      borderRadius: '12px',
                      height: '100%',
                      borderLeft: '5px solid #5c6bc0',
                      boxShadow: '0 4px 20px rgba(92, 107, 192, 0.15)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                  >
                    <div className="center-align" style={{ marginBottom: '20px' }}>
                      <i className="material-icons large indigo-text text-lighten-1">code</i>
                      <h4
                        className="indigo-text text-darken-1"
                        style={{ margin: '10px 0 5px 0', fontSize: '1.3rem' }}
                      >
                        <b>Unit Testing</b>
                      </h4>
                    </div>
                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        padding: '14px',
                        borderRadius: '6px',
                        margin: '10px 0',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6 }}>
                        <i
                          className="material-icons tiny indigo-text"
                          style={{ verticalAlign: 'middle', marginRight: '6px' }}
                        >
                          functions
                        </i>
                        <b>Jest/Vitest:</b> Component testing
                      </p>
                    </div>
                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        padding: '14px',
                        borderRadius: '6px',
                        margin: '10px 0',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6 }}>
                        <i
                          className="material-icons tiny indigo-text"
                          style={{ verticalAlign: 'middle', marginRight: '6px' }}
                        >
                          shield
                        </i>
                        <b>Coverage:</b> 80%+ code coverage
                      </p>
                    </div>
                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        padding: '14px',
                        borderRadius: '6px',
                        margin: '10px 0',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6 }}>
                        <i
                          className="material-icons tiny indigo-text"
                          style={{ verticalAlign: 'middle', marginRight: '6px' }}
                        >
                          bug_report
                        </i>
                        <b>Mocking:</b> Test doubles, stubs
                      </p>
                    </div>
                  </div>
                </div>

                {/* AI/LLM Testing */}
                <div className="col s12 m6 l3" style={{ padding: '0 15px', marginBottom: '30px' }}>
                  <div
                    style={{
                      background: 'linear-gradient(135deg, #f3e5f5 0%, #ce93d8 100%)',
                      padding: '25px',
                      borderRadius: '12px',
                      height: '100%',
                      borderLeft: '5px solid #ab47bc',
                      boxShadow: '0 4px 20px rgba(171, 71, 188, 0.15)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                  >
                    <div className="center-align" style={{ marginBottom: '20px' }}>
                      <i className="material-icons large purple-text text-lighten-1">psychology</i>
                      <h4
                        className="purple-text text-darken-1"
                        style={{ margin: '10px 0 5px 0', fontSize: '1.3rem' }}
                      >
                        <b>AI/LLM Testing</b>
                      </h4>
                    </div>
                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        padding: '14px',
                        borderRadius: '6px',
                        margin: '10px 0',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6 }}>
                        <i
                          className="material-icons tiny purple-text"
                          style={{ verticalAlign: 'middle', marginRight: '6px' }}
                        >
                          casino
                        </i>
                        <b>Non-deterministic:</b> Prompt validation
                      </p>
                    </div>
                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        padding: '14px',
                        borderRadius: '6px',
                        margin: '10px 0',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6 }}>
                        <i
                          className="material-icons tiny purple-text"
                          style={{ verticalAlign: 'middle', marginRight: '6px' }}
                        >
                          memory
                        </i>
                        <b>Hallucination:</b> Output verification
                      </p>
                    </div>
                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        padding: '14px',
                        borderRadius: '6px',
                        margin: '10px 0',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6 }}>
                        <i
                          className="material-icons tiny purple-text"
                          style={{ verticalAlign: 'middle', marginRight: '6px' }}
                        >
                          rule
                        </i>
                        <b>Boundaries:</b> Safety & bias testing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedTesting;
