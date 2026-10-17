import { MapPin, MessageCircle, Navigation } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import { GlowOrb, Ring, DotGridDark } from "./Decorations.jsx";
import { LOCATIONS, SERVICE_AREAS } from "../data/site";
import { useWhatsApp } from "../context/WhatsAppContext";
import { scrollToId } from "../utils/navigation";

/**
 * Local-search section: names the parts of Ibadan people buy chemicals from,
 * next to our two shops. Content is proximity-based — it makes no delivery or
 * coverage promises.
 */
export default function ServiceAreas() {
  const { openWhatsApp } = useWhatsApp();

  const visitMessage =
    "Hello Spikenish Chemicals, I am planning to visit your shop. Please confirm these materials are available before I come:";

  return (
    <section id="service-areas" className="relative overflow-hidden bg-mesh-mint py-16 sm:py-20 lg:py-24">
      <DotGridDark className="left-0 bottom-0 h-56 w-72" />
      <GlowOrb className="-right-20 top-16 h-56 w-56 bg-leaf-500/16" />
      <GlowOrb className="-left-16 bottom-20 h-52 w-52 bg-sun-400/14" />
      <Ring className="spin-slow right-[6%] bottom-[12%] h-20 w-20 border-violet-400/30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Copy */}
          <div>
            <SectionHeading
              tone="dark"
              align="left"
              eyebrow="Buying chemicals in Ibadan"
              title="Chemical Suppliers in Ibadan, Oyo State"
              subtitle="Our two shops are inside Net Complex at Ojoo and opposite Academy Hospital on Iwo Road — both in Ibadan. Message us on WhatsApp before you travel from anywhere in the city, so we can confirm the materials, sizes and prices you need."
              className="text-left"
            />

            <Reveal delay={80} className="mt-5 space-y-4">
              <p className="text-base leading-relaxed text-ink-600">
                Send us your list first and we will reply with what is currently available and the current
                price for each item — then you can plan your visit with confidence instead of guessing.
              </p>
              <p className="flex items-start gap-2.5 rounded-xl border border-sun-200 bg-sun-100 p-4 text-sm leading-relaxed text-ink-700">
                <Navigation className="mt-0.5 h-4 w-4 shrink-0 text-sun-500" />
                <span>
                  Coming from outside Ibadan? Send us your list and your location first, and we will advise
                  you.
                </span>
              </p>
            </Reveal>

            <Reveal delay={140} className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => openWhatsApp(visitMessage, "Planning a visit")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-leaf-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-leaf-700"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Send Your List on WhatsApp
              </button>
              <button
                type="button"
                onClick={() => scrollToId("locations")}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-navy-800 px-5 py-3.5 text-sm font-bold text-navy-800 transition hover:bg-navy-800 hover:text-white"
              >
                <MapPin className="h-4 w-4" />
                See Map &amp; Phone Numbers
              </button>
            </Reveal>
          </div>

          {/* Areas cloud */}
          <Reveal delay={100} className="rounded-3xl border border-mist-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-leaf-50 text-leaf-700">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-extrabold text-ink-900">
                  Neighbourhoods around our Ibadan shops
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-500">
                  Browse the areas and landmarks around Ojoo and Iwo Road. Wherever you are in Ibadan,
                  message us before you set out.
                </p>
              </div>
            </div>

            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Areas in and around Ibadan">
              {SERVICE_AREAS.map((area) => (
                <li
                  key={area}
                  className="inline-flex items-center gap-1.5 rounded-full bg-mist-100 px-3.5 py-1.5 text-xs font-bold text-ink-700 ring-1 ring-mist-200"
                >
                  <MapPin className="h-3.5 w-3.5 text-leaf-600" />
                  {area}
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-2 border-t border-mist-200 pt-5">
              {LOCATIONS.map((loc) => (
                <p key={loc.id} className="flex items-start gap-2 text-sm text-ink-600">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-navy-600" />
                  <span>
                    <strong className="text-ink-900">{loc.name}:</strong> {loc.shortAddress}
                  </span>
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
