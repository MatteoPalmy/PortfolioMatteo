import { progetti } from "@/lib/projects";
import { EmailBlock } from "@/components/manual/email-block";
import { GridOverlay } from "@/components/manual/grid-overlay";
import { IndexRail } from "@/components/manual/index-rail";
import { PlateFrame } from "@/components/manual/plate-frame";
import { ProjectList } from "@/components/manual/project-list";
import { Section } from "@/components/manual/section";
import { SocialRow } from "@/components/manual/social-row";
import { SpecList } from "@/components/manual/spec-list";
import { Arrow } from "@/components/manual/arrow";
import { Ticks } from "@/components/manual/ticks";
import { Wordmark } from "@/components/manual/wordmark";

const COMPETENZE: {
  gruppo: string;
  voci: string;
  risolve: string;
  livello: string;
}[] = [
  {
    gruppo: "Front-end",
    voci: "React · Next.js",
    risolve:
      "Interfacce che restano veloci e ordinate mentre il progetto cresce.",
    livello: "Principale",
  },
  {
    gruppo: "UI & stile",
    voci: "Tailwind CSS · design system · accessibilità",
    risolve:
      "Dallo schizzo al componente riutilizzabile, coerente su ogni schermo.",
    livello: "Solido",
  },
  {
    gruppo: "Back-end & dati",
    voci: "Node.js · API REST · integrazioni",
    risolve: "Il necessario per far funzionare il front-end: API, form, contenuti.",
    livello: "Solido",
  },
  {
    gruppo: "Strumenti & consegna",
    voci: "Git · Vercel",
    risolve: "Versioning pulito e deploy continui, senza sorprese in produzione.",
    livello: "Principale",
  },
];

export default function Home() {
  return (
    <>
      <GridOverlay />
      <IndexRail />

      {/* ---------------------------------------------------------- Copertina */}
      <header id="copertina" className="relative z-10">
        <div className="manual-shell relative flex flex-col gap-7 py-10 sm:min-h-[86svh] sm:justify-between sm:gap-0 sm:py-12">
          <Ticks className="absolute inset-0" />

          <div className="flex flex-wrap items-start justify-between gap-4 px-1 sm:px-2">
            <p className="min-w-0 text-[0.7rem] uppercase leading-relaxed tracking-[0.2em] text-[var(--color-muted)]">
              Manuale
              <span className="block text-[var(--color-graphite)]">
                Portfolio / identità
              </span>
            </p>
            <SocialRow />
          </div>

          <div className="px-1 py-0 sm:px-2 sm:py-8">
            <Wordmark />
            <p
              className="mt-6 max-w-[42ch] text-[var(--color-muted)] sm:mt-8"
              style={{ fontSize: "clamp(0.98rem, 1.6vw, 1.2rem)" }}
            >
              Chi sono, cosa faccio, come lavoro.
            </p>
          </div>

          <div className="flex flex-col-reverse gap-6 px-1 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-x-8 sm:gap-y-6 sm:px-2">
            <SpecList
              className="w-full max-w-sm"
              rows={[
                ["Documento", "Portfolio / manuale"],
                ["Soggetto", "Matteo Palermo — sviluppatore web"],
                ["Rev.", "2026 · v1"],
                ["Sede", "Caravaggio (BG), Italia"],
              ]}
            />
            <EmailBlock size="sm" />
          </div>
        </div>
      </header>

      {/* ------------------------------------------------------------ Profilo */}
      <Section id="profilo" n="01" title="Profilo">
        <div className="grid gap-10 sm:grid-cols-12">
          <div className="flex flex-col sm:col-span-7">
            <p
              className="max-w-[58ch] font-medium text-[var(--color-ink)]"
              style={{ fontSize: "clamp(1.1rem, 1.7vw, 1.35rem)", lineHeight: 1.55 }}
            >
              Sono Matteo Palermo, sviluppatore web. Progetto e costruisco siti e
              applicazioni per il web — dalla prima riga di layout al deploy in
              produzione — con attenzione alla struttura, alle prestazioni e ai
              dettagli che si notano solo quando mancano.
            </p>
            <p className="mt-5 max-w-[58ch] text-[1rem] leading-relaxed text-[var(--color-ink)]/90">
              Lavoro da solo e in contatto diretto con chi commissiona: nessun
              livello intermedio, nessun reparto clienti. Chi parla con me è la
              stessa persona che scrive il codice. Tratto ogni progetto come
              qualcosa da rifinire, non solo da consegnare.
            </p>
            <SpecList
              className="mt-8 max-w-sm"
              rows={[
                ["Attivo", "dal 2026"],
                ["Sede", "Caravaggio (BG)"],
                ["Lingue", "Italiano, Inglese"],
              ]}
            />
          </div>

          <div className="sm:col-span-4 sm:col-start-9">
            <PlateFrame caption="Ritratto · 4:5 · da inserire" ratio="4 / 5" />
          </div>
        </div>
      </Section>

      {/* --------------------------------------------------------- Competenze */}
      <Section id="competenze" n="02" title="Competenze">
        <p className="max-w-[58ch] text-[1rem] leading-relaxed text-[var(--color-ink)]/90">
          Un elenco fisso, nello stesso ordine ad ogni visita. Per ogni gruppo:
          cosa uso e cosa ci risolvo.
        </p>

        <div className="mt-8 border-y border-[var(--color-ink)] py-2">
          {COMPETENZE.map((row) => (
            <div
              key={row.gruppo}
              className="grid grid-cols-1 gap-2 border-t border-[var(--color-hairline)] px-0.5 py-7 first:border-t-0 sm:grid-cols-12 sm:gap-6"
            >
              <div className="sm:col-span-3">
                <h3 className="text-lg font-semibold tracking-tight text-[var(--color-ink)]">
                  {row.gruppo}
                </h3>
              </div>
              <div className="sm:col-span-6">
                <p className="font-medium text-[var(--color-ink)]">{row.voci}</p>
                <p className="mt-1 text-[0.92rem] leading-relaxed text-[var(--color-muted)]">
                  {row.risolve}
                </p>
              </div>
              <div className="font-mono text-[0.7rem] uppercase tracking-[0.06em] sm:col-span-3 sm:pl-4 sm:pr-1 sm:text-right">
                <span className="font-semibold text-[var(--color-ink)]">
                  {row.livello}
                </span>
                <span className="ml-2 text-[var(--color-graphite)] sm:ml-0 sm:block">
                  dal 2026
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------------- Lavori */}
      <Section
        id="lavori"
        n="03"
        title="Lavori"
        broken={progetti.length === 0}
      >
        {progetti.length === 0 ? (
          <div className="grid gap-10 sm:grid-cols-12">
            <div className="sm:col-span-6">
              <p className="max-w-[52ch] text-[1.05rem] leading-relaxed text-[var(--color-ink)]">
                Progetti selezionati in preparazione. Nel frattempo, il modo più
                rapido per capire come lavoro è scrivermi: rispondo con esempi
                pertinenti a ciò che devi costruire.
              </p>
              <SpecList
                className="mt-6 max-w-xs"
                rows={[
                  ["Stato", "in aggiornamento"],
                  ["Rev.", "2026"],
                  ["Slot", "03 riservati"],
                ]}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:col-span-6 sm:grid-cols-3 sm:gap-3">
              {["01", "02", "03"].map((n) => (
                <PlateFrame
                  key={n}
                  reserved
                  caption={`Progetto ${n}`}
                  ratio="4 / 3"
                />
              ))}
            </div>
          </div>
        ) : (
          <ProjectList progetti={progetti} />
        )}
      </Section>

      {/* ----------------------------------------------------------- Contatto */}
      <Section id="contatto" n="04" title="Contatto">
        <div className="grid gap-10 sm:grid-cols-12">
          <div className="sm:col-span-7">
            <p className="max-w-[46ch] text-[1.05rem] leading-relaxed text-[var(--color-ink)]">
              Per una commissione, o anche solo per capire se ha senso lavorare
              insieme, scrivimi. Parli direttamente con chi scriverà il codice.
            </p>
            <div className="mt-6">
              <EmailBlock size="lg" />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <SocialRow />
              <span className="text-[0.7rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                YouTube / TikTok in arrivo
              </span>
            </div>
          </div>
          <div className="sm:col-span-4 sm:col-start-9">
            <SpecList
              rows={[
                ["Soggetto", "Matteo Palermo"],
                ["Ruolo", "Sviluppatore web · su commissione"],
                ["Risposta", "entro 2 giorni lavorativi"],
                ["Rev.", "2026 · v1"],
              ]}
            />
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------- Colophon */}
      <footer className="relative z-10">
        <div className="manual-shell border-t border-[var(--color-ink)] py-8">
          <div className="px-1 sm:px-3">
            <a
              href="mailto:matteo.kay07@gmail.com"
              className="inline-flex items-center gap-2 font-mono text-[0.82rem] text-[var(--color-cobalt)] underline decoration-1 underline-offset-4"
            >
              matteo.kay07@gmail.com
              <Arrow className="size-[0.95em]" />
            </a>
            <div className="mt-4 flex flex-wrap justify-between gap-x-6 gap-y-2 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-[var(--color-muted)]">
              <span>© 2026 Matteo Palermo</span>
              <span>Manuale — rev. 2026 · v1</span>
              <span>Caravaggio (BG), Italia</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
