import { NavLink, useLocation } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './PortfolioHeader.css';

const NAV_ITEMS = [
  { label: 'Home', path: '/', end: true },
  { label: 'Who we are', path: '/who-we-are' },
  { label: 'Our Works', path: '/', hash: '#portfolio' },
  { label: 'How we work', path: '/', hash: '#how-we-work' },
  { label: 'Our Blog', path: '/', hash: '#contact' },
];

function PortfolioHeader() {
  const location = useLocation();

  const handleHashClick = (e, hash) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="portfolio-header">
      <Container>
        <Navbar className="portfolio-navbar px-0 py-3" expand="md">
          <Navbar.Brand as={NavLink} to="/" className="portfolio-logo">
            <span className="portfolio-logo-box">aawebstudios</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="portfolio-nav" className="portfolio-nav-toggle" />
          <Navbar.Collapse id="portfolio-nav" className="justify-content-end">
            <Nav as="ul" className="portfolio-nav">
              {NAV_ITEMS.map((item) => (
                <Nav.Item as="li" key={item.label}>
                  {item.hash ? (
                    <a
                      href={`${item.path}${item.hash}`}
                      className="portfolio-nav-link"
                      onClick={(e) => handleHashClick(e, item.hash)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <NavLink
                      to={item.path}
                      end={item.end ?? false}
                      className={({ isActive }) =>
                        `portfolio-nav-link${isActive ? ' portfolio-nav-link-active' : ''}`
                      }
                    >
                      {item.label}
                    </NavLink>
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
