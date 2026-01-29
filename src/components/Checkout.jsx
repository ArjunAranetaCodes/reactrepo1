import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { useCart } from './common/CartContext';

function Checkout({ onBackToCart }) {
  const { items, subtotal, clearCart } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!items.length) return;

    setSubmitting(true);

    // For now this is a front-end only demo checkout.
    // Here you could call a custom WordPress/WooCommerce endpoint to create an order.
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      clearCart();
    }, 800);
  };

  return (
    <section id="checkout" className="py-5">
      <Container>
        <Row className="mb-4">
          <Col md={8}>
            <h2>Checkout</h2>
            <p className="text-muted">
              Enter your details to complete your order.
            </p>
          </Col>
          <Col md={4} className="text-md-end">
            <div className="fw-bold fs-5 mb-2">Total: ₱{subtotal.toFixed(2)}</div>
            {typeof onBackToCart === 'function' && (
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={onBackToCart}
              >
                Back to Cart
              </Button>
            )}
          </Col>
        </Row>

        {submitted && (
          <Row className="mb-4">
            <Col>
              <Alert variant="success">
                Thank you! Your order has been placed (demo). In a real
                integration, this would create an order in WooCommerce.
              </Alert>
            </Col>
          </Row>
        )}

        <Row>
          <Col md={8}>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="firstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="lastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control required />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="address1">
                <Form.Label>Address</Form.Label>
                <Form.Control required />
              </Form.Group>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control required />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group controlId="state">
                    <Form.Label>State</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group controlId="zip">
                    <Form.Label>ZIP</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-4" controlId="notes">
                <Form.Label>Order notes (optional)</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button
                type="submit"
                variant="primary"
                disabled={submitting || !items.length}
              >
                {submitting ? 'Placing order...' : 'Place Order'}
              </Button>
            </Form>
          </Col>

          <Col md={4} className="mt-4 mt-md-0">
            <div className="p-4 bg-light rounded">
              <h5 className="mb-3">Order Summary</h5>
              {items.length ? (
                <>
                  <ul className="list-unstyled mb-3">
                    {items.map((item) => (
                      <li
                        key={item.id}
                        className="d-flex justify-content-between mb-1"
                      >
                        <span>
                          {item.name} × {item.quantity}
                        </span>
                        <span>
                          ₱{(item.price * item.quantity).toFixed(2)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="d-flex justify-content-between fw-bold">
                    <span>Total</span>
                    <span>₱{subtotal.toFixed(2)}</span>
                  </div>
                </>
              ) : (
                <p className="text-muted mb-0">
                  Your cart is empty. Add products to proceed with checkout.
                </p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Checkout;

