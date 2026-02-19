import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getShopConfig } from '../shops';
import { useCart } from '../../components/common/CartContext';
import './shop4.css';

/**
 * Shop 4 – React version of Electro. Own components and styles only.
 */
export default function Shop4Layout() {
  const config = getShopConfig('shop4');
  const products = config?.products ?? [];
  const { itemCount, addToCart } = useCart();
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    { kicker: 'Save Up To $400', title: 'On Selected Laptops & Desktop Or Smartphone', terms: 'Terms and Condition Apply', img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80' },
    { kicker: 'Save Up To $200', title: 'On Selected Music Accessories', terms: 'Terms and Condition Apply', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80' },
  ];

  const services = [
    { icon: '↻', title: 'Free Return', text: '30 days money back guarantee!' },
    { icon: '✈', title: 'Free Shipping', text: 'Free shipping on all orders' },
    { icon: '🛟', title: 'Support 24/7', text: 'We support online 24 hrs a day' },
    { icon: '🎁', title: 'Receive Gift Card', text: 'Receive gift on orders over $50' },
    { icon: '🔒', title: 'Secure Payment', text: 'We Value Your Security' },
    { icon: '🎧', title: 'Expert Advice', text: 'Free consultation available' },
  ];

  const formatPrice = (p) => (p != null ? `$${parseFloat(p).toFixed(2)}` : '');

  return (
    <div className="shop4-root">
      {/* Topbar */}
      <div className="shop4-topbar">
        <div className="shop4-container">
          <div className="shop4-topbar-left">
            <a href="#">Help</a><small> / </small>
            <a href="#">Support</a><small> / </small>
            <a href="#contact">Contact</a>
          </div>
          <div className="shop4-topbar-center">
            <small>Call Us:</small>
            <a href="tel:+01234567890">(+012) 1234 567890</a>
          </div>
          <div className="shop4-topbar-right">
            <span className="shop4-topbar-account">My Dashboard</span>
          </div>
        </div>
      </div>

      {/* Logo + Search + Cart */}
      <div className="shop4-logo-row">
        <div className="shop4-container">
          <Link to="/shop4" className="shop4-logo">
            <span className="shop4-logo-icon">🛒</span>
            <span className="shop4-logo-text">{config?.name}</span>
          </Link>
          <div className="shop4-search-wrap">
            <input type="text" className="shop4-search-input" placeholder="Search Looking For?" />
            <select className="shop4-search-cat" aria-label="Category">
              <option>All Category</option>
              <option>Electronics</option>
              <option>Accessories</option>
            </select>
            <button type="button" className="shop4-search-btn" aria-label="Search">⌕</button>
          </div>
          <div className="shop4-icons">
            <Link to="/shop4" className="shop4-icon" aria-label="Compare">⇄</Link>
            <Link to="/shop4" className="shop4-icon" aria-label="Wishlist">♥</Link>
            <Link to="/shop4/cart" className="shop4-cart-wrap">
              <span className="shop4-icon">🛒</span>
              <span className="shop4-cart-total">${itemCount > 0 ? itemCount * 1 : '0.00'}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Nav – primary bg */}
      <nav className="shop4-nav">
        <div className="shop4-container">
          <div className="shop4-nav-cat">
            <span className="shop4-nav-cat-label">☰ All Categories</span>
          </div>
          <div className="shop4-nav-links">
            <Link to="/shop4" className="shop4-nav-link">Home</Link>
            <a href="#products" className="shop4-nav-link">Shop</a>
            <Link to="/shop4/cart" className="shop4-nav-link">Shop Cart</Link>
            <Link to="/shop4/checkout" className="shop4-nav-link">Checkout</Link>
            <a href="#contact" className="shop4-nav-link">Contact</a>
          </div>
          <a href="tel:+01234567890" className="shop4-nav-phone">📱 +0123 456 7890</a>
        </div>
      </nav>

      <div className="shop4-back-bar">
        <div className="shop4-container">
          <Link to="/" className="shop4-back-link">← Back to Main Site</Link>
        </div>
      </div>

      {/* Hero – slider + side banner */}
      <section className="shop4-hero">
        <div className="shop4-hero-inner">
          <div className="shop4-slider-wrap">
            <div className="shop4-slider">
              {slides.map((s, i) => (
                <div key={i} className={`shop4-slide ${i === slideIndex ? 'shop4-slide-active' : ''}`}>
                  <div className="shop4-slide-img" style={{ backgroundImage: `url(${s.img})` }} />
                  <div className="shop4-slide-content">
                    <h4>{s.kicker}</h4>
                    <h1>{s.title}</h1>
                    <p>{s.terms}</p>
                    <Link to="/shop4#products" className="shop4-btn shop4-btn-primary">Shop Now</Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="shop4-slider-dots">
              {slides.map((_, i) => (
                <button key={i} type="button" className={`shop4-dot ${i === slideIndex ? 'shop4-dot-active' : ''}`} aria-label={`Slide ${i + 1}`} onClick={() => setSlideIndex(i)} />
              ))}
            </div>
          </div>
          <div className="shop4-hero-banner">
            <div className="shop4-hero-banner-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80)' }} />
            <div className="shop4-hero-banner-offer">
              <span className="shop4-hero-banner-badge">Save $48.00</span>
              <span className="shop4-hero-banner-label">Special Offer</span>
            </div>
            <div className="shop4-hero-banner-product">
              <a href="#products">SmartPhone</a>
              <a href="#products" className="shop4-hero-banner-title">Apple iPad Mini G2356</a>
              <span className="shop4-hero-banner-old">$1,250.00</span>
              <span className="shop4-hero-banner-price">$1,050.00</span>
              <Link to="/shop4#products" className="shop4-btn shop4-btn-primary shop4-btn-sm">Add To Cart</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="shop4-services">
        <div className="shop4-services-grid">
          {services.map((s, i) => (
            <div key={i} className="shop4-service-item">
              <span className="shop4-service-icon">{s.icon}</span>
              <div>
                <h6>{s.title}</h6>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product offer cards */}
      <section className="shop4-offers">
        <div className="shop4-container">
          <div className="shop4-offers-grid">
            <a href="#products" className="shop4-offer-card">
              <div>
                <p className="shop4-offer-muted">Find The Best Camera for You!</p>
                <h3>Smart Camera</h3>
                <p className="shop4-offer-big">40% <span>Off</span></p>
              </div>
              <div className="shop4-offer-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&q=80)' }} />
            </a>
            <a href="#products" className="shop4-offer-card">
              <div>
                <p className="shop4-offer-muted">Find The Best Watches for You!</p>
                <h3>Smart Watch</h3>
                <p className="shop4-offer-big">20% <span>Off</span></p>
              </div>
              <div className="shop4-offer-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&q=80)' }} />
            </a>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="shop4-products" id="products">
        <div className="shop4-container">
          <h1 className="shop4-products-title">Our Products</h1>
          <div className="shop4-product-grid">
            {products.map((product) => {
              const img = product.images?.[0]?.src;
              const price = product.on_sale && product.sale_price ? product.sale_price : product.price;
              return (
                <article key={product.id} className="shop4-product-card">
                  <div className="shop4-product-image-wrap">
                    <div className="shop4-product-image" style={{ backgroundImage: img ? `url(${img})` : 'none' }} />
                    {product.featured && <span className="shop4-product-badge shop4-product-badge-new">New</span>}
                    {product.on_sale && <span className="shop4-product-badge shop4-product-badge-sale">Sale</span>}
                  </div>
                  <div className="shop4-product-body">
                    <h3 className="shop4-product-title">{product.name}</h3>
                    <div className="shop4-product-price-wrap">
                      {product.on_sale && product.regular_price && (
                        <span className="shop4-product-price-old">{formatPrice(product.regular_price)}</span>
                      )}
                      <span className="shop4-product-price">{formatPrice(price)}</span>
                    </div>
                    <button
                      type="button"
                      className="shop4-btn shop4-btn-primary shop4-btn-add"
                      disabled={product.stock_status === 'outofstock'}
                      onClick={() => product.stock_status !== 'outofstock' && addToCart(product)}
                    >
                      {product.stock_status === 'outofstock' ? 'Out of Stock' : 'Add to Cart'}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="shop4-footer" id="contact">
        <div className="shop4-container">
          <div className="shop4-footer-grid">
            <div className="shop4-footer-col">
              <h5>{config?.name}</h5>
              <p>Electronics and gadgets for everyone. Quality and support you can trust.</p>
            </div>
            <div className="shop4-footer-col">
              <h5>Quick Links</h5>
              <Link to="/shop4">Home</Link>
              <a href="#products">Shop</a>
              <Link to="/shop4/cart">Shop Cart</Link>
              <Link to="/shop4/checkout">Checkout</Link>
              <a href="#contact">Contact</a>
            </div>
            <div className="shop4-footer-col">
              <h5>Contact</h5>
              <p>Call Us: <a href="tel:+01234567890">(+012) 1234 567890</a></p>
            </div>
          </div>
          <div className="shop4-footer-bottom">
            <p>© {new Date().getFullYear()} {config?.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
