# GMT Assignment

The Grow My Therapy front-end internship assignment, built with Next.js and
Tailwind CSS.

## Part 1 — Homepage replication

A UI replication of the
[Conejo Valley Family Counseling homepage](https://www.conejovalleycounseling.com/home).

Layout, spacing, structure, section order, type scale and palette are
reproduced as closely as possible on desktop and on phones. Copy and
photography are the reference site's own — they are replaced in **Part 2**.

- **Live site:** _add your Vercel URL here_
- **Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript

---

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build   # production build
npm run lint    # eslint
```

---

## How the layout was rebuilt

Every section was measured off the live reference at a 1440px viewport and
rebuilt with CSS Grid. Each section carries its own column track list rather
than one generic container, because the reference uses a different asymmetric
split in almost every band — the hero, for example, runs
`34.17fr / 8.68fr / 44.65fr / 4.51fr / 7.99fr`, which reproduces the 492px
image, the 643px text column and the narrow image slice bleeding off the
right edge.

Section heights were then checked against the live site and tuned until they
matched:

| # | Section | Reference | This build |
|---|---|---|---|
| 1 | Hero | 804px | 804px |
| 2 | Intro | 867px | 867px |
| 3 | Who we help | 1020px | 1020px |
| 4 | Quote band | 594px | 594px |
| 5 | Areas of expertise | 720px | 720px |
| 6 | How we work | 922px | 922px |
| 7 | Image + statement | 723px | 723px |
| 8 | Specialties | 960px | 960px |
| 9 | Schedule an appointment | 835px | 835px |
| 10 | Footer + utility bar | 513px | 513px |
| | **Whole page** | **7958px** | **7959px** |

The same check at a 390×844 phone viewport puts every section within 2px of
the reference (11911px against 11912px for the whole page).

## Theme

The reference palette, declared once in an `@theme` block in
[`app/globals.css`](app/globals.css) and consumed through Tailwind utilities
(`bg-cream`, `text-ink`):

| Token | Hex | Used for |
|---|---|---|
| `--color-cream` | `#F6F4EE` | Page background |
| `--color-white` | `#FFFFFF` | Alternating sections |
| `--color-sand` | `#E3D9CA` | "How we work" band |
| `--color-ink` | `#2B2B2B` | Headings and body copy |
| `--color-teal` | `#86B3B3` | Script accent, utility bar |
| `--color-rule` | `#515151` | Button underlines |

## Type scale

Squarespace scales its type fluidly, so these were read at a true **1440px**
viewport — measuring in a narrower window returns the mobile sizes.

| Role | Size / line-height | Face | Tracking |
|---|---|---|---|
| h1 | 59.928 / 75.174 | display | −0.01em |
| h2 | 47.832 / 61.876 | display | −0.01em |
| h3 | 39.192 / 51.796 | display | −0.01em |
| h4 | 27.096 / 36.872 | display | −0.01em |
| body | 16.728 / 30.110 | body | normal |
| label | 15 / 27 | body | 0.12em, uppercase |
| nav, dropdowns, expertise list | 13.272 | body | 0.1em, uppercase |
| buttons | 12.408 | body | 0.12em, uppercase |

Headings and body interpolate with `clamp()` between the reference's 753px
and 1440px values, so the clone scales the way the original does.

On phones held upright the reference switches to a formula driven by the
viewport **height** — `(size − 1) × 1.2% of min(100vh, 900px) + 15px` — and
the clone uses the same formula, so at 390×844 the h1 is 41.33px, h4 22.09px
and body 16.01px, exactly as on the original.

## Fonts

| Reference | Used here | Notes |
|---|---|---|
| Beaufort Pro 300 | **Beaufort Pro Light** | The same face and weight, loaded from `public/font` with `next/font/local`. Every heading breaks across the same lines as the original. |
| Muli | **Mulish** 300/400 | The open-source cut of the same face — an exact match, via `next/font/google`. |
| PrintedMoments | **Gardena Holmes Script** | PrintedMoments sits at `1em` and is unusually wide for its em; Gardena is set at `1.44em`, which brings each accent word to within a few percent of the original's width ("thrive" 168px against 163px). |

## Details reproduced

Small things that are easy to miss on a first pass:

- The header **CONTACT** control uses `border-radius: 100%` — a true ellipse,
  not a stadium/pill.
- Three of the five nav links are **folders that open a dropdown on hover**
  (Our Team, Specialties, Methods), each a 322px right-aligned cream panel
  with 37px rows. Keyboard focus opens them too, and an invisible bridge
  keeps the panel alive as the pointer travels down to it.
- The hero's narrow image slice and the intro photograph both **bleed off the
  right edge** of the viewport; the slice is cropped at `87.3% 56%`.
- The specialty grid fills **column-first** — Trauma / Dissociation on the
  left, EMDR / Special Needs Parenting on the right.
- The handwritten accent falls on exactly six words: *thrive*, *help*,
  *expertise*, *&*, *specialties*, *you*.
- The italic sentence in the dark band is plain italic, not the script face.
- The dark band's photo drifts slightly as the page scrolls (the reference's
  parallax effect), so the quote appears to glide over it. Visitors who
  prefer reduced motion get a still photo.
- On hover, a button's underline retracts to its left end over one second —
  the text never dims. **BOOK NOW** is an oval, like the header's CONTACT,
  and fills in on hover.

## Responsiveness

Below `lg` the page follows the reference's phone layout rather than just
stacking the desktop one: the hero copy comes before its photos, the small
side photos stay as offset images, the intro and "How we work" photos move
between the text blocks, and the footer reorders to Navigate → Contact → Our
Team. Spacing and image sizes are the reference's own fixed values, with 6vw
side margins.

The mobile menu is a CSS-only `<details>` disclosure. The only client
JavaScript is the quote band's parallax.

## Project structure

```
app/
  globals.css             palette, type scale, base and component layers
  layout.tsx              fonts, metadata
  page.tsx                the replication
  ParallaxBackground.tsx  the quote band's scroll effect
public/images/            the reference site's assets
public/font/              Beaufort Pro Light, Gardena Holmes Script
```

## Attribution

The logo and photography in `public/images/` belong to
[Conejo Valley Family Counseling](https://www.conejovalleycounseling.com).
They appear here only to demonstrate the UI replication step the assignment
brief asks for. No claim is made to them, and the site is served
`noindex, nofollow` so it can never compete with the original in search.

Mulish is served through `next/font/google` under the
[SIL Open Font License](https://scripts.sil.org/OFL). Beaufort Pro is a
commercial typeface by Shinn Type Foundry, and the Gardena Holmes Script
demo is free for personal use only; both are included for this
non-commercial assignment.
