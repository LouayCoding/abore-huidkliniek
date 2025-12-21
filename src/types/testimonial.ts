/**
 * Testimonial/Review related types
 * CMS Ready: These types can be used with any headless CMS
 */

/**
 * Customer testimonial/review
 */
export interface Testimonial {
  /** Customer name (can be abbreviated, e.g., "Sara M.") */
  name: string;
  /** Review text content */
  text: string;
  /** Rating out of 5 */
  rating: number;
  /** Date of review (ISO format) */
  date: string;
  /** Treatment type received */
  treatment: string;
  /** Initial letter for avatar */
  initial: string;
  /** Optional profile image URL */
  image?: string;
  /** Whether this is a featured/highlighted review */
  featured?: boolean;
}

/**
 * Aggregate rating data
 */
export interface AggregateRating {
  /** Average rating (e.g., 4.9) */
  ratingValue: number;
  /** Total number of reviews */
  reviewCount: number;
  /** Best possible rating */
  bestRating: number;
  /** Worst possible rating */
  worstRating: number;
}
