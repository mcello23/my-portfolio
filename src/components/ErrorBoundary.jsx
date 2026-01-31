import { Component } from 'react';
import { isDev, isProd } from '../utils/env';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error('Error Boundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });

    // In production, you could send to error tracking service (e.g., Sentry)
    if (isProd()) {
      // Example: Sentry.captureException(error);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = '/'; // Navigate to home
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          }}
        >
          <div
            style={{
              maxWidth: '600px',
              background: 'white',
              borderRadius: '12px',
              padding: '40px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              textAlign: 'center',
            }}
          >
            <i
              className="material-icons"
              style={{ fontSize: '64px', color: '#ef5350', marginBottom: '16px' }}
            >
              error_outline
            </i>
            <h1 style={{ color: '#333', fontSize: '2rem', marginBottom: '16px' }}>
              Oops! Something went wrong
            </h1>
            <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '24px' }}>
              We encountered an unexpected error. Don't worry, your data is safe.
            </p>
            {isDev() && this.state.error && (
              <details
                style={{
                  textAlign: 'left',
                  background: '#f5f5f5',
                  padding: '16px',
                  borderRadius: '8px',
                  marginBottom: '24px',
                  fontSize: '0.9rem',
                }}
              >
                <summary style={{ cursor: 'pointer', fontWeight: 'bold', marginBottom: '8px' }}>
                  Error Details (Development Only)
                </summary>
                <pre style={{ whiteSpace: 'pre-wrap', color: '#c62828', margin: 0 }}>
                  {this.state.error.toString()}
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
            <button
              onClick={this.handleReset}
              className="btn-large waves-effect waves-light teal"
              style={{ borderRadius: '8px' }}
            >
              <i className="material-icons left">home</i>
              Return to Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
