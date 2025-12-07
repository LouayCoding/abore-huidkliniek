"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/ui";
import { marcellus, syne } from "@/lib/fonts";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: "/hero/1.jpg", category: "Kliniek", span: "col-span-2 row-span-2" },
  { src: "/hero/2.jpg", category: "Behandeling", span: "" },
  { src: "/hero/3.jpg", category: "Apparatuur", span: "" },
  { src: "/hero/10.jpg", category: "Kliniek", span: "" },
  { src: "/hero/11.jpg", category: "Behandeling", span: "col-span-2" },
  { src: "/hero/12.jpg", category: "Resultaat", span: "" },
  { src: "/hero/13.jpg", category: "Kliniek", span: "" },
  { src: "/hero/14.jpg", category: "Apparatuur", span: "col-span-2" },
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
    <section ref={sectionRef} id="gallery" className="relative overflow-hidden bg-[#faf6ea]">
      {/* Decorative blur */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2" />
      
      <Container className="relative py-20 sm:py-32">
        {/* Section Header */}
        <div ref={titleRef} className="mx-auto max-w-3xl text-center mb-16">
          <p className={`${syne.className} text-sm font-medium uppercase tracking-widest text-primary mb-4`}>
            Galerij
          </p>
          <h2 className={`${marcellus.className} text-3xl sm:text-4xl lg:text-5xl tracking-wide text-foreground leading-tight`}>
            Ontdek onze luxe kliniek
          </h2>
          <p className={`${syne.className} mt-6 text-lg text-zinc-600`}>
            Een kijkje in onze moderne behandelruimtes en geavanceerde apparatuur
          </p>
        </div>

        {/* Gallery Grid - Masonry Style */}
        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] sm:auto-rows-[250px]">
          {images.map((image, i) => (
            <button
              key={image.src}
              onClick={() => setOpenIndex(i)}
              className={`gallery-item group relative overflow-hidden rounded-2xl ${image.span}`}
            >
              <Image 
                src={image.src} 
                alt={image.category} 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Category Label */}
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="rounded-lg bg-white/95 backdrop-blur-sm px-3 py-2">
                  <p className={`${syne.className} text-sm font-medium text-foreground`}>{image.category}</p>
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

        {/* Bottom Text */}
        <div className="mt-12 text-center">
          <p className={`${syne.className} text-zinc-600`}>
            Wil je onze kliniek persoonlijk ervaren?{" "}
            <a href="https://abor.boekingapp.nl/" className="text-primary hover:text-primary-hover transition-colors font-medium">
              Plan een rondleiding
            </a>
          </p>
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
              <p className={`${syne.className} text-white/80`}>{images[openIndex].category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
