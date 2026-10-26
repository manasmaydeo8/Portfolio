import React from 'react';
import { ShieldCheck, Zap, TrendingUp, Code2, Globe2, CheckCircle2, Award, Terminal } from 'lucide-react';

export default function About() {
  const philosophies = [
    {
      icon: <TrendingUp size={24} color="var(--accent-primary)" />,
      title: "Design That Sells & Converts",
      description: "Visual hierarchy, cognitive pacing, and responsive clarity are not decorative luxuries—they are core business drivers. An intuitive, frictionless user journey is what reliably sells products and retains users."
    },
    {
      icon: <ShieldCheck size={24} color="var(--accent-emerald)" />,
      title: "Test Engineering & Zero Regressions",
      description: "Automated testing with Vitest, Jest, and React Testing Library is a core discipline. Every critical user flow is protected by integration tests, ensuring production stability on every deployment."
    },
    {
      icon: <Zap size={24} color="var(--accent-cyan)" />,
      title: "Core Web Vitals & Sub-Second Speed",
      description: "Slow websites lose sales. Through component-level code splitting, lazy loading, and lightweight CSS systems, I consistently achieve 98+ Lighthouse scores and sub-second Largest Contentful Paint."
    }
  ];

  const seniorHighlights = [
    { label: "Commercial Tenure", value: "12+ Years Industry", icon: <Award size={16} /> },
    { label: "Development Style", value: "Test-Driven (TDD)", icon: <ShieldCheck size={16} /> },
    { label: "Environment", value: "Linux CLI & Modern Git", icon: <Terminal size={16} /> },
    { label: "Core Web Standards", value: "WCAG 2.1 AA Compliant", icon: <Globe2 size={16} /> }
  ];

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
            With 12+ years building commercial digital products, I focus on the metrics that matter: user conversion, software reliability, and test coverage.
          </p>
        </div>

        {/* Top Story Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
            marginBottom: '4rem'
          }}
        >
          {/* Biography Text */}
          <div className="glass-panel" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>
              Building Software That Converts &amp; Scales
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.7 }}>
              Over the past twelve years, I have architected web applications ranging from high-traffic e-commerce storefronts to multi-tenant booking platforms and interactive learning suites.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.7 }}>
              My engineering approach is grounded in the understanding that clean architecture and thoughtful web design directly drive commercial outcomes. When an interface is responsive, accessible, and blindingly fast, it earns customer trust and delivers measurable ROI.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              I treat testing not as an afterthought, but as an indispensable skill: unit tests with Vitest, behavior validation with React Testing Library, and end-to-end regression prevention ensure peace of mind with zero downtime.
            </p>
          </div>

          {/* Quick Facts Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
            {seniorHighlights.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem'
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
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    {item.label}
                  </span>
                </div>
                <div style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--text-main)' }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Philosophy Cards */}
        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.5rem' }}>
            Senior Engineering Tenets
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {philosophies.map((phil, idx) => (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {phil.icon}
                </div>
                <h4 style={{ fontSize: '1.2rem' }}>{phil.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                  {phil.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
