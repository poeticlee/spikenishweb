import WhatsAppIcon from "./WhatsAppIcon.jsx";
import { useWhatsApp } from "../context/WhatsAppContext";
import { generalEnquiryMessage } from "../utils/whatsapp";

/**
 * Floating WhatsApp button — always visible while browsing.
 * Opens the number selector so the customer picks either business line.
 */
export default function WhatsAppButton() {
  const { openWhatsApp } = useWhatsApp();

  return (
    <div className="fixed bottom-5 right-4 z-40 sm:bottom-6 sm:right-6">
      <button
        type="button"
        onClick={() => openWhatsApp(generalEnquiryMessage(), "Chat with us on WhatsApp")}
        className="wa-pulse group flex items-center gap-3 rounded-full bg-whatsapp py-3 pl-3 pr-3 text-navy-950 shadow-[0_14px_30px_-10px_rgba(18,140,126,0.7)] transition hover:brightness-105 focus:outline-none sm:pr-5"
        aria-label="Chat with Spikenish Chemicals on WhatsApp"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp-dark text-white">
          <WhatsAppIcon className="h-6 w-6" />
        </span>
        <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-left leading-tight transition-all duration-300 group-hover:max-w-[190px] group-focus:max-w-[190px] sm:block">
          <span className="block text-[10px] font-bold uppercase tracking-wider opacity-80">Need help?</span>
          <span className="block font-display text-sm font-extrabold">Chat on WhatsApp</span>
        </span>
      </button>
    </div>
  );
}
