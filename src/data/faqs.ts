import type { FAQ } from '@/types';

/**
 * Frequently asked questions
 * CMS Ready: Can be replaced with API calls
 */
export const faqs: FAQ[] = [
  { 
    q: "Doet de laserbehandeling pijn?", 
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
    q: "Is de laserbehandeling veilig voor mijn huid?", 
    a: "Absoluut. We gebruiken uitsluitend CE-gecertificeerde apparatuur en volgen strikte veiligheidsprotocollen. Onze specialisten zijn volledig gecertificeerd en passen de behandeling aan op jouw specifieke huidtype.",
    category: "Veiligheid"
  },
  { 
    q: "Wat zijn de kosten van een behandeling?", 
    a: "Prijzen variëren per behandeling en gebied. Laserontharing start vanaf €45, gezichtsbehandelingen vanaf €85. Tijdens het gratis consult ontvang je een transparante prijsopgave op maat.",
    category: "Prijzen"
  },
];

/**
 * Get FAQs by category
 */
export function getFaqsByCategory(category: string): FAQ[] {
  return faqs.filter((faq) => faq.category === category);
}

/**
 * Get all FAQ categories
 */
export function getFaqCategories(): string[] {
  const categories = faqs.map((faq) => faq.category).filter(Boolean) as string[];
  return [...new Set(categories)];
}

/**
 * Treatment-specific FAQs
 */
export const treatmentFaqs: Record<string, FAQ[]> = {
  laserontharing: [
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
  ],
};

/**
 * Get FAQs for a specific treatment
 */
export function getTreatmentFaqs(treatmentId: string): FAQ[] {
  return treatmentFaqs[treatmentId] || faqs.slice(0, 4);
}
