import React from 'react';
import { Cpu, ShieldCheck, Zap, Sparkles, Code2, Globe2, Coffee, GitFork } from 'lucide-react';

export default function About() {
  const philosophies = [
    {
      icon: <Zap size={24} color="var(--accent-primary)" />,
      title: "Micro-Performance Mindset",
      description: "Sub-second initial paints, lazy chunked loading, and 60 FPS interactions. Performance is not a patch—it's foundational."
    },
    {
      icon: <Cpu size={24} color="var(--accent-cyan)" />,
      title: "Resilient Distributed Systems",
      description: "Architecting decoupled, event-driven services on Kubernetes and cloud primitives with zero single points of failure."
    },
    {
      icon: <ShieldCheck size={24} color="var(--accent-emerald)" />,
      title: "Security & Clean Code",
      description: "Zero-knowledge encryption, strict TypeScript typing, comprehensive CI test suites, and maintainable domain boundaries."
    }
  ];

  const quickStats = [
    { label: "Based in", value: "San Francisco, CA", icon: <Globe2 size={16} /> },
    { label: "Engineering Style", value: "Full-Cycle Ownership", icon: <Code2 size={16} /> },
    { label: "Open Source", value: "Active Contributor", icon: <GitFork size={16} /> },
    { label: "Fuel of Choice", value: "Ethiopian Pour-over", icon: <Coffee size={16} /> }
  ];

  return (
    <section id="about" className="section" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Passionate About Crafting <span className="text-gradient">Impactful Software</span>
          </h2>
          <p className="section-desc">
            Bridging technical complexity with intuitive user interfaces. Here is how I think, build, and deliver engineering value.
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
              Turning Ambition into Scalable Reality
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.7 }}>
              I began my engineering journey building high-throughput data processing scripts in university, quickly discovering the thrill of connecting rock-solid backend infrastructure with sleek, responsive web frontends.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.7 }}>
              Over the last six years, I have led technical teams, architected event-driven microservices serving millions of requests daily, and crafted frontend design systems that unite product teams.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              When I'm not profiling React bundle sizes or fine-tuning Kubernetes ingress routing, you will find me mentoring aspiring developers or experimenting with WebGL shaders and edge runtimes.
            </p>
          </div>

          {/* Quick Facts Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
            {quickStats.map((item, idx) => (
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
            Core Engineering Principles
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
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
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
