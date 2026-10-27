import React from 'react';
import { Outlet } from 'react-router-dom';
import Masthead from './Masthead';
import Footer from './Footer';

export default function SiteLayout() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)'
      }}
    >
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="skip-to-content"
        style={{
          position: 'absolute',
          top: '-100px',
          left: '1rem',
          backgroundColor: 'var(--primary)',
          color: 'var(--primary-foreground)',
          padding: '0.75rem 1.25rem',
          zIndex: 9999,
          fontFamily: 'var(--font-sans)',
          fontSize: '13px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          transition: 'top 0.15s ease'
        }}
        onFocus={(e) => {
          e.currentTarget.style.top = '1rem';
        }}
        onBlur={(e) => {
          e.currentTarget.style.top = '-100px';
        }}
      >
        Skip to main content
      </a>

      {/* Sticky Masthead Navigation */}
      <Masthead />

      {/* Main Page Area */}
      <main id="main-content" style={{ flex: '1 0 auto' }}>
        <Outlet />
      </main>

      {/* Monograph Black Footer */}
      <Footer />
    </div>
  );
}
