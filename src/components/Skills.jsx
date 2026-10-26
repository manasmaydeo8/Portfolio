import React, { useState, useMemo } from 'react';
import { SKILLS, SKILL_CATEGORIES } from '../data/portfolioData';
import { Layers, Search, CheckCircle, Code, Server, Cloud, Database } from 'lucide-react';

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
      case 'backend':
        return <Server size={16} />;
      case 'cloud':
        return <Cloud size={16} />;
      case 'database':
        return <Database size={16} />;
      default:
        return <Layers size={16} />;
    }
  };

  return (
    <section id="skills" className="section" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills &amp; <span className="text-gradient">Technologies</span>
          </h2>
          <p className="section-desc">
            A comprehensive overview of tools, frameworks, and cloud services I utilize to engineer modern software solutions.
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
              placeholder="Search skill (e.g. React)..."
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
                    background:
                      skill.category === 'cloud'
                        ? 'linear-gradient(90deg, #06b6d4, #3b82f6)'
                        : skill.category === 'database'
                        ? 'linear-gradient(90deg, #10b981, #06b6d4)'
                        : 'var(--gradient-brand)',
                    transition: 'width 0.8s ease-out'
                  }}
                />
              </div>

              {/* Highlight Tag */}
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
                    <CheckCircle size={12} /> Core Stack
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
