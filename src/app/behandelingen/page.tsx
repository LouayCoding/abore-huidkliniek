"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Button } from "@/components/ui";
import { marcellus, outfit } from "@/lib/fonts";
import { HeaderTransparent } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { siteConfig } from "@/data/site-config";

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
    treatments: ["LPG cellulitis", "Huidverslapping", "Striemen"],
    priceFrom: "€65",
  },
  {
    slug: "tatoeage-verwijderen",
    title: "Tatoeageverwijdering",
    description: "Veilige en effectieve picolaser verwijdering van tatoeages",
    image: "/hero/3.jpg",
    treatments: ["Gratis consult", "0-10 cm²", "11-25 cm²", "26+ cm²"],
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
      
      {/* Hero Section with Image */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-end overflow-hidden">
        <Image 
          src="/hero/1.jpg" 
          alt="Behandelingen Aboré" 
          fill 
          priority
          className="object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        
        <Container className="relative z-10 pb-12 sm:pb-16 pt-32">
          <div ref={titleRef} className="max-w-3xl">
            <h1 className={`${marcellus.className} text-4xl sm:text-5xl lg:text-[3.5rem] leading-tight tracking-wide text-white mb-4`}>
              <span className="text-primary">Behandelingen</span> die jouw huid natuurlijk laten stralen
            </h1>
            <p className={`${outfit.className} text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl`}>
              Ontdek onze professionele huid- en laserbehandelingen met transparante prijzen
            </p>
          </div>
        </Container>
      </section>

      {/* Treatments Grid */}
      <section className="bg-white">
        <Container className="py-16 sm:py-24">
          <div ref={gridRef} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {behandelingen.map((behandeling) => (
              <Link
                key={behandeling.slug}
                href={`/behandelingen/${behandeling.slug}`}
                className="treatment-card group"
              >
                <div className="rounded-xl bg-zinc-50 overflow-hidden transition-all hover:bg-zinc-100">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={behandeling.image}
                      alt={behandeling.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className={`${marcellus.className} text-xl text-foreground`}>
                        {behandeling.title}
                      </h3>
                      <span className={`${outfit.className} text-xs font-semibold text-primary shrink-0`}>
                        v.a. {behandeling.priceFrom}
                      </span>
                    </div>
                    
                    <p className={`${outfit.className} text-sm text-zinc-600 mb-4`}>
                      {behandeling.description}
                    </p>

                    {/* Treatments List */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {behandeling.treatments.slice(0, 3).map((treatment) => (
                        <span
                          key={treatment}
                          className={`${outfit.className} text-xs px-2.5 py-1 rounded-full bg-white text-zinc-600`}
                        >
                          {treatment}
                        </span>
                      ))}
                      {behandeling.treatments.length > 3 && (
                        <span className={`${outfit.className} text-xs px-2.5 py-1 rounded-full bg-white text-zinc-500`}>
                          +{behandeling.treatments.length - 3}
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <span className={`${outfit.className} text-sm font-medium text-primary`}>
                      Bekijk behandelingen →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-50">
        <Container className="py-16 sm:py-20">
          <div className="max-w-3xl">
            <h2 className={`${marcellus.className} text-2xl sm:text-3xl text-foreground mb-3`}>
              Niet zeker welke <span className="text-primary">behandeling</span> bij jou past?
            </h2>
            <p className={`${outfit.className} text-base text-zinc-600 mb-6`}>
              Plan een gratis consult en ontvang persoonlijk advies van onze huidspecialisten
            </p>
            <div className="flex items-center gap-6">
              <Button
                href={siteConfig.bookingUrl}
                className={`${outfit.className} h-11 rounded-full bg-primary px-6 text-sm font-medium text-white hover:bg-primary-hover transition-colors`}
              >
                Plan gratis consult
              </Button>
              <a
                href="/contact"
                className={`${outfit.className} text-sm font-medium text-zinc-600 hover:text-primary transition-colors`}
              >
                Neem contact op →
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
