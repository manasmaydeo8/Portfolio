// Developer Profile & Biography Central Data Model
export const PROFILE = {
  name: "Manas Maydeo",
  title: "Senior Lead Web Developer & UI Architect",
  experienceYears: "12+",
  headline: "High-Performance Web Engineering & UI Architecture That Sells.",
  bio: [
    "Senior Web Developer with 12+ years of commercial experience building scalable, high-converting digital products. I combine clean architecture, comprehensive automated testing suites, and web design psychology to build web experiences that engage users and drive business revenue—because superior performance and intuitive UX is what sells.",
    "Over the past twelve years, I have architected web applications ranging from high-traffic e-commerce storefronts to multi-tenant booking platforms and interactive learning suites.",
    "I treat testing not as an afterthought, but as an indispensable discipline: unit tests with Vitest, behavior validation with React Testing Library, and end-to-end regression prevention ensure peace of mind with zero downtime."
  ],
  bioShort: "Senior Web Developer with 12+ years of experience building scalable, high-converting digital products. I combine clean architecture, comprehensive automated testing suites, and web design psychology to build web experiences that engage users and drive business revenue—because superior performance and intuitive UX is what sells.",
  location: "India (Open to Global Remote & Advisory)",
  email: "manas.maydeo@example.com",
  phone: "+91 98765 43210",
  avatar: "/avatar.svg",
  availableForHire: true,
  socialLinks: {
    github: "https://github.com/manasmaydeo8",
    linkedin: "https://linkedin.com/in/manasmaydeo",
    twitter: "https://twitter.com/manasmaydeo"
  },
  metrics: [
    { label: "Commercial Experience", value: "12+ Yrs" },
    { label: "Production Web Apps", value: "45+" },
    { label: "Test Coverage Benchmark", value: "95%+" },
    { label: "Client Conversion Uplift", value: "3.4x" }
  ],
  philosophies: [
    {
      title: "Design That Sells & Converts",
      description: "Visual hierarchy, cognitive pacing, and responsive clarity are not decorative luxuries—they are core business drivers. An intuitive, frictionless user journey is what reliably sells products and retains users."
    },
    {
      title: "Test Engineering & Zero Regressions",
      description: "Automated testing with Vitest, Jest, and React Testing Library is a core discipline. Every critical user flow is protected by integration tests, ensuring production stability on every deployment."
    },
    {
      title: "Core Web Vitals & Sub-Second Speed",
      description: "Slow websites lose sales. Through component-level code splitting, lazy loading, and lightweight CSS systems, I consistently achieve 98+ Lighthouse scores and sub-second Largest Contentful Paint."
    }
  ]
};

export const PERSONAL_INFO = {
  ...PROFILE,
  bioHeadline: PROFILE.headline,
  github: PROFILE.socialLinks.github,
  linkedin: PROFILE.socialLinks.linkedin,
  twitter: PROFILE.socialLinks.twitter
};

export default PROFILE;
