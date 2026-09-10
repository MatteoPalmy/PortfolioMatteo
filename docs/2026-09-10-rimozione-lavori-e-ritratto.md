# 2026-09-10 — Rimozione sezione "Lavori" e del ritratto

## Contesto

Richiesta via `/impeccable init`: nel sito si vuole (1) togliere la sezione con i
lavori svolti e (2) per il momento non inserire nessuna foto/immagine di Matteo.

Decisioni confermate dall'utente:

- **Sezione "Lavori": rimossa, ma da ripristinare.** Tolta dalla pagina ora
  perché non ci sono progetti reali; torna quando ci saranno lavori veri.
- **Ritratto: tolto anche lo slot.** Nessuna cornice ritratto nel Profilo per ora
  (niente placeholder "da inserire"). Si rivaluta più avanti.
- Applicare subito le due modifiche al codice.

## Cosa cambia

### `src/app/page.tsx`

- Rimossa per intero la `<Section id="lavori" n="03" title="Lavori">` (stato vuoto
  curato: paragrafo, `SpecList` di stato, tre `PlateFrame reserved`).
- Rimossa la colonna ritratto nel Profilo (`<PlateFrame caption="Ritratto …" />`).
  Per non lasciare la sezione sbilanciata sulla griglia, la `SpecList` dei dati di
  profilo (Attivo / Sede / Lingue) passa dalla colonna sinistra alla colonna
  destra (`sm:col-span-4 sm:col-start-9`), esattamente come fa la sezione
  Contatto. Nessun contenuto inventato.
- Rinumerata la sezione Contatto: `n="04"` → `n="03"`.
- Rimossi gli import ora inutilizzati: `progetti`, `PlateFrame`, `ProjectList`.

### `src/components/manual/index-rail.tsx`

- Tolta la voce `{ id: "lavori", n: "03", label: "Lavori" }`.
- Contatto rinumerata `03`. L'indice ora è 01 Profilo · 02 Competenze · 03 Contatto.

### File mantenuti come punto di ripristino

- `src/lib/projects.ts` — array `progetti` e tipo `Progetto` restano; commento
  aggiornato per spiegare che la sezione è al momento rimossa e come riattivarla.
- `src/components/manual/project-list.tsx` — invariato, pronto per il ritorno.
- `src/components/manual/plate-frame.tsx` — invariato (resta nel design system,
  usato da `ProjectList`); commento aggiornato.

### Documentazione

- `PRODUCT.md` — registrate le due decisioni; allineati alcuni riferimenti
  rimasti al vecchio mondo "Backstage Pass" (ora "Il Manuale", sito in italiano).
- `.impeccable/surfaces/src-app-page-tsx.md` — scope aggiornato a 3 sezioni,
  ritratto rimosso dagli "Unresolved".
- `DESIGN.md` — correzioni puntuali dei riferimenti diventati falsi (sezioni
  01–03, niente "Lavori"/`#lavori` nell'indice, `ProjectList` marcato come
  componente dormiente). Nessun cambiamento al mondo visivo.

## Verifica

`npx tsc --noEmit`, `npm run lint`, `npm run build`, e screenshot desktop + mobile
della pagina; poi il detector Impeccable sui file toccati.
