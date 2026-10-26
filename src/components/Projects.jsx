import React, { useState, useMemo } from 'react';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/portfolioData';
import { FolderGit2, ExternalLink, Info, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './Icons';
import LazyImage from './LazyImage';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return PROJECTS;
    return PROJECTS.filter((proj) => proj.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="projects" className="section" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Commercial Portfolio</span>
          </div>
          <h2 className="section-title">
            Case Studies That <span className="text-gradient">Deliver &amp; Sell</span>
          </h2>
          <p className="section-desc">
            Production-grade web applications engineered with strict automated testing, sub-second response times, and conversion-optimized user journeys.
          </p>
        </div>

        {/* Filter Navigation */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '3rem'
          }}
        >
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
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                id={`project-filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: 'none',
                  outline: 'none',
                  transition: 'all var(--transition-fast)',
                  background: selectedCategory === cat.id ? 'var(--gradient-brand)' : 'transparent',
                  color: selectedCategory === cat.id ? '#ffffff' : 'var(--text-secondary)'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="glass-panel"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: 'var(--radius-lg)'
              }}
            >
              {/* Image Preview Container */}
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onClick={() => setActiveModalProject(project)}
              >
                <LazyImage
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  aspectRatio="16/10"
                />
                {project.featured && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      zIndex: 2,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      background: 'rgba(15, 23, 42, 0.88)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid var(--border-glow)',
                      color: 'var(--accent-primary)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.75rem',
                      fontWeight: 600
                    }}
                  >
                    <TrendingUp size={12} />
                    High Impact
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  gap: '1rem'
                }}
              >
                {/* Category & Title */}
                <div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent-cyan)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {project.category}
                  </span>
                  <h3
                    style={{
                      fontSize: '1.3rem',
                      marginTop: '0.35rem',
                      lineHeight: 1.3
                    }}
                  >
                    {project.title}
                  </h3>
                </div>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.925rem',
                    lineHeight: 1.6,
                    flexGrow: 1
                  }}
                >
                  {project.summary}
                </p>

                {/* Primary Outcome Metric */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.55rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    fontSize: '0.825rem',
                    color: 'var(--accent-emerald)',
                    fontWeight: 600
                  }}
                >
                  <ShieldCheck size={15} />
                  <span>{project.metrics[0]}</span>
                </div>

                {/* Tech Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem'
                  }}
                >
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="badge" style={{ fontSize: '0.75rem' }}>
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="badge" style={{ fontSize: '0.75rem' }}>
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Links */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-color)',
                    marginTop: '0.5rem'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="btn btn-outline btn-sm"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                  >
                    <Info size={14} />
                    <span>Case Study</span>
                  </button>

                  <div style={{ display: 'flex', gap: '0.6rem' }}>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      title="Repository / Live Demo"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink size={15} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      title="GitHub Source"
                      aria-label={`${project.title} source code`}
                    >
                      <GithubIcon size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Architecture Modal */}
        {activeModalProject && (
          <ProjectModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        )}
      </div>
    </section>
  );
}
