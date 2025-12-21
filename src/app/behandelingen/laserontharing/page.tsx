"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { Container } from "@/components/ui";
import { marcellus, outfit } from "@/lib/fonts";
import { HeaderTransparent } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const treatments = [
  { name: "Bovenlip", duration: "10 min", price: "€30" },
  { name: "Boven + onderlip", duration: "10 min", price: "€40" },
  { name: "Kin", duration: "10 min", price: "€30" },
  { name: "Hele gelaat", duration: "20 min", price: "€90" },
  { name: "Oksels", duration: "15 min", price: "€40" },
  { name: "Onderbenen", duration: "30 min", price: "€110" },
  { name: "Hele armen", duration: "30 min", price: "€125" },
  { name: "Rug", duration: "30 min", price: "€125" },
];

const faqs = [
  {
    q: "Hoeveel sessies heb ik nodig?",
    a: "Gemiddeld zijn 6-8 sessies nodig voor optimaal resultaat. Dit verschilt per huidtype en haargroei."
  },
  {
    q: "Is laserontharing pijnlijk?",
    a: "De meeste cliënten ervaren een warm, tintelend gevoel. We werken met koelsystemen voor extra comfort."
  },
  {
    q: "Voor welke huidtypes is het geschikt?",
    a: "Onze premium laser is geschikt voor alle huidtypes, van licht tot donker."
  },
  {
    q: "Hoe lang duurt het resultaat?",
    a: "Na een volledige kuur is het resultaat langdurig tot permanent. Soms is een onderhoudsbehandeling nodig."
  },
];

export default function LaseronthatingPage() {
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

    if (contentRef.current) {
      const items = Array.from(contentRef.current.querySelectorAll(".animate-item"));
      items.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 30, opacity: 0 },
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
  }, []);

  return (
    <>
      <HeaderTransparent />
      
      {/* Hero Section */}
      <section className="relative isolate min-h-[70vh] overflow-hidden flex items-center justify-center">
        <Image 
          src="/hero/5.jpg" 
          alt="Laserontharing" 
          fill 
          priority
          className="object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        
        <Container className="relative z-10 text-center">
          <div className={`${syne.className} mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 backdrop-blur-sm px-5 py-2 text-sm font-medium text-white`}>
            💎 Populairste behandeling
          </div>
          <h1 className={`${marcellus.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6`}>
            Laserontharing
          </h1>
          <p className={`${syne.className} text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8`}>
            Permanente ontharing voor gezicht en lichaam met CE-gecertificeerde premium laser
          </p>
          <a
            href="https://abor.boekingapp.nl/"
            className={`${syne.className} inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-white hover:bg-primary-hover transition-all shadow-lg shadow-primary/20`}
          >
            Boek nu vanaf €30
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </Container>
      </section>

      {/* Content */}
      <section className="bg-white">
        <Container className="py-20 sm:py-32">
          <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Info */}
            <div className="space-y-8">
              <div className="animate-item">
                <h2 className={`${marcellus.className} text-4xl text-foreground mb-4`}>
                  Waarom laserontharing?
                </h2>
                <p className={`${syne.className} text-lg text-zinc-700 leading-relaxed mb-4`}>
                  Laserontharing is de meest effectieve methode voor langdurige haarverwijdering. Onze premium laser technologie is geschikt voor alle huidtypes en lichaamszones.
                </p>
                <p className={`${syne.className} text-lg text-zinc-700 leading-relaxed`}>
                  De behandeling is veilig, comfortabel en levert zichtbare resultaten al na enkele sessies.
                </p>
              </div>

              <div className="animate-item">
                <h3 className={`${marcellus.className} text-2xl text-foreground mb-4`}>
                  Voordelen
                </h3>
                <div className="space-y-3">
                  {[
                    "Langdurig tot permanent resultaat",
                    "Geschikt voor alle huidtypes",
                    "Geen ingegroeide haren meer",
                    "Gladde, zachte huid",
                    "Tijdsbesparing op lange termijn",
                    "CE-gecertificeerde apparatuur"
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`${syne.className} text-zinc-700`}>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="animate-item">
                <h3 className={`${marcellus.className} text-2xl text-foreground mb-4`}>
                  Hoe werkt het?
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className={`${syne.className} font-semibold text-foreground mb-1`}>Gratis consult</h4>
                      <p className={`${syne.className} text-sm text-zinc-600`}>We analyseren je huid en maken een behandelplan</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className={`${syne.className} font-semibold text-foreground mb-1`}>Behandeling</h4>
                      <p className={`${syne.className} text-sm text-zinc-600`}>De laser vernietigt de haarwortel zonder de huid te beschadigen</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className={`${syne.className} font-semibold text-foreground mb-1`}>Resultaat</h4>
                      <p className={`${syne.className} text-sm text-zinc-600`}>Na 6-8 sessies geniet je van langdurig gladde huid</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Treatments & Pricing */}
            <div className="space-y-6">
              <div className="animate-item">
                <h3 className={`${marcellus.className} text-2xl text-foreground mb-6`}>
                  Prijzen & Zones
                </h3>
                <div className="space-y-3">
                  {treatments.map((treatment) => (
                    <div
                      key={treatment.name}
                      className="group rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-primary hover:shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className={`${syne.className} font-semibold text-foreground mb-1`}>
                            {treatment.name}
                          </h4>
                          <p className={`${syne.className} text-sm text-zinc-600`}>
                            {treatment.duration}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className={`${marcellus.className} text-2xl text-primary`}>
                            {treatment.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="animate-item p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20">
                <h4 className={`${marcellus.className} text-xl text-foreground mb-2`}>
                  Speciale actie!
                </h4>
                <p className={`${syne.className} text-zinc-700 mb-4`}>
                  Oksels, Onderarmen en Onderbenen samen voor <span className="font-bold text-primary">€150</span> (normaal €240)
                </p>
                <a
                  href="https://abor.boekingapp.nl/"
                  className={`${syne.className} inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors font-medium`}
                >
                  Profiteer nu
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-[#faf6ea]">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className={`${marcellus.className} text-3xl sm:text-4xl text-center text-foreground mb-12`}>
              Veelgestelde vragen
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-2xl border border-zinc-200 bg-white p-6">
                  <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>
                    {faq.q}
                  </h3>
                  <p className={`${syne.className} text-zinc-600`}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className={`${marcellus.className} text-3xl sm:text-4xl text-foreground mb-4`}>
              Klaar voor gladde huid?
            </h2>
            <p className={`${syne.className} text-lg text-zinc-600 mb-8`}>
              Plan je gratis consult en ontdek wat laserontharing voor jou kan betekenen
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://abor.boekingapp.nl/"
                className={`${syne.className} inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-white hover:bg-primary-hover transition-all shadow-lg shadow-primary/20`}
              >
                Boek behandeling
              </a>
              <a
                href="/contact"
                className={`${syne.className} inline-flex items-center gap-2 rounded-full border-2 border-primary px-10 py-4 text-primary hover:bg-primary hover:text-white transition-all`}
              >
                Stel een vraag
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
