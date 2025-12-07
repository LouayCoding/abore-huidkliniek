"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Container, Button } from "@/components/ui";
import { marcellus, syne } from "@/lib/fonts";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "@/components/animations/split-text";

gsap.registerPlugin(ScrollTrigger);

type Treatment = {
  id: string;
  title: string;
  description: string;
  icon: string;
  treatments: { name: string; duration: string; price: string }[];
  benefits: string[];
  image: string;
};

const treatments: Treatment[] = [
  {
    id: "acne",
    title: "Acne & Rosacea",
    description: "Effectieve behandelingen voor acne, rosacea en littekens met geavanceerde technieken",
    icon: "01",
    treatments: [
      { name: "Diepte reiniging", duration: "45 min", price: "€85" },
      { name: "Mesoestetic peeling", duration: "45 min", price: "€100" },
      { name: "Microneedling littekens", duration: "45 min", price: "€100" },
      { name: "TCA Cross diepe littekens", duration: "40 min", price: "€100" },
    ],
    benefits: ["Zichtbare resultaten", "Medisch verantwoord", "Geen downtime"],
    image: "/hero/2.jpg",
  },
  {
    id: "huidverjonging",
    title: "Huidverjonging",
    description: "Anti-aging behandelingen voor een jeugdige, stralende huid",
    icon: "02",
    treatments: [
      { name: "Laser facial", duration: "45 min", price: "€130" },
      { name: "Microneedling rejuvenation", duration: "45 min", price: "€100" },
      { name: "Skin booster injecties", duration: "60 min", price: "€120" },
      { name: "LPG endermologie gelaat", duration: "30 min", price: "€65" },
    ],
    benefits: ["Natuurlijk resultaat", "Collageen boost", "Langdurig effect"],
    image: "/hero/11.jpg",
  },
  {
    id: "pigment",
    title: "Pigmentbehandeling",
    description: "Verwijdering van pigmentvlekken, melasma en permanente make-up",
    icon: "03",
    treatments: [
      { name: "Ouderdomsvlekken 1-3 vlekken", duration: "20 min", price: "€90" },
      { name: "Ouderdomsvlekken hele gezicht", duration: "50 min", price: "€185" },
      { name: "Melasma TCA behandeling", duration: "40 min", price: "€175" },
      { name: "PMU verwijdering wenkbrauwen", duration: "30 min", price: "€100" },
    ],
    benefits: ["Picolaser technologie", "Veilig & effectief", "Minimale bijwerkingen"],
    image: "/hero/6.jpg",
  },
  {
    id: "laserontharing",
    title: "Laserontharing",
    description: "Permanente ontharing voor gezicht en lichaam met premium laser",
    icon: "04",
    treatments: [
      { name: "Bovenlip", duration: "10 min", price: "€30" },
      { name: "Oksels", duration: "15 min", price: "€40" },
      { name: "Onderbenen", duration: "30 min", price: "€110" },
      { name: "Hele gelaat", duration: "20 min", price: "€90" },
    ],
    benefits: ["Langdurig resultaat", "Voor alle huidtypes", "CE-gecertificeerd"],
    image: "/hero/5.jpg",
  },
  {
    id: "lichaam",
    title: "Lichaamsbehandelingen",
    description: "Body contouring, cellulitis en huidverslapping behandelingen",
    icon: "05",
    treatments: [
      { name: "LPG cellulitis", duration: "30 min", price: "€75" },
      { name: "LPG huidverslapping", duration: "30 min", price: "€75" },
      { name: "Microneedling striemen", duration: "30 min", price: "Vanaf €65" },
      { name: "Tatoeageverwijdering", duration: "10-50 min", price: "Vanaf €50" },
    ],
    benefits: ["Niet-invasief", "Bewezen effectief", "Persoonlijk plan"],
    image: "/hero/13.jpg",
  },
  {
    id: "haargroei",
    title: "Haargroeitherapie",
    description: "Stimuleer haargroei met geavanceerde mesotherapie behandelingen",
    icon: "06",
    treatments: [
      { name: "Haargroeitherapie hoofdhuid", duration: "30 min", price: "€100" },
      { name: "Pakket 6x + producten", duration: "30 min", price: "€600" },
      { name: "Haargroeitherapie baard", duration: "20 min", price: "€90" },
      { name: "Consult + 1e behandeling", duration: "50 min", price: "€100" },
    ],
    benefits: ["Zichtbare groei", "Medische producten", "Bewezen methode"],
    image: "/hero/14.jpg",
  },
];

export function TreatmentsSection() {
  const [activeTab, setActiveTab] = useState<string>("acne");
  const [expandedTreatment, setExpandedTreatment] = useState<string | null>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const activeTreatment = treatments.find((t) => t.id === activeTab) || treatments[0];

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: titleRef.current, start: "top 85%" } }
      );
    }
    if (tabsRef.current) {
      gsap.fromTo(
        tabsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.1, scrollTrigger: { trigger: tabsRef.current, start: "top 85%" } }
      );
    }
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [activeTab]);

  return (
    <section id="behandelingen" className="bg-background">
      <Container className="py-16 sm:py-24">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 ref={titleRef} className={`${marcellus.className} text-4xl sm:text-5xl tracking-wide text-foreground`}>
            <SplitText>Behandelingen die jouw huid natuurlijk laten stralen</SplitText>
          </h2>
          <p className={`${syne.className} mt-4 text-lg text-zinc-700`}>
            Kies een categorie en ontdek onze behandelingen met transparante prijzen
          </p>
        </div>

        {/* Tabs - Desktop */}
        <div ref={tabsRef} className="mt-12 hidden md:flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-2">
            {treatments.map((treatment) => (
              <button
                key={treatment.id}
                onClick={() => setActiveTab(treatment.id)}
                className={`${syne.className} relative rounded-lg px-6 py-3 text-sm font-medium transition-all border ${
                  activeTab === treatment.id
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-zinc-700 border-zinc-200 hover:border-primary hover:text-primary"
                }`}
              >
                {treatment.title}
              </button>
            ))}
          </div>
        </div>

        {/* Tabs - Mobile Horizontal Scroll */}
        <div className="mt-8 md:hidden overflow-x-auto pb-2 -mx-4 px-4">
          <div className="flex gap-2 min-w-max">
            {treatments.map((treatment) => (
              <button
                key={treatment.id}
                onClick={() => setActiveTab(treatment.id)}
                className={`${syne.className} whitespace-nowrap rounded-lg px-5 py-2.5 text-sm font-medium transition-all border ${
                  activeTab === treatment.id
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-zinc-700 border-zinc-200"
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
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src={activeTreatment.image}
                  alt={activeTreatment.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className={`${marcellus.className} text-3xl text-foreground`}>{activeTreatment.title}</h3>
                <p className={`${syne.className} mt-3 text-lg text-zinc-700`}>{activeTreatment.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeTreatment.benefits.map((benefit) => (
                  <span
                    key={benefit}
                    className={`${syne.className} inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm text-primary`}
                  >
                    <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Treatment List */}
            <div className="space-y-4">
              {activeTreatment.treatments.map((treatment) => (
                <div
                  key={treatment.name}
                  className="group rounded-lg border border-border bg-white p-6 transition-all hover:border-primary hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className={`${syne.className} text-lg font-semibold text-foreground`}>{treatment.name}</h4>
                      <div className="mt-2 flex items-center gap-4 text-sm text-zinc-600">
                        <span className="flex items-center">
                          <svg className="mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                          </svg>
                          {treatment.duration}
                        </span>
                        <span className={`${syne.className} font-semibold text-primary`}>{treatment.price}</span>
                      </div>
                    </div>
                    <Button
                      href="https://abor.boekingapp.nl/"
                      size="sm"
                      className={`${syne.className} rounded-full bg-primary text-white hover:bg-primary-hover`}
                    >
                      Boek nu
                    </Button>
                  </div>
                </div>
              ))}
              <div className="mt-8 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10 p-6 text-center">
                <p className={`${syne.className} text-base font-medium text-foreground mb-4`}>
                  Niet zeker welke behandeling bij jou past?
                </p>
                <Button
                  href="https://abor.boekingapp.nl/"
                  className={`${syne.className} rounded-full bg-primary text-white hover:bg-primary-hover`}
                >
                  Plan gratis consult
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile: Stacked layout */}
          <div className="block lg:hidden space-y-6">
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <Image
                src={activeTreatment.image}
                alt={activeTreatment.title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className={`${marcellus.className} text-2xl text-foreground`}>{activeTreatment.title}</h3>
              <p className={`${syne.className} mt-2 text-zinc-700`}>{activeTreatment.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {activeTreatment.benefits.map((benefit) => (
                <span
                  key={benefit}
                  className={`${syne.className} inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-xs text-primary`}
                >
                  <svg className="mr-1.5 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {benefit}
                </span>
              ))}
            </div>
            <div className="space-y-3">
              {activeTreatment.treatments.map((treatment) => (
                <div
                  key={treatment.name}
                  className="rounded-lg border border-border bg-white p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h4 className={`${syne.className} text-base font-semibold text-foreground`}>{treatment.name}</h4>
                      <div className="mt-1.5 flex flex-col gap-1 text-xs text-zinc-600">
                        <span>{treatment.duration}</span>
                        <span className={`${syne.className} font-semibold text-primary`}>{treatment.price}</span>
                      </div>
                    </div>
                    <Button
                      href="https://abor.boekingapp.nl/"
                      size="sm"
                      className={`${syne.className} shrink-0 rounded-full bg-primary text-white hover:bg-primary-hover`}
                    >
                      Boek
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10 p-5 text-center">
              <p className={`${syne.className} text-base font-medium text-foreground mb-4`}>
                Niet zeker welke behandeling bij jou past?
              </p>
              <Button
                href="https://abor.boekingapp.nl/"
                className={`${syne.className} w-full rounded-full bg-primary text-white hover:bg-primary-hover`}
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
