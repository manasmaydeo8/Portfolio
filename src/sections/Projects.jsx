import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../data/projects';
import { FolderGit2, ExternalLink, Info, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import LazyImage from '../components/LazyImage';
import ProjectModal from '../components/ProjectModal';

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Extract all unique tags across projects
  const allTags = useMemo(() => {
    const tagsSet = new Set(['All']);
    PROJECTS.forEach((proj) => {
      proj.tags.forEach((tag) => tagsSet.add(tag));
    });
    return Array.from(tagsSet);
  }, []);

  // Filter projects by selected tag
  const filteredProjects = useMemo(() => {
    if (selectedTag === 'All') return PROJECTS;
    return PROJECTS.filter((proj) => proj.tags.includes(selectedTag));
  }, [selectedTag]);

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

        {/* Filter-by-Tag Navigation */}
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
            {allTags.map((tag) => {
              const isSelected = selectedTag === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  id={`tag-filter-${tag.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  onClick={() => setSelectedTag(tag)}
                  style={{
                    padding: '0.45rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    transition: 'all var(--transition-fast)',
                    background: isSelected ? 'var(--gradient-brand)' : 'transparent',
                    color: isSelected ? '#ffffff' : 'var(--text-secondary)'
                  }}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid: Mobile single-column, tablet 2-col, desktop 3-col */}
        <div className="projects-grid">
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
              {/* Project Image Preview */}
              <div
                style={{
                  position: 'relative',
                  borderBottom: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-secondary)',
                  cursor: 'pointer'
                }}
                onClick={() => setActiveModalProject(project)}
              >
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  aspectRatio="16/10"
                />
                {project.featured && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '0.85rem',
                      left: '0.85rem',
                      background: 'var(--gradient-brand)',
                      color: '#ffffff',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.2rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  >
                    Featured
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      marginBottom: '0.75rem',
                      lineHeight: 1.35
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem'
                    }}
                  >
                    {project.summary}
                  </p>

                  {/* Outcome Metrics */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div style={{ marginBottom: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {project.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            fontSize: '0.82rem',
                            color: 'var(--accent-emerald)',
                            fontWeight: 500
                          }}
                        >
                          <CheckCircle2 size={13} />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.4rem',
                      marginBottom: '1.5rem'
                    }}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="badge"
                        style={{
                          cursor: 'pointer',
                          backgroundColor: selectedTag === tag ? 'rgba(99, 102, 241, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                          color: selectedTag === tag ? '#ffffff' : 'var(--text-secondary)'
                        }}
                        onClick={() => setSelectedTag(tag)}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Links (Live Demo, GitHub Repo, Details Modal) */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--border-color)',
                    marginTop: 'auto'
                  }}
                >
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <a
                      href={project.liveUrl || project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      aria-label={`Live Demo of ${project.title}`}
                      id={`project-live-${project.id}`}
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={13} />
                    </a>
                    <a
                      href={project.repoUrl || project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      aria-label={`GitHub Repository for ${project.title}`}
                      id={`project-repo-${project.id}`}
                    >
                      <GithubIcon size={14} />
                      <span>Code</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    id={`project-details-${project.id}`}
                    aria-label={`View deep-dive details for ${project.title}`}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--accent-primary)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      fontSize: '0.85rem',
                      fontWeight: 600
                    }}
                  >
                    <Info size={15} />
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Deep Dive */}
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
