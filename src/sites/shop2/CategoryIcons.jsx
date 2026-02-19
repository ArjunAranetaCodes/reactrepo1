/**
 * SVG icons for shop2 category cards. Shared viewBox for consistent sizing.
 */
const viewBox = '0 0 48 48';

export const categoryIcons = {
  Electronics: (
    <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="10" y="8" width="28" height="32" rx="2" />
      <path d="M10 18h28M18 8v4M30 8v4" />
      <circle cx="24" cy="28" r="4" />
    </svg>
  ),
  Fashion: (
    <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M24 6h-8l-4 12h6v18h12V18h6L24 6z" />
      <path d="M24 6v12M16 18h16" />
    </svg>
  ),
  'Home & Living': (
    <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M24 4L6 22v22h14V32h8v12h14V22L24 4z" />
      <path d="M24 4v12h16M24 16L6 22" />
    </svg>
  ),
  Sports: (
    <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="24" cy="24" r="14" />
      <path d="M24 10v28M10 24h28" />
      <path d="M14.8 14.8l26.4 26.4M33.2 14.8L14.8 33.2" />
    </svg>
  ),
  Beauty: (
    <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 12h8l4 24H16l4-24z" />
      <path d="M24 12V8M21 8h6" />
      <path d="M20 36h16" />
    </svg>
  ),
  Accessories: (
    <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14 20h20v18a2 2 0 01-2 2H16a2 2 0 01-2-2V20z" />
      <path d="M20 20V16a4 4 0 018 0v4M24 28v6" />
      <circle cx="24" cy="24" r="3" />
    </svg>
  ),
};

export const categoryOrder = ['Electronics', 'Fashion', 'Home & Living', 'Sports', 'Beauty', 'Accessories'];
