'use client';

import React, { Component, type ReactNode } from 'react';
import { Button, Container } from '@/components/ui';
import { marcellus, outfit } from '@/lib/fonts';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

/**
 * Error Boundary component for catching React errors
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log to error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return <ErrorFallback onRetry={this.handleRetry} />;
    }

    return this.props.children;
  }
}

/**
 * Default error fallback UI
 */
export function ErrorFallback({ 
  onRetry,
  title = "Er ging iets mis",
  message = "We konden de pagina niet laden. Probeer het opnieuw.",
}: { 
  onRetry?: () => void;
  title?: string;
  message?: string;
}) {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <Container className="text-center py-16">
        <div className="mx-auto max-w-md">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
              <svg
                className="h-8 w-8 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
          </div>
          <h2 className={`${marcellus.className} text-2xl text-foreground mb-2`}>
            {title}
          </h2>
          <p className={`${outfit.className} text-zinc-600 mb-6`}>
            {message}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {onRetry && (
              <Button onClick={onRetry} variant="primary">
                Probeer opnieuw
              </Button>
            )}
            <Button href="/" variant="outline">
              Terug naar home
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
