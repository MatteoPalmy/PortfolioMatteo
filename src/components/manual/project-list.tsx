import type { Progetto } from "@/lib/projects";
import { Arrow } from "./arrow";
import { PlateFrame } from "./plate-frame";

/** Elenco dei lavori inseriti — stessa griglia e stesso arredo delle altre sezioni. */
export function ProjectList({ progetti }: { progetti: Progetto[] }) {
  return (
    <ol className="grid gap-px bg-[var(--color-hairline)]">
      {progetti.map((p, i) => {
        const n = String(i + 1).padStart(2, "0");
        const Row = (
          <>
            <div className="sm:col-span-2">
              <PlateFrame
                src={p.immagine}
                alt={p.titolo}
                caption={`Progetto ${n}`}
                ratio="4 / 3"
              />
            </div>
            <div className="sm:col-span-3">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[0.72rem] tabular-nums text-[var(--color-graphite)]">
                  {n}
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-[var(--color-ink)]">
                  {p.titolo}
                </h3>
              </div>
              <p className="mt-2 max-w-[54ch] text-[0.95rem] leading-relaxed text-[var(--color-ink)]/90">
                {p.descrizione}
              </p>
              <div className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.06em] text-[var(--color-muted)]">
                {p.anno} · {p.ruolo} · {p.stack.join(" / ")}
              </div>
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-[var(--color-cobalt)] underline"
                >
                  Vedi il progetto
                  <Arrow className="size-[0.95em]" />
                </a>
              ) : null}
            </div>
          </>
        );
        return (
          <li
            key={p.titolo}
            className="grid grid-cols-1 gap-5 bg-[var(--color-paper)] py-8 sm:grid-cols-5 sm:gap-8"
          >
            {Row}
          </li>
        );
      })}
    </ol>
  );
}
