import { createContext, useCallback, useContext, useEffect, useState } from "react";
import WhatsAppDialog from "../components/WhatsAppDialog.jsx";
import { GENERAL_WHATSAPP_MESSAGE } from "../data/site";

const WhatsAppContext = createContext(null);

/**
 * Opens the "choose a WhatsApp number" dialog from anywhere on the site.
 *
 *   const { openWhatsApp } = useWhatsApp();
 *   openWhatsApp("Hello Spikenish Chemicals ...", "Enquire about Caustic Soda");
 */
export function WhatsAppProvider({ children }) {
  const [dialog, setDialog] = useState(null);

  const openWhatsApp = useCallback((message, title) => {
    setDialog({ message: message || GENERAL_WHATSAPP_MESSAGE, title: title || "Chat with us on WhatsApp" });
  }, []);

  const closeWhatsApp = useCallback(() => setDialog(null), []);

  // Lock body scroll + close on Escape while the dialog is open.
  useEffect(() => {
    if (!dialog) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setDialog(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [dialog]);

  return (
    <WhatsAppContext.Provider value={{ openWhatsApp }}>
      {children}
      {dialog && <WhatsAppDialog title={dialog.title} message={dialog.message} onClose={closeWhatsApp} />}
    </WhatsAppContext.Provider>
  );
}

export function useWhatsApp() {
  const ctx = useContext(WhatsAppContext);
  if (!ctx) throw new Error("useWhatsApp must be used inside <WhatsAppProvider>");
  return ctx;
}
