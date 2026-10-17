import { useEffect, useMemo, useState } from "react";
import { Search, X, SearchX, Info, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import CategoryFilter from "./CategoryFilter.jsx";
import ProductCard from "./ProductCard.jsx";
import ProductModal from "./ProductModal.jsx";
import Reveal from "./Reveal.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import { PRODUCTS, CATEGORIES } from "../data/products";
import { useWhatsApp } from "../context/WhatsAppContext";
import { readCatalogueState, writeCatalogueState } from "../utils/urlState";
import { scrollToId } from "../utils/navigation";

export default function ProductCatalogue() {
  const initial = useMemo(readCatalogueState, []);
  const [query, setQuery] = useState(initial.query);
  const [category, setCategory] = useState(initial.category);
  const [openProduct, setOpenProduct] = useState(
    () => PRODUCTS.find((p) => p.id === initial.productId) || null
  );
  const { openWhatsApp } = useWhatsApp();

  // Keep the URL in sync so filtered views and product links are shareable.
  useEffect(() => {
    writeCatalogueState({ query, category, productId: openProduct ? openProduct.id : null });
  }, [query, category, openProduct]);

  // React to browser back/forward navigation between catalogue states.
  useEffect(() => {
    const onPop = () => {
      const state = readCatalogueState();
      setQuery(state.query);
      setCategory(state.category);
      setOpenProduct(PRODUCTS.find((p) => p.id === state.productId) || null);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // ?product= deep link → the detail card opens on load (scrolling is blocked
  // while it locks the page), so we jump to the product list when it closes.
  const [deepLinkPending, setDeepLinkPending] = useState(Boolean(initial.productId));

  const closeProduct = () => {
    setOpenProduct(null);
    if (deepLinkPending) {
      setDeepLinkPending(false);
      // Jump on the next task — after React unmounts the modal and releases
      // the page scroll lock.
      setTimeout(() => scrollToId("products", { instant: true }), 0);
    }
  };

  const counts = useMemo(() => {
    const map = { all: PRODUCTS.length };
    CATEGORIES.forEach((c) => {
      map[c.id] = PRODUCTS.filter((p) => p.category === c.id).length;
    });
    return map;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const inCategory = category === "all" || p.category === category;
      if (!inCategory) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.details || []).join(" ").toLowerCase().includes(q)
      );
    });
  }, [query, category]);

  const activeCategory = CATEGORIES.find((c) => c.id === category);

  const askAboutSearch = () => {
    const term = query.trim() || activeCategory?.name || "your products";
    openWhatsApp(
      `Hello Spikenish Chemicals, please send me the current list and prices for: ${term}.`,
      "Ask about availability"
    );
  };

  return (
    <section id="products" className="relative bg-mesh-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Product Catalogue"
          title="Chemicals & Raw Materials for Your Formulations"
          subtitle="Browse chemical raw materials supplied from our shops in Ibadan, Nigeria — for liquid soap, disinfectants, bleach, insecticides, air fresheners and cosmetics. Availability changes, so message us on WhatsApp to confirm current stock, sizes and prices before you buy."
        />

        {/* Search */}
        <Reveal delay={80} className="mx-auto mt-9 max-w-2xl">
          <label htmlFor="product-search" className="sr-only">
            Search products
          </label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400" />
            <input
              id="product-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search chemicals… e.g. caustic soda, texapon, bleach"
              className="w-full rounded-2xl border border-mist-200 bg-mist-50 py-4 pl-12 pr-12 text-base text-ink-900 shadow-sm outline-none transition placeholder:text-ink-400 focus:border-navy-200 focus:bg-white focus:ring-4 focus:ring-navy-50"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-ink-400 transition hover:bg-mist-100 hover:text-ink-700"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </Reveal>

        {/* Category chips */}
        <Reveal delay={140} className="mt-6">
          <CategoryFilter counts={counts} active={category} onChange={setCategory} />
        </Reveal>

        {/* Result meta */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-b border-mist-200 pb-5 sm:flex-row">
          <p className="text-sm font-semibold text-ink-500" aria-live="polite">
            Showing <span className="font-display font-extrabold text-navy-800">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "product" : "products"}
            {category !== "all" && activeCategory && (
              <>
                {" "}
                in <span className="text-navy-800">{activeCategory.name}</span>
              </>
            )}
            {query.trim() && (
              <>
                {" "}
                for “<span className="text-navy-800">{query.trim()}</span>”
              </>
            )}
          </p>
          <p className="inline-flex items-center gap-2 rounded-full bg-sun-100 px-3.5 py-1.5 text-xs font-bold text-ink-700">
            <Info className="h-3.5 w-3.5 text-sun-400" />
            Prices are confirmed on WhatsApp — we do not list unconfirmed prices.
          </p>
        </div>

        {/* Grid / empty state */}
        {filtered.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product, i) => (
              <Reveal key={product.id} delay={(i % 4) * 60} className="h-full">
                <ProductCard product={product} onOpen={setOpenProduct} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mt-10 flex flex-col items-center gap-4 rounded-3xl border border-dashed border-mist-200 bg-mist-50 px-6 py-14 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-ink-400 shadow-sm">
              <SearchX className="h-7 w-7" />
            </span>
            <div>
              <h3 className="font-display text-lg font-extrabold text-ink-900">No products found</h3>
              <p className="mt-1 max-w-md text-sm text-ink-500">
                We could not find a match for your search. It may still be available — ask us directly on
                WhatsApp and we will confirm.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setCategory("all");
                }}
                className="rounded-xl border border-mist-200 bg-white px-5 py-3 text-sm font-bold text-ink-700 transition hover:bg-mist-50"
              >
                Reset filters
              </button>
              <button
                type="button"
                onClick={askAboutSearch}
                className="inline-flex items-center gap-2 rounded-xl bg-leaf-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-leaf-700"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Ask on WhatsApp
              </button>
            </div>
          </Reveal>
        )}

        {/* Owner note */}
        <Reveal
          delay={80}
          className="mt-10 flex flex-col gap-4 rounded-3xl bg-navy-900 p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-7"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-leaf-600 text-white">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-lg font-extrabold">Don’t see what you need?</h3>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-navy-100">
                Our range goes beyond this list. Send us the material, grade and quantity you need — we will
                confirm availability and send current prices on WhatsApp.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() =>
              openWhatsApp(
                "Hello Spikenish Chemicals, please let me know the availability and current price of the chemical I need:",
                "General product enquiry"
              )
            }
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-leaf-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-leaf-700"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Message us
          </button>
        </Reveal>
      </div>

      {/* Detail view for the product in ?product= (and for "View Details" clicks). */}
      {openProduct && <ProductModal product={openProduct} onClose={closeProduct} />}
    </section>
  );
}
