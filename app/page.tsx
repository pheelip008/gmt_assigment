import Image from "next/image";
import type { ReactNode } from "react";
import MobileMenu from "./MobileMenu";
import ParallaxBackground from "./ParallaxBackground";
import {
  approach,
  band,
  cta,
  expertise,
  footer,
  hero,
  intro,
  office,
  philosophy,
  practice,
  services,
  whoIHelp,
} from "@/lib/content";

/**
 * PARTS 2 & 3 — the homepage redesigned for Dr. Maya Reynolds, PsyD.
 *
 * The layout is the one measured for Part 1 (the Conejo Valley Family
 * Counseling homepage), kept section for section and pixel for pixel. Theme,
 * typography, copy and photography are new: every word comes from Dr.
 * Reynolds' profile via lib/content.ts, and the palette is read off late
 * sunlight falling through trees.
 *
 * Part 3 adds one section the original does not have — Our Office — lit by a
 * sun burst that turns slowly in its top-right corner.
 */

type NavItem = { label: string; items?: string[] };

/* A solo practice, so the one folder holds her three specialties. */
const NAV: NavItem[] = [
  { label: "About" },
  { label: "Specialties", items: services.items.map((s) => s.title) },
  { label: "Approach" },
  { label: "Our Office" },
];

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      aria-label={`${practice.name}, ${practice.credential} — home`}
      className={`relative z-50 block leading-none ${className}`}
    >
      <span className="block font-display text-[1.55rem] font-light tracking-[-0.015em] text-ink lg:text-[1.75rem]">
        {practice.logoLine1}
      </span>
      <span className="mt-[0.4rem] block font-body text-[0.58rem] uppercase tracking-[0.24em] text-moss lg:text-[0.62rem]">
        {practice.logoLine2}
      </span>
    </a>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

function Script({ children }: { children: ReactNode }) {
  return <span className="script-accent">{children}</span>;
}

function Btn({ children, href = "#contact" }: { children: ReactNode; href?: string }) {
  return (
    <a href={href} className="btn-underline">
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      {/* ── Header ─────────────────────────────────────────────── */}
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="flex items-center justify-between p-[6vw] lg:px-[5vw] lg:py-[1.4vw]">
          <Wordmark />

          <nav className="hidden items-center gap-[2.5vw] lg:flex" aria-label="Main">
            {NAV.map((item) =>
              item.items ? (
                <div key={item.label} className="nav-folder relative">
                  <a href="#specialties" className="label-sm" aria-haspopup="true">
                    {item.label}
                  </a>
                  <div className="nav-panel absolute right-0 top-full z-10 flex w-[322px] flex-col bg-cream text-right leading-none">
                    {item.items.map((sub) => (
                      <a
                        key={sub}
                        href="#specialties"
                        className="label-sm block whitespace-nowrap px-[13.272px] py-[9.954px] transition-opacity duration-200 hover:opacity-60"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={`#${item.label.toLowerCase().replace(/^our /, "").replace(/\s+/g, "-")}`}
                  className="label-sm"
                >
                  {item.label}
                </a>
              ),
            )}
            <a href="#contact" className="btn-oval">
              Contact
            </a>
          </nav>

          <MobileMenu nav={NAV} />
        </div>
      </header>

      <main id="top">
        {/* ── 1. Hero ──────────────────────────────────────────── */}
        <section className="sun-wash overflow-hidden bg-cream">
          {/* Phones: copy first, then the large photo with the small one
              peeking in at the right edge, 105px lower. */}
          <div className="relative z-[1] flex flex-col pb-[35px] pt-[172px] lg:grid lg:grid-cols-[34.17fr_8.68fr_44.65fr_4.51fr_7.99fr] lg:pb-[calc(62*var(--px))] lg:pt-[calc(154*var(--px))]">
            <div className="relative order-2 mt-[58px] h-[304px] w-[71.3vw] lg:order-none lg:col-start-1 lg:mt-0 lg:h-[calc(588*var(--px))] lg:w-auto">
              <Image
                src="/images/hero-light.jpg"
                alt="Late afternoon sun falling through tall trees onto a quiet woodland path"
                fill
                priority
                sizes="(max-width: 1023px) 72vw, 35vw"
                className="object-cover object-center"
              />
            </div>

            <div className="order-1 px-[6vw] sm:px-10 lg:order-none lg:col-start-3 lg:px-0 lg:pt-[calc(7*var(--px))]">
              <div className="max-w-[420px] lg:max-w-[29.1667vw]">
                <Eyebrow>{hero.eyebrow}</Eyebrow>
              </div>
              <h1 className="mt-[31px] lg:mt-[calc(141*var(--px))]">
                {hero.headingBefore}
                <Script>{hero.headingScript}</Script>
                {hero.headingAfter}
              </h1>
              <p className="mt-[30px] lg:mt-[calc(28*var(--px))]">{hero.sub}</p>
              <div className="mt-[23px] lg:mt-[calc(36*var(--px))]">
                <Btn href={hero.cta.href}>{hero.cta.label}</Btn>
              </div>
            </div>

            <div className="relative order-3 -mt-[199px] ml-[85.46vw] h-[199px] w-[14.54vw] lg:order-none lg:col-start-5 lg:ml-0 lg:mt-[calc(194*var(--px))] lg:h-[calc(393*var(--px))] lg:w-auto">
              <Image
                src="/images/hero-sliver.jpg"
                alt="Leaf shadows moving across a sunlit wall"
                fill
                sizes="(max-width: 1023px) 15vw, 10vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* ── 2. About ─────────────────────────────────────────── */}
        <section id="about" className="bg-cream">
          {/* Phones: the portrait sits between the two paragraphs, so the text
              wrapper dissolves (display: contents) into the flex column. */}
          <div className="flex flex-col px-[6vw] py-[59px] sm:px-10 lg:grid lg:grid-cols-[8.75fr_24.93fr_1.46fr_24.93fr_9.59fr_30.34fr] lg:min-h-[70vh] lg:content-center lg:px-0 lg:pb-[calc(7vw_+_39.2*var(--px))] lg:pt-[7vw]">
            <h2 className="order-1 lg:order-none lg:col-start-2 lg:col-end-5 lg:row-start-1 lg:mt-[calc(126*var(--px))] lg:max-w-[48.125vw]">
              {intro.heading}
            </h2>

            <div className="relative order-3 mt-[46px] h-[470px] w-full self-start sm:h-[32rem] lg:order-none lg:col-start-6 lg:row-start-1 lg:row-end-3 lg:mt-0 lg:h-[calc(626*var(--px))]">
              <Image
                src="/images/maya-reynolds.png"
                alt={`${practice.name}, ${practice.credential}, ${practice.role} in ${practice.city}`}
                fill
                sizes="(max-width: 1023px) 100vw, 30vw"
                className="object-cover object-top"
              />
            </div>

            <div className="contents lg:col-start-2 lg:col-end-5 lg:row-start-2 lg:mt-[calc(51*var(--px))] lg:grid lg:grid-cols-2 lg:gap-x-[1.4583vw]">
              <div className="order-2 lg:order-none">
                <p className="eyebrow mt-[11px] lg:mt-0">{intro.lead}</p>
                <p className="mt-[15px] lg:mt-[calc(24*var(--px))]">{intro.leadBody}</p>
              </div>
              <p className="order-4 mt-[46px] lg:order-none lg:mt-0">{intro.body}</p>
            </div>
          </div>
        </section>

        {/* ── 3. Who I help ────────────────────────────────────── */}
        <section className="bg-white">
          <div className="px-[6vw] pb-[56px] pt-[63px] sm:px-10 lg:flex lg:min-h-[66vh] lg:flex-col lg:justify-center lg:px-0 lg:pb-[calc(6.6vw_+_18.96*var(--px))] lg:pt-[6.6vw]">
            <h2 className="lg:pl-[5%]">
              {whoIHelp.headingBefore}
              <Script>{whoIHelp.headingScript}</Script>
            </h2>

            {/* Phones: each card takes at least 549px, then a 46px gap —
                so short cards get more air below them, as on the reference. */}
            <div className="mt-[53px] grid gap-[46px] sm:grid-cols-2 sm:gap-12 lg:mt-[calc(50*var(--px))] lg:mr-[6.11%] lg:ml-[16.32%] lg:grid-cols-3 lg:gap-[1.3889vw]">
              {whoIHelp.cards.map((card) => (
                <div key={card.title} className="min-h-[549px] sm:min-h-0">
                  <div className="relative h-[304px] w-full sm:h-[22rem] lg:h-[calc(416*var(--px))]">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <h4 className="mt-[46px] lg:mt-[calc(50*var(--px))]">{card.title}</h4>
                  <p className="mt-[30px] lg:mt-[calc(16*var(--px))]">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Quote band ────────────────────────────────────── */}
        {/* Phones: 66vh tall with the quote centred, as on the reference. */}
        <section className="relative isolate flex min-h-[66vh] items-center overflow-hidden bg-ink">
          {/* The photo drifts as the band crosses the viewport, so the quote
              appears to glide up over it — the reference's parallax effect. */}
          <ParallaxBackground src="/images/band-rays.jpg" />
          <div className="absolute inset-0 bg-ink/45" aria-hidden />
          <div className="relative w-full px-[6vw] py-10 sm:px-10 lg:px-0 lg:pb-[calc(6.6vw_+_11.96*var(--px))] lg:pt-[calc(6.6vw_+_205.96*var(--px))]">
            <h2 className="max-w-[59rem] text-cream lg:ml-[8.75%] lg:max-w-[59.74vw]">
              {band.quote.split("Nothing you bring")[0]}
              <em className="italic">
                Nothing you bring{band.quote.split("Nothing you bring")[1]}
              </em>
            </h2>
          </div>
        </section>

        {/* ── 5. Areas of expertise ────────────────────────────── */}
        <section className="bg-white">
          <div className="px-[6vw] pb-[99px] pt-[78px] sm:px-10 lg:grid lg:grid-cols-[8.75fr_26.18fr_29.17fr_0.69fr_29.17fr_6.04fr] lg:min-h-[80vh] lg:content-center lg:px-0 lg:pb-[calc(8vw_+_3.8*var(--px))] lg:pt-[calc(8vw_+_16.8*var(--px))]">
            <h3 className="lg:col-start-2 lg:max-w-[21.9444vw]">
              My areas of <Script>expertise</Script>
            </h3>

            {expertise.columns.map((column, i) => (
              // Phones: one continuous list of 15px labels on 70px rows, with
              // no rule under the final item.
              <ul
                key={i}
                className={`lg:mt-0 ${i === 0 ? "mt-[34px] lg:col-start-3" : "lg:col-start-5"}`}
              >
                {column.map((item) => (
                  <li
                    key={item}
                    className={`label-sm border-b border-sage/60 lg:py-[calc(30*var(--px))] max-lg:pb-[20px] max-lg:pt-[22px] max-lg:text-[15px] max-lg:leading-[27px] max-lg:tracking-[0.12em] ${i === 1 ? "max-lg:last:border-b-0 max-lg:last:pb-0" : ""}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        {/* ── 6. How I work ────────────────────────────────────── */}
        <section id="approach" className="bg-mist">
          {/* Phones: the photo moves up to sit right under the heading. */}
          <div className="flex flex-col px-[6vw] pb-[82px] pt-[86px] sm:px-10 lg:grid lg:grid-cols-[8.75fr_28.75fr_1.39fr_28.75fr_8.89fr_22.43fr_1.04fr] lg:px-0 lg:pb-[calc(91*var(--px))] lg:pt-[calc(117*var(--px))]">
            <div className="order-first lg:order-none lg:col-start-2 lg:col-end-5 lg:row-start-1">
              <Eyebrow>{approach.eyebrow}</Eyebrow>
            </div>

            <h2 className="order-first mt-[30px] max-w-[57rem] lg:order-none lg:col-start-2 lg:col-end-5 lg:row-start-2 lg:mt-[calc(88*var(--px))] lg:max-w-[63.35vw]">
              {approach.heading}
            </h2>

            <div className="order-last lg:order-none lg:col-start-2 lg:col-end-5 lg:row-start-3 lg:mt-[calc(50*var(--px))] lg:grid lg:grid-cols-[28.75fr_1.39fr_28.75fr]">
              <div className="lg:col-start-1">
                <p className="eyebrow mt-[46px] lg:mt-0">{approach.leadCaps}</p>
                <p className="mt-[15px] lg:mt-[calc(24*var(--px))]">{approach.leadBody}</p>
              </div>
              <p className="mt-[11px] lg:col-start-3 lg:mt-0">{approach.body}</p>
            </div>

            <div className="order-last mt-[23px] lg:order-none lg:col-start-2 lg:row-start-4 lg:mt-[calc(49*var(--px))]">
              <Btn href={approach.cta.href}>{approach.cta.label}</Btn>
            </div>

            <div className="relative mt-[49px] h-[269px] w-full self-start sm:h-[34rem] lg:col-start-6 lg:row-start-1 lg:row-end-5 lg:mt-0 lg:h-[calc(714*var(--px))]">
              <Image
                src={approach.image}
                alt={approach.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 23vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* ── 7. Image + statement ─────────────────────────────── */}
        <section className="bg-white">
          {/* Phones: at least 66vh tall (and 56px clear above and below) with
              the photo, inset on the left only, and the statement centred. */}
          <div className="flex min-h-[66vh] flex-col justify-center py-[56px] lg:grid lg:grid-cols-[52.85fr_4.44fr_36.6fr_6.11fr] lg:content-center lg:py-[6.6vw]">
            <div className="relative ml-[6vw] h-[304px] sm:h-[28rem] lg:col-start-1 lg:ml-0 lg:h-[calc(533*var(--px))]">
              <Image
                src="/images/philosophy-path.jpg"
                alt="A path through sunlit woodland, light reaching the ground between the trees"
                fill
                sizes="(max-width: 1023px) 100vw, 53vw"
                className="object-cover object-center"
              />
            </div>
            <h2 className="px-[6vw] pt-[11px] sm:px-10 lg:col-start-3 lg:mt-[calc(348*var(--px))] lg:px-0 lg:pt-0">
              {philosophy.headingBefore}
              <Script>{philosophy.headingScript}</Script>
              {philosophy.headingAfter}
            </h2>
          </div>
        </section>

        {/* ── 8. Specialties ───────────────────────────────────── */}
        <section id="specialties" className="bg-white">
          <div className="px-[6vw] pb-[47px] pt-[70px] sm:px-10 lg:grid lg:grid-cols-[8.75fr_25.42fr_4.44fr_55.35fr_6.04fr] lg:px-0 lg:pb-[calc(77*var(--px))] lg:pt-[calc(78*var(--px))]">
            <h3 className="lg:col-start-2 lg:max-w-[22.2222vw]">
              My <Script>specialties</Script> include…
            </h3>

            {/* Her three specialties, with the consultation note as the fourth
                cell so the 2×2 grid the layout expects stays filled. */}
            <div className="mt-[66px] grid gap-x-[65px] gap-y-[58px] sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-2 lg:col-start-4 lg:mt-[calc(39*var(--px))] lg:gap-x-[4.5139vw] lg:gap-y-[calc(88*var(--px))]">
              {[
                ...services.items.map((item) => ({
                  title: item.title,
                  body: item.body,
                  href: item.href,
                  label: "Learn more",
                })),
                {
                  title: services.aside.title,
                  body: services.aside.body,
                  href: services.aside.cta.href,
                  label: services.aside.cta.label,
                },
              ].map((item) => (
                <div key={item.title} className="lg:flex lg:min-h-[calc(339*var(--px))] lg:flex-col">
                  <div className="lg:h-[calc(272*var(--px))]">
                    <h4>{item.title}</h4>
                    <p className="mt-[30px] lg:mt-[calc(16*var(--px))]">{item.body}</p>
                  </div>
                  <div className="mt-6 lg:mt-0">
                    <Btn href={item.href}>{item.label}</Btn>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. Our Office — PART 3, new to this design ───────────
            A sun burst turns slowly in the top-right corner, the way light
            reaches her room in the late afternoon. */}
        <section id="office" className="sun-burst overflow-hidden bg-mist">
          <div className="relative z-[1] flex flex-col px-[6vw] pb-[56px] pt-[70px] sm:px-10 lg:grid lg:grid-cols-[8.75fr_36.6fr_4.44fr_44.17fr_6.04fr] lg:min-h-[66vh] lg:content-center lg:px-0 lg:pb-[calc(6.6vw_+_20*var(--px))] lg:pt-[6.6vw]">
            <div className="lg:col-start-2">
              <Eyebrow>{office.eyebrow}</Eyebrow>
              <h2 className="mt-[27px] lg:mt-[calc(40*var(--px))]">
                {office.headingBefore}
                <Script>{office.headingScript}</Script>
                {office.headingAfter}
              </h2>
              {office.body.map((paragraph, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "mt-[16px] lg:mt-[calc(40*var(--px))]"
                      : "mt-[15px] lg:mt-[calc(24*var(--px))]"
                  }
                >
                  {paragraph}
                </p>
              ))}

              <ul className="mt-[30px] lg:mt-[calc(44*var(--px))]">
                {office.details.map((detail) => (
                  <li
                    key={detail.title}
                    className="border-t border-sage/60 py-[18px] lg:py-[calc(22*var(--px))]"
                  >
                    <h4 className="text-[1.15rem] lg:text-[calc(21*var(--px))]">
                      {detail.title}
                    </h4>
                    <p className="mt-[6px] lg:mt-[calc(8*var(--px))]">{detail.body}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-[23px] lg:mt-[calc(40*var(--px))]">
                <Btn>Book a consultation</Btn>
              </div>
            </div>

            {/* Her own photographs of the room: the wide view, then the
                seating area stepped in beneath it. */}
            <div className="mt-[46px] lg:col-start-4 lg:mt-0">
              <div className="relative h-[260px] w-full sm:h-[24rem] lg:h-[calc(430*var(--px))]">
                <Image
                  src={office.images[1].src}
                  alt={office.images[1].alt}
                  fill
                  sizes="(max-width: 1023px) 100vw, 44vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative ml-[18vw] mt-[18px] h-[200px] sm:h-[18rem] lg:ml-[7.9861vw] lg:mt-[calc(22*var(--px))] lg:h-[calc(330*var(--px))]">
                <Image
                  src={office.images[0].src}
                  alt={office.images[0].alt}
                  fill
                  sizes="(max-width: 1023px) 82vw, 36vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. Book a consultation ──────────────────────────── */}
        <section id="contact" className="overflow-hidden bg-cream">
          {/* Phones: small photo at the top-left, copy, then the large photo
              inset on the left only. */}
          <div className="flex flex-col py-[56px] lg:grid lg:min-h-[66vh] lg:grid-cols-[11.74fr_8.19fr_36.6fr_8.26fr_34.17fr_1.04fr] lg:content-center lg:pb-[calc(6.6vw_+_38.96*var(--px))] lg:pt-[6.6vw]">
            <div className="relative h-[199px] w-[48.6vw] lg:col-start-1 lg:mt-[calc(117*var(--px))] lg:h-[calc(489*var(--px))] lg:w-auto">
              <Image
                src="/images/cta-shadow.jpg"
                alt="Soft leaf shadows falling across a pale wall"
                fill
                sizes="(max-width: 1023px) 49vw, 12vw"
                className="object-cover object-center"
              />
            </div>

            <div className="px-[6vw] pt-[62px] sm:px-10 lg:col-start-3 lg:px-0 lg:pt-0">
              <Eyebrow>{cta.eyebrow}</Eyebrow>
              <h2 className="mt-[27px] lg:mt-[calc(50*var(--px))]">
                {cta.headingBefore}
                <Script>{cta.headingScript}</Script>
                {cta.headingAfter}
              </h2>
              <p className="mt-[16px] lg:mt-[calc(44*var(--px))]">{cta.body}</p>
              <p className="mt-[15px] lg:mt-[calc(24*var(--px))]">
                Call {practice.phone} or email {practice.email} — or use the
                button below.
              </p>
              <div className="mt-[16px] lg:mt-[calc(32*var(--px))]">
                <a href={cta.cta.href} className="btn-oval hover:text-cream">
                  {cta.cta.label}
                </a>
              </div>
            </div>

            <div className="relative ml-[17.36vw] mt-[51px] h-[269px] sm:h-[32rem] lg:col-start-5 lg:ml-0 lg:mt-0 lg:h-[calc(606*var(--px))]">
              <Image
                src="/images/cta-portrait.jpg"
                alt="A woman smiling by a window in warm afternoon light, holding a mug"
                fill
                sizes="(max-width: 1023px) 83vw, 34vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>
      </main>

      {/* ── 11. Footer ─────────────────────────────────────────── */}
      <footer className="bg-white">
        {/* Phones: Navigate, Contact, then Specialties, stepped in from the
            wordmark; the link lists run at 0.9em with no gaps between links. */}
        <div className="flex flex-col px-[6vw] pb-[38px] pt-[73px] sm:px-10 lg:grid lg:min-h-[45vh] lg:grid-cols-[5fr_29.17fr_8.19fr_14.17fr_17.92fr_17.92fr_7.63fr] lg:content-center lg:px-0 lg:pb-[calc(4.5vw_-_2.8*var(--px))] lg:pt-[4.5vw]">
          <div className="lg:col-start-2">
            <Wordmark className="scale-[1.15] origin-left" />
            <p className="mt-[11px] max-w-[28rem] px-[5.28vw] lg:mt-[calc(32*var(--px))] lg:max-w-[31.1111vw] lg:px-0">
              {footer.blurb}
            </p>
          </div>

          <div className="mt-[40px] px-[11.36vw] lg:col-start-4 lg:mt-0 lg:px-0">
            <h2 className="eyebrow">Navigate</h2>
            <ul className="mt-[15px] text-[0.9em] lg:mt-[calc(16*var(--px))] lg:space-y-[calc(8*var(--px))] lg:text-[1em]">
              {footer.navigate.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-last mt-[13px] px-[11.36vw] lg:order-none lg:col-start-5 lg:mt-0 lg:px-0">
            <h2 className="eyebrow">Specialties</h2>
            <ul className="mt-[15px] text-[0.9em] lg:mt-[calc(16*var(--px))] lg:space-y-[calc(8*var(--px))] lg:text-[1em]">
              {footer.specialties.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-[22px] px-[11.36vw] lg:col-start-6 lg:mt-0 lg:px-0">
            <h2 className="eyebrow">Contact</h2>
            <address className="mt-[15px] text-[0.9em] not-italic lg:mt-[calc(16*var(--px))] lg:text-[1em]">
              {practice.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <a href={`mailto:${practice.email}`} className="block lg:mt-[calc(12*var(--px))]">
                {practice.email}
              </a>
              <a href={practice.phoneHref} className="block">
                {practice.phone}
              </a>
            </address>
            <p className="mt-[15px] max-w-[16rem] text-[0.9em] italic lg:mt-[calc(20*var(--px))] lg:max-w-[17.7778vw] lg:text-[1em]">
              {practice.serving}
            </p>
          </div>
        </div>

        <div className="bg-moss">
          <div className="px-[7.77vw] pb-[11px] pt-[4px] sm:px-10 lg:flex lg:min-h-[5vh] lg:flex-col lg:justify-center lg:px-[5%] lg:py-[calc(0.5vw_+_4.8*var(--px))]">
            <p className="text-[0.9em] text-cream lg:text-[0.78rem]">
              {footer.legal.map((item) => (
                <span key={item}>
                  <a href="#">{item}</a>
                  {" | "}
                </span>
              ))}
              <span>
                © {new Date().getFullYear()} {practice.name}, {practice.credential}
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
