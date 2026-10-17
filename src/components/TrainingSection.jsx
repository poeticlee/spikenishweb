import { ArrowRight, Clock3, FlaskConical } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import Img from "./Img.jsx";
import Reveal from "./Reveal.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import { GlowOrb, Ring, Square, DotGrid, WaveDivider } from "./Decorations.jsx";
import { TRAINING_HIGHLIGHT, TRAINING_PROGRAMS } from "../data/training";
import { useWhatsApp } from "../context/WhatsAppContext";
import { trainingEnquiryMessage } from "../utils/whatsapp";

export default function TrainingSection() {
  const { openWhatsApp } = useWhatsApp();

  return (
    <section id="training" className="relative overflow-hidden bg-vivid-forest py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 hero-grid" aria-hidden="true" />
      <DotGrid className="inset-x-0 bottom-0 h-64" />
      <GlowOrb className="-left-32 top-40 h-80 w-80 bg-forest-700/70" />
      <GlowOrb className="-right-24 -top-20 h-72 w-72 bg-sun-400/15" />
      <GlowOrb className="bottom-10 left-1/3 h-56 w-56 bg-sky-400/15" />
      <Ring className="spin-slow right-[6%] top-[10%] h-28 w-28 border-sun-400/30" />
      <Square className="float-soft left-[8%] bottom-[16%] h-9 w-9 rotate-12 bg-leaf-500/30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={TRAINING_HIGHLIGHT.eyebrow}
          title={TRAINING_HIGHLIGHT.title}
          subtitle={TRAINING_HIGHLIGHT.subtitle}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRAINING_PROGRAMS.map((program, i) => (
            <Reveal key={program.id} delay={(i % 3) * 80} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_20px_45px_-30px_rgba(0,0,0,0.9)] transition duration-300 hover:-translate-y-1.5">
                <Img
                  src={program.image}
                  alt={program.imageAlt}
                  ratio="aspect-[16/10]"
                  label={program.name}
                  imgClassName="group-hover:scale-[1.05] transition-transform duration-500"
                />
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-leaf-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-leaf-700">
                    <FlaskConical className="h-3.5 w-3.5" />
                    Practical training
                  </span>
                  <h3 className="font-display text-lg font-extrabold leading-snug text-ink-900">
                    {program.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-500">{program.intro}</p>
                  <button
                    type="button"
                    onClick={() =>
                      openWhatsApp(trainingEnquiryMessage(program.name), `Training: ${program.name}`)
                    }
                    className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-navy-800 px-4 py-3 text-sm font-bold text-navy-800 transition hover:bg-navy-800 hover:text-white"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Enquire About Training
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Strong call to action */}
        <Reveal delay={100} className="mt-14">
          <div className="flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/5 px-6 py-10 text-center sm:px-10">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sun-400 text-navy-950">
              <Clock3 className="h-7 w-7" />
            </span>
            <div>
              <h3 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                Ready to Learn a New Production Skill?
              </h3>
              <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-navy-100 sm:text-base">
                Tell us which product you want to produce and we will share what the training covers — no
                pressure, just a conversation on WhatsApp.
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                openWhatsApp(
                  "Hello Spikenish Chemicals, I would like to enquire about your formulation and production training. Please send me the available details.",
                  "Contact us about training"
                )
              }
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-leaf-600 px-7 py-4 text-base font-bold text-white shadow-[0_18px_35px_-16px_rgba(20,184,102,0.95)] transition hover:bg-leaf-700"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Contact Us About Training
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </div>

      {/* wave into the mint section below */}
      <WaveDivider fill="#f0fdf4" />
    </section>
  );
}
