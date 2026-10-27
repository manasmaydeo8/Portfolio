// Technical Skills & Competencies Central Data Model
export const SKILL_CATEGORIES = [
  { id: "all", label: "All Disciplines" },
  { id: "frontend", label: "Frontend & Architecture" },
  { id: "testing", label: "Test Engineering (QA/TDD)" },
  { id: "backend", label: "Backend & Systems" },
  { id: "design", label: "Web Design & Conversion" }
];

export const SKILLS = [
  // Testing & Quality Engineering
  { name: "Vitest & Jest Unit/Integration Testing", level: 96, category: "testing", highlight: true, icon: "CheckCircle2" },
  { name: "React Testing Library (User-Centric Tests)", level: 95, category: "testing", highlight: true, icon: "ShieldCheck" },
  { name: "End-to-End (E2E) Playwright & Cypress", level: 92, category: "testing", highlight: true, icon: "Activity" },
  { name: "API Mocking (MSW - Mock Service Worker)", level: 90, category: "testing", highlight: false, icon: "Network" },
  { name: "Test-Driven Development (TDD) & CI Gates", level: 94, category: "testing", highlight: true, icon: "Cpu" },

  // Frontend & Architecture
  { name: "React 19 / Modern Component Architecture", level: 98, category: "frontend", highlight: true, icon: "Atom" },
  { name: "TypeScript / Strict Type Safety", level: 95, category: "frontend", highlight: true, icon: "FileCode" },
  { name: "Modern JavaScript (ES2024 / Async Patterns)", level: 98, category: "frontend", highlight: true, icon: "FileCode" },
  { name: "Web Vitals & Performance Optimization (LCP/CLS)", level: 96, category: "frontend", highlight: true, icon: "Zap" },
  { name: "State Architecture (Redux Toolkit / Context / Zustand)", level: 92, category: "frontend", highlight: false, icon: "Layers" },

  // Web Design & Conversion
  { name: "Conversion Rate Optimization (CRO UI Design)", level: 94, category: "design", highlight: true, icon: "TrendingUp" },
  { name: "Responsive Design Systems (Mobile-First CSS)", level: 96, category: "design", highlight: false, icon: "Palette" },
  { name: "WCAG 2.1 AA Accessibility & Semantic HTML5", level: 95, category: "design", highlight: false, icon: "Globe" },

  // Backend & Systems
  { name: "Node.js & Express Architecture", level: 92, category: "backend", highlight: true, icon: "Server" },
  { name: "RESTful API Design & Contract Testing", level: 94, category: "backend", highlight: false, icon: "Network" },
  { name: "MongoDB & Database Index Optimization", level: 88, category: "backend", highlight: false, icon: "Database" },
  { name: "Linux Administration & Bash Automation", level: 90, category: "backend", highlight: false, icon: "Terminal" }
];

export default SKILLS;
