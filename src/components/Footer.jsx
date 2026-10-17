import { ArrowUp, Phone, MapPin, ArrowRight } from "lucide-react";
import Logo from "./Logo.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import { BUSINESS, NAV_LINKS, LOCATIONS, PHONE_NUMBERS, WHATSAPP_NUMBERS } from "../data/site";
import { CATEGORIES } from "../data/products";
import { useWhatsApp } from "../context/WhatsAppContext";
import { generalEnquiryMessage } from "../utils/whatsapp";
import { scrollToId } from "../utils/navigation";

export default function Footer() {
  const { openWhatsApp } = useWhatsApp();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-vivid-footer text-white">
      <div className="spectrum-ribbon h-1.5 w-full" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 pattern-dots opacity-50"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo tone="dark" size="md" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-100">{BUSINESS.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => openWhatsApp(generalEnquiryMessage(), "Chat with us on WhatsApp")}
                className="inline-flex items-center gap-2 rounded-xl bg-leaf-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-leaf-700"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Order on WhatsApp
              </button>
              <a
                href="#faq"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("faq");
                }}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                FAQs
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation" className="lg:col-span-2">
            <h2 className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-sun-300">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId(link.href.slice(1));
                    }}
                    className="text-sm text-navy-100 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId("faq");
                  }}
                  className="text-sm text-navy-100 transition hover:text-white"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </nav>

          {/* Product categories */}
          <nav aria-label="Product categories" className="lg:col-span-3">
            <h2 className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-sun-300">
              Product categories
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    type="button"
                    onClick={() => scrollToId("products")}
                    className="text-left text-sm text-navy-100 transition hover:text-white"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Locations & contact */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-sun-300">
              Our locations
            </h2>
            <ul className="mt-4 space-y-4">
              {LOCATIONS.map((loc) => (
                <li key={loc.id} className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-leaf-500" />
                  <span className="text-sm leading-relaxed text-navy-100">{loc.address}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-6 font-display text-sm font-extrabold uppercase tracking-[0.16em] text-sun-300">
              Call us
            </h2>
            <ul className="mt-3 space-y-2">
              {PHONE_NUMBERS.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone}`}
                    className="inline-flex items-center gap-2 font-display text-base font-extrabold text-white transition hover:text-leaf-500"
                  >
                    <Phone className="h-4 w-4 text-leaf-500" />
                    {phone}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col gap-2">
              {WHATSAPP_NUMBERS.map((num) => (
                <a
                  key={num.id}
                  href={`https://wa.me/${num.intl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-leaf-500/40 bg-leaf-600/10 px-4 py-2.5 text-sm font-bold text-leaf-500 transition hover:bg-leaf-600 hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp {num.display}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-center text-xs leading-relaxed text-navy-100 sm:text-left">
            © {year} {BUSINESS.name}. Chemical raw materials &amp; formulation training in Ibadan, Nigeria.
          </p>
          <div className="flex items-center gap-4 text-xs text-navy-100">
            <span>Prices confirmed on WhatsApp</span>
            <a
              href="/images/CREDITS.md"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 transition hover:text-white hover:underline"
            >
              Photo credits
            </a>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("home");
              }}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
