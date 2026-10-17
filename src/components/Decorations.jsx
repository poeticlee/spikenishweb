/**
 * Floating decorative shapes — colourful circles, rings and squares that
 * drift in section backgrounds. Purely visual (aria-hidden), and every
 * animation is disabled under prefers-reduced-motion via CSS.
 */
export function GlowOrb({ className = "" }) {
  return <span aria-hidden="true" className={`pointer-events-none absolute rounded-full blur-3xl ${className}`} />;
}

export function Ring({ className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full border-[3px] opacity-60 ${className}`}
    />
  );
}

export function Square({ className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-2xl opacity-50 blur-[1px] ${className}`}
    />
  );
}

export function DotGrid({ className = "" }) {
  return <span aria-hidden="true" className={`pointer-events-none absolute pattern-dots ${className}`} />;
}

export function DotGridDark({ className = "" }) {
  return <span aria-hidden="true" className={`pointer-events-none absolute pattern-dots-dark ${className}`} />;
}

/**
 * SVG wave divider. Place inside a relatively-positioned section at the
 * top (flip) or bottom edge. `fill` accepts any CSS colour/gradient token.
 */
export function WaveDivider({ flip = false, fill = "#ffffff", className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute left-0 w-full ${flip ? "top-0 -scale-y-100" : "bottom-0"} h-12 sm:h-16 lg:h-20 ${className}`}
    >
      <path
        d="M0,48 C240,96 480,0 720,32 C960,64 1200,96 1440,40 L1440,90 L0,90 Z"
        fill={fill}
      />
    </svg>
  );
}
