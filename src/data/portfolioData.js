// Portfolio Data Store - Manas Maydeo
export const PERSONAL_INFO = {
  name: "Manas Maydeo",
  title: "Full Stack Developer & Linux Enthusiast",
  bioHeadline: "Building practical, responsive web applications with React, Node.js & MongoDB.",
  bioShort: "Full Stack Developer specializing in React, Node.js, and MongoDB. Linux enthusiast dedicated to building clean, accessible, and high-performance applications with seamless user experiences.",
  location: "India (Open to Remote)",
  email: "manas.maydeo@example.com",
  phone: "+91 98765 43210",
  github: "https://github.com/manasmaydeo8",
  linkedin: "https://linkedin.com/in/manasmaydeo",
  twitter: "https://twitter.com/manasmaydeo",
  availableForHire: true,
  metrics: [
    { label: "Public Repositories", value: "10+" },
    { label: "Frontend & Full-Stack Apps", value: "8+" },
    { label: "Core Tech Focus", value: "MERN" },
    { label: "Code Quality & Uptime", value: "99.9%" }
  ]
};

export const SKILL_CATEGORIES = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend & API" },
  { id: "database", label: "Database & Linux" },
  { id: "tools", label: "Tools & DevOps" }
];

export const SKILLS = [
  // Frontend
  { name: "React / React 19", level: 92, category: "frontend", highlight: true, icon: "Atom" },
  { name: "JavaScript (ES6+)", level: 94, category: "frontend", highlight: true, icon: "FileCode" },
  { name: "TypeScript", level: 86, category: "frontend", highlight: true, icon: "FileCode" },
  { name: "HTML5 / Semantic Web", level: 96, category: "frontend", highlight: false, icon: "Globe" },
  { name: "CSS3 / Modern Responsive Design", level: 92, category: "frontend", highlight: true, icon: "Palette" },
  { name: "Bootstrap & UI Libraries", level: 90, category: "frontend", highlight: false, icon: "Layers" },

  // Backend
  { name: "Node.js", level: 90, category: "backend", highlight: true, icon: "Server" },
  { name: "Express.js", level: 88, category: "backend", highlight: true, icon: "Terminal" },
  { name: "RESTful APIs Architecture", level: 90, category: "backend", highlight: true, icon: "Network" },
  { name: "Authentication & JWT", level: 85, category: "backend", highlight: false, icon: "ShieldCheck" },

  // Database & Linux
  { name: "MongoDB / Mongoose", level: 88, category: "database", highlight: true, icon: "Database" },
  { name: "Linux Environment & Bash", level: 90, category: "database", highlight: true, icon: "Terminal" },
  { name: "SQL & Relational Concepts", level: 82, category: "database", highlight: false, icon: "Database" },

  // Tools & DevOps
  { name: "Git & GitHub Version Control", level: 92, category: "tools", highlight: true, icon: "GitBranch" },
  { name: "Vite & Modern Bundlers", level: 88, category: "tools", highlight: false, icon: "Cpu" },
  { name: "Vercel / Netlify / Cloud Deployment", level: 88, category: "tools", highlight: false, icon: "Cloud" }
];

export const PROJECT_CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "interactive", label: "Interactive & Games" }
];

export const PROJECTS = [
  {
    id: "eventora",
    title: "Eventora — Event Booking Platform",
    category: "fullstack",
    featured: true,
    summary: "Full-featured web application for discovering trending events, reserving tickets, and managing attendee bookings.",
    description: "Architected a comprehensive event discovery and booking engine. Features dynamic event filtering, seat selection workflows, reservation state persistence, and responsive mobile-first ticketing interface.",
    metrics: ["Sub-second event search", "Responsive booking flow", "Zero seat-double-booking"],
    tags: ["JavaScript", "Node.js", "Express", "CSS3", "REST APIs"],
    image: "/project-cloudscale.svg",
    demoUrl: "https://github.com/manasmaydeo8/Eventora",
    githubUrl: "https://github.com/manasmaydeo8/Eventora"
  },
  {
    id: "habitly-tracker",
    title: "HabitlyTracker — Daily Habit Manager",
    category: "frontend",
    featured: true,
    summary: "Productivity web application allowing users to track daily habits, streaks, completions, and visual consistency metrics.",
    description: "Built an interactive daily habit tracking dashboard featuring instant task additions, streak count tracking, local state synchronization, and habit completion heatmaps.",
    metrics: ["100% Client-side privacy", "Instant CRUD updates", "Zero dependencies lag"],
    tags: ["JavaScript", "HTML5", "Modern CSS", "LocalStorage", "Responsive UI"],
    image: "/project-fintrack.svg",
    demoUrl: "https://github.com/manasmaydeo8/HabitlyTracker",
    githubUrl: "https://github.com/manasmaydeo8/HabitlyTracker"
  },
  {
    id: "shopkart",
    title: "ShopKart — Modern E-Commerce Platform",
    category: "fullstack",
    featured: true,
    summary: "Everyday consumer e-commerce storefront with product catalog, cart management, and streamlined checkout.",
    description: "Engineered a clean shopping experience complete with product listing filters, dynamic shopping cart calculation, responsive product showcase, and checkout form validation.",
    metrics: ["Fast product rendering", "Dynamic cart badge", "Mobile-optimized catalog"],
    tags: ["JavaScript", "CSS3", "HTML5", "State Management", "E-Commerce"],
    image: "/project-commerce.svg",
    demoUrl: "https://github.com/manasmaydeo8/ShopKart",
    githubUrl: "https://github.com/manasmaydeo8/ShopKart"
  },
  {
    id: "forger-game",
    title: "Forger: The Lore & Game",
    category: "interactive",
    featured: false,
    summary: "Interactive lore-driven adventure game where narrative progression unlocks gameplay advancement.",
    description: "Developed in TypeScript, this game implements an interactive narrative engine. Players solve mysteries and advance through interconnected questlines with dynamic lore branches.",
    metrics: ["Type-safe game state", "Rich branching narrative", "Interactive canvas visuals"],
    tags: ["TypeScript", "Game Engine", "HTML5 Canvas", "State Machine"],
    image: "/project-devflow.svg",
    demoUrl: "https://github.com/manasmaydeo8/Forger-The-lore-and-Game",
    githubUrl: "https://github.com/manasmaydeo8/Forger-The-lore-and-Game"
  },
  {
    id: "sprout",
    title: "Sprout — Language Learning Platform",
    category: "frontend",
    featured: false,
    summary: "Interactive platform for acquiring new languages through guided exercises, flashcards, and self-improvement modules.",
    description: "Designed an engaging educational website focused on language acquisition. Features vocabulary quiz modules, audio pronunciation aids, and progress milestone tracking.",
    metrics: ["Modular lesson structure", "Fast quiz feedback", "Accessible navigation"],
    tags: ["CSS3", "JavaScript", "HTML5", "UX Design"],
    image: "/project-pulse.svg",
    demoUrl: "https://github.com/manasmaydeo8/Sprout",
    githubUrl: "https://github.com/manasmaydeo8/Sprout"
  },
  {
    id: "astronomy",
    title: "Astronomy: Cosmic Missions Explorer",
    category: "interactive",
    featured: false,
    summary: "Space exploration knowledge platform challenging users to test cosmic understanding through interactive space missions.",
    description: "Created an interactive educational web app covering astrophysics, planetary bodies, and space exploration history with interactive quiz missions and visual data cards.",
    metrics: ["Interactive mission scoring", "Fluid CSS animations", "Engaging cosmic theme"],
    tags: ["JavaScript", "CSS Grid", "Animations", "HTML5"],
    image: "/project-vault.svg",
    demoUrl: "https://github.com/manasmaydeo8/Astronomy",
    githubUrl: "https://github.com/manasmaydeo8/Astronomy"
  }
];

export const RESUME_EXPERIENCE = [
  {
    period: "2024 - Present",
    role: "Full Stack Developer",
    company: "Web & Software Engineering Projects",
    location: "India / Remote",
    description: "Architecting and developing production-grade web applications utilizing the MERN stack (MongoDB, Express, React, Node.js). Leading end-to-end development from responsive UI design to server API implementation and database structuring.",
    achievements: [
      "Engineered multiple web applications including Eventora (event ticketing) and ShopKart (e-commerce).",
      "Optimized frontend load times through Vite bundling, image lazy loading, and CSS modularization.",
      "Maintained 10+ public GitHub repositories adhering to Git best practices and clean code standards."
    ],
    skills: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "Linux"]
  },
  {
    period: "2023 - 2024",
    role: "Frontend Developer & Open Source Contributor",
    company: "Independent Projects & GitHub",
    location: "Remote",
    description: "Focused on mastering modern JavaScript, TypeScript, and responsive CSS frameworks. Built interactive platforms such as Forger (TypeScript lore game) and Sprout (language learning portal).",
    achievements: [
      "Designed and published reusable quiz and utility applications with 100+ vetted technical questions.",
      "Achieved high Lighthouse performance and accessibility scores across mobile and desktop devices.",
      "Configured automated deployments on Netlify and Vercel with custom domain routing."
    ],
    skills: ["TypeScript", "CSS3 / Flexbox / Grid", "Bootstrap", "Git", "REST APIs"]
  }
];

export const EDUCATION_CERTIFICATIONS = [
  {
    title: "Bachelor's Degree in Computer Science / Information Technology",
    institution: "University Engineering Curriculum",
    period: "Undergraduate",
    details: "Core focus on Data Structures, Algorithms, Database Management Systems, Computer Networks, and Full-Stack Web Development."
  },
  {
    title: "Full Stack Web Development (MERN)",
    institution: "Certification & Project Specialization",
    period: "Verified",
    details: "In-depth specialization in React, Node.js, Express, MongoDB, RESTful API architecture, and Linux server management."
  },
  {
    title: "Modern JavaScript & TypeScript Mastery",
    institution: "Open Source & Developer Community",
    period: "Certified",
    details: "Comprehensive training in ES6+ syntax, asynchronous programming, DOM manipulation, and TypeScript typing systems."
  }
];
