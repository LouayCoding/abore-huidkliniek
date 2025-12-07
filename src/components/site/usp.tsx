"use client";
import { useEffect, useRef } from "react";
import { Container } from "@/components/ui";
import { marcellus, syne } from "@/lib/fonts";
import { SplitText } from "@/components/animations/split-text";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    number: "01",
    title: "CE-Gecertificeerd",
    description: "Premium laser apparatuur die voldoet aan de hoogste Europese veiligheidsnormen.",
    image: "/hero/14.jpg",
  },
  {
    number: "02",
    title: "Persoonlijke Aanpak",
    description: "Elk behandelplan op maat gemaakt voor jouw unieke huid en wensen.",
    image: "/hero/11.jpg",
  },
  {
    number: "03",
    title: "Ervaren Specialisten",
    description: "Meer dan 10 jaar ervaring in geavanceerde huid- en laserbehandelingen.",
    image: "/hero/3.jpg",
  },
  {
    number: "04",
    title: "Transparante Prijzen",
    description: "Geen verborgen kosten. Duidelijke prijzen en gratis consultatie.",
    image: "/hero/1.jpg",
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
      <Container className="py-20 sm:py-28">
        {/* Section Header */}
        <div ref={titleRef} className="mx-auto max-w-2xl text-center mb-16">
          <p className={`${syne.className} text-sm font-medium uppercase tracking-widest text-primary mb-4`}>
            Waarom Aboré
          </p>
          <h2 className={`${marcellus.className} text-3xl sm:text-4xl lg:text-5xl tracking-wide text-foreground`}>
            <SplitText>Jouw huid verdient de beste zorg</SplitText>
          </h2>
        </div>

        {/* Features Grid */}
        <div ref={cardsRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="usp-item group"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-5">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className={`${marcellus.className} absolute bottom-4 left-4 text-4xl font-light text-white/80`}>
                  {feature.number}
                </div>
              </div>

              {/* Content */}
              <h3 className={`${marcellus.className} text-xl text-foreground mb-2`}>
                {feature.title}
              </h3>
              <p className={`${syne.className} text-sm leading-relaxed text-zinc-600`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 pt-12 border-t border-zinc-200">
          <div className="grid gap-8 sm:grid-cols-3 max-w-3xl mx-auto">
            <div className="text-center">
              <div className={`${marcellus.className} text-4xl sm:text-5xl text-foreground mb-2`}>10+</div>
              <div className={`${syne.className} text-sm text-zinc-500`}>Jaar ervaring</div>
            </div>
            <div className="text-center">
              <div className={`${marcellus.className} text-4xl sm:text-5xl text-foreground mb-2`}>5000+</div>
              <div className={`${syne.className} text-sm text-zinc-500`}>Tevreden cliënten</div>
            </div>
            <div className="text-center">
              <div className={`${marcellus.className} text-4xl sm:text-5xl text-foreground mb-2`}>4.9</div>
              <div className={`${syne.className} text-sm text-zinc-500`}>Gemiddelde beoordeling</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

