# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary:** prospective freelance clients — people or small teams considering commissioning Matteo Palermo for web development work. They arrive from Matteo's social profiles (Instagram [@matteopalermoo](https://www.instagram.com/matteopalermoo/), plus YouTube and TikTok links that are currently placeholders) or from a shared link, spend a short time on the site, and are deciding whether Matteo is the right person to build their project.

**Their job on the site:** quickly get a sense of who Matteo is and whether he is a fit, then open a direct line to start a project conversation. The single conversion action today is emailing `matteo.kay07@gmail.com`.

## Product Purpose

A personal portfolio and calling card for Matteo Palermo, a freelance web developer. It exists to turn a brief visit into a project inquiry: establish credibility and personality, then make contact effortless. Success is a qualified prospective client reaching out by email.

## Positioning

Direct-to-the-maker: the visitor is talking to the person who will actually build the work, with no agency or account layer in between. This is a solo practitioner's identity surface, not a studio site.

*Open decision:* a sharper differentiator (specialisation, the kind of work Matteo wants, a point of view on how he builds) has not been established. Future work should not invent one.

## Operating Context

- Entry is mostly lateral — from social bios and shared links — rather than search; visitors often already know Matteo's name or content.
- Sessions are short and skimmable; many visitors are on mobile.
- There is no lead form, CRM, scheduling tool, or CMS. The whole funnel is: land → read the hero → click the email link.
- The site is a single home page today (hero with the looping name marquee and the spotlit avatar badge, bracketed by a social/contact chip row at top and a "stay in touch" chip row at the bottom).

## Capabilities and Constraints

- **Scope today:** one static marketing page. No backend, database, authentication, or server-side logic.
- **Contact mechanism:** a `mailto:` link only. No contact form, no form validation, no spam handling.
- **Social links:** the Instagram link is real; YouTube and TikTok are placeholder `#` hrefs pending real URLs.
- **Content:** there is no project/case-study content, and a previously built masonry project grid was deliberately removed pending real work. Its CSS hook and structure remain documented in DESIGN.md for later restoration.
- **Terminology:** Matteo describes his role as "web developer" in the current copy.
- *Open decision — site language:* the interface copy is currently English, while Matteo's own project notes (`CLAUDE.md`, `/docs`) are in Italian. Whether the public site should be English, Italian, or bilingual is undecided.
- *Open decision — additional pages:* whether the portfolio stays a one-pager or grows an About / Work / Writing section is undecided and depends on content becoming available.

## Brand Commitments

- **Name:** Matteo Palermo. Displayed prominently — as the giant ghost-type background marquee and as the headline inside the avatar badge.
- **Contact email:** `matteo.kay07@gmail.com`.
- **Real handle:** Instagram [@matteopalermoo](https://www.instagram.com/matteopalermoo/).
- **Visual world:** an established design system is documented in `DESIGN.md` ("The Backstage Pass" — dark, near-monochrome, flat, pill-based, one looping name marquee, a single spotlit avatar as the only focal point). Treat it as the incumbent authority; `SiteHeader` / `SiteFooter` and the unused shadcn/Base UI primitives are legacy dead code, not design authority.
- *Not yet established:* a formal voice. The one line of site copy ("Thanks for looking. Stay in touch.") is casual, warm, and understated; treat that as an observation, not a locked voice spec.

## Evidence on Hand

None. As of 2026-09-06 there are no shipped projects, case studies, client names, testimonials, metrics, logos, or press to feature. Future work must not fabricate any of these; the site stays hero-plus-contact until real project content exists.

Assets present in the repo: `references/` holds screenshots of the visual reference sites used while designing (Dann Petty and another), not portfolio content. `/docs` holds Italian build-log notes for past design tasks.

## Product Principles

1. **The email click is the product.** Every design and content decision is judged by whether it makes a qualified visitor more likely to reach out. Nothing should compete with or bury that action.
2. **Honesty over completeness.** An empty section is better than a fabricated project or borrowed testimonial. The site may look sparse until there is real work to show.
3. **The person, not a studio.** Tone and structure should feel like reaching one identifiable maker directly — personal, unpretentious, no corporate "we".
4. **Respect the established world.** `DESIGN.md`'s "Backstage Pass" system is the reference; changes extend it deliberately rather than drifting back toward the abandoned editorial-grid look.
5. **Built for a glance on a phone.** Short visits, lateral traffic, mobile-first: the value and the contact path must land in the first viewport.
