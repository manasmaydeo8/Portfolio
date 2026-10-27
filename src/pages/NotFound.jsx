import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SectionHeader from '../components/site/SectionHeader';
import { useSEO } from '../hooks/useSEO';

export default function NotFoundPage() {
  useSEO({
    title: 'Page Not Found (404)',
    description: "The requested monograph page doesn't exist or has moved."
  });

  return (
    <div style={{ paddingBlock: 'clamp(4rem, 8vw, 7rem)' }}>
      <div className="site-container">
        <SectionHeader
          number="404"
          label="INDEX ERROR"
          headline="This page doesn't exist (yet)."
          subline="The folio reference you requested could not be resolved in the monograph catalogue."
        />

        <div style={{ maxWidth: '600px', marginTop: '2rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '18px',
              lineHeight: 1.7,
              marginBottom: '2.5rem'
            }}
          >
            Please navigate back to the primary project index or review the about and experience sections.
          </p>

          <Link to="/" className="btn-primary" style={{ textDecoration: 'none' }}>
            <ArrowLeft size={16} />
            <span>Return to selected work</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
