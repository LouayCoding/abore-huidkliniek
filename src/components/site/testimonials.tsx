"use client";
import { useEffect, useRef } from "react";
import { Container } from "@/components/ui";
import { marcellus, syne } from "@/lib/fonts";
import { SplitText } from "@/components/animations/split-text";
import { TiltCard } from "@/components/animations/tilt-card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Review = { 
  name: string; 
  text: string; 
  rating: number; 
  date: string;
  treatment: string;
  initial: string;
};

const reviews: Review[] = [
  { 
    name: "Sara M.", 
    text: "Professioneel, vriendelijk en resultaat al na één sessie. De kliniek straalt luxe uit en het personeel neemt echt de tijd voor je.", 
    rating: 5, 
    date: "2025-04-12",
    treatment: "Pigmentbehandeling",
    initial: "S"
  },
  { 
    name: "Noor A.", 
    text: "Luxe gevoel en duidelijke uitleg. Echt aan te raden. Ik voel me hier altijd welkom en op mijn gemak.", 
    rating: 5, 
    date: "2025-05-03",
    treatment: "Laserontharing",
    initial: "N"
  },
  { 
    name: "Yasmin K.", 
    text: "Veilig en zorgvuldig gewerkt. Mijn huid straalt weer en ik heb eindelijk mijn zelfvertrouwen terug.", 
    rating: 5, 
    date: "2025-02-21",
    treatment: "Acne behandeling",
    initial: "Y"
  },
  { 
    name: "Fatima R.", 
    text: "Eindelijk een kliniek die écht luistert. Mijn pigmentvlekken zijn zichtbaar verminderd en ik ben super blij met het resultaat.", 
    rating: 5, 
    date: "2025-03-15",
    treatment: "Pigmentbehandeling",
    initial: "F"
  },
  { 
    name: "Layla H.", 
    text: "Geen pijn, geen stress. De behandeling was comfortabel en het resultaat is fantastisch. Ik kom zeker terug!", 
    rating: 5, 
    date: "2025-01-08",
    treatment: "Huidverjonging",
    initial: "L"
  },
  { 
    name: "Amira S.", 
    text: "Mijn acne is onder controle dankzij hun expertise. Ik voel me eindelijk zelfverzekerd en dat is onbetaalbaar.", 
    rating: 5, 
    date: "2025-04-28",
    treatment: "Acne behandeling",
    initial: "A"
  },
];

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

    if (cardsRef.current) {
      const items = Array.from(cardsRef.current.querySelectorAll(".t-item"));
      items.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 30, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: { trigger: el, start: "top 90%" },
          }
        );
      });
    }
  }, []);

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    const months = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <Container className="relative py-20 sm:py-32">
        {/* Section Header */}
        <div ref={titleRef} className="mx-auto max-w-3xl text-center mb-16">
          <p className={`${syne.className} text-sm font-medium uppercase tracking-widest text-primary mb-4`}>
            Ervaringen
          </p>
          <h2 className={`${marcellus.className} text-3xl sm:text-4xl lg:text-5xl tracking-wide text-foreground leading-tight`}>
            <SplitText>Wat onze cliënten zeggen</SplitText>
          </h2>
          <p className={`${syne.className} mt-6 text-lg text-zinc-600`}>
            Echte ervaringen van tevreden cliënten — gemiddelde beoordeling 4.9/5
          </p>
        </div>

        {/* Reviews Grid */}
        <div ref={cardsRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <TiltCard key={review.name + review.date} maxTilt={6} scale={1.01} className="h-full">
              <article
                className="t-item group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:border-primary hover:shadow-xl h-full"
              >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/10">
                <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg 
                    key={s} 
                    className="h-5 w-5 text-primary" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className={`${syne.className} text-base leading-relaxed text-zinc-700 mb-6`}>
                "{review.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-zinc-100">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className={`${marcellus.className} text-lg font-semibold`}>{review.initial}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`${syne.className} text-sm font-semibold text-foreground`}>{review.name}</p>
                  <p className={`${syne.className} text-xs text-zinc-500`}>{review.treatment}</p>
                </div>
                <div className="text-right">
                  <p className={`${syne.className} text-xs text-zinc-400`}>{formatDate(review.date)}</p>
                </div>
              </div>

              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-primary/50 transition-all duration-300 group-hover:w-full" />
              </article>
            </TiltCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className={`${syne.className} text-zinc-600 mb-4`}>
            Wil jij ook deze resultaten ervaren?
          </p>
          <a 
            href="https://abor.boekingapp.nl/"
            className={`${syne.className} inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors`}
          >
            Plan jouw gratis consult
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
}
