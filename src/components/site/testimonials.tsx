"use client";
import { useEffect, useRef } from "react";
import { Container } from "@/components/ui";
import { marcellus, outfit } from "@/lib/fonts";
import { SplitText } from "@/components/animations/split-text";
import { TiltCard } from "@/components/animations/tilt-card";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { fadeInUp, staggerChildren } from "@/lib/animations";
import { testimonials } from "@/data/testimonials";

// Use testimonials from centralized data
const reviews = testimonials;

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 85%" },
        }
      );
    }

    if (cardsRef.current) {
      const items = Array.from(cardsRef.current.querySelectorAll(".t-item"));
      items.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 30, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: { trigger: el, start: "top 90%" },
          }
        );
      });
    }
  }, []);

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    const months = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  };

  return (
    <section ref={sectionRef} className="bg-zinc-50">
      <Container className="py-16 sm:py-24">
        {/* Section Header */}
        <div ref={titleRef} className="max-w-3xl mb-12">
          <h2 className={`${marcellus.className} text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight tracking-wide text-foreground mb-4`}>
            Wat onze <span className="text-primary">cliënten</span> zeggen
          </h2>
          <p className={`${outfit.className} text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl`}>
            Echte ervaringen van tevreden cliënten — gemiddelde beoordeling 4.9/5
          </p>
        </div>

        {/* Reviews Grid */}
        <div ref={cardsRef} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name + review.date}
              className="t-item group rounded-xl bg-white p-6 transition-all hover:shadow-md"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg 
                    key={s} 
                    className="h-4 w-4 text-primary" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className={`${outfit.className} text-sm leading-relaxed text-zinc-700 mb-6`}>
                "{review.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className={`${outfit.className} text-sm font-semibold`}>{review.initial}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`${outfit.className} text-sm font-medium text-foreground`}>{review.name}</p>
                  <p className={`${outfit.className} text-xs text-zinc-500`}>{review.treatment}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex items-center gap-6">
          <a 
            href="https://abor.boekingapp.nl/"
            className={`${outfit.className} h-11 inline-flex items-center rounded-full bg-primary px-6 text-sm font-medium text-white hover:bg-primary-hover transition-colors`}
          >
            Plan gratis consult
          </a>
          <span className={`${outfit.className} text-sm text-zinc-600`}>
            Wil jij ook deze resultaten ervaren?
          </span>
        </div>
      </Container>
    </section>
  );
}
