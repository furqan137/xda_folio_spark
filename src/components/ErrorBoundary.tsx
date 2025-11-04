import { Component, ErrorInfo, ReactNode } from "react";
import { Link } from "react-router-dom";
import EmptyState from "./EmptyState";

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
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background text-white flex items-center justify-center px-8">
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
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
