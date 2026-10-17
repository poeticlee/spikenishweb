import { useState } from "react";
import { Send, Phone, AlertCircle, CheckCircle2, Clock3, MessageSquareText } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import { GlowOrb, Ring, DotGrid, WaveDivider } from "./Decorations.jsx";
import { PHONE_NUMBERS, LOCATIONS, AREA_OF_INTEREST_OPTIONS } from "../data/site";
import { useWhatsApp } from "../context/WhatsAppContext";

function buildWhatsAppMessage({ name, phone, interest, message }) {
  const lines = [
    "Hello Spikenish Chemicals, I would like to make an enquiry.",
    "",
    `Full name: ${name}`,
    `Phone number: ${phone}`,
    `Area of interest: ${interest}`,
  ];
  if (message.trim()) {
    lines.push("", `Message: ${message.trim()}`);
  }
  return lines.join("\n");
}

const EMPTY = { name: "", phone: "", interest: "", message: "" };

export default function ContactSection() {
  const { openWhatsApp } = useWhatsApp();
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | preparing | opened
  const [lastMessage, setLastMessage] = useState("");

  const validate = () => {
    const next = {};
    if (form.name.trim().length < 2) next.name = "Please enter your full name.";
    if (!/^[0-9+\s()-]{7,}$/.test(form.phone.trim())) next.phone = "Please enter a valid phone number.";
    if (!form.interest) next.interest = "Please choose an area of interest.";
    return next;
  };

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const message = buildWhatsAppMessage(form);
    setLastMessage(message);
    setStatus("preparing");

    // No backend on this site: the form prepares a WhatsApp message instead.
    window.setTimeout(() => {
      openWhatsApp(message, "Send your enquiry on WhatsApp");
      setStatus("opened");
    }, 350);
  };

  const inputClass = (field) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 shadow-sm outline-none transition placeholder:text-ink-400 focus:ring-4 ${
      errors[field]
        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
        : "border-mist-200 focus:border-navy-200 focus:ring-navy-50"
    }`;

  return (
    <section id="contact" className="relative overflow-hidden bg-vivid-contact py-16 text-white sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 hero-grid" aria-hidden="true" />
      <DotGrid className="inset-x-0 top-0 h-64" />
      <GlowOrb className="absolute -right-32 top-10 h-72 w-72 bg-leaf-500/25" />
      <GlowOrb className="absolute -left-24 bottom-10 h-64 w-64 bg-sun-400/15" />
      <GlowOrb className="absolute left-1/3 top-1/2 h-48 w-48 bg-sky-400/15" />
      <Ring className="spin-slow left-[6%] top-[12%] h-20 w-20 border-sun-400/35" />
      <Ring className="float-alt right-[8%] bottom-[16%] h-16 w-16 border-leaf-500/35" />
      {/* waves from the light section above and into the light section below */}
      <WaveDivider flip fill="#f0fdf4" />
      <WaveDivider fill="#fefce8" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get in touch"
          title="Talk to Spikenish Chemicals"
          subtitle="Call, WhatsApp, or send us a quick message below — it arrives on WhatsApp, so your enquiry stays in the chat."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* ---------- Contact details ---------- */}
          <Reveal className="space-y-5 lg:col-span-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-sun-300">Phone lines</p>
              <div className="mt-4 space-y-3">
                {PHONE_NUMBERS.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3.5 transition hover:bg-white/10"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-leaf-600 text-white">
                      <Phone className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-navy-100">
                        Call us
                      </span>
                      <span className="block font-display text-lg font-extrabold text-white">{phone}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-sun-300">Our shops</p>
              <ul className="mt-4 space-y-3">
                {LOCATIONS.map((loc) => (
                  <li key={loc.id} className="flex items-start gap-3 text-sm leading-relaxed text-navy-100">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/10 text-leaf-500">
                      <MessageSquareText className="h-3.5 w-3.5" />
                    </span>
                    <span>
                      <span className="block font-bold text-white">{loc.name}</span>
                      {loc.address}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-start gap-3 rounded-3xl border border-sun-400/30 bg-sun-400/10 p-5">
              <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-sun-400" />
              <p className="text-sm leading-relaxed text-navy-100">
                Messages go straight to WhatsApp — reply times vary, but your message stays in the chat so
                nothing gets lost.
              </p>
            </div>
          </Reveal>

          {/* ---------- Form ---------- */}
          <Reveal delay={100} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl bg-white p-6 text-ink-900 shadow-[0_35px_70px_-40px_rgba(0,0,0,0.9)] sm:p-8"
            >
              <div className="flex items-start gap-3 rounded-xl border border-navy-100 bg-navy-50 p-4">
                <WhatsAppIcon className="mt-0.5 h-5 w-5 shrink-0 text-whatsapp-dark" />
                <p className="text-xs leading-relaxed text-ink-600">
                  <strong className="font-bold text-ink-900">No online database is connected.</strong> Pressing
                  “Send via WhatsApp” opens WhatsApp with your details already written out — you review and
                  send it. Nothing is stored on this website.
                </p>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm font-bold text-ink-800">
                    Full name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="e.g. Adebayo Ogunleye"
                    value={form.name}
                    onChange={update("name")}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className={inputClass("name")}
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-red-600">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-bold text-ink-800">
                    Phone number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="e.g. 0801 234 5678"
                    value={form.phone}
                    onChange={update("phone")}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                    className={inputClass("phone")}
                  />
                  {errors.phone && (
                    <p id="contact-phone-error" className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-red-600">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="contact-interest" className="mb-1.5 block text-sm font-bold text-ink-800">
                  Area of interest
                </label>
                <select
                  id="contact-interest"
                  name="interest"
                  value={form.interest}
                  onChange={update("interest")}
                  aria-invalid={Boolean(errors.interest)}
                  aria-describedby={errors.interest ? "contact-interest-error" : undefined}
                  className={`${inputClass("interest")} ${!form.interest ? "text-ink-400" : ""}`}
                >
                  <option value="">Select what you need…</option>
                  {AREA_OF_INTEREST_OPTIONS.map((option) => (
                    <option key={option} value={option} className="text-ink-900">
                      {option}
                    </option>
                  ))}
                </select>
                {errors.interest && (
                  <p id="contact-interest-error" className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-red-600">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.interest}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <label htmlFor="contact-message" className="mb-1.5 block text-sm font-bold text-ink-800">
                  Message <span className="font-medium text-ink-400">(optional)</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Tell us the material, size or product you have in mind…"
                  value={form.message}
                  onChange={update("message")}
                  className={`${inputClass("message")} resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={status === "preparing"}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-leaf-600 px-6 py-4 text-base font-bold text-white shadow-[0_18px_35px_-18px_rgba(15,157,81,1)] transition hover:bg-leaf-700 disabled:cursor-wait disabled:opacity-70"
              >
                {status === "preparing" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Preparing your WhatsApp message…
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send via WhatsApp
                  </>
                )}
              </button>

              {status === "opened" && (
                <div
                  role="status"
                  className="mt-4 flex flex-col gap-3 rounded-xl border border-leaf-100 bg-leaf-50 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <p className="flex items-start gap-2 text-sm text-ink-700">
                    <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-leaf-600" />
                    <span>
                      Your message was prepared in WhatsApp. Press send there to reach us — nothing was
                      stored on this website.
                    </span>
                  </p>
                  <button
                    type="button"
                    onClick={() => openWhatsApp(lastMessage, "Send your enquiry on WhatsApp")}
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-leaf-600 px-4 py-2.5 text-xs font-bold text-leaf-700 transition hover:bg-leaf-600 hover:text-white"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Open again
                  </button>
                </div>
              )}

              <p className="mt-4 text-center text-xs text-ink-400">
                Prefer talking? Call {PHONE_NUMBERS[0]} or {PHONE_NUMBERS[1]}.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
