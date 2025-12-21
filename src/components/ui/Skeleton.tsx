import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

/**
 * Skeleton loading component
 */
export function Skeleton({
  variant = 'text',
  width,
  height,
  className,
  ...props
}: SkeletonProps) {
  const variantStyles = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  };

  return (
    <div
      className={cn(
        'animate-pulse bg-zinc-200',
        variantStyles[variant],
        className
      )}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
      {...props}
    />
  );
}

/**
 * Skeleton for text content
 */
export function SkeletonText({
  lines = 3,
  className,
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          className={i === lines - 1 ? 'w-3/4' : 'w-full'}
        />
      ))}
    </div>
  );
}

/**
 * Skeleton for card content
 */
export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn('rounded-lg border border-zinc-200 p-4', className)}>
      <Skeleton variant="rectangular" className="w-full h-40 mb-4" />
      <Skeleton variant="text" className="w-3/4 mb-2" />
      <Skeleton variant="text" className="w-full" />
      <Skeleton variant="text" className="w-2/3" />
    </div>
  );
}

/**
 * Skeleton for treatment card
 */
export function SkeletonTreatmentCard({ className }: { className?: string }) {
  return (
    <div className={cn('rounded-lg border border-zinc-200 p-6', className)}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <Skeleton variant="text" className="w-2/3 h-5 mb-2" />
          <div className="flex items-center gap-4 mt-2">
            <Skeleton variant="text" className="w-16" />
            <Skeleton variant="text" className="w-12" />
          </div>
        </div>
        <Skeleton variant="rectangular" className="w-20 h-9 rounded-full" />
      </div>
    </div>
  );
}

/**
 * Skeleton for avatar
 */
export function SkeletonAvatar({ 
  size = 40,
  className 
}: { 
  size?: number;
  className?: string 
}) {
  return (
    <Skeleton
      variant="circular"
      width={size}
      height={size}
      className={className}
    />
  );
}

/**
 * Skeleton for testimonial card
 */
export function SkeletonTestimonialCard({ className }: { className?: string }) {
  return (
    <div className={cn('rounded-lg border border-zinc-200 p-6', className)}>
      <div className="flex items-center gap-3 mb-4">
        <SkeletonAvatar size={48} />
        <div className="flex-1">
          <Skeleton variant="text" className="w-24 mb-1" />
          <Skeleton variant="text" className="w-32 h-3" />
        </div>
      </div>
      <SkeletonText lines={3} />
      <div className="flex gap-1 mt-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} variant="circular" width={16} height={16} />
        ))}
      </div>
    </div>
  );
}
