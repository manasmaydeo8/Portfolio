import React, { useState } from 'react';
import { RESUME_EXPERIENCE, EDUCATION_CERTIFICATIONS } from '../data/portfolioData';
import { Briefcase, Award, GraduationCap, Download, Calendar, MapPin, CheckCircle, FileText } from 'lucide-react';

export default function Resume({ onDownloadResume }) {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="resume" className="section" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Career Path</span>
          </div>
          <h2 className="section-title">
            Experience &amp; <span className="text-gradient">Credentials</span>
          </h2>
          <p className="section-desc">
            A track record of engineering leadership, production system delivery, and industry-standard cloud certifications.
          </p>
        </div>

        {/* Tab Selector + Download Action */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '3rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              background: 'var(--bg-card)',
              padding: '0.4rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)'
            }}
          >
            <button
              type="button"
              id="resume-tab-experience"
              onClick={() => setActiveTab('experience')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.55rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                border: 'none',
                outline: 'none',
                transition: 'all var(--transition-fast)',
                background: activeTab === 'experience' ? 'var(--gradient-brand)' : 'transparent',
                color: activeTab === 'experience' ? '#ffffff' : 'var(--text-secondary)'
              }}
            >
              <Briefcase size={16} />
              <span>Work Experience</span>
            </button>
            <button
              type="button"
              id="resume-tab-credentials"
              onClick={() => setActiveTab('credentials')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.55rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                border: 'none',
                outline: 'none',
                transition: 'all var(--transition-fast)',
                background: activeTab === 'credentials' ? 'var(--gradient-brand)' : 'transparent',
                color: activeTab === 'credentials' ? '#ffffff' : 'var(--text-secondary)'
              }}
            >
              <Award size={16} />
              <span>Education &amp; Certs</span>
            </button>
          </div>

          <button
            type="button"
            id="resume-download-btn"
            onClick={onDownloadResume}
            className="btn btn-primary"
          >
            <Download size={16} />
            <span>Download Official Resume</span>
          </button>
        </div>

        {/* Work Experience Tab Content */}
        {activeTab === 'experience' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              position: 'relative'
            }}
          >
            {RESUME_EXPERIENCE.map((item, index) => (
              <div
                key={index}
                className="glass-panel"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  borderLeft: '4px solid var(--accent-primary)'
                }}
              >
                {/* Header Row */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '0.75rem'
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '0.25rem' }}>{item.role}</h3>
                    <div
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: 'var(--accent-primary)'
                      }}
                    >
                      {item.company}
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.85rem',
                      alignItems: 'center',
                      color: 'var(--text-muted)',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Calendar size={14} />
                      {item.period}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MapPin size={14} />
                      {item.location}
                    </span>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.description}</p>

                {/* Key Achievements */}
                <div>
                  <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    Key Deliverables:
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {item.achievements.map((ach, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          color: 'var(--text-main)',
                          fontSize: '0.925rem'
                        }}
                      >
                        <CheckCircle size={15} color="var(--accent-emerald)" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.5rem' }}>
                  {item.skills.map((skill) => (
                    <span key={skill} className="badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education & Certifications Tab */}
        {activeTab === 'credentials' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {EDUCATION_CERTIFICATIONS.map((item, index) => (
              <div
                key={index}
                className="glass-panel"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'var(--accent-primary)'
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(99, 102, 241, 0.1)',
                      border: '1px solid rgba(99, 102, 241, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {item.title.includes('B.S.') ? <GraduationCap size={20} /> : <Award size={20} />}
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {item.period}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem' }}>{item.title}</h3>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-cyan)', fontWeight: 500 }}>
                  {item.institution}
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
