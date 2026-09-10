"use client";

import { useEffect, useState } from "react";

type Entry = { id: string; n: string; label: string };

const ENTRIES: Entry[] = [
  { id: "profilo", n: "01", label: "Profilo" },
  { id: "competenze", n: "02", label: "Competenze" },
  { id: "lavori", n: "03", label: "Lavori" },
  { id: "contatto", n: "04", label: "Contatto" },
];

/** Indice del manuale: barra fissa in alto, ancore linkabili, stato attivo pieno. */
export function IndexRail() {
  const [active, setActive] = useState<string>(ENTRIES[0].id);

  useEffect(() => {
    let raf = 0;
    const compute = () => {
      raf = 0;
      const line = window.innerHeight * 0.35;
      // Default to the first entry so the index always shows a filled tab,
      // including on the cover before section 01 scrolls past the line.
      let current: string = ENTRIES[0].id;
      for (const e of ENTRIES) {
        const el = document.getElementById(e.id);
        if (el && el.getBoundingClientRect().top - line <= 0) current = e.id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <nav
      aria-label="Indice del manuale"
      className="sticky top-0 z-40 border-b border-[var(--color-ink)] bg-[var(--color-paper)]"
    >
      <div className="manual-shell flex flex-wrap items-center gap-1 py-2 sm:gap-2.5 sm:py-2.5">
        <span className="mr-1 hidden text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[var(--color-graphite)] sm:inline">
          Indice
        </span>
        {ENTRIES.map((e) => {
          const on = active === e.id;
          return (
            <a
              key={e.id}
              href={`#${e.id}`}
              aria-current={on ? "true" : undefined}
              className={`flex items-center gap-1 border px-1.5 py-1 transition-colors duration-300 sm:gap-2 sm:px-2.5 ${
                on
                  ? "border-[var(--color-cobalt)] bg-[var(--color-cobalt)] text-[var(--color-paper)]"
                  : "border-[var(--color-hairline)] text-[var(--color-ink)] hover:border-[var(--color-muted)]"
              }`}
            >
              <span className="font-mono text-[0.6rem] tabular-nums tracking-[0.06em] sm:text-[0.66rem]">
                {e.n}
              </span>
              <span className="text-[0.7rem] font-medium tracking-tight sm:text-[0.8rem]">
                {e.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
