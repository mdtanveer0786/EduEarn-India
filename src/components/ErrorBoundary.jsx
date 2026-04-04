import React from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6">
            <AlertTriangle size={40} className="text-red-500" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Something went wrong</h2>
          <p className="text-muted text-lg mb-8 max-w-md mx-auto">
            An unexpected error occurred. Please try refreshing the page or going back to the homepage.
          </p>
          <button className="btn btn-primary" onClick={this.handleReset}>
            <RefreshCcw size={18} /> Go to Homepage
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
