# Conejo Valley Family Counseling — Homepage Clone

A clone of the [Conejo Valley Family Counseling](https://www.conejovalleycounseling.com/home) homepage, built as the Grow My Therapy front-end internship assignment.

> **Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript

---

## 📸 Preview

![Desktop view](public/images/e%20(1).png)

![Mobile view](public/images/e%20(2).png)

---

## ✅ What's Been Done

### Part 1 — Homepage Clone (UI Accuracy)

The entire homepage has been recreated to match the original reference site as closely as possible:

- **Layout & Structure** — Every section replicated in the same order, with matching grid systems and visual hierarchy
- **Responsive Design** — Fully responsive across desktop, tablet, and mobile breakpoints
- **Typography** — Matching fonts, sizes, weights, and letter-spacing from the original
- **Color System** — CSS custom properties (`--color-ink`, `--color-cream`, etc.) for easy theming and maintainability
- **Spacing** — Consistent padding, margins, and section spacing measured from the reference
- **Interactive Elements** — Hover effects on buttons and navigation, animated mobile hamburger menu with slide-up navigation panel
- **Mobile Menu** — Full-screen overlay with staggered entrance animation, hamburger-to-X transition, folder sub-navigation with slide panels, and body scroll lock
- **Light Effects** — CSS gradient-based sun wash and sun burst effects (no images), with reduced-motion support

---

## 🏗️ Project Structure

```
app/
  globals.css              → Palette, type scale, light effects, component styles
  layout.tsx               → Font loading, metadata, HTML structure
  page.tsx                 → The homepage (all sections)
  MobileMenu.tsx           → Full-screen mobile navigation overlay
  ParallaxBackground.tsx   → Quote band scroll parallax effect
lib/
  content.ts               → All page copy in one file
public/
  images/                  → All site photography
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

### Build for Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## 🛠️ Tech Stack

| Technology     | Version  | Purpose                    |
| -------------- | -------- | -------------------------- |
| Next.js        | 16.3.5   | React framework (App Router) |
| React          | 19.2.8   | UI library                 |
| Tailwind CSS   | v4       | Utility-first styling      |
| TypeScript     | 5.x      | Type safety                |

---

## 📐 Key Design Decisions

- **CSS Custom Properties** for colors — makes future theming (Part 2) a single-file change
- **No external UI libraries** — everything is hand-built to match the reference exactly
- **Content separated from layout** — all copy lives in `lib/content.ts` so text can be swapped without touching components
- **Performance** — light effects use pure CSS gradients, no image downloads; `will-change` and GPU-accelerated transforms for smooth animations
- **Accessibility** — keyboard navigation, `aria-label`s on interactive elements, `prefers-reduced-motion` support, proper heading hierarchy

---

## 📄 License

This project was created for the Grow My Therapy internship assignment. Not intended for production use.
