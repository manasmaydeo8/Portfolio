import React from 'react';
import { PROFILE } from '../data/profile';
import { Award, ShieldCheck, Zap, TrendingUp, Globe2, Terminal, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../components/Icons';

export default function About() {
  const seniorHighlights = [
    { label: "Commercial Tenure", value: PROFILE.experienceYears + " Years", icon: <Award size={18} /> },
    { label: "Development Style", value: "Test-Driven (TDD)", icon: <ShieldCheck size={18} /> },
    { label: "Environment", value: "Linux CLI & Modern Git", icon: <Terminal size={18} /> },
    { label: "Web Standards", value: "WCAG 2.1 AA Compliant", icon: <Globe2 size={18} /> }
  ];

  const iconMap = {
    0: <TrendingUp size={24} color="var(--accent-primary)" />,
    1: <ShieldCheck size={24} color="var(--accent-emerald)" />,
    2: <Zap size={24} color="var(--accent-cyan)" />
  };

  return (
    <section id="about" className="section" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Senior Web Developer Profile</span>
          </div>
          <h2 className="section-title">
            Engineering Discipline &amp; <span className="text-gradient">Web Standards</span>
          </h2>
          <p className="section-desc">
            With {PROFILE.experienceYears} years building commercial digital products, I focus on the metrics that matter: user conversion, software reliability, and test coverage.
          </p>
        </div>

        {/* About Main Grid (Bio + Profile Photo + Quick Facts) */}
        <div className="about-grid" style={{ marginBottom: '3.5rem' }}>
          {/* Biography Text & Socials */}
          <div className="glass-panel" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.75rem', flexWrap: 'wrap' }}>
              {/* Profile Image Avatar */}
              <div
                style={{
                  position: 'relative',
                  width: '84px',
                  height: '84px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: 'var(--gradient-brand)',
                  padding: '3px',
                  flexShrink: 0,
                  boxShadow: 'var(--shadow-glow)'
                }}
              >
                <img
                  src={PROFILE.avatar}
                  alt={PROFILE.name}
                  width="84"
                  height="84"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '21px',
                    backgroundColor: 'var(--bg-secondary)'
                  }}
                  onError={(e) => {
                    e.currentTarget.src = 'https://ui-avatars.com/api/?name=Manas+Maydeo&background=6366f1&color=fff&size=128';
                  }}
                />
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>
                  {PROFILE.name}
                </h3>
                <p style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.95rem' }}>
                  {PROFILE.title}
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  {PROFILE.location}
                </p>
              </div>
            </div>

            {/* Bio Paragraphs from central profile.js */}
            {PROFILE.bio.map((paragraph, index) => (
              <p
                key={index}
                style={{
                  color: 'var(--text-secondary)',
                  marginBottom: index < PROFILE.bio.length - 1 ? '1rem' : '1.75rem',
                  lineHeight: 1.7,
                  fontSize: '0.98rem'
                }}
              >
                {paragraph}
              </p>
            ))}

            {/* Social Links Row */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                Connect:
              </span>
              <a
                href={PROFILE.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
                <ExternalLink size={12} />
              </a>
              <a
                href={PROFILE.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
                <ExternalLink size={12} />
              </a>
              <a
                href={PROFILE.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                aria-label="Twitter Profile"
              >
                <TwitterIcon size={16} />
                <span>Twitter</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Quick Facts / Senior Credentials Matrix */}
          <div className="about-highlights-grid">
            {seniorHighlights.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  justifyContent: 'center'
                }}
              >
                <div
                  style={{
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  {item.icon}
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {item.label}
                  </span>
                </div>
                <div style={{ fontWeight: 700, fontSize: '1.15rem', color: 'var(--text-main)' }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Philosophies Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '1.5rem'
          }}
        >
          {PROFILE.philosophies.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                borderLeft: '4px solid var(--accent-primary)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                {iconMap[idx] || <Zap size={24} color="var(--accent-primary)" />}
                <h4 style={{ fontSize: '1.15rem' }}>{item.title}</h4>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.65 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
