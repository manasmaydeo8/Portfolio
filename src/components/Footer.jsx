import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-color)',
        backgroundColor: 'var(--bg-secondary)',
        padding: '4rem 0 2rem 0',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid var(--border-color)'
          }}
        >
          {/* Brand & Tagline */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontWeight: 700,
                fontSize: '1.25rem',
                fontFamily: 'var(--font-display)',
                marginBottom: '0.5rem'
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'var(--gradient-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <Code2 size={18} />
              </div>
              <span>
                Manas<span style={{ color: 'var(--accent-primary)' }}>.dev</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '380px' }}>
              Building high-throughput, secure, and intuitive web systems for tomorrow's scale.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>
              About
            </a>
            <a href="#skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>
              Skills
            </a>
            <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>
              Projects
            </a>
            <a href="#resume" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>
              Resume
            </a>
            <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>
              Contact
            </a>
          </div>

          {/* Socials & Back to top button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{ color: 'var(--text-secondary)' }}
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ color: 'var(--text-secondary)' }}
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={PERSONAL_INFO.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter/X"
              style={{ color: 'var(--text-secondary)' }}
            >
              <TwitterIcon size={20} />
            </a>

            <button
              onClick={scrollToTop}
              id="back-to-top-btn"
              title="Back to top"
              aria-label="Back to top"
              className="btn btn-secondary"
              style={{ borderRadius: '50%', width: '42px', height: '42px', padding: 0 }}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Sub-row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingTop: '2rem',
            fontSize: '0.85rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            Built with React 19, Vite, and CSS3 Architecture.
          </div>
        </div>
      </div>
    </footer>
  );
}
