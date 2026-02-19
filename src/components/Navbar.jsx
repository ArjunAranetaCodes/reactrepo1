import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import './Navbar.css';

function AppNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar fixed-top">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand-custom">
          <span className="brand-text">Spark & Shine</span>
          <span className="brand-subtext">Store</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="#products" className="nav-link-custom">Products</Nav.Link>
            <Nav.Link href="#categories" className="nav-link-custom">Categories</Nav.Link>
            <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex search-form">
            <FormControl
              type="search"
              placeholder="Search products..."
              className="me-2 search-input"
              aria-label="Search"
            />
            <Button variant="outline-light" className="search-button">
              🔍
            </Button>
          </Form>
          <div className="navbar-icons">
            <Button variant="link" className="icon-button">
              👤
            </Button>
            <Button variant="link" className="icon-button">
              🛒
              <span className="cart-badge">0</span>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
