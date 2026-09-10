import type { CSSProperties } from "react";

/**
 * "MATTEO PALERMO" — il soggetto documentato del manuale.
 * Ogni lettera si compone una sola volta al caricamento (CSS, vedi globals.css).
 */
export function Wordmark({ id }: { id?: string }) {
  const words = ["MATTEO", "PALERMO"];
  let i = 0;

  return (
    <h1
      id={id}
      className="font-sans font-bold uppercase text-[var(--color-cobalt)]"
      style={{
        fontSize: "clamp(2.7rem, 13.5vw, 12rem)",
        lineHeight: 0.92,
        letterSpacing: "-0.04em",
        paddingBottom: "0.06em",
      }}
    >
      {words.map((word, w) => (
        <span key={word} className="block">
          <span className="sr-only">{word}</span>
          <span aria-hidden>
            {word.split("").map((ch, c) => (
              <span
                key={`${w}-${c}`}
                className="wordmark-letter"
                style={{ "--i": i++ } as CSSProperties}
              >
                {ch}
              </span>
            ))}
          </span>
        </span>
      ))}
    </h1>
  );
}
