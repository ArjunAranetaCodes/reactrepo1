import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';
import { shopSlugs, getShopConfig } from '../shops';
import shop1Thumb from '../thumbnails/shop1.png';
import shop2Thumb from '../thumbnails/shop2.png';
import shop3Thumb from '../thumbnails/shop3.png';
import shop4Thumb from '../thumbnails/shop4.png';
import companyWebsiteThumb from '../thumbnails/company-website.png';
import terraNovaThumb from '../thumbnails/terra-nova.png';
import healthCenterThumb from '../thumbnails/health-center.png';
import softLandingThumb from '../thumbnails/soft-landing.png';
import cloudSyncThumb from '../thumbnails/cloud-sync.png';
import RevealOnScroll from './RevealOnScroll';
import AaWebStudiosBanner from '../../components/AaWebStudiosBanner';
import './Portfolio.css';

const THUMBNAILS = {
  shop1: shop1Thumb,
  shop2: shop2Thumb,
  shop3: shop3Thumb,
  shop4: shop4Thumb,
  'company-website': companyWebsiteThumb,
  'travel-site': terraNovaThumb,
  services1: healthCenterThumb,
  services2: softLandingThumb,
  services3: cloudSyncThumb,
};

const SKILLS = [
  { name: 'WordPress', text: 'Themes, plugins, and headless setups.', icon: '📝' },
  { name: 'React.js', text: 'Fast, modern front-end applications.', icon: '⚛️' },
  { name: 'Java', text: 'Backend services, APIs, and enterprise applications.', icon: '☕' },
];

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

// Build SITES from shop configs + company sites + any external links
const SITES = [
  ...shopSlugs.map((slug) => {
    const config = getShopConfig(slug);
    return {
      id: slug,
      title: config.name,
      category: 'STORES',
      url: `/${slug}`,
      internal: true,
      image: THUMBNAILS[slug] ?? `https://via.placeholder.com/400x280/6b7c9a/fff?text=${encodeURIComponent(config.name)}`,
    };
  }),
  { id: 'company-website', title: 'Green Energy', category: 'COMPANY', url: '/company-website', internal: true, image: THUMBNAILS['company-website'] ?? 'https://via.placeholder.com/400x280/63b54c/fff?text=Green+Energy' },
  { id: 'travel-site', title: 'Terra Nova', category: 'TRAVEL', url: '/travel-site', internal: true, image: THUMBNAILS['travel-site'] ?? 'https://via.placeholder.com/400x280/148aa8/fff?text=Terra+Nova' },
  { id: 'services1', title: 'Health Center', category: 'SERVICES', url: '/services1', internal: true, image: THUMBNAILS.services1 ?? 'https://via.placeholder.com/400x280/a5c422/fff?text=Health+Center' },
  { id: 'services2', title: 'Soft Landing', category: 'SERVICES', url: '/services2', internal: true, image: THUMBNAILS.services2 ?? 'https://via.placeholder.com/400x280/29ca8e/fff?text=Soft+Landing' },
  { id: 'services3', title: 'CloudSync', category: 'SERVICES', url: '/services3', internal: true, image: THUMBNAILS.services3 ?? 'https://via.placeholder.com/400x280/6366f1/fff?text=CloudSync' },
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
  const [submitted, setSubmitted] = useState(false);
  const [whatWeDoOpenId, setWhatWeDoOpenId] = useState(null);

  useEffect(() => {
    const hash = location.hash?.replace(/^#/, '');
    if (!hash) return undefined;
    const allowed = new Set(['about', 'services', 'portfolio', 'contact']);
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

  return (
    <div className="portfolio-page">
      {/* Header: brand banner (SVG + CTA on gradient only — no photo) */}
      <header className="portfolio-header-banner" id="about">
        <div className="portfolio-hero-brand-banner">
          <Container fluid className="portfolio-hero-container px-3">
            <h1 className="visually-hidden">aawebstudios — web and digital studio</h1>
            <AaWebStudiosBanner className="aa-banner--hero" />
            <div className="portfolio-hero-brand-cta">
              <Button as={Link} to="/shop1" variant="primary" size="lg" className="portfolio-hero-btn">
                Get in touch →
              </Button>
              <div className="portfolio-hero-social">
                {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                  <a key={label} href={href} className="portfolio-social-icon" aria-label={label}>
                    <Icon size={22} />
                  </a>
                ))}
              </div>
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

      <section className="portfolio-skills">
        <RevealOnScroll>
          <Container>
            <h2 className="portfolio-section-title text-center mb-4">What we use</h2>
            <Row className="g-4 justify-content-center">
              {SKILLS.map((s, index) => (
                <Col key={s.name} xs={12} sm={6} md={6} lg={3}>
                  <RevealOnScroll className="h-100" delayMs={index * 90}>
                    <Card className="portfolio-skill-card h-100 border-0">
                      <Card.Body className="text-center p-4">
                        <span className="portfolio-skill-icon">{s.icon}</span>
                        <Card.Title className="portfolio-skill-name">{s.name}</Card.Title>
                        <Card.Text className="portfolio-skill-text">{s.text}</Card.Text>
                      </Card.Body>
                    </Card>
                  </RevealOnScroll>
                </Col>
              ))}
            </Row>
          </Container>
        </RevealOnScroll>
      </section>

      <section id="portfolio" className="portfolio-works">
        <Container>
          <RevealOnScroll>
            <h2 className="portfolio-section-title text-center mb-5">Our Works</h2>
          </RevealOnScroll>
          <Row className="g-4">
            {SITES.map((site, index) => (
              <Col key={site.id} xs={12} sm={6} lg={4}>
                <RevealOnScroll className="h-100" delayMs={index * 75}>
                  <Card className="portfolio-work-card border-0 h-100">
                    <div className="portfolio-work-image-wrap">
                      <img src={site.image} alt={site.title} className="portfolio-work-image" />
                    </div>
                    <Card.Body className="p-3">
                      <span className="portfolio-work-category">{site.category}</span>
                      <Card.Title className="portfolio-work-title">{site.title}</Card.Title>
                      {site.internal ? (
                        <Button as={Link} to={site.url} variant="link" className="portfolio-work-link p-0 text-decoration-none">
                          View site →
                        </Button>
                      ) : (
                        <a href={site.url} className="portfolio-work-link text-decoration-none">View site →</a>
                      )}
                    </Card.Body>
                  </Card>
                </RevealOnScroll>
              </Col>
            ))}
          </Row>
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
