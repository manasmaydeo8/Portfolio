import React, { useState, useEffect } from 'react';
import SectionHeader from '../components/site/SectionHeader';
import { useSEO } from '../hooks/useSEO';
import {
  FALLBACK_PROFILE,
  FALLBACK_EXPERIENCE,
  FALLBACK_TESTIMONIALS
} from '../data/fallbackData';

export default function AboutPage() {
  const [profile, setProfile] = useState(FALLBACK_PROFILE);
  const [experience, setExperience] = useState(FALLBACK_EXPERIENCE);
  const [testimonials, setTestimonials] = useState(FALLBACK_TESTIMONIALS);
  const [loading, setLoading] = useState(true);

  useSEO({
    title: 'About, Experience & Principles',
    description: 'Nine years bridging design systems, information architecture, and React code in India. Background, capabilities, and references.',
    canonical: 'https://manasmaydeo.design/about',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      mainEntity: {
        '@type': 'Person',
        name: 'Manas Maydeo',
        jobTitle: 'Product Designer & Frontend Engineer',
        worksFor: {
          '@type': 'Organization',
          name: 'Kinetic Labs'
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'India',
          addressCountry: 'India'
        }
      }
    }
  });

  useEffect(() => {
    let isMounted = true;

    Promise.allSettled([
      fetch('/api/profile').then((r) => (r.ok ? r.json() : null)),
      fetch('/api/experience').then((r) => (r.ok ? r.json() : null)),
      fetch('/api/testimonials').then((r) => (r.ok ? r.json() : null))
    ]).then(([profileRes, expRes, testRes]) => {
      if (!isMounted) return;
      if (profileRes.status === 'fulfilled' && profileRes.value) setProfile(profileRes.value);
      if (expRes.status === 'fulfilled' && expRes.value) setExperience(expRes.value);
      if (testRes.status === 'fulfilled' && testRes.value) setTestimonials(testRes.value);
      setLoading(false);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div style={{ paddingBottom: '7rem' }}>
      {/* Section 02 — About */}
      <section style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)' }} aria-labelledby="section-02-title">
        <div className="site-container">
          <SectionHeader
            number="02"
            label="ABOUT & PRINCIPLES"
            headline="Bridging the distance between design intent and shipped runtime"
          />

          {/* Asymmetric 7/5 split */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '2.5rem',
              alignItems: 'start',
              marginBottom: '4.5rem'
            }}
            className="about-split-grid"
          >
            {/* Left 7 Columns: Bio Paragraphs */}
            <div style={{ gridColumn: 'span 7' }} className="about-bio-col">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {profile.bio && profile.bio.map((paragraph, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '18px',
                      lineHeight: 1.75,
                      color: 'var(--foreground)'
                    }}
                  >
                    {paragraph}
                  </p>
                ))}

                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '18px',
                    lineHeight: 1.75,
                    color: 'var(--foreground)'
                  }}
                >
                  Results-driven Computer Science graduate from Mumbai University with expertise in Full Stack Development, React.js, Python, Node.js, and modern databases. Passionate about building responsive applications and clean code that solves real-world challenges.
                </p>

                <div
                  style={{
                    padding: '1.5rem',
                    borderLeft: '2px solid var(--accent)',
                    backgroundColor: 'var(--card)',
                    marginTop: '1rem'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '12px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'var(--accent)',
                      display: 'block',
                      marginBottom: '0.5rem'
                    }}
                  >
                    Availability Notice
                  </span>
                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '16px',
                      lineHeight: 1.6,
                      color: 'var(--foreground)'
                    }}
                  >
                    {profile.availability}
                  </p>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Portrait Image (4:5, 1px border) with Sans Caption */}
            <div style={{ gridColumn: 'span 5' }} className="about-portrait-col">
              <figure style={{ margin: 0 }}>
                <div
                  style={{
                    aspectRatio: '4/5',
                    border: '1px solid var(--border)',
                    backgroundColor: 'var(--card)',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src="/portrait.jpg"
                    alt="Manas Maydeo portrait photograph"
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
                  Manas Maydeo. Photograph © 2024.
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Capabilities & Skills (Hairline list, no progress bars) */}
          <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--accent)',
                display: 'block',
                marginBottom: '1.5rem'
              }}
            >
              Capabilities & Methodologies
            </span>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2.5rem'
              }}
              className="skills-grid"
            >
              {profile.skills &&
                Object.entries(profile.skills).map(([groupTitle, skillItems]) => (
                  <div key={groupTitle}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '14px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: 'var(--foreground)',
                        paddingBottom: '0.75rem',
                        borderBottom: '1px solid var(--border)',
                        marginBottom: '1rem'
                      }}
                    >
                      {groupTitle}
                    </h3>

                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {skillItems.map((item, idx) => (
                        <li
                          key={idx}
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '15px',
                            color: 'var(--foreground)',
                            paddingBlock: '0.5rem',
                            borderBottom: idx < skillItems.length - 1 ? '1px solid var(--border)' : 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                          }}
                        >
                          <span>{item}</span>
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '12px',
                              color: 'var(--muted-foreground)'
                            }}
                          >
                            ✓
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 03 — Experience */}
      <section
        id="experience"
        style={{ paddingTop: 'clamp(4rem, 8vw, 6.5rem)' }}
        aria-labelledby="section-03-title"
      >
        <div className="site-container">
          <SectionHeader
            number="03"
            label="EXPERIENCE & TRACK RECORD"
            headline="Nine years building production software and leading frontend systems"
          />

          {/* Vertical timeline rows split by hairlines */}
          <div>
            {experience.map((item) => (
              <div
                key={item.id}
                style={{
                  paddingBlock: '2rem',
                  borderBottom: '1px solid var(--border)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(12, 1fr)',
                  gap: '1.5rem',
                  alignItems: 'baseline'
                }}
                className="exp-row-grid"
              >
                {/* Role in Playfair 24px */}
                <div style={{ gridColumn: 'span 5' }} className="exp-role-col">
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '24px',
                      fontWeight: 600,
                      lineHeight: 1.25,
                      color: 'var(--foreground)'
                    }}
                  >
                    {item.role}
                  </h3>
                </div>

                {/* Company & Dates in Sans 14px */}
                <div style={{ gridColumn: 'span 3' }} className="exp-meta-col">
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'var(--foreground)'
                    }}
                  >
                    {item.company}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      color: 'var(--accent)',
                      marginTop: '0.25rem'
                    }}
                  >
                    {item.period}
                  </div>
                </div>

                {/* Scope: One serif line of scope */}
                <div style={{ gridColumn: 'span 4' }} className="exp-scope-col">
                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '16px',
                      lineHeight: 1.6,
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    {item.scope}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 04 — Testimonials */}
      <section
        style={{ paddingTop: 'clamp(4rem, 8vw, 6.5rem)' }}
        aria-labelledby="section-04-title"
      >
        <div className="site-container">
          <SectionHeader
            number="04"
            label="TESTIMONIALS & PEER REVIEWS"
            headline="Evaluations from design leaders, architects, and engineering directors"
          />

          {/* Single-column serif 22px quotes with sans attribution, separated by hairlines */}
          <div>
            {testimonials.map((item) => (
              <div
                key={item.id}
                style={{
                  paddingBlock: '2.75rem',
                  borderBottom: '1px solid var(--border)'
                }}
              >
                <blockquote
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(19px, 2.6vw, 22px)',
                    lineHeight: 1.6,
                    color: 'var(--foreground)',
                    margin: 0,
                    marginBottom: '1.25rem',
                    maxWidth: '920px'
                  }}
                >
                  "{item.quote}"
                </blockquote>

                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  <span style={{ fontWeight: 700, color: 'var(--foreground)' }}>
                    {item.author}
                  </span>
                  <span style={{ marginInline: '0.5rem', opacity: 0.5 }}>·</span>
                  <span>{item.title}</span>
                  <span style={{ marginInline: '0.5rem', opacity: 0.5 }}>·</span>
                  <span style={{ color: 'var(--accent)' }}>{item.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media query styling */}
      <style>{`
        @media (max-width: 767px) {
          .about-split-grid {
            display: flex !important;
            flex-direction: column !important;
          }
          .about-portrait-col {
            order: -1 !important;
            width: 100% !important;
            margin-bottom: 1.5rem !important;
          }
          .exp-row-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 0.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}
