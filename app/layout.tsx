import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/* Beaufort Pro Light — the reference site's heading face, in the 300
   weight it sets every heading in. */
const beaufort = localFont({
  src: "../public/font/fonts/fonnts.com-Beaufort-Pro-Light.otf",
  weight: "300",
  style: "normal",
  variable: "--font-beaufort",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

/* PrintedMoments — the reference's handwritten accent face ("thrive",
   "help", …). */
const printedMoments = localFont({
  src: "../public/font/fonts/printedmoments-webfont.woff",
  weight: "400",
  style: "normal",
  variable: "--font-printed-moments",
  display: "swap",
  adjustFontFallback: false,
});

/* Muli — the reference's body and UI face, as a variable font (200–900). */
const muli = localFont({
  src: "../public/font/fonts/latin.woff2",
  weight: "200 900",
  style: "normal",
  variable: "--font-muli",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Part 1 — Homepage replication",
  description:
    "Assignment stage 1: a layout, spacing and structure replication of the Conejo Valley Family Counseling homepage, rebuilt with Next.js and Tailwind CSS.",
  // This page reproduces another practice's homepage as a front-end exercise.
  // It must never compete with them in search results.
  robots: { index: false, follow: false, nocache: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    /* Font variables sit on <html> so Tailwind's @theme block — which declares
       --font-display/body/script on :root — can resolve them. */
    <html
      lang="en"
      className={`${beaufort.variable} ${muli.variable} ${printedMoments.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
