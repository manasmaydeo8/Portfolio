import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: 'var(--foreground)',
        color: 'var(--background)',
        paddingTop: '4rem',
        paddingBottom: '3rem',
        marginTop: 'auto'
      }}
    >
      <div className="site-container">
        {/* Top Split: Sign-off & Contact Repeat */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            paddingBottom: '3.5rem'
          }}
        >
          {/* Sign-off */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'hsla(36, 25%, 97%, 0.6)',
                display: 'block',
                marginBottom: '1rem'
              }}
            >
              Manas Maydeo — Studio Monograph
            </span>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(24px, 4vw, 32px)',
                lineHeight: 1.2,
                color: 'var(--background)',
                maxWidth: '480px'
              }}
            >
              Design that ships, code that holds.
            </p>
          </div>

          {/* Direct Channels */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'flex-start'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'hsla(36, 25%, 97%, 0.6)'
              }}
            >
              Inquiries & Collaboration
            </span>
            <a
              href="mailto:Manas12maydeo@gmail.com"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '20px',
                color: 'var(--background)',
                textDecoration: 'underline',
                textUnderlineOffset: '4px'
              }}
            >
              Manas12maydeo@gmail.com
            </a>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                color: 'hsla(36, 25%, 97%, 0.7)'
              }}
            >
              Open to Full Stack Developer & Software Engineer opportunities. Phone: +91 7499490668
            </p>
          </div>
        </div>

        {/* Hairline Rule (white 20%) */}
        <div
          style={{
            height: '1px',
            backgroundColor: 'rgba(250, 247, 242, 0.2)',
            marginBottom: '2rem'
          }}
        />

        {/* Bottom Bar: Links & Legal */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            color: 'hsla(36, 25%, 97%, 0.7)'
          }}
        >
          {/* Social Links */}
          <div style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/manasmaydeo8?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--background)', transition: 'opacity 0.15s ease' }}
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/manas-maydeo-93ba49403/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--background)', transition: 'opacity 0.15s ease' }}
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/manasmaydeo8"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--background)', transition: 'opacity 0.15s ease' }}
            >
              Repositories ↗
            </a>
            <Link to="/contact" style={{ color: 'var(--background)' }}>
              Direct Contact
            </Link>
          </div>

          {/* Legal / Location */}
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Raigad, Maharashtra, India (IST)</span>
            <span>© {currentYear} Manas Maydeo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
