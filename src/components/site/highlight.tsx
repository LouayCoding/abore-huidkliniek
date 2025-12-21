"use client";
import { useEffect, useRef } from "react";
import { Container, Button } from "@/components/ui";
import { marcellus, outfit } from "@/lib/fonts";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";

const features = [
  {
    number: "01",
    title: "CE‑gecertificeerde apparatuur",
    description: "Wij werken uitsluitend met gecertificeerde apparatuur en kalibreren periodiek voor optimale veiligheid.",
  },
  {
    number: "02",
    title: "Persoonlijk doseringsprofiel",
    description: "Parameterkeuze op basis van jouw unieke huid, behandeldoel en persoonlijke tolerantie.",
  },
  {
    number: "03",
    title: "Heldere nazorg en follow‑up",
    description: "Je ontvangt praktische nazorginstructies en we monitoren jouw resultaten om de effectiviteit te optimaliseren.",
  },
];

export function HighlightSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
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

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: imageRef.current, start: "top 85%" },
        }
      );
    }

    if (cardsRef.current) {
      const cards = Array.from(cardsRef.current.querySelectorAll(".feature-card"));
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: { trigger: card, start: "top 90%" },
          }
        );
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="bg-zinc-50">
      <Container className="py-16 sm:py-24">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className={`${marcellus.className} text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight tracking-wide text-foreground mb-4`}>
            Optimale resultaten dankzij <span className="text-primary">medisch verantwoord</span> laserapparatuur
          </h2>
          <p className={`${outfit.className} text-base sm:text-lg text-zinc-600 leading-relaxed`}>
            Onze protocollen waarborgen veiligheid en consistentie bij elke behandeling
          </p>
        </div>

        {/* Desktop: Two-column layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left: Content */}
          <div ref={titleRef}>
            <div ref={cardsRef} className="space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.number}
                  className="feature-card group rounded-xl bg-white p-6 transition-all hover:bg-zinc-100"
                >
                  <div className="flex gap-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <span className={`${outfit.className} text-sm font-semibold text-primary`}>
                        {feature.number}
                      </span>
                    </div>
                    <div>
                      <h3 className={`${marcellus.className} text-xl text-foreground mb-2`}>
                        {feature.title}
                      </h3>
                      <p className={`${outfit.className} text-sm leading-relaxed text-zinc-600`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-6 mt-8">
              <Button
                href={siteConfig.bookingUrl}
                className={`${outfit.className} h-12 rounded-full bg-primary px-8 text-sm font-medium text-white hover:bg-primary-hover transition-colors`}
              >
                Plan gratis consult
              </Button>
              <a href="/behandelingen" className={`${outfit.className} text-sm font-medium text-zinc-600 hover:text-primary transition-colors`}>
                Bekijk behandelingen →
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div ref={imageRef} className="relative overflow-hidden rounded-2xl aspect-[4/5]">
            <Image
              src="/hero/14.jpg"
              alt="Premium laser apparatuur"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Mobile: Stacked layout */}
        <div className="block lg:hidden space-y-8">
          <div ref={cardsRef} className="space-y-3">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="feature-card rounded-xl bg-white p-5"
              >
                <div className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <span className={`${outfit.className} text-xs font-semibold text-primary`}>
                      {feature.number}
                    </span>
                  </div>
                  <div>
                    <h3 className={`${marcellus.className} text-lg text-foreground mb-1`}>{feature.title}</h3>
                    <p className={`${outfit.className} text-sm leading-relaxed text-zinc-600`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div ref={imageRef} className="relative overflow-hidden rounded-2xl aspect-[4/3]">
            <Image
              src="/hero/14.jpg"
              alt="Premium laser apparatuur"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex items-center gap-6">
            <Button
              href={siteConfig.bookingUrl}
              className={`${outfit.className} h-11 rounded-full bg-primary px-6 text-sm font-medium text-white hover:bg-primary-hover transition-colors`}
            >
              Plan gratis consult
            </Button>
            <a href="/behandelingen" className={`${outfit.className} text-sm font-medium text-zinc-600 hover:text-primary transition-colors`}>
              Bekijk behandelingen →
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

