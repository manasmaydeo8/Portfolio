import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Download, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/site/SectionHeader';
import CaseIndexRow from '../components/site/CaseIndexRow';
import { useSEO } from '../hooks/useSEO';
import { FALLBACK_PROJECTS } from '../data/fallbackData';

export default function IndexPage() {
  const [projects, setProjects] = useState(FALLBACK_PROJECTS);
  const [loading, setLoading] = useState(true);

  useSEO({
    title: 'Design that ships, code that holds',
    description: 'Manas Maydeo is a Product Designer & Frontend Engineer in India specializing in design systems, data tools, and robust web applications.',
    canonical: 'https://manasmaydeo.design/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Manas Maydeo — Portfolio',
      url: 'https://manasmaydeo.design/',
      author: {
        '@type': 'Person',
        name: 'Manas Maydeo',
        jobTitle: 'Product Designer & Frontend Engineer',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'India',
          addressCountry: 'India'
        }
      }
    }
  });

  useEffect(() => {
    let isMounted = true;
    fetch('/api/projects?featured_only=true')
      .then((res) => {
        if (!res.ok) throw new Error('API request failed');
        return res.json();
      })
      .then((data) => {
        if (isMounted && Array.isArray(data) && data.length > 0) {
          setProjects(data);
        }
      })
      .catch(() => {
        // Fallback already pre-set
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleDownloadCV = () => {
    const cvText = `MANAS MANDAR MAYDEO
Address: Raigad, Maharashtra, India
Email: Manas12maydeo@gmail.com | Phone: +91 7499490668
LinkedIn: https://www.linkedin.com/in/manas-maydeo-93ba49403/
GitHub: https://github.com/manasmaydeo8

CAREER OBJECTIVE:
Results-driven Computer Science graduate with a strong foundation in Web Development and Full Stack Development. Proficient in HTML, CSS, JavaScript, Python, SQL, and modern web technologies. Passionate about building responsive, user-friendly applications and solving real-world problems through clean and efficient code. Seeking an entry-level Software Developer or Full Stack Developer role to contribute and grow in a collaborative environment.

TECHNICAL SKILLS:
- Programming Languages: JavaScript, Python, Java, Kotlin
- Frontend: HTML5, CSS3, JavaScript, React.js, Bootstrap, Responsive Web Design
- Backend: Node.js, Express.js
- Database: MongoDB, MySQL
- Tools & Technologies: Git, GitHub, VS Code, Android Studio, Postman, Docker, Linux

EDUCATION:
- Bachelor of Science (Computer Science) | Mumbai University | CGPA: 8.00/10
- Higher Secondary Certificate (HSC) | J.S.M College Alibag | 2021 - 2022
- Secondary School Certificate (SSC) | K.E.S English Medium School | 2019 - 2020

KEY PROJECTS:
1. Habitly – Habit Tracker (https://github.com/manasmaydeo8/LifeQuest.git)
   - Developed a responsive habit tracker using HTML, CSS, and JavaScript.
   - Implemented habit management, streak tracking, notes, calendar, and task management.
   - Used Local Storage for persistent user data with a clean mobile-friendly interface.
2. Astrology Website (https://github.com/manasmaydeo8/Astro)
   - Built a responsive astrology website with modern UI using React.js, Python, and MongoDB.
   - Created reusable React components and structured navigation.
3. Kinetic Design System & Vanguard Analytics
   - Tokenized multi-brand architecture and high-performance React frontends.

CERTIFICATIONS:
- Python Bootcamp - LetsUpgrade.com
- Project Management Certification - LearnTube.com
- React.js Bootcamp - LetsUpgrade.com
- HTML & CSS Bootcamp - LetsUpgrade.com

LANGUAGES: English, Hindi, Marathi
`;
    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Manas_Maydeo_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ paddingBottom: '6rem' }}>
      {/* Hero Section */}
      <section
        style={{
          paddingTop: 'clamp(3rem, 7vw, 5.5rem)',
          paddingBottom: 'clamp(3.5rem, 8vw, 6rem)',
          borderBottom: '1px solid var(--border)'
        }}
        aria-labelledby="hero-heading"
      >
        <div className="site-container">
          <div style={{ maxWidth: '960px' }}>
            {/* Eyebrow */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: 'var(--accent)',
                  display: 'inline-block'
                }}
                aria-hidden="true"
              />
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.4px',
                  color: 'var(--foreground)'
                }}
              >
                Product Designer & Frontend Engineer — India
              </span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(40px, 7vw, 64px)',
                lineHeight: 1.05,
                letterSpacing: '-0.5px',
                fontWeight: 600,
                color: 'var(--foreground)',
                marginBottom: '1.75rem'
              }}
              className="text-balance"
            >
              Design that ships, code that holds.
            </h1>

            {/* Intro Sentence */}
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(18px, 2.4vw, 20px)',
                lineHeight: 1.6,
                color: 'var(--foreground)',
                maxWidth: '720px',
                marginBottom: '2.5rem'
              }}
            >
              Nine years bridging high-density design systems, editorial precision, and resilient React architecture for complex web applications.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                flexWrap: 'wrap'
              }}
            >
              <a
                href="#selected-work"
                className="btn-primary"
                style={{ textDecoration: 'none' }}
              >
                <span>View selected work</span>
                <ArrowDown size={16} />
              </a>

              <button
                type="button"
                onClick={handleDownloadCV}
                className="btn-secondary"
                aria-label="Download Manas Maydeo CV document"
              >
                <span>Download CV</span>
                <Download size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 01: Selected Work */}
      <section
        id="selected-work"
        style={{
          paddingTop: 'clamp(4rem, 8vw, 6rem)'
        }}
        aria-labelledby="section-01-title"
      >
        <div className="site-container">
          <SectionHeader
            number="01"
            label="SELECTED WORK"
            headline="Four case studies proving craft, systems, and impact"
          />

          {/* Case Study Rows or Skeleton */}
          {loading ? (
            <div role="status" aria-label="Loading case studies">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  style={{
                    paddingBlock: '2rem',
                    borderBottom: '1px solid var(--border)'
                  }}
                >
                  <div className="skeleton-line" style={{ width: '40%', height: '2rem' }} />
                  <div className="skeleton-line" style={{ width: '25%', height: '1rem' }} />
                </div>
              ))}
            </div>
          ) : projects.length === 0 ? (
            <div
              style={{
                backgroundColor: 'var(--muted)',
                padding: '3rem',
                border: '1px solid var(--border)',
                textAlign: 'center'
              }}
            >
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '18px' }}>
                Case studies coming soon.
              </p>
            </div>
          ) : (
            <div>
              {projects.map((project, idx) => (
                <CaseIndexRow key={project.slug} project={project} index={idx} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Narrative Monograph Interlude / Editorial Note */}
      <section
        style={{
          paddingTop: 'clamp(4rem, 8vw, 6.5rem)'
        }}
      >
        <div className="site-container">
          <div
            style={{
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              border: '1px solid var(--border)',
              backgroundColor: 'var(--card)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center'
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '12px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--accent)',
                  display: 'block',
                  marginBottom: '0.75rem'
                }}
              >
                Editorial Philosophy
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(24px, 3.5vw, 32px)',
                  fontWeight: 600,
                  lineHeight: 1.25,
                  marginBottom: '1rem'
                }}
              >
                "Serif narrates, sans structures."
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--muted-foreground)'
                }}
              >
                Interfaces are reading environments. We build systems that respect typographic proportions, preserve layout stability, and stay fast under load.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                borderLeft: '1px solid var(--border)',
                paddingLeft: 'clamp(1rem, 3vw, 2.5rem)'
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.05rem',
                  lineHeight: 1.6
                }}
              >
                Want to review background credentials, previous leadership tenures, and peer evaluations?
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn-secondary" style={{ textDecoration: 'none' }}>
                  <span>Read Profile & Bio</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>
                  <span>Start Conversation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
