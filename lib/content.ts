/**
 * Single source of truth for every word on the homepage.
 *
 * All copy is derived from Dr. Maya Reynolds' profile: her bio, her stated
 * modalities (CBT, EMDR, mindfulness, body-oriented work), her client
 * population (high-achieving adults with anxiety, panic, trauma, burnout),
 * her service formats (Santa Monica office + California telehealth) and her
 * description of the office itself.
 */

export const practice = {
  name: "Dr. Maya Reynolds",
  credential: "PsyD",
  role: "Licensed Clinical Psychologist",
  logoLine1: "Maya Reynolds",
  logoLine2: "PSYD · CLINICAL PSYCHOLOGY",
  city: "Santa Monica",
  region: "CA",
  regionName: "California",
  street: "123th Street 45 W",
  postalCode: "90401",
  addressLines: ["123th Street 45 W", "Santa Monica, CA 90401"],
  phone: "310.555.0142",
  phoneHref: "tel:+13105550142",
  email: "hello@mayareynoldspsyd.com",
  serving:
    "Serving Santa Monica, Venice, Brentwood, Pacific Palisades & the Westside",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Specialties", href: "#specialties" },
  { label: "Approach", href: "#approach" },
  { label: "Our Office", href: "#office" },
] as const;

export const hero = {
  eyebrow: "In-person therapy in Santa Monica & online across California",
  headingBefore: "Anxiety and burnout therapy in Santa Monica, so you can finally ",
  headingScript: "exhale",
  headingAfter: ".",
  sub: "Evidence-based therapy for adults living with anxiety, panic, trauma, and burnout — in person at my Santa Monica office, or by secure telehealth anywhere in California.",
  cta: { label: "Book a consultation", href: "#contact" },
} as const;

export const intro = {
  heading: "On the outside you're functional. Inside, you're braced for the next thing.",
  lead: "I'm Dr. Maya Reynolds, a licensed clinical psychologist in Santa Monica, California.",
  leadBody:
    "Most of the people I work with are thoughtful, capable and self-aware. They hold a great deal together. And they are tired in a way that sleep doesn't fix.",
  body: "You might recognize it as constant worry, tension that lives in your body, nights you can't switch off, or a quiet sense that you're always bracing for something to go wrong. Others are carrying earlier experiences that still shape their relationships, their confidence, or their sense of safety. Whatever brought you here is real, and it responds to the right kind of support.",
} as const;

export const whoIHelp = {
  headingBefore: "Who I ",
  headingScript: "help",
  cards: [
    {
      title: "Anxious Overthinkers",
      body: "You're capable and self-aware, but your mind rarely stops. We work on the worry loops, the tension you carry physically, and the sleep — so your nervous system isn't running at full volume all day.",
      image: "/images/who-anxiety.jpg",
      alt: "A woman pausing with a warm drink beside a window, taking a quiet moment to herself",
    },
    {
      title: "Adults Healing From Trauma",
      body: "Whether it was a single event or years of it, the past can keep shaping your relationships, your confidence and your sense of safety. We move at your pace, with stabilization first and depth as you're ready.",
      image: "/images/who-trauma.jpg",
      alt: "A woman wrapped in a soft sweater resting by a window in warm afternoon light",
    },
    {
      title: "Professionals Facing Burnout",
      body: "Entrepreneurs, creatives and high performers who have pushed through stress for years and feel disconnected from themselves. Therapy becomes a place to slow down and rebuild something sustainable.",
      image: "/images/who-burnout.jpg",
      alt: "Someone sitting by a sunlit window, stepping away from work for a moment",
    },
  ],
} as const;

export const band = {
  quote:
    "You don't have to keep pushing through on your own. Nothing you bring into this room will be too heavy for us to hold together.",
} as const;

export const expertise = {
  heading: "My areas of expertise",
  columns: [
    [
      "Anxiety",
      "Panic attacks",
      "Trauma & PTSD",
      "Complex trauma",
      "Professional burnout",
      "Perfectionism",
    ],
    [
      "Chronic stress",
      "Overthinking & rumination",
      "Sleep difficulties",
      "Nervous system regulation",
      "Life transitions",
      "…and more.",
    ],
  ],
} as const;

export const approach = {
  eyebrow: "How I work",
  heading: "Practical tools, and the depth to go with them.",
  leadCaps:
    "The people I work with are usually the ones everyone else leans on. Slowing down can feel unfamiliar at first.",
  leadBody:
    "Sessions are structured enough to feel supportive, while still leaving room for reflection and depth. My approach is warm, collaborative and grounded — you are an active participant in the work, not a passive recipient of it.",
  body: "I integrate cognitive behavioral therapy (CBT), EMDR, mindfulness-based practices and body-oriented techniques, so we can work with both the emotional and the physiological sides of what you're experiencing. Trauma work is paced carefully, with an emphasis on safety and stabilization, and on helping you feel more regulated in daily life — not just during a session. The goal isn't only symptom relief. It's insight, resilience, and a steadier relationship with yourself over time.",
  cta: { label: "More about my approach", href: "#about" },
  image: "/images/approach-room.jpg",
  alt: "A calm therapy room with a soft armchair, warm walls and light from a tall window",
} as const;

export const philosophy = {
  headingBefore: "Understanding what your mind is doing — and what your body is still ",
  headingScript: "holding",
  headingAfter: ".",
  image: "/images/quote-interior.jpg",
  alt: "A warm, uncluttered interior with wooden floors, plants and natural daylight",
} as const;

export const services = {
  heading: "My specialties include…",
  items: [
    {
      title: "Anxiety & Panic",
      body: "Constant worry, a racing mind, tension across your shoulders and chest, nights you can't switch off. Using CBT and mindfulness-based practice, we unpick the patterns driving the anxiety and build tools that hold up on an ordinary Tuesday afternoon.",
      href: "#contact",
    },
    {
      title: "Trauma Therapy & EMDR",
      body: "For single-incident trauma and for the longer, more complex patterns that stem from childhood, relationships or chronic stress. EMDR helps change how painful memories are stored, and we work at a pace that keeps you steady throughout.",
      href: "#contact",
    },
    {
      title: "Burnout & Perfectionism",
      body: "For entrepreneurs, creatives and professionals who have run on internal pressure for years and feel disconnected from themselves. We look at the standards driving the exhaustion and build a more sustainable way of living and working.",
      href: "#contact",
    },
  ],
  aside: {
    title: "Not sure where to start?",
    body: "Most people begin with a short consultation call. We'll talk through what's going on and whether I'm the right fit — no pressure either way.",
    cta: { label: "Book a consultation", href: "#contact" },
  },
} as const;

export const office = {
  eyebrow: "Our office",
  headingBefore: "A quiet room in Santa Monica where you can finally ",
  headingScript: "land",
  headingAfter: ".",
  body: [
    "My office is a private, uncluttered space with a great deal of natural light — tall windows, warm wood, soft textures and room to breathe. There is nothing clinical about it, and nothing rushed. Clients often tell me the space itself settles them before we've said a word.",
    "You'll find it at 123th Street 45 W in Santa Monica, a short drive from the water. If coming in isn't practical that week, we can meet by secure video anywhere in California — the work is the same.",
  ],
  details: [
    {
      title: "Natural light, and quiet",
      body: "A calm, grounding room designed to feel comfortable rather than clinical.",
    },
    {
      title: "In person or telehealth",
      body: "Sessions in Santa Monica, or secure video for clients anywhere in California.",
    },
    {
      title: "Private and unhurried",
      body: "A confidential space with time to settle in before we begin.",
    },
  ],
  images: [
    {
      src: "/images/office-room.jpg",
      alt: "Dr. Maya Reynolds' Santa Monica therapy office with a grey sofa, olive tree, bookshelves and tall windows",
    },
    {
      src: "/images/office-seating.jpg",
      alt: "The seating area of the Santa Monica office, with exposed brick, sheer curtains and warm afternoon light",
    },
  ],
} as const;

export const faqs = {
  eyebrow: "Common questions",
  heading: "Before you reach out",
  items: [
    {
      q: "Where is your office located?",
      a: "My practice is at 123th Street 45 W, Santa Monica, CA 90401. It's a private, quiet room with plenty of natural light, and it's straightforward to reach from across the Westside.",
    },
    {
      q: "Do you offer online therapy?",
      a: "Yes. I offer secure telehealth sessions to clients located anywhere in California, alongside in-person sessions in Santa Monica. Many clients move between the two depending on the week.",
    },
    {
      q: "What kinds of therapy do you use?",
      a: "I integrate cognitive behavioral therapy (CBT), EMDR, mindfulness-based practices and body-oriented techniques, matched to what you're working on rather than applied one-size-fits-all.",
    },
    {
      q: "Do you work with trauma?",
      a: "Yes — both single-incident trauma and complex, long-standing patterns that stem from childhood, relationships or chronic stress. The work is paced carefully, with safety and stabilization first.",
    },
    {
      q: "Who do you usually work with?",
      a: "Adults across California, often high-achieving professionals, entrepreneurs and creatives navigating anxiety, panic, trauma, burnout and perfectionism.",
    },
    {
      q: "How do I get started?",
      a: "Reach out for a short consultation call. We'll talk through what's going on, and you can get a feel for how I work before committing to anything.",
    },
  ],
} as const;

export const cta = {
  eyebrow: "Begin when you're ready",
  headingBefore: "Let's find out if we're the right fit for ",
  headingScript: "you",
  headingAfter: ".",
  body: "If you're looking for a therapist who combines practical tools with depth-oriented work — and who understands the realities of living and working in a fast-paced environment — I may be a good fit. Reach out and we'll start with a short, no-pressure conversation.",
  cta: { label: "Book a consultation", href: "#contact" },
} as const;

export const footer = {
  blurb:
    "Getting started should feel simple. You're welcome to come into the Santa Monica office or meet by secure video from anywhere in California — whatever works best for you.",
  navigate: [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Specialties", href: "#specialties" },
    { label: "Our Office", href: "#office" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ],
  specialties: [
    { label: "Anxiety & Panic", href: "#specialties" },
    { label: "Trauma Therapy & EMDR", href: "#specialties" },
    { label: "Burnout & Perfectionism", href: "#specialties" },
    { label: "Telehealth in California", href: "#office" },
  ],
  legal: ["Terms", "Privacy Policy", "Disclaimer"],
} as const;
