import { describe, it, expect } from 'vitest';
import {
  FALLBACK_PROFILE,
  FALLBACK_PROJECTS,
  FALLBACK_EXPERIENCE,
  FALLBACK_TESTIMONIALS
} from '../data/fallbackData';

describe('Monograph Editorial Data & Architecture', () => {
  it('validates monograph persona credentials', () => {
    expect(FALLBACK_PROFILE.name).toBe('Manas Maydeo');
    expect(FALLBACK_PROFILE.location).toContain('India');
    expect(FALLBACK_PROFILE.skills['Languages & Backend'].length).toBeGreaterThan(0);
    expect(FALLBACK_PROFILE.skills['Frontend & UI'].length).toBeGreaterThan(0);
  });

  it('contains four featured case studies with deep narrative fields', () => {
    expect(FALLBACK_PROJECTS.length).toBe(4);
    FALLBACK_PROJECTS.forEach((proj) => {
      expect(proj.slug).toBeDefined();
      expect(proj.title).toBeDefined();
      expect(proj.brief.length).toBeGreaterThan(20);
      expect(proj.approach.length).toBeGreaterThan(20);
      expect(proj.decisions.length).toBeGreaterThan(20);
      expect(proj.outcome.length).toBeGreaterThan(20);
      expect(proj.stats.length).toBe(3);
    });
  });

  it('contains verified experience and testimonial records', () => {
    expect(FALLBACK_EXPERIENCE.length).toBeGreaterThanOrEqual(4);
    expect(FALLBACK_TESTIMONIALS.length).toBeGreaterThanOrEqual(3);
  });
});
