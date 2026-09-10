---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

# Surface brief — Home (`src/app/page.tsx`)

**Scope.** Il sito intero: home one-pager con hero + 01 Profilo + 02 Competenze + 03 Lavori + 04 Contatto. Redesign completo: sostituisce il mondo visivo "The Backstage Pass".

**Visitor mode.** Persuade — il visitatore decide di scrivere a Matteo per una commissione.

**Audience / job / action.** Potenziali clienti freelance arrivati da bio social o link condivisi; devono capire in fretta chi è Matteo e se fa al caso loro, poi scrivere all'email. Unica azione di conversione: `mailto:matteo.kay07@gmail.com`.

**Proof / content.** Nessun progetto reale ancora: la 03 Lavori è uno stato vuoto curato, costruito per accogliere progetti veri quando ci saranno (array `progetti` in `src/lib/projects.ts`). Testi "chi sono / storia" e "competenze" sono bozze in italiano con segnaposto per i dati reali di Matteo (città, anno d'inizio, tempi di risposta, ritratto).

**Constraints.** Una sola pagina scrollabile. Il nome "Matteo Palermo" resta elemento centrale (vincolo utente). Italiano-first. Next.js 16 App Router, Tailwind v4 config-free (token in `globals.css`), font via `next/font`. Nessun backend: contatto solo via `mailto`. Link YouTube/TikTok segnaposto (`#`), Instagram reale.

**Memorable moment.** Il logotipo MATTEO PALERMO fuori scala che si compone una sola volta al caricamento, agganciato alla griglia a vista, in un unico movimento ease-out.

**Unresolved.** Città / anno d'inizio / tempo di risposta / ritratto = segnaposto da riempire. Lingua definitiva (solo IT vs bilingue) non decisa. Nessun tema scuro in questo redesign (il manuale è un artefatto stampato).

## Direction contract

**THESIS.** Il portfolio è il manuale d'identità di una persona, non una pagina: rifiuta l'eroe scuro con griglia di card; il nome è il soggetto documentato e la griglia a 12 colonne è arredo portante a vista.

**OWN-WORLD.** Fondo carta bianco-caldo #F5F2EA, inchiostro #16150F, un solo cobalto #1B2BE0 (~20%: logotipo, filetti portanti, marca "live"); griglia graphite sempre visibile. Familjen Grotesk per display e prosa; Geist Mono solo per numeri, quote, date, valori-spec, riga di revisione. Segni di clearspace, sezioni 01–04, revisione a piè pagina. Niente ombre, gradienti, card.

**STORY.** Un potenziale cliente capisce "questa persona documenta e sistematizza", scorre Profilo → Competenze → Lavori → Contatto per numero, e scrive all'email in cobalto nel colophon.

**FIRST VIEWPORT.** Sinistra: indice 01–04, l'attivo in blocco cobalto pieno, gli altri a contorno. Centro: MATTEO PALERMO fuori scala sulla griglia visibile, composto una sola volta al load in un unico movimento ease-out. Sotto: "Manuale — chi sono, cosa faccio, come lavoro". Piè pagina: "rev. 2026 · v1" in mono; email in basso a destra in blocco cobalto pieno, unico elemento vivo.

**FORM.** Manuale d'identità tipografica svizzero; #5 di 7 direzioni fondate; seed key 946859e1.

**FINISH.** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
