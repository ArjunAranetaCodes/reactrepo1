import React from "react";
import "./shop.css";

// Product preview images – filenames must match src/images exactly
import allPurposeImg from "./images/all-purpose.jpg";
import bathroomImg from "./images/Bathroom Cleaner.jpg";
import bleachImg from "./images/Bleach(1 Gallon).jpg";
import carpetImg from "./images/Carpet-Upholstery Cleaner.jpg";
import dishImg from "./images/Dish Soap.jpg";
import disinfectImg from "./images/Disinfectant-Spray.jpg";
import drainImg from "./images/Drain Cleaner.jpg";
import floorImg from "./images/floor-cleaner-concentrate.jpg";
import glassImg from "./images/glass-window-cleaner.jpg";
import degreaserImg from "./images/Heavy-Duty Degreaser.jpg";
import laundryImg from "./images/Laundry Detergent.jpg";
import wipesImg from "./images/Multi-Surface Wipes.jpg";

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
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="8"
                      y="14"
                      width="48"
                      height="32"
                      rx="4"
                      ry="4"
                      stroke="#254252"
                      strokeWidth="2"
                      fill="white"
                    />
                    <rect
                      x="14"
                      y="20"
                      width="36"
                      height="20"
                      rx="2"
                      ry="2"
                      stroke="#254252"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect
                      x="28"
                      y="38"
                      width="8"
                      height="2"
                      rx="1"
                      fill="#254252"
                    />
                    <circle cx="32" cy="46" r="2" fill="#00ba0e" />
                  </svg>
                  <h3>Electronics</h3>
                </a>
                <a href="#" className="category-card">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 10L32 14L40 10L48 18L42 22V50H22V22L16 18L24 10Z"
                      stroke="#254252"
                      strokeWidth="2"
                      fill="white"
                    />
                    <line
                      x1="32"
                      y1="14"
                      x2="32"
                      y2="50"
                      stroke="#00ba0e"
                      strokeWidth="2"
                    />
                  </svg>
                  <h3>Fashion</h3>
                </a>
                <a href="#" className="category-card">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 30L32 14L52 30"
                      stroke="#254252"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect
                      x="18"
                      y="30"
                      width="28"
                      height="20"
                      rx="2"
                      ry="2"
                      stroke="#254252"
                      strokeWidth="2"
                      fill="white"
                    />
                    <rect
                      x="28"
                      y="34"
                      width="8"
                      height="10"
                      rx="1"
                      ry="1"
                      stroke="#00ba0e"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                  <h3>Home &amp; Living</h3>
                </a>
                <a href="#" className="category-card">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="32"
                      cy="32"
                      r="18"
                      stroke="#254252"
                      strokeWidth="2"
                      fill="white"
                    />
                    <path
                      d="M14 32C20 30 24 26 26 20
                         M50 32C44 34 40 38 38 44
                         M32 14V50
                         M18 22C22 24 26 24 30 22
                         M34 42C38 40 42 40 46 42"
                      stroke="#00ba0e"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                  <h3>Sports</h3>
                </a>
                <a href="#" className="category-card">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="18"
                      y="24"
                      width="10"
                      height="24"
                      rx="2"
                      ry="2"
                      stroke="#254252"
                      strokeWidth="2"
                      fill="white"
                    />
                    <rect
                      x="36"
                      y="18"
                      width="10"
                      height="22"
                      rx="2"
                      ry="2"
                      stroke="#254252"
                      strokeWidth="2"
                      fill="white"
                    />
                    <rect x="36" y="40" width="10" height="8" rx="2" ry="2" fill="#00ba0e" />
                    <rect x="20" y="16" width="6" height="6" rx="1" ry="1" fill="#ff6c4e" />
                  </svg>
                  <h3>Beauty</h3>
                </a>
                <a href="#" className="category-card">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 16H34L48 30L34 44L20 44V16Z"
                      stroke="#254252"
                      strokeWidth="2"
                      fill="white"
                    />
                    <circle
                      cx="26"
                      cy="22"
                      r="3"
                      stroke="#00ba0e"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M30 34L40 24"
                      stroke="#ff6c4e"
                      strokeWidth="2"
                    />
                  </svg>
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
                <img
                  src={allPurposeImg}
                  alt="All-Purpose Cleaner"
                  className="product-photo"
                />
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
                <img
                  src={glassImg}
                  alt="Glass & Window Cleaner"
                  className="product-photo"
                />
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
                <img
                  src={floorImg}
                  alt="Floor Cleaner Concentrate"
                  className="product-photo"
                />
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
                <img
                  src={disinfectImg}
                  alt="Disinfectant Spray"
                  className="product-photo"
                />
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
                <img
                  src={bleachImg}
                  alt="Bleach (1 Gallon)"
                  className="product-photo"
                />
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
                <img
                  src={dishImg}
                  alt="Dish Soap"
                  className="product-photo"
                />
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
                <img
                  src={laundryImg}
                  alt="Laundry Detergent"
                  className="product-photo"
                />
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
                <img
                  src={bathroomImg}
                  alt="Bathroom Cleaner"
                  className="product-photo"
                />
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
                <img
                  src={degreaserImg}
                  alt="Heavy-Duty Degreaser"
                  className="product-photo"
                />
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
                <img
                  src={carpetImg}
                  alt="Carpet & Upholstery Cleaner"
                  className="product-photo"
                />
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
                <img
                  src={wipesImg}
                  alt="Multi-Surface Wipes"
                  className="product-photo"
                />
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
                <img
                  src={drainImg}
                  alt="Drain Cleaner"
                  className="product-photo"
                />
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
                    <img src="../assets/images/NF-tick-icon.png" alt="" /> Free
                    Shipping
                  </li>
                  <li>
                    <img src="../assets/images/NF-tick-icon.png" alt="" /> Easy
                    Returns
                  </li>
                  <li>
                    <img src="../assets/images/NF-tick-icon.png" alt="" /> Secure
                    Payment
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
                <img src="../assets/images/NF-footer-phone.png" alt="" />{" "}
                <a href="tel:01232445698">012 324 45698</a>
              </p>
              <p>
                <img src="../assets/images/NF-footer-email.png" alt="" />{" "}
                <a href="mailto:hello@reactshop.example">
                  hello@reactshop.example
                </a>
              </p>
              <p>
                <img src="../assets/images/NF-footer-map.png" alt="" /> 380 St
                Kilda Road, Jackso Store, Australia
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

