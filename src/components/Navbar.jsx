import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import Logo from "./Logo.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import { NAV_LINKS } from "../data/site";
import { useWhatsApp } from "../context/WhatsAppContext";
import { generalEnquiryMessage } from "../utils/whatsapp";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const { openWhatsApp } = useWhatsApp();

  // Sticky bar styling after scrolling.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Highlight the section currently in view.
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    const id = href.slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      setActive(href);
      history.replaceState(null, "", href);
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">
      <nav
        aria-label="Main navigation"
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-mist-200 bg-white/95 shadow-[0_6px_24px_-12px_rgba(7,35,72,0.35)] backdrop-blur"
            : "border-transparent bg-white"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* Name comes from the content itself (logo mark + wordmark) so it
              always matches the visible text — WCAG 2.5.3 Label In Name.
              The sr-only suffix adds screen-reader context without changing
              what sighted users see. */}
          <a href="#home" onClick={(e) => handleNavClick(e, "#home")}>
            <Logo />
            <span className="sr-only">— home</span>
          </a>

          <ul className="hidden items-center gap-1 xl:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-lg px-3.5 py-2 text-[15px] font-semibold transition ${
                      isActive ? "text-navy-800" : "text-ink-700 hover:bg-mist-50 hover:text-navy-700"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-leaf-600 transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => openWhatsApp(generalEnquiryMessage(), "Order on WhatsApp")}
              className="hidden items-center gap-2 rounded-xl bg-leaf-600 px-4 py-2.5 text-sm font-bold text-white shadow-[0_10px_20px_-10px_rgba(15,157,81,0.9)] transition hover:bg-leaf-700 md:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Order on WhatsApp
            </button>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-mist-200 p-2.5 text-ink-800 transition hover:bg-mist-50 xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile / tablet menu */}
        <div
          id="mobile-menu"
          hidden={!open}
          className="border-t border-mist-200 bg-white xl:hidden"
        >
          <ul className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block rounded-xl px-4 py-3 text-base font-semibold transition ${
                    active === link.href
                      ? "bg-navy-50 text-navy-800"
                      : "text-ink-700 hover:bg-mist-50 hover:text-navy-700"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openWhatsApp(generalEnquiryMessage(), "Order on WhatsApp");
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-leaf-600 px-4 py-3.5 text-sm font-bold text-white transition hover:bg-leaf-700"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Order on WhatsApp
              </button>
            </li>
            <li>
              <a
                href="https://wa.me/2347066457617"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-navy-200 bg-navy-50 px-4 py-3 text-sm font-semibold text-navy-800 transition hover:bg-navy-100"
              >
                <MessageCircle className="h-4 w-4" />
                Chat: 07066457617
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
