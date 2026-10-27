import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Masthead() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const overlayRef = useRef(null);

  // Close mobile overlay on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scrolling when mobile overlay is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      if (overlayRef.current) {
        overlayRef.current.focus();
      }
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Work', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Experience', to: '/about#experience' },
    { label: 'Contact', to: '/contact' }
  ];

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          height: '56px',
          backgroundColor: 'var(--background)',
          borderBottom: '1px solid var(--border)'
        }}
      >
        <div
          className="site-container"
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Wordmark */}
          <Link
            to="/"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '20px',
              fontWeight: 600,
              color: 'var(--foreground)',
              letterSpacing: '-0.02em',
              textDecoration: 'none'
            }}
            aria-label="Manas Maydeo — Home"
          >
            Manas Maydeo
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2rem'
            }}
            className="desktop-nav"
          >
            {navLinks.map((item) => {
              const isWorkActive = item.to === '/' && (location.pathname === '/' || location.pathname.startsWith('/work/'));
              const isOtherActive = item.to !== '/' && location.pathname === item.to;
              const isActive = isWorkActive || isOtherActive;

              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.4px',
                    color: 'var(--foreground)',
                    textDecoration: 'none',
                    paddingBottom: '4px',
                    borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent',
                    transition: 'border-color 0.15s ease, color 0.15s ease'
                  }}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action: Desktop Button / Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link
              to="/contact"
              className="btn-primary desktop-cta"
              style={{
                height: '40px',
                paddingInline: '1.25rem',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.4px'
              }}
            >
              Get in touch
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-hamburger tap-target"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-overlay"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--foreground)',
                display: 'none'
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-width Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-overlay"
          ref={overlayRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Overlay"
          style={{
            position: 'fixed',
            inset: 0,
            top: '56px',
            zIndex: 49,
            backgroundColor: 'var(--background)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2.5rem 1.5rem',
            borderTop: '1px solid var(--border)'
          }}
        >
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem'
            }}
          >
            {navLinks.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '32px',
                  fontWeight: 600,
                  color: 'var(--foreground)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--border)',
                  paddingBottom: '0.75rem'
                }}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{
                width: '100%',
                height: '48px',
                textAlign: 'center',
                justifyContent: 'center'
              }}
            >
              Get in touch
            </Link>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--muted-foreground)',
                marginTop: '1.5rem',
                textAlign: 'center'
              }}
            >
              India • Press Esc to close
            </p>
          </div>
        </div>
      )}

      {/* Responsive media rules for masthead */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: inline-flex !important;
          }
          .mobile-hamburger {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-cta {
            display: none !important;
          }
          .mobile-hamburger {
            display: inline-flex !important;
          }
        }
      `}</style>
    </>
  );
}
