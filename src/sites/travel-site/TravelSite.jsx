import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, TwitterX, Instagram, Linkedin } from 'react-bootstrap-icons';
import './travel-site.css';

const DESTINATIONS = [
  { id: 1, title: 'Civita di Bagnoregio', days: 7, persons: 2, price: 128, img: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=600&q=80' },
  { id: 2, title: 'Fort Conger Island', days: 5, persons: 4, price: 339, img: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80' },
  { id: 3, title: 'Barcelona City Beach', days: 6, persons: 4, price: 430, img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' },
];

const ACTIVITIES = [
  { title: 'Special Activities', text: 'Perspiciatis under an omnis iste natus. error sit voluptatem iaculis suscipit.' },
  { title: 'Popper Guideline', text: 'Perspiciatis under an omnis iste natus. error sit voluptatem iaculis suscipit.' },
  { title: 'Travel Arrangement', text: 'Perspiciatis under an omnis iste natus. error sit voluptatem iaculis suscipit.' },
  { title: 'Location Manager', text: 'Perspiciatis under an omnis iste natus. error sit voluptatem iaculis suscipit.' },
];

export default function TravelSite() {
  const [bannerIndex, setBannerIndex] = useState(0);
  const banners = [
    { kicker: 'NATURAL WONDER', title: 'Your Adventure Travel Experts In World!' },
    { kicker: 'NATURAL BEAUTY', title: 'Discover The Most Engaging and Attractive Places' },
    { kicker: 'UNCOVERING STORIES', title: 'Explore the World and Find the Beauty' },
  ];

  return (
    <div className="travel-site-root" style={{ minHeight: '100vh' }}>
      <header className="travel-header">
        <div className="travel-header-top">
          <div className="travel-container travel-header-top-inner">
            <div className="travel-header-top-left">
              <span>info@website.com</span>
              <span>27 Division St, New York, USA</span>
              <span>123 456 7890</span>
            </div>
            <div className="travel-header-top-right">
              <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
              <a href="#" aria-label="Twitter"><TwitterX size={16} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
            </div>
          </div>
        </div>
        <div className="travel-header-nav">
          <div className="travel-container travel-header-nav-inner">
            <Link to="/" className="travel-logo">Terra Nova</Link>
            <nav className="travel-nav">
              <a href="#destinations">Destinations</a>
              <a href="#tours">Tours</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
            <a href="#book" className="travel-btn travel-btn-book">BOOK NOW</a>
          </div>
        </div>
      </header>

      <div className="travel-back-bar">
        <div className="travel-container">
          <Link to="/" className="travel-back-link">← Back to Main Site</Link>
        </div>
      </div>

      <section className="travel-banner">
        <div className="travel-banner-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80)' }} />
        <div className="travel-banner-overlay" />
        <div className="travel-banner-inner travel-container">
          <h5 className="travel-banner-kicker">{banners[bannerIndex].kicker}</h5>
          <h2 className="travel-banner-title">{banners[bannerIndex].title}</h2>
          <a href="#destinations" className="travel-btn travel-btn-white">Read More</a>
        </div>
        <div className="travel-banner-dots">
          {banners.map((_, i) => (
            <button key={i} type="button" className={`travel-dot ${i === bannerIndex ? 'active' : ''}`} aria-label={`Slide ${i + 1}`} onClick={() => setBannerIndex(i)} />
          ))}
        </div>
      </section>

      <section className="travel-section travel-destinations" id="destinations">
        <div className="travel-container">
          <h5 className="travel-section-kicker">Best Places</h5>
          <h2 className="travel-section-title">Popular Destinations</h2>
          <div className="travel-cards-grid">
            {DESTINATIONS.map((d) => (
              <article key={d.id} className="travel-dest-card">
                <div className="travel-dest-image" style={{ backgroundImage: `url(${d.img})` }} />
                <div className="travel-dest-body">
                  <div className="travel-dest-meta">
                    <span>📅 {d.days} Days</span>
                    <span>👤 {d.persons} Persons</span>
                  </div>
                  <h3>{d.title}</h3>
                  <div className="travel-dest-footer">
                    <span className="travel-dest-price">${d.price}</span>
                    <button type="button" className="travel-btn travel-btn-primary">Book Now →</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="travel-section travel-video-cta">
        <div className="travel-video-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80)' }} />
        <div className="travel-video-overlay" />
        <div className="travel-container travel-video-inner">
          <h2 className="travel-video-title">View Latest Video of<br />The Trip</h2>
          <p className="travel-video-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperamad.</p>
          <div className="travel-video-actions">
            <a href="#book" className="travel-btn travel-btn-coral">Book Now →</a>
            <button type="button" className="travel-video-play" aria-label="Play video">▶ See Video</button>
          </div>
        </div>
      </section>

      <section className="travel-section travel-activities" style={{ background: '#f7f7f3' }}>
        <div className="travel-container">
          <div className="travel-activities-grid">
            {ACTIVITIES.map((a, i) => (
              <div key={i} className="travel-activity-card">
                <div className="travel-activity-icon" />
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="travel-section travel-stats" style={{ background: '#f4a38a' }}>
        <div className="travel-container travel-stats-grid">
          <div className="travel-stat"><strong>5,000 +</strong><span>Destinations</span></div>
          <div className="travel-stat"><strong>10,000 +</strong><span>More Trips</span></div>
          <div className="travel-stat"><strong>2,000 +</strong><span>Luxury Hotel</span></div>
          <div className="travel-stat"><strong>1,000</strong><span>Happy Customers</span></div>
        </div>
      </section>

      <section className="travel-section travel-why" id="about">
        <div className="travel-container">
          <h5 className="travel-section-kicker" style={{ color: '#f4a38a' }}>Why Choose Us</h5>
          <h2 className="travel-section-title" style={{ color: '#fff' }}>Get The Best Travel Experience</h2>
        </div>
      </section>

      <footer className="travel-footer" id="contact">
        <div className="travel-container">
          <div className="travel-footer-grid">
            <div className="travel-footer-col">
              <h3>About Info</h3>
              <p>Fusce neque diam, pretium euain, consectetur sagittis velit. Nullaeyi purus ex, tempus et mi et, conseq ultricies erat.</p>
              <div className="travel-footer-social">
                <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
                <a href="#" aria-label="Twitter"><TwitterX size={18} /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
              </div>
            </div>
            <div className="travel-footer-col">
              <h3>Pages</h3>
              <ul>
                <li><a href="#destinations">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#contact">Contact US</a></li>
              </ul>
            </div>
          </div>
          <p className="travel-footer-copy">© Terra Nova Travel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
