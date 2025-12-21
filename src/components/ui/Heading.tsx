import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { marcellus } from '@/lib/fonts';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  size?: HeadingSize;
}

const sizeStyles: Record<HeadingSize, string> = {
  xs: 'text-lg sm:text-xl',
  sm: 'text-xl sm:text-2xl',
  md: 'text-2xl sm:text-3xl',
  lg: 'text-3xl sm:text-4xl lg:text-5xl',
  xl: 'text-4xl sm:text-5xl lg:text-6xl',
  '2xl': 'text-5xl sm:text-6xl lg:text-7xl',
  '3xl': 'text-6xl sm:text-7xl lg:text-8xl',
};

const defaultSizes: Record<HeadingLevel, HeadingSize> = {
  h1: 'xl',
  h2: 'lg',
  h3: 'md',
  h4: 'sm',
  h5: 'xs',
  h6: 'xs',
};

/**
 * Heading component with consistent styling
 */
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  function Heading({ as: Component = 'h2', size, className, children, ...props }, ref) {
    const headingSize = size || defaultSizes[Component];
    
    return (
      <Component
        ref={ref}
        className={cn(
          marcellus.className,
          'tracking-wide text-foreground',
          sizeStyles[headingSize],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
