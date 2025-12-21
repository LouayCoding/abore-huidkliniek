import type { Treatment } from '@/types';

/**
 * Treatment categories with their individual treatments
 * CMS Ready: Can be replaced with API calls
 */
export const treatments: Treatment[] = [
  {
    id: "acne",
    title: "Acne & Rosacea",
    description: "Effectieve behandelingen voor acne, rosacea en littekens met geavanceerde technieken",
    icon: "01",
    slug: "acne-rosacea",
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
    slug: "huidverjonging",
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
    slug: "pigmentbehandeling",
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
    slug: "laserontharing",
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
    slug: "lichaamsbehandelingen",
    treatments: [
      { name: "LPG cellulitis", duration: "30 min", price: "€75" },
      { name: "LPG huidverslapping", duration: "30 min", price: "€75" },
      { name: "Microneedling striemen", duration: "30 min", price: "Vanaf €65" },
    ],
    benefits: ["Niet-invasief", "Bewezen effectief", "Persoonlijk plan"],
    image: "/hero/13.jpg",
  },
  {
    id: "tatoeage",
    title: "Tatoeageverwijdering",
    description: "Veilige en effectieve picolaser verwijdering van tatoeages",
    icon: "07",
    slug: "tatoeage-verwijderen",
    treatments: [
      { name: "Gratis consult", duration: "20 min", price: "Gratis" },
      { name: "0 - 1 cm²", duration: "10 min", price: "€50" },
      { name: "1 - 2 cm²", duration: "15 min", price: "€65" },
      { name: "3 - 4 cm²", duration: "15 min", price: "€90" },
      { name: "5 - 10 cm²", duration: "20 min", price: "€105" },
      { name: "11 - 15 cm²", duration: "20 min", price: "€115" },
      { name: "16 - 20 cm²", duration: "25 min", price: "€135" },
      { name: "21 - 25 cm²", duration: "30 min", price: "€155" },
      { name: "26 - 30 cm²", duration: "30 min", price: "€175" },
      { name: "31 - 35 cm²", duration: "35 min", price: "€190" },
      { name: "36 - 40 cm²", duration: "40 min", price: "€210" },
      { name: "41 - 50 cm²", duration: "45 min", price: "€230" },
      { name: "51 - 60 cm²", duration: "50 min", price: "€250" },
    ],
    benefits: ["Picolaser technologie", "Alle kleuren", "Minimale littekens"],
    image: "/hero/3.jpg",
  },
  {
    id: "haargroei",
    title: "Haargroeitherapie",
    description: "Stimuleer haargroei met geavanceerde mesotherapie behandelingen",
    icon: "06",
    slug: "haargroeitherapie",
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

/**
 * Get treatment by ID
 */
export function getTreatmentById(id: string): Treatment | undefined {
  return treatments.find((t) => t.id === id);
}

/**
 * Get treatment by slug
 */
export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}

/**
 * Get all treatment slugs (for static generation)
 */
export function getAllTreatmentSlugs(): string[] {
  return treatments.filter((t) => t.slug).map((t) => t.slug!);
}
