import { describe, it, expect } from 'vitest';
import {
  treatments,
  getTreatmentById,
  getTreatmentBySlug,
  getAllTreatmentSlugs,
} from './treatments';

describe('treatments data', () => {
  it('has at least 6 treatments', () => {
    expect(treatments.length).toBeGreaterThanOrEqual(6);
  });

  it('all treatments have required fields', () => {
    treatments.forEach((treatment) => {
      expect(treatment.id).toBeDefined();
      expect(treatment.title).toBeDefined();
      expect(treatment.description).toBeDefined();
      expect(treatment.treatments).toBeDefined();
      expect(treatment.treatments.length).toBeGreaterThan(0);
      expect(treatment.benefits).toBeDefined();
      expect(treatment.image).toBeDefined();
    });
  });

  it('all treatment items have required fields', () => {
    treatments.forEach((treatment) => {
      treatment.treatments.forEach((item) => {
        expect(item.name).toBeDefined();
        expect(item.duration).toBeDefined();
        expect(item.price).toBeDefined();
      });
    });
  });
});

describe('getTreatmentById', () => {
  it('returns treatment by id', () => {
    const result = getTreatmentById('acne');
    expect(result).toBeDefined();
    expect(result?.title).toBe('Acne & Rosacea');
  });

  it('returns undefined for non-existent id', () => {
    const result = getTreatmentById('non-existent');
    expect(result).toBeUndefined();
  });
});

describe('getTreatmentBySlug', () => {
  it('returns treatment by slug', () => {
    const result = getTreatmentBySlug('laserontharing');
    expect(result).toBeDefined();
    expect(result?.title).toBe('Laserontharing');
  });

  it('returns undefined for non-existent slug', () => {
    const result = getTreatmentBySlug('non-existent');
    expect(result).toBeUndefined();
  });
});

describe('getAllTreatmentSlugs', () => {
  it('returns array of slugs', () => {
    const slugs = getAllTreatmentSlugs();
    expect(Array.isArray(slugs)).toBe(true);
    expect(slugs.length).toBeGreaterThan(0);
  });

  it('all slugs are strings', () => {
    const slugs = getAllTreatmentSlugs();
    slugs.forEach((slug) => {
      expect(typeof slug).toBe('string');
    });
  });
});






