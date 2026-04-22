"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button, Container } from "@/components/ui";
import { marcellus, outfit } from "@/lib/fonts";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { fadeInUp, scaleIn, staggerChildren, revealMask, createScrollTimeline } from "@/lib/animations";
import { stats, siteConfig } from "@/data/site-config";

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
        {/* Two Column Layout: Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left: Text Content */}
          <div ref={textRef} className="lg:pr-8">
            <h2 className={`${marcellus.className} text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight tracking-wide text-foreground mb-6`}>
              Bij <span className="text-primary">Aboré</span> draait het om jou! Jouw huid, jouw moment, jouw zorg.
            </h2>
            <p className={`${outfit.className} text-base sm:text-lg text-zinc-600 leading-relaxed mb-10`}>
              Bij Aboré werken uitsluitend gediplomeerde huidtherapeuten, zodat je altijd verzekerd bent van deskundige zorg. We nemen de tijd voor jou, werken met hoogwaardige medische apparatuur, en passen alleen behandelingen toe die wetenschappelijk onderbouwd zijn. We blijven ons voortdurend ontwikkelen in de nieuwste technologieën, zodat jij altijd profiteert van de meest effectieve huidzorg. Zo krijg jij precies de zorg die bij jouw huid past. TEST123
            </p>

            {/* CTA - Clear hierarchy */}
            <div className="flex items-center gap-6">
              <Button href={siteConfig.bookingUrl} className={`${outfit.className} h-12 rounded-full bg-primary px-8 text-sm font-medium text-white hover:bg-primary-hover transition-colors`}>
                Plan gratis consult
              </Button>
              <a href="/behandelingen" className={`${outfit.className} text-sm font-medium text-zinc-600 hover:text-primary transition-colors`}>
                Bekijk behandelingen →
              </a>
            </div>
          </div>

          {/* Right: Image with Stats Overlay */}
          <div ref={imgRef} className="order-last">
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] overflow-hidden rounded-2xl">
              <Image src="/hero/11.jpg" alt="Onze kliniek" fill className="object-cover" />
              <span ref={maskRef} className="absolute inset-0 bg-white origin-left" />
              
              {/* Stats Overlay */}
              <div ref={statsRef} className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 pt-16">
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="stat-item text-center">
                      <div className={`${outfit.className} text-2xl sm:text-3xl font-semibold text-white`}>{stat.value}</div>
                      <div className={`${outfit.className} text-[10px] text-white/70 mt-1 uppercase tracking-wide`}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
