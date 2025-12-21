import { Container } from '@/components/ui';
import { marcellus } from '@/lib/fonts';

export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <Container className="text-center">
        <div className="flex flex-col items-center gap-4">
          {/* Animated logo/spinner */}
          <div className="relative">
            <div className="h-16 w-16 rounded-full border-4 border-zinc-200" />
            <div className="absolute inset-0 h-16 w-16 rounded-full border-4 border-primary border-t-transparent animate-spin" />
          </div>
          
          {/* Brand name */}
          <span className={`${marcellus.className} text-2xl text-foreground`}>
            Aboré
          </span>
          
          {/* Loading text */}
          <p className="text-sm text-zinc-500 animate-pulse">
            Laden...
          </p>
        </div>
      </Container>
    </div>
  );
}



