"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button, Container } from "@/components/ui";
import { marcellus, syne } from "@/lib/fonts";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/animations/animated-title";
import { SplitText } from "@/components/animations/split-text";

gsap.registerPlugin(ScrollTrigger);

export function OverOns() {
  const imgRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      const tl = gsap.timeline({ scrollTrigger: { trigger: imgRef.current, start: "top 85%" } });
      tl.fromTo(imgRef.current, { scale: 1.05 }, { scale: 1, duration: 0.8, ease: "power3.out" }, 0);
      if (maskRef.current) {
        tl.to(maskRef.current, { scaleX: 0, transformOrigin: "left", duration: 0.8, ease: "power3.out" }, 0);
      }
    }
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: textRef.current, start: "top 85%" },
        }
      );
    }
    if (statsRef.current) {
      const items = Array.from(statsRef.current.querySelectorAll(".stat-item"));
      items.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: { trigger: statsRef.current, start: "top 85%" },
          }
        );
      });
    }
  }, []);

  return (
    <section id="over" className="bg-white">
      <Container className="py-20 sm:py-28">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className={`${syne.className} text-sm font-medium uppercase tracking-widest text-primary mb-4`}>
            Over Aboré
          </p>
          <h2 className={`${marcellus.className} text-3xl sm:text-4xl lg:text-5xl tracking-wide text-foreground max-w-3xl mx-auto`}>
            <SplitText>Luxe laserzorg met precisie en persoonlijke aandacht</SplitText>
          </h2>
        </div>

        {/* Single Image */}
        <div ref={imgRef} className="max-w-4xl mx-auto mb-16">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
            <Image src="/hero/11.jpg" alt="Onze kliniek" fill className="object-cover" />
            <span ref={maskRef} className="absolute inset-0 bg-white origin-left" />
          </div>
        </div>

        {/* Content */}
        <div ref={textRef} className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <p className={`${syne.className} text-lg text-zinc-700 leading-relaxed`}>
              Wij bieden luxe, minimalistische zorg met hoogwaardige apparatuur en persoonlijke aandacht. Elke behandeling wordt op maat afgestemd op jouw unieke huid.
            </p>
            <p className={`${syne.className} text-lg text-zinc-700 leading-relaxed`}>
              Onze specialisten combineren jarenlange ervaring met precisie voor zichtbare en veilige resultaten die je zelfvertrouwen versterken.
            </p>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-3 gap-8 py-10 border-y border-zinc-200">
            <div className="stat-item text-center">
              <div className={`${marcellus.className} text-4xl sm:text-5xl text-foreground`}>10+</div>
              <div className={`${syne.className} text-sm text-zinc-500 mt-2`}>Jaar ervaring</div>
            </div>
            <div className="stat-item text-center">
              <div className={`${marcellus.className} text-4xl sm:text-5xl text-foreground`}>5000+</div>
              <div className={`${syne.className} text-sm text-zinc-500 mt-2`}>Tevreden cliënten</div>
            </div>
            <div className="stat-item text-center">
              <div className={`${marcellus.className} text-4xl sm:text-5xl text-foreground`}>4.9</div>
              <div className={`${syne.className} text-sm text-zinc-500 mt-2`}>Beoordeling</div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button href="https://abor.boekingapp.nl/" className={`${syne.className} h-14 rounded-full bg-primary px-10 text-white hover:bg-primary-hover`}>
              Plan gratis consult
            </Button>
            <Button href="/behandelingen" variant="outline" className={`${syne.className} h-14 rounded-full px-10 border-2`}>
              Bekijk behandelingen
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
