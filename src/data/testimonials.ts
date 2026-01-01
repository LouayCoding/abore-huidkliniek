import type { Testimonial, AggregateRating } from '@/types';

/**
 * Customer testimonials/reviews
 * CMS Ready: Can be replaced with API calls
 */
export const testimonials: Testimonial[] = [
  { 
    name: "Annette N.", 
    text: "Yousara is een heel vriendelijke vrouw die perfect je huid beoordeeld en behandeld. Een mooie praktijk met moderne apparatuur. Na 2 behandelingen was mijn huid vrij van bruine ouderdomsvlekken. Zeer aanbevolen.", 
    rating: 5, 
    date: "2024-09-20",
    treatment: "Pigmentbehandeling",
    initial: "A"
  },
  { 
    name: "Amal E.", 
    text: "Top ervaring! De huidtherapeut neemt de tijd om je gerust te stellen en levert secuur werk, een aanrader voor een ieder!", 
    rating: 5, 
    date: "2024-08-15",
    treatment: "Huidbehandeling",
    initial: "A"
  },
  { 
    name: "Esther G.", 
    text: "Van mijn eerste consult voelde ik me op me gemak. Zorgzamen lieve huidtherapeut, die weet wat ze doet. Mooie resultaten behaald, ben zeer tevreden!", 
    rating: 5, 
    date: "2024-09-10",
    treatment: "Huidverjonging",
    initial: "E"
  },
  { 
    name: "Renusha B.", 
    text: "Yousara is een heel fijn persoon om door behandeld te worden. Ze neemt de tijd, en geeft duidelijke uitleg. Ik help mijn resultaten te behalen, heb ik alle vertrouwen in. Praktijk is heel mooi en hygiënisch.", 
    rating: 5, 
    date: "2024-07-18",
    treatment: "Acne behandeling",
    initial: "R"
  },
  { 
    name: "Ferdaous E.", 
    text: "Weer een hele fijne behandeling gehad. Dit keer heb de salicylzuur peeling gedaan.", 
    rating: 5, 
    date: "2024-10-02",
    treatment: "Peeling",
    initial: "F"
  },
  { 
    name: "Fatima G.", 
    text: "Vakkundig, betrouwbaar, professioneel en erg vriendelijk.", 
    rating: 5, 
    date: "2024-09-05",
    treatment: "Huidbehandeling",
    initial: "F"
  },
  { 
    name: "Mokhtar A.", 
    text: "Ik ben heel goed behandeld! Schoon praktijk. En klant vriendelijk.", 
    rating: 5, 
    date: "2024-07-25",
    treatment: "Laserontharing",
    initial: "M"
  },
  { 
    name: "Wendel K.", 
    text: "Keurig op tijd, ik ben uitstekend geïnformeerd over de komende behandeling. Mijn dank.", 
    rating: 4, 
    date: "2024-09-28",
    treatment: "Consult",
    initial: "W"
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
