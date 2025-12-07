import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & { className?: string };

export function Container({ className, ...props }: Props) {
  return (
    <div className={`mx-auto max-w-7xl px-8 ${className ?? ""}`} {...props} />
  );
}
