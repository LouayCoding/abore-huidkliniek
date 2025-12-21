"use client";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Hero } from "@/components/site/hero";
import { HeaderTransparent } from "@/components/site/header";
import { OverOns } from "@/components/site/over";
import { TreatmentsSection } from "@/components/site/treatments";
import { Footer } from "@/components/site/footer";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { fadeInUp } from "@/lib/animations";

// Dynamic imports for below-the-fold components (code splitting)
const UspSection = dynamic(() => import("@/components/site/usp").then(m => ({ default: m.UspSection })));
const CtaSection = dynamic(() => import("@/components/site/cta").then(m => ({ default: m.CtaSection })));
const TestimonialsSection = dynamic(() => import("@/components/site/testimonials").then(m => ({ default: m.TestimonialsSection })));
const FaqSection = dynamic(() => import("@/components/site/faq").then(m => ({ default: m.FaqSection })));
const GallerySection = dynamic(() => import("@/components/site/gallery").then(m => ({ default: m.GallerySection })));
const HighlightSection = dynamic(() => import("@/components/site/highlight").then(m => ({ default: m.HighlightSection })));

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
