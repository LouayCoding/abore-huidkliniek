"use client";
import { useEffect, useRef } from "react";
import { Container, Button } from "@/components/ui";
import { marcellus, outfit } from "@/lib/fonts";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: contentRef.current, start: "top 85%" },
        }
      );
    }
  }, []);

  const benefits = [
    "Gratis huidanalyse en advies",
    "Persoonlijk behandelplan",
    "Direct online boeken mogelijk",
  ];

  return (
    <section ref={sectionRef} className="bg-white">
      <Container className="py-16 sm:py-24">
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <h2 className={`${marcellus.className} text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight tracking-wide text-foreground mb-4`}>
              Begin met jouw <span className="text-primary">huidtransformatie</span>
            </h2>
            <p className={`${outfit.className} text-base sm:text-lg text-zinc-600 leading-relaxed mb-8`}>
              Plan een vrijblijvend consult en ontdek welke behandeling perfect bij jouw huid past.
            </p>
            
            {/* Benefits List */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`${outfit.className} text-sm text-zinc-700`}>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <Button
                href={siteConfig.bookingUrl}
                className={`${outfit.className} h-12 rounded-full bg-primary px-8 text-sm font-medium text-white hover:bg-primary-hover transition-colors`}
              >
                Plan gratis consult
              </Button>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className={`${outfit.className} text-sm font-medium text-zinc-600 hover:text-primary transition-colors`}
              >
                Bel ons direct →
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="order-first lg:order-last">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              <Image
                src="/hero/11.jpg"
                alt="Plan je afspraak"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
