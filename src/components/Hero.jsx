import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, Download, Send, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
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
            {PERSONAL_INFO.availableForHire && (
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.4rem 1rem',
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
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    letterSpacing: '0.02em'
                  }}
                >
                  AVAILABLE FOR NEW OPPORTUNITIES
                </span>
              </div>
            )}

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: '1.25rem'
              }}
            >
              Building Resilient Systems &amp;{' '}
              <span className="text-gradient">Scalable Web Apps</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '2rem',
                maxWidth: '560px'
              }}
            >
              Hello, I'm <strong style={{ color: 'var(--text-main)' }}>{PERSONAL_INFO.name}</strong>, a{' '}
              {PERSONAL_INFO.title}. I specialize in architecting distributed cloud backends and high-performance React frontends that delight users and scale seamlessly.
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
                <span>View Projects</span>
                <ArrowRight size={17} />
              </a>
              <a href="#contact" id="hero-btn-contact" className="btn btn-secondary">
                <Send size={16} />
                <span>Contact Me</span>
              </a>
              <button
                type="button"
                id="hero-btn-resume"
                onClick={onDownloadResume}
                className="btn btn-outline"
                style={{ cursor: 'pointer' }}
              >
                <Download size={16} />
                <span>Resume / CV</span>
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
                Core Tech:
              </span>
              {['React 19', 'TypeScript', 'Node.js', 'Go', 'AWS / Cloud', 'Docker'].map((tech) => (
                <span key={tech} className="badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
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
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: 0
              }}
            />

            {/* Glassmorphic Presentation Card */}
            <div
              className="glass-panel"
              style={{
                position: 'relative',
                zIndex: 1,
                padding: '2rem',
                overflow: 'hidden'
              }}
            >
              {/* Card Header Bar */}
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
                  <Terminal size={18} color="var(--accent-primary)" />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    developer@manas-linux ~
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                </div>
              </div>

              {/* Avatar + Highlights */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.75rem' }}>
                <div
                  style={{
                    width: '90px',
                    height: '90px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '2px solid var(--border-glow)',
                    boxShadow: '0 8px 24px rgba(99,102,241,0.3)',
                    flexShrink: 0
                  }}
                >
                  <LazyImage
                    src="/avatar.svg"
                    alt="Manas Maydeo Developer Avatar"
                    aspectRatio="1/1"
                  />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{PERSONAL_INFO.name}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    {PERSONAL_INFO.location}
                  </p>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.8rem',
                      color: 'var(--accent-cyan)',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <Sparkles size={14} /> Full Stack Developer
                  </span>
                </div>
              </div>

              {/* Code Snippet Box */}
              <div
                style={{
                  background: 'var(--bg-input)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5
                }}
              >
                <span style={{ color: 'var(--accent-secondary)' }}>const</span> developer = &#123;
                <br />
                &nbsp;&nbsp;role: <span style={{ color: 'var(--accent-cyan)' }}>'Full-Stack Developer'</span>,
                <br />
                &nbsp;&nbsp;stack: [<span style={{ color: 'var(--accent-emerald)' }}>'React'</span>, <span style={{ color: 'var(--accent-emerald)' }}>'Node.js'</span>, <span style={{ color: 'var(--accent-emerald)' }}>'MongoDB'</span>],
                <br />
                &nbsp;&nbsp;focus: <span style={{ color: 'var(--accent-amber)' }}>'Building practical projects'</span>
                <br />
                &#125;;
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
