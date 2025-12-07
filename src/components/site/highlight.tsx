"use client";
import { useEffect, useRef } from "react";
import { Container, Button } from "@/components/ui";
import { marcellus, syne } from "@/lib/fonts";
import { SplitText } from "@/components/animations/split-text";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    number: "01",
    title: "CE‑gecertificeerde systemen",
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
    description: "Je ontvangt praktische nazorginstructies en we monitoren jouw resultaten over tijd voor optimaal effect.",
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
    <section ref={sectionRef} className="relative overflow-hidden bg-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <Container className="relative py-20 sm:py-32">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className={`${syne.className} text-sm font-medium uppercase tracking-widest text-primary mb-4`}>
            Premium Apparatuur
          </p>
          <h2 className={`${marcellus.className} text-3xl sm:text-4xl lg:text-5xl tracking-wide text-foreground leading-tight`}>
            <SplitText>Luxe resultaten door veilige premium laser apparatuur</SplitText>
          </h2>
          <p className={`${syne.className} mt-6 text-lg text-zinc-600`}>
            Onze protocollen waarborgen veiligheid en consistentie bij elke behandeling
          </p>
        </div>

        {/* Desktop: Two-column layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-stretch">
          {/* Left: Single Image */}
          <div ref={imageRef} className="relative overflow-hidden rounded-2xl group h-full">
            <Image
              src="/hero/14.jpg"
              alt="Premium laser apparatuur"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="rounded-xl bg-white/95 backdrop-blur-sm p-6 shadow-lg">
                <div className={`${marcellus.className} text-xl text-foreground`}>CE-gecertificeerd</div>
                <div className={`${syne.className} text-base text-zinc-600 mt-1`}>Premium apparatuur</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div ref={titleRef} className="space-y-8 flex flex-col">
            <div ref={cardsRef} className="space-y-5">
              {features.map((feature, index) => (
                <div
                  key={feature.number}
                  className="feature-card group relative overflow-hidden rounded-xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50/50 p-8 transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Number Badge */}
                  <div className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <span className={`${marcellus.className} text-lg font-semibold text-primary`}>
                      {feature.number}
                    </span>
                  </div>

                  <div className="pr-16">
                    <h3 className={`${marcellus.className} text-2xl text-foreground mb-3`}>
                      {feature.title}
                    </h3>
                    <p className={`${syne.className} text-base leading-relaxed text-zinc-600`}>
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Accent Line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-primary/50 transition-all duration-300 group-hover:w-full" />
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 pt-6">
              <Button
                href="https://abor.boekingapp.nl/"
                className={`${syne.className} h-14 rounded-full bg-primary px-10 text-white hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30`}
              >
                Plan gratis consult
              </Button>
              <div className="flex items-center gap-3 text-sm text-zinc-600">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full bg-zinc-200 border-2 border-white" />
                  ))}
                </div>
                <span className={`${syne.className}`}>5000+ tevreden cliënten</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Stacked layout */}
        <div className="block lg:hidden space-y-8">
          <div ref={imageRef} className="relative overflow-hidden rounded-2xl aspect-[4/5]">
            <Image
              src="/hero/14.jpg"
              alt="Premium laser apparatuur"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="rounded-xl bg-white/95 backdrop-blur-sm p-4 shadow-lg">
                <div className={`${marcellus.className} text-base text-foreground`}>CE-gecertificeerd</div>
                <div className={`${syne.className} text-sm text-zinc-600 mt-1`}>Premium apparatuur</div>
              </div>
            </div>
          </div>

          <div ref={cardsRef} className="space-y-4">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="feature-card relative overflow-hidden rounded-xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50/50 p-6"
              >
                <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className={`${marcellus.className} text-sm font-semibold text-primary`}>
                    {feature.number}
                  </span>
                </div>
                <div className="pr-14">
                  <h3 className={`${marcellus.className} text-xl text-foreground mb-2`}>{feature.title}</h3>
                  <p className={`${syne.className} text-sm leading-relaxed text-zinc-600`}>
                    {feature.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary/30 to-transparent" />
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <Button
              href="https://abor.boekingapp.nl/"
              className={`${syne.className} h-14 rounded-full bg-primary px-10 text-white hover:bg-primary-hover w-full shadow-lg shadow-primary/20`}
            >
              Plan gratis consult
            </Button>
            <div className="flex items-center justify-center gap-3 text-sm text-zinc-600">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-zinc-200 border-2 border-white" />
                ))}
              </div>
              <span className={`${syne.className}`}>5000+ tevreden cliënten</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

