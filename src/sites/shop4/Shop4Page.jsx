import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Shop4Layout from './Shop4Layout';
import Shop4Cart from './Shop4Cart';
import Shop4Checkout from './Shop4Checkout';
import './shop4.css';

/**
 * Shop 4 – Electro React. Handles /shop4, /shop4/cart, /shop4/checkout.
 */
export default function Shop4Page() {
  const location = useLocation();
  const navigate = useNavigate();
  const isCart = location.pathname === '/shop4/cart';
  const isCheckout = location.pathname === '/shop4/checkout';

  if (isCart) {
    return (
      <div className="shop4-root">
        <div className="shop4-back-bar">
          <div className="shop4-container">
            <Link to="/shop4" className="shop4-back-link">← Back to shop</Link>
          </div>
        </div>
        <div className="shop4-container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <Shop4Cart onProceedToCheckout={() => navigate('/shop4/checkout')} />
        </div>
      </div>
    );
  }

  if (isCheckout) {
    return (
      <div className="shop4-root">
        <div className="shop4-back-bar">
          <div className="shop4-container">
            <Link to="/shop4/cart" className="shop4-back-link">← Back to Cart</Link>
          </div>
        </div>
        <div className="shop4-container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <Shop4Checkout onBackToCart={() => navigate('/shop4/cart')} />
        </div>
      </div>
    );
  }

  return <Shop4Layout />;
}
