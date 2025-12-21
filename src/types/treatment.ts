/**
 * Treatment related types
 * CMS Ready: These types can be used with any headless CMS
 */

/**
 * Individual treatment item within a treatment category
 */
export interface TreatmentItem {
  /** Treatment name */
  name: string;
  /** Duration of treatment (e.g., "45 min") */
  duration: string;
  /** Price (e.g., "€85" or "Vanaf €50") */
  price: string;
  /** Optional detailed description */
  description?: string;
}

/**
 * Treatment category (e.g., Acne & Rosacea, Laserontharing)
 */
export interface Treatment {
  /** Unique identifier */
  id: string;
  /** Display title */
  title: string;
  /** Short description */
  description: string;
  /** Icon identifier (e.g., "01", "02") */
  icon: string;
  /** List of individual treatments */
  treatments: TreatmentItem[];
  /** List of benefits/USPs */
  benefits: string[];
  /** Image path */
  image: string;
  /** URL slug for the treatment page */
  slug?: string;
  /** Category for filtering */
  category?: string;
}

/**
 * Treatment page data for individual treatment pages
 */
export interface TreatmentPageData extends Treatment {
  /** SEO meta title */
  metaTitle?: string;
  /** SEO meta description */
  metaDescription?: string;
  /** Detailed content sections */
  sections?: TreatmentSection[];
  /** Related FAQ items */
  faqs?: FAQ[];
}

/**
 * Content section for treatment detail pages
 */
export interface TreatmentSection {
  /** Section title */
  title: string;
  /** Section content (can be HTML) */
  content: string;
  /** Optional image */
  image?: string;
}

/**
 * FAQ item type
 */
export interface FAQ {
  /** Question */
  q: string;
  /** Answer */
  a: string;
  /** Optional category for filtering */
  category?: string;
}
