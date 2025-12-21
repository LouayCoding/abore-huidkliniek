/**
 * Central data exports
 * CMS Ready: All exports can be replaced with API calls
 */

// Treatments
export {
  treatments,
  getTreatmentById,
  getTreatmentBySlug,
  getAllTreatmentSlugs,
} from './treatments';

// Testimonials
export {
  testimonials,
  aggregateRating,
  getFeaturedTestimonials,
  getTestimonialsByTreatment,
} from './testimonials';

// FAQs
export {
  faqs,
  getFaqsByCategory,
  getFaqCategories,
  treatmentFaqs,
  getTreatmentFaqs,
} from './faqs';

// Site Configuration
export {
  siteConfig,
  mainNavigation,
  footerNavigation,
  stats,
  extendedStats,
  uspItems,
  galleryImages,
  heroSlides,
  whatsappConfig,
} from './site-config';
