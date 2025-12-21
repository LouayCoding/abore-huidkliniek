"use client";
import { useEffect, useRef } from "react";
import { Container } from "@/components/ui";
import { marcellus, outfit } from "@/lib/fonts";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const features = [
  {
    icon: "✓",
    title: "CE-Gecertificeerd",
    description: "Wij maken gebruik van de nieuwste technologieën en al onze apparatuur voldoet aan Europese veiligheidsnormen.",
  },
  {
    icon: "♡",
    title: "Persoonlijke Aanpak",
    description: "Elk behandelplan op maat gemaakt voor jouw unieke huid en wensen.",
  },
  {
    icon: "★",
    title: "Ervaren Specialisten",
    description: "Onze ervaren huidtherapeuten hebben meer dan 6 jaar expertise in geavanceerde huid- en laserbehandelingen.",
  },
  {
    icon: "€",
    title: "Transparante Prijzen",
    description: "Wij informeren u volledig over de behandeling, de prijs, de verwachte resultaten, mogelijke risico's en wat u realistisch kunt verwachten.",
  },
];

export function UspSection() {
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
      const items = Array.from(cardsRef.current.querySelectorAll(".usp-item"));
      items.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: { trigger: el, start: "top 90%" },
          }
        );
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="bg-white">
      <Container className="py-16 sm:py-24">
        {/* Section Header */}
        <div ref={titleRef} className="max-w-3xl mb-12">
          <h2 className={`${marcellus.className} text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight tracking-wide text-foreground mb-4`}>
            Waarom <span className="text-primary">Aboré</span>?
          </h2>
          <p className={`${outfit.className} text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl`}>
            Jouw huid verdient de beste zorg
          </p>
        </div>

        {/* Features Grid */}
        <div ref={cardsRef} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="usp-item group rounded-xl bg-zinc-50 p-6 transition-all hover:bg-zinc-100"
            >
              {/* Icon */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <span className="text-lg">{feature.icon}</span>
              </div>

              {/* Content */}
              <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>
                {feature.title}
              </h3>
              <p className={`${outfit.className} text-sm leading-relaxed text-zinc-600`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

