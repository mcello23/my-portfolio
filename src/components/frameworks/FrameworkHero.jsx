const FrameworkHero = ({ framework }) => {
  return (
    <div className={`parallax-container valign-wrapper hero-${framework.id}`}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
            radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px, 70px 70px, 30px 30px',
          animation: 'float 20s ease-in-out infinite',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '100px',
          height: '100px',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          transform: 'rotate(45deg)',
          animation: 'spin 30s linear infinite',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '60px',
          height: '60px',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '50%',
          animation: 'pulse 4s ease-in-out infinite',
        }}
      ></div>
      <div className="section no-pad-bot" style={{ position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="row center">
            <h3
              className="header col s12 white-text text-lighten-2"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}
            >
              {framework.title}
            </h3>
            <p
              className="flow-text white-text"
              style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
            >
              {framework.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameworkHero;
