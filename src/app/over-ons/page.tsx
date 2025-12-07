"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { Container } from "@/components/ui";
import { marcellus, syne } from "@/lib/fonts";
import { HeaderTransparent } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OverOnsPage() {
  const heroRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax hero image
    if (heroRef.current) {
      const heroImage = heroRef.current.querySelector(".hero-image");
      gsap.to(heroImage, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Story section animations
    if (storyRef.current) {
      const elements = storyRef.current.querySelectorAll(".animate-in");
      elements.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    }

    // Values cards stagger
    if (valuesRef.current) {
      const cards = valuesRef.current.querySelectorAll(".value-card");
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // Gallery reveal
    if (galleryRef.current) {
      const images = galleryRef.current.querySelectorAll(".gallery-image");
      images.forEach((img, i) => {
        gsap.fromTo(
          img,
          { scale: 1.2, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: img,
              start: "top 85%",
            },
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <HeaderTransparent />
      
      {/* Hero - Full Screen with Parallax */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <div className="hero-image absolute inset-0 scale-110">
          <Image 
            src="/hero/11.jpg" 
            alt="Aboré Huidkliniek" 
            fill 
            priority
            className="object-cover" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        
        <Container className="relative z-10 h-full flex flex-col justify-end pb-20">
          <p className={`${syne.className} text-sm font-medium uppercase tracking-[0.3em] text-primary mb-4`}>
            Welkom bij
          </p>
          <h1 className={`${marcellus.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6`}>
            Aboré
          </h1>
          <p className={`${syne.className} text-xl text-white/80 max-w-lg`}>
            Luxe laser- en huidkliniek waar expertise en persoonlijke zorg samenkomen
          </p>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className={`${syne.className} text-xs text-white/60 uppercase tracking-widest`}>Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
          </div>
        </Container>
      </section>

      {/* Intro Statement */}
      <section className="bg-white">
        <Container className="py-24 sm:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <p className={`${marcellus.className} text-3xl sm:text-4xl md:text-5xl text-foreground leading-relaxed`}>
              Wij geloven dat iedereen recht heeft op een{" "}
              <span className="text-primary">gezonde, stralende huid</span>. 
              Daarom combineren we de nieuwste technologie met persoonlijke aandacht.
            </p>
          </div>
        </Container>
      </section>

      {/* Story Section - Asymmetric Layout */}
      <section className="bg-[#faf6ea] overflow-hidden">
        <div ref={storyRef} className="py-24 sm:py-32">
          {/* First Block */}
          <Container className="mb-24">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5 animate-in">
                <p className={`${syne.className} text-sm font-medium uppercase tracking-widest text-primary mb-4`}>
                  Onze missie
                </p>
                <h2 className={`${marcellus.className} text-4xl sm:text-5xl text-foreground mb-6`}>
                  Schoonheid door expertise
                </h2>
                <p className={`${syne.className} text-lg text-zinc-600 leading-relaxed`}>
                  Bij Aboré draait alles om resultaat. We werken uitsluitend met CE-gecertificeerde 
                  premium apparatuur en medisch goedgekeurde producten. Elk behandelplan wordt 
                  zorgvuldig samengesteld op basis van jouw unieke huid en wensen.
                </p>
              </div>
              <div className="lg:col-span-7 animate-in">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/hero/4.jpg"
                    alt="Aboré Behandelkamer"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Container>

          {/* Second Block - Reversed */}
          <Container>
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-7 lg:order-1 animate-in">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/hero/7.jpg"
                    alt="Aboré Interieur"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-5 lg:order-2 animate-in">
                <p className={`${syne.className} text-sm font-medium uppercase tracking-widest text-primary mb-4`}>
                  Onze aanpak
                </p>
                <h2 className={`${marcellus.className} text-4xl sm:text-5xl text-foreground mb-6`}>
                  Persoonlijk & transparant
                </h2>
                <p className={`${syne.className} text-lg text-zinc-600 leading-relaxed`}>
                  Geen verborgen kosten, geen onrealistische beloftes. We nemen de tijd voor 
                  een uitgebreide huidanalyse en geven eerlijk advies. Jouw vertrouwen is 
                  de basis van alles wat we doen.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Stats - Elegant Horizontal */}
      <section className="bg-foreground text-white">
        <Container className="py-16 sm:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {[
              { number: "10+", label: "Jaar ervaring" },
              { number: "5000+", label: "Tevreden cliënten" },
              { number: "4.9", label: "Beoordeling" },
              { number: "100%", label: "CE-gecertificeerd" },
            ].map((stat, i) => (
              <div key={stat.label} className="text-center lg:border-r lg:last:border-r-0 border-white/10">
                <div className={`${marcellus.className} text-5xl sm:text-6xl text-primary mb-2`}>
                  {stat.number}
                </div>
                <p className={`${syne.className} text-sm text-white/60`}>{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values - Elegant Bento Grid */}
      <section className="bg-white overflow-hidden">
        <Container className="py-24 sm:py-32">
          <div className="text-center mb-16">
            <p className={`${syne.className} text-sm font-medium uppercase tracking-widest text-primary mb-4`}>
              Waar we voor staan
            </p>
            <h2 className={`${marcellus.className} text-4xl sm:text-5xl text-foreground`}>
              Onze waarden
            </h2>
          </div>

          <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Large Feature Card */}
            <div className="value-card group relative md:col-span-2 lg:col-span-1 lg:row-span-2 rounded-3xl overflow-hidden min-h-[400px]">
              <Image
                src="/hero/4.jpg"
                alt="Kwaliteit"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm text-white mb-4 group-hover:bg-primary transition-all duration-500">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <h3 className={`${marcellus.className} text-3xl text-white mb-3`}>
                  Kwaliteit
                </h3>
                <p className={`${syne.className} text-white/80 leading-relaxed`}>
                  We werken uitsluitend met CE-gecertificeerde premium apparatuur en medisch goedgekeurde producten voor optimale resultaten.
                </p>
              </div>
            </div>

            {/* Expertise Card */}
            <div className="value-card group p-8 rounded-3xl bg-[#faf6ea] hover:bg-foreground transition-all duration-500 min-h-[200px] flex flex-col justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-auto group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div>
                <h3 className={`${marcellus.className} text-2xl text-foreground mb-2 group-hover:text-white transition-colors duration-500`}>
                  Expertise
                </h3>
                <p className={`${syne.className} text-sm text-zinc-600 group-hover:text-white/70 transition-colors duration-500`}>
                  10+ jaar ervaring en voortdurende bijscholing
                </p>
              </div>
            </div>

            {/* Persoonlijk Card */}
            <div className="value-card group p-8 rounded-3xl bg-primary text-white min-h-[200px] flex flex-col justify-between hover:scale-[1.02] transition-all duration-500">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-white mb-auto">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div>
                <h3 className={`${marcellus.className} text-2xl mb-2`}>
                  Persoonlijk
                </h3>
                <p className={`${syne.className} text-sm text-white/80`}>
                  Elk behandelplan op maat voor jouw unieke huid
                </p>
              </div>
            </div>

            {/* Transparant Card - Wide */}
            <div className="value-card group md:col-span-2 p-8 rounded-3xl bg-foreground text-white min-h-[180px] flex items-center gap-8 hover:bg-zinc-800 transition-all duration-500">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className={`${marcellus.className} text-2xl mb-2`}>
                  Transparant
                </h3>
                <p className={`${syne.className} text-white/70`}>
                  Duidelijke prijzen, realistische verwachtingen en eerlijk advies. Geen verborgen kosten of onrealistische beloftes.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="bg-[#faf6ea]">
        <Container className="py-24 sm:py-32">
          <div className="text-center mb-16">
            <p className={`${syne.className} text-sm font-medium uppercase tracking-widest text-primary mb-4`}>
              Onze kliniek
            </p>
            <h2 className={`${marcellus.className} text-4xl sm:text-5xl text-foreground`}>
              Een kijkje binnen
            </h2>
          </div>

          <div ref={galleryRef} className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: "/hero/1.jpg", span: "col-span-2 lg:col-span-1 lg:row-span-2" },
              { src: "/hero/3.jpg", span: "" },
              { src: "/hero/8.jpg", span: "" },
              { src: "/hero/15.jpg", span: "col-span-2 lg:col-span-1" },
              { src: "/hero/14.jpg", span: "" },
            ].map((image, i) => (
              <div
                key={image.src}
                className={`gallery-image relative overflow-hidden rounded-2xl ${image.span} ${i === 0 ? 'aspect-square lg:aspect-auto' : 'aspect-[4/3]'}`}
              >
                <Image
                  src={image.src}
                  alt="Aboré Kliniek"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA - Elegant */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero/10.jpg"
            alt="Plan een afspraak"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <Container className="relative z-10 py-32 sm:py-40">
          <div className="max-w-2xl">
            <p className={`${syne.className} text-sm font-medium uppercase tracking-widest text-primary mb-4`}>
              Begin je reis
            </p>
            <h2 className={`${marcellus.className} text-4xl sm:text-5xl md:text-6xl text-white mb-6`}>
              Klaar voor jouw huidtransformatie?
            </h2>
            <p className={`${syne.className} text-lg text-white/70 mb-10`}>
              Plan een gratis consult en ontdek wat we voor jouw huid kunnen betekenen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://abor.boekingapp.nl/"
                className={`${syne.className} inline-flex items-center justify-center gap-2 rounded-full bg-primary px-10 py-4 text-white hover:bg-primary-hover transition-all`}
              >
                Plan gratis consult
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/contact"
                className={`${syne.className} inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-10 py-4 text-white hover:bg-white/10 transition-all`}
              >
                Neem contact op
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
