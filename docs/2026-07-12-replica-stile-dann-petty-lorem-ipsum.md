# Replica stile/struttura sito Dann Petty con contenuti Lorem Ipsum

**Data:** 2026-07-12
**Stato:** Implementato il 2026-07-13 (font scelto: Inter)

## Obiettivo

Rifare la home page (`src/app/page.tsx`) replicando il più fedelmente possibile la **struttura e lo stile visivo** dello screenshot di riferimento (`references/screencapture-dannpetty-2026-07-12-23_48_06.png`, sito dannpetty.com), sostituendo ogni contenuto reale (nome, testi, progetti, loghi, immagini) con placeholder **Lorem Ipsum**.

> **Riferimenti:** `references/sito-riferimento` (export Framer di dannpetty.com, aggiornato il 2026-07-12) + screenshot full-page. I valori di colore e font sotto sono estratti direttamente dall'HTML.

## Struttura della pagina (dall'alto verso il basso)

1. **Header (top bar)**
   - A sinistra: 3 icone social quadrate con bordo arrotondato (stile YouTube / Twitter / Instagram → sostituite con icone generiche).
   - A destra: bottone/pill con email placeholder `hey@loremipsum.com`.

2. **Hero**
   - Scritta gigante `LOREM©` in bianco, bold, che occupa quasi tutta la larghezza (al posto di `DANN©`).
   - **Nastro diagonale giallo-lime** (stile "tape") che attraversa la scritta, inclinato di pochi gradi, con testo nero ripetuto separato da `·` (es. "Lorem ipsum dolor (sit) · Amet consectetur adipiscing · 2x Lorem (ipsum dolor) · L-Combinator Alumni (S13) …"), con animazione marquee a scorrimento.
   - **Avatar circolare** al centro del nastro, sovrapposto alla scritta (immagine placeholder con gradiente).
   - Sotto: tagline centrata "Lorem ipsum dolor sit amet consectetur (lorem)" in bianco.
   - Riga di **7 loghi clienti circolari** (cerchi placeholder con colori/iniziali diverse).

3. **Griglia progetti (masonry, 4 colonne)**
   - ~28 card su 4 colonne ad altezze variabili (layout masonry via CSS columns).
   - Ogni card: sfondo grigio scurissimo (`~#1a1a1a`), angoli arrotondati, immagine "screenshot" placeholder (blocchi con gradienti/tinte diverse per varietà visiva), e in basso una riga con: avatar circolare piccolo + titolo progetto (es. "LoremIpsum.com") + sottotitolo grigio (es. "lorem ipsum, dolor sit amet").
   - Su alcune card, badge nero in overlay in alto a destra "Made in Lorem" (replica del badge "Made in Framer").
   - Responsive: 4 colonne desktop → 2 tablet → 1 mobile.

4. **Footer**
   - Testo centrato "Lorem ipsum dolor. Sit amet consectetur." (al posto di "Thanks for looking. Stay in touch.")
   - Sotto: bottone "Made in Lorem" + le 3 icone social.
   - Badge fisso "Made in Lorem" in basso a destra (position fixed), come sul sito originale.

## Stile visivo

- **Tema:** dark totale — sfondo `#111111`, card su `#1d1d1d`, testo bianco, grigi per i sottotitoli.
- **Accento:** giallo-lime `#cefb50` (valore esatto estratto dall'HTML) solo per il nastro diagonale.
- **Font:** il sito originale usa **Inter / Inter Display / Inter Tight**. Opzione A (default): usare Geist Sans già nel progetto. Opzione B (fedeltà massima): caricare Inter via `next/font/google`.
- **Card:** bordi arrotondati ~8px, hover con leggera scala/luminosità.
- Tutte le immagini saranno **placeholder generati via CSS** (gradienti, pattern) — nessuna immagine copiata dal sito originale.

## Implementazione tecnica

- **`src/app/page.tsx`** — riscritto completamente con le sezioni sopra (i dati dei progetti in un array di costanti con titoli/sottotitoli/altezze/tinte placeholder).
- **`src/app/globals.css`** — aggiunta keyframe per il marquee del nastro e override dello sfondo scuro per la home (tema dark forzato sulla pagina).
- **`src/app/layout.tsx`** — la pagina replica è "full-bleed" e ha header/footer propri: `SiteHeader` e `SiteFooter` attuali verranno nascosti/rimossi per la home (da confermare: rimuoverli dal layout o lasciarli e costruire la replica come pagina autonoma).
- **`src/components/`** — eventuali sotto-componenti (es. `project-card.tsx`) se `page.tsx` diventa troppo lungo; altrimenti tutto in `page.tsx` come da architettura attuale (home = un solo file).
- Nessuna nuova dipendenza: solo Tailwind v4 + CSS custom. Le icone social come piccoli SVG inline generici.
- Verifica finale: `npm run dev` + `npx tsc --noEmit` + `npm run lint`.

## Cosa NON verrà fatto

- Nessun testo, immagine, logo o asset copiato dal sito reale (solo struttura/layout, contenuti 100% Lorem Ipsum).
- Nessuna animazione avanzata tipo cursore custom o modal progetti (non visibili nello screenshot statico); solo marquee del nastro e hover semplici.
