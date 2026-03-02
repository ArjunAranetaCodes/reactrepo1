import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

const HEADER_PARALLAX_FACTOR = 0.4;

function Portfolio() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const headerBgOffset = scrollY * HEADER_PARALLAX_FACTOR;

  return (
    <div className="portfolio-page">
      {/* Header: parallax image + Welcome & CTA blocks inside */}
      <header className="portfolio-header-banner" id="about">
        <div
          className="portfolio-header-banner-bg"
          style={{
            backgroundImage: 'url(/portfolio/mini-profile-bg-01.jpg)',
            transform: `translate3d(0, ${headerBgOffset}px, 0)`,
          }}
          aria-hidden="true"
        />
        <div className="portfolio-header-banner-overlay" aria-hidden="true" />
        <div className="portfolio-header-banner-strip">
          <Container fluid className="portfolio-hero-container">
            <Row className="portfolio-hero-row g-0">
              <Col md={5} className="portfolio-hero-left">
                <div className="portfolio-hero-welcome">
                  <h2 className="portfolio-hero-welcome-title">Welcome</h2>
                  <p className="portfolio-hero-welcome-text">Stores, landing pages, and brands. Let&apos;s work together.</p>
                </div>
              </Col>
              <Col md={7} className="portfolio-hero-right">
                <div className="portfolio-hero-block portfolio-hero-block-gray">
                  <h1 className="portfolio-hero-title">From Concept to Launch</h1>
                  <p className="portfolio-hero-subtitle">Web &amp; digital studio — we design and build sites that work.</p>
                </div>
                <div className="portfolio-hero-block portfolio-hero-block-brown">
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
              </Col>
            </Row>
          </Container>
        </div>
      </header>

      <section className="portfolio-skills">
        <Container>
          <h2 className="portfolio-section-title text-center mb-4">What we use</h2>
          <Row className="g-4 justify-content-center">
            {SKILLS.map((s) => (
              <Col key={s.name} xs={12} sm={6} md={6} lg={3}>
                <Card className="portfolio-skill-card h-100 border-0">
                  <Card.Body className="text-center p-4">
                    <span className="portfolio-skill-icon">{s.icon}</span>
                    <Card.Title className="portfolio-skill-name">{s.name}</Card.Title>
                    <Card.Text className="portfolio-skill-text">{s.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="portfolio" className="portfolio-works">
        <Container>
          <h2 className="portfolio-section-title text-center mb-5">Our Works</h2>
          <Row className="g-4">
            {SITES.map((site) => (
              <Col key={site.id} xs={12} sm={6} lg={4}>
                <Card className="portfolio-work-card border-0 h-100 overflow-hidden">
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
        </div>
      </section>

      <footer className="portfolio-footer">
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
      </footer>
    </div>
  );
}

export default Portfolio;
