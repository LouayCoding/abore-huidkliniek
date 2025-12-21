"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/ui";
import { marcellus, outfit } from "@/lib/fonts";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const images = [
  { src: "/hero/1.jpg", category: "Kliniek" },
  { src: "/hero/2.jpg", category: "Behandeling" },
  { src: "/hero/3.jpg", category: "Apparatuur" },
  { src: "/hero/10.jpg", category: "Kliniek" },
  { src: "/hero/11.jpg", category: "Behandeling" },
  { src: "/hero/14.jpg", category: "Apparatuur" },
];

export function GallerySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

    if (gridRef.current) {
      const items = Array.from(gridRef.current.querySelectorAll(".gallery-item"));
      items.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            delay: i * 0.05,
            scrollTrigger: { trigger: el, start: "top 92%" },
          }
        );
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="gallery" className="bg-zinc-50">
      <Container className="py-16 sm:py-24">
        {/* Section Header */}
        <div ref={titleRef} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className={`${marcellus.className} text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight tracking-wide text-foreground mb-4`}>
            Ontdek onze <span className="text-primary">kliniek</span>
          </h2>
          <p className={`${outfit.className} text-base sm:text-lg text-zinc-600 leading-relaxed`}>
            Een kijkje in onze moderne behandelruimtes en geavanceerde apparatuur
          </p>
        </div>

        {/* Gallery Grid - Clean & Simple */}
        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {images.map((image, i) => (
            <button
              key={image.src}
              onClick={() => setOpenIndex(i)}
              className="gallery-item group relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <Image 
                src={image.src} 
                alt={image.category} 
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
              
              {/* Category Label - Always visible on mobile */}
              <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
                <span className={`${outfit.className} text-xs sm:text-sm font-medium text-white drop-shadow-md`}>
                  {image.category}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <a 
            href="https://abor.boekingapp.nl/"
            className={`${outfit.className} text-sm font-medium text-primary hover:text-primary-hover transition-colors`}
          >
            Wil je onze kliniek persoonlijk ervaren? Plan een bezoek →
          </a>
        </div>
      </Container>

      {/* Lightbox Modal */}
      {openIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setOpenIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setOpenIndex(null)}
            className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white transition-colors hover:bg-white/20"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Buttons */}
          {openIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex(openIndex - 1);
              }}
              className="absolute left-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white transition-colors hover:bg-white/20"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {openIndex < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex(openIndex + 1);
              }}
              className="absolute right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white transition-colors hover:bg-white/20"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div className="relative max-h-[90vh] max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={images[openIndex].src} 
              alt={images[openIndex].category}
              width={1600} 
              height={1000} 
              className="h-auto w-full rounded-xl object-contain" 
            />
            <div className="mt-4 text-center">
              <p className={`${outfit.className} text-white/80`}>{images[openIndex].category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
