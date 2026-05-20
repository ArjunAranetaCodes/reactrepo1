import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Facebook, Twitter, Instagram, CheckCircleFill, ArrowRight } from 'react-bootstrap-icons';
import shop1Thumb from '../thumbnails/shop1.png';
import shop2Thumb from '../thumbnails/shop2.png';
import shop3Thumb from '../thumbnails/shop3.png';
import shop4Thumb from '../thumbnails/shop4.png';
import healthCenterThumb from '../thumbnails/health-center.png';
import cloudSyncThumb from '../thumbnails/cloud-sync.png';
import RevealOnScroll from './RevealOnScroll';
import AaWebStudiosBanner from '../../components/AaWebStudiosBanner';
import { HowWeWorkStepArt } from './how-we-work-illustrations';
import './Portfolio.css';

const WHAT_WE_DO_SERVICES = [
  {
    id: 'web-dev',
    label: 'Website development',
    detail:
      'Marketing sites, content-managed builds, and performance-focused launches — structured so your team can keep publishing with confidence.',
  },
  {
    id: 'ux',
    label: 'User experience design',
    detail:
      'Research-informed layouts, flows, and UI patterns that reduce friction for visitors and align with how your organisation actually works.',
  },
  {
    id: 'hosting',
    label: 'Hosting and support',
    detail:
      'Stable hosting options and a responsive support rhythm so releases, fixes, and routine care do not fall through the cracks.',
  },
  {
    id: 'platform',
    label: 'Platform development',
    detail:
      'Tailored internal tools and customer-facing platforms when off-the-shelf products do not match your workflows or integrations.',
  },
  {
    id: 'saas',
    label: 'Software as a service (SaaS)',
    detail:
      'Product-minded builds with scalability, permissions, and iteration in mind — from early pilots to steady-state operations.',
  },
  {
    id: 'brand',
    label: 'Brand design',
    detail:
      'Logo, typography, and visual direction that translate cleanly across web and collateral — cohesive without feeling generic.',
  },
];

const WORK_FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'web-design', label: 'Web Design' },
  { id: 'development', label: 'Development' },
  { id: 'branding', label: 'Branding' },
  { id: 'seo', label: 'SEO' },
];

/** Showcase projects — copy/layout aligned with portfolio hero; links point at live demos */
const WORK_PROJECTS = [
  {
    id: 'vertex',
    title: 'Vertex Marketing',
    tagline: 'Elevate your business.',
    serviceLabel: 'Website Redesign',
    filters: ['web-design', 'seo'],
    url: '/shop1',
    image: shop1Thumb,
  },
  {
    id: 'nexa',
    title: 'Nexa Logistics',
    tagline: 'Built for speed. Designed to scale.',
    serviceLabel: 'Custom Website',
    filters: ['development'],
    url: '/shop2',
    image: shop2Thumb,
  },
  {
    id: 'luma',
    title: 'Luma Consulting',
    tagline: 'Clarity. Strategy. Results.',
    serviceLabel: 'Website Redesign',
    filters: ['web-design', 'branding'],
    url: '/shop3',
    image: shop3Thumb,
  },
  {
    id: 'horizon',
    title: 'Horizon Real Estate',
    tagline: 'Real estate made simple.',
    serviceLabel: 'Custom Website',
    filters: ['development', 'seo'],
    url: '/shop4',
    image: shop4Thumb,
  },
  {
    id: 'medix',
    title: 'Medix Health',
    tagline: 'Innovative healthcare solutions.',
    serviceLabel: 'Custom Website',
    filters: ['development'],
    url: '/services1',
    image: healthCenterThumb,
  },
  {
    id: 'edutech',
    title: 'EduTech Academy',
    tagline: 'Where learning meets innovation.',
    serviceLabel: 'Website Redesign',
    filters: ['web-design', 'branding'],
    url: '/services3',
    image: cloudSyncThumb,
  },
];

const HOW_WE_WORK_STEPS = [
  {
    id: 'discovery',
    title: 'Discovery',
    description:
      'We align on goals, audiences, and constraints so scope stays honest and every later decision maps back to outcomes.',
  },
  {
    id: 'wireframing',
    title: 'Wireframing',
    description:
      'Low-fidelity layouts and flows validate structure early — fewer surprises when visuals and content land.',
  },
  {
    id: 'ui-design',
    title: 'UI Design',
    description:
      'A cohesive visual system: typography, colour, components, and accessible patterns you can reuse beyond launch.',
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'Clean, performant builds matched to your stack — maintainable code, sensible integrations, and solid QA.',
  },
  {
    id: 'launch',
    title: 'Launch',
    description:
      'Deployment, checks, and handover done methodically so go-live day feels calm rather than chaotic.',
  },
  {
    id: 'optimization',
    title: 'Optimization',
    description:
      'Analytics, speed, SEO hygiene, and iterative improvements — turning launch into a baseline, not a finish line.',
  },
];

const HERO_TRUST_POINTS = [
  'Strategy-led UX & design',
  'Performance-focused builds',
  'Launch support & iteration',
];

const SOCIAL_LINKS = [
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
];

function Portfolio() {
  const location = useLocation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [heroEmail, setHeroEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [whatWeDoOpenId, setWhatWeDoOpenId] = useState(null);
  const [workFilter, setWorkFilter] = useState('all');

  const filteredWorkProjects =
    workFilter === 'all'
      ? WORK_PROJECTS
      : WORK_PROJECTS.filter((p) => p.filters.includes(workFilter));

  useEffect(() => {
    const hash = location.hash?.replace(/^#/, '');
    if (!hash) return undefined;
    const allowed = new Set(['about', 'services', 'portfolio', 'how-we-work', 'contact']);
    if (!allowed.has(hash)) return undefined;
    const t = window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
    return () => window.clearTimeout(t);
  }, [location.pathname, location.hash]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleHeroLeadSubmit = (e) => {
    e.preventDefault();
    setHeroSubmitted(true);
    if (heroEmail.trim()) {
      setEmail(heroEmail.trim());
    }
    window.setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 400);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="portfolio-page">
      {/* Hero — value proposition, lead capture, trust signals */}
      <header className="portfolio-header-banner" id="about">
        <div className="portfolio-hero-brand-banner">
          <Container fluid className="portfolio-hero-container px-3">
            <h1 className="visually-hidden">
              aawebstudios — web design and development studio for teams that need to convert more leads
            </h1>
            <div className="portfolio-hero-layout">
              <div className="portfolio-hero-main">
                <AaWebStudiosBanner className="aa-banner--hero aa-banner--hero-compact" showTagline={false} />
                <p className="portfolio-hero-eyebrow">Web &amp; digital studio</p>
                <h2 className="portfolio-hero-headline">
                  Websites and platforms built to earn trust—and turn visitors into leads.
                </h2>
                <p className="portfolio-hero-lede">
                  We partner with growing businesses on strategy, design, and development—so your site looks
                  credible, loads fast, and gives prospects a clear reason to reach out.
                </p>

                <div className="portfolio-hero-lead-block" aria-label="Request a project consultation">
                  {heroSubmitted ? (
                    <p className="portfolio-hero-lead-success" role="status">
                      Thanks—we&apos;ll follow up shortly. Share a few more details below if you like.
                    </p>
                  ) : (
                    <Form className="portfolio-hero-lead-form" onSubmit={handleHeroLeadSubmit}>
                      <Form.Label htmlFor="hero-lead-email" className="visually-hidden">
                        Work email
                      </Form.Label>
                      <Form.Control
                        id="hero-lead-email"
                        type="email"
                        className="portfolio-hero-lead-input"
                        placeholder="you@company.com"
                        value={heroEmail}
                        onChange={(e) => setHeroEmail(e.target.value)}
                        required
                        autoComplete="email"
                      />
                      <Button type="submit" size="lg" className="portfolio-hero-btn portfolio-hero-btn-primary">
                        Book a free consult
                        <ArrowRight className="portfolio-hero-btn-icon" aria-hidden />
                      </Button>
                    </Form>
                  )}
                  <p className="portfolio-hero-lead-note">
                    Typical response within one business day. No spam—just a focused conversation about your goals.
                  </p>
                </div>

                <div className="portfolio-hero-cta-row">
                  <Button
                    variant="link"
                    className="portfolio-hero-link-btn"
                    href="#portfolio"
                    onClick={(e) => scrollToSection(e, 'portfolio')}
                  >
                    View selected work
                  </Button>
                  <span className="portfolio-hero-cta-divider" aria-hidden>
                    ·
                  </span>
                  <Button
                    variant="link"
                    className="portfolio-hero-link-btn"
                    href="#how-we-work"
                    onClick={(e) => scrollToSection(e, 'how-we-work')}
                  >
                    How we work
                  </Button>
                </div>
              </div>

              <aside className="portfolio-hero-aside" aria-label="Why teams work with us">
                <ul className="portfolio-hero-trust-list">
                  {HERO_TRUST_POINTS.map((point) => (
                    <li key={point}>
                      <CheckCircleFill className="portfolio-hero-trust-icon" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="portfolio-hero-proof-card">
                  <p className="portfolio-hero-proof-stat">
                    <span className="portfolio-hero-proof-number">6+</span>
                    <span className="portfolio-hero-proof-label">live demos in our portfolio</span>
                  </p>
                  <p className="portfolio-hero-proof-copy">
                    From marketing sites to SaaS-style products—each build is structured for clarity, speed, and
                    conversion-ready UX.
                  </p>
                  <Button
                    variant="outline-light"
                    size="sm"
                    className="portfolio-hero-proof-btn"
                    href="#contact"
                    onClick={(e) => scrollToSection(e, 'contact')}
                  >
                    Talk through your project
                  </Button>
                </div>
                <div className="portfolio-hero-social">
                  {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                    <a key={label} href={href} className="portfolio-social-icon" aria-label={label}>
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </aside>
            </div>
          </Container>
        </div>
      </header>

      <section className="portfolio-what-we-do" id="services">
        <RevealOnScroll>
          <Container>
            <Row className="align-items-start g-4 g-lg-5">
              <Col lg={6}>
                <div className="portfolio-wwd-kicker">
                  <span className="portfolio-wwd-kicker-mark" aria-hidden />
                  <span className="portfolio-wwd-kicker-text">What we do</span>
                </div>
                <h2 className="portfolio-wwd-headline">
                  We build robust digital tools &amp; deliver quality design outcomes
                </h2>
                <p className="portfolio-wwd-lede">
                  We partner with teams who want clarity over chaos: thoughtful UX, maintainable builds, and launch rhythms you can plan around.
                  Whether it is an accessible brochure site, a storefront, or a larger web application, we bring ideas forward with visuals that
                  match your brand and behaviour that holds up on real devices — so your site earns trust and keeps working after go-live.
                </p>
                <Link to="/who-we-are" className="portfolio-wwd-cta">
                  See all of our services →
                </Link>
              </Col>
              <Col lg={6}>
                <div className="portfolio-wwd-accordion">
                  {WHAT_WE_DO_SERVICES.map((item) => {
                    const expanded = whatWeDoOpenId === item.id;
                    return (
                      <div key={item.id} className={`portfolio-wwd-item${expanded ? ' portfolio-wwd-item-open' : ''}`}>
                        <button
                          type="button"
                          className="portfolio-wwd-trigger"
                          aria-expanded={expanded}
                          aria-controls={`wwd-panel-${item.id}`}
                          id={`wwd-trigger-${item.id}`}
                          onClick={() =>
                            setWhatWeDoOpenId((prev) => (prev === item.id ? null : item.id))
                          }
                        >
                          <span className="portfolio-wwd-trigger-label">{item.label}</span>
                          <span className="portfolio-wwd-trigger-icon" aria-hidden>
                            {expanded ? '−' : '+'}
                          </span>
                        </button>
                        <div
                          id={`wwd-panel-${item.id}`}
                          role="region"
                          aria-labelledby={`wwd-trigger-${item.id}`}
                          className="portfolio-wwd-panel"
                          hidden={!expanded}
                        >
                          <p>{item.detail}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Col>
            </Row>
          </Container>
        </RevealOnScroll>
      </section>

      <section id="portfolio" className="portfolio-works" aria-labelledby="portfolio-heading">
        <Container>
          <RevealOnScroll>
            <header className="portfolio-works-header">
              <p className="portfolio-work-section-label">Our work</p>
              <h2 id="portfolio-heading" className="portfolio-work-headline">
                Digital experiences that drive results.
              </h2>
              <p className="portfolio-work-lede">
                We partner with businesses to create custom websites and digital solutions that are beautiful,
                functional, and built to convert.
              </p>
            </header>
          </RevealOnScroll>
          <RevealOnScroll delayMs={40}>
            <div className="portfolio-work-filters" role="group" aria-label="Filter projects by category">
              {WORK_FILTERS.map(({ id, label }) => {
                const active = workFilter === id;
                return (
                  <button
                    key={id}
                    type="button"
                    className="portfolio-work-filter-btn"
                    aria-pressed={active}
                    data-active={active}
                    onClick={() => setWorkFilter(id)}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </RevealOnScroll>
          <Row className="g-4 portfolio-work-grid">
            {filteredWorkProjects.map((project, index) => (
              <Col key={project.id} xs={12} md={6}>
                <RevealOnScroll className="h-100" delayMs={index * 60}>
                  <article className="portfolio-work-card h-100">
                    <Link to={project.url} className="portfolio-work-card-link">
                      <div className="portfolio-work-image-wrap">
                        <img src={project.image} alt="" className="portfolio-work-image" />
                        <p className="portfolio-work-tagline">{project.tagline}</p>
                      </div>
                      <div className="portfolio-work-footer">
                        <div className="portfolio-work-footer-text">
                          <h3 className="portfolio-work-title">{project.title}</h3>
                          <p className="portfolio-work-service">{project.serviceLabel}</p>
                        </div>
                        <span className="portfolio-work-arrow" aria-hidden>
                          →
                        </span>
                      </div>
                    </Link>
                  </article>
                </RevealOnScroll>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="how-we-work" className="portfolio-how-we-work" aria-labelledby="how-we-work-heading">
        <Container>
          <RevealOnScroll>
            <header className="portfolio-hww-header">
              <p className="portfolio-work-section-label portfolio-hww-kicker">How we work</p>
              <h2 id="how-we-work-heading" className="portfolio-work-headline">
                A clear process from first conversation to continuous improvement.
              </h2>
              <p className="portfolio-work-lede portfolio-hww-lede">
                Transparency builds trust. Here is how we move projects forward — so you always know what happens next.
              </p>
            </header>
          </RevealOnScroll>
          <ol className="portfolio-hww-timeline list-unstyled">
            {HOW_WE_WORK_STEPS.map((step, index) => (
              <li key={step.id} className="portfolio-hww-step">
                <RevealOnScroll delayMs={index * 70}>
                  <div className="portfolio-hww-step-card">
                    <div className="portfolio-hww-art" aria-hidden>
                      <HowWeWorkStepArt stepId={step.id} className="portfolio-hww-svg" />
                    </div>
                    <span className="portfolio-hww-index">{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="portfolio-hww-step-title">{step.title}</h3>
                    <p className="portfolio-hww-step-text">{step.description}</p>
                  </div>
                </RevealOnScroll>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="contact" className="portfolio-contact">
        <div
          className="portfolio-contact-bg"
          style={{ backgroundImage: 'url(/portfolio/mini-profile-bg-02.jpg)' }}
          aria-hidden="true"
        />
        <div className="portfolio-contact-overlay" aria-hidden="true" />
        <div className="portfolio-contact-inner">
        <RevealOnScroll>
        <Container>
          <h2 className="portfolio-section-title text-center mb-4">Get in Touch</h2>
          <Row className="align-items-center g-4 justify-content-center">
            <Col lg={6}>
              <Form onSubmit={handleContactSubmit} className="portfolio-contact-form">
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="portfolio-input-underline"
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter a valid email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="portfolio-input-underline"
                  />
                </Form.Group>
                <Button type="submit" variant="primary" size="lg" className="portfolio-submit-btn">
                  SUBMIT
                </Button>
                {submitted && (
                  <p className="text-success small mt-3 mb-0">Thanks! We&apos;ll be in touch.</p>
                )}
              </Form>
            </Col>
            <Col lg={6} className="text-center d-none d-lg-block">
              <div className="portfolio-contact-illus">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop"
                  alt=""
                  className="portfolio-contact-image"
                />
              </div>
            </Col>
          </Row>
        </Container>
        </RevealOnScroll>
        </div>
      </section>

      <footer className="portfolio-footer">
        <RevealOnScroll>
        <Container>
          <Row className="align-items-center py-4">
            <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
              <p className="portfolio-footer-tagline mb-2">Let&apos;s create something great</p>
              <div className="portfolio-footer-social">
                {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                  <a key={label} href={href} className="portfolio-social-icon" aria-label={label}>
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <span className="portfolio-footer-label">Contact</span>
              <a href="mailto:aawebstudios@gmail.com" className="portfolio-footer-email">aawebstudios@gmail.com</a>
            </Col>
          </Row>
        </Container>
        </RevealOnScroll>
      </footer>
    </div>
  );
}

export default Portfolio;
