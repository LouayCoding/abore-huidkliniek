"use client";
import { useEffect, useRef } from "react";
import { Container, Button } from "@/components/ui";
import { marcellus, syne } from "@/lib/fonts";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { SplitText } from "@/components/animations/split-text";

gsap.registerPlugin(ScrollTrigger);

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

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #c9b26f 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
      
      <Container className="relative py-20 sm:py-28">
        <div ref={contentRef} className="mx-auto max-w-5xl">
          {/* Desktop: Two-column layout */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <p className={`${syne.className} text-sm font-medium uppercase tracking-widest text-primary`}>
                Klaar om te beginnen?
              </p>
              <h2 className={`${marcellus.className} text-4xl xl:text-5xl tracking-wide text-foreground leading-tight`}>
                <SplitText>Begin vandaag nog met jouw huidtransformatie</SplitText>
              </h2>
              <p className={`${syne.className} text-lg text-zinc-700 leading-relaxed`}>
                Plan een vrijblijvend consult en ontdek welke behandeling perfect bij jouw huid past. Onze specialisten staan klaar om je te helpen.
              </p>
              
              {/* Benefits List */}
              <div className="space-y-3 pt-2">
                {[
                  "Gratis huidanalyse en advies",
                  "Persoonlijk behandelplan",
                  "Direct online boeken mogelijk",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={`${syne.className} text-zinc-700`}>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  href="https://abor.boekingapp.nl/"
                  className={`${syne.className} h-14 rounded-full bg-primary px-10 text-white hover:bg-primary-hover shadow-lg shadow-primary/20`}
                >
                  Plan gratis consult
                </Button>
                <Button
                  href="tel:+31123456789"
                  variant="outline"
                  className={`${syne.className} h-14 rounded-full px-10 border-2`}
                >
                  <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Bel ons direct
                </Button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                <Image
                  src="/hero/11.jpg"
                  alt="Plan je afspraak"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-6 shadow-2xl border border-border">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className={`${marcellus.className} text-2xl text-primary`}>5000+</div>
                    <div className={`${syne.className} text-sm text-zinc-600`}>Tevreden cliënten</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: Stacked layout */}
          <div className="block lg:hidden text-center space-y-8">
            <div className="space-y-4">
              <p className={`${syne.className} text-sm font-medium uppercase tracking-widest text-primary`}>
                Klaar om te beginnen?
              </p>
              <h2 className={`${marcellus.className} text-3xl sm:text-4xl tracking-wide text-foreground`}>
                Begin vandaag nog met jouw huidtransformatie
              </h2>
              <p className={`${syne.className} text-zinc-700`}>
                Plan een vrijblijvend consult en ontdek welke behandeling perfect bij jouw huid past.
              </p>
            </div>

            <div className="relative mx-auto max-w-sm">
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                <Image
                  src="/hero/11.jpg"
                  alt="Plan je afspraak"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-3">
              {[
                "Gratis huidanalyse en advies",
                "Persoonlijk behandelplan",
                "Direct online boeken mogelijk",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center justify-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`${syne.className} text-sm text-zinc-700`}>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <Button
                href="https://abor.boekingapp.nl/"
                className={`${syne.className} h-14 rounded-full bg-primary px-10 text-white hover:bg-primary-hover w-full shadow-lg shadow-primary/20`}
              >
                Plan gratis consult
              </Button>
              <Button
                href="tel:+31123456789"
                variant="outline"
                className={`${syne.className} h-14 rounded-full px-10 border-2 w-full`}
              >
                <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel ons direct
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
