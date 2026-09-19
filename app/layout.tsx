import type { Metadata } from "next";
import { Mulish } from "next/font/google";
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

/* Gardena Holmes Script — handwritten accent words ("thrive", "help", …),
   standing in for the reference's PrintedMoments. */
const gardena = localFont({
  src: "../public/font/fonts/Gardena Holmes Script DEMO.otf",
  weight: "400",
  style: "normal",
  variable: "--font-gardena",
  display: "swap",
  adjustFontFallback: false,
});

/* Mulish is the open-source cut of Muli, the reference site's UI face. */
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-mulish",
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
      className={`${beaufort.variable} ${mulish.variable} ${gardena.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
