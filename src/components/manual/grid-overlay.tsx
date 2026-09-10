/**
 * La griglia a 12 colonne, tenuta a vista come arredo portante del manuale.
 * Fissa dietro al contenuto, allineata allo stesso contenitore (`.manual-shell`).
 */
export function GridOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 flex justify-center"
    >
      <div className="manual-shell grid w-full grid-cols-4 sm:grid-cols-12">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`h-full border-r border-l-0 first:border-l ${
              i >= 4 ? "hidden sm:block" : ""
            }`}
            style={{ borderColor: "var(--color-grid)" }}
          />
        ))}
      </div>
    </div>
  );
}
