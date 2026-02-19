import { useState } from 'react';
import { Link } from 'react-router-dom';
import { name as siteName } from './config';
import './services3.css';

const FEATURES = [
  { icon: '☁', title: 'Sync Everywhere', text: 'Access your files from any device. Real-time sync across desktop, web, and mobile.' },
  { icon: '🔒', title: 'Enterprise Security', text: 'End-to-end encryption and SOC 2 compliance. Your data stays private and secure.' },
  { icon: '⚡', title: 'Lightning Fast', text: 'Optimized infrastructure for instant uploads and downloads. No waiting around.' },
];

const STATS = [
  { value: '10K+', label: 'Active Teams' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '50M+', label: 'Files Synced' },
];

export default function Services3Layout() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    setEmailSubmitted(true);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  return (
    <div className="services3-root">
      <nav className="services3-nav">
        <div className="services3-container">
          <Link to="/services3" className="services3-logo">{siteName}</Link>
          <ul className="services3-nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#stats">Why Us</a></li>
            <li><a href="#testimonial">Testimonial</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#contact" className="services3-nav-cta">Get Started</a></li>
          </ul>
        </div>
      </nav>

      <div className="services3-back-bar">
        <div className="services3-container">
          <Link to="/" className="services3-back-link">← Back to Main Site</Link>
        </div>
      </div>

      <section id="home" className="services3-hero">
        <div className="services3-container">
          <div className="services3-hero-content">
            <p className="services3-hero-badge">SaaS Platform</p>
            <h1>Keep your team in sync.<br />Simple, secure, fast.</h1>
            <p className="services3-hero-sub">One place for all your files. Collaborate in real time with your team—no more email attachments or scattered drives.</p>
            {emailSubmitted ? (
              <p className="services3-hero-success">Check your inbox—we&apos;ve sent you a link to get started.</p>
            ) : (
              <form className="services3-hero-form" onSubmit={handleHeroSubmit}>
                <input type="email" className="services3-hero-input" placeholder="Enter your work email" required />
                <button type="submit" className="services3-hero-btn">Start free trial</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section id="features" className="services3-features">
        <div className="services3-container">
          <h2 className="services3-section-title">Everything you need to stay in sync</h2>
          <p className="services3-section-sub">Built for modern teams. No IT required.</p>
          <div className="services3-features-grid">
            {FEATURES.map((f, i) => (
              <div key={i} className="services3-feature-card">
                <span className="services3-feature-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stats" className="services3-stats">
        <div className="services3-container">
          <div className="services3-stats-grid">
            {STATS.map((s, i) => (
              <div key={i} className="services3-stat">
                <span className="services3-stat-value">{s.value}</span>
                <span className="services3-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonial" className="services3-testimonial">
        <div className="services3-container">
          <blockquote className="services3-quote">
            &ldquo;CloudSync cut our file-sharing chaos to zero. We onboarded in a day and our whole team uses it. Best decision we made this year.&rdquo;
          </blockquote>
          <div className="services3-quote-author">
            <div className="services3-quote-avatar" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80)' }} />
            <div>
              <strong>Alex Chen</strong>
              <span>CTO, TechFlow Inc.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="services3-cta">
        <div className="services3-container">
          <h2>Ready to simplify your workflow?</h2>
          <p>Join 10,000+ teams already using {siteName}. No credit card required.</p>
          <a href="#contact" className="services3-btn services3-btn-lg">Get started free</a>
        </div>
      </section>

      <section id="contact" className="services3-contact">
        <div className="services3-container">
          <h2 className="services3-section-title">Get in touch</h2>
          {contactSubmitted ? (
            <p className="services3-contact-success">Thanks! We&apos;ll get back to you within 24 hours.</p>
          ) : (
            <form className="services3-contact-form" onSubmit={handleContactSubmit}>
              <div className="services3-form-row">
                <input type="text" className="services3-input" placeholder="Your name" name="name" required />
                <input type="email" className="services3-input" placeholder="Email" name="email" required />
              </div>
              <textarea className="services3-input services3-textarea" rows={4} placeholder="How can we help?" name="message" required />
              <button type="submit" className="services3-btn">Send message</button>
            </form>
          )}
        </div>
      </section>

      <footer className="services3-footer">
        <div className="services3-container">
          <div className="services3-footer-inner">
            <div className="services3-footer-brand">
              <span className="services3-logo">{siteName}</span>
              <p>© {new Date().getFullYear()} {siteName}. All rights reserved.</p>
            </div>
            <div className="services3-footer-links">
              <a href="#features">Features</a>
              <a href="#contact">Contact</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
