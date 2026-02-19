import { Link } from 'react-router-dom';
import { Facebook, TwitterX, Instagram, Linkedin } from 'react-bootstrap-icons';
import { getShopConfig } from '../shops';
import { useCart } from '../../components/common/CartContext';
import { categoryIcons, categoryOrder } from './CategoryIcons';

/**
 * Shop 2 – Custom layout and styles (from sites/shop template).
 * Uses its own header, hero, categories, product list, welcome, footer.
 */
export default function Shop2Layout() {
  const config = getShopConfig('shop2');
  const products = config?.products ?? [];
  const { addToCart } = useCart();

  return (
    <>
      <header className="site-header">
        <div className="header-top" style={{ backgroundColor: '#afdb4a' }}>
          <div className="header-top-inner">
            <div className="header-top-left">
              <a href="tel:123456789">123456789</a>
              <span className="header-icon" style={{ marginLeft: '2rem' }} />
              <a href="mailto:aawebstudios@gmail.com">aawebstudios@gmail.com</a>
            </div>
            <div className="header-top-right">
              <a href="#" className="social-link" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" className="social-link" aria-label="Twitter"><TwitterX size={18} /></a>
              <a href="#" className="social-link" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" className="social-link" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>
        <div className="header-main">
          <div className="header-main-inner">
            <Link to="/" className="logo">{config?.name ?? 'Shop 2'}</Link>
            <nav className="nav-main">
              <Link to="/">Home</Link>
              <a href="#products">Shop</a>
              <a href="#products">Products</a>
              <a href="#welcome">About</a>
              <a href="#contact">Contact</a>
            </nav>
            <Link to="/shop2/cart" className="btn btn-cart">Cart</Link>
          </div>
        </div>
      </header>

      <div className="header-back-bar">
        <div className="header-back-inner">
          <Link to="/" className="header-back-link">← Back to Main Site</Link>
        </div>
      </div>

      <main id="top">
        <section className="hero">
          <div className="hero-bg" style={{ backgroundImage: 'url(/shop-banner.jpg)' }} />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="hero-label">New Collection</p>
            <h1 className="hero-title">
              Shop the Latest
              <br />
              Trends Online
            </h1>
            <p className="hero-text">
              Free shipping on orders over $50. Discover quality products at great prices.
            </p>
            <a href="#products" className="btn btn-primary">Shop Now</a>
          </div>
        </section>

        <section className="section section-categories" id="categories">
          <div className="section-inner">
            <div className="categories-grid">
              <div className="categories-cards">
                {categoryOrder.map((label) => (
                  <a href="#products" key={label} className="category-card">
                    <div className="category-card-icon">
                      {categoryIcons[label]}
                    </div>
                    <h3>{label}</h3>
                  </a>
                ))}
              </div>
              <div className="categories-sidebar">
                <p className="section-label">Shop Categories</p>
                <h2 className="section-title">We Have Everything You Need</h2>
                <p className="section-desc">
                  Browse our curated selection. Fast delivery and easy returns.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-products" id="products">
          <div className="section-inner">
            <p className="section-label">Our Range</p>
            <h2 className="section-title section-title-center">Our Products</h2>
            <p className="section-desc section-desc-center">
              Professional-grade products for home and workplace.
            </p>
            <ul className="product-list">
              {products.map((product) => (
                <li key={product.id} className="product-card">
                  {product.images?.[0]?.src ? (
                    <img src={product.images[0].src} alt={product.name} className="product-photo" />
                  ) : (
                    <div className="product-image" aria-hidden="true">{product.name.slice(0, 12)}</div>
                  )}
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-desc">{product.short_description || product.description || ''}</p>
                    <p className="product-price">${parseFloat(product.price || 0).toFixed(2)}</p>
                    <button
                      type="button"
                      className="btn btn-add"
                      onClick={() => product.stock_status !== 'outofstock' && addToCart(product)}
                      disabled={product.stock_status === 'outofstock'}
                    >
                      {product.stock_status === 'outofstock' ? 'Out of Stock' : 'Add to Cart'}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section-welcome" id="welcome">
          <div className="section-inner">
            <div className="welcome-grid">
              <div className="welcome-content">
                <p className="section-label">Welcome to {config?.name}</p>
                <h2 className="section-title">Your Shopping Journey Starts Here</h2>
                <p className="section-desc">
                  We bring you the best products with trusted service. Shop with confidence.
                </p>
                <ul className="feature-list">
                  <li>✓ Free Shipping</li>
                  <li>✓ Easy Returns</li>
                  <li>✓ Secure Payment</li>
                </ul>
                <a href="#products" className="btn btn-primary">Shop Now</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="footer-main">
          <div className="footer-inner">
            <div className="footer-col">
              <h3>Main Menu</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><a href="#products">Shop</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#welcome">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Contact Us</h3>
              <p><a href="mailto:aawebstudios@gmail.com">aawebstudios@gmail.com</a></p>
            </div>
            <div className="footer-col">
              <h3>About Us</h3>
              <p>Quality products, great prices. Shop with confidence at {config?.name}.</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p>{config?.name}</p>
            <p>© {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
