<<<<<<< HEAD
import { Component, ErrorInfo, ReactNode } from "react";
import { Link } from "react-router-dom";
import EmptyState from "./EmptyState";
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0

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
<<<<<<< HEAD
    console.error("Uncaught error:", error, errorInfo);
=======
    console.error('Uncaught error:', error, errorInfo);
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background text-white flex items-center justify-center px-8">
<<<<<<< HEAD
          <div className="w-full flex flex-col items-center justify-center emptystate-scope">
            <EmptyState
              title="Something went wrong."
              description={
                <span>
                  We encountered an unexpected error.
                  <br />
                  Try refreshing, or go{" "}
                  <Link
                    to="/"
                    className="font-bold hover:underline hover:text-blue-400 transition-colors"
                  >
                    HOME
                  </Link>
                  .
                </span>
              }
            />
            <style>
              {`
                /* Hide only the EmptyState’s default italic footer text */
                .emptystate-scope > div .text-gray-500.italic.pt-2.text-center {
                  display: none !important;
                }
              `}
            </style>
            <p className="text-xs text-gray-500 italic pt-6 sm:pt-8 text-center">
              If this keeps happening, please let me know.
            </p>
=======
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
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

<<<<<<< HEAD
export default ErrorBoundary;
=======
export default ErrorBoundary;
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0
