import { forwardRef } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "destructive" | "link";
type Size = "sm" | "md" | "lg";

type Props = {
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const base = "inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none";
const sizes: Record<Size, string> = {
  sm: "h-9 rounded-md px-3 text-sm",
  md: "h-10 rounded-md px-4 text-sm",
  lg: "h-11 rounded-lg px-5 text-base",
};
const variants: Record<Variant, string> = {
  primary: "bg-primary text-black hover:opacity-90",
  secondary: "bg-secondary text-white hover:opacity-90",
  outline: "border border-border bg-transparent text-foreground hover:bg-muted",
  ghost: "bg-transparent hover:bg-muted",
  destructive: "bg-destructive text-white hover:bg-[#dc2626]",
  link: "bg-transparent text-primary underline-offset-4 hover:underline",
};

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { variant = "primary", size = "md", href, className, children, ...rest },
  ref
) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className ?? ""}`;
  if (href) {
    return (
      <a href={href} className={cls} {...(rest as any)}>
        {children}
      </a>
    );
  }
  return (
    <button ref={ref} className={cls} {...rest}>
      {children}
    </button>
  );
});
