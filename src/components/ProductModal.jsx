import { useEffect, useRef } from "react";
import { X, Tag, Ruler, CircleCheck, Package } from "lucide-react";
import Img from "./Img.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import { useWhatsApp } from "../context/WhatsAppContext";
import { productEnquiryMessage } from "../utils/whatsapp";
import { CATEGORIES } from "../data/products";

export default function ProductModal({ product, onClose }) {
  const panelRef = useRef(null);
  const { openWhatsApp } = useWhatsApp();
  const category = CATEGORIES.find((c) => c.id === product.category);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-navy-950/60 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(e) => {
        if (panelRef.current && !panelRef.current.contains(e.target)) onClose();
      }}
      role="presentation"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl"
      >
        <div className="relative">
          <Img
            src={product.image}
            alt={product.imageAlt || product.name}
            ratio="aspect-[16/9]"
            label={product.name}
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close product details"
            className="absolute right-3 top-3 rounded-full bg-white/95 p-2 text-ink-700 shadow-md transition hover:bg-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-5 p-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-navy-700">
              <Package className="h-3.5 w-3.5" />
              {category ? category.name : "Chemical"}
            </span>
            <h3 id="product-modal-title" className="mt-3 font-display text-2xl font-extrabold text-ink-900">
              {product.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-500">{product.description}</p>
          </div>

          {Array.isArray(product.details) && product.details.length > 0 && (
            <ul className="space-y-2 rounded-xl border border-mist-200 bg-mist-50 p-4">
              {product.details.map((line) => (
                <li key={line} className="flex items-start gap-2 text-sm text-ink-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf-600" />
                  {line}
                </li>
              ))}
            </ul>
          )}

          <dl className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-mist-200 p-3">
              <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink-400">
                <Tag className="h-3.5 w-3.5" /> Price
              </dt>
              <dd className="mt-1 text-sm font-bold text-navy-800">
                {product.price || "Contact us for current price"}
              </dd>
            </div>
            <div className="rounded-xl border border-mist-200 p-3">
              <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink-400">
                <Ruler className="h-3.5 w-3.5" /> Sizes
              </dt>
              <dd className="mt-1 text-sm font-bold text-navy-800">
                {Array.isArray(product.sizes) && product.sizes.length ? product.sizes.join(", ") : "Ask on WhatsApp"}
              </dd>
            </div>
            <div className="rounded-xl border border-mist-200 p-3">
              <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink-400">
                <CircleCheck className="h-3.5 w-3.5" /> Stock
              </dt>
              <dd className="mt-1 text-sm font-bold text-navy-800">
                {product.stock || "Confirm availability"}
              </dd>
            </div>
          </dl>

          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => {
                onClose();
                openWhatsApp(productEnquiryMessage(product.name), `Enquire: ${product.name}`);
              }}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-leaf-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-leaf-700"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Enquire on WhatsApp
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-mist-200 px-5 py-3.5 text-sm font-bold text-ink-700 transition hover:bg-mist-50"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
