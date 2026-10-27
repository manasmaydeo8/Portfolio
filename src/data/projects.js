// Projects & Commercial Case Studies Central Data Model
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
    tags: ["React", "JavaScript", "HTML5 Semantic", "State Architecture", "E-Commerce"],
    image: "/project-commerce.svg",
    demoUrl: "https://github.com/manasmaydeo8/ShopKart",
    liveUrl: "https://github.com/manasmaydeo8/ShopKart",
    githubUrl: "https://github.com/manasmaydeo8/ShopKart",
    repoUrl: "https://github.com/manasmaydeo8/ShopKart"
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
    liveUrl: "https://github.com/manasmaydeo8/Eventora",
    githubUrl: "https://github.com/manasmaydeo8/Eventora",
    repoUrl: "https://github.com/manasmaydeo8/Eventora"
  },
  {
    id: "habitly-tracker",
    title: "HabitlyTracker — Frictionless Productivity Dashboard",
    category: "testing",
    featured: true,
    summary: "Habit tracking tool with instant client-side persistence, streak algorithms, and zero UI latency.",
    description: "Built with Test-Driven Development (TDD) to guarantee streak calculation logic and date boundary roll-over accuracy. Intuitive, distraction-free interface engineered for daily user retention and long-term engagement.",
    metrics: ["100% unit test coverage on core calculations", "Instant client-side sync", "Zero layout shift"],
    tags: ["React", "JavaScript", "TDD", "Vitest", "LocalStorage Sync", "A11y Compliant"],
    image: "/project-fintrack.svg",
    demoUrl: "https://github.com/manasmaydeo8/HabitlyTracker",
    liveUrl: "https://github.com/manasmaydeo8/HabitlyTracker",
    githubUrl: "https://github.com/manasmaydeo8/HabitlyTracker",
    repoUrl: "https://github.com/manasmaydeo8/HabitlyTracker"
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
    liveUrl: "https://github.com/manasmaydeo8/Forger-The-lore-and-Game",
    githubUrl: "https://github.com/manasmaydeo8/Forger-The-lore-and-Game",
    repoUrl: "https://github.com/manasmaydeo8/Forger-The-lore-and-Game"
  },
  {
    id: "sprout",
    title: "Sprout — Language Learning Platform",
    category: "commercial",
    featured: false,
    summary: "Educational web application applying progressive disclosure and cognitive micro-interactions to accelerate language retention.",
    description: "Built following user-centered web designing guidelines: clean typographic hierarchy, spaced repetition quiz algorithms, accessible color contrasts, and responsive layout across all device viewports.",
    metrics: ["WCAG 2.1 AA certified", "+42% user quiz completion", "Mobile-first responsive"],
    tags: ["React", "CSS3 Design System", "JavaScript", "HTML5", "UX Psychology"],
    image: "/project-pulse.svg",
    demoUrl: "https://github.com/manasmaydeo8/Sprout",
    liveUrl: "https://github.com/manasmaydeo8/Sprout",
    githubUrl: "https://github.com/manasmaydeo8/Sprout",
    repoUrl: "https://github.com/manasmaydeo8/Sprout"
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
    liveUrl: "https://github.com/manasmaydeo8/Astronomy",
    githubUrl: "https://github.com/manasmaydeo8/Astronomy",
    repoUrl: "https://github.com/manasmaydeo8/Astronomy"
  }
];

export default PROJECTS;
