import { useState } from 'react';
import EcommerceTopbar from './components/navbars/EcommerceTopbar';
import EcommerceNavbar from './components/navbars/EcommerceNavbar';
import Hero from './components/Hero';
import ProductCards from './components/ProductCards';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import './App.css';

function App() {
  const [view, setView] = useState('home'); // 'home' | 'cart' | 'checkout'

  return (
    <div className="App">
      <EcommerceTopbar onCartClick={() => setView('cart')} />
      <EcommerceNavbar
        onNavigate={(section) => {
          // Always go back to main page for these sections
          if (section === 'cart') {
            setView('cart');
            return;
          }
          if (section === 'checkout') {
            setView('checkout');
            return;
          }

          setView('home');

          // Scroll to specific section on home view
          if (section === 'products') {
            setTimeout(() => {
              const el = document.getElementById('products');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }, 0);
          } else if (section === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            setTimeout(() => {
              const el = document.getElementById(section);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }, 0);
          }
        }}
      />
      <main style={{ minHeight: '100vh' }}>
        {view === 'home' && (
          <>
            <Hero />
            <ProductCards />

            {/* Simple placeholder sections so navbar links work */}
            <section id="categories" style={{ padding: '4rem 0' }}>
              <div className="container text-center">
                <h2>Categories</h2>
                <p className="text-muted">
                  Category-based browsing will be added here.
                </p>
              </div>
            </section>

            <section id="about" style={{ padding: '4rem 0', background: '#f8f9fa' }}>
              <div className="container text-center">
                <h2>About</h2>
                <p className="text-muted">
                  This is a headless WooCommerce storefront built with React.
                </p>
              </div>
            </section>

            <section id="contact" style={{ padding: '4rem 0' }}>
              <div className="container text-center">
                <h2>Contact</h2>
                <p className="text-muted">
                  Contact information and form will go here.
                </p>
              </div>
            </section>
          </>
        )}

        {view === 'cart' && (
          <Cart onProceedToCheckout={() => setView('checkout')} />
        )}

        {view === 'checkout' && (
          <Checkout onBackToCart={() => setView('cart')} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
