# Restyle hero e pulizia homepage

**Data e ora:** 2026-07-13 01:05:48

Documento riepilogativo delle modifiche applicate a `src/app/page.tsx` in questa sessione, prendendo come riferimento visivo `references/image.png` (portfolio di Connor Jarrett).

## 1. Animazione scritta rallentata

Le due righe a scorrimento continuo del nome ("Matteo" / "Palermo") sono state rallentate raddoppiando le durate:

- riga 1: `animationDuration` da **26s → 52s**
- riga 2: `animationDuration` da **34s → 68s**

L'animazione resta definita in `globals.css` (`.dp-marquee` + `@keyframes dp-marquee`, `translateX(-50%)` in loop lineare).

## 2. Hero riorganizzato come nel riferimento

Prima il testo gigante e il cerchio erano due sezioni impilate; ora sono un'unica sezione a schermo quasi intero (`min-h-[85vh]`, `relative`, `overflow-hidden`) con elementi sovrapposti:

- **Testo gigante di sfondo**: le due righe marquee sono in posizione assoluta (`absolute inset-0`), colore `#1c1c1c` su sfondo `#111111` — quasi invisibili, effetto "watermark" come nel riferimento. Sono decorative (`aria-hidden`), non più `h1`.
- **Cerchio centrale in primo piano**: `z-10`, nero pieno (`bg-black`, prima aveva un gradiente radiale viola/fucsia) con anello sottile `ring-1 ring-white/10`, dimensioni `size-64` / `sm:size-80`. Contiene:
  - `h1` "MATTEO / PALERMO" su due righe, bianco, `font-extrabold uppercase`
  - sotto, "web developer" in `text-neutral-400`

## 3. Sezione progetti rimossa (temporaneamente)

Eliminata l'intera griglia masonry con le ~29 card placeholder, il tipo `Project`, l'array `projects` e i componenti ormai inutilizzati `MadeInLoremBadge` e `SparkIcon`.

La struttura originale della griglia e delle card è salvata nella memoria persistente di Claude Code (`portfolio-project-cards-layout`) per ricostruirla identica quando verranno inseriti i progetti reali. In sintesi: griglia `columns-1 sm:columns-2 lg:columns-3 xl:columns-4`, card `bg-[#191919] rounded-xl` con anteprima a gradiente di altezza variabile + avatar circolare + titolo + tag. La classe `.dp-card { break-inside: avoid; }` è rimasta in `globals.css`.

## 4. Footer aggiornato

- Scritta cambiata da "Lorem ipsum dolor. Sit amet consectetur." a **"Thanks for looking. Stay in touch."**
- Rimosso il riquadro "Made in Lorem" dal footer e anche il badge fisso in basso a destra.
- Restano i pulsanti social (YouTube, TikTok, Instagram) sotto la scritta.

## Stato pagina attuale

Struttura di `page.tsx` dopo le modifiche: header (social + email) → hero full-screen (marquee di sfondo + cerchio con nome) → footer ("Thanks for looking. Stay in touch." + social). Type-check (`npx tsc --noEmit`) e lint passano senza errori.

## Nota sul formato dei documenti

Da questo documento in poi (richiesta del 2026-07-13), i file in `/docs` riportano oltre alla data anche **ora, minuti e secondi**, sia nel nome file (`YYYY-MM-DD-HH-MM-SS-nome.md`) sia nell'intestazione.
