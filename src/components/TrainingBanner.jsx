import { GraduationCap, ArrowRight } from "lucide-react";
import Reveal from "./Reveal.jsx";
import Img from "./Img.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import { GlowOrb, Ring, DotGrid } from "./Decorations.jsx";
import { useWhatsApp } from "../context/WhatsAppContext";
import { TRAINING_CTA_MESSAGE } from "../data/site";
import { scrollToId } from "../utils/navigation";

/** Slim promotional band that funnels readers into the training section. */
export default function TrainingBanner() {
  const { openWhatsApp } = useWhatsApp();

  return (
    <section className="bg-mesh-white">
      <div className="mx-auto max-w-7xl px-4 pb-4 pt-16 sm:px-6 sm:pb-6 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl bg-vivid-band shadow-[0_30px_60px_-30px_rgba(7,35,72,0.6)]">
          <div className="hero-grid absolute inset-0 opacity-60" aria-hidden="true" />
          <DotGrid className="inset-0 h-full opacity-60" />
          <GlowOrb className="absolute -right-16 -top-16 h-56 w-56 bg-leaf-500/30" />
          <GlowOrb className="absolute -bottom-20 left-1/3 h-48 w-48 bg-sky-400/25" />
          <Ring className="float-alt right-[12%] bottom-[16%] h-16 w-16 border-sun-400/40" />

          <div className="relative flex flex-col items-stretch lg:flex-row">
            <Img
              src="/images/training.jpg"
              alt="Practical training laboratory where formulation skills are taught"
              ratio="aspect-[16/9] lg:aspect-auto lg:h-full lg:w-72"
              label="Training laboratory"
              containerClassName="lg:rounded-l-3xl lg:rounded-r-none"
              imgClassName="h-full w-full object-cover"
            />

            <div className="flex flex-1 flex-col items-start justify-between gap-6 p-6 sm:p-8 lg:flex-row lg:items-center">
              <div className="flex items-start gap-4">
                <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sun-400 text-navy-950 sm:flex">
                  <GraduationCap className="h-7 w-7" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-sun-300">Training promotion</p>
                  <h2 className="mt-1.5 font-display text-xl font-extrabold leading-snug text-white sm:text-2xl">
                    Don’t just buy materials — learn what to do with them.
                  </h2>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-navy-100">
                    Practical formulation training for liquid soap, disinfectants, bleach, air fresheners,
                    cosmetics and more.
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:shrink-0">
                <button
                  type="button"
                  onClick={() => scrollToId("training")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-navy-900 transition hover:bg-mist-100"
                >
                  Explore training
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => openWhatsApp(TRAINING_CTA_MESSAGE, "Enquire about training")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-leaf-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-leaf-700"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Ask on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
