import { useState } from 'react';
import { Link } from 'react-router-dom';
import { name as siteName } from './config';
import './services1.css';

const SLIDES = [
  { subtitle: "Let's make your life happier", title: 'Healthy Living', cta: 'Meet Our Doctors', ctaGray: false, href: '#team', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80' },
  { subtitle: 'Aenean luctus lobortis tellus', title: 'New Lifestyle', cta: 'More About Us', ctaGray: true, href: '#about', img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1600&q=80' },
  { subtitle: 'Pellentesque nec libero nisi', title: 'Your Health Benefits', cta: 'Read Stories', ctaBlue: true, href: '#news', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=80' },
];

const DOCTORS = [
  { name: 'Nate Baston', role: 'General Principal', phone: '010-020-0120', email: 'general@company.com', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80' },
  { name: 'Jason Stewart', role: 'Pregnancy', phone: '010-070-0170', email: 'pregnancy@company.com', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80' },
  { name: 'Miasha Nakahara', role: 'Cardiology', phone: '010-040-0140', email: 'cardio@company.com', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80' },
];

const NEWS = [
  { date: 'March 08, 2018', title: 'About Amazing Technology', excerpt: 'Maecenas risus neque, placerat volutpat tempor ut, vehicula et felis.', author: 'Jeremie Carlson', role: 'CEO / Founder', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&q=80' },
  { date: 'February 20, 2018', title: 'Introducing a new healing process', excerpt: 'Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam et est ligula.', author: 'Jason Stewart', role: 'General Director', img: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=500&q=80' },
  { date: 'January 27, 2018', title: 'Review Annual Medical Research', excerpt: 'Vivamus non nulla semper diam cursus maximus. Pellentesque dignissim.', author: 'Andrio Abero', role: 'Online Advertising', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80' },
];

export default function Services1Layout() {
  const config = { name: siteName };
  const [slideIndex, setSlideIndex] = useState(0);
  const [appointmentSubmitted, setAppointmentSubmitted] = useState(false);

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    setAppointmentSubmitted(true);
  };

  return (
    <div className="services1-root">
      <header className="services1-header">
        <div className="services1-container">
          <div className="services1-header-left">
            <p>Welcome to a Professional Health Care</p>
          </div>
          <div className="services1-header-right">
            <span className="services1-header-icon">📞</span>
            <span>010-060-0160</span>
            <span className="services1-header-icon">📅</span>
            <span>6:00 AM - 10:00 PM (Mon-Fri)</span>
            <span className="services1-header-icon">✉</span>
            <a href="mailto:info@company.com">info@company.com</a>
          </div>
        </div>
      </header>

      <nav className="services1-nav">
        <div className="services1-container">
          <Link to="/services1" className="services1-logo">
            <span className="services1-logo-icon">H</span>ealth Center
          </Link>
          <ul className="services1-nav-links">
            <li><a href="#top">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#team">Doctors</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li className="services1-nav-cta"><a href="#appointment">Make an appointment</a></li>
          </ul>
        </div>
      </nav>

      <div className="services1-back-bar">
        <div className="services1-container">
          <Link to="/" className="services1-back-link">← Back to Main Site</Link>
        </div>
      </div>

      <section id="top" className="services1-hero">
        <div className="services1-slider">
          {SLIDES.map((s, i) => (
            <div
              key={i}
              className={`services1-slide ${i === slideIndex ? 'services1-slide-active' : ''}`}
              style={{ backgroundImage: `url(${s.img})` }}
            >
              <div className="services1-slide-caption">
                <h3>{s.subtitle}</h3>
                <h1>{s.title}</h1>
                <a href={s.href} className={`services1-btn ${s.ctaGray ? 'services1-btn-gray' : ''} ${s.ctaBlue ? 'services1-btn-blue' : ''}`}>{s.cta}</a>
              </div>
            </div>
          ))}
        </div>
        <div className="services1-slider-dots">
          {SLIDES.map((_, i) => (
            <button key={i} type="button" className={`services1-dot ${i === slideIndex ? 'services1-dot-active' : ''}`} aria-label={`Slide ${i + 1}`} onClick={() => setSlideIndex(i)} />
          ))}
        </div>
      </section>

      <section id="about" className="services1-about">
        <div className="services1-container">
          <div className="services1-about-inner">
            <h2>Welcome to Your <span className="services1-logo-icon">H</span>ealth Center</h2>
            <p>Aenean luctus lobortis tellus, vel ornare enim molestie condimentum. Curabitur lacinia nisi vitae velit volutpat venenatis.</p>
            <p>Sed a dignissim lacus. Quisque fermentum est non orci commodo, a luctus urna mattis. Ut placerat, diam a tempus vehicula.</p>
            <figure className="services1-profile">
              <div className="services1-profile-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&q=80)' }} />
              <figcaption>
                <h3>Dr. Neil Jackson</h3>
                <p>General Principal</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="team" className="services1-team">
        <div className="services1-container">
          <h2 className="services1-section-title">Our Doctors</h2>
          <div className="services1-team-grid">
            {DOCTORS.map((d, i) => (
              <div key={i} className="services1-team-card">
                <div className="services1-team-img" style={{ backgroundImage: `url(${d.img})` }} />
                <div className="services1-team-info">
                  <h3>{d.name}</h3>
                  <p>{d.role}</p>
                  <div className="services1-team-contact">
                    <p>📞 {d.phone}</p>
                    <p>✉ <a href={`mailto:${d.email}`}>{d.email}</a></p>
                  </div>
                  <ul className="services1-social">
                    <li><a href="#" aria-label="LinkedIn">in</a></li>
                    <li><a href="#" aria-label="Email">✉</a></li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="services1-news">
        <div className="services1-container">
          <h2 className="services1-section-title services1-section-title-center">Latest News</h2>
          <div className="services1-news-grid">
            {NEWS.map((n, i) => (
              <article key={i} className="services1-news-card">
                <a href="#news" className="services1-news-img-wrap">
                  <div className="services1-news-img" style={{ backgroundImage: `url(${n.img})` }} />
                </a>
                <div className="services1-news-body">
                  <span className="services1-news-date">{n.date}</span>
                  <h3><a href="#news">{n.title}</a></h3>
                  <p>{n.excerpt}</p>
                  <div className="services1-news-author">
                    <div className="services1-news-author-avatar" style={{ backgroundImage: `url(${n.img})` }} />
                    <div className="services1-news-author-info">
                      <h5>{n.author}</h5>
                      <p>{n.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="appointment" className="services1-appointment">
        <div className="services1-container">
          <div className="services1-appointment-grid">
            <div className="services1-appointment-img-wrap">
              <div className="services1-appointment-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80)' }} />
            </div>
            <div className="services1-appointment-form-wrap">
              <h2 className="services1-section-title">Make an appointment</h2>
              {appointmentSubmitted ? (
                <p className="services1-appointment-success">Thank you! We have received your request. Our team will contact you shortly.</p>
              ) : (
                <form className="services1-appointment-form" onSubmit={handleAppointmentSubmit}>
                  <div className="services1-form-row services1-form-row-half">
                    <label htmlFor="s1-name">Name</label>
                    <input type="text" id="s1-name" className="services1-input" placeholder="Full Name" required />
                  </div>
                  <div className="services1-form-row services1-form-row-half">
                    <label htmlFor="s1-email">Email</label>
                    <input type="email" id="s1-email" className="services1-input" placeholder="Your Email" required />
                  </div>
                  <div className="services1-form-row services1-form-row-half">
                    <label htmlFor="s1-date">Select Date</label>
                    <input type="date" id="s1-date" className="services1-input" required />
                  </div>
                  <div className="services1-form-row services1-form-row-half">
                    <label htmlFor="s1-dept">Select Department</label>
                    <select id="s1-dept" className="services1-input">
                      <option>General Health</option>
                      <option>Cardiology</option>
                      <option>Dental</option>
                      <option>Medical Research</option>
                    </select>
                  </div>
                  <div className="services1-form-row">
                    <label htmlFor="s1-phone">Phone Number</label>
                    <input type="tel" id="s1-phone" className="services1-input" placeholder="Phone" />
                  </div>
                  <div className="services1-form-row">
                    <label htmlFor="s1-message">Additional Message</label>
                    <textarea id="s1-message" className="services1-input services1-textarea" rows={5} placeholder="Message" />
                  </div>
                  <button type="submit" className="services1-btn services1-btn-submit">Submit Button</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="services1-map">
        <iframe
          title="Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.3030413476204!2d100.5641230193719!3d13.757206847615207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf51ce6427b7918fc!2sG+Tower!5e0!3m2!1sen!2sth!4v1510722015945"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <footer className="services1-footer">
        <div className="services1-container">
          <div className="services1-footer-grid">
            <div className="services1-footer-col">
              <h4>Contact Info</h4>
              <p>Fusce at libero iaculis, venenatis augue quis, pharetra lorem. Curabitur ut dolor eu elit consequat ultricies.</p>
              <div className="services1-contact-info">
                <p>📞 010-070-0170</p>
                <p>✉ <a href="mailto:info@company.com">info@company.com</a></p>
              </div>
            </div>
            <div className="services1-footer-col">
              <h4>Latest News</h4>
              <div className="services1-footer-news">
                <a href="#news" className="services1-footer-news-item">
                  <span className="services1-footer-news-img" style={{ backgroundImage: `url(${NEWS[0].img})` }} />
                  <span className="services1-footer-news-info">
                    <strong>Amazing Technology</strong>
                    <span>March 08, 2018</span>
                  </span>
                </a>
                <a href="#news" className="services1-footer-news-item">
                  <span className="services1-footer-news-img" style={{ backgroundImage: `url(${NEWS[1].img})` }} />
                  <span className="services1-footer-news-info">
                    <strong>New Healing Process</strong>
                    <span>February 20, 2018</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="services1-footer-col">
              <h4>Opening Hours</h4>
              <div className="services1-opening-hours">
                <p>Monday - Friday <span>06:00 AM - 10:00 PM</span></p>
                <p>Saturday <span>09:00 AM - 08:00 PM</span></p>
                <p>Sunday <span>Closed</span></p>
              </div>
              <ul className="services1-social services1-footer-social">
                <li><a href="#" aria-label="Facebook">f</a></li>
                <li><a href="#" aria-label="Twitter">𝕏</a></li>
                <li><a href="#" aria-label="Instagram">📷</a></li>
              </ul>
            </div>
          </div>
          <div className="services1-footer-bottom">
            <p className="services1-copyright">Copyright © {new Date().getFullYear()} {config.name} | Design: Tooplate</p>
            <div className="services1-footer-links">
              <a href="#">Laboratory Tests</a>
              <a href="#">Departments</a>
              <a href="#">Insurance Policy</a>
              <a href="#">Careers</a>
            </div>
            <a href="#top" className="services1-angle-up" aria-label="Back to top">↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
