import Image from "next/image";
import type { ReactNode } from "react";
import ParallaxBackground from "./ParallaxBackground";

/**
 * PART 1 — UI replication of https://www.conejovalleycounseling.com/home
 *
 * Layout, spacing, section order, type scale and palette are reproduced from
 * the reference at a 1440px viewport, then checked section by section against
 * the live site until every band matched its height.
 *
 * Copy and photography belong to the reference site and are used only for this
 * replication exercise. They are replaced in Part 2.
 *
 * Static page — no added sections, no added functionality. The mobile menu is
 * a CSS-only <details> disclosure, so this stays a server component; the only
 * client JavaScript is the quote band's scroll parallax, which the reference
 * has too.
 */

type NavItem = { label: string; items?: string[] };

/* Mirrors the reference header: two plain links and three folders that open
   on hover. Sub-items are the reference's own. */
const NAV: NavItem[] = [
  { label: "About" },
  {
    label: "Our Team",
    items: [
      "Jennifer Anderson, LMFT",
      "Candace Bletscher, AMFT",
      "Heather Williams-Baumgart, AMFT",
      "Samantha Johnson, AMFT",
      "Autumn Bodily, AMFT",
      "Andrea Watkins, APCC",
      "Rosa Gomez, AMFT",
      "Chad Flores, AMFT",
    ],
  },
  {
    label: "Specialties",
    items: [
      "Dissociation",
      "Trauma",
      "Special Needs Parenting",
      "Couples",
      "Children & Teens",
      "Anxiety & Depression",
      "Adoption",
    ],
  },
  {
    label: "Methods",
    items: ["EMDR", "Brainspotting", "Somatic Therapy", "Parts Work Therapy"],
  },
  { label: "FAQs" },
];

/* The reference's copy has a few doubled and leading spaces, and Squarespace
   keeps them visible (white-space: pre-wrap) — most noticeably before each
   handwritten word. A no-break space plus a normal space reproduces the
   doubled gap while still letting the line wrap after it. */
const DOUBLE_SPACE = "\u00a0 ";
const LEADING_SPACE = "\u00a0";

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

function Script({ children }: { children: ReactNode }) {
  return <span className="script-accent">{children}</span>;
}

function Btn({ children }: { children: ReactNode }) {
  return (
    <a href="#" className="btn-underline">
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
          <a href="#top" aria-label="Conejo Valley Family Counseling — home">
            <Image
              src="/images/logo.png"
              alt="Conejo Valley Family Counseling"
              width={257}
              height={75}
              priority
              className="h-[70px] w-auto lg:h-[75px]"
            />
          </a>

          <nav className="hidden items-center gap-[2.5vw] lg:flex" aria-label="Main">
            {NAV.map((item) =>
              item.items ? (
                <div key={item.label} className="nav-folder relative">
                  <a href="#" className="label-sm" aria-haspopup="true">
                    {item.label}
                  </a>
                  <div className="nav-panel absolute right-0 top-full z-10 flex w-[322px] flex-col bg-cream text-right leading-none">
                    {item.items.map((sub) => (
                      <a
                        key={sub}
                        href="#"
                        className="label-sm block whitespace-nowrap px-[13.272px] py-[9.954px] transition-opacity duration-200 hover:opacity-60"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a key={item.label} href="#" className="label-sm">
                  {item.label}
                </a>
              ),
            )}
            <a href="#" className="btn-oval">
              Contact
            </a>
          </nav>

          {/* Mobile disclosure — no JavaScript */}
          <details className="menu relative lg:hidden">
            <summary
              /* 7px gaps put the three 1px rules exactly 8px apart. A pitch
                 that is a multiple of 4 lands on whole device pixels at 125,
                 150, 175 and 200% display scaling, so all three rules render
                 with identical weight instead of one dark and one pale. */
              className="flex h-[37px] w-[50px] flex-col items-center justify-center gap-[7px]"
              aria-label="Menu"
            >
              <span className="burger-open block h-px w-[35px] bg-ink" />
              <span className="burger-open block h-px w-[35px] bg-ink" />
              <span className="burger-open block h-px w-[35px] bg-ink" />
              <span className="burger-close block text-2xl font-light leading-none">
                ×
              </span>
            </summary>
            <nav
              className="absolute right-0 top-12 w-[15rem] bg-cream p-6 shadow-lg"
              aria-label="Mobile"
            >
              {[...NAV.map((n) => n.label), "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="label-sm block border-b border-sand py-3 last:border-0"
                >
                  {item}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </header>

      <main id="top">
        {/* ── 1. Hero ──────────────────────────────────────────── */}
        <section className="overflow-hidden bg-cream">
          {/* Phones: copy first, then the large photo with the small one
              peeking in at the right edge, 105px lower. */}
          <div className="flex flex-col pb-[35px] pt-[172px] lg:grid lg:grid-cols-[34.17fr_8.68fr_44.65fr_4.51fr_7.99fr] lg:pb-[calc(62*var(--px))] lg:pt-[calc(154*var(--px))]">
            <div className="relative order-2 mt-[58px] h-[304px] w-[71.3vw] lg:order-none lg:col-start-1 lg:mt-0 lg:h-[calc(588*var(--px))] lg:w-auto">
              <Image
                src="/images/hero-left.jpg"
                alt="family therapy"
                fill
                priority
                sizes="(max-width: 1023px) 72vw, 35vw"
                className="object-cover object-center"
              />
            </div>

            <div className="order-1 px-[6vw] sm:px-10 lg:order-none lg:col-start-3 lg:px-0 lg:pt-[calc(7*var(--px))]">
              <div className="max-w-[420px] lg:max-w-[29.1667vw]">
                <Eyebrow>
                  Online &amp; in-person counseling in Newbury Park &amp; across CA
                </Eyebrow>
              </div>
              <h1 className="mt-[31px] lg:mt-[calc(141*var(--px))]">
                Rebuild your foundation on solid ground and finally begin to
                {DOUBLE_SPACE}
                <Script>thrive</Script>.
              </h1>
              <p className="mt-[30px] lg:mt-[calc(28*var(--px))]">
                Specialized therapy for adults, couples, teens, and children to
                reflect, heal, and grow.
              </p>
              <div className="mt-[23px] lg:mt-[calc(36*var(--px))]">
                <Btn>Book an appointment</Btn>
              </div>
            </div>

            <div className="relative order-3 -mt-[199px] ml-[85.46vw] h-[199px] w-[14.54vw] lg:order-none lg:col-start-5 lg:ml-0 lg:mt-[calc(194*var(--px))] lg:h-[calc(393*var(--px))] lg:w-auto">
              <Image
                src="/images/hero-right.jpg"
                alt="child therapy"
                fill
                sizes="(max-width: 1023px) 15vw, 10vw"
                className="object-cover object-[87.3%_56%]"
              />
            </div>
          </div>
        </section>

        {/* ── 2. Intro ─────────────────────────────────────────── */}
        <section className="bg-cream">
          {/* Phones: the photo sits between the two paragraphs, so the text
              wrapper dissolves (display: contents) into the flex column. */}
          <div className="flex flex-col px-[6vw] py-[59px] sm:px-10 lg:grid lg:grid-cols-[8.75fr_24.93fr_1.46fr_24.93fr_9.59fr_30.34fr] lg:min-h-[70vh] lg:content-center lg:px-0 lg:pb-[calc(7vw_+_39.2*var(--px))] lg:pt-[7vw]">
            <h2 className="order-1 lg:order-none lg:col-start-2 lg:col-end-5 lg:row-start-1 lg:mt-[calc(126*var(--px))] lg:max-w-[48.125vw]">
              You’re holding onto hope that life can be better than it is right
              now.
            </h2>

            <div className="relative order-3 mt-[46px] h-[234px] w-full self-start sm:h-[32rem] lg:order-none lg:col-start-6 lg:row-start-1 lg:row-end-3 lg:mt-0 lg:h-[calc(626*var(--px))]">
              <Image
                src="/images/intro.jpg"
                alt="Sandy beach with gentle ocean waves and a cloudy sky"
                fill
                sizes="(max-width: 1023px) 100vw, 30vw"
                className="object-cover object-center"
              />
            </div>

            <div className="contents lg:col-start-2 lg:col-end-5 lg:row-start-2 lg:mt-[calc(51*var(--px))] lg:grid lg:grid-cols-2 lg:gap-x-[1.4583vw]">
              <div className="order-2 lg:order-none">
                <p className="eyebrow mt-[11px] lg:mt-0">
                  At Conejo Valley Family Counseling we want to make that hope a
                  reality.
                </p>
                <p className="mt-[15px] lg:mt-[calc(24*var(--px))]">
                  Whether you&rsquo;re an adult seeking personal growth,
                  {DOUBLE_SPACE}looking to work through your trauma, a couple
                  working on your
                  relationship, or a parent looking for support for your child,
                  we provide a compassionate and safe space to help you navigate
                  all of life’s ups and downs.
                </p>
              </div>
              <p className="order-4 mt-[46px] lg:order-none lg:mt-0">
                First and foremost, we believe what you’re going through is real,
                valid, and worthy of support. Our team offers clients in the
                Newbury Park area and across CA an environment to discover a new
                life and a deeper sense of self in the midst of their struggles.
                As we tap into the power of connection and understanding, you can
                find your footing again and take a transformative path forward.
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. Who we help ───────────────────────────────────── */}
        <section className="bg-white">
          <div className="px-[6vw] pb-[56px] pt-[63px] sm:px-10 lg:flex lg:min-h-[66vh] lg:flex-col lg:justify-center lg:px-0 lg:pb-[calc(6.6vw_+_18.96*var(--px))] lg:pt-[6.6vw]">
            <h2 className="lg:pl-[5%]">
              {LEADING_SPACE}Who we{DOUBLE_SPACE}<Script>help</Script>
            </h2>

            {/* Phones: each card takes at least 549px, then a 46px gap —
                so short cards get more air below them, as on the reference. */}
            <div className="mt-[53px] grid gap-[46px] sm:grid-cols-2 sm:gap-12 lg:mt-[calc(50*var(--px))] lg:mr-[6.11%] lg:ml-[16.32%] lg:grid-cols-3 lg:gap-[1.3889vw]">
              {[
                {
                  img: "/images/who-1.jpg",
                  alt: "Two people sitting on a log at the beach, facing away",
                  title: "Adults",
                  body: "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
                },
                {
                  img: "/images/who-2.jpg",
                  alt: "A couple embracing on the beach",
                  title: "Couples",
                  body: "Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
                },
                {
                  img: "/images/who-3.jpg",
                  alt: "A boy carrying a girl on a beach with waves in the background",
                  title: "Children & Teens",
                  body: "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
                },
              ].map((card) => (
                <div key={card.title} className="min-h-[549px] sm:min-h-0">
                  <div className="relative h-[304px] w-full sm:h-[22rem] lg:h-[calc(416*var(--px))]">
                    <Image
                      src={card.img}
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
          <ParallaxBackground src="/images/band.jpg" />
          <div className="absolute inset-0 bg-ink/35" aria-hidden />
          <div className="relative w-full px-[6vw] py-10 sm:px-10 lg:px-0 lg:pb-[calc(6.6vw_+_11.96*var(--px))] lg:pt-[calc(6.6vw_+_205.96*var(--px))]">
            <h2 className="max-w-[59rem] text-cream lg:max-w-[59.74vw] lg:ml-[8.75%]">
              You deserve a place where your story is heard, valued, and
              understood.{" "}
              <em className="italic">
                Nothing will be too heavy for us to carry together.
              </em>
            </h2>
          </div>
        </section>

        {/* ── 5. Areas of expertise ────────────────────────────── */}
        <section className="bg-white">
          <div className="px-[6vw] pb-[99px] pt-[78px] sm:px-10 lg:grid lg:grid-cols-[8.75fr_26.18fr_29.17fr_0.69fr_29.17fr_6.04fr] lg:min-h-[80vh] lg:content-center lg:px-0 lg:pb-[calc(8vw_+_3.8*var(--px))] lg:pt-[calc(8vw_+_16.8*var(--px))]">
            <h3 className="lg:col-start-2 lg:max-w-[21.9444vw]">
              Our areas of <Script>expertise</Script>
            </h3>

            {[
              [
                "Dissociation",
                "Trauma",
                "Family conflict",
                "Special needs parenting",
                "Depression",
                "Marriage",
              ],
              [
                "Anxiety",
                "Relationships",
                "Children",
                "Teens",
                "Intimacy & connection",
                "…and more.",
              ],
            ].map((column, i) => (
              // Phones: one continuous list of 15px labels on 70px rows, with
              // no rule under the final item.
              <ul
                key={i}
                className={`lg:mt-0 ${i === 0 ? "mt-[34px] lg:col-start-3" : "lg:col-start-5"}`}
              >
                {column.map((item) => (
                  <li
                    key={item}
                    className={`label-sm border-b border-sand/50 lg:py-[calc(30*var(--px))] max-lg:pb-[20px] max-lg:pt-[22px] max-lg:text-[15px] max-lg:leading-[27px] max-lg:tracking-[0.12em] ${i === 1 ? "max-lg:last:border-b-0 max-lg:last:pb-0" : ""}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        {/* ── 6. How we work ───────────────────────────────────── */}
        <section className="bg-sand">
          {/* Phones: the photo moves up to sit right under the heading. */}
          <div className="flex flex-col px-[6vw] pb-[82px] pt-[86px] sm:px-10 lg:grid lg:grid-cols-[8.75fr_28.75fr_1.39fr_28.75fr_8.89fr_22.43fr_1.04fr] lg:px-0 lg:pb-[calc(91*var(--px))] lg:pt-[calc(117*var(--px))]">
            <div className="order-first lg:order-none lg:col-start-2 lg:col-end-5 lg:row-start-1">
              <Eyebrow>How we work</Eyebrow>
            </div>

            <h2 className="order-first mt-[30px] max-w-[57rem] lg:order-none lg:max-w-[63.35vw] lg:col-start-2 lg:col-end-5 lg:row-start-2 lg:mt-[calc(88*var(--px))]">
              We’re here to make a difference.
            </h2>

            <div className="order-last lg:order-none lg:col-start-2 lg:col-end-5 lg:row-start-3 lg:mt-[calc(50*var(--px))] lg:grid lg:grid-cols-[28.75fr_1.39fr_28.75fr]">
              <div className="lg:col-start-1">
                <p className="eyebrow mt-[46px] lg:mt-0">
                  The clients we work with are balancing so many things at once,
                  it’s often hard for them to put themselves first.
                </p>
                <p className="mt-[15px] lg:mt-[calc(24*var(--px))]">
                  {LEADING_SPACE}Here, your needs are always top priority. Our team takes the
                  time to deeply listen to our clients in order to truly
                  understand their story and their struggles. We recognize that
                  no two people are the same and that personalized therapy means
                  an intentional, tailored approach. (You won’t find anything
                  “one-size-fits-all” here.) If you’re ready to do the work,
                  we’re ready to help.
                </p>
              </div>
              <p className="mt-[11px] lg:col-start-3 lg:mt-0">
                Sometimes we may gently challenge you to look at things
                differently and other times we may explore your emotions, all
                while encouraging you to practice what you’ve learned in your
                daily life. We take what we do seriously because we know how
                important it is for you to heal from what’s hurting you, discover
                a fulfilling life, and build meaningful relationships. Our goal is
                to walk alongside you in this journey, offering support and
                guidance as you uncover your strengths and embrace what the
                future can hold for you.
              </p>
            </div>

            <div className="order-last mt-[23px] lg:order-none lg:col-start-2 lg:row-start-4 lg:mt-[calc(49*var(--px))]">
              <Btn>Learn more about us</Btn>
            </div>

            <div className="relative mt-[49px] h-[269px] w-full self-start sm:h-[34rem] lg:col-start-6 lg:row-start-1 lg:row-end-5 lg:mt-0 lg:h-[calc(714*var(--px))]">
              <Image
                src="/images/approach.jpg"
                alt="A woman and a child in white dresses dancing on a beach"
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
                src="/images/philosophy.jpg"
                alt="Family of four standing on a beach, holding hands"
                fill
                sizes="(max-width: 1023px) 100vw, 53vw"
                className="object-cover object-center"
              />
            </div>
            <h2 className="px-[6vw] pt-[11px] sm:px-10 lg:col-start-3 lg:mt-[calc(348*var(--px))] lg:px-0 lg:pt-0">
              Honoring where you’ve been <Script>&amp;</Script> helping shape
              where you’re headed.
            </h2>
          </div>
        </section>

        {/* ── 8. Specialties ───────────────────────────────────── */}
        <section className="bg-white">
          <div className="px-[6vw] pb-[47px] pt-[70px] sm:px-10 lg:grid lg:grid-cols-[8.75fr_25.42fr_4.44fr_55.35fr_6.04fr] lg:px-0 lg:pb-[calc(77*var(--px))] lg:pt-[calc(78*var(--px))]">
            <h3 className="lg:col-start-2 lg:max-w-[22.2222vw]">
              Our{DOUBLE_SPACE}<Script>specialties</Script> include…
            </h3>

            {/* Listed column by column: phones stack them in this order, and
                from sm the grid fills down each column, so the 2×2 layout
                stays Trauma | EMDR over Dissociation | Special Needs. */}
            <div className="mt-[66px] grid gap-x-[65px] gap-y-[58px] lg:gap-x-[4.5139vw] sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-2 lg:col-start-4 lg:mt-[calc(39*var(--px))] lg:gap-y-[calc(88*var(--px))]">
              {[
                {
                  title: "Trauma",
                  body: "We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.",
                },
                {
                  title: "Dissociation",
                  body: "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
                },
                {
                  title: "EMDR",
                  body: "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
                },
                {
                  title: "Special Needs Parenting",
                  body: "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
                },
              ].map((item) => (
                <div key={item.title} className="lg:flex lg:min-h-[calc(339*var(--px))] lg:flex-col">
                  <div className="lg:h-[calc(272*var(--px))]">
                    <h4>{item.title}</h4>
                    <p className="mt-[30px] lg:mt-[calc(16*var(--px))]">{item.body}</p>
                  </div>
                  <div className="mt-6 lg:mt-0">
                    <Btn>Learn more</Btn>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. Schedule an appointment ───────────────────────── */}
        <section className="overflow-hidden bg-cream">
          {/* Phones: small photo at the top-left, copy, then the large photo
              inset on the left only. */}
          <div className="flex flex-col py-[56px] lg:grid lg:grid-cols-[11.74fr_8.19fr_36.6fr_8.26fr_34.17fr_1.04fr] lg:min-h-[66vh] lg:content-center lg:pb-[calc(6.6vw_+_38.96*var(--px))] lg:pt-[6.6vw]">
            <div className="relative h-[199px] w-[48.6vw] lg:col-start-1 lg:mt-[calc(117*var(--px))] lg:h-[calc(489*var(--px))] lg:w-auto">
              <Image
                src="/images/cta-left.jpg"
                alt="A person picking up seashells on a sandy beach"
                fill
                sizes="(max-width: 1023px) 49vw, 12vw"
                className="object-cover object-center"
              />
            </div>

            <div className="px-[6vw] pt-[62px] sm:px-10 lg:col-start-3 lg:px-0 lg:pt-0">
              <Eyebrow>Schedule an appointment</Eyebrow>
              <h2 className="mt-[27px] lg:mt-[calc(50*var(--px))]">
                Find a therapist who is the right fit for{DOUBLE_SPACE}
                <Script>you</Script>.
              </h2>
              <p className="mt-[16px] lg:mt-[calc(44*var(--px))]">
                Coming to therapy is a courageous decision, and connecting with
                the right kind of therapist makes all the difference. We
                understand that your journey is personal, and we&rsquo;re here to
                support you with care and understanding every step of the way.
                Each member of our team brings dedicated expertise and a
                commitment to support you in your struggles. We want you to feel
                prioritized, understood, and empowered.
              </p>
              <p className="mt-[15px] lg:mt-[calc(24*var(--px))]">Click the button below to schedule an appointment.</p>
              <div className="mt-[16px] lg:mt-[calc(32*var(--px))]">
                {/* The reference's one oval button in the page body — same
                    shape as the header CONTACT, but its hover text is white. */}
                <a href="#" className="btn-oval hover:text-white">
                  Book now
                </a>
              </div>
            </div>

            <div className="relative ml-[17.36vw] mt-[51px] h-[269px] sm:h-[32rem] lg:col-start-5 lg:ml-0 lg:mt-0 lg:h-[calc(606*var(--px))]">
              <Image
                src="/images/cta-right.jpg"
                alt="A person in a striped dress pointing at shells on the sand"
                fill
                sizes="(max-width: 1023px) 83vw, 34vw"
                className="object-cover object-[62.86%_52.8%]"
              />
            </div>
          </div>
        </section>
      </main>

      {/* ── 10. Footer ─────────────────────────────────────────── */}
      <footer className="bg-white">
        {/* Phones: Navigate, Contact, then Our Team, stepped in from the
            logo; the link lists run at 0.9em with no gaps between links. */}
        <div className="flex flex-col px-[6vw] pb-[38px] pt-[73px] sm:px-10 lg:grid lg:grid-cols-[5fr_29.17fr_8.19fr_14.17fr_17.92fr_17.92fr_7.63fr] lg:min-h-[45vh] lg:content-center lg:px-0 lg:pb-[calc(4.5vw_-_2.8*var(--px))] lg:pt-[4.5vw]">
          <div className="lg:col-start-2">
            <Image
              src="/images/logo.png"
              alt="Conejo Valley Family Counseling"
              width={366}
              height={107}
              className="h-auto w-[322px] lg:w-[25.4167vw]"
            />
            <p className="mt-[11px] max-w-[28rem] px-[5.28vw] lg:max-w-[31.1111vw] lg:mt-[calc(32*var(--px))] lg:px-0">
              We want to make getting started simple. You’re welcome to come into
              our office in Newbury Park or schedule virtual appointments from
              anywhere in CA—whatever works best for you.
            </p>
          </div>

          <div className="mt-[40px] px-[11.36vw] lg:col-start-4 lg:mt-0 lg:px-0">
            <h2 className="eyebrow">Navigate</h2>
            <ul className="mt-[15px] text-[0.9em] lg:mt-[calc(16*var(--px))] lg:space-y-[calc(8*var(--px))] lg:text-[1em]">
              {["Home", "About", "FAQs", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-last mt-[13px] px-[11.36vw] lg:order-none lg:col-start-5 lg:mt-0 lg:px-0">
            <h2 className="eyebrow">Our Team</h2>
            <ul className="mt-[15px] text-[0.9em] lg:mt-[calc(16*var(--px))] lg:space-y-[calc(8*var(--px))] lg:text-[1em]">
              {[
                "Jennifer Anderson",
                "Heather Williams-Baumgart",
                "Autumn Bodily",
                "Candace Bletscher",
                "Samantha Johnson",
                "Andrea Watkins",
                "Rosa Gomez",
                "Chad Flores",
              ].map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-[22px] px-[11.36vw] lg:col-start-6 lg:mt-0 lg:px-0">
            <h2 className="eyebrow">Contact</h2>
            <address className="mt-[15px] text-[0.9em] not-italic lg:mt-[calc(16*var(--px))] lg:text-[1em]">
              <span className="block">925 Broadbeck Dr</span>
              <span className="block">Suites 200 and 225</span>
              <span className="block">Newbury Park, CA 91320</span>
              <a href="#" className="block lg:mt-[calc(12*var(--px))]">
                info@conejovalleycounseling.com
              </a>
              <a href="#" className="block">
                805.242.3120
              </a>
            </address>
            <p className="mt-[15px] max-w-[16rem] text-[0.9em] lg:max-w-[17.7778vw] italic lg:mt-[calc(20*var(--px))] lg:text-[1em]">
              Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, &amp;
              Simi Valley
            </p>
          </div>
        </div>

        <div className="bg-teal">
          <div className="px-[7.77vw] pb-[11px] pt-[4px] sm:px-10 lg:flex lg:min-h-[5vh] lg:flex-col lg:justify-center lg:px-[5%] lg:py-[calc(0.5vw_+_4.8*var(--px))]">
            <p className="text-[0.9em] text-white lg:text-[0.78rem]">
              {["Terms", "Privacy Policy", "Disclaimer"].map((item) => (
                <span key={item}>
                  <a href="#">{item}</a>
                  {" | "}
                </span>
              ))}
              <span>Website by Walker Strategy Co.</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
