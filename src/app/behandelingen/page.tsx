"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Button } from "@/components/ui";
import { marcellus, syne } from "@/lib/fonts";
import { HeaderTransparent } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const behandelingen = [
  {
    slug: "laserontharing",
    title: "Laserontharing",
    description: "Permanente ontharing voor gezicht en lichaam met premium laser",
    image: "/hero/5.jpg",
    treatments: ["Bovenlip", "Oksels", "Benen", "Lichaam"],
    priceFrom: "€30",
  },
  {
    slug: "acne-rosacea",
    title: "Acne & Rosacea",
    description: "Effectieve behandelingen voor acne, rosacea en littekens",
    image: "/hero/2.jpg",
    treatments: ["Diepte reiniging", "Mesoestetic peeling", "Microneedling", "TCA Cross"],
    priceFrom: "€85",
  },
  {
    slug: "huidverjonging",
    title: "Huidverjonging",
    description: "Anti-aging behandelingen voor een jeugdige, stralende huid",
    image: "/hero/11.jpg",
    treatments: ["Laser facial", "Microneedling", "Skin boosters", "LPG endermologie"],
    priceFrom: "€65",
  },
  {
    slug: "pigmentbehandeling",
    title: "Pigmentbehandeling",
    description: "Verwijdering van pigmentvlekken, melasma en permanente make-up",
    image: "/hero/6.jpg",
    treatments: ["Ouderdomsvlekken", "Melasma", "PMU verwijdering", "Picolaser"],
    priceFrom: "€90",
  },
  {
    slug: "lichaamsbehandelingen",
    title: "Lichaamsbehandelingen",
    description: "Body contouring, cellulitis en huidverslapping behandelingen",
    image: "/hero/13.jpg",
    treatments: ["LPG cellulitis", "Huidverslapping", "Striemen", "Tatoeage verwijdering"],
    priceFrom: "€50",
  },
  {
    slug: "haargroeitherapie",
    title: "Haargroeitherapie",
    description: "Stimuleer haargroei met geavanceerde mesotherapie behandelingen",
    image: "/hero/14.jpg",
    treatments: ["Hoofdhuid", "Baard", "Pakket behandelingen", "Consult"],
    priceFrom: "€90",
  },
];

export default function BehandelingenPage() {
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Title animation
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }

    // Grid animations
    if (gridRef.current) {
      const items = Array.from(gridRef.current.querySelectorAll(".treatment-card"));
      items.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: { trigger: el, start: "top 90%" },
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
      
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/hero/1.jpg" 
          alt="Behandelingen Aboré" 
          fill 
          priority
          className="object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
        
        <Container className="relative z-10 text-center py-20">
          <div ref={titleRef}>
            <p className={`${syne.className} text-sm font-medium uppercase tracking-widest text-primary mb-4`}>
              Onze Expertise
            </p>
            <h1 className={`${marcellus.className} text-4xl sm:text-5xl lg:text-6xl text-white mb-6`}>
              Behandelingen
            </h1>
            <p className={`${syne.className} text-lg text-white/80 max-w-2xl mx-auto`}>
              Ontdek onze professionele huid- en laserbehandelingen met transparante prijzen
            </p>
          </div>
        </Container>
      </section>

      {/* Treatments Grid - Clean cards like homepage */}
      <section className="bg-white">
        <Container className="py-16 sm:py-24">
          <div ref={gridRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {behandelingen.map((behandeling) => (
              <Link
                key={behandeling.slug}
                href={`/behandelingen/${behandeling.slug}`}
                className="treatment-card group"
              >
                <div className="rounded-lg border border-zinc-200 bg-white overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-lg">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={behandeling.image}
                      alt={behandeling.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className={`${marcellus.className} text-2xl text-foreground`}>
                        {behandeling.title}
                      </h3>
                      <span className={`${syne.className} text-sm font-semibold text-primary`}>
                        Vanaf {behandeling.priceFrom}
                      </span>
                    </div>
                    
                    <p className={`${syne.className} text-zinc-600 mb-4`}>
                      {behandeling.description}
                    </p>

                    {/* Treatments List */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {behandeling.treatments.slice(0, 3).map((treatment) => (
                        <span
                          key={treatment}
                          className={`${syne.className} text-xs px-3 py-1.5 rounded-full border border-zinc-200 text-zinc-600`}
                        >
                          {treatment}
                        </span>
                      ))}
                      {behandeling.treatments.length > 3 && (
                        <span className={`${syne.className} text-xs px-3 py-1.5 rounded-full border border-zinc-200 text-zinc-600`}>
                          +{behandeling.treatments.length - 3}
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-primary">
                      <span className={`${syne.className} text-sm font-medium`}>
                        Bekijk behandelingen
                      </span>
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-[#faf6ea]">
        <Container className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`${marcellus.className} text-3xl sm:text-4xl text-foreground mb-4`}>
              Niet zeker welke behandeling bij jou past?
            </h2>
            <p className={`${syne.className} text-lg text-zinc-600 mb-8`}>
              Plan een gratis consult en ontvang persoonlijk advies van onze huidspecialisten
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="https://abor.boekingapp.nl/"
                className={`${syne.className} rounded-full`}
              >
                Plan gratis consult
              </Button>
              <Button
                href="/contact"
                variant="outline"
                className={`${syne.className} rounded-full`}
              >
                Neem contact op
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
