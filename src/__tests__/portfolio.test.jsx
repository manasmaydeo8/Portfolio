import { describe, it, expect } from 'vitest';
import { PERSONAL_INFO, SKILLS, PROJECTS } from '../data/portfolioData';

describe('Portfolio Core Data & Structure', () => {
  it('contains valid developer personal information', () => {
    expect(PERSONAL_INFO.name).toBe('Manas Maydeo');
    expect(PERSONAL_INFO.title).toContain('Senior');
    expect(PERSONAL_INFO.github).toBe('https://github.com/manasmaydeo8');
  });

  it('contains comprehensive testing and engineering skills', () => {
    const skillNames = SKILLS.map(s => s.name);
    expect(skillNames.some(name => name.includes('Testing') || name.includes('Vitest'))).toBe(true);
    expect(SKILLS.length).toBeGreaterThan(10);
  });

  it('contains valid projects with real GitHub repository links', () => {
    expect(PROJECTS.length).toBeGreaterThanOrEqual(6);
    PROJECTS.forEach(project => {
      expect(project.githubUrl).toContain('https://github.com/manasmaydeo8/');
      expect(project.metrics.length).toBeGreaterThan(0);
    });
  });
});
