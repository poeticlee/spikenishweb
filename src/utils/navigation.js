/** Smooth-scroll helper for buttons that jump to a section.
 *  Pass `{ instant: true }` for long jumps (e.g. after closing a deep-linked
 *  modal) where flying across the whole page would feel disorienting. */
export function scrollToId(id, { instant = false } = {}) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const top = el.getBoundingClientRect().top + window.scrollY - 76;
  // "instant" bypasses the html { scroll-behavior: smooth } stylesheet rule.
  window.scrollTo({ top, behavior: reduce || instant ? "instant" : "smooth" });
  history.replaceState(null, "", `#${id}`);
}
