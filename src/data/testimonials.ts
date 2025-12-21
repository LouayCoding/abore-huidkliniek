import type { Testimonial, AggregateRating } from '@/types';

/**
 * Customer testimonials/reviews
 * CMS Ready: Can be replaced with API calls
 */
export const testimonials: Testimonial[] = [
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

/**
 * Aggregate rating data for Schema.org
 */
export const aggregateRating: AggregateRating = {
  ratingValue: 4.9,
  reviewCount: 127,
  bestRating: 5,
  worstRating: 1,
};

/**
 * Get featured testimonials (for homepage)
 */
export function getFeaturedTestimonials(count = 6): Testimonial[] {
  return testimonials.slice(0, count);
}

/**
 * Get testimonials by treatment type
 */
export function getTestimonialsByTreatment(treatment: string): Testimonial[] {
  return testimonials.filter((t) => 
    t.treatment.toLowerCase().includes(treatment.toLowerCase())
  );
}
