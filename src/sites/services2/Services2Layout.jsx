import { useState } from 'react';
import { Link } from 'react-router-dom';
import { name as siteName } from './config';
import './services2.css';

const TABS = [
  {
    id: 'responsive',
    label: 'Responsive',
    items: [
      { title: 'Minimal Design', text: 'Nam feugiat a ante sollicitudin luctus. Quisque eget placerat massa. Ut quis ligula ornare, pellentesque velit eget, vestibulum est. Donec pretium tristique elit eget sodales. Pellentesque posuere.' },
      { title: 'Easy to use', text: 'Aliquam massa massa, consectetur non mattis fringilla, sodales ac turpis. Morbi ac felis sagittis, faucibus mauris vitae, placerat mauris.' },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    items: [
      { title: 'Compatible Browsers', text: 'Nam maximus elit a metus luctus, a faucibus magna mattis. Ut malesuada viverra iaculis. Nunc euismod sit amet neque a tincidunt.' },
      { title: 'User Friendly', text: 'Maecenas maximus velit lorem, quis pharetra turpis fringilla id. Vestibulum tempor facilisis efficitur. Sed nec nisi sit amet nibh pellentesque elementum.' },
      { title: 'HTML5 & CSS3', text: 'In viverra ipsum ornare sapien rhoncus ullamcorper. Vivamus vitae risus ac mi vehicula sagittis. Nulla dictum magna sit amet pharetra aliquam.' },
    ],
  },
  {
    id: 'support',
    label: 'Support',
    items: [
      { title: 'Quick Support', text: 'Mauris rutrum est at fringilla pulvinar. Nam ligula urna, lobortis non scelerisque vel, molestie eu massa. Nullam mattis elit at tortor accumsan.' },
      { title: 'Managed Stuffs', text: 'Quisque ullamcorper sem quis sapien cursus efficitur. Sed id sodales ipsum. Morbi eleifend tempus erat sit amet vehicula. Nulla at posuere tellus, non mattis erat.' },
    ],
  },
];

const TEAM = [
  { name: 'Andrew Orange', role: 'Art Director', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et dolore magna.', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80', up: true },
  { name: 'Catherine Soft', role: 'Senior Manager', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et dolore magna.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', up: false },
  { name: 'Jack Wilson', role: 'CEO / Founder', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et dolore magna.', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80', up: true },
];

const TESTIMONIALS = [
  { quote: 'Vestibulum tempor facilisis efficitur. Sed nec nisi sit amet nibh pellentesque elementum. In viverra ipsum ornare sapien rhoncus ullamcorper.', name: 'Michael', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80' },
  { quote: 'Donec pretium tristique elit eget sodales. Pellentesque posuere, nunc id interdum venenatis, leo odio cursus sapien, ac malesuada nisl libero eget urna.', name: 'Sofia', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80' },
  { quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et dolore magna.', name: 'Monica', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80' },
];

const PLANS = [
  { name: 'Student', price: '$200', period: '/mo', features: ['20 Responsive Designs', '10 Dashboards', '1 TB Storage', '6 TB Bandwidth', '24-hour Support'] },
  { name: 'Business', price: '$350', period: '/mo', features: ['50 Responsive Designs', '30 Dashboards', '2 TB Storage', '12 TB Bandwidth', '15-minute Support'] },
  { name: 'Professional', price: '$550', period: '/mo', features: ['100 Responsive Designs', '60 Dashboards', '5 TB Storage', '25 TB Bandwidth', '1-minute Support'] },
];

export default function Services2Layout() {
  const [activeTab, setActiveTab] = useState('responsive');
  const [testimonialIndex, setTestimonialIndex] = useState(0);
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

  const currentTab = TABS.find((t) => t.id === activeTab) || TABS[0];

  return (
    <div className="services2-root">
      <nav className="services2-nav">
        <div className="services2-container">
          <Link to="/services2" className="services2-logo">{siteName}</Link>
          <ul className="services2-nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#feature">Features</a></li>
            <li><a href="#about">About us</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
            <li className="services2-nav-email"><a href="#contact">Say hello - <span>info@soft.co</span></a></li>
          </ul>
        </div>
      </nav>

      <div className="services2-back-bar">
        <div className="services2-container">
          <Link to="/" className="services2-back-link">← Back to Main Site</Link>
        </div>
      </div>

      <section id="home" className="services2-hero">
        <div className="services2-hero-overlay" />
        <div className="services2-container">
          <div className="services2-hero-content">
            <h3>professional landing page</h3>
            <h1>We help you manage your website successfully!</h1>
            {emailSubmitted ? (
              <p className="services2-hero-success">Thanks! We&apos;ll be in touch.</p>
            ) : (
              <form className="services2-hero-form" onSubmit={handleHeroSubmit}>
                <input type="email" className="services2-hero-input" placeholder="Enter your email" required />
                <button type="submit" className="services2-hero-btn">Get started</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section id="feature" className="services2-feature">
        <div className="services2-container">
          <h1 className="services2-section-title">What you get</h1>
          <div className="services2-feature-inner">
            <div className="services2-feature-tabs-wrap">
              <ul className="services2-tabs">
                {TABS.map((t) => (
                  <li key={t.id}>
                    <button type="button" className={`services2-tab-btn ${activeTab === t.id ? 'services2-tab-active' : ''}`} onClick={() => setActiveTab(t.id)}>{t.label}</button>
                  </li>
                ))}
              </ul>
              <div className="services2-tab-content">
                {currentTab.items.map((item, i) => (
                  <div key={i} className="services2-tab-item">
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="services2-feature-image-wrap">
              <div className="services2-feature-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80)' }} />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="services2-about">
        <div className="services2-container">
          <h1 className="services2-section-title services2-section-title-center">Professional Team for you</h1>
          <div className="services2-team-grid">
            {TEAM.map((m, i) => (
              <div key={i} className={`services2-team-card ${m.up ? 'services2-team-up' : 'services2-team-down'}`}>
                {m.up && <div className="services2-team-img" style={{ backgroundImage: `url(${m.img})` }} />}
                <div className="services2-team-info">
                  <h2>{m.name}</h2>
                  <small>{m.role}</small>
                  <p>{m.text}</p>
                </div>
                {!m.up && <div className="services2-team-img" style={{ backgroundImage: `url(${m.img})` }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonial" className="services2-testimonial">
        <div className="services2-testimonial-grid">
          <div className="services2-testimonial-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80)' }} />
          <div className="services2-testimonial-content">
            <h1 className="services2-section-title">What People Say</h1>
            <div className="services2-testimonial-slider">
              <blockquote className="services2-testimonial-quote">{TESTIMONIALS[testimonialIndex].quote}</blockquote>
              <div className="services2-testimonial-author">
                <div className="services2-testimonial-avatar" style={{ backgroundImage: `url(${TESTIMONIALS[testimonialIndex].img})` }} />
                <h4>{TESTIMONIALS[testimonialIndex].name}</h4>
              </div>
            </div>
            <div className="services2-testimonial-dots">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} type="button" className={`services2-dot ${i === testimonialIndex ? 'services2-dot-active' : ''}`} onClick={() => setTestimonialIndex(i)} aria-label={`Testimonial ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="services2-pricing">
        <div className="services2-container">
          <h1 className="services2-section-title services2-section-title-center">Choose any plan</h1>
          <div className="services2-pricing-grid">
            {PLANS.map((plan, i) => (
              <div key={i} className="services2-pricing-card">
                <div className="services2-pricing-title">
                  <h2>{plan.name}</h2>
                </div>
                <div className="services2-pricing-info">
                  {plan.features.map((f, j) => (
                    <p key={j}>{f}</p>
                  ))}
                </div>
                <div className="services2-pricing-bottom">
                  <span className="services2-pricing-price">{plan.price}{plan.period}</span>
                  <a href="#contact" className="services2-btn">Register now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="services2-contact">
        <div className="services2-container">
          <h1 className="services2-section-title">Say hello to us</h1>
          {contactSubmitted ? (
            <p className="services2-contact-success">Thank you! Your message has been sent.</p>
          ) : (
            <form className="services2-contact-form" onSubmit={handleContactSubmit}>
              <div className="services2-contact-row">
                <input type="text" className="services2-input" placeholder="Full name" name="name" required />
                <input type="email" className="services2-input" placeholder="Email address" name="email" required />
                <button type="submit" className="services2-input services2-submit-btn">Send Message</button>
              </div>
              <textarea className="services2-input services2-textarea" rows={8} placeholder="Your message" name="message" required />
            </form>
          )}
        </div>
      </section>

      <footer className="services2-footer">
        <div className="services2-container">
          <div className="services2-footer-inner">
            <p className="services2-copyright">Copyright © {new Date().getFullYear()} {siteName} - Design: <a href="https://tooplate.com" rel="nofollow noreferrer" target="_blank">Tooplate</a></p>
            <ul className="services2-social">
              <li><a href="#" aria-label="Facebook">f</a></li>
              <li><a href="#" aria-label="Twitter">𝕏</a></li>
              <li><a href="#" aria-label="Instagram">📷</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
