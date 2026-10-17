import { ArrowRight, CheckCircle2, MapPin, MessageCircle, ShoppingBasket } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import Img from "./Img.jsx";
import Reveal from "./Reveal.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import { BUSINESS, LOCATIONS, SERVICES } from "../data/site";
import { useWhatsApp } from "../context/WhatsAppContext";
import { generalEnquiryMessage } from "../utils/whatsapp";
import { scrollToId } from "../utils/navigation";

import { GlowOrb, Ring, Square } from "./Decorations.jsx";

export default function AboutSection() {
  const { openWhatsApp } = useWhatsApp();

  return (
    <section id="about" className="relative overflow-hidden bg-mesh-warm py-16 sm:py-20 lg:py-24">
      <GlowOrb className="-left-20 top-16 h-60 w-60 bg-sun-400/20" />
      <GlowOrb className="-right-16 bottom-20 h-56 w-56 bg-sky-400/12" />
      <Ring className="spin-slow right-[8%] top-[10%] h-20 w-20 border-leaf-500/30" />
      <Square className="float-soft left-[10%] bottom-[12%] h-8 w-8 rotate-12 bg-violet-400/25" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image side */}
          <Reveal className="relative">
            <Img
              src="/images/about.jpg"
              alt="Production worker at a chemical manufacturing facility"
              ratio="aspect-[4/3] sm:aspect-[5/4]"
              label="Our production support"
              containerClassName="rounded-3xl shadow-[0_35px_70px_-40px_rgba(7,35,72,0.6)]"
            />
            <div className="absolute -bottom-6 -right-2 w-60 rounded-2xl border border-mist-200 bg-white p-4 shadow-xl sm:-right-6">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-50 text-leaf-700">
                  <ShoppingBasket className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-display text-sm font-extrabold text-ink-900">Two shops in Ibadan</p>
                  <p className="mt-0.5 text-xs leading-snug text-ink-500">Ojoo &amp; Iwo Road</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Copy side */}
          <div>
            <SectionHeading
              tone="dark"
              align="left"
              eyebrow="About us"
              title="Your Chemical Raw Materials Supplier in Ibadan"
              className="text-left"
            />

            <Reveal delay={80} className="mt-5 space-y-4">
              <p className="text-base leading-relaxed text-ink-600">{BUSINESS.longDescription}</p>
              <p className="text-base leading-relaxed text-ink-600">
                Whether you are producing your first batch or running an established operation, we supply the
                formulation chemicals you rely on and train you on how to use them properly.
              </p>
            </Reveal>

            <Reveal delay={140} className="mt-7 grid gap-3 sm:grid-cols-2">
              {SERVICES.map((service) => (
                <div key={service.title} className="flex items-start gap-2.5 rounded-xl bg-white p-3.5 shadow-sm ring-1 ring-mist-200">
                  <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-leaf-600" />
                  <div>
                    <p className="text-sm font-bold text-ink-900">{service.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink-500">{service.text}</p>
                  </div>
                </div>
              ))}
            </Reveal>

            <Reveal delay={200} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => scrollToId("locations")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy-800 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-navy-900"
              >
                <MapPin className="h-4 w-4" />
                Visit Our Locations
              </button>
              <button
                type="button"
                onClick={() => openWhatsApp(generalEnquiryMessage(), "Chat with us on WhatsApp")}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-mist-200 bg-white px-5 py-3.5 text-sm font-bold text-navy-800 transition hover:border-navy-200 hover:bg-navy-50"
              >
                <MessageCircle className="h-4 w-4 text-leaf-600" />
                Chat with Us
                <ArrowRight className="h-4 w-4" />
              </button>
            </Reveal>

            <Reveal delay={240} className="mt-6 flex flex-wrap gap-2">
              {LOCATIONS.map((loc) => (
                <span
                  key={loc.id}
                  className="inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-3.5 py-1.5 text-xs font-semibold text-navy-800"
                >
                  <MapPin className="h-3.5 w-3.5 text-leaf-600" />
                  {loc.shortAddress}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
