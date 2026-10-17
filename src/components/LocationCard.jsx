import { MapPin, Phone, Navigation, MessageCircle } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import { PHONE_NUMBERS } from "../data/site";
import { useWhatsApp } from "../context/WhatsAppContext";

/**
 * One location card. Each branch shows BOTH phone numbers (both lines reach
 * either shop) and the WhatsApp button opens the number selector.
 * mapQuery is used for a searchable Google Maps link — no invented coordinates.
 */
export default function LocationCard({ location, index }) {
  const { openWhatsApp } = useWhatsApp();
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapQuery)}`;
  const waMessage = `Hello Spikenish Chemicals, I would like to visit your ${location.name} at ${location.address}. Please share directions.`;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-mist-200 bg-white p-6 transition hover:border-navy-200 hover:shadow-[0_24px_50px_-30px_rgba(7,35,72,0.4)] sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white">
          <MapPin className="h-6 w-6" />
        </span>
        <span className="rounded-full bg-sun-100 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-ink-700">
          Location {index + 1}
        </span>
      </div>

      <h3 className="mt-5 font-display text-xl font-extrabold text-ink-900">{location.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">{location.address}</p>
      <p className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-leaf-700">
        <Navigation className="h-3.5 w-3.5" />
        {location.notes}
      </p>

      <p className="mt-5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide text-ink-400">
        <Phone className="h-3.5 w-3.5" />
        Call this branch
      </p>
      <div className="mt-2 space-y-2">
        {PHONE_NUMBERS.map((phone) => (
          <a
            key={phone}
            href={`tel:${phone}`}
            className="flex items-center gap-3 rounded-xl bg-mist-50 px-4 py-3 transition hover:bg-navy-50"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-navy-700 shadow-sm">
              <Phone className="h-4.5 w-4.5" />
            </span>
            <span className="font-display text-base font-extrabold text-navy-900">{phone}</span>
          </a>
        ))}
      </div>

      <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-mist-200 bg-white px-4 py-3 text-sm font-bold text-ink-700 transition hover:border-navy-200 hover:bg-navy-50 hover:text-navy-800"
        >
          <Navigation className="h-4 w-4" />
          Open in Maps
        </a>
        <button
          type="button"
          onClick={() => openWhatsApp(waMessage, `Enquire: ${location.name}`)}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-leaf-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-leaf-700"
        >
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp branch
        </button>
      </div>

      <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-ink-400">
        <MessageCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        Map link opens a searchable location — message us if you need directions.
      </p>
    </article>
  );
}
