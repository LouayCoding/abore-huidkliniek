"use client";
import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import { Container, Button } from "@/components/ui";
import { marcellus, outfit } from "@/lib/fonts";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { fadeInUp } from "@/lib/animations";
import { SplitText } from "@/components/animations/split-text";
import { treatments } from "@/data/treatments";
import { siteConfig } from "@/data/site-config";
import type { Treatment } from "@/types";

const INITIAL_ITEMS = 4;

export function TreatmentsSection() {
  const [activeTab, setActiveTab] = useState<string>("acne");
  const [showAll, setShowAll] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Memoize active treatment to prevent unnecessary re-renders
  const activeTreatment = useMemo(
    () => treatments.find((t) => t.id === activeTab) || treatments[0],
    [activeTab]
  );

  useEffect(() => {
    const animations: gsap.core.Tween[] = [];
    
    if (titleRef.current) {
      const anim = fadeInUp(titleRef.current, { 
        duration: 0.6, 
        scrollTrigger: { trigger: titleRef.current, start: "top 85%" } 
      });
      if (anim) animations.push(anim);
    }
    if (tabsRef.current) {
      const anim = fadeInUp(tabsRef.current, { 
        duration: 0.6, 
        delay: 0.1, 
        scrollTrigger: { trigger: tabsRef.current, start: "top 85%" } 
      });
      if (anim) animations.push(anim);
    }
    
    return () => {
      animations.forEach(anim => anim.kill());
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    }
    setShowAll(false); // Reset when changing tabs
  }, [activeTab]);

  const visibleTreatments = showAll 
    ? activeTreatment.treatments 
    : activeTreatment.treatments.slice(0, INITIAL_ITEMS);
  const hasMore = activeTreatment.treatments.length > INITIAL_ITEMS;

  return (
    <section id="behandelingen" className="bg-background">
      <Container className="py-16 sm:py-24">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-4">
          <h2 ref={titleRef} className={`${marcellus.className} text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight tracking-wide text-foreground mb-4`}>
            <span className="text-primary">Behandelingen</span> die jouw huid natuurlijk laten stralen
          </h2>
          <p className={`${outfit.className} text-base sm:text-lg text-zinc-600 leading-relaxed`}>
            Kies een categorie en ontdek onze behandelingen met transparante prijzen
          </p>
        </div>

        {/* Tabs - Desktop */}
        <div ref={tabsRef} className="mt-10 hidden md:block">
          <div className="flex flex-wrap gap-2">
            {treatments.map((treatment) => (
              <button
                key={treatment.id}
                onClick={() => setActiveTab(treatment.id)}
                aria-pressed={activeTab === treatment.id}
                className={`${outfit.className} rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  activeTab === treatment.id
                    ? "bg-primary text-white"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900"
                }`}
              >
                {treatment.title}
              </button>
            ))}
          </div>
        </div>

        {/* Tabs - Mobile Horizontal Scroll */}
        <div className="mt-8 md:hidden overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-2 min-w-max">
            {treatments.map((treatment) => (
              <button
                key={treatment.id}
                onClick={() => setActiveTab(treatment.id)}
                aria-pressed={activeTab === treatment.id}
                className={`${outfit.className} whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeTab === treatment.id
                    ? "bg-primary text-white"
                    : "bg-zinc-100 text-zinc-600"
                }`}
              >
                {treatment.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div ref={contentRef} className="mt-12">
          {/* Desktop: Two-column layout */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
            {/* Left: Image & Description */}
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <Image
                  src={activeTreatment.image}
                  alt={activeTreatment.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className={`${marcellus.className} text-2xl sm:text-3xl text-foreground mb-3`}>{activeTreatment.title}</h3>
                <p className={`${outfit.className} text-base text-zinc-600 leading-relaxed`}>{activeTreatment.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeTreatment.benefits.map((benefit) => (
                  <span
                    key={benefit}
                    className={`${outfit.className} inline-flex items-center rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700`}
                  >
                    <svg className="mr-1.5 h-3.5 w-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Treatment List */}
            <div className="space-y-3">
              {visibleTreatments.map((treatment) => (
                <div
                  key={treatment.name}
                  className="group rounded-xl bg-zinc-50 p-5 transition-all hover:bg-zinc-100"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <h4 className={`${outfit.className} text-base font-semibold text-foreground`}>{treatment.name}</h4>
                      <div className="mt-1.5 flex items-center gap-3 text-sm text-zinc-500">
                        <span className="flex items-center">
                          <svg className="mr-1 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                          </svg>
                          {treatment.duration}
                        </span>
                        <span className="text-zinc-300">•</span>
                        <span className={`${outfit.className} font-semibold text-foreground`}>{treatment.price}</span>
                      </div>
                    </div>
                    <a
                      href={siteConfig.bookingUrl}
                      className={`${outfit.className} text-sm font-medium text-primary hover:underline`}
                    >
                      Boek →
                    </a>
                  </div>
                </div>
              ))}
              {hasMore && (
                <button
                  onClick={() => setShowAll(!showAll)}
                  className={`${outfit.className} w-full py-3 text-sm font-medium text-primary hover:text-primary-hover transition-colors`}
                >
                  {showAll ? "Toon minder ↑" : `Toon alle ${activeTreatment.treatments.length} behandelingen ↓`}
                </button>
              )}
              <div className="mt-6 pt-6 border-t border-zinc-200">
                <p className={`${outfit.className} text-sm text-zinc-600 mb-4`}>
                  Niet zeker welke behandeling bij jou past?
                </p>
                <Button
                  href={siteConfig.bookingUrl}
                  className={`${outfit.className} h-11 rounded-full bg-primary px-6 text-sm font-medium text-white hover:bg-primary-hover transition-colors`}
                >
                  Plan gratis consult
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile: Stacked layout */}
          <div className="block lg:hidden space-y-6">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
              <Image
                src={activeTreatment.image}
                alt={activeTreatment.title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className={`${marcellus.className} text-2xl text-foreground mb-2`}>{activeTreatment.title}</h3>
              <p className={`${outfit.className} text-sm text-zinc-600 leading-relaxed`}>{activeTreatment.description}</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {activeTreatment.benefits.map((benefit) => (
                <span
                  key={benefit}
                  className={`${outfit.className} inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700`}
                >
                  <svg className="mr-1 h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {benefit}
                </span>
              ))}
            </div>
            <div className="space-y-2">
              {visibleTreatments.map((treatment) => (
                <div
                  key={treatment.name}
                  className="rounded-xl bg-zinc-50 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h4 className={`${outfit.className} text-sm font-semibold text-foreground`}>{treatment.name}</h4>
                      <div className="mt-1 flex items-center gap-2 text-xs text-zinc-500">
                        <span>{treatment.duration}</span>
                        <span className="text-zinc-300">•</span>
                        <span className={`${outfit.className} font-semibold text-foreground`}>{treatment.price}</span>
                      </div>
                    </div>
                    <a
                      href={siteConfig.bookingUrl}
                      className={`${outfit.className} text-xs font-medium text-primary`}
                    >
                      Boek →
                    </a>
                  </div>
                </div>
              ))}
              {hasMore && (
                <button
                  onClick={() => setShowAll(!showAll)}
                  className={`${outfit.className} w-full py-2 text-sm font-medium text-primary`}
                >
                  {showAll ? "Toon minder ↑" : `Toon alle ${activeTreatment.treatments.length} ↓`}
                </button>
              )}
            </div>
            <div className="pt-4 border-t border-zinc-200">
              <p className={`${outfit.className} text-sm text-zinc-600 mb-3`}>
                Niet zeker welke behandeling bij jou past?
              </p>
              <Button
                href={siteConfig.bookingUrl}
                className={`${outfit.className} w-full h-11 rounded-full bg-primary text-sm font-medium text-white hover:bg-primary-hover transition-colors`}
              >
                Plan gratis consult
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
