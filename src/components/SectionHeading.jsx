import Reveal from "./Reveal";

/** Consistent eyebrow + heading + optional subtitle used across sections. */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
  className = "",
}) {
  const isDark = tone === "dark"; // dark heading on light background
  return (
    <Reveal
      className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : "items-start text-left"} ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] ${
            isDark
              ? "bg-navy-50 text-navy-700"
              : "bg-white/10 text-sun-300 ring-1 ring-white/15"
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${isDark ? "bg-leaf-600" : "bg-sun-400"}`} />
          {eyebrow}
        </span>
      )}
      <h2
        className={`max-w-3xl font-display text-3xl font-extrabold leading-[1.12] sm:text-4xl lg:text-[2.75rem] ${
          isDark ? "text-ink-900" : "text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-3xl text-base leading-relaxed sm:text-lg ${isDark ? "text-ink-500" : "text-navy-100"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
