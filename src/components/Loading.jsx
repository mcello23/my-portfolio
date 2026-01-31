const Loading = () => (
  <div
    style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    }}
  >
    <div style={{ textAlign: 'center', color: 'white' }}>
      <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-white-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
      <p style={{ marginTop: '20px', fontSize: '1.2rem' }}>Loading...</p>
    </div>
  </div>
);

export default Loading;
