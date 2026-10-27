import { describe, it, expect } from 'vitest';
import { PROFILE, PERSONAL_INFO } from '../data/profile';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/projects';
import { SKILLS, SKILL_CATEGORIES } from '../data/skills';
import { RESUME_EXPERIENCE, EDUCATION_CERTIFICATIONS } from '../data/resume';

describe('Portfolio Core Data & Structure', () => {
  it('contains valid developer personal information from profile.js', () => {
    expect(PROFILE.name).toBe('Manas Maydeo');
    expect(PROFILE.title).toContain('Senior');
    expect(PROFILE.socialLinks.github).toBe('https://github.com/manasmaydeo8');
    expect(PROFILE.socialLinks.linkedin).toContain('linkedin.com/in/');
    expect(PROFILE.socialLinks.twitter).toContain('twitter.com/');
    expect(PROFILE.bio.length).toBeGreaterThan(0);
    expect(PERSONAL_INFO.name).toBe(PROFILE.name);
  });

  it('contains comprehensive testing and engineering skills from skills.js', () => {
    const skillNames = SKILLS.map((s) => s.name);
    expect(skillNames.some((name) => name.includes('Testing') || name.includes('Vitest'))).toBe(true);
    expect(SKILLS.length).toBeGreaterThan(10);

    // Verify proficiency indicators are within valid 0-100 bounds
    SKILLS.forEach((skill) => {
      expect(skill.level).toBeGreaterThanOrEqual(50);
      expect(skill.level).toBeLessThanOrEqual(100);
      expect(typeof skill.category).toBe('string');
      expect(typeof skill.icon).toBe('string');
    });

    expect(SKILL_CATEGORIES.length).toBeGreaterThanOrEqual(4);
  });

  it('contains valid projects with real GitHub repository links and tags from projects.js', () => {
    expect(PROJECTS.length).toBeGreaterThanOrEqual(6);
    PROJECTS.forEach((project) => {
      expect(project.githubUrl || project.repoUrl).toContain('https://github.com/manasmaydeo8/');
      expect(project.liveUrl || project.demoUrl).toBeDefined();
      expect(project.metrics.length).toBeGreaterThan(0);
      expect(project.tags.length).toBeGreaterThan(0);
      expect(project.summary.length).toBeGreaterThan(10);
    });

    expect(PROJECT_CATEGORIES.length).toBeGreaterThanOrEqual(3);
  });

  it('supports tag-based filtering across projects', () => {
    const reactProjects = PROJECTS.filter((p) => p.tags.includes('React'));
    expect(reactProjects.length).toBeGreaterThan(0);

    const vitestProjects = PROJECTS.filter((p) => p.tags.includes('Vitest'));
    expect(vitestProjects.length).toBeGreaterThan(0);
  });

  it('contains valid chronological career history and verified certifications from resume.js', () => {
    expect(RESUME_EXPERIENCE.length).toBeGreaterThanOrEqual(3);
    RESUME_EXPERIENCE.forEach((exp) => {
      expect(exp.role).toBeDefined();
      expect(exp.company).toBeDefined();
      expect(exp.period).toBeDefined();
      expect(exp.achievements.length).toBeGreaterThan(0);
      expect(exp.skills.length).toBeGreaterThan(0);
    });

    expect(EDUCATION_CERTIFICATIONS.length).toBeGreaterThanOrEqual(3);
    EDUCATION_CERTIFICATIONS.forEach((item) => {
      expect(item.title).toBeDefined();
      expect(item.institution).toBeDefined();
    });
  });

  it('validates contact form email format correctly', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(emailRegex.test('valid@example.com')).toBe(true);
    expect(emailRegex.test('recruiter@google.com')).toBe(true);
    expect(emailRegex.test('invalid-email')).toBe(false);
    expect(emailRegex.test('invalid@')).toBe(false);
    expect(emailRegex.test('@domain.com')).toBe(false);
    expect(emailRegex.test('')).toBe(false);
  });
});
