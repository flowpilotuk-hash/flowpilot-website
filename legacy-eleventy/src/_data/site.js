/**
 * Global site data
 * ----------------
 * The single source of truth for brand details, navigation and all
 * structured content (packages, principles, FAQs, process steps).
 * Edit copy and pricing here; every page reads from this file.
 *
 * NOTE ON PRICING: the figures below are sensible placeholders so the
 * pricing tables render properly. Confirm the real numbers before launch.
 */

module.exports = {
  name: "FlowPilot",
  brand: "FlowPilot UK",
  legalName: "FlowPilot UK",
  tagline: "Professional websites for small businesses.",
  description:
    "FlowPilot UK builds straightforward websites and digital tools that help small businesses look professional, earn trust and grow with confidence.",
  url: "https://www.flowpilotuk.com",

  contact: {
    email: "hello@flowpilotuk.com",
    phone: "+44 20 3488 0000",
    phoneDisplay: "020 3488 0000",
    location: "United Kingdom",
    hoursShort: "Mon–Fri, 9am–5pm",
    hours: [
      { day: "Monday – Friday", time: "9:00am – 5:00pm" },
      { day: "Saturday", time: "By email" },
      { day: "Sunday", time: "Closed" },
    ],
  },

  // Primary navigation. `order` controls appearance in header/footer.
  nav: [
    { label: "Home", url: "/" },
    { label: "Website Packages", url: "/website-packages/" },
    { label: "How We Work", url: "/how-we-work/" },
    { label: "About", url: "/about/" },
    { label: "Contact", url: "/contact/" },
  ],

  // ------------------------------------------------------------------ //
  // Packages
  // ------------------------------------------------------------------ //
  packages: [
    {
      id: "essential",
      name: "Essential Online Presence",
      summary: "Simple. Professional. Affordable.",
      description:
        "A clean, professional website that gets your business online and looking the part — without any fuss.",
      priceFrom: 595,
      priceNote: "one-off build",
      bestFor: "New businesses and anyone who needs a solid first website.",
      recommended: false,
      features: [
        "Up to 3 pages, professionally designed",
        "Mobile, tablet and desktop ready",
        "Contact form and click-to-call",
        "Google-friendly setup (SEO basics)",
        "Your business details, hours and location",
        "Connected to your own domain",
      ],
    },
    {
      id: "professional",
      name: "Professional Business Website",
      summary: "Everything most businesses need to look their best.",
      description:
        "A polished, multi-page website designed to win trust and turn visitors into enquiries — our most popular choice.",
      priceFrom: 1295,
      priceNote: "one-off build",
      bestFor: "Established businesses ready to look genuinely professional.",
      recommended: true,
      badge: "Recommended",
      features: [
        "Up to 7 pages, tailored to your business",
        "Everything in Essential Online Presence",
        "Custom design around your brand and colours",
        "Photo galleries and service pages",
        "Reviews and testimonials section",
        "Google Maps and business profile setup",
        "Enquiry forms routed straight to your inbox",
      ],
    },
    {
      id: "growth",
      name: "Business Growth Website",
      summary: "Advanced tools that do real work for you.",
      description:
        "A website that goes beyond looking good — taking bookings, payments and enquiries while you get on with the job.",
      priceFrom: 2495,
      priceNote: "one-off build",
      bestFor: "Businesses that want their website to handle bookings and sales.",
      recommended: false,
      features: [
        "Everything in Professional Business Website",
        "Online bookings and appointments",
        "Secure payments and deposits",
        "Live chat and enquiry tools",
        "Customer accounts where useful",
        "Simple content updates you can make yourself",
        "Priority support during launch",
      ],
    },
  ],

  // Feature comparison matrix (packages page). Values: true / false / string.
  comparison: [
    { feature: "Pages included", essential: "Up to 3", professional: "Up to 7", growth: "Unlimited" },
    { feature: "Mobile, tablet & desktop ready", essential: true, professional: true, growth: true },
    { feature: "Connected to your own domain", essential: true, professional: true, growth: true },
    { feature: "Contact forms & click-to-call", essential: true, professional: true, growth: true },
    { feature: "SEO basics (Google-friendly)", essential: true, professional: true, growth: true },
    { feature: "Custom design around your brand", essential: false, professional: true, growth: true },
    { feature: "Photo galleries & service pages", essential: false, professional: true, growth: true },
    { feature: "Reviews & testimonials section", essential: false, professional: true, growth: true },
    { feature: "Google Maps & business profile", essential: false, professional: true, growth: true },
    { feature: "Online bookings & appointments", essential: false, professional: false, growth: true },
    { feature: "Secure payments & deposits", essential: false, professional: false, growth: true },
    { feature: "Live chat & enquiry tools", essential: false, professional: false, growth: true },
    { feature: "Update content yourself", essential: false, professional: false, growth: true },
  ],

  // Optional add-ons shown on the packages page.
  extras: [
    {
      name: "Extra pages",
      description: "Add further pages as your business grows.",
      priceFrom: 95,
      priceNote: "per page",
    },
    {
      name: "Copywriting",
      description: "We write clear, professional wording for you.",
      priceFrom: 145,
      priceNote: "per page",
    },
    {
      name: "Logo & brand basics",
      description: "A simple, clean logo and colour palette.",
      priceFrom: 295,
      priceNote: "one-off",
    },
    {
      name: "Professional photography",
      description: "Arranged with a trusted local photographer.",
      priceFrom: null,
      priceNote: "on request",
    },
    {
      name: "Email setup",
      description: "Professional you@yourbusiness.co.uk addresses.",
      priceFrom: 75,
      priceNote: "one-off setup",
    },
    {
      name: "Online store",
      description: "Sell products directly from your website.",
      priceFrom: 495,
      priceNote: "add-on",
    },
  ],

  // Monthly care / support plan.
  supportPlan: {
    name: "Monthly Business Support Plan",
    price: 39,
    priceNote: "per month",
    intro:
      "Once your website is live, we keep it running smoothly so you never have to think about it.",
    features: [
      "Hosting, updates and security handled for you",
      "Unlimited small changes and content edits",
      "Regular backups and uptime monitoring",
      "A real person to email when you need us",
      "Priority turnaround on requests",
      "No long contracts — cancel any time",
    ],
  },

  // ------------------------------------------------------------------ //
  // Three-step process (Home)
  // ------------------------------------------------------------------ //
  process: [
    {
      step: "01",
      title: "Tell us about your business",
      description:
        "A few simple questions by email — what you do, who you help and what you'd like your website to achieve.",
    },
    {
      step: "02",
      title: "We'll build your website",
      description:
        "We design and build everything for you, keep you updated in plain English, and check in only when it's useful.",
    },
    {
      step: "03",
      title: "We'll take it from here",
      description:
        "We launch your website and look after it long-term, so it stays fast, secure and up to date.",
    },
  ],

  // ------------------------------------------------------------------ //
  // Principles (Home + About)
  // ------------------------------------------------------------------ //
  principles: [
    {
      title: "Respect your time",
      description:
        "No lengthy meetings and no chasing. Most of our work happens by email, around your schedule.",
    },
    {
      title: "Keep things simple",
      description:
        "Clear advice, plain English and a straightforward process from first email to launch day.",
    },
    {
      title: "Recommend, don't sell",
      description:
        "We suggest what genuinely helps your business — and tell you honestly when you don't need something.",
    },
    {
      title: "Build long-term relationships",
      description:
        "We're here after launch too, looking after your website for the years ahead, not just the first week.",
    },
  ],

  // ------------------------------------------------------------------ //
  // How We Work — customer journey timeline
  // ------------------------------------------------------------------ //
  journey: [
    {
      step: "01",
      title: "Business discovery",
      description:
        "You tell us about your business by email — what you do, who you help and what you'd like your website to do. No meeting required.",
    },
    {
      step: "02",
      title: "Your quote",
      description:
        "We send a clear, fixed quote with no surprises. You'll know exactly what you're getting and what it costs before anything begins.",
    },
    {
      step: "03",
      title: "Payment",
      description:
        "Once you're happy, a simple deposit gets things moving. Straightforward terms, professional invoicing, no pressure.",
    },
    {
      step: "04",
      title: "Intake form",
      description:
        "A short online form gathers everything we need — your details, content and any photos. Fill it in whenever suits you.",
    },
    {
      step: "05",
      title: "We build your website",
      description:
        "We design and build everything for you. You'll see a preview link, and we'll refine it together until it's right.",
    },
    {
      step: "06",
      title: "Launch",
      description:
        "We connect your domain and take your website live — checked, fast and ready for customers.",
    },
    {
      step: "07",
      title: "Ongoing support",
      description:
        "We stay with you. Updates, changes and peace of mind, handled by email whenever you need us.",
    },
  ],

  // ------------------------------------------------------------------ //
  // FAQs
  // ------------------------------------------------------------------ //
  faqs: [
    {
      q: "How long does a website take?",
      a: "Most websites are ready within two to three weeks. It depends on the package and how quickly you can send us your details — but we'll always give you a clear timeline up front.",
    },
    {
      q: "Can everything be done by email?",
      a: "Yes. From your first enquiry to launch and beyond, everything can be handled by email around your schedule. If you'd prefer a quick call at any point, that's fine too — but it's never required.",
    },
    {
      q: "Do I own my website?",
      a: "Yes. Your website, your domain and your content belong to you. There's no lock-in, and you're free to take everything with you at any time.",
    },
    {
      q: "Can you update my website later?",
      a: "Absolutely. Our Monthly Business Support Plan covers changes and updates whenever you need them, or you can ask us for one-off updates as they come up.",
    },
    {
      q: "Do I need professional photos?",
      a: "Not to get started. We can work with photos you already have, use tasteful stock imagery, or arrange professional photography if you'd like. We'll recommend what genuinely helps — nothing more.",
    },
    {
      q: "What if I don't know what I need?",
      a: "That's completely normal, and it's exactly what we're here for. Tell us about your business and we'll recommend the right option in plain English — no jargon, no pressure.",
    },
  ],
};
