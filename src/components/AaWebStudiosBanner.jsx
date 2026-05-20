import { useEffect, useId, useState } from 'react';
import './AaWebStudiosBanner.css';

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handle = () => setReduced(mq.matches);
    mq.addEventListener('change', handle);
    return () => mq.removeEventListener('change', handle);
  }, []);

  return reduced;
}

/**
 * Animated SVG wordmark for the portfolio hero — shifting brand gradient + accent line.
 */
export default function AaWebStudiosBanner({ className = '', showTagline = true }) {
  const uid = useId().replace(/:/g, '');
  const gradId = `aa-grad-${uid}`;
  const lineGradId = `aa-line-${uid}`;
  const shineId = `aa-shine-${uid}`;
  const reduced = usePrefersReducedMotion();

  return (
    <div className={`aa-banner ${className}`.trim()}>
      <svg
        className="aa-banner-svg"
        viewBox="0 0 920 108"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={`aa-title-${uid}`}
      >
        <title id={`aa-title-${uid}`}>aawebstudios</title>
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#454040">
              {!reduced && (
                <animate
                  attributeName="stop-color"
                  values="#454040;#605B51;#EFD040;#FFF59A;#454040"
                  dur="10s"
                  repeatCount="indefinite"
                />
              )}
            </stop>
            <stop offset="50%" stopColor="#605B51">
              {!reduced && (
                <animate
                  attributeName="stop-color"
                  values="#605B51;#EFD040;#FFF59A;#454040;#605B51"
                  dur="10s"
                  repeatCount="indefinite"
                />
              )}
            </stop>
            <stop offset="100%" stopColor="#EFD040">
              {!reduced && (
                <animate
                  attributeName="stop-color"
                  values="#EFD040;#FFF59A;#454040;#605B51;#EFD040"
                  dur="10s"
                  repeatCount="indefinite"
                />
              )}
            </stop>
          </linearGradient>

          <linearGradient id={lineGradId} gradientUnits="userSpaceOnUse" x1="160" y1="0" x2="760" y2="0">
            <stop offset="0%" stopColor="#454040" stopOpacity="0.55" />
            <stop offset="35%" stopColor="#EFD040" stopOpacity="1" />
            <stop offset="70%" stopColor="#FFF59A" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#605B51" stopOpacity="0.45" />
            {!reduced && (
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values="-80 0; 80 0; -80 0"
                dur="5.5s"
                repeatCount="indefinite"
              />
            )}
          </linearGradient>

          <linearGradient id={shineId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <text x="460" y="62" textAnchor="middle" className="aa-banner-text" fill={`url(#${gradId})`}>
          aawebstudios
        </text>

        <rect x="160" y="78" width="600" height="3" rx="1.5" fill={`url(#${lineGradId})`} className="aa-banner-line">
          {!reduced && <animate attributeName="opacity" values="0.88;1;0.88" dur="3s" repeatCount="indefinite" />}
        </rect>

        {!reduced && (
          <rect x="200" y="76" width="140" height="7" rx="3.5" fill={`url(#${shineId})`} opacity="0.55">
            <animate attributeName="x" values="140;620;140" dur="4.5s" repeatCount="indefinite" />
          </rect>
        )}
      </svg>

      {showTagline && (
        <p className="aa-banner-tagline">From concept to launch — sites that work.</p>
      )}
    </div>
  );
}
