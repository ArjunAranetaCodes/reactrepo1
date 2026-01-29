import { Container, Row, Col, Button, Table, Form, Alert } from 'react-bootstrap';
import { useCart } from './common/CartContext';

function Cart({ onProceedToCheckout }) {
  const { items, subtotal, itemCount, removeFromCart, updateQuantity, clearCart } =
    useCart();

  if (items.length === 0) {
    return (
      <section id="cart" className="py-5 bg-light">
        <Container>
          <h2 className="mb-4">Your Cart</h2>
          <Alert variant="info">Your cart is empty.</Alert>
        </Container>
      </section>
    );
  }

  return (
    <section id="cart" className="py-5 bg-light">
      <Container>
        <Row className="mb-4">
          <Col>
            <h2>Your Cart</h2>
            <p className="text-muted mb-0">
              {itemCount} {itemCount === 1 ? 'item' : 'items'} in cart
            </p>
          </Col>
          <Col className="text-end">
            <Button variant="outline-danger" size="sm" onClick={clearCart}>
              Clear Cart
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={8}>
            <Table responsive bordered hover>
              <thead className="table-light">
                <tr>
                  <th>Product</th>
                  <th style={{ width: '120px' }}>Price</th>
                  <th style={{ width: '120px' }}>Quantity</th>
                  <th style={{ width: '120px' }}>Total</th>
                  <th style={{ width: '80px' }}></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{
                              width: '60px',
                              height: '60px',
                              objectFit: 'cover',
                              borderRadius: '8px',
                            }}
                          />
                        )}
                        <div>
                          <div className="fw-semibold">{item.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>₱{item.price.toFixed(2)}</td>
                    <td>
                      <Form.Control
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value, 10))
                        }
                      />
                    </td>
                    <td>₱{(item.price * item.quantity).toFixed(2)}</td>
                    <td className="text-center">
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        ✕
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>

          <Col md={4}>
            <div className="p-4 bg-white rounded shadow-sm">
              <h4 className="mb-3">Order Summary</h4>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span className="fw-semibold">₱{subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3 text-muted">
                <small>Shipping</small>
                <small>Calculated at checkout</small>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold">Total</span>
                <span className="fw-bold fs-5">₱{subtotal.toFixed(2)}</span>
              </div>
              <Button
                variant="primary"
                className="w-100"
                onClick={() => {
                  if (typeof onProceedToCheckout === 'function') {
                    onProceedToCheckout();
                  }
                }}
              >
                Proceed to Checkout
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Cart;

