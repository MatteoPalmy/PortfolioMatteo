# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## ⚠️ Next.js 16 — do not rely on training data

This project uses **Next.js 16.2.10**, which has breaking changes vs. older Next.js versions (App Router conventions, APIs, and file structure may differ from what you remember). Before writing or changing Next.js-specific code, check the bundled docs at `node_modules/next/dist/docs/` (start with `01-app/`) and heed any deprecation notices you encounter.

## Workflow per nuove funzionalità

Ogni volta che viene richiesto di sviluppare una nuova funzionalità o implementazione, prima di scrivere codice bisogna:

1. Verificare la data odierna (es. tramite comando di sistema) per usarla correttamente nel nome del file.
2. Creare un documento di progetto nella cartella `/docs`, con nome nel formato `YYYY-MM-DD-nome-funzionalita.md`, che descriva cosa verrà implementato e come.
3. Attendere la conferma esplicita dell'utente prima di procedere con lo sviluppo. Non iniziare a scrivere codice finché la conferma non viene data.

## Commands

```bash
npm run dev      # start dev server (Turbopack) — http://localhost:3000
npm run build    # production build
npm run start    # run the production build
npm run lint     # eslint (flat config, eslint-config-next)
npx tsc --noEmit # type-check only, no test runner is configured
```

There is no test suite in this project yet. There is no `--single-test` pattern to document until one is added.

To add shadcn/ui components:
```bash
npx shadcn@latest add <component>
```

## Architecture

Standard Next.js App Router app, TypeScript, `src/` layout, import alias `@/*` → `src/*`.

- **`src/app/layout.tsx`** — root layout. Wraps every page with `SiteHeader` and `SiteFooter` (in `src/components/`) around `{children}`. Loads Geist Sans/Mono via `next/font/google` and sets global `<html>`/`<body>` classes (`antialiased`, flex column, `min-h-full`). Site-wide `<title>`/`<meta>` also live here via the `metadata` export.
- **`src/app/page.tsx`** — the entire home page is one file, structured as stacked `<section>`s with anchor ids (`#hero` (implicit), `#about`, `#projects`, `#contact`) separated by shadcn `<Separator />`. `SiteHeader` nav links point at these anchors, so new sections must keep matching `id`s if the nav is extended.
- **`src/components/`** — hand-written site components (`site-header.tsx`, `site-footer.tsx`) live at this top level; generated shadcn primitives live under `src/components/ui/`. Keep that split when adding components.
- **`src/lib/utils.ts`** — shadcn's `cn()` helper (clsx + tailwind-merge). Use it for conditional className composition instead of manual string concatenation.

### shadcn/ui setup (non-default)

`components.json` uses `"style": "base-nova"`, which is a **Base UI** style, not the classic Radix-based shadcn style. This changes API shapes for generated components:

- No `asChild` prop. Use Base UI's polymorphic `render` prop instead: `<Button render={<Link href="/x" />}>Label</Button>`.
- Primitives are imported from `@base-ui/react/*` (e.g. `@base-ui/react/button`), not `@radix-ui/*`.

When adding/using shadcn components, check the generated source in `src/components/ui/` for its actual prop API rather than assuming Radix/asChild conventions from memory or docs examples.

### Styling

Tailwind CSS v4, config-free (no `tailwind.config.js`) — all theme tokens are defined in `src/app/globals.css` via `@theme inline` and CSS custom properties, imported through `@import "tailwindcss"`, `@import "tw-animate-css"`, and `@import "shadcn/tailwind.css"`. Dark mode is a custom variant keyed off a `.dark` class ancestor (`@custom-variant dark (&:is(.dark *))`), not `prefers-color-scheme`.

### Content

Copy in `page.tsx`/`site-header.tsx`/`site-footer.tsx` (name, bio, skills, project cards, social links, email) is placeholder content and expected to be replaced with real portfolio data.
