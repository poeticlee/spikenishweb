import { ArrowRight, MapPin, MessageCircle, FlaskConical, GraduationCap, PackageCheck, Users } from "lucide-react";
import Reveal from "./Reveal.jsx";
import Img from "./Img.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import { GlowOrb, Ring, Square, DotGrid, WaveDivider } from "./Decorations.jsx";
import { useWhatsApp } from "../context/WhatsAppContext";
import { generalEnquiryMessage } from "../utils/whatsapp";
import { scrollToId } from "../utils/navigation";
import { PHONE_NUMBERS } from "../data/site";

const HIGHLIGHTS = [
  {
    icon: FlaskConical,
    title: "Raw materials",
    text: "Core chemicals for your formulations",
  },
  {
    icon: GraduationCap,
    title: "Production training",
    text: "Practical formulation skills",
  },
  {
    icon: MapPin,
    title: "Two locations",
    text: "Ojoo & Iwo Road, Ibadan",
  },
  {
    icon: MessageCircle,
    title: "Direct WhatsApp",
    text: `${PHONE_NUMBERS[0]} · ${PHONE_NUMBERS[1]}`,
  },
];

export default function HeroSection() {
  const { openWhatsApp } = useWhatsApp();

  return (
    <section id="home" className="relative overflow-hidden bg-vivid-hero text-white">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0 hero-grid" aria-hidden="true" />
      <DotGrid className="inset-x-0 top-0 h-72" />
      {/* colour orbs */}
      <GlowOrb className="-left-40 -top-40 h-[420px] w-[420px] bg-forest-700/50" />
      <GlowOrb className="-right-32 top-1/3 h-[380px] w-[380px] bg-navy-600/45" />
      <GlowOrb className="-bottom-24 left-1/3 h-[340px] w-[340px] bg-leaf-500/25" />
      <GlowOrb className="right-1/4 top-10 h-64 w-64 bg-sun-400/20" />
      <GlowOrb className="left-1/2 top-1/2 h-52 w-52 bg-violet-500/15" />
      {/* rings & shapes */}
      <Ring className="float-alt left-[6%] top-[58%] h-24 w-24 border-sun-400/40" />
      <Ring className="spin-slow right-[8%] top-[12%] h-32 w-32 border-leaf-500/30" />
      <Square className="float-soft right-[18%] bottom-[18%] h-10 w-10 rotate-12 bg-sky-400/30" />
      <Square className="float-alt left-[24%] top-[16%] h-7 w-7 -rotate-6 bg-sun-400/40" />

      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6 sm:pt-16 lg:px-8 lg:pb-20 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* ---------- Copy ---------- */}
          <div className="lg:col-span-6 xl:col-span-6">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-sun-300">
                <span className="h-2 w-2 rounded-full bg-leaf-500" />
                Chemical raw materials · Ibadan, Nigeria
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-[2.15rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                Your Trusted Partner in{" "}
                <span className="bg-gradient-to-r from-leaf-500 via-sun-300 to-sky-300 bg-clip-text text-transparent">
                  Chemical Raw Materials
                </span>{" "}
                &amp; Product Formulation
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg">
                Get the chemicals and raw materials you need to produce liquid soap, disinfectants, bleach,
                insecticides, cosmetics, air fresheners, and more. We also provide practical production training
                to help you develop valuable manufacturing skills.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <button
                  type="button"
                  onClick={() => scrollToId("products")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-leaf-600 px-6 py-4 text-base font-bold text-white shadow-[0_16px_30px_-14px_rgba(20,184,102,0.95)] transition hover:bg-leaf-700"
                >
                  Shop Chemicals
                  <ArrowRight className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={() => openWhatsApp(generalEnquiryMessage(), "Chat with us on WhatsApp")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/5 px-6 py-4 text-base font-bold text-white transition hover:border-white/60 hover:bg-white/10"
                >
                  <WhatsAppIcon className="h-5 w-5 text-whatsapp" />
                  Chat with Us on WhatsApp
                </button>

                <button
                  type="button"
                  onClick={() => scrollToId("training")}
                  className="inline-flex items-center justify-center gap-2 px-2 py-4 text-base font-bold text-sun-400 underline-offset-4 transition hover:underline sm:px-3"
                >
                  Explore Our Training
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-navy-100">
                <li className="flex items-center gap-2">
                  <PackageCheck className="h-4 w-4 text-leaf-500" />
                  Materials for many product formulations
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-leaf-500" />
                  Support for new &amp; existing manufacturers
                </li>
              </ul>
            </Reveal>
          </div>

          {/* ---------- Imagery ---------- */}
          <div className="lg:col-span-6">
            <Reveal delay={140} className="relative mx-auto max-w-xl lg:max-w-none">
              <div className="relative">
                <Img
                  src="/images/hero-main.jpg"
                  alt="Chemical drums and containers used to store industrial raw materials"
                  ratio="aspect-[4/3] sm:aspect-[16/11]"
                  eager
                  label="Chemical storage containers"
                  containerClassName="rounded-3xl ring-1 ring-white/15 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.85)]"
                />

                <div className="absolute -bottom-8 -left-4 hidden w-44 sm:block lg:w-52">
                  <Img
                    src="/images/hero-products.jpg"
                    alt="Finished household cleaning products made from chemical raw materials"
                    ratio="aspect-[4/3]"
                    eager
                    label="Finished products"
                    containerClassName="rounded-2xl ring-4 ring-navy-950 shadow-2xl"
                  />
                </div>

                {/* floating training badge */}
                <div className="float-soft absolute -right-2 top-5 rounded-2xl bg-white p-3.5 shadow-xl sm:-right-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                      <GraduationCap className="h-5 w-5" />
                    </span>
                    <div className="leading-tight">
                      <p className="text-xs font-semibold text-ink-400">Hands-on</p>
                      <p className="font-display text-sm font-extrabold text-ink-900">Production Training</p>
                    </div>
                  </div>
                </div>

                {/* floating WhatsApp badge */}
                <button
                  type="button"
                  onClick={() => openWhatsApp(generalEnquiryMessage(), "Chat with us on WhatsApp")}
                  className="absolute -bottom-6 right-2 flex items-center gap-2.5 rounded-2xl bg-whatsapp px-4 py-3 text-navy-950 shadow-xl transition hover:brightness-105 sm:right-6"
                >
                  <WhatsAppIcon className="h-6 w-6" />
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] font-bold uppercase tracking-wider opacity-80">Chat now</span>
                    <span className="block font-display text-sm font-extrabold">WhatsApp Us</span>
                  </span>
                </button>
              </div>

              {/* lab shot peeking behind */}
              <div className="absolute -left-10 -top-10 hidden w-36 rotate-[-6deg] xl:block">
                <Img
                  src="/images/hero-lab.jpg"
                  alt="Laboratory glassware used for formulation work"
                  ratio="aspect-square"
                  label="Laboratory"
                  containerClassName="rounded-2xl ring-4 ring-navy-950 shadow-xl"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* ---------- Highlight strip ---------- */}
        <div className="mt-16 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:p-6">
          {HIGHLIGHTS.map((item, i) => (
            <Reveal key={item.title} delay={i * 70} className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-leaf-600/15 text-leaf-500 ring-1 ring-leaf-500/25">
                <item.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm font-extrabold text-white">{item.title}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-navy-100">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* wave into the next section */}
      <WaveDivider fill="#f0f9ff" />
    </section>
  );
}
