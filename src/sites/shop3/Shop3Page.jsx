import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Shop3Layout from './Shop3Layout';
import Shop3Cart from './Shop3Cart';
import Shop3Checkout from './Shop3Checkout';
import './shop3.css';

/**
 * Shop 3 – MultiShop React. Handles /shop3, /shop3/cart, /shop3/checkout.
 */
export default function Shop3Page() {
  const location = useLocation();
  const navigate = useNavigate();
  const isCart = location.pathname === '/shop3/cart';
  const isCheckout = location.pathname === '/shop3/checkout';

  if (isCart) {
    return (
      <div className="shop3-root">
        <div className="shop3-back-bar">
          <div className="shop3-container">
            <Link to="/shop3" className="shop3-back-link">← Back to shop</Link>
          </div>
        </div>
        <div className="shop3-container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <Shop3Cart onProceedToCheckout={() => navigate('/shop3/checkout')} />
        </div>
      </div>
    );
  }

  if (isCheckout) {
    return (
      <div className="shop3-root">
        <div className="shop3-back-bar">
          <div className="shop3-container">
            <Link to="/shop3/cart" className="shop3-back-link">← Back to Cart</Link>
          </div>
        </div>
        <div className="shop3-container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <Shop3Checkout onBackToCart={() => navigate('/shop3/cart')} />
        </div>
      </div>
    );
  }

  return <Shop3Layout />;
}
