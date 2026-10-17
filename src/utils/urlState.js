import { CATEGORIES } from "../data/products";

/**
 * Catalogue deep links:
 *   ?q=caustic          → pre-fills the search box
 *   ?category=liquid-soap → pre-selects a category chip
 *   ?product=caustic-soda → opens that product's detail card
 *
 * Sharing these links (on WhatsApp, social media, etc.) opens the site in the
 * same state the sender was looking at. Google also reads the ?q= parameter via
 * the WebSite SearchAction markup in index.html.
 */

/** Read the current catalogue state from the URL. */
export function readCatalogueState() {
  if (typeof window === "undefined") {
    return { query: "", category: "all", productId: null };
  }
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category") || "all";
  return {
    query: params.get("q") || "",
    category: CATEGORIES.some((c) => c.id === category) ? category : "all",
    productId: params.get("product"),
  };
}

/** Write the catalogue state into the URL (replaceState — no history spam). */
export function writeCatalogueState({ query = "", category = "all", productId = null } = {}) {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams();
  if (query.trim()) params.set("q", query.trim());
  if (category !== "all") params.set("category", category);
  if (productId) params.set("product", productId);
  const qs = params.toString();
  const current = window.location.search;
  // Nothing to write and nothing to clear → leave the URL untouched.
  if (!qs && !current) return;
  const next = `${window.location.pathname}${qs ? `?${qs}` : ""}${window.location.hash || ""}`;
  window.history.replaceState(null, "", next);
}

/** Add or remove just the ?product= parameter (used by the product detail views). */
export function setProductIdInUrl(productId) {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  if (productId) params.set("product", productId);
  else params.delete("product");
  const qs = params.toString();
  const next = `${window.location.pathname}${qs ? `?${qs}` : ""}${window.location.hash || ""}`;
  window.history.replaceState(null, "", next);
}
