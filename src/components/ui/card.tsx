import { HTMLAttributes } from "react";

type DivProps = HTMLAttributes<HTMLDivElement> & { className?: string };

export function Card({ className, ...props }: DivProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-background text-foreground shadow-sm ${className ?? ""}`}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: DivProps) {
  return <div className={`p-6 ${className ?? ""}`} {...props} />;
}

export function CardTitle({ className, ...props }: DivProps) {
  return <h3 className={`text-lg font-semibold leading-none tracking-tight ${className ?? ""}`} {...props} />;
}

export function CardDescription({ className, ...props }: DivProps) {
  return <p className={`text-sm text-zinc-600 dark:text-zinc-400 ${className ?? ""}`} {...props} />;
}

export function CardContent({ className, ...props }: DivProps) {
  return <div className={`p-6 pt-0 ${className ?? ""}`} {...props} />;
}

export function CardFooter({ className, ...props }: DivProps) {
  return <div className={`p-6 pt-0 ${className ?? ""}`} {...props} />;
}

