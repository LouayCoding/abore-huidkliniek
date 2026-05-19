"use client";
import { useEffect, useRef } from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Container, Button } from "@/components/ui";
import { marcellus, outfit } from "@/lib/fonts";
import { HeaderTransparent } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { organizationSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { siteConfig } from "@/data/site-config";

const acneServiceSchema = serviceSchema({
  name: "Acne en Rosacea Behandeling",
  description: "Professionele acne behandeling met diepte reiniging, peelings en microneedling",
  url: "https://huidkliniekabore.nl/acne-behandeling",
  priceRange: "85-100",
  duration: "PT45M-PT60M"
});

const acneFaqSchema = faqSchema([
  {
    question: "Hoeveel behandelingen heb ik nodig voor acne?",
    answer: "Gemiddeld 6-10 behandelingen met 2-4 weken tussentijd. Bij ernstige acne kan een langere kuur nodig zijn."
  },
  {
    question: "Werkt acne behandeling ook bij rosacea?",
    answer: "Ja, we gebruiken speciale protocollen voor rosacea zoals de Mesoestetic Redness Repair peeling die ontstekingen kalmeert."
  },
  {
    question: "Kan ik acne littekens laten behandelen?",
    answer: "Ja, microneedling en TCA Cross zijn zeer effectief voor acne littekens. Resultaat zichtbaar na 3-6 behandelingen."
  }
]);

export default function AcneBehandelingPage() {
  const sectionsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      "body",
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.out" }
    );

    if (sectionsRef.current) {
      const sections = sectionsRef.current.querySelectorAll("section");
      
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
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
      <SchemaMarkup schema={[organizationSchema, acneServiceSchema, acneFaqSchema]} />
      
      <div className="min-h-screen bg-white text-zinc-900">
        <HeaderTransparent variant="light" />
        
        {/* Compact Hero Section */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-b from-zinc-50 to-white">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Medisch Verantwoord
                </div>
                <h1 className={`${marcellus.className} text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-tight`}>
                  Acne & Rosacea Behandeling
                </h1>
                <p className={`${outfit.className} text-lg sm:text-xl text-zinc-600 mb-8 leading-relaxed`}>
                  Effectieve behandelingen voor acne, rosacea en acne littekens. Van diepte reiniging tot geavanceerde microneedling.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    href={siteConfig.bookingUrl}
                    className={`${outfit.className} h-12 rounded-full bg-primary px-8 text-white hover:bg-primary-hover transition-all`}
                  >
                    Boek gratis consult
                  </Button>
                  <a 
                    href="#behandelingen"
                    className={`${outfit.className} h-12 inline-flex items-center justify-center rounded-full border-2 border-zinc-300 px-8 text-zinc-700 hover:border-primary hover:text-primary transition-all`}
                  >
                    Bekijk behandelingen
                  </a>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative">
                <div className="relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/hero/2.jpg" 
                    alt="Acne Behandeling" 
                    fill 
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-zinc-100">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className={`${marcellus.className} text-2xl text-foreground`}>3000+</p>
                      <p className={`${outfit.className} text-sm text-zinc-600`}>Tevreden cliënten</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <main ref={sectionsRef}>
          {/* Voor Wie Section with Image */}
          <section>
            <Container className="py-16 sm:py-24">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image Left */}
                <div className="order-last lg:order-first">
                  <div className="relative h-[500px] rounded-2xl overflow-hidden">
                    <Image 
                      src="/hero/5.jpg" 
                      alt="Voor wie is acne behandeling" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content Right */}
                <div>
                  <h2 className={`${marcellus.className} text-3xl sm:text-4xl text-foreground mb-6`}>
                    Voor wie is deze behandeling?
                  </h2>
                  <p className={`${outfit.className} text-lg text-zinc-600 mb-8`}>
                    Onze acne behandelingen zijn geschikt voor verschillende huidproblemen en kunnen op elk huidtype worden toegepast.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 hover:bg-primary/5 transition-colors">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className={`${outfit.className} font-semibold text-foreground mb-1`}>Actieve Acne</h3>
                        <p className={`${outfit.className} text-sm text-zinc-600`}>Puistjes, mee-eters en ontstekingen</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 hover:bg-primary/5 transition-colors">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className={`${outfit.className} font-semibold text-foreground mb-1`}>Acne Littekens</h3>
                        <p className={`${outfit.className} text-sm text-zinc-600`}>Diepe of oppervlakkige littekens door eerdere acne</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 hover:bg-primary/5 transition-colors">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className={`${outfit.className} font-semibold text-foreground mb-1`}>Rosacea</h3>
                        <p className={`${outfit.className} text-sm text-zinc-600`}>Roodheid, zichtbare bloedvaatjes en ontstekingen</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 hover:bg-primary/5 transition-colors">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className={`${outfit.className} font-semibold text-foreground mb-1`}>Onzuivere Huid</h3>
                        <p className={`${outfit.className} text-sm text-zinc-600`}>Verstopte poriën en een vette glans</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* Behandelingen Section */}
          <section id="behandelingen" className="bg-zinc-50">
            <Container className="py-16 sm:py-24">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className={`${marcellus.className} text-3xl sm:text-4xl text-foreground mb-4`}>
                    Effectieve Acne Behandelingen
                  </h2>
                  <p className={`${outfit.className} text-lg text-zinc-600 max-w-2xl mx-auto`}>
                    Bij Aboré Huidkliniek bieden we verschillende behandelingen aan voor acne, rosacea en acne littekens. Van diepte reiniging tot geavanceerde medische peelings en microneedling.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  <div className="p-6 rounded-2xl bg-white border border-zinc-200">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className={`${marcellus.className} text-xl text-foreground mb-3`}>Diepte Reiniging</h3>
                    <p className={`${outfit.className} text-sm text-zinc-600`}>
                      Intensieve reiniging waarbij we talg, mee-eters en onzuiverheden verwijderen. De behandeling bestaat uit extracties, gevolgd door een diep reinigend masker en hydraterende nazorgproducten.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white border border-zinc-200">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className={`${marcellus.className} text-xl text-foreground mb-3`}>Medische Peelings</h3>
                    <p className={`${outfit.className} text-sm text-zinc-600`}>
                      Mesoestetic peelings specifiek ontwikkeld voor acne en rosacea. Vermindert ontstekingen en reguleert talgproductie. Bij het opstellen van het behandelplan wordt het meest geschikte fruitzuur peeling gekozen voor optimale resultaten.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white border border-zinc-200">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className={`${marcellus.className} text-xl text-foreground mb-3`}>Microneedling</h3>
                    <p className={`${outfit.className} text-sm text-zinc-600`}>
                      Effectieve behandeling voor acne littekens. Stimuleert natuurlijke collageen productie voor een gladdere huidstructuur.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white border border-zinc-200">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className={`${marcellus.className} text-xl text-foreground mb-3`}>TCA Cross</h3>
                    <p className={`${outfit.className} text-sm text-zinc-600`}>
                      Gespecialiseerde behandeling voor diepe acne littekens. Stimuleert collageen productie van binnenuit.
                    </p>
                  </div>
                </div>

                {/* CTA Box */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 text-center">
                  <h3 className={`${marcellus.className} text-2xl text-foreground mb-3`}>
                    Welke behandeling past bij jou?
                  </h3>
                  <p className={`${outfit.className} text-zinc-600 mb-6`}>
                    Plan een gratis consult en ontdek welke behandeling het beste resultaat geeft voor jouw huid
                  </p>
                  <Button 
                    href={siteConfig.bookingUrl}
                    className={`${outfit.className} h-12 rounded-full bg-primary px-10 text-white hover:bg-primary-hover transition-all shadow-lg`}
                  >
                    Boek gratis consult
                  </Button>
                </div>
              </div>
            </Container>
          </section>

          {/* Hoe Werkt Het - With Image */}
          <section>
            <Container className="py-16 sm:py-24">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content Left */}
                <div>
                  <h2 className={`${marcellus.className} text-3xl sm:text-4xl text-foreground mb-8`}>
                    Hoe verloopt het traject?
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 border-2 border-primary/20">
                        <span className={`${marcellus.className} text-xl text-primary`}>1</span>
                      </div>
                      <div>
                        <h3 className={`${outfit.className} font-semibold text-foreground mb-2`}>Gratis Huidanalyse</h3>
                        <p className={`${outfit.className} text-sm text-zinc-600`}>
                          We analyseren je huid en bespreken je klachten en wensen
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 border-2 border-primary/20">
                        <span className={`${marcellus.className} text-xl text-primary`}>2</span>
                      </div>
                      <div>
                        <h3 className={`${outfit.className} font-semibold text-foreground mb-2`}>Behandelplan op Maat</h3>
                        <p className={`${outfit.className} text-sm text-zinc-600`}>
                          We stellen een persoonlijk plan samen met de juiste behandelingen
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 border-2 border-primary/20">
                        <span className={`${marcellus.className} text-xl text-primary`}>3</span>
                      </div>
                      <div>
                        <h3 className={`${outfit.className} font-semibold text-foreground mb-2`}>Aantal Sessies</h3>
                        <p className={`${outfit.className} text-sm text-zinc-600`}>
                          Gemiddeld 6-10 behandelingen met 2-4 weken interval voor optimaal resultaat
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 border-2 border-primary/20">
                        <span className={`${marcellus.className} text-xl text-primary`}>4</span>
                      </div>
                      <div>
                        <h3 className={`${outfit.className} font-semibold text-foreground mb-2`}>Nazorg & Advies</h3>
                        <p className={`${outfit.className} text-sm text-zinc-600`}>
                          Persoonlijk productadvies en nazorginstructies voor thuis
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Right */}
                <div>
                  <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                    <Image 
                      src="/hero/11.jpg" 
                      alt="Behandeltraject" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* Waarom Aboré */}
          <section className="bg-gradient-to-b from-zinc-50 to-white">
            <Container className="py-16 sm:py-24">
              <div className="text-center mb-12">
                <h2 className={`${marcellus.className} text-3xl sm:text-4xl text-foreground mb-4`}>
                  Waarom kiezen voor Aboré?
                </h2>
                <p className={`${outfit.className} text-lg text-zinc-600 max-w-2xl mx-auto`}>
                  Ervaring, expertise en persoonlijke aandacht in een luxe omgeving
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="p-6 rounded-2xl bg-white border border-zinc-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>Geregistreerde Huidtherapeuten</h3>
                  <p className={`${outfit.className} text-sm text-zinc-600`}>
                    Onze huidtherapeuten zijn KP-geregistreerde paramedici en vallen onder artikel 34 van de Wet BIG. Zij volgen continu bij- en nascholingen om te werken met de nieuwste technieken.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-zinc-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>Hoogwaardige Merken & Technologie</h3>
                  <p className={`${outfit.className} text-sm text-zinc-600`}>
                    Wij werken uitsluitend met hoogwaardige apparatuur en medische producten van toonaangevende merken, zoals Mesoestetic, LPG Endermologie, Pico-laser, Diode Ice, Microneedling, HairXL en Rejuran.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-zinc-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>6+ Jaar Ervaring</h3>
                  <p className={`${outfit.className} text-sm text-zinc-600`}>
                    Duizenden tevreden cliënten met zichtbare resultaten
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-zinc-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>Persoonlijke Aanpak</h3>
                  <p className={`${outfit.className} text-sm text-zinc-600`}>
                    Elk behandelplan op maat gemaakt voor jouw unieke huid
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-zinc-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>Centraal in Rijswijk</h3>
                  <p className={`${outfit.className} text-sm text-zinc-600`}>
                    Makkelijk bereikbaar vanaf Den Haag, Delft en Voorburg
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-zinc-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>4.9 Beoordeling</h3>
                  <p className={`${outfit.className} text-sm text-zinc-600`}>
                    Hooggewaardeerd door onze cliënten
                  </p>
                </div>
              </div>
            </Container>
          </section>

          {/* CTA Section */}
          <section className="bg-zinc-50">
            <Container className="py-16 sm:py-24">
              <div className="max-w-6xl mx-auto">
                <div className="bg-white border border-zinc-200 overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-80 lg:h-auto">
                      <Image 
                        src="/hero/14.jpg" 
                        alt="Plan je afspraak" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 lg:p-12">
                      <h2 className={`${marcellus.className} text-3xl sm:text-4xl text-foreground mb-4`}>
                        Start vandaag met je acne behandeling
                      </h2>
                      <p className={`${outfit.className} text-lg text-zinc-600 mb-8`}>
                        Plan een gratis consult en ontdek welke behandeling perfect bij jouw huid past.
                      </p>
                      
                      <div className="space-y-3 mb-8">
                        <div className="flex items-center gap-3">
                          <svg className="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className={`${outfit.className} text-zinc-700`}>Gratis huidanalyse en advies</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <svg className="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className={`${outfit.className} text-zinc-700`}>Persoonlijk behandelplan</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <svg className="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className={`${outfit.className} text-zinc-700`}>Direct online boeken</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <Button
                          href={siteConfig.bookingUrl}
                          className={`${outfit.className} h-12 rounded-full bg-primary px-8 text-white hover:bg-primary-hover transition-all`}
                        >
                          Boek gratis consult
                        </Button>
                        <a
                          href="/contact"
                          className={`${outfit.className} h-12 inline-flex items-center justify-center rounded-full border-2 border-zinc-300 px-8 text-zinc-700 hover:border-primary hover:text-primary transition-all`}
                        >
                          Stel een vraag
                        </a>
                      </div>

                      <div className="pt-8 border-t border-zinc-200">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-600">
                          <div className="flex items-center gap-2">
                            <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>Waldhoornplein 14, Rijswijk</span>
                          </div>
                          <span className="text-zinc-300">•</span>
                          <div className="flex items-center gap-2">
                            <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>+31 6 34 53 33 58</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
