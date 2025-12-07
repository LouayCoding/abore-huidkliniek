"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // -1 to 1, negative = slower, positive = faster
  direction?: "up" | "down";
}

export function ParallaxSection({ 
  children, 
  className = "", 
  speed = 0.3,
  direction = "up" 
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const yValue = direction === "up" ? -100 * speed : 100 * speed;

    gsap.fromTo(
      sectionRef.current,
      { y: -yValue },
      {
        y: yValue,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, [speed, direction]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}

// Parallax Image specifically for background images
interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}

export function ParallaxImage({ src, alt, className = "", speed = 0.2 }: ParallaxImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { yPercent: -10 * speed },
      {
        yPercent: 10 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === imageRef.current) {
          trigger.kill();
        }
      });
    };
  }, [speed]);

  return (
    <div className="overflow-hidden">
      <div
        ref={imageRef}
        className={`scale-110 ${className}`}
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        role="img"
        aria-label={alt}
      />
    </div>
  );
}
