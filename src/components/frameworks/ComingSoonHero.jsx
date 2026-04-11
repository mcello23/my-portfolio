const ComingSoonHero = () => {
  return (
    <div
      className="parallax-container valign-wrapper"
      style={{
        minHeight: '30vh',
        background: 'linear-gradient(135deg, #7b1fa2 0%, #4a148c 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.08) 3px, transparent 3px),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.06) 2px, transparent 2px),
            linear-gradient(45deg, transparent 48%, rgba(255, 255, 255, 0.04) 50%, transparent 52%)
          `,
          backgroundSize: '60px 60px, 40px 40px, 80px 80px',
          animation: 'shift 18s ease-in-out infinite',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '15%',
          width: '70px',
          height: '70px',
          border: '2px dashed rgba(255, 255, 255, 0.25)',
          borderRadius: '50%',
          animation: 'pulse 6s ease-in-out infinite',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          bottom: '30%',
          right: '12%',
          width: '50px',
          height: '50px',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          transform: 'rotate(45deg)',
          animation: 'spin 25s linear infinite',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '60%',
          left: '70%',
          width: '40px',
          height: '40px',
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '50%',
          animation: 'float 7s ease-in-out infinite',
        }}
      ></div>
      <div className="section no-pad-bot" style={{ position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="row center">
            <h3
              className="header col s12 white-text text-lighten-2"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}
            >
              ⚡ API & Performance Testing
            </h3>
            <p
              className="flow-text white-text"
              style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
            >
              k6 • Supertest • Postman/Newman
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonHero;
