/**
 * Blocco di specifica in mono: coppie chiave/valore, come il title-block di un
 * disegno tecnico. Il mono qui è per dati misurabili, non decorazione.
 */
export function SpecList({
  rows,
  className = "",
}: {
  rows: [string, string][];
  className?: string;
}) {
  return (
    <dl
      className={`font-mono text-[0.72rem] leading-relaxed tracking-[0.04em] text-[var(--color-muted)] ${className}`}
    >
      {rows.map(([k, v]) => (
        <div
          key={k}
          className="flex gap-5 border-b border-[var(--color-hairline)] px-0.5 py-3 last:border-b-0"
        >
          <dt className="w-20 shrink-0 uppercase text-[var(--color-graphite)] sm:w-24">
            {k}
          </dt>
          <dd className="min-w-0 break-words pr-1 text-[var(--color-ink)]">{v}</dd>
        </div>
      ))}
    </dl>
  );
}
