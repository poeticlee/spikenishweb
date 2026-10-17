import { Eye, PackageSearch, Ruler, Tag, CircleCheck } from "lucide-react";
import Img from "./Img.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import { useWhatsApp } from "../context/WhatsAppContext";
import { productEnquiryMessage } from "../utils/whatsapp";
import { CATEGORIES } from "../data/products";

/**
 * Product tile. The detail modal is rendered by the parent section
 * (ProductCatalogue / FeaturedProducts) so the open product can be kept in
 * sync with the ?product= deep-link in the URL.
 */
export default function ProductCard({ product, onOpen }) {
  const { openWhatsApp } = useWhatsApp();
  const category = CATEGORIES.find((c) => c.id === product.category);

  const enquire = () =>
    openWhatsApp(productEnquiryMessage(product.name), `Enquire: ${product.name}`);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-mist-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-[0_24px_50px_-24px_rgba(7,35,72,0.35)]">
      <div className="relative">
        <Img
          src={product.image}
          alt={product.imageAlt || product.name}
          ratio="aspect-[4/3]"
          label={product.name}
          imgClassName="group-hover:scale-[1.04] transition-transform duration-500"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-navy-800 shadow-sm backdrop-blur">
          {category ? category.name : "Chemical"}
        </span>
        {product.stock && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-leaf-600 px-3 py-1 text-[11px] font-bold text-white shadow-sm">
            <CircleCheck className="h-3.5 w-3.5" />
            {product.stock}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-display text-lg font-extrabold leading-snug text-ink-900">{product.name}</h3>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-500">{product.description}</p>
        </div>

        <div className="space-y-1.5">
          {Array.isArray(product.sizes) && product.sizes.length > 0 && (
            <p className="flex items-center gap-2 text-xs font-semibold text-ink-500">
              <Ruler className="h-3.5 w-3.5 text-navy-600" />
              Available sizes: {product.sizes.join(", ")}
            </p>
          )}

          <p className="flex items-start gap-2 text-sm">
            <Tag className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sun-400" />
            {product.price ? (
              <span className="font-display text-base font-extrabold text-navy-800">{product.price}</span>
            ) : (
              <span className="font-semibold text-ink-700">Contact us for current price</span>
            )}
          </p>

          {!product.stock && (
            <p className="flex items-center gap-2 text-xs text-ink-400">
              <PackageSearch className="h-3.5 w-3.5" />
              Availability confirmed on WhatsApp
            </p>
          )}
        </div>

        <div className="mt-auto flex flex-col gap-2 pt-3">
          <button
            type="button"
            onClick={enquire}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-leaf-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-leaf-700"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Enquire on WhatsApp
          </button>
          <button
            type="button"
            onClick={() => onOpen && onOpen(product)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-mist-200 bg-mist-50 px-4 py-2.5 text-sm font-bold text-navy-800 transition hover:border-navy-200 hover:bg-navy-50"
          >
            <Eye className="h-4 w-4" />
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}
