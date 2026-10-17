/**
 * Spikenish Chemicals logo mark + wordmark.
 * tone = "light"  → for white backgrounds (dark text)
 * tone = "dark"   → for navy/green backgrounds (white text)
 */
export function LogoMark({ className = "h-11 w-11" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Spikenish Chemicals logo">
      <defs>
        <linearGradient id="spike-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0a3165" />
          <stop offset="100%" stopColor="#05402a" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="46" height="46" rx="14" fill="url(#spike-mark)" />
      <path
        d="M24 8.5 37.5 16.25v15.5L24 39.5 10.5 31.75v-15.5L24 8.5Z"
        fill="none"
        stroke="#14b866"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M24 15.5c0 0 7.4 8.6 7.4 13.3a7.4 7.4 0 0 1-14.8 0C16.6 24.1 24 15.5 24 15.5Z"
        fill="#ffffff"
      />
      <path d="M20.6 28.9a3.4 3.4 0 0 0 3.4 3.4" fill="none" stroke="#0f9d51" strokeWidth="2" strokeLinecap="round" />
      <circle cx="37.5" cy="16.25" r="3.1" fill="#ffc53d" />
      <circle cx="10.5" cy="31.75" r="2.4" fill="#ffc53d" />
    </svg>
  );
}

export default function Logo({ tone = "light", size = "md", className = "" }) {
  const sizes = {
    sm: { mark: "h-9 w-9", title: "text-lg", sub: "text-[9px]" },
    md: { mark: "h-11 w-11", title: "text-xl", sub: "text-[10px]" },
    lg: { mark: "h-14 w-14", title: "text-2xl", sub: "text-xs" },
  };
  const s = sizes[size] || sizes.md;
  const dark = tone === "dark"; // dark background → light text

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark className={s.mark} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-extrabold tracking-tight ${s.title} ${
            dark ? "text-white" : "text-navy-900"
          }`}
        >
          Spikenish
        </span>
        <span
          className={`font-display font-bold uppercase tracking-[0.32em] ${s.sub} ${
            dark ? "text-leaf-500" : "text-leaf-700"
          }`}
        >
          Chemicals
        </span>
      </span>
    </span>
  );
}
