// Resume & Career History Central Data Model
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

export default {
  experience: RESUME_EXPERIENCE,
  education: EDUCATION_CERTIFICATIONS
};
