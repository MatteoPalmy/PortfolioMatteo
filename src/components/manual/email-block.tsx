import { Arrow } from "./arrow";

const EMAIL = "matteo.kay07@gmail.com";

/**
 * L'unico elemento "vivo" del manuale: blocco cobalto pieno, azione primaria.
 * Al passaggio del mouse si inverte (carta su cobalto → cobalto su carta).
 */
export function EmailBlock({ size = "sm" }: { size?: "sm" | "lg" }) {
  const lg = size === "lg";
  return (
    <a
      href={`mailto:${EMAIL}`}
      className={`group inline-flex flex-col border border-[var(--color-cobalt)] bg-[var(--color-cobalt)] text-[var(--color-paper)] transition-colors duration-200 hover:bg-[var(--color-paper)] hover:text-[var(--color-cobalt)] ${
        lg ? "px-6 py-5" : "px-4 py-3"
      }`}
    >
      <span
        className={`font-sans font-semibold uppercase tracking-[0.12em] ${
          lg ? "text-sm" : "text-[0.68rem]"
        }`}
      >
        Scrivimi
      </span>
      <span
        className={`mt-1 font-mono tracking-tight ${
          lg ? "text-lg sm:text-2xl" : "text-[0.82rem]"
        }`}
      >
        {EMAIL}
        <Arrow className="ml-2 inline-block size-[0.9em] translate-y-[0.06em] transition-transform group-hover:translate-x-1" />
      </span>
    </a>
  );
}
