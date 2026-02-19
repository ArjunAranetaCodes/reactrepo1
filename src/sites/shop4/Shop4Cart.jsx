import { Link } from 'react-router-dom';
import { useCart } from '../../components/common/CartContext';
import './shop4.css';

export default function Shop4Cart({ onProceedToCheckout }) {
  const { items, subtotal, itemCount, removeFromCart, updateQuantity, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="shop4-cart-page">
        <div className="shop4-container">
          <h2 className="shop4-cart-title">Your Cart</h2>
          <div className="shop4-cart-empty">
            <p>Your cart is empty.</p>
            <Link to="/shop4" className="shop4-btn shop4-btn-primary">Continue Shopping</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="shop4-cart-page">
      <div className="shop4-container">
        <div className="shop4-cart-header">
          <div>
            <h2 className="shop4-cart-title">Your Cart</h2>
            <p className="shop4-cart-count">{itemCount} {itemCount === 1 ? 'item' : 'items'} in cart</p>
          </div>
          <button type="button" className="shop4-btn shop4-btn-outline" onClick={clearCart}>
            Clear Cart
          </button>
        </div>

        <div className="shop4-cart-layout">
          <div className="shop4-cart-table-wrap">
            <table className="shop4-cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="shop4-cart-product">
                        {item.image && <img src={item.image} alt={item.name} className="shop4-cart-thumb" />}
                        <span className="shop4-cart-name">{item.name}</span>
                      </div>
                    </td>
                    <td className="shop4-cart-price">${item.price.toFixed(2)}</td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10) || 1)}
                        className="shop4-cart-qty"
                      />
                    </td>
                    <td className="shop4-cart-total">${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button type="button" className="shop4-cart-remove" onClick={() => removeFromCart(item.id)} aria-label="Remove">✕</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="shop4-cart-summary">
            <h4 className="shop4-cart-summary-title">Order Summary</h4>
            <div className="shop4-cart-summary-row">
              <span>Subtotal</span>
              <span className="shop4-cart-summary-value">${subtotal.toFixed(2)}</span>
            </div>
            <div className="shop4-cart-summary-row shop4-cart-summary-ship">
              <span>Shipping</span>
              <small>Calculated at checkout</small>
            </div>
            <hr className="shop4-cart-summary-hr" />
            <div className="shop4-cart-summary-row shop4-cart-summary-total">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button type="button" className="shop4-btn shop4-btn-primary shop4-btn-checkout" onClick={() => typeof onProceedToCheckout === 'function' && onProceedToCheckout()}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
