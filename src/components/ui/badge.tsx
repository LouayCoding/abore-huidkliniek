import { HTMLAttributes } from "react";

type Variant = "default" | "secondary" | "accent" | "destructive" | "outline";

type Props = HTMLAttributes<HTMLSpanElement> & {
  variant?: Variant;
  className?: string;
};

const variants: Record<Variant, string> = {
  default: "bg-primary text-white",
  secondary: "bg-secondary text-white",
  accent: "bg-accent text-white",
  destructive: "bg-destructive text-white",
  outline: "border border-border",
};

export function Badge({ variant = "default", className, ...props }: Props) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variants[variant]} ${className ?? ""}`}
      {...props}
    />
  );
}

