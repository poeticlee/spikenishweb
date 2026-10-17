import { useState } from "react";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import ProductCard from "./ProductCard.jsx";
import ProductModal from "./ProductModal.jsx";
import Reveal from "./Reveal.jsx";
import { GlowOrb, Ring, DotGridDark, WaveDivider } from "./Decorations.jsx";
import { FEATURED_PRODUCTS } from "../data/products";
import { scrollToId } from "../utils/navigation";
import { setProductIdInUrl } from "../utils/urlState";

/** Homepage "featured products" row — driven by `featured: true` in the data file. */
export default function FeaturedProducts() {
  const featured = FEATURED_PRODUCTS.slice(0, 8);
  const [openProduct, setOpenProduct] = useState(null);

  // "View Details" keeps the ?product= link in the URL so it can be shared.
  const openDetails = (product) => {
    setOpenProduct(product);
    setProductIdInUrl(product.id);
  };
  const closeDetails = () => {
    setOpenProduct(null);
    setProductIdInUrl(null);
  };

  return (
    <section className="relative overflow-hidden bg-mesh-cool py-16 sm:py-20 lg:py-24">
      {/* colour decor */}
      <DotGridDark className="right-0 top-0 h-64 w-72" />
      <GlowOrb className="-left-24 top-32 h-64 w-64 bg-sky-400/20" />
      <GlowOrb className="-right-20 bottom-24 h-60 w-60 bg-leaf-500/15" />
      <Ring className="float-alt right-[6%] top-[8%] h-20 w-20 border-violet-400/30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            tone="dark"
            align="left"
            eyebrow="Featured materials"
            title="A Selection of Our Raw Materials"
            subtitle="Core chemicals drawn from our catalogue — browse the full range below."
            className="max-w-2xl"
          />
          <Reveal delay={100}>
            <button
              type="button"
              onClick={() => scrollToId("products")}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-navy-800 px-5 py-3 text-sm font-bold text-navy-800 transition hover:bg-navy-800 hover:text-white"
            >
              View full catalogue
              <ArrowRight className="h-4 w-4" />
            </button>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featured.map((product, i) => (
            <Reveal key={product.id} delay={(i % 4) * 60} className="h-full">
              <ProductCard product={product} onOpen={openDetails} />
            </Reveal>
          ))}
        </div>

        {openProduct && <ProductModal product={openProduct} onClose={closeDetails} />}
      </div>
    </section>
  );
}
