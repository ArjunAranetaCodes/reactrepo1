import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Spinner, Alert, Badge } from 'react-bootstrap';
import { useCart } from './common/CartContext';
import './ProductCards.css';

function ProductCards() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  // WooCommerce REST API credentials
  // Get these from: WooCommerce → Settings → Advanced → REST API → Add Key
  // Set permissions to "Read" only
  const CONSUMER_KEY = import.meta.env.VITE_WC_CONSUMER_KEY || '';
  const CONSUMER_SECRET = import.meta.env.VITE_WC_CONSUMER_SECRET || '';
  // Prefer online backend if provided, otherwise fall back to local
  const API_BASE_URL =
    import.meta.env.VITE_WC_PRODUCTS_URL ||
    'http://localhost/headless2/wp-json/wc/v3/products';

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      
      // Build URL with query parameters
      const params = new URLSearchParams({
        per_page: '12',
        status: 'publish'
      });

      let url = `${API_BASE_URL}?${params.toString()}`;
      
      // Prepare headers for authentication
      const headers = {
        'Content-Type': 'application/json',
      };

      // Add authentication if credentials are provided (optional - public access is enabled via filter)
      if (CONSUMER_KEY && CONSUMER_SECRET) {
        // WooCommerce REST API supports query string authentication
        const authParams = new URLSearchParams({
          consumer_key: CONSUMER_KEY,
          consumer_secret: CONSUMER_SECRET
        });
        url = `${url}&${authParams.toString()}`;
      }
      
      const response = await fetch(url, {
        method: 'GET',
        headers: headers
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API Error Response:', errorData);
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const getProductImage = (product) => {
    if (product.images && product.images.length > 0 && product.images[0].src) {
      return product.images[0].src;
    }
    return 'https://via.placeholder.com/400x300?text=No+Image';
  };

  const stripHtml = (html) => {
    if (!html) return '';
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const formatPrice = (price) => {
    if (!price) return 'N/A';
    return `$${parseFloat(price).toFixed(2)}`;
  };

  if (loading) {
    return (
      <Container className="loading-container">
        <div className="text-center py-5">
          <Spinner animation="border" variant="primary" style={{ width: '3rem', height: '3rem' }} />
          <p className="mt-3">Loading products...</p>
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="error-container py-5">
        <Alert variant="danger">
          <Alert.Heading>Error loading products</Alert.Heading>
          <p>{error}</p>
          <p className="mb-0">
            Make sure your WordPress site is running and the WooCommerce REST API is accessible at:
            <br />
            <code>{API_BASE_URL}</code>
            <br /><br />
            <strong>Note:</strong> Public read access to products is enabled. If you need authentication:
            <ol className="text-start mt-2">
              <li>Go to WordPress Admin → WooCommerce → Settings → Advanced → REST API</li>
              <li>Click "Add Key"</li>
              <li>Set Description: "Frontend API"</li>
              <li>Set User: Choose an administrator user</li>
              <li>Set Permissions: "Read"</li>
              <li>Click "Generate API Key"</li>
              <li>Copy the Consumer Key and Consumer Secret</li>
              <li>Create a <code>.env</code> file in your frontend root with:
                <br />
                <code>VITE_WC_CONSUMER_KEY=your_consumer_key_here</code>
                <br />
                <code>VITE_WC_CONSUMER_SECRET=your_consumer_secret_here</code>
              </li>
              <li>Restart your dev server after adding the .env file</li>
            </ol>
          </p>
          <hr />
          <Button variant="outline-danger" onClick={fetchProducts}>
            Retry
          </Button>
        </Alert>
      </Container>
    );
  }

  if (products.length === 0) {
    return (
      <Container className="no-products py-5">
        <div className="text-center">
          <h2>No products found</h2>
          <p>There are no products available at the moment.</p>
          <Button variant="primary" onClick={fetchProducts} className="mt-3">
            Refresh
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <section id="products" className="products-section py-5">
      <Container>
        <div className="section-header text-center mb-5">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">Discover our latest collection</p>
        </div>
        <Row>
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="product-card h-100">
                <div className="product-image-wrapper">
                  <Card.Img 
                    variant="top" 
                    src={getProductImage(product)} 
                    className="product-image"
                    alt={product.name}
                  />
                  <div className="product-overlay">
                    <Button variant="light" className="overlay-btn" size="sm">
                      👁️
                    </Button>
                    <Button variant="light" className="overlay-btn" size="sm">
                      ❤️
                    </Button>
                  </div>
                  {product.featured && (
                    <span className="badge-featured">Featured</span>
                  )}
                  {product.on_sale && (
                    <Badge bg="danger" className="position-absolute top-0 start-0 m-2">
                      Sale
                    </Badge>
                  )}
                  {product.stock_status === 'outofstock' && (
                    <Badge bg="secondary" className="position-absolute top-0 end-0 m-2">
                      Out of Stock
                    </Badge>
                  )}
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="product-title">
                    <a 
                      href={product.permalink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {product.name}
                    </a>
                  </Card.Title>
                  <Card.Text className="product-description flex-grow-1">
                    {truncateText(stripHtml(product.short_description || product.description))}
                  </Card.Text>
                  <div className="product-footer mt-auto">
                    <div className="product-price mb-2">
                      {product.on_sale && product.sale_price ? (
                        <div>
                          <span className="text-decoration-line-through text-muted me-2">
                            {formatPrice(product.regular_price)}
                          </span>
                          <span className="fw-bold text-danger fs-5">
                            {formatPrice(product.sale_price)}
                          </span>
                        </div>
                      ) : (
                        <span className="fw-bold fs-5 text-primary">
                          {formatPrice(product.price || product.regular_price)}
                        </span>
                      )}
                    </div>
                    <div className="product-actions">
                      <Button
                        variant={product.stock_status === 'outofstock' ? 'secondary' : 'primary'}
                        className="add-to-cart-btn"
                        disabled={product.stock_status === 'outofstock'}
                        onClick={() => {
                          if (product.stock_status !== 'outofstock') {
                            addToCart(product);
                          }
                        }}
                      >
                        🛒 {product.stock_status === 'outofstock' ? 'Out of Stock' : 'Add to Cart'}
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ProductCards;
