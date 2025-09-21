import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background text-white flex items-center justify-center px-8">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-mono font-bold text-2xl">!</span>
            </div>
            <h1 className="text-2xl font-mono font-bold mb-4">Something went wrong</h1>
            <p className="text-text-secondary mb-6">
              We encountered an unexpected error. Please try refreshing the page or go back to the homepage.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="bg-accent hover:bg-accent-light px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Refresh Page
              </button>
              <Link
                to="/"
                className="border border-gray-600 hover:border-accent px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;