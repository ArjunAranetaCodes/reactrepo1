import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getShopConfig } from '../shops';
import { useCart } from '../../components/common/CartContext';
import './shop3.css';

/**
 * Shop 3 – React version of MultiShop. Own components and styles only (no shared ProductCards/Cart/Checkout).
 */
export default function Shop3Layout() {
  const config = getShopConfig('shop3');
  const products = config?.products ?? [];
  const { itemCount, addToCart } = useCart();
  const [slideIndex, setSlideIndex] = useState(0);

  const categories = [
    { name: 'Dresses', count: 100, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&q=80' },
    { name: 'Shirts', count: 80, img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&q=80' },
    { name: 'Jeans', count: 60, img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=200&q=80' },
    { name: 'Shoes', count: 90, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80' },
  ];

  const slides = [
    { title: 'Men Fashion', subtitle: "Discover the latest trends in men's fashion", img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=900&q=80' },
    { title: 'Women Fashion', subtitle: "Explore our collection of women's clothing", img: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=900&q=80' },
    { title: 'Kids Fashion', subtitle: 'Cute and comfortable clothing for kids', img: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=900&q=80' },
  ];

  const formatPrice = (p) => (p != null ? `$${parseFloat(p).toFixed(2)}` : '');

  return (
    <div className="shop3-root">
      <div className="shop3-topbar">
        <div className="shop3-container">
          <div className="shop3-topbar-left">
            <Link to="/">About</Link>
            <a href="#contact">Contact</a>
            <a href="#">Help</a>
            <a href="#">FAQs</a>
          </div>
          <div className="shop3-topbar-right">
            <span className="shop3-account-label">My Account</span>
          </div>
        </div>
      </div>

      <div className="shop3-logo-row">
        <div className="shop3-container">
          <Link to="/shop3" className="shop3-logo">
            <span className="shop3-logo-multi">Multi</span>
            <span className="shop3-logo-shop">Shop</span>
          </Link>
          <div className="shop3-search-wrap">
            <input type="text" className="shop3-search" placeholder="Search for products" />
            <span className="shop3-search-icon">⌕</span>
          </div>
          <div className="shop3-phone">
            <p className="shop3-phone-label">Customer Service</p>
            <p className="shop3-phone-num">+012 345 6789</p>
          </div>
        </div>
      </div>

      <nav className="shop3-nav">
        <div className="shop3-container">
          <div className="shop3-nav-left">
            <span className="shop3-cat-btn">Categories</span>
            <Link to="/shop3" className="shop3-nav-link">Home</Link>
            <a href="#products" className="shop3-nav-link">Shop</a>
            <a href="#contact" className="shop3-nav-link">Contact</a>
          </div>
          <div className="shop3-nav-right">
            <Link to="/shop3/cart" className="shop3-cart-link">
              Cart {itemCount > 0 && <span className="shop3-cart-badge">{itemCount}</span>}
            </Link>
          </div>
        </div>
      </nav>

      <div className="shop3-back-bar">
        <div className="shop3-container">
          <Link to="/" className="shop3-back-link">← Back to Main Site</Link>
        </div>
      </div>

      <section className="shop3-hero">
        <div className="shop3-hero-grid">
          <div className="shop3-carousel-wrap">
            <div className="shop3-slider">
              {slides.map((s, i) => (
                <div
                  key={i}
                  className={`shop3-slide ${i === slideIndex ? 'shop3-slide-active' : ''}`}
                  style={{ backgroundImage: `url(${s.img})` }}
                >
                  <div className="shop3-slide-caption">
                    <h1>{s.title}</h1>
                    <p>{s.subtitle}</p>
                    <Link to="/shop3#products" className="shop3-btn shop3-btn-outline-light">Shop Now</Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="shop3-slider-dots">
              {slides.map((_, i) => (
                <button key={i} type="button" className={`shop3-dot ${i === slideIndex ? 'shop3-dot-active' : ''}`} aria-label={`Slide ${i + 1}`} onClick={() => setSlideIndex(i)} />
              ))}
            </div>
          </div>
          <div className="shop3-offers">
            <div className="shop3-offer" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&q=80)' }}>
              <div className="shop3-offer-text">
                <h6>Save 20%</h6>
                <h3>Special Offer</h3>
                <Link to="/shop3#products" className="shop3-btn shop3-btn-primary">Shop Now</Link>
              </div>
            </div>
            <div className="shop3-offer" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80)' }}>
              <div className="shop3-offer-text">
                <h6>Save 20%</h6>
                <h3>Special Offer</h3>
                <Link to="/shop3#products" className="shop3-btn shop3-btn-primary">Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shop3-featured-strip">
        <div className="shop3-container">
          <div className="shop3-featured-grid">
            <div className="shop3-featured-item">
              <span className="shop3-featured-icon">✓</span>
              <h5>Quality Product</h5>
            </div>
            <div className="shop3-featured-item">
              <span className="shop3-featured-icon">🚚</span>
              <h5>Free Shipping</h5>
            </div>
            <div className="shop3-featured-item">
              <span className="shop3-featured-icon">↔</span>
              <h5>14-Day Return</h5>
            </div>
            <div className="shop3-featured-item">
              <span className="shop3-featured-icon">📞</span>
              <h5>24/7 Support</h5>
            </div>
          </div>
        </div>
      </section>

      <section className="shop3-categories">
        <div className="shop3-container">
          <h2 className="shop3-section-title"><span>Categories</span></h2>
          <div className="shop3-cat-grid">
            {categories.map((c) => (
              <a key={c.name} href="#products" className="shop3-cat-item">
                <div className="shop3-cat-img" style={{ backgroundImage: `url(${c.img})` }} />
                <div className="shop3-cat-info">
                  <h6>{c.name}</h6>
                  <small>{c.count} Products</small>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="shop3-products" id="products">
        <div className="shop3-container">
          <h2 className="shop3-section-title"><span>Featured Products</span></h2>
          <div className="shop3-product-grid">
            {products.map((product) => {
              const img = product.images?.[0]?.src;
              const price = product.on_sale && product.sale_price ? product.sale_price : product.price;
              return (
                <article key={product.id} className="shop3-product-card">
                  <div className="shop3-product-image-wrap">
                    <div className="shop3-product-image" style={{ backgroundImage: img ? `url(${img})` : 'none' }} />
                    {product.featured && <span className="shop3-product-badge shop3-product-badge-featured">Featured</span>}
                    {product.on_sale && <span className="shop3-product-badge shop3-product-badge-sale">Sale</span>}
                    {product.stock_status === 'outofstock' && <span className="shop3-product-badge shop3-product-badge-out">Out of Stock</span>}
                  </div>
                  <div className="shop3-product-body">
                    <h3 className="shop3-product-title">{product.name}</h3>
                    <p className="shop3-product-desc">{product.short_description || ''}</p>
                    <div className="shop3-product-price-wrap">
                      {product.on_sale && product.regular_price && (
                        <span className="shop3-product-price-old">{formatPrice(product.regular_price)}</span>
                      )}
                      <span className="shop3-product-price">{formatPrice(price)}</span>
                    </div>
                    <button
                      type="button"
                      className="shop3-btn shop3-btn-add"
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

      <footer className="shop3-footer" id="contact">
        <div className="shop3-container">
          <div className="shop3-footer-grid">
            <div className="shop3-footer-col">
              <h5>Get In Touch</h5>
              <p>{config?.name} – premium fashion for everyone.</p>
              <p>123 Street, New York, USA</p>
              <p>+012 345 67890</p>
            </div>
            <div className="shop3-footer-col">
              <h5>Quick Shop</h5>
              <Link to="/">Home</Link>
              <Link to="/shop3#products">Our Shop</Link>
              <Link to="/shop3/cart">Shopping Cart</Link>
              <Link to="/shop3/checkout">Checkout</Link>
              <a href="#contact">Contact Us</a>
            </div>
            <div className="shop3-footer-col">
              <h5>My Account</h5>
              <Link to="/">My Account</Link>
              <Link to="/shop3/checkout">Order History</Link>
              <a href="#products">Wishlist</a>
              <Link to="/">Home</Link>
            </div>
            <div className="shop3-footer-col">
              <h5>Newsletter</h5>
              <p>Subscribe to our newsletter for updates</p>
              <form className="shop3-newsletter" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your Email Address" required />
                <button type="submit">Sign Up</button>
              </form>
            </div>
          </div>
          <div className="shop3-footer-bottom">
            <p>© {new Date().getFullYear()} <Link to="/shop3">{config?.name}</Link>. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
