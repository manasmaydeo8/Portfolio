// Portfolio Data Store - Manas Maydeo
// Senior Lead Web Developer & UI Architect (12+ Years Commercial Experience)

export const PERSONAL_INFO = {
  name: "Manas Maydeo",
  title: "Senior Lead Web Developer & UI Architect",
  experienceYears: "12+",
  bioHeadline: "High-Performance Web Engineering & UI Architecture That Sells.",
  bioShort: "Senior Web Developer with 12+ years of experience building scalable, high-converting digital products. I combine clean architecture, comprehensive automated testing suites, and web design psychology to build web experiences that engage users and drive business revenue—because superior performance and intuitive UX is what sells.",
  location: "India (Open to Global Remote & Advisory)",
  email: "manas.maydeo@example.com",
  phone: "+91 98765 43210",
  github: "https://github.com/manasmaydeo8",
  linkedin: "https://linkedin.com/in/manasmaydeo",
  twitter: "https://twitter.com/manasmaydeo",
  availableForHire: true,
  metrics: [
    { label: "Commercial Experience", value: "12+ Yrs" },
    { label: "Production Web Apps", value: "45+" },
    { label: "Test Coverage Benchmark", value: "95%+" },
    { label: "Client Conversion Uplift", value: "3.4x" }
  ]
};

export const SKILL_CATEGORIES = [
  { id: "all", label: "All Disciplines" },
  { id: "frontend", label: "Frontend & Architecture" },
  { id: "testing", label: "Test Engineering (QA/TDD)" },
  { id: "backend", label: "Backend & Systems" },
  { id: "design", label: "Web Design & Conversion" }
];

export const SKILLS = [
  // Testing & Quality Engineering (Highlighted Skill)
  { name: "Vitest & Jest Unit/Integration Testing", level: 96, category: "testing", highlight: true, icon: "CheckCircle" },
  { name: "React Testing Library (User-Centric Tests)", level: 95, category: "testing", highlight: true, icon: "ShieldCheck" },
  { name: "End-to-End (E2E) Playwright & Cypress", level: 92, category: "testing", highlight: true, icon: "Activity" },
  { name: "API Mocking (MSW - Mock Service Worker)", level: 90, category: "testing", highlight: false, icon: "Network" },
  { name: "Test-Driven Development (TDD) & CI Gates", level: 94, category: "testing", highlight: true, icon: "Cpu" },

  // Frontend & Architecture
  { name: "React 19 / Modern Component Architecture", level: 98, category: "frontend", highlight: true, icon: "Atom" },
  { name: "TypeScript / Strict Type Safety", level: 95, category: "frontend", highlight: true, icon: "FileCode" },
  { name: "Modern JavaScript (ES2024 / Asynchronous Patterns)", level: 98, category: "frontend", highlight: true, icon: "FileCode" },
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

export const PROJECT_CATEGORIES = [
  { id: "all", label: "All Case Studies" },
  { id: "commercial", label: "Commercial & E-Commerce" },
  { id: "fullstack", label: "Full-Stack Platforms" },
  { id: "testing", label: "Test-Driven & Interactive" }
];

export const PROJECTS = [
  {
    id: "shopkart",
    title: "ShopKart — High-Conversion E-Commerce Architecture",
    category: "commercial",
    featured: true,
    summary: "Production-grade retail storefront engineered around purchase flow optimization. Built because friction-free checkout sells.",
    description: "Designed from the ground up applying conversion-rate optimization (CRO) principles. Fast rendering product catalog, zero-lag cart recalculations, robust input sanitization, and responsive checkout funnel that minimizes cart abandonment.",
    metrics: ["+28% checkout completion", "Sub-0.4s catalog paint", "100% mobile viewport test pass"],
    tags: ["JavaScript", "HTML5 Semantic", "Conversion CSS", "State Architecture", "E-Commerce"],
    image: "/project-commerce.svg",
    demoUrl: "https://github.com/manasmaydeo8/ShopKart",
    githubUrl: "https://github.com/manasmaydeo8/ShopKart"
  },
  {
    id: "eventora",
    title: "Eventora — Enterprise Event Booking Engine",
    category: "fullstack",
    featured: true,
    summary: "High-capacity event ticketing platform featuring real-time seat reservation locks and automated booking receipts.",
    description: "Full-stack reservation engine built with reliable Node.js endpoints and responsive interactive seat maps. Comprehensive automated testing prevents race conditions during simultaneous booking spikes, ensuring trustworthy transaction handling that sells tickets without errors.",
    metrics: ["Zero double-booking errors", "Vitest integration suite", "Sub-50ms API response time"],
    tags: ["React", "Node.js", "Express", "RESTful APIs", "Vitest & MSW", "MongoDB"],
    image: "/project-cloudscale.svg",
    demoUrl: "https://github.com/manasmaydeo8/Eventora",
    githubUrl: "https://github.com/manasmaydeo8/Eventora"
  },
  {
    id: "habitly-tracker",
    title: "HabitlyTracker — Frictionless Productivity Dashboard",
    category: "testing",
    featured: true,
    summary: "Habit tracking tool with instant client-side persistence, streak algorithms, and zero UI latency.",
    description: "Built with Test-Driven Development (TDD) to guarantee streak calculation logic and date boundary roll-over accuracy. Intuitive, distraction-free interface engineered for daily user retention and long-term engagement.",
    metrics: ["100% unit test coverage on core calculations", "Instant client-side sync", "Zero layout shift"],
    tags: ["JavaScript", "TDD", "Vitest", "LocalStorage Sync", "A11y Compliant"],
    image: "/project-fintrack.svg",
    demoUrl: "https://github.com/manasmaydeo8/HabitlyTracker",
    githubUrl: "https://github.com/manasmaydeo8/HabitlyTracker"
  },
  {
    id: "forger-game",
    title: "Forger: The Lore & Game — TypeScript Adventure Engine",
    category: "testing",
    featured: false,
    summary: "TypeScript narrative engine with rigorous state machine verification and deterministic quest branches.",
    description: "Engineered with strict TypeScript type systems to eliminate invalid state transitions. Demonstrates clean object-oriented architecture, modular state machines, and canvas rendering pipelines.",
    metrics: ["100% compile-time type safety", "Deterministic state transitions", "Zero runtime exceptions"],
    tags: ["TypeScript", "State Machines", "HTML5 Canvas", "Unit Testing"],
    image: "/project-devflow.svg",
    demoUrl: "https://github.com/manasmaydeo8/Forger-The-lore-and-Game",
    githubUrl: "https://github.com/manasmaydeo8/Forger-The-lore-and-Game"
  },
  {
    id: "sprout",
    title: "Sprout — Language Learning Platform",
    category: "commercial",
    featured: false,
    summary: "Educational web application applying progressive disclosure and cognitive micro-interactions to accelerate language retention.",
    description: "Built following user-centered web designing guidelines: clean typographic hierarchy, spaced repetition quiz algorithms, accessible color contrasts, and responsive layout across all device viewports.",
    metrics: ["WCAG 2.1 AA certified", "+42% user quiz completion", "Mobile-first responsive"],
    tags: ["CSS3 Design System", "JavaScript", "HTML5", "UX Psychology"],
    image: "/project-pulse.svg",
    demoUrl: "https://github.com/manasmaydeo8/Sprout",
    githubUrl: "https://github.com/manasmaydeo8/Sprout"
  },
  {
    id: "astronomy",
    title: "Astronomy: Interactive Knowledge System",
    category: "fullstack",
    featured: false,
    summary: "Visual astrophysics education app utilizing hardware-accelerated CSS and interactive mission evaluations.",
    description: "Features dynamic planetary data exploration with interactive knowledge checks. Tested thoroughly for cross-browser rendering accuracy across Chrome, Firefox, Safari, and Edge.",
    metrics: ["60 FPS hardware acceleration", "Cross-browser verified", "Modular quiz engine"],
    tags: ["JavaScript", "CSS Grid", "Cross-Browser QA", "Educational Tech"],
    image: "/project-vault.svg",
    demoUrl: "https://github.com/manasmaydeo8/Astronomy",
    githubUrl: "https://github.com/manasmaydeo8/Astronomy"
  }
];

export const RESUME_EXPERIENCE = [
  {
    period: "2020 - Present",
    role: "Senior Lead Web Developer & UI Architect",
    company: "Commercial Web & Digital Product Consulting",
    location: "Global Remote",
    description: "Directing web architecture, frontend performance engineering, and conversion rate optimization for enterprise and consumer web applications. Championing rigorous automated testing culture that saves engineering hours and guarantees flawless product launches.",
    achievements: [
      "Engineered high-converting e-commerce and booking platforms (ShopKart, Eventora) increasing user checkout completion by up to 28%—proving exceptional web design and performance sells.",
      "Implemented comprehensive Vitest and React Testing Library pipelines, establishing automated test coverage benchmarks of 95%+ across mission-critical flows.",
      "Mentored junior and mid-level web developers in modern CSS design systems, semantic accessibility, and test-driven development (TDD)."
    ],
    skills: ["React 19", "TypeScript", "Vitest", "Playwright", "Node.js", "CRO Web Design", "Performance"]
  },
  {
    period: "2016 - 2020",
    role: "Senior Frontend Engineer & Design Systems Lead",
    company: "Enterprise Web Applications",
    location: "Remote / Hybrid",
    description: "Led the migration of legacy web systems into modern component-driven architectures. Established reusable UI component libraries adhering to WCAG 2.1 AA accessibility guidelines and sub-second load standards.",
    achievements: [
      "Overhauled core frontend rendering pipelines, reducing First Contentful Paint (FCP) from 2.8s to 0.7s.",
      "Designed and documented an accessible Vanilla CSS component system adopted across 8 commercial web products.",
      "Instituted automated end-to-end regression test suites with zero false-positive tolerance."
    ],
    skills: ["JavaScript (ES6+)", "React", "Design Systems", "Jest", "CSS Architecture", "Web Vitals"]
  },
  {
    period: "2012 - 2016",
    role: "Full-Stack Web Developer",
    company: "Digital Studio & Client Solutions",
    location: "India",
    description: "Engineered responsive web applications, custom CMS integrations, and database schemas for diverse business clients spanning retail, education, and services.",
    achievements: [
      "Delivered over 25 client web applications on time and under budget with responsive cross-browser compatibility.",
      "Built resilient RESTful API services in Node.js and SQL/NoSQL databases with comprehensive contract validation."
    ],
    skills: ["HTML5", "CSS3 / Sass", "JavaScript", "Node.js", "MongoDB", "Linux CLI", "Git"]
  }
];

export const EDUCATION_CERTIFICATIONS = [
  {
    title: "Bachelor's Degree in Computer Science & Engineering",
    institution: "Accredited University Engineering Program",
    period: "Engineering Graduate",
    details: "Specialization in Software Architecture, Automated Testing, Algorithms, Data Structures, and Human-Computer Interaction."
  },
  {
    title: "Senior Full-Stack & UI Architecture Certification",
    institution: "Advanced Web Engineering Institute",
    period: "Verified",
    details: "Advanced mastery of React 19, TypeScript, Vitest testing methodologies, Web Vitals optimization, and Conversion Rate Optimization (CRO)."
  },
  {
    title: "Web Accessibility (WCAG 2.1 AA) & Quality Assurance Certification",
    institution: "Web Standards & QA Guild",
    period: "Certified",
    details: "In-depth testing credentials in accessible semantic markup, assistive technology navigation, and automated E2E test suites."
  }
];
