import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';
import './Portfolio.css';

const SKILLS = [
  { name: 'WordPress', text: 'Themes, plugins, and headless setups.', icon: '📝' },
  { name: 'React.js', text: 'Fast, modern front-end applications.', icon: '⚛️' },
  { name: 'Java', text: 'Backend services, APIs, and enterprise applications.', icon: '☕' },
];

const SITES = [
  { id: 'phoenix', title: 'Phoenix Store', category: 'STORES', url: '/shop', internal: true, image: 'https://via.placeholder.com/400x280/7c8db5/fff?text=Phoenix+Shop' },
  { id: 'mountain', title: 'Mountain App', category: 'MOBILE APP', url: '#', internal: false, image: 'https://via.placeholder.com/400x280/7c8db5/fff?text=Mountain+App' },
  { id: 'recipes', title: 'Recipes site', category: 'WEB DESIGN', url: '#', internal: false, image: 'https://via.placeholder.com/400x280/7c8db5/fff?text=Recipes+Site' },
  { id: 'fashion', title: 'Fashion Store', category: 'STORES', url: '#', internal: false, image: 'https://via.placeholder.com/400x280/7c8db5/fff?text=Fashion+Store' },
  { id: 'interior', title: 'Interior Studio', category: 'WEB DESIGN', url: '#', internal: false, image: 'https://via.placeholder.com/400x280/7c8db5/fff?text=Interior+Studio' },
  { id: 'personal', title: 'Personal website', category: 'WEB DESIGN', url: '#', internal: false, image: 'https://via.placeholder.com/400x280/7c8db5/fff?text=Personal+Site' },
];

const SOCIAL_LINKS = [
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
];

function Portfolio() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="portfolio-page">
      {/* Hero — full-width banner */}
      <section id="about" className="portfolio-hero">
        <div className="portfolio-hero-banner">
          <Container>
            <div className="portfolio-hero-content">
              <h1 className="portfolio-hero-title">From Concept to Launch</h1>
              <p className="portfolio-hero-subtitle">Let&apos;s work together</p>
              <Button as={Link} to="/shop" variant="primary" size="lg" className="portfolio-hero-btn">
                HIRE US NOW →
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
      </section>

      {/* Skills cards — no section label */}
      <section className="portfolio-skills">
        <Container>
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

      {/* Our Works — 6 project cards */}
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

      {/* Get in Touch — form left, illustration right */}
      <section className="portfolio-contact" id="contact">
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={6}>
              <h2 className="portfolio-section-title mb-4">Get in Touch</h2>
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
      </section>

      {/* Footer */}
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
