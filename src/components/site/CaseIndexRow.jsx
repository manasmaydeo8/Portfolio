import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CaseIndexRow({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const rowRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = (e) => {
    if (prefersReducedMotion) return;
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const formattedNum = String(index + 1).padStart(2, '0');

  return (
    <div
      ref={rowRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        borderBottom: '1px solid var(--border)'
      }}
    >
      <Link
        to={`/work/${project.slug}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="case-index-link"
        style={{
          display: 'block',
          paddingBlock: '1.75rem',
          minHeight: '88px',
          backgroundColor: isHovered ? 'var(--muted)' : 'transparent',
          transition: 'background-color 120ms ease',
          textDecoration: 'none',
          color: 'inherit'
        }}
        aria-label={`View case study: ${project.title} (${project.year}, ${project.role})`}
      >
        {/* Mobile / Focus Static Thumbnail Fallback */}
        <div
          className={`case-static-thumbnail ${isFocused ? 'focused-visible' : ''}`}
          style={{
            marginBottom: '1rem',
            overflow: 'hidden',
            border: '1px solid var(--border)'
          }}
        >
          <img
            src={project.thumbnail || project.heroImage}
            alt={project.title}
            loading="lazy"
            style={{
              width: '100%',
              aspectRatio: '16/9',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </div>

        {/* Row Content Flex Container */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}
          className="case-row-content"
        >
          {/* Left: Ghost/Index Numeral + Title */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--accent)',
                letterSpacing: '0.05em',
                minWidth: '28px'
              }}
            >
              {formattedNum}
            </span>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(22px, 3.2vw, 32px)',
                fontWeight: 600,
                lineHeight: 1.2,
                color: 'var(--foreground)',
                transition: 'color 0.15s ease'
              }}
            >
              {project.title}
            </h3>
          </div>

          {/* Right: Metadata + Terracotta Arrow */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              marginLeft: 'auto'
            }}
            className="case-row-metadata"
          >
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                color: 'var(--muted-foreground)',
                textAlign: 'right'
              }}
            >
              <span>{project.role}</span>
              <span style={{ marginInline: '0.5rem', opacity: 0.5 }}>·</span>
              <span>{project.client}</span>
              <span style={{ marginInline: '0.5rem', opacity: 0.5 }}>·</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>{project.year}</span>
            </div>

            <div
              style={{
                color: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                transition: 'transform 0.15s ease',
                transform: isHovered ? 'translateX(4px)' : 'none'
              }}
            >
              <ArrowRight size={20} />
            </div>
          </div>
        </div>
      </Link>

      {/* Floating Cursor-Following Image Preview (Desktop Only, aria-hidden) */}
      {!prefersReducedMotion && isHovered && (
        <div
          aria-hidden="true"
          className="case-floating-preview"
          style={{
            position: 'fixed',
            left: `${mousePos.x + 24}px`,
            top: `${mousePos.y - 70}px`,
            width: '200px',
            height: '140px',
            pointerEvents: 'none',
            zIndex: 9999,
            border: '1px solid var(--border)',
            backgroundColor: 'var(--card)',
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(30, 20, 10, 0.12)'
          }}
        >
          <img
            src={project.thumbnail || project.heroImage}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </div>
      )}

      {/* Media query styling for responsive rows */}
      <style>{`
        /* Desktop */
        @media (min-width: 768px) {
          .case-static-thumbnail:not(.focused-visible) {
            display: none !important;
          }
        }
        /* Mobile */
        @media (max-width: 767px) {
          .case-static-thumbnail {
            display: block !important;
          }
          .case-floating-preview {
            display: none !important;
          }
          .case-row-content {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.75rem !important;
          }
          .case-row-metadata {
            margin-left: 0 !important;
            width: 100% !important;
            justify-content: space-between !important;
            text-align: left !important;
          }
        }
      `}</style>
    </div>
  );
}
