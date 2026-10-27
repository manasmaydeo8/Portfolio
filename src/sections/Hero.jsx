import React from 'react';
import { PROFILE } from '../data/profile';
import { ArrowRight, Download, Send, CheckCircle2, ShieldCheck, Zap, TrendingUp } from 'lucide-react';
import LazyImage from '../components/LazyImage';

export default function Hero({ onDownloadResume }) {
  return (
    <section
      id="hero"
      style={{
        paddingTop: '6rem',
        paddingBottom: '4.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Headline, Bio & Action Buttons */}
          <div>
            {/* Seniority Status Badge */}
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
                  display: 'inline-block'
                }}
              />
              <span
                style={{
                  color: 'var(--accent-emerald)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em'
                }}
              >
                {PROFILE.experienceYears} YEARS SENIOR TENURE · ACCEPTING CLIENTS &amp; ROLES
              </span>
            </div>

            {/* Main Title */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
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
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '2rem',
                maxWidth: '580px'
              }}
            >
              I am <strong style={{ color: 'var(--text-main)' }}>{PROFILE.name}</strong>, a{' '}
              {PROFILE.title}. Over the past {PROFILE.experienceYears} years, I have architected high-performance web systems with strict test-driven engineering, sub-second paints, and conversion-optimized UX.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2.5rem'
              }}
            >
              <a href="#projects" id="hero-btn-projects" className="btn btn-primary">
                <span>Explore Case Studies</span>
                <ArrowRight size={16} />
              </a>

              <a href="#contact" id="hero-btn-contact" className="btn btn-secondary">
                <Send size={16} />
                <span>Get In Touch</span>
              </a>

              {onDownloadResume && (
                <button
                  type="button"
                  onClick={onDownloadResume}
                  id="hero-btn-resume"
                  className="btn btn-outline"
                >
                  <Download size={16} />
                  <span>Download CV</span>
                </button>
              )}
            </div>

            {/* Test Status Indicator */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                maxWidth: '480px'
              }}
            >
              <ShieldCheck size={20} color="var(--accent-emerald)" />
              <div style={{ fontSize: '0.825rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>
                  Vitest Suite Verified:
                </span>{' '}
                <span style={{ color: 'var(--text-secondary)' }}>
                  Component contracts, responsive boundaries, and data integrity passed.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div style={{ position: 'relative' }}>
            <div
              className="glass-panel"
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-xl)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Graphic Banner */}
              <div
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  marginBottom: '1.75rem',
                  border: '1px solid var(--border-color)'
                }}
              >
                <LazyImage
                  src="/project-commerce.svg"
                  alt="Senior Web Developer Architecture Blueprint"
                  aspectRatio="16/10"
                />
              </div>

              {/* Metrics Grid Strip */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1rem'
                }}
              >
                {PROFILE.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    <div
                      style={{
                        fontSize: '1.6rem',
                        fontWeight: 800,
                        fontFamily: 'var(--font-display)',
                        color: 'var(--accent-primary)',
                        lineHeight: 1
                      }}
                    >
                      {metric.value}
                    </div>
                    <div
                      style={{
                        fontSize: '0.8rem',
                        color: 'var(--text-secondary)',
                        marginTop: '0.35rem'
                      }}
                    >
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
