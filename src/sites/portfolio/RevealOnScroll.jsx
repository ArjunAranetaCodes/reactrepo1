import { useEffect, useRef, useState } from 'react';

const defaultOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -32px 0px',
};

/**
 * Fades and slides content in when it enters the viewport (Intersection Observer).
 */
function RevealOnScroll({ children, className = '', delayMs = 0, once = true }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        if (once) observer.unobserve(el);
      },
      defaultOptions
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={`portfolio-reveal ${visible ? 'portfolio-reveal-visible' : ''} ${className}`.trim()}
      style={delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}

export default RevealOnScroll;
