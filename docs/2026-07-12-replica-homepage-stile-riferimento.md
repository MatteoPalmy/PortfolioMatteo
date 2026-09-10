# Replica homepage in stile sito di riferimento (con contenuti Lorem Ipsum)

**Data:** 2026-07-12
**Riferimento:**
- `references/sito-riferimento` — HTML completo della pagina (Next.js con CSS Modules inline): fonte primaria per struttura DOM e layout a griglia
- `references/screencapture-richardekwonye-2026-07-12-01_08_09.png` — screenshot full-page: fonte per resa visiva, proporzioni e tipografia

## Obiettivo

Replicare il più fedelmente possibile **struttura, layout e stile tipografico** della homepage di riferimento, sostituendo ovunque nomi, testi e contenuti reali con **placeholder Lorem Ipsum**. Le immagini/video originali verranno sostituiti con blocchi placeholder neutri (rettangoli grigi/gradiente), senza usare alcun asset o testo del sito originale.

## Analisi del riferimento (dall'HTML reale)

Stile "Swiss / International Typographic": sfondo grigio chiaro (~`#e0e0de`), testo quasi-nero, un solo font sans-serif (Helvetica-like), tipografia enorme, sezioni numerate `01/`–`04/`.

**Sistema di griglia (dai CSS Modules inline):**
- Desktop (≥992px): **12 colonne**, `column-gap: 25px`
- Mobile: **6 colonne**, `column-gap: 10px`
- Ogni sezione è avvolta in un wrapper (`SmoothArea`) con padding verticale di sezione; il layout ha un padding orizzontale globale

**Struttura DOM della pagina** (componenti nell'ordine reale):

1. **`Header`** — griglia con 4 aree:
   - `title`: nome/logo (link)
   - `currentRole`: "Currently Design / Engineer at …" su 2 righe (`<br>`)
   - `location`: "Based in … / …" su 2 righe
   - `navArea`: nav desktop con 4 link separati da virgole testuali (`Work, About, Contact, Blog`) + nav mobile con voce "Menu"
2. **`HomeHero`** (griglia 12 col, `row-gap: 35px`, min-height ≈ 100vh):
   - `title` (col 1→13): titolo gigante su 2 righe — ogni riga è un `BigText` con **le lettere in `<span>` singoli** (per l'animazione lettera-per-lettera) + un `<span>` sr-only con la parola intera per l'accessibilità → placeholder "LOREM / IPSUM"
   - `DraggableMaskCover`: piccola immagine ritratto orizzontale con hotspot trascinabile → placeholder grigio
   - freccia `↓` (`Arrow`)
   - `description`: una riga breve ("I support designers and agencies…") con parole in span animate → Lorem Ipsum
   - `name` (col 6→13, allineato a destra): secondo `BigText` gigante su 2 righe (il nome) → "LOREM / IPSUM"
3. **`HomeProfile`** — sezione `01/`:
   - `h4` numero `01/` (fade-in)
   - `bio`: 2 paragrafi grandi in maiuscolo (classe `AnimatedLines lg`) → 2 paragrafi Lorem Ipsum
   - `advantageTitle`: `h4` breve ("A blend of UI and product engineering.") → Lorem breve
   - `advantage`: paragrafo doppio (2 blocchi separati da `<br><br>`) in corpo piccolo → Lorem
   - `aboutLink`: link `UnderlinedLink` — sottolineatura piena con trattino animato che scorre al hover ("More about me and services") → "Lorem ipsum dolor sit amet"
4. **`HomeProjects`** — sezione `02/`:
   - `h4` `02/` + `titleTwo` ("Recent projects") + `titleThree` ("Creative development"), piccole, distribuite sulla griglia → placeholder
   - **2 progetti** (`Projects_project`), ciascuno griglia 12 col:
     - `details` (col 1→7): `h2` con `BigAction` — titolo enorme spezzato su 2 righe, lettere in span singoli, **riga di sottolineatura spessa sotto ogni riga** (pseudo-elemento, con effetto reveal) + `shortDescription` in maiuscolo su ~3 righe
     - `cover` (col 7→13): immagine verticale grande con parallasse e scale-on-hover → placeholder scuro
   - Nell'originale il titolo è un `<button>` che apre un modal progetto (`ProjectModal`): nel nostro caso resterà un button senza modal (o anchor placeholder)
   - Le ripetizioni dei titoli visibili nello screenshot ("RESENT", "CHIFY"…) sono artefatti dell'animazione di scroll, non elementi separati
5. **`HomeAbout`** — sezione `03/`:
   - `h4` `03/` + label `title` ("About me") → placeholder
   - `hobbies` (desktop: col 3→10): tre `h2` giganti ("FOOTBALL, / GAMING, / MUSIC.") con una **piccola immagine orizzontale con parallasse inserita tra il primo e il secondo** → "LOREM, / IPSUM, / DOLOR." + placeholder grigio
   - `description`: paragrafo piccolo → Lorem
   - `aboutLink`: `UnderlinedLink` ("More about me") → Lorem breve
6. **`SendMessage`** — sezione `04/`:
   - `h4` `04/` + `titleTwo` ("Want to work together?") + `titleThree` ("Send me a message") → placeholder
   - `emailAddress` (col 1→13, `margin-top: 120px`): email gigante sottolineata su 2 righe a tutta larghezza (`EmailAddress`) → `LOREM@IPSUMDOLOR.COM`
7. **`Footer`** — griglia (`footerGrid`):
   - `title`: nome + ruolo su 2 righe piccole → Lorem
   - `socialLinks`: 3 link ("Twitter, Instagram, Github") → placeholder ("Lorem, Ipsum, Dolor")
   - `team`: crediti su 2 righe ("Development … / Design …") → Lorem

**Dettagli di interazione presenti nell'originale:**
- Animazioni di reveal lettera-per-lettera e riga-per-riga allo scroll (`BigText`, `AnimatedLines`, `FadeIn`)
- Cursore custom circolare (`AreaCursor`) sui progetti
- Parallasse e scale-on-hover sulle immagini
- Link sottolineati con trattino chiaro che attraversa la riga al hover (`UnderlinedLink`)

## Come verrà implementato

- **File toccati:**
  - `src/app/page.tsx` — riscritto: sezioni `HomeHero`, `HomeProfile` (01), `HomeProjects` (02), `HomeAbout` (03), `SendMessage` (04) nello stesso ordine e con gli stessi span di griglia del riferimento
  - `src/components/site-header.tsx` — riscritto: griglia a 4 aree (nome, ruolo, location, nav con virgole + "Menu" su mobile)
  - `src/components/site-footer.tsx` — riscritto: griglia a 3 aree (titolo, social, crediti)
  - `src/app/globals.css` — palette (sfondo `#e0e0de`, testo quasi-nero), variabili per le taglie tipografiche fluide (`clamp`), classi/keyframes per: underline animata dei link, barre sotto i titoli progetto, fade/reveal base
  - `src/app/layout.tsx` — font display sans-serif Helvetica-like via `next/font/google` (proposta: **Archivo**; alternative: Inter con tracking stretto)
- **Griglia:** replicata con Tailwind (`grid-cols-6 gap-[10px]` mobile → `lg:grid-cols-12 lg:gap-[25px]`), stessi `col-start/col-end` del riferimento (hero name 6→13 a destra, project details 1→7 / cover 7→13, hobbies 3→10, ecc.)
- **Tecnica:** solo Tailwind v4 + CSS custom, nessuna nuova dipendenza. Immagini placeholder come `div` con sfondi grigi/gradiente.
- **Animazioni replicate (versione semplificata in CSS):** fade-in/reveal allo scroll via CSS (`animation-timeline` o IntersectionObserver leggero se necessario), underline animata al hover, scale-on-hover sulle cover. **Non** replicate: split lettera-per-lettera, parallasse via JS, cursore custom, modal progetto, smooth-scroll.
- **Contenuti:** tutti i testi sostituiti con Lorem Ipsum; nessun testo, nome, immagine o marchio del sito originale.

## Verifica

- `npm run dev` + confronto visivo con lo screenshot di riferimento
- `npx tsc --noEmit` e `npm run lint` puliti
