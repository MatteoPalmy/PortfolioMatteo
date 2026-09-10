import type { ReactNode } from "react";

/**
 * Una sezione del manuale. Il numero è marginalia (esce nel margine sinistro
 * su desktop, resta in linea col titolo su mobile) — non un occhiello.
 * `broken` disegna il filetto di sezione tratteggiato: usato per lo stato vuoto.
 */
export function Section({
  id,
  n,
  title,
  broken = false,
  children,
}: {
  id: string;
  n: string;
  title: string;
  broken?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative z-10 scroll-mt-24">
      <div className="manual-shell">
        <div
          className="border-t pt-10"
          style={{
            borderTopWidth: broken ? 1 : 2,
            borderTopStyle: broken ? "dashed" : "solid",
            borderColor: broken
              ? "var(--color-hairline-strong)"
              : "var(--color-cobalt)",
          }}
        >
          <h2
            className="relative px-1 font-sans font-semibold tracking-tight text-[var(--color-ink)] sm:px-3"
            style={{ fontSize: "clamp(1.9rem, 4.6vw, 3.15rem)", lineHeight: 1.02 }}
          >
            <span
              className="mr-3 align-baseline font-mono text-[var(--color-graphite)] lg:absolute lg:right-full lg:mr-0 lg:pr-6"
              style={{ fontSize: "0.42em", letterSpacing: "0.06em" }}
            >
              {n}
            </span>
            {title}
          </h2>

          <div className="mt-8 px-1 pb-20 sm:mt-10 sm:px-3 sm:pb-24">{children}</div>
        </div>
      </div>
    </section>
  );
}
