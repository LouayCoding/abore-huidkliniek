"use client";
import { useState, useEffect, useRef } from "react";
import { Container } from "@/components/ui";
import { marcellus, syne } from "@/lib/fonts";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type QA = { 
  q: string; 
  a: string;
  category?: string;
};

const qas: QA[] = [
  { 
    q: "Doet laserbehandeling pijn?", 
    a: "De meeste cliënten ervaren een warm, tintelend gevoel. We werken met geavanceerde koelsystemen en stellen de intensiteit zorgvuldig af op jouw huid en pijntolerantie. Comfort staat voorop.",
    category: "Behandeling"
  },
  { 
    q: "Hoeveel sessies heb ik nodig?", 
    a: "Dit verschilt per behandeling en huidtype. Gemiddeld zijn 4-8 sessies nodig voor optimaal resultaat. Tijdens het gratis consult maken we een persoonlijk behandelplan met een duidelijk tijdpad.",
    category: "Planning"
  },
  { 
    q: "Is er downtime na de behandeling?", 
    a: "Minimaal tot geen downtime. De meeste cliënten hervatten direct hun dagelijkse activiteiten. We geven heldere nazorginstructies en aanbevolen producten mee voor optimaal herstel.",
    category: "Nazorg"
  },
  { 
    q: "Zijn de resultaten permanent?", 
    a: "Bij laserontharing zijn resultaten langdurig tot permanent. Voor andere behandelingen zoals huidverjonging adviseren we onderhoudsbehandelingen. We bespreken realistische verwachtingen tijdens het consult.",
    category: "Resultaten"
  },
  { 
    q: "Is laserbehandeling veilig voor mijn huid?", 
    a: "Absoluut. We gebruiken uitsluitend CE-gecertificeerde apparatuur en volgen strikte veiligheidsprotocollen. Onze specialisten zijn volledig gecertificeerd en passen de behandeling aan op jouw specifieke huidtype.",
    category: "Veiligheid"
  },
  { 
    q: "Wat zijn de kosten van een behandeling?", 
    a: "Prijzen variëren per behandeling en gebied. Laserontharing start vanaf €45, gezichtsbehandelingen vanaf €85. Tijdens het gratis consult ontvang je een transparante prijsopgave op maat.",
    category: "Prijzen"
  },
];

export function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

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

    if (faqRef.current) {
      const items = Array.from(faqRef.current.querySelectorAll(".faq-item"));
      items.forEach((el, i) => {
        gsap.fromTo(
          el,
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            delay: i * 0.08,
            scrollTrigger: { trigger: el, start: "top 92%" },
          }
        );
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <Container className="relative py-20 sm:py-32">
        {/* Section Header */}
        <div ref={titleRef} className="mx-auto max-w-3xl text-center mb-16">
          <p className={`${syne.className} text-sm font-medium uppercase tracking-widest text-primary mb-4`}>
            FAQ
          </p>
          <h2 className={`${marcellus.className} text-3xl sm:text-4xl lg:text-5xl tracking-wide text-foreground leading-tight`}>
            Veelgestelde vragen
          </h2>
          <p className={`${syne.className} mt-6 text-lg text-zinc-600`}>
            Antwoorden op de meest gestelde vragen over onze behandelingen
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="mx-auto max-w-4xl">
          <div ref={faqRef} className="space-y-4">
            {qas.map((item) => (
              <AccordionItem key={item.q} q={item.q} a={item.a} category={item.category} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 rounded-2xl border border-zinc-200 bg-gradient-to-br from-primary/5 to-transparent p-8 text-center">
            <h3 className={`${marcellus.className} text-2xl text-foreground mb-3`}>
              Nog vragen?
            </h3>
            <p className={`${syne.className} text-zinc-600 mb-6`}>
              Ons team staat klaar om al jouw vragen persoonlijk te beantwoorden
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://abor.boekingapp.nl/"
                className={`${syne.className} inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-white hover:bg-primary-hover transition-colors`}
              >
                Plan gratis consult
              </a>
              <a
                href="tel:+31123456789"
                className={`${syne.className} inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors`}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel ons direct
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function AccordionItem({ q, a, category }: QA) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (open) {
        gsap.to(contentRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [open]);

  return (
    <div className="faq-item group rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:border-primary hover:shadow-lg">
      <button 
        onClick={() => setOpen(!open)} 
        className="flex w-full items-start justify-between gap-4 p-6 text-left transition-colors"
      >
        <div className="flex-1">
          {category && (
            <span className={`${syne.className} mb-2 inline-block text-xs font-medium text-primary`}>
              {category}
            </span>
          )}
          <h3 className={`${marcellus.className} text-lg sm:text-xl text-foreground`}>{q}</h3>
        </div>
        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
          open ? "bg-primary text-white rotate-180" : "bg-zinc-100 text-zinc-600 group-hover:bg-primary/10 group-hover:text-primary"
        }`}>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div 
        ref={contentRef}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="px-6 pb-6">
          <p className={`${syne.className} text-base leading-relaxed text-zinc-600`}>{a}</p>
        </div>
      </div>
    </div>
  );
}

