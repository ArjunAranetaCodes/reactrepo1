import { Carousel, Container, Button } from 'react-bootstrap';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <Carousel fade indicators={false} controls={true} className="hero-carousel">
        <Carousel.Item>
          <div className="hero-slide hero-slide-1">
            <Container>
              <div className="hero-content">
                <h1 className="hero-title">Welcome to Spark & Shine</h1>
                <p className="hero-subtitle">Discover Amazing Products at Unbeatable Prices</p>
                <div className="hero-buttons">
                  <Button variant="light" size="lg" className="hero-btn-primary">
                    Shop Now
                  </Button>
                  <Button variant="outline-light" size="lg" className="hero-btn-secondary">
                    Learn More
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hero-slide hero-slide-2">
            <Container>
              <div className="hero-content">
                <h1 className="hero-title">New Collection 2026</h1>
                <p className="hero-subtitle">Trending Products Just for You</p>
                <div className="hero-buttons">
                  <Button variant="light" size="lg" className="hero-btn-primary">
                    Explore Collection
                  </Button>
                  <Button variant="outline-light" size="lg" className="hero-btn-secondary">
                    View All
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hero-slide hero-slide-3">
            <Container>
              <div className="hero-content">
                <h1 className="hero-title">Special Offers</h1>
                <p className="hero-subtitle">Up to 50% Off on Selected Items</p>
                <div className="hero-buttons">
                  <Button variant="light" size="lg" className="hero-btn-primary">
                    Shop Sale
                  </Button>
                  <Button variant="outline-light" size="lg" className="hero-btn-secondary">
                    Browse Deals
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Hero;
