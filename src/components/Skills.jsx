import React, { useState, useMemo } from 'react';
import { SKILLS, SKILL_CATEGORIES } from '../data/portfolioData';
import { Layers, Search, CheckCircle, Code, Server, ShieldCheck, TrendingUp, Palette } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = useMemo(() => {
    return SKILLS.filter((skill) => {
      const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const getCategoryIcon = (cat) => {
    switch (cat) {
      case 'frontend':
        return <Code size={16} />;
      case 'testing':
        return <ShieldCheck size={16} />;
      case 'backend':
        return <Server size={16} />;
      case 'design':
        return <TrendingUp size={16} />;
      default:
        return <Layers size={16} />;
    }
  };

  const getTrackGradient = (category) => {
    switch (category) {
      case 'testing':
        return 'linear-gradient(90deg, #10b981, #06b6d4)';
      case 'design':
        return 'linear-gradient(90deg, #f59e0b, #f43f5e)';
      case 'backend':
        return 'linear-gradient(90deg, #6366f1, #3b82f6)';
      default:
        return 'var(--gradient-brand)';
    }
  };

  return (
    <section id="skills" className="section" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Senior Technical Competencies</span>
          </div>
          <h2 className="section-title">
            Test Engineering &amp; <span className="text-gradient">Web Craftsmanship</span>
          </h2>
          <p className="section-desc">
            Twelve years of battle-tested expertise: clean component architecture, strict type safety, and test suites that eliminate bugs before they ever reach production.
          </p>
        </div>

        {/* Controls: Category Tabs & Search Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '2.5rem'
          }}
        >
          {/* Category Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              background: 'var(--bg-card)',
              padding: '0.4rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)'
            }}
          >
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                id={`skill-cat-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: 'none',
                  outline: 'none',
                  transition: 'all var(--transition-fast)',
                  background: activeCategory === cat.id ? 'var(--gradient-brand)' : 'transparent',
                  color: activeCategory === cat.id ? '#ffffff' : 'var(--text-secondary)'
                }}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '280px'
            }}
          >
            <Search
              size={16}
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)'
              }}
            />
            <input
              type="text"
              id="skill-search-input"
              placeholder="Filter by keyword (e.g. Vitest)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 1rem 0.65rem 2.25rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-input)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                fontSize: '0.9rem',
                outline: 'none',
                fontFamily: 'inherit'
              }}
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-panel"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--text-main)' }}>
                  {skill.name}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--accent-primary)'
                  }}
                >
                  {skill.level}%
                </span>
              </div>

              {/* Progress Track */}
              <div
                style={{
                  width: '100%',
                  height: '8px',
                  borderRadius: '4px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    width: `${skill.level}%`,
                    height: '100%',
                    borderRadius: '4px',
                    background: getTrackGradient(skill.category),
                    transition: 'width 0.8s ease-out'
                  }}
                />
              </div>

              {/* Category & Highlight Tag */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.2rem' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  {skill.category}
                </span>
                {skill.highlight && (
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      fontSize: '0.75rem',
                      color: 'var(--accent-emerald)',
                      fontWeight: 500
                    }}
                  >
                    <CheckCircle size={12} /> Core Competency
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '3rem',
              color: 'var(--text-secondary)'
            }}
          >
            No skills found matching "{searchQuery}".
          </div>
        )}
      </div>
    </section>
  );
}
