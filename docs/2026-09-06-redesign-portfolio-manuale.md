# Redesign portfolio — "Il Manuale"

**Data:** 2026-09-06

Redesign completo della home. Sostituisce il mondo visivo attuale ("The Backstage Pass" —
dark, monocromo, marquee del nome + cerchio). Contesto prodotto in `PRODUCT.md`, direzione
in `.impeccable/surfaces/src-app-page-tsx.md` (seed key `946859e1`).

## Cosa si costruisce

Home one-pager in italiano, mondo visivo = **manuale d'identità tipografica** (chiave svizzera):
griglia a 12 colonne a vista, sezioni numerate `01–04`, arredo da specifica tecnica
(segni di clearspace, quote, riga di revisione), un solo colore di segnale (cobalto).

Struttura:

| # | Sezione | Contenuto |
|---|---------|-----------|
| — | Copertina / hero | Indice `01–04` nel margine sinistro · `MATTEO PALERMO` fuori scala sulla griglia · sottotitolo "Manuale — chi sono, cosa faccio, come lavoro" · riga `rev. 2026 · v1` · email in blocco cobalto |
| 01 | Profilo | "Chi sono" + storia breve. ~2 paragrafi, bozza IT con segnaposto (città, anno d'inizio). Box ritratto con segni di clearspace. |
| 02 | Competenze | Costellazione fissa, stesso ordine ad ogni visita: Front-end / UI & stile / Back-end & API / Strumenti. Ogni voce con intervallo mono (`livello · dal 20XX`) e una riga su cosa risolve. |
| 03 | Lavori | **Stato vuoto curato.** Filetto spezzato + segnaposto `rev. 2026 · in aggiornamento` + 3 slot `progetto 0X — riservato` con quote. Pronto per dati reali via `src/lib/projects.ts` (array `progetti`, oggi vuoto → render automatico dello stato vuoto). |
| 04 | Contatto | Colophon: email in blocco cobalto pieno, social (Instagram reale; YouTube/TikTok `#`), riga `rev. 2026 · v1`, nota sui tempi di risposta (segnaposto). |

## Sistema visivo

- **Colore:** fondo carta `#F5F2EA` · inchiostro `#16150F` · cobalto `#1B2BE0` (unico segnale, ~20%: logotipo, filetti portanti, blocco sezione attiva, email) · graphite `#8C887C` (griglia, testo secondario, spec). Solo tema chiaro.
- **Tipografia:** `Familjen Grotesk` (display + prosa, via `next/font/google`) · `Geist_Mono` (solo numeri, quote, date, valori-spec, revisione). Via `Inter` in uscita.
- **Movimento:** un solo momento autoriale — il logotipo si compone una volta al load (ease-out da stato già visibile), rispetta `prefers-reduced-motion`. Nessuna animazione d'ingresso ripetuta per sezione.
- **Stato attivo indice:** l'`01`/`02`… corrente in blocco cobalto pieno, gli altri a contorno (scroll-spy). Numeri = ancore linkabili (`#profilo`, `#competenze`, `#lavori`, `#contatto`).
- Niente ombre, gradienti, card, testo in gradiente, bordi colorati > 1px.

## File toccati

- `src/app/layout.tsx` — font (Familjen Grotesk + Geist_Mono), `metadata` (title/description reali), via SiteHeader/Footer già assenti.
- `src/app/globals.css` — nuovi token, griglia, theming di selezione/caret/scrollbar/focus, rimozione classi `.dp-*` (marquee).
- `src/app/page.tsx` — riscrittura completa (la pagina).
- `src/components/manual/*` — componenti sezione (index rail, sezione, competenza, slot lavoro, colophon).
- `src/lib/projects.ts` — **nuovo**: tipo `Progetto` + array `progetti` vuoto.
- `src/components/site-header.tsx`, `site-footer.tsx` — rimossi (codice morto Lorem Ipsum, non referenziati).
- `references/*` — invariati.

## Verifica

`npx tsc --noEmit` + `npm run lint` puliti · screenshot desktop 1440 e mobile 390 · detector Impeccable · finish review + aggiornamento `DESIGN.md` (generato dal costruito, a fine lavoro).

## Segnaposto che restano a Matteo

Città, anno d'inizio attività, livello reale per competenza, tempo di risposta, foto ritratto,
URL veri di YouTube/TikTok, e i testi definitivi di Profilo/Competenze (ora bozza).
