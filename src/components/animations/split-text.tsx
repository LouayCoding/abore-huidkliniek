"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export function SplitText({ children, className = "", delay = 0, stagger = 0.03 }: SplitTextProps) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const text = textRef.current;
    const words = text.textContent?.split(" ") || [];
    
    // Clear and rebuild with spans for words
    text.innerHTML = "";
    words.forEach((word, index) => {
      const span = document.createElement("span");
      span.textContent = word;
      span.style.display = "inline-block";
      span.style.opacity = "0";
      text.appendChild(span);
      
      // Add space after each word except the last one
      if (index < words.length - 1) {
        text.appendChild(document.createTextNode(" "));
      }
    });

    const wordElements = text.querySelectorAll("span");

    // Animate
    gsap.fromTo(
      wordElements,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: stagger * 3, // Slower stagger since we have fewer elements
        ease: "power3.out",
        scrollTrigger: {
          trigger: text,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        delay: delay,
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === text) {
          trigger.kill();
        }
      });
    };
  }, [children, delay, stagger]);

  return (
    <span ref={textRef} className={className}>
      {children}
    </span>
  );
}
