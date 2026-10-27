import React, { useState } from 'react';
import { RESUME_EXPERIENCE, EDUCATION_CERTIFICATIONS } from '../data/resume';
import { PROFILE } from '../data/profile';
import { Briefcase, GraduationCap, Download, Calendar, MapPin, Award, CheckCircle2, FileText, ExternalLink } from 'lucide-react';

export default function Resume({ onDownloadResume }) {
  const [isViewingPDF, setIsViewingPDF] = useState(false);

  // Dynamic import() for heavy PDF viewer utility
  const handleViewPDF = async () => {
    setIsViewingPDF(true);
    try {
      const { viewResumePDF } = await import('../utils/resumeViewer');
      await viewResumePDF(PROFILE, RESUME_EXPERIENCE, EDUCATION_CERTIFICATIONS);
    } catch (err) {
      console.error('Failed to dynamically load resume viewer:', err);
      if (onDownloadResume) onDownloadResume();
    } finally {
      setIsViewingPDF(false);
    }
  };

  return (
    <section id="resume" className="section" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Career Chronology &amp; Credentials</span>
          </div>
          <h2 className="section-title">
            12+ Years of <span className="text-gradient">Senior Web Leadership</span>
          </h2>
          <p className="section-desc">
            Proven track record leading frontend architecture, establishing automated test pipelines, and delivering conversion-driven web applications for enterprise clients.
          </p>

          {/* Action CTAs: Download & Dynamic PDF Viewer */}
          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={handleViewPDF}
              disabled={isViewingPDF}
              className="btn btn-primary"
              id="resume-section-view-pdf-btn"
              style={{
                padding: '0.85rem 1.8rem',
                fontSize: '0.95rem',
                boxShadow: '0 8px 25px rgba(99, 102, 241, 0.4)'
              }}
            >
              <FileText size={18} />
              <span>{isViewingPDF ? 'Loading PDF Viewer...' : 'View Executive CV (Print/PDF)'}</span>
              <ExternalLink size={14} />
            </button>

            <button
              type="button"
              onClick={onDownloadResume}
              className="btn btn-secondary"
              id="resume-section-download-btn"
              style={{
                padding: '0.85rem 1.8rem',
                fontSize: '0.95rem'
              }}
            >
              <Download size={18} />
              <span>Download Text CV</span>
            </button>
          </div>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 4.5rem auto' }}>
          <h3
            style={{
              fontSize: '1.4rem',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
          >
            <Briefcase size={22} color="var(--accent-primary)" />
            <span>Commercial Experience</span>
          </h3>

          <div
            style={{
              position: 'relative',
              borderLeft: '2px solid rgba(99, 102, 241, 0.3)',
              paddingLeft: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem'
            }}
          >
            {RESUME_EXPERIENCE.map((exp, index) => (
              <div
                key={index}
                className="glass-panel"
                style={{
                  padding: '2rem',
                  position: 'relative',
                  borderRadius: 'var(--radius-lg)'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: '-2.65rem',
                    top: '2rem',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-primary)',
                    border: '3px solid var(--bg-primary)',
                    boxShadow: '0 0 12px var(--accent-primary)'
                  }}
                />

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    marginBottom: '0.75rem'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--accent-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  <span
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.35rem' }}>
                  {exp.role}
                </h4>
                <div
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--accent-primary)',
                    marginBottom: '1rem'
                  }}
                >
                  {exp.company}
                </div>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.92rem',
                    lineHeight: 1.65,
                    marginBottom: '1.25rem'
                  }}
                >
                  {exp.description}
                </p>

                <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {exp.achievements.map((ach, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.6rem',
                        fontSize: '0.9rem',
                        color: 'var(--text-main)',
                        lineHeight: 1.55
                      }}
                    >
                      <CheckCircle2
                        size={16}
                        color="var(--accent-emerald)"
                        style={{ marginTop: '0.2rem', flexShrink: 0 }}
                      />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {exp.skills.map((skill) => (
                    <span key={skill} className="badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h3
            style={{
              fontSize: '1.4rem',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
          >
            <GraduationCap size={22} color="var(--accent-primary)" />
            <span>Education &amp; Verified Certifications</span>
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
              gap: '1.5rem'
            }}
          >
            {EDUCATION_CERTIFICATIONS.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  borderTop: '3px solid var(--accent-cyan)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Award size={18} color="var(--accent-cyan)" />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--accent-emerald)',
                      fontWeight: 600
                    }}
                  >
                    {item.period}
                  </span>
                </div>
                <h4 style={{ fontSize: '1.05rem', lineHeight: 1.35 }}>{item.title}</h4>
                <div style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', fontWeight: 500 }}>
                  {item.institution}
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
