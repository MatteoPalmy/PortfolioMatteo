# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary:** prospective freelance clients — people or small teams considering commissioning Matteo Palermo for web development work. They arrive from Matteo's social profiles (Instagram [@matteopalermoo](https://www.instagram.com/matteopalermoo/), YouTube, TikTok [@matteoopalermoo](https://www.tiktok.com/@matteoopalermoo)) or from a shared link, spend a short time on the site, and are deciding whether Matteo is the right person to build their project.

**Their job on the site:** quickly get a sense of who Matteo is and whether he is a fit, then open a direct line to start a project conversation. The single conversion action today is emailing `matteo.kay07@gmail.com`.

## Product Purpose

A personal portfolio and calling card for Matteo Palermo, a freelance web developer. It exists to turn a brief visit into a project inquiry: establish credibility and personality, then make contact effortless. Success is a qualified prospective client reaching out by email.

## Positioning

Direct-to-the-maker: the visitor is talking to the person who will actually build the work, with no agency or account layer in between. This is a solo practitioner's identity surface, not a studio site.

*Open decision:* a sharper differentiator (specialisation, the kind of work Matteo wants, a point of view on how he builds) has not been established. Future work should not invent one.

## Operating Context

- Entry is mostly lateral — from social bios and shared links — rather than search; visitors often already know Matteo's name or content.
- Sessions are short and skimmable; many visitors are on mobile.
- There is no lead form, CRM, scheduling tool, or CMS. The whole funnel is: land → read the cover → click the email link.
- The site is a single scrollable home page: a cover, then numbered sections **01 Profilo**, **02 Competenze**, **03 Contatto**, then a colophon. A top index rail is the only navigation.

## Capabilities and Constraints

- **Scope today:** one static marketing page. No backend, database, authentication, or server-side logic.
- **Contact mechanism:** a `mailto:` link only. No contact form, no form validation, no spam handling.
- **Social links:** Instagram, YouTube, and TikTok are all real external links (2026-09-10). No placeholders remain.
- **Work / projects section — removed for now (2026-09-10 decision).** There is no real project or case-study content yet, so the "Lavori" section has been taken off the page entirely rather than shown as an empty state. It is deferred, not abandoned: it returns when Matteo has real work to show. `src/lib/projects.ts` (the `progetti` array and `Progetto` type) and the `ProjectList` component are kept in the codebase as the re-entry point.
- **No photograph of Matteo for now (2026-09-10 decision).** The site carries no portrait or personal photo, and the framed portrait slot has been removed from the Profilo section — not left as a "to be added" placeholder. Revisit if and when Matteo wants a portrait on the site.
- **Terminology:** Matteo describes his role as "sviluppatore web" ("web developer") in the current copy.
- **Site language:** the public site is Italian-first (all shipped copy is Italian), while Matteo's own build notes (`CLAUDE.md`, `/docs`) are also Italian. *Open decision:* whether to add an English or bilingual version later is undecided.
- *Open decision — additional pages / sections:* the portfolio stays a one-pager for now. Growth (a restored Work section, an About or Writing section) depends on real content becoming available.

## Brand Commitments

- **Name:** Matteo Palermo. It is the central element of the site (user constraint) — set once as the oversized cobalt wordmark on the cover.
- **Contact email:** `matteo.kay07@gmail.com`.
- **Real handle:** Instagram [@matteopalermoo](https://www.instagram.com/matteopalermoo/).
- **Visual world:** the established design system is documented in `DESIGN.md` — **"Matteo Palermo — Il Manuale"**: a Swiss typographic identity manual on warm paper, near-black ink, one committed cobalt, an always-visible 12-column grid, totally flat (no shadows, gradients, rounded corners, or cards). Treat it as the incumbent authority. `src/components/ui/*` (shadcn / Base UI primitives) and the `.dark` variant are unused scaffolding, not design authority.
- **Memorable moment:** the "MATTEO PALERMO" wordmark composes itself letter by letter once on load, then never again.
- *Not yet established:* a formal voice. The shipped copy is precise, unpretentious, and plain-spoken Italian; treat that as an observation, not a locked voice spec.

## Evidence on Hand

None. As of 2026-09-10 there are no shipped projects, case studies, client names, testimonials, metrics, logos, or press to feature, and no portrait of Matteo. Future work must not fabricate any of these; the site stays cover-plus-contact until real content exists.

Assets present in the repo: `references/` holds screenshots of the visual reference sites used while designing, not portfolio content. `/docs` holds Italian build-log notes for past design tasks.

## Product Principles

1. **The email click is the product.** Every design and content decision is judged by whether it makes a qualified visitor more likely to reach out. Nothing should compete with or bury that action.
2. **Honesty over completeness.** An empty section is better than a fabricated project or borrowed testimonial — and a section with nothing real to say is better removed than faked. The site may look sparse until there is real work to show.
3. **The person, not a studio.** Tone and structure should feel like reaching one identifiable maker directly — personal, unpretentious, no corporate "we".
4. **Respect the established world.** `DESIGN.md`'s "Il Manuale" system is the reference; changes extend it deliberately rather than drifting toward a generic hero-and-cards portfolio.
5. **Built for a glance on a phone.** Short visits, lateral traffic, mobile-first: the value and the contact path must land in the first viewport.
