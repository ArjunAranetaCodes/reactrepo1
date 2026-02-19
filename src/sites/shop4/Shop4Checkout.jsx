import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../components/common/CartContext';
import './shop4.css';

export default function Shop4Checkout({ onBackToCart }) {
  const { items, subtotal, clearCart } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!items.length) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      clearCart();
    }, 800);
  };

  return (
    <div className="shop4-checkout-page">
      <div className="shop4-container">
        <div className="shop4-checkout-header">
          <div>
            <h2 className="shop4-checkout-title">Checkout</h2>
            <p className="shop4-checkout-desc">Enter your details to complete your order.</p>
          </div>
          <div className="shop4-checkout-header-right">
            <span className="shop4-checkout-total-label">Total: ${subtotal.toFixed(2)}</span>
            {typeof onBackToCart === 'function' && (
              <button type="button" className="shop4-btn shop4-btn-outline" onClick={onBackToCart}>
                Back to Cart
              </button>
            )}
          </div>
        </div>

        {submitted && (
          <div className="shop4-checkout-success">
            Thank you! Your order has been placed (demo). In a real integration, this would create an order in your store.
          </div>
        )}

        <div className="shop4-checkout-layout">
          <form className="shop4-checkout-form" onSubmit={handleSubmit}>
            <div className="shop4-form-row">
              <label className="shop4-form-label">First name</label>
              <input type="text" className="shop4-form-input" required />
            </div>
            <div className="shop4-form-row">
              <label className="shop4-form-label">Last name</label>
              <input type="text" className="shop4-form-input" required />
            </div>
            <div className="shop4-form-row">
              <label className="shop4-form-label">Email</label>
              <input type="email" className="shop4-form-input" required />
            </div>
            <div className="shop4-form-row">
              <label className="shop4-form-label">Phone</label>
              <input type="tel" className="shop4-form-input" />
            </div>
            <div className="shop4-form-row">
              <label className="shop4-form-label">Address</label>
              <input type="text" className="shop4-form-input" required />
            </div>
            <div className="shop4-form-row shop4-form-row-inline">
              <div className="shop4-form-group">
                <label className="shop4-form-label">City</label>
                <input type="text" className="shop4-form-input" required />
              </div>
              <div className="shop4-form-group">
                <label className="shop4-form-label">State</label>
                <input type="text" className="shop4-form-input" />
              </div>
              <div className="shop4-form-group">
                <label className="shop4-form-label">ZIP</label>
                <input type="text" className="shop4-form-input" />
              </div>
            </div>
            <div className="shop4-form-row">
              <label className="shop4-form-label">Order notes (optional)</label>
              <textarea className="shop4-form-input shop4-form-textarea" rows={3} />
            </div>
            <button type="submit" className="shop4-btn shop4-btn-primary shop4-btn-place" disabled={submitting || !items.length}>
              {submitting ? 'Placing order...' : 'Place Order'}
            </button>
          </form>

          <div className="shop4-checkout-summary">
            <h5 className="shop4-checkout-summary-title">Order Summary</h5>
            {items.length ? (
              <>
                <ul className="shop4-checkout-list">
                  {items.map((item) => (
                    <li key={item.id} className="shop4-checkout-list-item">
                      <span>{item.name} × {item.quantity}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
                <div className="shop4-checkout-list-total">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </>
            ) : (
              <p className="shop4-checkout-empty">Your cart is empty. Add products to proceed.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
