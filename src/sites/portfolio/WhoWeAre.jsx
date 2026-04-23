import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './who-we-are.css';

const VALUES = [
  {
    title: 'Build with clarity',
    text: 'We scope work honestly, communicate often, and ship in iterations you can review and measure.',
  },
  {
    title: 'Design for people',
    text: 'Interfaces should be obvious, accessible, and fast — whether on a phone or a conference room screen.',
  },
  {
    title: 'Own the outcome',
    text: 'From first prototype to launch and beyond, we care that your site works for your team and your audience.',
  },
];

export default function WhoWeAre() {
  return (
    <div className="who-we-are-page">
      <section className="who-we-are-hero">
        <Container>
          <p className="who-we-are-kicker">Who we are</p>
          <h1 className="who-we-are-title">A small studio with a big focus on delivery</h1>
          <p className="who-we-are-lede">
            aawebstudios is a web and digital studio. We design and build stores, landing pages, and brand experiences
            for teams that want thoughtful craft without the noise.
          </p>
        </Container>
      </section>

      <section className="who-we-are-section">
        <Container>
          <h2 className="who-we-are-section-title">Our story</h2>
          <div className="who-we-are-body">
            <p>
              We started as builders who got tired of hand-offs and vague timelines. Today we work as a tight unit —
              strategy, design, and front-end engineering in one loop — so decisions stay fast and quality stays high.
            </p>
            <p>
              Every project gets a clear owner and a roadmap you can share with stakeholders. No black boxes: you see
              progress, give feedback, and launch when you are ready.
            </p>
          </div>

          <div className="who-we-are-values">
            {VALUES.map((v) => (
              <article key={v.title} className="who-we-are-value-card">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="who-we-are-section who-we-are-section-alt">
        <Container>
          <h2 className="who-we-are-section-title">How we work</h2>
          <div className="who-we-are-body">
            <p>
              We typically begin with goals and constraints — audience, timeline, integrations, and success metrics.
              From there we propose a lean plan: UX structure, visual direction, then build with modern tooling (React,
              WordPress, or whatever fits your stack).
            </p>
            <p>
              After launch we stay available for refinement, analytics, and improvements. Digital products are never
              really “done”; we help you evolve yours responsibly.
            </p>
          </div>
        </Container>
      </section>

      <section className="who-we-are-cta">
        <Container style={{ maxWidth: 720 }}>
          <div className="who-we-are-cta-inner">
            <p className="who-we-are-cta-text">Want to see what we have shipped?</p>
            <Link to="/#portfolio" className="who-we-are-cta-btn">
              View our works →
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
