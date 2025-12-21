"use client";
import { useState, useEffect, useRef } from "react";
import { Container } from "@/components/ui";
import { marcellus, outfit } from "@/lib/fonts";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { fadeInUp } from "@/lib/animations";
import { faqs } from "@/data/faqs";

// Use FAQs from centralized data
const qas = faqs;

export function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

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

    if (faqRef.current) {
      const items = Array.from(faqRef.current.querySelectorAll(".faq-item"));
      items.forEach((el, i) => {
        gsap.fromTo(
          el,
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            delay: i * 0.08,
            scrollTrigger: { trigger: el, start: "top 92%" },
          }
        );
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="bg-white">
      <Container className="py-16 sm:py-24">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Header */}
          <div ref={titleRef}>
            <h2 className={`${marcellus.className} text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight tracking-wide text-foreground mb-4`}>
              Veelgestelde <span className="text-primary">vragen</span>
            </h2>
            <p className={`${outfit.className} text-base sm:text-lg text-zinc-600 leading-relaxed mb-8`}>
              Antwoorden op de meest gestelde vragen over onze behandelingen
            </p>

            {/* CTA */}
            <div className="hidden lg:block">
              <p className={`${outfit.className} text-sm text-zinc-600 mb-4`}>
                Nog andere vragen?
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="https://abor.boekingapp.nl/"
                  className={`${outfit.className} h-11 inline-flex items-center rounded-full bg-primary px-6 text-sm font-medium text-white hover:bg-primary-hover transition-colors`}
                >
                  Plan gratis consult
                </a>
                <a
                  href="tel:+31634533358"
                  className={`${outfit.className} text-sm font-medium text-zinc-600 hover:text-primary transition-colors`}
                >
                  Bel ons direct →
                </a>
              </div>
            </div>
          </div>

          {/* Right: FAQ Items */}
          <div ref={faqRef} className="space-y-3">
            {qas.map((item) => (
              <AccordionItem key={item.q} q={item.q} a={item.a} category={item.category} />
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="lg:hidden mt-10 flex items-center gap-6">
          <a
            href="https://abor.boekingapp.nl/"
            className={`${outfit.className} h-11 inline-flex items-center rounded-full bg-primary px-6 text-sm font-medium text-white hover:bg-primary-hover transition-colors`}
          >
            Plan gratis consult
          </a>
          <a
            href="tel:+31634533358"
            className={`${outfit.className} text-sm font-medium text-zinc-600 hover:text-primary transition-colors`}
          >
            Bel ons direct →
          </a>
        </div>
      </Container>
    </section>
  );
}

interface QA {
  q: string;
  a: string;
  category?: string;
}

function AccordionItem({ q, a }: QA) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (open) {
        gsap.to(contentRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [open]);

  return (
    <div className="faq-item rounded-xl bg-zinc-50 transition-all hover:bg-zinc-100">
      <button 
        onClick={() => setOpen(!open)} 
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <h3 className={`${outfit.className} text-sm sm:text-base font-medium text-foreground`}>{q}</h3>
        <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
          open ? "bg-primary text-white rotate-180" : "bg-white text-zinc-500"
        }`}>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div 
        ref={contentRef}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="px-5 pb-5">
          <p className={`${outfit.className} text-sm leading-relaxed text-zinc-600`}>{a}</p>
        </div>
      </div>
    </div>
  );
}

