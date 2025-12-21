"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/ui";
import { marcellus, outfit } from "@/lib/fonts";
import { HeaderTransparent } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const allImages = [
  { src: "/hero/1.jpg", category: "Kliniek", title: "Ontvangstruimte" },
  { src: "/hero/2.jpg", category: "Behandeling", title: "Gezichtsbehandeling" },
  { src: "/hero/3.jpg", category: "Apparatuur", title: "Laser apparaat" },
  { src: "/hero/4.jpg", category: "Kliniek", title: "Behandelkamer" },
  { src: "/hero/5.jpg", category: "Behandeling", title: "Huidanalyse" },
  { src: "/hero/6.jpg", category: "Resultaat", title: "Voor & Na" },
  { src: "/hero/7.jpg", category: "Kliniek", title: "Wachtruimte" },
  { src: "/hero/8.jpg", category: "Apparatuur", title: "Premium systeem" },
  { src: "/hero/10.jpg", category: "Behandeling", title: "Laserontharing" },
  { src: "/hero/11.jpg", category: "Kliniek", title: "Interieur" },
  { src: "/hero/12.jpg", category: "Resultaat", title: "Behandelresultaat" },
  { src: "/hero/13.jpg", category: "Behandeling", title: "Huidverjonging" },
  { src: "/hero/14.jpg", category: "Apparatuur", title: "CE-gecertificeerd" },
  { src: "/hero/15.jpg", category: "Kliniek", title: "Luxe omgeving" },
];

export default function GalerijPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
  }, []);

  useEffect(() => {
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
    <>
      <HeaderTransparent />
      
      {/* Hero Section */}
      <section className="relative isolate min-h-[60vh] overflow-hidden flex items-center justify-center">
        <Image 
          src="/hero/7.jpg" 
          alt="Galerij" 
          fill 
          priority
          className="object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        
        <Container className="relative z-10 text-center">
          <h1 className={`${marcellus.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6`}>
            Galerij
          </h1>
          <p className={`${outfit.className} text-lg sm:text-xl text-white/90 max-w-2xl mx-auto`}>
            Een kijkje in onze luxe kliniek, moderne apparatuur en behandelresultaten
          </p>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="relative overflow-hidden bg-[#faf6ea]">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2" />
        
        <Container className="relative py-20 sm:py-32">
          {/* Section Title */}
          <div ref={titleRef} className="mb-12 text-center">
            <p className={`${outfit.className} text-zinc-600`}>
              {allImages.length} afbeeldingen
            </p>
          </div>

          {/* Gallery Grid */}
          <div ref={gridRef} className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
            {allImages.map((image, i) => (
              <button
                key={image.src}
                onClick={() => setOpenIndex(i)}
                className="gallery-item group relative overflow-hidden rounded-2xl aspect-square"
              >
                <Image 
                  src={image.src} 
                  alt={image.title} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Title & Category */}
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="rounded-lg bg-white/95 backdrop-blur-sm px-3 py-2">
                    <p className={`${marcellus.className} text-sm font-medium text-foreground`}>{image.title}</p>
                    <p className={`${outfit.className} text-xs text-zinc-600 mt-0.5`}>{image.category}</p>
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <svg className="h-5 w-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className={`${outfit.className} text-zinc-600 mb-4`}>
              Wil je onze kliniek persoonlijk ervaren?
            </p>
            <a 
              href="https://abor.boekingapp.nl/" 
              className={`${outfit.className} inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-white hover:bg-primary-hover transition-all shadow-lg shadow-primary/20`}
            >
              Plan een rondleiding
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </Container>
      </section>

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
          {openIndex < allImages.length - 1 && (
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
              src={allImages[openIndex].src} 
              alt={allImages[openIndex].title}
              width={1600} 
              height={1000} 
              className="h-auto w-full rounded-xl object-contain" 
            />
            <div className="mt-4 text-center">
              <p className={`${marcellus.className} text-xl text-white mb-1`}>{allImages[openIndex].title}</p>
              <p className={`${outfit.className} text-white/80`}>{allImages[openIndex].category}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
