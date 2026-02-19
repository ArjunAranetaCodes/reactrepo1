import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <footer className="custom-footer">
      <Container>
        <Row className="footer-content">
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="footer-brand">
              <span className="brand-text">Spark & Shine</span>
              <span className="brand-subtext">Store</span>
            </h5>
            <p className="footer-description">
              Your one-stop destination for quality products. We bring you the best deals and 
              latest trends in one place.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                📘
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                🐦
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                📷
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                💼
              </a>
            </div>
          </Col>
          <Col md={2} className="mb-4 mb-md-0">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={2} className="mb-4 mb-md-0">
            <h6 className="footer-heading">Customer Service</h6>
            <ul className="footer-links">
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#shipping">Shipping</a></li>
              <li><a href="#returns">Returns</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h6 className="footer-heading">Contact Info</h6>
            <ul className="footer-contact">
              <li>
                📍 <span>123 Store Street, City, State 12345</span>
              </li>
              <li>
                📞 <span>+1 (555) 123-4567</span>
              </li>
              <li>
                ✉️ <span>info@phoenixstore.com</span>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="footer-bottom">
              <p className="copyright">
                &copy; {new Date().getFullYear()} Spark & Shine. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
