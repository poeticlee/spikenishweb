import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import { GlowOrb, Ring, DotGridDark } from "./Decorations.jsx";
import { FAQS } from "../data/site";
import { useWhatsApp } from "../context/WhatsAppContext";
import { generalEnquiryMessage } from "../utils/whatsapp";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const { openWhatsApp } = useWhatsApp();

  return (
    <section id="faq" className="relative overflow-hidden bg-mesh-sun py-16 sm:py-20 lg:py-24">
      <DotGridDark className="right-0 top-10 h-52 w-60" />
      <GlowOrb className="-left-16 top-16 h-52 w-52 bg-sun-400/20" />
      <GlowOrb className="-right-16 bottom-16 h-52 w-52 bg-leaf-500/12" />
      <Ring className="float-alt left-[6%] bottom-[10%] h-16 w-16 border-sky-400/35" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Quick, honest answers — for anything specific, WhatsApp is always the fastest route."
        />

        <div className="mt-10 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.q} delay={i * 50}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-white transition ${
                    isOpen ? "border-navy-200 shadow-[0_18px_40px_-30px_rgba(7,35,72,0.5)]" : "border-mist-200"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 ${
                        isOpen ? "text-navy-800" : "text-ink-800"
                      }`}
                    >
                      <span className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-extrabold ${
                            isOpen ? "bg-navy-800 text-white" : "bg-mist-100 text-ink-500"
                          }`}
                        >
                          {i + 1}
                        </span>
                        <span className="font-display text-base font-extrabold leading-snug sm:text-lg">
                          {item.q}
                        </span>
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                          isOpen ? "bg-leaf-600 text-white" : "bg-mist-100 text-ink-600"
                        }`}
                      >
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                  </h3>
                  <div id={`faq-panel-${i}`} hidden={!isOpen} className="px-5 pb-5 sm:px-6">
                    <div className="border-t border-mist-200 pt-4">
                      <p className="text-sm leading-relaxed text-ink-600 sm:text-base">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={80} className="mt-10 flex flex-col items-center gap-4 rounded-3xl bg-white p-7 text-center ring-1 ring-mist-200">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-50 text-navy-700">
            <HelpCircle className="h-6 w-6" />
          </span>
          <div>
            <h3 className="font-display text-lg font-extrabold text-ink-900">Still have a question?</h3>
            <p className="mt-1 text-sm text-ink-500">
              Send us a message and we will answer with current details.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openWhatsApp(generalEnquiryMessage(), "Ask us anything")}
            className="inline-flex items-center gap-2 rounded-xl bg-leaf-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-leaf-700"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Ask on WhatsApp
          </button>
        </Reveal>
      </div>
    </section>
  );
}
