import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Shop2Layout from './Shop2Layout';
import Cart from '../../components/Cart';
import Checkout from '../../components/Checkout';
import './shop2.css';

/**
 * Shop 2 page – uses custom layout and styles (different from shop1).
 * Wraps content in .shop2-root so shop2.css only affects this tree.
 */
export default function Shop2Page() {
  const location = useLocation();
  const navigate = useNavigate();
  const isCart = location.pathname === '/shop2/cart';
  const isCheckout = location.pathname === '/shop2/checkout';

  if (isCart) {
    return (
      <div className="shop2-root">
        <div className="container py-2">
          <Link to="/shop2" className="text-decoration-none small text-muted">
            ← Back to shop
          </Link>
        </div>
        <div style={{ padding: '1rem 2rem', maxWidth: 1170, margin: '0 auto' }}>
          <Cart onProceedToCheckout={() => navigate('/shop2/checkout')} />
        </div>
      </div>
    );
  }

  if (isCheckout) {
    return (
      <div className="shop2-root">
        <div className="container py-2">
          <Link to="/shop2/cart" className="text-decoration-none small text-muted">
            ← Back to Cart
          </Link>
        </div>
        <div style={{ padding: '1rem 2rem', maxWidth: 1170, margin: '0 auto' }}>
          <Checkout onBackToCart={() => navigate('/shop2/cart')} />
        </div>
      </div>
    );
  }

  return (
    <div className="shop2-root">
      <Shop2Layout />
    </div>
  );
}
