"use client";
import { useEffect, useRef } from "react";
import { Hero } from "@/components/site/hero";
import { HeaderTransparent } from "@/components/site/header";
import { OverOns } from "@/components/site/over";
import { TreatmentsSection } from "@/components/site/treatments";
import { UspSection } from "@/components/site/usp";
import { CtaSection } from "@/components/site/cta";
import { TestimonialsSection } from "@/components/site/testimonials";
import { FaqSection } from "@/components/site/faq";
import { Footer } from "@/components/site/footer";
import { GallerySection } from "@/components/site/gallery";
import { HighlightSection } from "@/components/site/highlight";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Page load animation
    gsap.fromTo(
      "body",
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.out" }
    );

    // Scroll reveal animations for all sections
    if (sectionsRef.current) {
      const sections = sectionsRef.current.querySelectorAll("section");
      
      sections.forEach((section, index) => {
        gsap.fromTo(
          section,
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-900 overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative">
        <Hero />
        <HeaderTransparent />
      </div>

      <main ref={sectionsRef}>
        {/* 1. Over Ons - Introductie & Trust Building */}
        <section>
          <OverOns />
        </section>

        {/* 2. Behandelingen - Core Service Offering */}
        <section>
          <TreatmentsSection />
        </section>

        {/* 3. Premium Veiligheid - Differentiator */}
        <section>
          <HighlightSection />
        </section>

        {/* 4. USP's - Quick Trust Signals */}
        <section>
          <UspSection />
        </section>

        {/* 5. Social Proof - Testimonials */}
        <section>
          <TestimonialsSection />
        </section>

        {/* 6. Visual Proof - Gallery */}
        <section>
          <GallerySection />
        </section>

        {/* 7. FAQ - Address Concerns */}
        <section>
          <FaqSection />
        </section>

        {/* 8. Final CTA - Conversion */}
        <section>
          <CtaSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
