import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, Download, Send, CheckCircle2, ShieldCheck, Zap, TrendingUp, Layers } from 'lucide-react';
import LazyImage from './LazyImage';

export default function Hero({ onDownloadResume }) {
  return (
    <section
      id="hero"
      style={{
        paddingTop: '8rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Text & CTAs */}
          <div>
            {/* Status Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.45rem 1.1rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                marginBottom: '1.5rem'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-emerald)',
                  boxShadow: '0 0 10px var(--accent-emerald)',
                  display: 'inline-block',
                  animation: 'pulseGlow 2s infinite'
                }}
              />
              <span
                style={{
                  color: 'var(--accent-emerald)',
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em'
                }}
              >
                12+ YEARS COMMERCIAL EXPERIENCE · ACCEPTING PROJECTS
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.85rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: '1.25rem'
              }}
            >
              Web Architecture &amp; UI Design That{' '}
              <span className="text-gradient">Sells.</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '2rem',
                maxWidth: '580px'
              }}
            >
              I am <strong style={{ color: 'var(--text-main)' }}>{PERSONAL_INFO.name}</strong>, a{' '}
              {PERSONAL_INFO.title}. Over the past 12+ years, I have helped businesses build clean, test-driven web applications that load in milliseconds and maximize user conversion—because thoughtful design and engineering is what truly sells.
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2.5rem'
              }}
            >
              <a href="#projects" id="hero-btn-projects" className="btn btn-primary">
                <span>View Case Studies</span>
                <ArrowRight size={17} />
              </a>
              <a href="#contact" id="hero-btn-contact" className="btn btn-secondary">
                <Send size={16} />
                <span>Work Together</span>
              </a>
              <button
                type="button"
                id="hero-btn-resume"
                onClick={onDownloadResume}
                className="btn btn-outline"
                style={{ cursor: 'pointer' }}
              >
                <Download size={16} />
                <span>Executive CV</span>
              </button>
            </div>

            {/* Micro Tech Ticker */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                flexWrap: 'wrap'
              }}
            >
              <span
                style={{
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Specialization:
              </span>
              {['React 19', 'TypeScript', 'Vitest & RTL', 'CRO Web Design', 'Node.js', 'Web Vitals'].map((tech) => (
                <span key={tech} className="badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Senior Engineer Profile Card (Zero AI Fluff) */}
          <div style={{ position: 'relative' }}>
            {/* Glowing Backdrop */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.22) 0%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: 0
              }}
            />

            {/* Presentation Card */}
            <div
              className="glass-panel"
              style={{
                position: 'relative',
                zIndex: 1,
                padding: '2.25rem',
                overflow: 'hidden'
              }}
            >
              {/* Header Status Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '1.25rem',
                  borderBottom: '1px solid var(--border-color)',
                  marginBottom: '1.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={18} color="var(--accent-emerald)" />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: 600 }}>
                    Vitest Suite: 100% Tests Passing
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    padding: '0.2rem 0.6rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: 'var(--accent-emerald)',
                    fontWeight: 600
                  }}
                >
                  CI Verified
                </span>
              </div>

              {/* Avatar + Credentials */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.75rem' }}>
                <div
                  style={{
                    width: '88px',
                    height: '88px',
                    borderRadius: '22px',
                    overflow: 'hidden',
                    border: '2px solid var(--border-glow)',
                    boxShadow: '0 8px 24px rgba(99,102,241,0.25)',
                    flexShrink: 0
                  }}
                >
                  <LazyImage
                    src="/avatar.svg"
                    alt="Manas Maydeo Senior Web Developer"
                    aspectRatio="1/1"
                  />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.25rem' }}>{PERSONAL_INFO.name}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    {PERSONAL_INFO.title}
                  </p>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.825rem',
                      color: 'var(--accent-primary)',
                      fontWeight: 600
                    }}
                  >
                    <CheckCircle2 size={15} /> 12+ Years Commercial Track Record
                  </span>
                </div>
              </div>

              {/* Core Philosophy Box */}
              <div
                style={{
                  background: 'var(--bg-input)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)' }}>
                  <TrendingUp size={16} />
                  <span style={{ fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    The Senior Philosophy
                  </span>
                </div>
                <blockquote
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-main)',
                    lineHeight: 1.6,
                    fontStyle: 'italic',
                    margin: 0
                  }}
                >
                  "Good design is obvious. Great design sells. Fast page load, zero layout shift, and rigorous automated tests are direct drivers of customer trust and revenue."
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Counter Strip */}
        <div
          className="glass-panel"
          style={{
            marginTop: '4rem',
            padding: '2rem 1.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.5rem',
            textAlign: 'center'
          }}
        >
          {PERSONAL_INFO.metrics.map((metric, idx) => (
            <div key={idx} style={{ padding: '0.5rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  background: 'var(--gradient-brand)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '0.25rem'
                }}
              >
                {metric.value}
              </div>
              <div
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  fontWeight: 500
                }}
              >
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
