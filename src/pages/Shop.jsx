import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCards from '../components/ProductCards';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';
import { Container } from 'react-bootstrap';
import { getShopConfig, shopSlugs } from '../sites/shops';

function Shop() {
  const { siteId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const slug = shopSlugs.includes(siteId) ? siteId : 'shop1';
  const config = getShopConfig(slug);

  const isCart = location.pathname === `/${slug}/cart`;
  const isCheckout = location.pathname === `/${slug}/checkout`;
  const view = isCheckout ? 'checkout' : isCart ? 'cart' : 'home';

  return (
    <>
      <div className="container py-2">
        <Link to="/" className="text-decoration-none small text-muted">
          ← Back to Main Site
        </Link>
      </div>

      {view === 'home' && (
        <>
          <Hero />
          <ProductCards siteId={slug} />

          <section id="categories" style={{ padding: '4rem 0' }}>
            <Container className="text-center">
              <h2>Categories</h2>
              <p className="text-muted">Category-based browsing will be added here.</p>
            </Container>
          </section>

          <section id="about" style={{ padding: '4rem 0', background: '#f8f9fa' }}>
            <Container className="text-center">
              <h2>About</h2>
              <p className="text-muted">
                {config?.name ?? 'Shop'} — headless storefront built with React.
              </p>
            </Container>
          </section>

          <section id="contact" style={{ padding: '4rem 0' }}>
            <Container className="text-center">
              <h2>Contact</h2>
              <p className="text-muted">Contact information and form will go here.</p>
            </Container>
          </section>
        </>
      )}

      {view === 'cart' && (
        <Cart onProceedToCheckout={() => navigate(`/${slug}/checkout`)} />
      )}

      {view === 'checkout' && (
        <Checkout onBackToCart={() => navigate(`/${slug}/cart`)} />
      )}
    </>
  );
}

export default Shop;
