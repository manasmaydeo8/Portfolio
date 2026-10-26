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
MANAS MAYDEO | FULL STACK DEVELOPER & LINUX ENTHUSIAST
Email: ${PERSONAL_INFO.email}
Phone: ${PERSONAL_INFO.phone}
Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}
=================================================================

EXECUTIVE SUMMARY
${PERSONAL_INFO.bioShort}

CORE COMPETENCIES
- Frontend: React, JavaScript (ES6+), TypeScript, HTML5, CSS3, Bootstrap, Responsive UI
- Backend: Node.js, Express.js, RESTful APIs, JWT Authentication, Microservices
- Databases & Environment: MongoDB, Mongoose, SQL Basics, Linux CLI, Bash
- Tools & Deployment: Git, GitHub, Vite, Netlify, Vercel

PROJECTS & ACCOMPLISHMENTS
-----------------------------------------------------------------
Eventora — Event Booking Platform
GitHub: https://github.com/manasmaydeo8/Eventora
- Full-featured event discovery, ticket reservation, and booking management platform.
- Engineered dynamic filters, seating reservations, and responsive ticketing workflows.

HabitlyTracker — Daily Habit Manager
GitHub: https://github.com/manasmaydeo8/HabitlyTracker
- Habit tracking app with instant CRUD updates and streak completion metrics.
- Designed accessible UI with zero latency client-side state management.

ShopKart — Modern E-Commerce Platform
GitHub: https://github.com/manasmaydeo8/ShopKart
- Day-to-day shopping website with product catalog, cart management, and checkout.

Forger: The Lore & Game
GitHub: https://github.com/manasmaydeo8/Forger-The-lore-and-Game
- Interactive TypeScript narrative adventure game with state machines and dynamic lore trees.

EDUCATION & CERTIFICATIONS
-----------------------------------------------------------------
- Bachelor's Degree in Computer Science / IT Curriculum
- Full Stack Web Development (MERN) Specialization
- Modern JavaScript & TypeScript Certification

=================================================================
Generated via Manas Maydeo Portfolio (React 19 & Vite Engine)
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
