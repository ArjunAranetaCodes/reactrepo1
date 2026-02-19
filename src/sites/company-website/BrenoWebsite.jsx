import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook, TwitterX, Instagram, Linkedin, GeoAlt, Award, Envelope, Search,
  ChevronLeft, ChevronRight, Heart, HandThumbsUp, Flower1, Play, Lightning,
  People, Leaf, Tree, Bug, Sun, Droplet, Wind, LightningCharge, GlobeAmericas,
  Recycle, Clock, ArrowRight, ArrowUp, ChevronRight as ChevronRightIcon,
} from 'react-bootstrap-icons';
import './company-website.css';

function scrollToSection(e, id) {
  e?.preventDefault();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function BrenoWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
      const sections = ['home', 'about', 'causes', 'offer', 'events', 'testimonials', 'news'];
      let current = 'home';
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.pageYOffset >= el.offsetTop - 200) current = id;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', id: 'home', label: 'Home' },
    { href: '#about', id: 'about', label: 'About' },
    { href: '#services', id: 'services', label: 'Services' },
    { href: '#events', id: 'events', label: 'Events' },
    { href: '#portfolio', id: 'portfolio', label: 'Portfolio' },
    { href: '#blog', id: 'blog', label: 'Blog' },
    { href: '#contact', id: 'contact', label: 'Contact Us' },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${newsletterEmail}!`);
    setNewsletterEmail('');
  };

  return (
    <div className="breno-root" style={{ minHeight: '100vh' }}>
      <header className="site-header">
        <div className="top-bar">
          <div className="container top-bar-content">
            <div className="top-left">Providing awesome since 2001 years</div>
            <div className="top-right">
              <span className="top-help">Have any question? +(528) 456-7592</span>
              <div className="social-links">
                <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
                <a href="#" aria-label="Twitter"><TwitterX size={16} /></a>
                <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="info-bar">
          <div className="container info-bar-content">
            <div className="brand">
              <div className="brand-mark">B</div>
              <div className="brand-name">RENO</div>
            </div>
            <div className="info-items">
              <div className="info-item">
                <span className="info-icon"><GeoAlt size={18} /></span>
                <div>
                  <div className="info-title">Main Office</div>
                  <div className="info-text">236 advice the good, CA</div>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon"><Award size={18} /></span>
                <div>
                  <div className="info-title">Trusted By</div>
                  <div className="info-text">200000 User</div>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon"><Envelope size={18} /></span>
                <div>
                  <div className="info-title">Email</div>
                  <div className="info-text">info@example.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-bar">
          <div className="container nav-bar-content">
            <button type="button" className="hamburger" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
              <span /><span /><span />
            </button>
            <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
              {navLinks.map(({ href, id, label }) => (
                <li key={id}>
                  <a href={href} className={`nav-link ${activeSection === id ? 'active' : ''}`} onClick={(e) => { scrollToSection(e, id); setMenuOpen(false); }}>{label}</a>
                </li>
              ))}
            </ul>
            <div className="nav-actions">
              <div className="search-box">
                <input type="text" placeholder="Search for.." aria-label="Search" />
                <Search size={16} />
              </div>
              <a href="#donate" className="btn donate-btn">Donate</a>
            </div>
          </div>
        </div>
      </header>

      <div className="header-back-bar">
        <div className="container header-back-inner">
          <Link to="/" className="header-back-link">← Back to Main Site</Link>
        </div>
      </div>

      <section id="home" className="hero">
        <div className="hero-bg">
          <div className="hero-overlay" />
          <div className="hero-arrows">
            <button type="button" className="arrow-btn" aria-label="Previous"><ChevronLeft size={18} /></button>
            <button type="button" className="arrow-btn" aria-label="Next"><ChevronRight size={18} /></button>
          </div>
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="hero-kicker">SAVE THE WORLD</p>
              <h1 className="hero-title">Planting Trees In Your Surrounding</h1>
              <div className="hero-underline"><span /><span /></div>
              <a href="#about" className="btn btn-primary hero-cta" onClick={(e) => scrollToSection(e, 'about')}>Read More</a>
            </div>
          </div>
        </div>
        <div className="hero-cards">
          <div className="container cards-grid">
            <div className="card-item card-white">
              <div className="card-icon"><Heart size={28} /></div>
              <h3>Give Donation</h3>
              <p>Every donation drives our efforts to build sustainable communities, develop green energy solutions.</p>
            </div>
            <div className="card-item card-featured">
              <div className="card-icon"><HandThumbsUp size={28} /></div>
              <h3>Become Volunteer</h3>
              <p>Every action you take reduces carbon footprints and promotes clean energy and greener habits.</p>
            </div>
            <div className="card-item card-white">
              <div className="card-icon"><Flower1 size={28} /></div>
              <h3>Quick Fundraise</h3>
              <p>Your donation directly supports renewable projects, green infrastructure, and ecosystem restoration.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container about-grid">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80" alt="Kids planting tree" />
            <button type="button" className="watch-btn">
              <span className="watch-circle"><Play size={20} /></span>
              <span className="watch-text">Want to Watch<br />How We Work</span>
            </button>
          </div>
          <div className="about-copy">
            <p className="eyebrow">ABOUT US</p>
            <h2 className="about-title">We are Taking Small Steps to Make Earth Better Planet</h2>
            <div className="about-divider"><span /><span /></div>
            <p className="about-desc">
              From installing solar panels in rural areas to developing green infrastructure for cities, we ensure that every small effort contributes to global sustainability goals.
            </p>
            <ul className="about-list">
              <li><Lightning size={18} /> Encourage energy efficiency, and promote environmental actions.</li>
              <li><People size={18} /> Local organizations, governments, and volunteers to expand eco-education.</li>
              <li><Leaf size={18} /> Drive collective participation in building a sustainable energy future.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-overlay" />
        <div className="container stats-grid">
          <div className="stat-item">
            <div className="stat-icon"><Tree size={28} /></div>
            <div className="stat-number">20403+</div>
            <div className="stat-label">Tree Saved</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><Bug size={28} /></div>
            <div className="stat-number">4695+</div>
            <div className="stat-label">Animals Saved</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><Sun size={28} /></div>
            <div className="stat-number">3235+</div>
            <div className="stat-label">Solar Installed</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><Droplet size={28} /></div>
            <div className="stat-number">6452+</div>
            <div className="stat-label">Water Resources</div>
          </div>
        </div>
      </section>

      <section className="causes" id="causes">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Our Recent Causes</h2>
            <div className="section-underline"><span /><span /></div>
          </div>
          <div className="causes-grid">
            {[
              { img: 'https://images.unsplash.com/photo-1470093851219-69951fcbb533?auto=format&fit=crop&w=400&q=80', title: 'Animal Feed and Food Bank', raised: '$50,000.00', goal: '$78,000.00', pct: 65, featured: false },
              { img: 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=400&q=80', title: 'Save The White Tigers', raised: '$44,000.00', goal: '$98,000.00', pct: 45, featured: false },
              { img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80', title: 'Save 40,000 Elephants', raised: '$34,000.00', goal: '$54,000.00', pct: 62, featured: true },
            ].map((c) => (
              <article key={c.title} className={`cause-card ${c.featured ? 'cause-featured' : ''}`}>
                <div className="cause-thumb">
                  <img src={c.img} alt={c.title} />
                </div>
                <h3 className="cause-title">{c.title}</h3>
                <p className="cause-text">Breno Green Energy&apos;s commitment to sustainable nutrition and community.</p>
                <div className="cause-progress">
                  <div className="cause-bar" style={{ width: `${c.pct}%` }} />
                </div>
                <div className="cause-meta">
                  <span className="cause-raised">{c.raised}</span>
                  <span className="cause-goal">donated of {c.goal} goal</span>
                </div>
                <button type="button" className={`btn cause-btn ${c.featured ? 'dark-btn' : 'btn-primary'}`}>Donate</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="offer" id="offer">
        <div className="container">
          <div className="offer-head">
            <h2 className="section-title">What We Offer</h2>
            <div className="section-underline"><span /><span /></div>
            <p className="offer-subtext">Our offerings are designed to meet diverse energy needs—whether it&apos;s residential solar installations, commercial green energy systems, or industrial power optimization.</p>
          </div>
          <div className="offer-grid">
            {[
              { icon: Wind, title: 'Wind Energy', text: 'As one of the leading renewable energy providers.' },
              { icon: LightningCharge, title: 'Renewable Energy', text: 'Powering a greener tomorrow with sustainable solutions.' },
              { icon: Sun, title: 'Solar Energy', text: 'Transforming sunlight into sustainable power.' },
              { icon: GlobeAmericas, title: 'Solar Energy', text: 'Harnessing the power of the sun for a sustainable future.' },
              { icon: Leaf, title: 'Energy Saving', text: 'Smart solutions for a sustainable tomorrow.' },
              { icon: Recycle, title: 'Green Technology', text: 'Innovating today for a sustainable tomorrow.' },
            ].map((o, i) => (
              <div key={`offer-${i}`} className="offer-card">
                <div className="corner-tag" />
                <div className="offer-icon"><o.icon size={24} /></div>
                <div className="offer-body">
                  <h3>{o.title}</h3>
                  <p>{o.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="events" id="events">
        <div className="container">
          <div className="section-head events-head">
            <h2 className="section-title">Upcoming Events</h2>
            <div className="section-underline"><span /><span /></div>
          </div>
          <div className="events-grid">
            {[
              { img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80', date: 'March 3, 2030', time: '6.00 am', title: 'Native Tree Planting Contest' },
              { img: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80', date: 'February 5, 2030', time: '12.00 pm', title: 'Environment Property Manage' },
              { img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80', date: 'June 3, 2030', time: '5.00 am', title: 'Green Nature Love & Chemistry' },
            ].map((ev) => (
              <article key={ev.title} className="event-card">
                <div className="event-thumb">
                  <img src={ev.img} alt={ev.title} />
                </div>
                <div className="event-meta">
                  <span className="event-date">{ev.date}</span>
                  <span className="event-time"><Clock size={14} /> {ev.time}</span>
                </div>
                <h3 className="event-title">{ev.title}</h3>
                <a href="#" className="event-link">Read More <ArrowRight size={14} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials" id="testimonials">
        <div className="testimonials-overlay" />
        <div className="container testimonials-content">
          <div className="testimonial-left">
            <p className="eyebrow">Testimonials</p>
            <div className="section-underline"><span /><span /></div>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <img className="testimonial-avatar" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Johny" />
                <div>
                  <div className="testimonial-name">Johny</div>
                  <div className="testimonial-role">Manager</div>
                </div>
              </div>
              <p className="testimonial-text">&ldquo;Switching to this green energy solution has been a game-changer for our business. Their sustainable energy systems are efficient, cost-effective, and reliable.&rdquo;</p>
              <div className="testimonial-dots">
                <span className="dot active" /><span className="dot" /><span className="dot" /><span className="dot" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="news" id="news">
        <div className="container">
          <div className="section-head news-head">
            <h2 className="section-title">Latest News</h2>
            <div className="section-underline"><span /><span /></div>
          </div>
          <div className="news-grid">
            {[
              { img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80', title: 'Technology Can Help Save Our Environment' },
              { img: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80', title: 'Cook Meals Without Cooking The Animals' },
              { img: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=900&q=80', title: 'Forest Elephants In Danger With New Roads' },
            ].map((n) => (
              <article key={n.title} className="news-card">
                <div className="news-thumb">
                  <img src={n.img} alt={n.title} />
                  <div className="news-date">
                    <span className="news-day">July 3,</span>
                    <span className="news-year">2018</span>
                  </div>
                </div>
                <div className="news-body">
                  <h3>{n.title}</h3>
                  <a href="#" className="news-link">Continue Reading <ArrowRight size={14} /></a>
                </div>
              </article>
            ))}
          </div>
          <div className="news-dots">
            <span className="dot active" /><span className="dot" /><span className="dot" />
          </div>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col footer-about">
              <div className="footer-logo">
                <div className="brand-mark">B</div>
                <div className="brand-name">RENO</div>
              </div>
              <p className="footer-desc">Breno Is a Fully Responsive Green Energy Fund Raising Theme.</p>
              <div className="footer-social">
                <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
                <a href="#" aria-label="Twitter"><TwitterX size={18} /></a>
                <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
              </div>
            </div>
            <div className="footer-col">
              <h3 className="footer-heading">Quick Links</h3>
              <div className="footer-underline" />
              <div className="footer-links-grid">
                <ul className="footer-links">
                  <li><a href="#home"><ChevronRightIcon size={12} /> Home</a></li>
                  <li><a href="#about"><ChevronRightIcon size={12} /> About</a></li>
                  <li><a href="#services"><ChevronRightIcon size={12} /> Services</a></li>
                  <li><a href="#portfolio"><ChevronRightIcon size={12} /> Portfolio</a></li>
                  <li><a href="#news"><ChevronRightIcon size={12} /> News</a></li>
                </ul>
                <ul className="footer-links">
                  <li><a href="#"><ChevronRightIcon size={12} /> Privacy Policy</a></li>
                  <li><a href="#"><ChevronRightIcon size={12} /> Appointment</a></li>
                  <li><a href="#"><ChevronRightIcon size={12} /> Careers</a></li>
                  <li><a href="#events"><ChevronRightIcon size={12} /> Events</a></li>
                  <li><a href="#contact"><ChevronRightIcon size={12} /> Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-col">
              <h3 className="footer-heading">Blog List</h3>
              <div className="footer-underline" />
              <div className="footer-blog-list">
                <div className="footer-blog-item">
                  <a href="#" className="footer-blog-title">Technology Can Help Save Our Environment</a>
                  <span className="footer-blog-date">JULY 3, 2018</span>
                </div>
                <div className="footer-blog-item">
                  <a href="#" className="footer-blog-title">Cook Meals Without Cooking The Animals</a>
                  <span className="footer-blog-date">JULY 3, 2018</span>
                </div>
              </div>
            </div>
            <div className="footer-col">
              <h3 className="footer-heading">Get In Touch</h3>
              <div className="footer-underline" />
              <p className="footer-touch-text">If you Want to more information about us just enter your email</p>
              <form className="footer-newsletter" onSubmit={handleNewsletterSubmit}>
                <input type="email" placeholder="Email Address" required value={newsletterEmail} onChange={(e) => setNewsletterEmail(e.target.value)} />
                <button type="submit" className="footer-go-btn">GO</button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container footer-bottom-content">
            <p className="footer-copyright">Copyrights © 2025 Breno. Designed by <a href="#" className="footer-link">Zozothemes</a></p>
            <button type="button" className="scroll-top" aria-label="Scroll to top" style={{ display: showScrollTop ? 'flex' : 'none' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
