import React from 'react';

/**
 * SectionHeader Component
 * @param {Object} props
 * @param {string} props.number - e.g. "01"
 * @param {string} props.label - e.g. "SELECTED WORK"
 * @param {string} props.headline - e.g. "Case Studies & Systems"
 * @param {string} [props.subline] - optional description
 * @param {boolean} [props.hideGhost] - optional flag to hide ghost numeral
 */
export default function SectionHeader({
  number,
  label,
  headline,
  subline,
  hideGhost = false
}) {
  return (
    <div
      style={{
        position: 'relative',
        paddingBottom: '2.5rem',
        marginBottom: '3rem',
        borderBottom: '1px solid var(--border)',
        overflow: 'hidden'
      }}
    >
      {/* Signature Ghost Numeral (Playfair ~160px, 8% opacity ink) */}
      {!hideGhost && number && (
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '0',
            top: '-20px',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(110px, 16vw, 160px)',
            lineHeight: 0.8,
            fontWeight: 700,
            color: 'hsla(30, 12%, 11%, 0.08)',
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: 0
          }}
        >
          {number}
        </span>
      )}

      {/* Foreground Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Eyebrow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '0.75rem'
          }}
        >
          {number && (
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--accent)',
                letterSpacing: '0.4px'
              }}
            >
              {number}
            </span>
          )}
          {number && label && (
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--accent)'
              }}
            >
              —
            </span>
          )}
          {label && (
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.4px',
                color: 'var(--foreground)'
              }}
            >
              {label}
            </span>
          )}
        </div>

        {/* Headline */}
        {headline && (
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 600,
              lineHeight: 1.15,
              color: 'var(--foreground)',
              maxWidth: '800px'
            }}
          >
            {headline}
          </h2>
        )}

        {/* Optional Subline */}
        {subline && (
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.125rem',
              color: 'var(--muted-foreground)',
              marginTop: '0.75rem',
              maxWidth: '720px'
            }}
          >
            {subline}
          </p>
        )}
      </div>
    </div>
  );
}
