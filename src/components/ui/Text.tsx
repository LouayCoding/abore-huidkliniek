import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { outfit } from '@/lib/fonts';

type TextVariant = 'body' | 'small' | 'large' | 'muted' | 'lead';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant;
  as?: 'p' | 'span' | 'div';
}

const variantStyles: Record<TextVariant, string> = {
  body: 'text-base text-zinc-700 leading-relaxed',
  small: 'text-sm text-zinc-600',
  large: 'text-lg text-zinc-700 leading-relaxed',
  muted: 'text-sm text-zinc-500',
  lead: 'text-xl text-zinc-700 leading-relaxed',
};

/**
 * Text component with consistent styling
 */
export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  function Text({ variant = 'body', as: Component = 'p', className, children, ...props }, ref) {
    return (
      <Component
        ref={ref}
        className={cn(outfit.className, variantStyles[variant], className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
