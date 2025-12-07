"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Variant = "up" | "right" | "scale";

type Props = {
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
  children: React.ReactNode;
};

export function Reveal({ variant = "up", delay = 0, duration = 0.6, className, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const from: any = variant === "up" ? { y: 24, opacity: 0 } : variant === "right" ? { x: 24, opacity: 0 } : { scale: 0.98, opacity: 0 };
    const to: any = variant === "scale" ? { scale: 1, opacity: 1 } : { x: 0, y: 0, opacity: 1 };
    gsap.fromTo(
      el,
      from,
      {
        ...to,
        duration,
        ease: "power3.out",
        delay,
        scrollTrigger: { trigger: el, start: "top 92%" },
      }
    );
  }, [variant, delay, duration]);

  return <div ref={ref} className={className}>{children}</div>;
}

