import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useLayoutEffect, useRef } from 'react';
import {
  Card,
  Col,
  Dropdown,
  Nav,
  NavItem,
  Navbar,
  Row
} from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';
import {
  faAngleDown,
  faAngleRight,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import './EcommerceNavbar.css';

const initNavItems = [
  {
    id: 1,
    label: 'Home',
    url: '#home'
  },
  {
    id: 2,
    label: 'Products',
    url: '#products'
  },
  {
    id: 3,
    label: 'Categories',
    url: '#categories'
  },
  {
    id: 4,
    label: 'About',
    url: '#about'
  },
  {
    id: 5,
    label: 'Contact',
    url: '#contact'
  }
];

// Simplified categories data
const categories = [
  {
    title: 'Electronics',
    icon: 'smartphone',
    sections: [
      { label: 'Phones', url: '#phones' },
      { label: 'Laptops', url: '#laptops' },
      { label: 'Tablets', url: '#tablets' }
    ]
  },
  {
    title: 'Fashion',
    icon: 'shopping-bag',
    sections: [
      { label: 'Men', url: '#men' },
      { label: 'Women', url: '#women' },
      { label: 'Kids', url: '#kids' }
    ]
  },
  {
    title: 'Home & Garden',
    icon: 'home',
    sections: [
      { label: 'Furniture', url: '#furniture' },
      { label: 'Decor', url: '#decor' },
      { label: 'Garden', url: '#garden' }
    ]
  }
];

const EcommerceNavbar = ({ onNavigate }) => {
  const containerRef = useRef(null);
  const otherElsRef = useRef(null);
  const moreBtnRef = useRef(null);
  const navItemsRef = useRef([]);
  const dropdownItemsRef = useRef([]);

  const updateItems = useCallback(() => {
    const otherElsWidth = otherElsRef.current?.clientWidth || 0;
    const containerWidth = containerRef.current?.clientWidth || 0;
    const moreBtnWidth = moreBtnRef.current?.clientWidth || 0;

    let totalItemsWidth = 0;
    if (moreBtnRef.current) {
      moreBtnRef.current.style.display = 'none';
    }
    navItemsRef.current.forEach((item, index) => {
      const dropdownItem = dropdownItemsRef.current[index];
      if (item) item.removeAttribute('style');
      if (item && dropdownItem && moreBtnRef.current) {
        totalItemsWidth = totalItemsWidth + item.clientWidth + 32;
        if (
          otherElsWidth + totalItemsWidth + moreBtnWidth + 50 >
          containerWidth
        ) {
          item.style.display = 'none';
          dropdownItem.style.display = 'block';
          moreBtnRef.current.style.display = 'block';
        } else {
          item.style.display = 'block';
          dropdownItem.style.display = 'none';
        }
      }
    });
  }, []);

  useLayoutEffect(() => {
    updateItems();
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('resize', updateItems);
    return () => {
      window.removeEventListener('resize', updateItems);
    };
  }, [updateItems]);

  return (
    <Navbar className="ecommerce-navbar p-0">
      <div
        className="container-small d-flex flex-between-center flex-nowrap w-100"
        ref={containerRef}
      >
        <Dropdown ref={otherElsRef} className="me-4">
          <Dropdown.Toggle
            variant=""
            className="text-body ps-0 pe-5 text-nowrap dropdown-toggle dropdown-caret-none"
          >
            <FontAwesomeIcon icon={faBars} className="me-2" />
            Category
          </Dropdown.Toggle>

          <Dropdown.Menu className="border border-translucent py-0 category-dropdown-menu">
            <Card className="border-0">
              <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <Card.Body className="p-4 pb-3">
                  <Row className="gx-4 gy-4 mb-4">
                    {categories.map(category => (
                      <Col xs={12} sm={6} md={4} key={category.title}>
                        <div className="d-flex align-items-center mb-3">
                          <FeatherIcon
                            icon={category.icon}
                            className="text-primary me-2"
                            style={{ strokeWidth: 3 }}
                            size={16}
                          />
                          <h6 className="text-body-highlight mb-0 text-nowrap">
                            {category.title}
                          </h6>
                        </div>
                        <div className="ms-n2">
                          {category.sections.map(section => (
                            <a
                              key={section.label}
                              href={section.url}
                              className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                            >
                              {section.label}
                            </a>
                          ))}
                        </div>
                      </Col>
                    ))}
                  </Row>
                  <div className="text-center border-top border-translucent pt-3">
                    <a className="fw-bold text-decoration-none" href="#!">
                      See all Categories
                      <FontAwesomeIcon icon={faAngleRight} className="ms-1" />
                    </a>
                  </div>
                </Card.Body>
              </div>
            </Card>
          </Dropdown.Menu>
        </Dropdown>
        <Nav as="ul" className="justify-content-end align-items-center gap-5 ms-auto">
          {initNavItems.map((item, index) => (
            <Nav.Item
              className="gap-3"
              key={item.id}
              ref={(el) => {
                navItemsRef.current[index] = el;
              }}
            >
              <Nav.Link
                key={item.id}
                href={item.url}
                className={classNames('nav-link')}
                onClick={(e) => {
                  if (typeof onNavigate === 'function') {
                    e.preventDefault();
                    onNavigate(item.label.toLowerCase());
                  }
                }}
              >
                {item.label}
              </Nav.Link>
            </Nav.Item>
          ))}
          <Dropdown align="end" as={NavItem} ref={moreBtnRef}>
            <Dropdown.Toggle
              variant=""
              className="fw-bold nav-link dropdown-caret-none"
            >
              More
              <FontAwesomeIcon icon={faAngleDown} className="ms-2" />
            </Dropdown.Toggle>

            <Dropdown.Menu align="end" renderOnMount>
              {initNavItems.map((item, index) => (
                <Dropdown.Item
                  key={item.id}
                  href={item.url}
                  ref={(el) => {
                    dropdownItemsRef.current[index] = el;
                  }}
                  onClick={(e) => {
                    if (typeof onNavigate === 'function') {
                      e.preventDefault();
                      onNavigate(item.label.toLowerCase());
                    }
                  }}
                >
                  {item.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </div>
    </Navbar>
  );
};

export default EcommerceNavbar;
