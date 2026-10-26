import React, { useState, useEffect, Suspense, lazy } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { PERSONAL_INFO } from './data/portfolioData';
import { CheckCircle2, DownloadCloud } from 'lucide-react';

// Code-splitting & Lazy Loading for Performance
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Resume = lazy(() => import('./components/Resume'));
const Contact = lazy(() => import('./components/Contact'));

// Section Skeleton Fallback Component
function SectionSkeleton({ title }) {
  return (
    <div className="section-loading-skeleton">
      <div style={{ textAlign: 'center', maxWidth: '400px', margin: '0 auto 2rem auto' }}>
        <div className="skeleton" style={{ height: '24px', width: '120px', margin: '0 auto 1rem auto', borderRadius: '20px' }} />
        <div className="skeleton" style={{ height: '36px', width: '260px', margin: '0 auto', borderRadius: '8px' }} />
      </div>
      <div className="skeleton section-skeleton-box" />
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleDownloadResume = () => {
    const resumeText = `=================================================================
MANAS MAYDEO | SENIOR LEAD WEB DEVELOPER & UI ARCHITECT (12+ YEARS)
Email: ${PERSONAL_INFO.email}
Phone: ${PERSONAL_INFO.phone}
Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}
=================================================================

EXECUTIVE SUMMARY
${PERSONAL_INFO.bioShort}

CORE COMPETENCIES & TEST SKILLS
- Testing & QA: Vitest, React Testing Library, Jest, Playwright (E2E), MSW (Mock Service Worker), TDD
- Frontend Architecture: React 19, TypeScript, JavaScript (ES2024), Web Vitals, CRO Web Design
- Backend & Systems: Node.js, Express, RESTful APIs, MongoDB, Mongoose, Linux Administration
- Web Standards: WCAG 2.1 AA Accessibility, Semantic HTML5, Mobile-First CSS Design Systems

COMMERCIAL CASE STUDIES
-----------------------------------------------------------------
ShopKart — High-Conversion E-Commerce Architecture
GitHub: https://github.com/manasmaydeo8/ShopKart
- Engineered frictionless retail checkout flows (+28% completion uplift). Friction-free design sells.
- Zero-lag state recalculations, automated input sanitization, sub-0.4s initial catalog paint.

Eventora — Enterprise Event Booking Engine
GitHub: https://github.com/manasmaydeo8/Eventora
- Built high-capacity booking system with seat reservation locks.
- 100% test pass on Vitest integration suite eliminating double-booking concurrency bugs.

HabitlyTracker — Frictionless Productivity Dashboard
GitHub: https://github.com/manasmaydeo8/HabitlyTracker
- Designed habit management app with client-side persistence and zero UI latency.
- Full unit test coverage on streak algorithms and date boundaries.

Forger: The Lore & Game — TypeScript Narrative Engine
GitHub: https://github.com/manasmaydeo8/Forger-The-lore-and-Game
- Strict TypeScript type safety with deterministic state transitions and canvas visuals.

PROFESSIONAL EXPERIENCE & TRACK RECORD
-----------------------------------------------------------------
- Senior Lead Web Developer & UI Architect (2020 - Present) | 12+ Years Commercial Tenure
- Senior Frontend Engineer & Design Systems Lead (2016 - 2020)
- Full-Stack Web Developer (2012 - 2016)

=================================================================
Official Executive CV — Manas Maydeo (React 19 & Vitest Architecture)
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Manas_Maydeo_FullStack_Developer_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setToastMessage('Resume downloaded successfully!');
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Bar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main style={{ flexGrow: 1 }}>
        {/* Hero Section (Eagerly Loaded for Immediate First Paint) */}
        <Hero onDownloadResume={handleDownloadResume} />

        {/* Lazy Loaded Sections */}
        <Suspense fallback={<SectionSkeleton title="About" />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionSkeleton title="Skills" />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<SectionSkeleton title="Projects" />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionSkeleton title="Resume" />}>
          <Resume onDownloadResume={handleDownloadResume} />
        </Suspense>

        <Suspense fallback={<SectionSkeleton title="Contact" />}>
          <Contact />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Toast Confirmation */}
      {toastMessage && (
        <div className="toast-notification" id="app-toast-alert" role="status">
          <CheckCircle2 size={20} color="var(--accent-emerald)" />
          <span style={{ fontWeight: 500 }}>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
