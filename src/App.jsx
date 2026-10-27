import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import SiteLayout from './components/site/SiteLayout';

// Route-level code splitting
const IndexPage = lazy(() => import('./pages/Index'));
const AboutPage = lazy(() => import('./pages/About'));
const ContactPage = lazy(() => import('./pages/Contact'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetail'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));

// Page skeleton fallback during lazy route transitions
function PageSkeleton() {
  return (
    <div className="site-container" style={{ paddingBlock: '5rem' }}>
      <div className="skeleton-line" style={{ width: '140px', height: '1.25rem', marginBottom: '1.5rem' }} />
      <div className="skeleton-line" style={{ width: '60%', height: '3rem', marginBottom: '2rem' }} />
      <div className="skeleton-line" style={{ width: '100%', height: '320px' }} />
    </div>
  );
}

// Scroll restoration component on route change or hash navigation
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageSkeleton />}>
        <Routes>
          <Route path="/" element={<SiteLayout />}>
            <Route index element={<IndexPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="work/:slug" element={<ProjectDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
