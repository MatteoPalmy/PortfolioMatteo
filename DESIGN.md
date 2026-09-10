---
name: Matteo Palermo — Il Manuale
description: A freelance web developer's portfolio built as a Swiss identity manual — warm paper, one committed cobalt, an always-visible 12-column grid
colors:
  paper: "#f5f2ea"
  ink: "#16150f"
  cobalt: "#1b2be0"
  cobalt-ink: "#131f9e"
  muted: "#5a574e"
  graphite: "#6b675c"
  hairline: "rgba(107, 103, 92, 0.38)"
  hairline-strong: "rgba(107, 103, 92, 0.58)"
  grid: "rgba(107, 103, 92, 0.55)"
typography:
  display:
    fontFamily: "Familjen Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.7rem, 13.5vw, 12rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Familjen Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 4.6vw, 3.15rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Familjen Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Familjen Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.1rem, 1.7vw, 1.35rem)"
    fontWeight: 500
    lineHeight: 1.55
  body:
    fontFamily: "Familjen Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Familjen Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 500
    letterSpacing: "0.2em"
  mono:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.72rem"
    fontWeight: 400
    letterSpacing: "0.04em"
rounded:
  none: "0"
spacing:
  hairspace: "0.25rem"
  tight: "0.75rem"
  gap: "1.75rem"
  gap-lg: "2.5rem"
  section-top: "2.5rem"
  section-bottom: "6rem"
  shell-max: "84rem"
  shell-inline: "clamp(1.25rem, 5vw, 4rem)"
components:
  section-rule:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  section-rule-broken:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  index-chip-active:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "4px 10px"
  index-chip-inactive:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "4px 10px"
  email-block:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1rem"
  email-block-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.cobalt}"
  email-block-lg:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "1.25rem 1.5rem"
  social-icon:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "36px"
    width: "36px"
  social-icon-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  plate-frame:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.muted}"
    rounded: "{rounded.none}"
  plate-frame-reserved:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.muted}"
    rounded: "{rounded.none}"
  spec-list:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    rounded: "{rounded.none}"
---

# Design System: Matteo Palermo — Il Manuale

## Overview

**Creative North Star: "The Identity Manual"**

The portfolio is not a page, it is a document: a Swiss typographic identity manual whose documented subject is the person. It refuses the dark hero and the card grid outright. The visitor's name is set once as an oversized cobalt wordmark — the specimen on the cover — and the rest of the site is title-blocks, numbered sections (01–04), spec lists, and framed plates, printed on warm paper. The 12-column grid is not a layout aid hidden in dev tools; it is drawn on every screen as load-bearing furniture, the way a manual shows its own construction lines.

The palette is disciplined to the point of austerity: warm paper, near-black ink, two warm greys, and exactly one chromatic colour — a single committed cobalt (#1B2BE0) that carries roughly a fifth of any screen and never more. Cobalt marks three things and nothing else: the wordmark, the load-bearing section rules, and the one live action (the email block). Everything is flat. There are no shadows, no gradients, no rounded corners, no cards. Depth is made only of lines — hairlines, ink rules, the 2px cobalt section rule, and the ever-present grid.

The one moment of motion is the wordmark composing itself letter by letter on load, once, then never again. The tone is precise, unpretentious, and Italian: this is one identifiable maker's calling card, and the manual conceit is the personality.

**Key Characteristics:**
- Warm paper (#F5F2EA) and ink (#16150F), one committed cobalt, two warm greys — no other hue anywhere
- A 12-column grid (4 on mobile) drawn on every screen as permanent furniture
- Totally flat: zero shadows, zero gradients, zero border-radius, zero cards
- Cobalt restricted to the wordmark, section rules, and the single live email action
- Numbered sections 01–04, mono spec-lists, framed plates with corner crop-marks
- One animation only: the wordmark composes once on load

## Colors

A warm-neutral document palette with a single chromatic accent. Every neutral is the same warm grey hue at different lightness; cobalt is the only colour that is a colour.

### Primary
- **Cobalt** (`#1b2be0`): the one committed accent. Used on exactly three classes of thing — the wordmark, the 2px solid section rules that open a whole section, and the single live action (the email block, plus its direct echoes: the active index chip, inline `mailto:` links, and project links). Also themes browser surfaces (`::selection` fill, `:focus-visible` outline, `caret-color`, `accent-color`). Never a background wash, never decoration.
- **Cobalt Ink** (`#131f9e`): a darker cobalt reserved for cobalt-as-body-text situations where the bright cobalt would not hold contrast on paper. Defined as the world's paired dark accent; use it only for cobalt text at small sizes, never for fills or rules.

### Neutral
- **Paper** (`#f5f2ea`): the page background everywhere, and the "inverted" text/fill colour on cobalt surfaces (the email block prints paper-coloured text on cobalt; hover swaps them).
- **Ink** (`#16150f`): primary text, and the strong structural rules — the index-rail bottom border, the plate-frame border, the "Competenze" table's outer `border-y`, and the colophon top border.
- **Muted** (`#5a574e`): secondary prose (the cover intro line, captions, the profile-column supporting paragraph), and mono caption text.
- **Graphite** (`#6b675c`): lowest-emphasis text — the section-number marginalia, spec-list keys (`dt`), the "Indice" label, the custom scrollbar thumb.
- **Hairline** (`rgba(107,103,92,0.38)`): the default divider — rows inside spec-lists and the Competenze table, inactive index-chip borders, the 1px gutter between project rows.
- **Hairline Strong** (`rgba(107,103,92,0.58)`): heavier dashed borders — the corner crop-mark ticks, the "reserved" plate-frame border, and the dashed rule on an empty section.
- **Grid** (`rgba(107,103,92,0.55)`): the column borders of the always-visible 12-column grid overlay. This value exists only for the grid.

### Named Rules

**The No-Hue-Beyond-Cobalt Rule.** The neutrals are one warm grey hue at stepped lightness; cobalt (#1B2BE0) is the only chromatic value in the system. No second accent, no tint, no gradient, no coloured state. If a surface needs emphasis and it is not the wordmark, a section rule, or the live action, it gets weight or a hairline — not colour.

**The Cobalt-Restraint Rule.** Cobalt appears on the wordmark, on load-bearing section rules, and on the one live mark (the email block) plus its direct echoes (active index chip, inline email/project links). It stays at roughly 20% of any viewport and never becomes a background field or an ornament. Its scarcity is what makes it read as "this is the thing that matters."

## Typography

**Display & Prose Font:** Familjen Grotesk (loaded via `next/font` as `--font-sans`; fallback `ui-sans-serif, system-ui, sans-serif`)
**Data & Label Font:** Geist Mono (loaded as `--font-geist-mono`; fallback `ui-monospace, SFMono-Regular, monospace`)

**Character:** A Swiss grotesk carries every readable role, from the 12rem wordmark down to body copy — hierarchy comes from scale and weight, not from mixing families. The monospace is not a stylistic choice; it is a semantic one. It appears only where the content is measurable: numbers, dates, dimensions, section indices, spec values, the revision line.

### Hierarchy
- **Display** (700, `clamp(2.7rem, 13.5vw, 12rem)`, line-height 0.92, tracking -0.04em, uppercase, cobalt): the "MATTEO PALERMO" wordmark on the cover, set as two stacked words. The documented specimen; appears once.
- **Headline** (600, `clamp(1.9rem, 4.6vw, 3.15rem)`, line-height 1.02, tracking tight, ink): section titles (`Profilo`, `Competenze`, `Lavori`, `Contatto`). The section number rides alongside as mono marginalia at 0.42em of the heading, in graphite, pulled into the left margin on `lg`.
- **Title** (600, ~`1.25rem` / `1.125rem`, tracking tight, ink): sub-headings inside sections — project titles, Competenze group names.
- **Lead** (500, `clamp(1.1rem, 1.7vw, 1.35rem)`, line-height 1.55, ink): the opening paragraph of a section (the Profilo intro). Max ~58ch.
- **Body** (400, `1rem`, line-height ~1.6, ink at 90% or muted): running prose. Max 46–58ch.
- **Label** (500, `0.7rem`, tracking 0.16–0.2em, uppercase, sans, muted/graphite): functional micro-labels — the cover document classification ("Manuale / Portfolio · identità"), the "Indice" tag, the email-block "SCRIVIMI" kicker (tracking 0.12em). Classification and function only, never a decorative eyebrow on a headline.
- **Mono** (400, `0.72rem` for spec rows / `0.68rem` for captions, tracking 0.04–0.14em, often uppercase): Geist Mono. Spec-list keys and values, plate captions, section numbers, level chips in Competenze, the colophon revision line, the footer email.

### Named Rules

**The Two-Voice Rule.** Familjen Grotesk sets everything a person reads as language. Geist Mono sets everything a person reads as data — numbers, dates, dimensions, spec values, indices, the revision line. Mono is never used for prose and never for decoration; if it is not measurable, it is not mono.

**The Wordmark-Once Rule.** The display size belongs to the wordmark alone. Never set a section heading or a line of copy at display scale, and never render a second cobalt wordmark elsewhere.

## Layout

**The shell.** All content and the grid overlay share one container, `.manual-shell`: `width: 100%`, `max-width: 84rem`, centred, `padding-inline: clamp(1.25rem, 5vw, 4rem)`. Nothing sits outside it.

**The visible grid.** `GridOverlay` renders a `fixed inset-0`, `pointer-events-none`, `z-0` layer holding a `.manual-shell` with `grid-cols-4 sm:grid-cols-12`; each column is a right-border in Grid colour, so the construction lines are on screen at all times. Page content sits at `z-10` above it. Sections lay out on `sm:grid-cols-12` and place their blocks with explicit `col-span` / `col-start` (e.g. Profilo prose `col-span-7`, plate `col-span-4 col-start-9`).

**Section structure.** Each `Section` opens with a top rule (2px solid cobalt normally; 1px dashed hairline-strong when `broken`), then `pt-10`, then the headline with its mono number, then a content well at `mt-8 sm:mt-10`, `px-1 sm:px-3`, `pb-20 sm:pb-24`. Sections carry `scroll-mt-24`.

**The cover.** A full-height panel (`sm:min-h-[86svh]`), flex column, `justify-between`: document label + social row at top, wordmark + intro in the middle, spec-list + small email block at the bottom. Corner ticks are absolutely positioned over the whole panel.

**The index rail.** `IndexRail` is `sticky top-0 z-40`, solid paper background, ink bottom hairline; chips `01–04` are real `#id` anchors. `html` has `scroll-behavior: smooth` and `scroll-padding-top: 5rem`.

**Rhythm.** Tailwind's default scale, used sparsely: inline pads `px-1` (0.25rem) / `sm:px-3` (0.75rem), block gaps `gap-7`–`gap-10` (1.75–2.5rem), section top `pt-10` (2.5rem), section bottom `pb-20`–`pb-24` (5–6rem). Breakpoints are Tailwind defaults: `sm` 640px, `lg` 1024px.

### Named Rules

**The Visible-Grid Rule.** The 12-column grid (4 on mobile) is permanent furniture. It is always rendered, never toggled, never decorative-only — every section aligns its blocks to it with `col-span` / `col-start`. New surfaces align to the same 12 columns inside `.manual-shell`.

## Elevation & Depth

No shadows. Anywhere. There is no `box-shadow` in the system and there never should be. Separation is done entirely with lines: hairline dividers (`rgba(107,103,92,0.38)`), ink structural rules, the 2px cobalt section rule, dashed hairline-strong borders for provisional content, and the always-on column grid. The only "fill" that stands in for a surface is the plate-frame placeholder, `color-mix(in srgb, var(--color-graphite) 5%, var(--color-paper))` — a barely-there warm tint, not a raised card.

State changes are structural, not lit: the email block and social icons invert their fill and text on hover; the index chip swaps from hairline outline to solid cobalt when active. Nothing lifts, glows, or casts.

### Named Rules

**The Flat Rule.** Depth is lines, never shadow. If a surface needs to separate from its neighbour, give it a hairline, an ink rule, or grid alignment — never elevation.

## Shapes

**Corners.** `border-radius` is `0` everywhere. Every frame, chip, button, plate, icon square, and rule is a hard-cornered rectangle. This is absolute; there is no `rounded` scale to reach for.

**Borders as language.** Border weight and style carry meaning:
- **1px hairline** — ordinary dividers (spec rows, table rows, project-row gutters).
- **1px / 2px ink solid** — strong structure (index-rail underline, plate-frame border, table `border-y`, colophon top border).
- **2px cobalt solid** — a section that is whole: the top rule of `Section`.
- **1px dashed hairline-strong** — provisional content: the top rule of a `broken` section, the "reserved" plate-frame border, the corner ticks.

**Crop-marks & clearspace.** `Ticks` draws four L-shaped 1px corner marks (`h-3 w-3`, hairline-strong) inside any `position: relative` box — used on the cover panel and every plate frame. They are the manual's registration marks: they imply the plate has clearspace and is positioned deliberately.

**Icon system.** Authored inline SVGs only. Stroke icons (Instagram, the arrow) use `stroke-width: 1.8`, round caps and joins, `currentColor`; fill icons (YouTube, TikTok) use `currentColor` fill. Social icons live in 36px (`size-9`) hairline-bordered squares.

## Components

### Index Rail (`IndexRail`)
Character: the manual's table of contents, pinned to the top edge. No props. `sticky top-0 z-40`, solid paper background, ink bottom hairline. Chips are real `#profilo`/`#competenze`/`#lavori`/`#contatto` anchors, each a mono number (`01`) plus a sans label. Active chip is a filled cobalt block with paper text; inactive is a hairline outline with ink text and `hover:border-muted`. Active state is structural (fill vs. outline), not tonal. A scroll-spy computes the active entry against a line at 35% of viewport height and **defaults to entry 1**, so a filled tab is always visible — even on the cover before section 01. `transition-colors duration-300`.

### Wordmark (`Wordmark`)
Props: `{ id?: string }`. The documented specimen: "MATTEO PALERMO" as two stacked `block` spans, Familjen Grotesk 700, `clamp(2.7rem, 13.5vw, 12rem)`, line-height 0.92, letter-spacing -0.04em, uppercase, cobalt. Each visible letter is a `.wordmark-letter` span carrying `--i` (its index); the word is exposed to assistive tech via a single `sr-only` span while the animated letters are `aria-hidden`. Appears once, on the cover.

### Section (`Section`)
Props: `{ id: string; n: string; title: string; broken?: boolean; children: ReactNode }`. Wraps a numbered section: top rule (2px solid cobalt, or 1px dashed hairline-strong when `broken`), `pt-10`, an `h2` headline (`clamp(1.9rem, 4.6vw, 3.15rem)`, semibold, tracking-tight, ink) with the section number `n` as mono graphite marginalia at `0.42em` (absolute in the left margin from `lg`), then a content well (`mt-8 sm:mt-10`, `px-1 sm:px-3`, `pb-20 sm:pb-24`). `scroll-mt-24`, `z-10`. `broken` is driven by real emptiness (`progetti.length === 0`), not styling whim.

### Spec List (`SpecList`)
Props: `{ rows: [string, string][]; className?: string }`. A technical drawing's title-block: a `<dl>` in Geist Mono `0.72rem`, tracking 0.04em, muted. Each row is `flex gap-5`, `border-b border-hairline`, `px-0.5 py-3` (last row loses its border). `dt` is uppercase graphite, `w-20 sm:w-24 shrink-0`; `dd` is ink, `min-w-0 break-words pr-1`. Used for cover metadata, profile facts, contact facts, and the empty-Lavori status block.

### Plate Frame (`PlateFrame`)
Props: `{ src?: string; alt?: string; caption: string; ratio?: string ("4 / 5"); reserved?: boolean }`. A framed image slot. Box is `overflow-hidden border` at `aspect-ratio: ratio`; border is solid ink normally, **dashed hairline-strong when `reserved`**. With `src`, renders a `next/image` `fill object-cover`; without, a placeholder filled `color-mix(in srgb, var(--color-graphite) 5%, var(--color-paper))` with a centred mono uppercase word — "riservato" when `reserved`, "da inserire" otherwise. `Ticks` overlay the frame. A mono uppercase caption (0.68rem, muted) sits below.

### Ticks (`Ticks`)
Props: `{ className?: string; color?: string ("var(--color-hairline-strong)") }`. Four L-shaped 1px corner crop-marks (`h-3 w-3`), `pointer-events-none`, `aria-hidden`. Requires a `position: relative` parent.

### Social Row (`SocialRow`)
Props: `{ className?: string }`. A `flex gap-2` list of three 36px (`size-9`) squares with a hairline border and ink `currentColor` icon. Hover inverts the square to ink fill with paper icon (`transition-colors`). Instagram is a real external link (`target="_blank"`, `rel="noopener noreferrer"`); YouTube and TikTok are `#` placeholders rendered as same-page links. Icons are authored inline SVGs.

### Email Block (`EmailBlock`)
Props: `{ size?: "sm" | "lg" }`. The one live element and the only primary action. A `mailto:` `<a>`, filled cobalt with paper text, hard corners, `border border-cobalt`. `sm` (cover): `px-4 py-3`, kicker `0.68rem`, address `0.82rem`. `lg` (Contatto): `px-6 py-5`, kicker `text-sm`, address `text-lg sm:text-2xl`. Structure: a sans uppercase "SCRIVIMI" kicker (tracking 0.12em) above a mono address with a trailing `Arrow`. Hover inverts the whole block to paper background / cobalt text (`transition-colors duration-200`) and nudges the arrow `group-hover:translate-x-1`.

### Arrow (`Arrow`)
Props: `{ className?: string ("size-[1em]") }`. Authored SVG arrow, `stroke-width: 1.8`, round caps/joins, `currentColor` — the same stroke system as the Instagram icon. Used inside the email block, inline email links, and project links.

### Project List (`ProjectList`)
Props: `{ progetti: Progetto[] }`. Renders only when `progetti` is non-empty (otherwise the Lavori section shows its curated empty state: a `broken` section rule, a status `SpecList`, and three `reserved` plate frames). An `<ol>` with `gap-px bg-hairline` so a 1px line separates rows; each `<li>` is `bg-paper`, `sm:grid-cols-5`, holding a `PlateFrame` (`col-span-2`) and a text column (`col-span-3`) with a mono index, a title, a body paragraph, a mono `anno · ruolo · stack` line, and — if `p.url` — a cobalt underlined "Vedi il progetto" link with an `Arrow`.

### Navigation
The Index Rail is the only navigation. There is no separate header or footer nav. The colophon `footer` (ink top border, `manual-shell`, `py-8`) holds a mono cobalt `mailto:` link with an `Arrow`, then a mono uppercase revision line (`© 2026 Matteo Palermo` / `Manuale — rev. 2026 · v1` / `Caravaggio (BG), Italia`).

## Do's and Don'ts

### Do:
- **Do** keep the whole surface on paper (#F5F2EA) and ink (#16150F) with muted/graphite for lesser text; introduce no hue other than cobalt (The No-Hue-Beyond-Cobalt Rule).
- **Do** spend cobalt only on the wordmark, a whole section's 2px top rule, and the live email action plus its direct link echoes (The Cobalt-Restraint Rule).
- **Do** render the 12-column grid on every screen and align every block to it with `col-span` / `col-start` inside `.manual-shell` (The Visible-Grid Rule).
- **Do** set data — numbers, dates, dimensions, indices, the revision line — in Geist Mono, and everything readable in Familjen Grotesk (The Two-Voice Rule).
- **Do** open a section with a 2px solid cobalt rule when it is whole, and a 1px dashed hairline-strong rule when its content is a curated empty state (`broken`).
- **Do** frame images with `PlateFrame` and its corner ticks; use `reserved` (dashed border, "riservato") for slots awaiting real content.
- **Do** make hover and active states structural inversions (fill/text swap, outline→solid), with `transition-colors` only.

### Don't:
- **Don't** add a `box-shadow`, gradient, or `border-radius` anywhere — every surface is a hard-cornered flat rectangle, depth is lines (The Flat Rule).
- **Don't** introduce cards, or any raised/lifted surface; separation is hairlines, ink rules, and grid alignment.
- **Don't** set anything other than the wordmark at display scale, or place a second cobalt wordmark on the page (The Wordmark-Once Rule).
- **Don't** use tracked uppercase micro-labels as decorative eyebrows over headlines; they are for document classification, spec keys, and captions only.
- **Don't** animate anything except the one-time wordmark compose and CSS colour transitions on hover; respect `prefers-reduced-motion` (it drops the wordmark animation and smooth scroll).
- **Don't** use `mono` for prose, or the sans for spec values — the family split is semantic.
- **Don't** revive `src/components/ui/*` (shadcn/base-nova) or the `.dark` variant as design authority; the manual is light-only and those tokens are unused scaffolding.
