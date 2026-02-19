import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Col, Nav, Navbar, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import Logo from '../common/Logo';
import SearchBox from '../common/SearchBox';
import './EcommerceNavbar.css';
import { useCart } from '../common/CartContext';
import { shopSlugs } from '../../sites/shops';

const EcommerceTopbar = () => {
  const { itemCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const pathSeg = location.pathname.split('/')[1];
  const currentShop = shopSlugs.includes(pathSeg) ? pathSeg : 'shop1';

  const handleCartClick = (e) => {
    e.preventDefault();
    navigate(`/${currentShop}/cart`);
  };

  return (
    <div className="container-small">
      <div className="ecommerce-topbar">
        <Navbar className="px-0 py-3">
          <Row className="gx-0 gy-2 w-100 align-items-center">
            <Col xs="auto" className="order-1">
              <Link to="/" className="text-decoration-none">
                <Logo />
              </Link>
            </Col>
            <Col xs={12} md={6} className="order-3 order-md-2">
              <div className="d-flex justify-content-center">
                <SearchBox
                  placeholder="Search..."
                  className="ecommerce-search-box"
                  inputClassName="rounded-pill"
                  size="sm"
                  style={{ width: '100%', maxWidth: '500px' }}
                />
              </div>
            </Col>
            <Col xs="auto" className="order-2 order-md-3 ms-auto">
              <Nav as="ul" className="navbar-nav-icons flex-row me-n2">
                <Nav.Item as="li" className="d-flex align-items-center">
                  <Nav.Link
                    href="#cart"
                    onClick={handleCartClick}
                    className="px-2 icon-indicator icon-indicator-primary"
                  >
                    <FeatherIcon icon="shopping-cart" size={20} />
                    {itemCount > 0 && (
                      <span className="icon-indicator-number">
                        {itemCount}
                      </span>
                    )}
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link
                    href="#notifications"
                    className="dropdown-caret-none nav-link icon-indicator icon-indicator-sm icon-indicator-danger px-2"
                  >
                    <FeatherIcon icon="bell" size={20} />
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link
                    href="#profile"
                    className="dropdown-caret-none nav-link lh-1 px-2"
                  >
                    <FeatherIcon icon="user" size={20} />
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Navbar>
      </div>
    </div>
  );
};

export default EcommerceTopbar;
