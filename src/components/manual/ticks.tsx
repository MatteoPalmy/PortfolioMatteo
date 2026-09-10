/**
 * Segni di taglio agli angoli di un riquadro — arredo da manuale.
 * Il contenitore genitore deve avere `position: relative`.
 */
export function Ticks({
  className = "",
  color = "var(--color-hairline-strong)",
}: {
  className?: string;
  color?: string;
}) {
  const base = "pointer-events-none absolute h-3 w-3";
  return (
    <span aria-hidden className={`pointer-events-none ${className}`}>
      <span
        className={`${base} left-0 top-0 border-l border-t`}
        style={{ borderColor: color }}
      />
      <span
        className={`${base} right-0 top-0 border-r border-t`}
        style={{ borderColor: color }}
      />
      <span
        className={`${base} bottom-0 left-0 border-b border-l`}
        style={{ borderColor: color }}
      />
      <span
        className={`${base} bottom-0 right-0 border-b border-r`}
        style={{ borderColor: color }}
      />
    </span>
  );
}
