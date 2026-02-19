import React from "react";
import "../css/shop.css";

export function App() {
  return (
    <>
      <header className="site-header">
        {/* Top bar */}
        <div className="header-top" style={{ backgroundColor: "#afdb4a" }}>
          <div className="header-top-inner">
            <div className="header-top-left">
              <span className="header-icon">
                <img
                  src="../assets/images/NF-header-phone.png"
                  alt=""
                  width="24"
                  height="24"
                />
              </span>
              <a href="tel:123456789">123456789</a>
              <span className="header-icon" style={{ marginLeft: "2rem" }}>
                <img
                  src="../assets/images/NF-header-email.png"
                  alt=""
                  width="24"
                  height="24"
                />
              </span>
              <a href="mailto:hello@reactshop.example">
                hello@reactshop.example
              </a>
            </div>
            <div className="header-top-right">
              <a href="#" className="social-link" aria-label="Facebook">
                Facebook
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                Twitter
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                Instagram
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        {/* Main nav */}
        <div className="header-main">
          <div className="header-main-inner">
            <a href="#top" className="logo">
              React Shop
            </a>
            <nav className="nav-main">
              <a href="#top">Home</a>
              <a href="#products">Shop</a>
              <a href="#products">Products</a>
              <a href="#welcome">About</a>
              <a href="#contact">Contact</a>
            </nav>
            <a href="#cart" className="btn btn-cart">
              Cart
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero banner */}
        <section className="hero">
          <div
            className="hero-bg"
            style={{
              backgroundImage: "url('../assets/images/header-banner.jpg')",
            }}
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="hero-label">New Collection</p>
            <h1 className="hero-title">
              Shop the Latest
              <br />
              Trends Online
            </h1>
            <p className="hero-text">
              Free shipping on orders over $50. Discover quality products at
              great prices.
            </p>
            <a href="#products" className="btn btn-primary">
              Shop Now
            </a>
          </div>
        </section>

        {/* Product categories */}
        <section className="section section-categories" id="categories">
          <div className="section-inner">
            <div className="categories-grid">
              <div className="categories-cards">
                <a href="#" className="category-card">
                  <img
                    src="../assets/images/nutriflux_service_icon1.jpg"
                    alt="Electronics"
                  />
                  <h3>Electronics</h3>
                </a>
                <a href="#" className="category-card">
                  <img
                    src="../assets/images/nutriflux_service_icon2.jpg"
                    alt="Fashion"
                  />
                  <h3>Fashion</h3>
                </a>
                <a href="#" className="category-card">
                  <img
                    src="../assets/images/nutriflux_service_icon3.jpg"
                    alt="Home &amp; Living"
                  />
                  <h3>Home &amp; Living</h3>
                </a>
                <a href="#" className="category-card">
                  <img
                    src="../assets/images/nutriflux_service_icon4.jpg"
                    alt="Sports"
                  />
                  <h3>Sports</h3>
                </a>
                <a href="#" className="category-card">
                  <img
                    src="../assets/images/nutriflux_service_icon5.jpg"
                    alt="Beauty"
                  />
                  <h3>Beauty</h3>
                </a>
                <a href="#" className="category-card">
                  <img
                    src="../assets/images/nutriflux_service_icon6.jpg"
                    alt="Accessories"
                  />
                  <h3>Accessories</h3>
                </a>
              </div>
              <div className="categories-sidebar">
                <p className="section-label">Shop Categories</p>
                <h2 className="section-title">We Have Everything You Need</h2>
                <p className="section-desc">
                  Browse our curated selection of quality products. Fast
                  delivery and easy returns.
                </p>
                <img
                  src="../assets/images/nutriflux_service_right_image.jpg"
                  alt="Shop"
                  className="sidebar-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product list – Cleaning chemicals */}
        <section className="section section-products" id="products">
          <div className="section-inner">
            <p className="section-label">Cleaning Chemicals</p>
            <h2 className="section-title section-title-center">Our Products</h2>
            <p className="section-desc section-desc-center">
              Professional-grade cleaning supplies for home and workplace.
            </p>
            <ul className="product-list">
              <li className="product-card">
                <div className="product-image" aria-hidden="true">
                  All-Purpose
                </div>
                <div className="product-info">
                  <h3 className="product-name">All-Purpose Cleaner</h3>
                  <p className="product-desc">
                    Removes dirt and grime from most surfaces. Safe for
                    countertops, appliances, and more.
                  </p>
                  <p className="product-price">$8.99</p>
                  <a href="#" className="btn btn-add">
                    Add to Cart
                  </a>
                </div>
              </li>
              <li className="product-card">
                <div className="product-image" aria-hidden="true">
                  Glass
                </div>
                <div className="product-info">
                  <h3 className="product-name">Glass &amp; Window Cleaner</h3>
                  <p className="product-desc">
                    Streak-free shine for windows, mirrors, and glass surfaces.
                    Ammonia-free formula.
                  </p>
                  <p className="product-price">$5.49</p>
                  <a href="#" className="btn btn-add">
                    Add to Cart
                  </a>
                </div>
              </li>
              <li className="product-card">
                <div className="product-image" aria-hidden="true">
                  Floor
                </div>
                <div className="product-info">
                  <h3 className="product-name">Floor Cleaner Concentrate</h3>
                  <p className="product-desc">
                    For tile, laminate, and hardwood. Dilutes for multiple uses.
                    Fresh scent.
                  </p>
                  <p className="product-price">$12.99</p>
                  <a href="#" className="btn btn-add">
                    Add to Cart
                  </a>
                </div>
              </li>
              <li className="product-card">
                <div className="product-image" aria-hidden="true">
                  Disinfect
                </div>
                <div className="product-info">
                  <h3 className="product-name">Disinfectant Spray</h3>
                  <p className="product-desc">
                    Kills 99.9% of germs. Use on hard, non-porous surfaces. EPA
                    registered.
                  </p>
                  <p className="product-price">$9.99</p>
                  <a href="#" className="btn btn-add">
                    Add to Cart
                  </a>
                </div>
              </li>
              <li className="product-card">
                <div className="product-image" aria-hidden="true">
                  Bleach
                </div>
                <div className="product-info">
                  <h3 className="product-name">Bleach (1 Gallon)</h3>
                  <p className="product-desc">
                    Multipurpose disinfecting bleach. Whitens laundry and
                    sanitizes surfaces.
                  </p>
                  <p className="product-price">$4.99</p>
                  <a href="#" className="btn btn-add">
                    Add to Cart
                  </a>
                </div>
              </li>
              <li className="product-card">
                <div className="product-image" aria-hidden="true">
                  Dish
                </div>
                <div className="product-info">
                  <h3 className="product-name">Dish Soap</h3>
                  <p className="product-desc">
                    Cuts through grease and food residue. Gentle on hands. 24 oz
                    bottle.
                  </p>
                  <p className="product-price">$3.99</p>
                  <a href="#" className="btn btn-add">
                    Add to Cart
                  </a>
                </div>
              </li>
              <li className="product-card">
                <div className="product-image" aria-hidden="true">
                  Laundry
                </div>
                <div className="product-info">
                  <h3 className="product-name">Laundry Detergent</h3>
                  <p className="product-desc">
                    For standard and HE washers. 100 loads. Fresh scent,
                    stain-fighting power.
                  </p>
                  <p className="product-price">$14.99</p>
                  <a href="#" className="btn btn-add">
                    Add to Cart
                  </a>
                </div>
              </li>
              <li className="product-card">
                <div className="product-image" aria-hidden="true">
                  Bathroom
                </div>
                <div className="product-info">
                  <h3 className="product-name">Bathroom Cleaner</h3>
                  <p className="product-desc">
                    Removes soap scum, lime scale, and mildew. Spray and wipe
                    formula.
                  </p>
                  <p className="product-price">$6.49</p>
                  <a href="#" className="btn btn-add">
                    Add to Cart
                  </a>
                </div>
              </li>
              <li className="product-card">
                <div className="product-image" aria-hidden="true">
                  Degreaser
                </div>
                <div className="product-info">
                  <h3 className="product-name">Heavy-Duty Degreaser</h3>
                  <p className="product-desc">
                    For kitchens, garages, and industrial use. Cuts through oil
                    and grease.
                  </p>
                  <p className="product-price">$11.99</p>
                  <a href="#" className="btn btn-add">
                    Add to Cart
                  </a>
                </div>
              </li>
              <li className="product-card">
                <div className="product-image" aria-hidden="true">
                  Carpet
                </div>
                <div className="product-info">
                  <h3 className="product-name">
                    Carpet &amp; Upholstery Cleaner
                  </h3>
                  <p className="product-desc">
                    Professional-grade formula. Safe for most fabrics and
                    carpets.
                  </p>
                  <p className="product-price">$15.99</p>
                  <a href="#" className="btn btn-add">
                    Add to Cart
                  </a>
                </div>
              </li>
              <li className="product-card">
                <div className="product-image" aria-hidden="true">
                  Wipes
                </div>
                <div className="product-info">
                  <h3 className="product-name">Multi-Surface Wipes</h3>
                  <p className="product-desc">
                    Convenient disposable wipes. Disinfects and cleans in one
                    step. 80 count.
                  </p>
                  <p className="product-price">$7.49</p>
                  <a href="#" className="btn btn-add">
                    Add to Cart
                  </a>
                </div>
              </li>
              <li className="product-card">
                <div className="product-image" aria-hidden="true">
                  Drain
                </div>
                <div className="product-info">
                  <h3 className="product-name">Drain Cleaner</h3>
                  <p className="product-desc">
                    Unclogs sinks, tubs, and showers. Safe for pipes.
                    Fast-acting formula.
                  </p>
                  <p className="product-price">$8.49</p>
                  <a href="#" className="btn btn-add">
                    Add to Cart
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Welcome / features */}
        <section className="section section-welcome" id="welcome">
          <div className="section-inner">
            <div className="welcome-grid">
              <div className="welcome-content">
                <p className="section-label">Welcome to React Shop</p>
                <h2 className="section-title">
                  Your Shopping Journey Starts Here
                </h2>
                <p className="section-desc">
                  We bring you the best products with trusted service. Shop with
                  confidence.
                </p>
                <ul className="feature-list">
                  <li>
                    <img
                      src="../assets/images/NF-tick-icon.png"
                      alt=""
                    />{" "}
                    Free Shipping
                  </li>
                  <li>
                    <img
                      src="../assets/images/NF-tick-icon.png"
                      alt=""
                    />{" "}
                    Easy Returns
                  </li>
                  <li>
                    <img
                      src="../assets/images/NF-tick-icon.png"
                      alt=""
                    />{" "}
                    Secure Payment
                  </li>
                </ul>
                <a href="#products" className="btn btn-primary">
                  Shop Now
                </a>
              </div>
              <div className="welcome-images">
                <img
                  src="../assets/images/nutriflux_welcome_large.jpg"
                  alt="Shopping"
                  className="welcome-img-large"
                />
                <div className="welcome-img-block">
                  <img
                    src="../assets/images/nutriflux_welcome_small.jpg"
                    alt=""
                  />
                  <div className="callout-box">
                    <img
                      src="../assets/images/telephone-image.jpg"
                      alt=""
                    />
                    <p>Call Us For Free</p>
                    <a href="tel:6482045036">648.204.5036</a>
                  </div>
                </div>
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
                <li>
                  <a href="#top">Home</a>
                </li>
                <li>
                  <a href="#products">Shop</a>
                </li>
                <li>
                  <a href="#products">Products</a>
                </li>
                <li>
                  <a href="#welcome">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">Shipping Info</a>
                </li>
                <li>
                  <a href="#">Returns</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Track Order</a>
                </li>
                <li>
                  <a href="#">Size Guide</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Contact Us</h3>
              <p>
                <img
                  src="../assets/images/NF-footer-phone.png"
                  alt=""
                />{" "}
                <a href="tel:01232445698">012 324 45698</a>
              </p>
              <p>
                <img
                  src="../assets/images/NF-footer-email.png"
                  alt=""
                />{" "}
                <a href="mailto:hello@reactshop.example">
                  hello@reactshop.example
                </a>
              </p>
              <p>
                <img
                  src="../assets/images/NF-footer-map.png"
                  alt=""
                />{" "}
                380 St Kilda Road, Jackso Store, Australia
              </p>
            </div>
            <div className="footer-col">
              <h3>About Us</h3>
              <p>
                Quality products, great prices, and customer-first service. Shop
                with confidence at React Shop.
              </p>
              <div className="footer-social">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p>React Shop</p>
            <p>React Shop</p>
          </div>
        </div>
      </footer>
    </>
  );
}

