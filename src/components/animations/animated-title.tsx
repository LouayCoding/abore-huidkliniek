"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type Props = {
  text: string;
  className?: string;
};

export function AnimatedTitle({ text, className }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = text.split(" ");
    el.innerHTML = words
      .map((w) => `<span class=\"overflow-hidden inline-block align-baseline\"><span class=\"inline-block will-change-transform\">${w}</span></span>`)
      .join(" ");
    const innerSpans = Array.from(el.querySelectorAll<HTMLSpanElement>("span span"));
    gsap.set(innerSpans, { yPercent: 110, opacity: 0 });
    gsap.to(innerSpans, { yPercent: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.08 });
  }, [text]);

  return <h1 ref={ref} className={className} />;
}

