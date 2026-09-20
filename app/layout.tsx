import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";
import "./globals.css";
import { practice } from "@/lib/content";

/* Fraunces — a soft, warm serif for headings and for the italic accent
   words. Its light weights keep the headings airy rather than heavy. */
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

/* Karla — an open, humanist sans for body copy and UI labels. */
const karla = Karla({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-karla",
  display: "swap",
});

const title = `${practice.name}, ${practice.credential} — Anxiety & Trauma Therapy in ${practice.city}, ${practice.region}`;
const description = `${practice.role} in ${practice.city}, California. Evidence-based therapy for anxiety, panic, trauma and burnout — in person in ${practice.city} or by secure telehealth across ${practice.regionName}.`;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    `therapist ${practice.city}`,
    `anxiety therapy ${practice.city}`,
    "trauma therapy",
    "EMDR",
    "burnout therapy",
    `psychologist ${practice.city} ${practice.region}`,
    `online therapy ${practice.regionName}`,
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
  },
  // A fictional practice built for an assignment: it must not turn up in
  // search results as if it were a real one.
  robots: { index: false, follow: false, nocache: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    /* Font variables sit on <html> so Tailwind's @theme block — which declares
       --font-display/body on :root — can resolve them. */
    <html lang="en" className={`${fraunces.variable} ${karla.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
