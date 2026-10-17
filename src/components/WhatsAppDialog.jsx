import { useEffect, useRef, useState } from "react";
import { X, Phone, MessageSquareText, RotateCcw } from "lucide-react";
import { WHATSAPP_NUMBERS, PHONE_NUMBERS } from "../data/site";
import { waLink } from "../utils/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

/**
 * WhatsApp contact selector — lets the customer choose either business
 * number before continuing to WhatsApp. The message is editable: the
 * suggested text shows as a placeholder, and anything the customer types
 * replaces it in the wa.me links.
 */
export default function WhatsAppDialog({ title, message, onClose }) {
  const panelRef = useRef(null);
  const firstButtonRef = useRef(null);
  const [draft, setDraft] = useState("");

  // Whatever the customer typed (or the suggested message if they typed nothing)
  // is what both WhatsApp links carry.
  const outgoingMessage = draft.trim() || message;

  useEffect(() => {
    firstButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const onBackdrop = (e) => {
    if (panelRef.current && !panelRef.current.contains(e.target)) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-navy-950/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={onBackdrop}
      role="presentation"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="wa-dialog-title"
        className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl"
      >
        <div className="relative overflow-hidden rounded-t-2xl bg-vivid-band px-6 pb-6 pt-6 text-white sm:rounded-t-2xl">
          <div className="hero-grid absolute inset-0 opacity-70" aria-hidden="true" />
          <span
            className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-sun-400/25 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-whatsapp text-navy-950">
                <WhatsAppIcon className="h-6 w-6" />
              </span>
              <div>
                <h2 id="wa-dialog-title" className="font-display text-lg font-extrabold leading-tight">
                  {title}
                </h2>
                <p className="text-sm text-navy-100">Choose a business number to continue</p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close WhatsApp dialog"
              className="rounded-full p-2 text-navy-100 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="space-y-4 px-6 py-6">
          <div className="rounded-xl border border-mist-200 bg-mist-50 p-4">
            <label
              htmlFor="wa-dialog-message"
              className="mb-1 flex items-center justify-between gap-2 text-xs font-bold uppercase tracking-wider text-ink-500"
            >
              <span className="flex items-center gap-2">
                <MessageSquareText className="h-4 w-4 text-leaf-600" />
                Your message
              </span>
              {draft.trim() && (
                <button
                  type="button"
                  onClick={() => setDraft("")}
                  className="flex items-center gap-1 normal-case text-leaf-700 transition hover:text-leaf-800 hover:underline"
                >
                  <RotateCcw className="h-3 w-3" />
                  Reset to suggested
                </button>
              )}
            </label>
            <textarea
              id="wa-dialog-message"
              rows={4}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={message}
              className="w-full resize-none rounded-lg border border-mist-200 bg-white px-3 py-2.5 text-sm leading-relaxed text-ink-900 shadow-sm outline-none transition placeholder:text-ink-400 focus:border-leaf-600 focus:ring-4 focus:ring-leaf-100"
            />
            <p className="mt-1.5 text-[11px] leading-relaxed text-ink-400">
              Type your own message above, or leave it as-is to send our suggested message.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {WHATSAPP_NUMBERS.map((num, index) => (
              <a
                key={num.id}
                ref={index === 0 ? firstButtonRef : undefined}
                href={waLink(num.intl, outgoingMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="group flex flex-col gap-1 rounded-xl border-2 border-leaf-100 bg-leaf-50 p-4 transition hover:border-leaf-500 hover:bg-leaf-100"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-leaf-700">
                  {num.label}
                </span>
                <span className="flex items-center gap-2 font-display text-lg font-extrabold text-ink-900">
                  <WhatsAppIcon className="h-5 w-5 text-whatsapp-dark" />
                  {num.display}
                </span>
                <span className="text-sm font-semibold text-leaf-700 group-hover:underline">
                  Continue on WhatsApp →
                </span>
              </a>
            ))}
          </div>

          <div className="rounded-xl border border-mist-200 p-4">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-ink-500">Prefer to call?</p>
            <div className="flex flex-wrap gap-2">
              {PHONE_NUMBERS.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-navy-200 bg-navy-50 px-3 py-2 text-sm font-semibold text-navy-800 transition hover:bg-navy-100"
                >
                  <Phone className="h-4 w-4" />
                  {phone}
                </a>
              ))}
            </div>
          </div>

          <p className="text-center text-xs leading-relaxed text-ink-400">
            WhatsApp opens in a new tab with your message already written. Nothing is paid for or ordered
            online — a team member will reply to confirm sizes, prices and availability.
          </p>
        </div>
      </div>
    </div>
  );
}
