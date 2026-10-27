import React, { useState, useMemo } from 'react';
import { SKILLS, SKILL_CATEGORIES } from '../data/skills';
import {
  Code2,
  CheckCircle2,
  ShieldCheck,
  Zap,
  TrendingUp,
  Server,
  Layers,
  FileCode,
  Terminal,
  Database,
  Network,
  Activity,
  Cpu,
  Palette,
  Globe,
  Atom
} from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const getSkillIcon = (iconName, category) => {
    switch (iconName) {
      case 'CheckCircle2':
      case 'CheckCircle':
        return <CheckCircle2 size={18} color="var(--accent-emerald)" />;
      case 'ShieldCheck':
        return <ShieldCheck size={18} color="var(--accent-primary)" />;
      case 'Activity':
        return <Activity size={18} color="var(--accent-cyan)" />;
      case 'Network':
        return <Network size={18} color="var(--accent-secondary)" />;
      case 'Cpu':
        return <Cpu size={18} color="var(--accent-amber)" />;
      case 'Atom':
        return <Atom size={18} color="var(--accent-cyan)" />;
      case 'FileCode':
        return <FileCode size={18} color="var(--accent-primary)" />;
      case 'Zap':
        return <Zap size={18} color="var(--accent-amber)" />;
      case 'Layers':
        return <Layers size={18} color="var(--accent-secondary)" />;
      case 'TrendingUp':
        return <TrendingUp size={18} color="var(--accent-emerald)" />;
      case 'Palette':
        return <Palette size={18} color="var(--accent-rose)" />;
      case 'Globe':
        return <Globe size={18} color="var(--accent-cyan)" />;
      case 'Server':
        return <Server size={18} color="var(--accent-primary)" />;
      case 'Database':
        return <Database size={18} color="var(--accent-emerald)" />;
      case 'Terminal':
        return <Terminal size={18} color="var(--accent-cyan)" />;
      default:
        return <Code2 size={18} color="var(--accent-primary)" />;
    }
  };

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'all') return SKILLS;
    return SKILLS.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="skills" className="section" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Code2 size={14} />
            <span>Technical Competency Matrix</span>
          </div>
          <h2 className="section-title">
            Skills &amp; <span className="text-gradient">Engineering Mastery</span>
          </h2>
          <p className="section-desc">
            Twelve years of battle-tested engineering proficiency with quantified benchmarks across frontend architecture, automated test suites, and backend infrastructure.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '3rem',
            overflowX: 'auto',
            paddingBottom: '0.5rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.5rem',
              background: 'var(--bg-card)',
              padding: '0.4rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)',
              maxWidth: '100%'
            }}
          >
            {SKILL_CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  id={`skill-filter-${cat.id}`}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '0.5rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    transition: 'all var(--transition-fast)',
                    background: isSelected ? 'var(--gradient-brand)' : 'transparent',
                    color: isSelected ? '#ffffff' : 'var(--text-secondary)'
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid: Single-column on mobile (<768px), 2-col on tablet/desktop */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="glass-panel"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                borderLeft: skill.highlight ? '3px solid var(--accent-primary)' : '1px solid var(--border-color)'
              }}
            >
              {/* Top Row: Icon + Skill Name + Level Badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--border-color)',
                      flexShrink: 0
                    }}
                  >
                    {getSkillIcon(skill.icon, skill.category)}
                  </div>
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: '0.96rem',
                      color: 'var(--text-main)'
                    }}
                  >
                    {skill.name}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {skill.highlight && (
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        padding: '0.15rem 0.5rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(99, 102, 241, 0.15)',
                        color: 'var(--accent-primary)',
                        border: '1px solid rgba(99, 102, 241, 0.3)'
                      }}
                    >
                      Core
                    </span>
                  )}
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: 'var(--accent-cyan)'
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Proficiency Progress Bar Indicator */}
              <div
                style={{
                  width: '100%',
                  height: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  borderRadius: 'var(--radius-full)',
                  overflow: 'hidden',
                  position: 'relative'
                }}
                role="progressbar"
                aria-valuenow={skill.level}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label={`${skill.name} proficiency indicator`}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${skill.level}%`,
                    borderRadius: 'var(--radius-full)',
                    background:
                      skill.level >= 95
                        ? 'var(--gradient-brand)'
                        : 'linear-gradient(90deg, #6366f1 0%, #06b6d4 100%)',
                    transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
