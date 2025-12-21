"use client";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { Container, Button } from "@/components/ui";
import { marcellus, outfit } from "@/lib/fonts";
import { SplitText } from "@/components/animations/split-text";
import { heroSlides, siteConfig } from "@/data/site-config";
import { CAROUSEL_AUTO_PLAY_INTERVAL } from "@/lib/constants";

const slides = heroSlides;

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, CAROUSEL_AUTO_PLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
        setIsAutoPlaying(false);
      } else if (e.key === 'ArrowRight') {
        nextSlide();
        setIsAutoPlaying(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section className="relative isolate min-h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image 
            src={slide.image} 
            alt={slide.title} 
            fill 
            priority={index === 0}
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 flex min-h-screen items-end sm:items-center">
        <Container className="pb-24 sm:py-28 w-full">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Animated content based on current slide */}
            <div
              key={currentSlide}
              className="animate-fade-in"
            >
              <h1 className={`${marcellus.className} text-4xl tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6`}>
                <SplitText delay={0.2}>
                  {slides[currentSlide].title}
                </SplitText>
              </h1>
              <p className={`${outfit.className} text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto`}>
                {slides[currentSlide].subtitle}
              </p>
              <Button 
                href={siteConfig.bookingUrl} 
                className={`${outfit.className} h-14 rounded-full bg-primary px-10 text-white hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all hover:scale-105`}
              >
                {slides[currentSlide].cta}
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Navigation Arrows - Desktop */}
      <div className="hidden sm:block">
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white transition-all hover:bg-white/20 hover:scale-110"
          aria-label="Previous slide"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white transition-all hover:bg-white/20 hover:scale-110"
          aria-label="Next slide"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentSlide
                ? "w-12 bg-primary"
                : "w-3 bg-white/50 hover:bg-white/70"
            } h-3 rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
