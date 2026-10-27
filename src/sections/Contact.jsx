import React, { useState } from 'react';
import { PROFILE } from '../data/profile';
import { Mail, Phone, MapPin, Send, Check, Copy, MessageSquare, AlertCircle, RefreshCw } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../components/Icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      errors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email address (e.g. name@domain.com).';
    }
    if (!formData.subject.trim()) {
      errors.subject = 'Please provide a subject.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errors.message = 'Message must be at least 15 characters long.';
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      setSubmitStatus(null);
      setErrorMessage('');

      // Formspree integration with environment-variable-based API key (with fallback)
      const formspreeKey = import.meta.env.VITE_FORMSPREE_KEY || 'xpznvevo';
      const endpoint = `https://formspree.io/f/${formspreeKey}`;

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: formData.subject.trim(),
            message: formData.message.trim(),
            _replyto: formData.email.trim()
          })
        });

        if (response.ok) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setSubmitStatus(null), 8000);
        } else {
          const data = await response.json();
          setSubmitStatus('error');
          setErrorMessage(data.error || 'Failed to submit form. Please email directly.');
        }
      } catch (err) {
        setSubmitStatus('error');
        setErrorMessage('Network error occurred. Please verify your connection or email directly.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="section" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="text-gradient">Extraordinary</span>
          </h2>
          <p className="section-desc">
            Whether you have an upcoming web application, architecture requirements, or senior leadership opportunities, my inbox is open.
          </p>
        </div>

        {/* Contact Grid: Stack on mobile, 2 columns on tablet/desktop */}
        <div className="contact-grid">
          {/* Left Column: Direct Communication Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem' }}>
                Direct Communication
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                Feel free to email me directly or copy my email address for your records. I typically respond within 24 hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Email with copy button */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-color)',
                    flexWrap: 'wrap',
                    gap: '0.75rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        color: 'var(--accent-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: 'rgba(99, 102, 241, 0.1)'
                      }}
                    >
                      <Mail size={16} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                        Email Address
                      </div>
                      <a
                        href={`mailto:${PROFILE.email}`}
                        style={{
                          color: 'var(--text-main)',
                          textDecoration: 'none',
                          fontSize: '0.92rem',
                          fontWeight: 500
                        }}
                      >
                        {PROFILE.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    id="copy-email-btn"
                    className="btn btn-secondary btn-sm"
                    aria-label="Copy email address to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={14} color="var(--accent-emerald)" />
                        <span style={{ color: 'var(--accent-emerald)' }}>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Location */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  <div
                    style={{
                      color: 'var(--accent-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(6, 182, 212, 0.1)'
                    }}
                  >
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Location &amp; Availability
                    </div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 500 }}>
                      {PROFILE.location}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  <div
                    style={{
                      color: 'var(--accent-emerald)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(16, 185, 129, 0.1)'
                    }}
                  >
                    <Phone size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Direct Phone
                    </div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 500 }}>
                      {PROFILE.phone}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>
                  Professional Networks
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a
                    href={PROFILE.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={PROFILE.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={PROFILE.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    aria-label="Twitter Profile"
                  >
                    <TwitterIcon size={16} />
                    <span>Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form with Formspree Submission */}
          <div className="glass-panel" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '1.5rem' }}>
              Send an Architectural Inquiry
            </h3>

            {/* Success Alert Banner */}
            {submitStatus === 'success' && (
              <div
                role="status"
                aria-live="polite"
                className="animate-fade-in"
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid var(--accent-emerald)',
                  marginBottom: '1.75rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem'
                }}
              >
                <Check size={20} color="var(--accent-emerald)" style={{ marginTop: '0.1rem', flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--accent-emerald)', marginBottom: '0.25rem' }}>
                    Message Received Successfully!
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Thank you for reaching out. I will review your requirements and respond within 24 hours.
                  </div>
                </div>
              </div>
            )}

            {/* Error Alert Banner */}
            {submitStatus === 'error' && (
              <div
                role="alert"
                aria-live="assertive"
                className="animate-fade-in"
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(244, 63, 94, 0.12)',
                  border: '1px solid var(--accent-rose)',
                  marginBottom: '1.75rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem'
                }}
              >
                <AlertCircle size={20} color="var(--accent-rose)" style={{ marginTop: '0.1rem', flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--accent-rose)', marginBottom: '0.25rem' }}>
                    Submission Encountered an Issue
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    {errorMessage}
                  </div>
                  <a
                    href={`mailto:${PROFILE.email}?subject=Inquiry from Portfolio`}
                    style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600 }}
                  >
                    Click here to send direct email via your mail client →
                  </a>
                </div>
              </div>
            )}

            {/* Contact Form */}
            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="form-label">
                    Your Full Name <span style={{ color: 'var(--accent-rose)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className={`form-input ${formErrors.name ? 'error' : ''}`}
                    required
                  />
                  {formErrors.name && (
                    <div className="form-error">
                      <AlertCircle size={13} />
                      <span>{formErrors.name}</span>
                    </div>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="form-label">
                    Your Email Address <span style={{ color: 'var(--accent-rose)' }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className={`form-input ${formErrors.email ? 'error' : ''}`}
                    required
                  />
                  {formErrors.email && (
                    <div className="form-error">
                      <AlertCircle size={13} />
                      <span>{formErrors.email}</span>
                    </div>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="form-label">
                    Subject / Project Nature <span style={{ color: 'var(--accent-rose)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Frontend Architecture / Opportunity / Consultation"
                    className={`form-input ${formErrors.subject ? 'error' : ''}`}
                    required
                  />
                  {formErrors.subject && (
                    <div className="form-error">
                      <AlertCircle size={13} />
                      <span>{formErrors.subject}</span>
                    </div>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="form-label">
                    Message Details <span style={{ color: 'var(--accent-rose)' }}>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your upcoming application, engineering needs, or target delivery timelines..."
                    className={`form-input ${formErrors.message ? 'error' : ''}`}
                    style={{ resize: 'vertical' }}
                    required
                  />
                  {formErrors.message && (
                    <div className="form-error">
                      <AlertCircle size={13} />
                      <span>{formErrors.message}</span>
                    </div>
                  )}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  id="contact-submit-btn"
                  style={{
                    padding: '0.85rem',
                    fontSize: '1rem',
                    marginTop: '0.5rem',
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw size={18} className="animate-spin" />
                      <span>Submitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Inquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
