# GMT Assignment

The Grow My Therapy front-end internship assignment, built with Next.js and
Tailwind CSS.

- **Live site:** _add your Vercel URL here_
- **Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript

| Part | What it is | Where |
|---|---|---|
| 1 | UI replication of the reference homepage | `part-1` branch |
| 2 | Redesign for Dr. Maya Reynolds, PsyD | this branch |
| 3 | A new section the original doesn't have: **Our Office** | this branch |

---

## Part 2 — the redesign

The layout is the one measured for Part 1: the same sections in the same order,
the same grid and the same spacing, matching the
[reference homepage](https://www.conejovalleycounseling.com/home) to within a
couple of pixels at 1440px and on phones. Everything else is new.

### Theme — "Morning Light"

Read off late sun falling through a wood: evergreen in the shade, moss and sage
where the light lands, warm sun on the page itself.

| Token | Hex | Used for |
|---|---|---|
| `--color-ink` | `#21302A` | Headings, dark bands |
| `--color-forest` | `#3C5245` | Body copy |
| `--color-moss` | `#6C8271` | Utility bar, muted UI |
| `--color-sage` | `#A9BFAE` | Rules, quiet accents |
| `--color-mist` | `#DCE5DB` | Soft green sections |
| `--color-sun` | `#C1813C` | Links, buttons, accent words |
| `--color-sun-soft` | `#E6BD85` | Light shafts and glows |
| `--color-cream` | `#F8F4EA` | Page background |
| `--color-white` | `#FDFBF6` | Alternating sections |

The site's signature is the light itself. `.sun-wash` lays a warm glow into a
section's top corner, behind the content; `.sun-burst` is the full version —
rays fanning out from that corner, over the content, turning slowly. Both are
CSS gradients — no images, nothing to download — and both hold still for
anyone who prefers reduced motion.

### Typography

Fraunces for headings, with its italic carrying the accent words where the
reference used a handwritten face; Karla for everything else. Both are
open-licence. See [CREDITS.md](CREDITS.md).

### Copy

Every word comes from Dr. Reynolds' profile and lives in
[`lib/content.ts`](lib/content.ts) — one file, so the wording can be changed
without touching the page. Headings carry her specialty and city ("Anxiety and
burnout therapy in Santa Monica"), and the copy names Santa Monica, the
Westside and California telehealth throughout.

---

## Part 3 — Our Office

A section the original template doesn't have, built from what her profile says
about the room: a private, uncluttered space with tall windows, warm wood and
a great deal of natural light, a short drive from the water, with telehealth
for the weeks coming in isn't practical.

It uses her own two photographs of the room, and evening light fans out from
the top right corner, over the photographs and the words, turning slowly the
whole time — the effect the rest of the site only hints at, brought forward
here because the section is about the room itself.

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

## Project structure

```
app/
  globals.css             palette, type scale, light effects, components
  layout.tsx              fonts, metadata
  page.tsx                the homepage
  MobileMenu.tsx          full-screen menu for phones
  ParallaxBackground.tsx  the quote band's scroll effect
lib/content.ts            every word on the page
public/images/            photography (see CREDITS.md)
```

## Attribution

Dr. Maya Reynolds is a fictional therapist created for this assignment. The
site is served `noindex, nofollow` so it cannot be mistaken for a real
practice in search results. Photography and typography credits are in
[CREDITS.md](CREDITS.md).
