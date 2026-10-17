import { CATEGORIES } from "../data/products";

/**
 * Horizontal category chips with per-category product counts.
 * active = category id (or "all").
 */
export default function CategoryFilter({ counts, active, onChange }) {
  const chips = [
    { id: "all", name: "All Products", hint: null },
    ...CATEGORIES,
  ];

  return (
    <div
      role="group"
      aria-label="Filter products by category"
      className="flex flex-wrap justify-center gap-2 sm:gap-2.5"
    >
      {chips.map((chip) => {
        const isActive = active === chip.id;
        const count = counts[chip.id] ?? 0;
        return (
          <button
            key={chip.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(chip.id)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold transition ${
              isActive
                ? "border-navy-800 bg-navy-800 text-white shadow-[0_12px_24px_-14px_rgba(7,35,72,0.9)]"
                : "border-mist-200 bg-white text-ink-700 hover:border-navy-200 hover:bg-navy-50 hover:text-navy-800"
            }`}
          >
            {chip.name}
            <span
              className={`rounded-full px-1.5 py-0.5 text-[10px] font-extrabold leading-none ${
                isActive ? "bg-white/15 text-white" : "bg-mist-100 text-ink-500"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
