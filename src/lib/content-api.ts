/**
 * Content API Layer
 * CMS Ready: Replace static imports with API calls when integrating a CMS
 * 
 * Supported CMS options:
 * - Sanity.io
 * - Contentful
 * - Strapi
 * - Payload CMS
 */

import {
  treatments,
  getTreatmentById as _getTreatmentById,
  getTreatmentBySlug as _getTreatmentBySlug,
  getAllTreatmentSlugs as _getAllTreatmentSlugs,
} from '@/data/treatments';

import {
  testimonials,
  getFeaturedTestimonials as _getFeaturedTestimonials,
  getTestimonialsByTreatment as _getTestimonialsByTreatment,
  aggregateRating,
} from '@/data/testimonials';

import {
  faqs,
  getFaqsByCategory as _getFaqsByCategory,
  getTreatmentFaqs as _getTreatmentFaqs,
} from '@/data/faqs';

import {
  siteConfig,
  mainNavigation,
  footerNavigation,
  stats,
  uspItems,
  galleryImages,
  heroSlides,
} from '@/data/site-config';

import type { Treatment, Testimonial, FAQ, SiteConfig, NavItem, StatItem, USPItem, GalleryImage } from '@/types';

// ============================================
// TREATMENTS
// ============================================

/**
 * Get all treatments
 * @returns Promise<Treatment[]>
 */
export async function getTreatments(): Promise<Treatment[]> {
  // CMS: return await fetch(`${CMS_URL}/api/treatments`).then(r => r.json())
  return treatments;
}

/**
 * Get treatment by ID
 */
export async function getTreatmentById(id: string): Promise<Treatment | undefined> {
  // CMS: return await fetch(`${CMS_URL}/api/treatments/${id}`).then(r => r.json())
  return _getTreatmentById(id);
}

/**
 * Get treatment by slug
 */
export async function getTreatmentBySlug(slug: string): Promise<Treatment | undefined> {
  // CMS: return await fetch(`${CMS_URL}/api/treatments/slug/${slug}`).then(r => r.json())
  return _getTreatmentBySlug(slug);
}

/**
 * Get all treatment slugs for static generation
 */
export async function getAllTreatmentSlugs(): Promise<string[]> {
  // CMS: return await fetch(`${CMS_URL}/api/treatments/slugs`).then(r => r.json())
  return _getAllTreatmentSlugs();
}

// ============================================
// TESTIMONIALS
// ============================================

/**
 * Get all testimonials
 */
export async function getTestimonials(): Promise<Testimonial[]> {
  // CMS: return await fetch(`${CMS_URL}/api/testimonials`).then(r => r.json())
  return testimonials;
}

/**
 * Get featured testimonials for homepage
 */
export async function getFeaturedTestimonials(count = 6): Promise<Testimonial[]> {
  // CMS: return await fetch(`${CMS_URL}/api/testimonials?featured=true&limit=${count}`).then(r => r.json())
  return _getFeaturedTestimonials(count);
}

/**
 * Get testimonials by treatment type
 */
export async function getTestimonialsByTreatment(treatment: string): Promise<Testimonial[]> {
  // CMS: return await fetch(`${CMS_URL}/api/testimonials?treatment=${treatment}`).then(r => r.json())
  return _getTestimonialsByTreatment(treatment);
}

/**
 * Get aggregate rating for Schema.org
 */
export async function getAggregateRating() {
  // CMS: return await fetch(`${CMS_URL}/api/reviews/aggregate`).then(r => r.json())
  return aggregateRating;
}

// ============================================
// FAQS
// ============================================

/**
 * Get all FAQs
 */
export async function getFaqs(): Promise<FAQ[]> {
  // CMS: return await fetch(`${CMS_URL}/api/faqs`).then(r => r.json())
  return faqs;
}

/**
 * Get FAQs by category
 */
export async function getFaqsByCategory(category: string): Promise<FAQ[]> {
  // CMS: return await fetch(`${CMS_URL}/api/faqs?category=${category}`).then(r => r.json())
  return _getFaqsByCategory(category);
}

/**
 * Get FAQs for a specific treatment
 */
export async function getTreatmentFaqs(treatmentId: string): Promise<FAQ[]> {
  // CMS: return await fetch(`${CMS_URL}/api/faqs?treatment=${treatmentId}`).then(r => r.json())
  return _getTreatmentFaqs(treatmentId);
}

// ============================================
// SITE CONFIGURATION
// ============================================

/**
 * Get site configuration
 */
export async function getSiteConfig(): Promise<SiteConfig> {
  // CMS: return await fetch(`${CMS_URL}/api/config`).then(r => r.json())
  return siteConfig;
}

/**
 * Get main navigation
 */
export async function getMainNavigation(): Promise<NavItem[]> {
  // CMS: return await fetch(`${CMS_URL}/api/navigation/main`).then(r => r.json())
  return mainNavigation;
}

/**
 * Get footer navigation
 */
export async function getFooterNavigation() {
  // CMS: return await fetch(`${CMS_URL}/api/navigation/footer`).then(r => r.json())
  return footerNavigation;
}

/**
 * Get stats for display
 */
export async function getStats(): Promise<StatItem[]> {
  // CMS: return await fetch(`${CMS_URL}/api/stats`).then(r => r.json())
  return stats;
}

/**
 * Get USP items
 */
export async function getUspItems(): Promise<USPItem[]> {
  // CMS: return await fetch(`${CMS_URL}/api/usps`).then(r => r.json())
  return uspItems;
}

/**
 * Get gallery images
 */
export async function getGalleryImages(): Promise<GalleryImage[]> {
  // CMS: return await fetch(`${CMS_URL}/api/gallery`).then(r => r.json())
  return galleryImages;
}

/**
 * Get hero slides
 */
export async function getHeroSlides() {
  // CMS: return await fetch(`${CMS_URL}/api/hero-slides`).then(r => r.json())
  return heroSlides;
}
