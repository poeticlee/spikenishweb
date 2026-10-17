import { MapPin, Map } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import LocationCard from "./LocationCard.jsx";
import Reveal from "./Reveal.jsx";
import { GlowOrb, Ring, DotGridDark } from "./Decorations.jsx";
import { LOCATIONS } from "../data/site";

function MapFrame() {
  const first = LOCATIONS[0];
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(first.mapQuery)}&output=embed`;

  return (
    <div className="overflow-hidden rounded-3xl border border-mist-200 bg-mist-50 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-mist-200 bg-white px-5 py-4">
        <p className="flex items-center gap-2 font-display text-sm font-extrabold text-ink-900">
          <Map className="h-4.5 w-4.5 text-leaf-600" />
          Find us in Ibadan
        </p>
        <div className="flex flex-wrap gap-2">
          {LOCATIONS.map((loc) => (
            <a
              key={loc.id}
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-mist-200 bg-mist-50 px-3 py-1.5 text-xs font-bold text-ink-700 transition hover:border-navy-200 hover:bg-navy-50 hover:text-navy-800"
            >
              <MapPin className="h-3.5 w-3.5 text-leaf-600" />
              {loc.shortAddress}
            </a>
          ))}
        </div>
      </div>

      <div className="relative">
        <iframe
          src={embedUrl}
          title="Map showing Spikenish Chemicals location in Ibadan"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[320px] w-full border-0 sm:h-[380px]"
          allowFullScreen
        />
        <noscript>
          <p className="p-5 text-sm text-ink-500">
            Map unavailable without JavaScript — use the “Open in Maps” buttons above.
          </p>
        </noscript>
      </div>

      <p className="border-t border-mist-200 bg-white px-5 py-3 text-xs leading-relaxed text-ink-400">
        The map shows the Ojoo location as a searchable reference. Tap either location chip above to open
        live directions in Google Maps.
      </p>
    </div>
  );
}

export default function LocationsSection() {
  return (
    <section id="locations" className="relative overflow-hidden bg-mesh-cool py-16 sm:py-20 lg:py-24">
      <DotGridDark className="right-0 top-0 h-56 w-64" />
      <GlowOrb className="-left-16 top-24 h-52 w-52 bg-sky-400/18" />
      <GlowOrb className="-right-16 bottom-16 h-52 w-52 bg-violet-400/12" />
      <Ring className="float-alt left-[5%] bottom-[14%] h-16 w-16 border-leaf-500/30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Visit us"
          title="Visit Our Chemical Shops in Ibadan"
          subtitle="Find us at either of our two shops in Ibadan — inside Net Complex, Ojoo, or opposite Academy Hospital, Iwo Road. Call us directly or message us on WhatsApp before you come."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {LOCATIONS.map((location, i) => (
            <Reveal key={location.id} delay={i * 90} className="h-full">
              <LocationCard location={location} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={140} className="mt-8">
          <MapFrame />
        </Reveal>
      </div>
    </section>
  );
}
