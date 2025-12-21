import { describe, it, expect } from 'vitest';
import {
  cn,
  formatPrice,
  formatPhoneNumber,
  formatDate,
  truncate,
  getStarRating,
  isClient,
} from './utils';

describe('cn (class name merger)', () => {
  it('merges class names', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
  });

  it('handles conditional classes', () => {
    expect(cn('base', true && 'active', false && 'hidden')).toBe('base active');
  });

  it('handles undefined and null', () => {
    expect(cn('base', undefined, null, 'end')).toBe('base end');
  });

  it('handles arrays', () => {
    expect(cn(['class1', 'class2'])).toBe('class1 class2');
  });
});

describe('formatPrice', () => {
  it('formats price in EUR', () => {
    const result = formatPrice(100);
    expect(result).toContain('100');
    expect(result).toContain('€');
  });

  it('formats decimal prices', () => {
    const result = formatPrice(99.99);
    expect(result).toContain('99');
  });

  it('handles zero', () => {
    const result = formatPrice(0);
    expect(result).toContain('0');
  });
});

describe('formatPhoneNumber', () => {
  it('formats Dutch phone number', () => {
    const result = formatPhoneNumber('31634533358');
    expect(result).toContain('+31');
  });

  it('returns original for non-Dutch numbers', () => {
    const result = formatPhoneNumber('1234567890');
    expect(result).toBe('1234567890');
  });
});

describe('formatDate', () => {
  it('formats date string', () => {
    const result = formatDate('2025-01-15');
    expect(result).toContain('2025');
    expect(result).toContain('januari');
  });

  it('formats Date object', () => {
    const result = formatDate(new Date('2025-06-20'));
    expect(result).toContain('2025');
  });
});

describe('truncate', () => {
  it('truncates long text', () => {
    const result = truncate('This is a very long text that should be truncated', 20);
    expect(result.length).toBeLessThanOrEqual(23); // 20 + '...'
    expect(result).toEndWith('...');
  });

  it('does not truncate short text', () => {
    const result = truncate('Short', 20);
    expect(result).toBe('Short');
  });

  it('handles exact length', () => {
    const result = truncate('Exact', 5);
    expect(result).toBe('Exact');
  });
});

describe('getStarRating', () => {
  it('returns all full stars for rating 5', () => {
    const result = getStarRating(5);
    expect(result).toEqual(['full', 'full', 'full', 'full', 'full']);
  });

  it('returns mixed stars for rating 3.5', () => {
    const result = getStarRating(3.5);
    expect(result).toEqual(['full', 'full', 'full', 'half', 'empty']);
  });

  it('returns all empty stars for rating 0', () => {
    const result = getStarRating(0);
    expect(result).toEqual(['empty', 'empty', 'empty', 'empty', 'empty']);
  });

  it('handles rating 4', () => {
    const result = getStarRating(4);
    expect(result).toEqual(['full', 'full', 'full', 'full', 'empty']);
  });
});

describe('isClient', () => {
  it('returns true in browser environment', () => {
    // jsdom provides window
    expect(isClient()).toBe(true);
  });
});

