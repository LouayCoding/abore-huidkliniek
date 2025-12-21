'use client';

import { useEffect } from 'react';
import { ErrorFallback } from '@/components/ErrorBoundary';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('App Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <ErrorFallback
        onRetry={reset}
        title="Er ging iets mis"
        message="We konden deze pagina niet laden. Probeer het opnieuw of ga terug naar de homepage."
      />
    </div>
  );
}
