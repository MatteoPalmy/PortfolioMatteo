import Image from "next/image";
import { Ticks } from "./ticks";

/**
 * Riquadro "tavola": mostra un'immagine se presente, altrimenti un segnaposto
 * con segni di taglio e didascalia mono. Usato per il ritratto e per gli slot
 * dei lavori non ancora inseriti.
 */
export function PlateFrame({
  src,
  alt,
  caption,
  ratio = "4 / 5",
  reserved = false,
}: {
  src?: string;
  alt?: string;
  caption: string;
  ratio?: string;
  reserved?: boolean;
}) {
  return (
    <figure className="relative">
      <div
        className="relative overflow-hidden border"
        style={{
          aspectRatio: ratio,
          borderColor: reserved
            ? "var(--color-hairline-strong)"
            : "var(--color-ink)",
          borderStyle: reserved ? "dashed" : "solid",
        }}
      >
        {src ? (
          <Image
            src={src}
            alt={alt ?? ""}
            fill
            sizes="(max-width: 640px) 100vw, 40vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[color-mix(in_srgb,var(--color-graphite)_5%,var(--color-paper))]">
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-[var(--color-muted)]">
              {reserved ? "riservato" : "da inserire"}
            </span>
          </div>
        )}
        <Ticks className="absolute inset-0" />
      </div>
      <figcaption className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-[var(--color-muted)]">
        {caption}
      </figcaption>
    </figure>
  );
}
