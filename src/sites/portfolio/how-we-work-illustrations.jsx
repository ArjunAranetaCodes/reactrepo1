/**
 * Minimal isometric workflow graphics for the How We Work timeline.
 * Palette matches portfolio-work variables via currentColor / inherited fills.
 */

function SvgShell({ className, children }) {
  return (
    <svg
      className={className}
      viewBox="0 0 140 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function IsoDiscovery({ className }) {
  return (
    <SvgShell className={className}>
      {/* Platform */}
      <path d="M70 88 L118 62 L70 36 L22 62 Z" fill="var(--hww-iso-top)" opacity={0.95} />
      <path d="M22 62 L22 72 L70 98 L70 88 Z" fill="var(--hww-iso-left)" />
      <path d="M118 62 L118 72 L70 98 L70 88 Z" fill="var(--hww-iso-right)" />
      {/* Stacked pages */}
      <path d="M52 48 L76 36 L100 48 L76 60 Z" fill="var(--hww-iso-doc)" />
      <path d="M48 54 L72 42 L96 54 L72 66 Z" fill="var(--hww-iso-doc-mid)" />
      <path d="M44 60 L68 48 L92 60 L68 72 Z" fill="var(--hww-iso-accent-soft)" />
      {/* Lens ring (isometric ellipse approximation) */}
      <ellipse cx="88" cy="44" rx="14" ry="10" stroke="var(--hww-iso-accent)" strokeWidth="3" fill="none" opacity={0.9} />
      <ellipse cx="88" cy="44" rx="8" ry="5.5" fill="var(--hww-iso-glass)" opacity={0.35} />
      <path d="M98 50 L108 58" stroke="var(--hww-iso-accent)" strokeWidth="3" strokeLinecap="round" />
    </SvgShell>
  );
}

export function IsoWireframing({ className }) {
  return (
    <SvgShell className={className}>
      <path d="M70 92 L124 64 L70 36 L16 64 Z" fill="var(--hww-iso-top)" />
      <path d="M16 64 L16 74 L70 102 L70 92 Z" fill="var(--hww-iso-left)" />
      <path d="M124 64 L124 74 L70 102 L70 92 Z" fill="var(--hww-iso-right)" />
      {/* Wireframe panel */}
      <path d="M38 52 L102 52 L102 78 L38 78 Z" stroke="var(--hww-iso-wire)" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
      <path d="M38 58 L102 58 M38 64 L90 64 M38 70 L96 70" stroke="var(--hww-iso-wire)" strokeWidth="1.2" strokeDasharray="3 3" />
      <path d="M44 52 L44 78 M56 52 L56 78 M92 52 L92 78" stroke="var(--hww-iso-wire)" strokeWidth="1" strokeDasharray="2 3" opacity={0.7} />
      <rect x="58" y="44" width="24" height="6" rx="1" stroke="var(--hww-iso-accent)" strokeWidth="1.5" fill="none" strokeDasharray="2 2" />
    </SvgShell>
  );
}

export function IsoUIDesign({ className }) {
  return (
    <SvgShell className={className}>
      <path d="M70 90 L120 65 L70 40 L20 65 Z" fill="var(--hww-iso-top)" opacity={0.85} />
      <path d="M20 65 L20 75 L70 100 L70 90 Z" fill="var(--hww-iso-left)" />
      <path d="M120 65 L120 75 L70 100 L70 90 Z" fill="var(--hww-iso-right)" />
      {/* Back card */}
      <path d="M42 38 L88 22 L118 38 L72 54 Z" fill="var(--hww-iso-card-back)" stroke="var(--hww-iso-wire)" strokeWidth="1" />
      {/* Mid card */}
      <path d="M36 48 L82 32 L112 48 L66 64 Z" fill="var(--hww-iso-card-mid)" stroke="var(--hww-iso-wire)" strokeWidth="1" />
      {/* Front card with UI chrome */}
      <path d="M30 58 L76 42 L106 58 L60 74 Z" fill="var(--hww-iso-card-front)" stroke="var(--hww-iso-accent)" strokeWidth="1.25" />
      <circle cx="52" cy="54" r="3" fill="var(--hww-iso-accent)" opacity={0.85} />
      <circle cx="62" cy="49" r="2.5" fill="#fbbf24" opacity={0.9} />
      <circle cx="70" cy="46" r="2.5" fill="#34d399" opacity={0.85} />
      <path d="M48 62 L72 52" stroke="var(--hww-iso-wire)" strokeWidth="1.5" strokeLinecap="round" opacity={0.8} />
    </SvgShell>
  );
}

export function IsoDevelopment({ className }) {
  return (
    <SvgShell className={className}>
      <path d="M70 94 L122 68 L70 42 L18 68 Z" fill="var(--hww-iso-top)" />
      <path d="M18 68 L18 78 L70 104 L70 94 Z" fill="var(--hww-iso-left)" />
      <path d="M122 68 L122 78 L70 104 L70 94 Z" fill="var(--hww-iso-right)" />
      {/* Laptop base */}
      <path d="M34 72 L106 72 L112 78 L28 78 Z" fill="var(--hww-iso-left)" />
      <path d="M106 72 L112 78 L112 82 L106 76 Z" fill="var(--hww-iso-right)" />
      {/* Screen */}
      <path d="M42 48 L98 48 L104 68 L36 68 Z" fill="var(--hww-iso-screen)" stroke="var(--hww-iso-accent)" strokeWidth="1.5" />
      <path d="M46 54 L58 54 M62 54 L74 54 M46 60 L70 60 M74 60 L86 60" stroke="var(--hww-iso-code)" strokeWidth="2" strokeLinecap="round" />
      <path d="M54 64 L62 68 L70 60" stroke="var(--hww-iso-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </SvgShell>
  );
}

export function IsoLaunch({ className }) {
  return (
    <SvgShell className={className}>
      <path d="M70 92 L118 68 L70 44 L22 68 Z" fill="var(--hww-iso-top)" />
      <path d="M22 68 L22 78 L70 102 L70 92 Z" fill="var(--hww-iso-left)" />
      <path d="M118 68 L118 78 L70 102 L70 92 Z" fill="var(--hww-iso-right)" />
      {/* Launch pad blocks */}
      <path d="M38 72 L52 64 L52 74 L38 82 Z" fill="var(--hww-iso-left)" opacity={0.9} />
      <path d="M52 64 L66 72 L52 80 L38 72 Z" fill="var(--hww-iso-top)" opacity={0.85} />
      <path d="M74 72 L88 64 L88 74 L74 82 Z" fill="var(--hww-iso-right)" opacity={0.9} />
      <path d="M88 64 L102 72 L88 80 L74 72 Z" fill="var(--hww-iso-top)" opacity={0.85} />
      {/* Rocket */}
      <path d="M70 28 L58 52 L70 48 L82 52 Z" fill="var(--hww-iso-accent)" />
      <path d="M62 50 L70 56 L78 50 L70 46 Z" fill="var(--hww-iso-top)" />
      <path d="M66 52 L70 68 L74 52 L70 58 Z" fill="var(--hww-iso-left)" opacity={0.95} />
      {/* Flame */}
      <path d="M66 68 L70 78 L74 68 L70 72 Z" fill="#fbbf24" opacity={0.85} />
      <path d="M68 72 L70 80 L72 72 Z" fill="#f97316" opacity={0.7} />
    </SvgShell>
  );
}

export function IsoOptimization({ className }) {
  return (
    <SvgShell className={className}>
      <path d="M70 90 L120 66 L70 42 L20 66 Z" fill="var(--hww-iso-top)" />
      <path d="M20 66 L20 76 L70 100 L70 90 Z" fill="var(--hww-iso-left)" />
      <path d="M120 66 L120 76 L70 100 L70 90 Z" fill="var(--hww-iso-right)" />
      {/* Bars */}
      <path d="M44 68 L52 64 L52 78 L44 82 Z" fill="var(--hww-iso-bar-1)" />
      <path d="M52 64 L60 60 L60 74 L52 78 Z" fill="var(--hww-iso-bar-1-top)" />
      <path d="M58 62 L66 56 L66 74 L58 80 Z" fill="var(--hww-iso-bar-2)" />
      <path d="M66 56 L74 50 L74 70 L66 74 Z" fill="var(--hww-iso-bar-2-top)" />
      <path d="M72 54 L80 46 L80 72 L72 76 Z" fill="var(--hww-iso-bar-3)" />
      <path d="M80 46 L88 40 L88 68 L80 72 Z" fill="var(--hww-iso-bar-3-top)" />
      {/* Trend */}
      <path
        d="M42 52 L54 46 L68 42 L88 34 L98 30"
        stroke="var(--hww-iso-accent)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M92 30 L98 30 L98 36" stroke="var(--hww-iso-accent)" strokeWidth="2" strokeLinecap="round" fill="none" />
    </SvgShell>
  );
}

const STEP_ART = {
  discovery: IsoDiscovery,
  wireframing: IsoWireframing,
  'ui-design': IsoUIDesign,
  development: IsoDevelopment,
  launch: IsoLaunch,
  optimization: IsoOptimization,
};

export function HowWeWorkStepArt({ stepId, className }) {
  const Cmp = STEP_ART[stepId];
  if (!Cmp) return null;
  return <Cmp className={className} />;
}
