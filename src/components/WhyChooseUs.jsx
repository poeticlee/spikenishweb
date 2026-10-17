import { FlaskConical, Package, GraduationCap, MapPin, MessageCircle, Users, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { GlowOrb, Ring, DotGridDark } from "./Decorations.jsx";
import { WHY_CHOOSE_US, SERVICES } from "../data/site";

const ICONS = {
  FlaskConical,
  Package,
  GraduationCap,
  MapPin,
  MessageCircle,
  Users,
};

// Rotating bright icon-chip colours (all AA-safe with their text colour).
const CHIP_STYLES = [
  "bg-navy-50 text-navy-700 group-hover:bg-navy-800 group-hover:text-white",
  "bg-leaf-50 text-leaf-700 group-hover:bg-leaf-600 group-hover:text-white",
  "bg-sun-100 text-ink-800 group-hover:bg-sun-400 group-hover:text-navy-950",
  "bg-sky-100 text-sky-700 group-hover:bg-sky-500 group-hover:text-white",
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-mesh-mint py-16 sm:py-20 lg:py-24">
      <DotGridDark className="left-0 top-0 h-56 w-64" />
      <GlowOrb className="-left-16 bottom-16 h-56 w-56 bg-leaf-500/15" />
      <GlowOrb className="-right-16 top-20 h-52 w-52 bg-sun-400/15" />
      <Ring className="float-alt left-[4%] top-[12%] h-16 w-16 border-sky-400/35" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Why Spikenish Chemicals"
          title="Why Choose Spikenish Chemicals?"
          subtitle="We keep chemical sourcing simple and practical — the materials you need, the guidance to use them, and a direct line to reach us."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = ICONS[item.icon] || FlaskConical;
            return (
              <Reveal key={item.title} delay={(i % 3) * 80} className="h-full">
                <div className="group h-full rounded-2xl border border-mist-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-[0_24px_50px_-30px_rgba(7,35,72,0.45)]">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-xl transition ${CHIP_STYLES[i % CHIP_STYLES.length]}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-extrabold leading-snug text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Services strip */}
        <Reveal delay={80} className="mt-12">
          <div className="rounded-3xl bg-mist-50 p-6 sm:p-8">
            <h3 className="text-center font-display text-xl font-extrabold text-ink-900">
              What we do for our customers
            </h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((service) => (
                <li key={service.title} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-leaf-600" />
                  <div>
                    <p className="font-display text-sm font-extrabold text-ink-900">{service.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink-500">{service.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
