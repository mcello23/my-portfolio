const ComingSoonHero = () => {
  return (
    <div
      className="parallax-container valign-wrapper"
      style={{
        minHeight: '30vh',
        background: 'linear-gradient(135deg, #ff9800 0%, #e65100 100%)',
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
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 3px, transparent 3px),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.08) 2px, transparent 2px),
            linear-gradient(45deg, transparent 48%, rgba(255, 255, 255, 0.05) 50%, transparent 52%)
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
          width: '80px',
          height: '80px',
          border: '2px dashed rgba(255, 255, 255, 0.3)',
          borderRadius: '50%',
          animation: 'dash 12s linear infinite',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          bottom: '30%',
          right: '12%',
          width: 0,
          height: 0,
          borderStyle: 'solid',
          borderWidth: '0 25px 43.3px 25px',
          borderColor: 'transparent transparent rgba(255, 255, 255, 0.15) transparent',
          animation: 'float 7s ease-in-out infinite',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '60%',
          left: '70%',
          width: '50px',
          height: '50px',
          background: 'rgba(255, 255, 255, 0.1)',
          transform: 'rotate(45deg) skew(15deg)',
          animation: 'wobble 9s ease-in-out infinite',
        }}
      ></div>
      <div className="section no-pad-bot" style={{ position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="row center">
            <h3
              className="header col s12 white-text text-lighten-2"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}
            >
              🚀 Coming Soon
            </h3>
            <p
              className="flow-text white-text"
              style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
            >
              More Enterprise Testing Solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonHero;
