import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { FALLBACK_PROJECTS } from '../data/fallbackData';

export default function ProjectDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState(() =>
    FALLBACK_PROJECTS.find((p) => p.slug === slug) || null
  );
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useSEO({
    title: project ? `${project.title} — Case Study` : 'Case Study',
    description: project ? project.summary : 'Detailed case study narrative proving craft, systems, and outcomes.',
    canonical: `https://manasmaydeo.design/work/${slug}`,
    jsonLd: project
      ? {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          headline: project.title,
          description: project.summary,
          author: {
            '@type': 'Person',
            name: 'Manas Maydeo'
          },
          datePublished: project.year
        }
      : undefined
  });

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetch(`/api/projects/${slug}`)
      .then((res) => {
        if (res.status === 404) {
          throw new Error('NOT_FOUND');
        }
        if (!res.ok) throw new Error('API_ERROR');
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          setProject(data);
          setNotFound(false);
        }
      })
      .catch((err) => {
        if (!isMounted) return;
        if (err.message === 'NOT_FOUND') {
          // Check local fallback
          const localFallback = FALLBACK_PROJECTS.find((p) => p.slug === slug);
          if (localFallback) {
            setProject(localFallback);
            setNotFound(false);
          } else {
            setNotFound(true);
          }
        } else {
          // Keep local fallback if available
          const localFallback = FALLBACK_PROJECTS.find((p) => p.slug === slug);
          if (localFallback) {
            setProject(localFallback);
            setNotFound(false);
          } else {
            setNotFound(true);
          }
        }
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (notFound) {
    return (
      <div className="site-container" style={{ paddingBlock: '6rem', textAlign: 'center' }}>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(20px, 3vw, 24px)',
            color: 'var(--foreground)',
            marginBottom: '2rem'
          }}
        >
          This case study doesn't exist (yet).
        </p>
        <Link to="/" className="btn-primary" style={{ textDecoration: 'none' }}>
          <ArrowLeft size={16} />
          <span>Return to all work</span>
        </Link>
      </div>
    );
  }

  if (loading && !project) {
    return (
      <div className="site-container" style={{ paddingBlock: '6rem' }}>
        <div className="skeleton-line" style={{ width: '120px', height: '1.5rem', marginBottom: '2rem' }} />
        <div className="skeleton-line" style={{ width: '70%', height: '3.5rem', marginBottom: '1.5rem' }} />
        <div className="skeleton-line" style={{ width: '100%', height: '400px' }} />
      </div>
    );
  }

  if (!project) return null;

  return (
    <article style={{ paddingBottom: '7rem' }}>
      {/* Top Header & Eyebrow */}
      <div className="site-container" style={{ paddingTop: '3rem', paddingBottom: '2.5rem' }}>
        {/* Back Link */}
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.4px',
            color: 'var(--muted-foreground)',
            textDecoration: 'none',
            marginBottom: '2rem',
            transition: 'color 0.15s ease'
          }}
          className="link-underline"
        >
          <ArrowLeft size={16} />
          <span>All work</span>
        </Link>

        {/* Eyebrow: Client · Year · Role */}
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'var(--accent)',
            marginBottom: '1rem'
          }}
        >
          <span>{project.client}</span>
          <span style={{ marginInline: '0.5rem', opacity: 0.6 }}>·</span>
          <span>{project.year}</span>
          <span style={{ marginInline: '0.5rem', opacity: 0.6 }}>·</span>
          <span>{project.role}</span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 6vw, 48px)',
            lineHeight: 1.1,
            letterSpacing: '-0.4px',
            fontWeight: 600,
            color: 'var(--foreground)',
            maxWidth: '900px',
            marginBottom: '1.5rem'
          }}
          className="text-balance"
        >
          {project.title}
        </h1>

        {/* Summary */}
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(18px, 2.5vw, 20px)',
            lineHeight: 1.6,
            color: 'var(--foreground)',
            maxWidth: '820px'
          }}
        >
          {project.summary}
        </p>
      </div>

      {/* Full-width 3:2 Hero Image Container */}
      <div className="site-container" style={{ marginBottom: '4rem' }}>
        <div
          style={{
            width: '100%',
            aspectRatio: '3/2',
            maxHeight: '640px',
            overflow: 'hidden',
            border: '1px solid var(--border)',
            backgroundColor: 'var(--card)'
          }}
        >
          <img
            src={project.heroImage}
            alt={`Hero preview for ${project.title}`}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 200ms ease-out'
            }}
            className="hero-image-zoom"
          />
        </div>
      </div>

      {/* Reading Column: 720px max width */}
      <div className="site-container">
        <div className="reading-column">
          {/* Section: The brief */}
          <div style={{ marginBottom: '3rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--accent)',
                display: 'block',
                marginBottom: '0.75rem'
              }}
            >
              01 — The Brief
            </span>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', lineHeight: 1.7 }}>
              {project.brief}
            </p>
          </div>

          {/* Section: Approach */}
          <div style={{ marginBottom: '3rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--accent)',
                display: 'block',
                marginBottom: '0.75rem'
              }}
            >
              02 — Approach
            </span>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', lineHeight: 1.7 }}>
              {project.approach}
            </p>
          </div>

          {/* Pull-quote in Playfair 28px italic with terracotta left rule */}
          <blockquote
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(22px, 3.5vw, 28px)',
              lineHeight: 1.35,
              color: 'var(--foreground)',
              borderLeft: '3px solid var(--accent)',
              paddingLeft: '1.5rem',
              marginBlock: '3.5rem',
              quotes: 'none'
            }}
          >
            "{project.pullQuote}"
          </blockquote>

          {/* Section: Decisions */}
          <div style={{ marginBottom: '3rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--accent)',
                display: 'block',
                marginBottom: '0.75rem'
              }}
            >
              03 — Decisions & Trade-offs
            </span>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', lineHeight: 1.7 }}>
              {project.decisions}
            </p>
          </div>
        </div>
      </div>

      {/* Inline 2-col image pairs breaking the column at full 1200px width */}
      {project.imagePairs && project.imagePairs.length > 0 && (
        <div className="site-container" style={{ marginBlock: '4rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}
            className="image-pair-grid"
          >
            {project.imagePairs.map((img, i) => (
              <figure key={i} style={{ margin: 0 }}>
                <div
                  style={{
                    border: '1px solid var(--border)',
                    backgroundColor: 'var(--card)',
                    overflow: 'hidden',
                    aspectRatio: '4/3'
                  }}
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>
                <figcaption
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    color: 'var(--muted-foreground)',
                    marginTop: '0.75rem',
                    lineHeight: 1.4
                  }}
                >
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}

      {/* Outcome Section & Stats Row */}
      <div className="site-container">
        <div className="reading-column">
          <div style={{ marginBottom: '3.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--accent)',
                display: 'block',
                marginBottom: '0.75rem'
              }}
            >
              04 — Outcome & Verification
            </span>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', lineHeight: 1.7 }}>
              {project.outcome}
            </p>
          </div>
        </div>

        {/* Outcome Stats Row: 3 hairline-separated figures with tabular-numeral sans 32px */}
        {project.stats && project.stats.length > 0 && (
          <div
            style={{
              borderTop: '1px solid var(--border)',
              borderBottom: '1px solid var(--border)',
              paddingBlock: '2.5rem',
              marginBlock: '3rem',
              display: 'grid',
              gridTemplateColumns: `repeat(${project.stats.length}, 1fr)`
            }}
            className="stats-row-grid"
          >
            {project.stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  paddingInline: '1.5rem',
                  borderRight: i < project.stats.length - 1 ? '1px solid var(--border)' : 'none',
                  textAlign: 'left'
                }}
                className="stat-col"
              >
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(28px, 4vw, 36px)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    fontVariantNumeric: 'tabular-nums',
                    color: 'var(--foreground)',
                    marginBottom: '0.5rem'
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Case Study Bottom Navigation Links */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '3rem',
            borderTop: '1px solid var(--border)',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}
        >
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.4px',
              textDecoration: 'none'
            }}
            className="link-underline"
          >
            <ArrowLeft size={16} />
            <span>Back to selected work</span>
          </Link>

          <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>
            <span>Discuss this project</span>
          </Link>
        </div>
      </div>

      {/* Responsive media styles */}
      <style>{`
        @media (hover: hover) {
          .hero-image-zoom:hover {
            transform: scale(1.02);
          }
        }
        @media (max-width: 767px) {
          .stats-row-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            paddingBlock: 1.5rem !important;
          }
          .stat-col {
            border-right: none !important;
            border-bottom: 1px solid var(--border) !important;
            padding-bottom: 1.5rem !important;
            padding-inline: 0 !important;
          }
          .stat-col:last-child {
            border-bottom: none !important;
            padding-bottom: 0 !important;
          }
        }
      `}</style>
    </article>
  );
}
