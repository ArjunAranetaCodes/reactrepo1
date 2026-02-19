import { Link, useLocation } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './PortfolioHeader.css';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/', hash: '#about' },
  { label: 'Our Works', path: '/', hash: '#portfolio' },
  { label: 'Our Blog', path: '/', hash: '#contact' },
];

function PortfolioHeader() {
  const location = useLocation();

  const handleClick = (e, item) => {
    if (item.hash && location.pathname === '/') {
      e.preventDefault();
      const el = document.querySelector(item.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="portfolio-header">
      <Container>
        <Navbar className="portfolio-navbar px-0 py-3" expand="md">
          <Navbar.Brand as={Link} to="/" className="portfolio-logo">
            <span className="portfolio-logo-box">aawebstudios</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="portfolio-nav" className="portfolio-nav-toggle" />
          <Navbar.Collapse id="portfolio-nav" className="justify-content-end">
            <Nav as="ul" className="portfolio-nav">
              {NAV_ITEMS.map((item) => (
                <Nav.Item as="li" key={item.label}>
                  {item.hash ? (
                    <a
                      href={item.hash}
                      className="portfolio-nav-link"
                      onClick={(e) => handleClick(e, item)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.path} className="portfolio-nav-link">
                      {item.label}
                    </Link>
                  )}
                </Nav.Item>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}

export default PortfolioHeader;
