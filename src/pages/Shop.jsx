import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCards from '../components/ProductCards';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';
import { shopSlugs } from '../sites/shops';

function Shop() {
  const { siteId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const slug = shopSlugs.includes(siteId) ? siteId : 'shop1';

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
