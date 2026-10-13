export const PROSE_CASE = true;

export const site = {
  name: "pythie",
  tagline: "Ask the question. The web answers in numbers.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pythie.example",
  contactEmail: "hello@pythie.example",
};

export const nav = {
  fonctionnement: "How it works",
  usages: "Use cases",
  tarifs: "Pricing",
  faq: "FAQ",
  login: "Sign in",
  try: "Try it",
  menu: "Menu",
  waitlist: "Join the waitlist",
};

export const hero = {
  badge: "Private beta. Waitlist open.",
  title: "Ask the question.\nThe web answers\nin numbers.",
  highlightWord: "numbers",
  paragraph:
    "Pythie opens public pages, extracts data, cleans it, and computes. You get a figure, a chart, and sources. When something moves, you get notified.",
  chatHint: "Enter to send. Shift + Enter for a new line.",
  sendLabel: "Send",
  footnote: "Free to start. No card. First answer in under 30 seconds.",
  placeholders: [
    "What is the average price of a 2-bed in Lyon, by neighborhood?",
    "Did my competitor change prices this week?",
    "Which products shrank quantity without lowering price?",
    "Compare my 5 suppliers and alert me if one raises prices by 3%",
    "Which data jobs pay best in Île-de-France this week?",
  ],
  chips: [
    { id: "lyon", label: "2-bed prices in Lyon" },
    { id: "shrink", label: "Shrinkflation" },
    { id: "competitor", label: "Competitor prices" },
    { id: "data", label: "Data jobs" },
  ],
  localTimePrefix: "Local time",
};

export const sourcesRail = {
  label: "Pythie reads:",
  items: [
    "e-commerce sites",
    "property listings",
    "job boards",
    "supplier catalogs",
    "marketplaces",
    "public data",
    "competitor sites",
    "customer reviews",
    "price comparators",
    "official registries",
  ],
};

export const beforeAfter = {
  title: "Three days\nor thirty seconds.",
  beforeLabel: "Before",
  afterLabel: "After",
  beforeLines: [
    "install a scraping tool",
    "write the script (2 h)",
    "the site changes its HTML",
    "the script breaks",
    "clean the CSV manually",
    "rebuild the chart",
  ],
  beforeFoot: "Three days. One developer.",
  afterQuestion: "average 2-bed price in Lyon, by neighborhood",
  afterFoot: "One sentence. Thirty seconds. A chart, a table, sources.",
  sliderLabel: "Compare before and after",
  tabBefore: "Before",
  tabAfter: "After",
};

export const how = {
  title: "Three steps.\nOne input bar.",
  steps: [
    {
      index: "01",
      title: "Ask",
      body: "Write what you want to know the way you would ask a colleague.",
    },
    {
      index: "02",
      title: "Pythie investigates",
      body: "It opens pages, extracts figures, deduplicates, and cross-checks. You see each step as it runs.",
    },
    {
      index: "03",
      title: "You decide",
      body: "A number, a chart, a table, links to source pages. Plus an alert if it moves.",
    },
  ],
  exampleTag: "Example",
  logLines: [
    "open pages: 1,248",
    "extract price and area",
    "remove duplicates: 94",
    "cross-check 3 sources",
    "aggregate by neighborhood",
  ],
  alertLine: "Alert: change above 3%",
  typeExample: "average 2-bed price in Lyon",
};

export const bento = {
  title: "What people ask\nmost often.",
  cards: [
    {
      title: "Live prices",
      body: "Track a product, rent, or fare. Pythie polls at the cadence you choose and keeps history.",
    },
    {
      title: "Shrinkflation",
      body: "Same price, less product. Pythie compares pack sizes over time and recomputes price per kilo.",
    },
    {
      title: "Competitor watch",
      body: "New rates, SKUs, promos. See what changed since the last run, line by line.",
    },
    {
      title: "Market scan",
      body: "One question, one numeric panorama: how many offers, at what price, in which band, from whom.",
    },
    {
      title: "Alerts",
      body: 'Write "notify me if". Pythie checks continuously and messages you when a threshold is crossed, with before and after.',
    },
    {
      title: "Exports",
      body: "CSV, XLSX, Google Sheets, or an API to wire data elsewhere.",
    },
  ],
  exampleTag: "Example",
  shrinkBefore: "300 g",
  shrinkAfter: "270 g",
  shrinkPrice: "$2.49",
  shrinkPerKgBefore: "$8.30",
  shrinkPerKgAfter: "$9.22",
  shrinkDelta: "+11%",
  alerts: [
    "Lyon 2-bed: +3.2% this week",
    "Competitor: 31 prices up",
    "Supplier 3: rate changed",
  ],
  exportTiles: ["csv", "xlsx", "sheets", "api"],
  exportCode: "GET /v1/questions/lyon-2bed",
};

export const numbers = {
  title: "What we target.",
  note: "Product goals for beta, not customer results.",
  items: [
    { value: "30", suffix: "s", label: "to a first answer." },
    { value: "100", suffix: "%", label: "of figures linked to a source page." },
    { value: "0", suffix: "", label: "lines of code to write." },
    { value: "24/7", suffix: "", label: "monitoring on active alerts." },
  ],
};

export const apiSection = {
  title: "Request in.\nData out.",
  intro:
    "Every action is an HTTP call: ask a question, join the waitlist, or trigger monitoring. Chat streams tokens as Pythie works; everything else returns JSON.",
  footnote: "Team plans add authenticated REST endpoints for questions, alerts, and exports. Same pipeline as the app.",
  endpoints: [
    {
      method: "POST",
      path: "/api/chat",
      desc: "Natural-language question. Response is a streamed AI UI message (SSE), consumed by the /app chat.",
    },
    {
      method: "POST",
      path: "/api/waitlist",
      desc: "Body: { \"email\" }. Adds an address to the beta queue. Returns { ok, count }.",
    },
    {
      method: "GET",
      path: "/api/waitlist",
      desc: "Queue size only: { \"count\": number }.",
    },
    {
      method: "GET",
      path: "/api/cron/alerts",
      desc: "Scheduled check for active alerts (Bearer CRON_SECRET). Used by Vercel Cron.",
    },
  ],
  exampleLabel: "Example",
  exampleChat: `POST /api/chat
Content-Type: application/json

{
  "messages": [{
    "role": "user",
    "parts": [{ "type": "text", "text": "Avg 2-bed rent in Lyon?" }]
  }]
}`,
  exampleWaitlist: `POST /api/waitlist
{ "email": "you@company.com" }

→ 200 { "ok": true, "count": 128 }`,
};

export const trust = {
  title: "What you can verify.",
  cards: [
    {
      title: "Every figure has a source",
      body: "Click a number to open the page it came from, with capture date.",
    },
    {
      title: "Gaps are stated",
      body: "If a page is unreadable or the sample is too small, Pythie says so instead of guessing.",
    },
    {
      title: "Public pages only",
      body: "Pythie respects robots.txt, rate limits, and site terms. No personal data collection, no bypassing blocks.",
    },
  ],
};

export const waitlist = {
  title: "Beta is closed for now.\nLeave your email.\nWe open in order.",
  placeholder: "you@email.com",
  submit: "Join the queue",
  countLabel: "people in the queue",
  gdpr:
    "Your email is only used to notify you about beta access. Unsubscribe in one message.",
  success: "Done. You are in the queue.",
  invalidEmail: "That email does not look valid.",
  error: "Something went wrong. Try again.",
};

export const pricing = {
  title: "Three plans.",
  monthly: "Monthly",
  yearly: "Yearly −20%",
  billedMonthly: "per month, billed monthly",
  billedYearly: "per month, billed yearly",
  footnote: "Cancel anytime. Prices excl. tax.",
  plans: [
    {
      id: "free",
      name: "Free",
      priceMonthly: 0,
      priceYearly: 0,
      desc: "To try it.",
      features: [
        "10 questions per month",
        "1 active alert",
        "CSV export",
        "30-day history",
      ],
      cta: "Get started",
      variant: "outline" as const,
    },
    {
      id: "pro",
      name: "Pro",
      priceMonthly: 29,
      priceYearly: 23.2,
      desc: "For solo work.",
      badge: "Recommended",
      features: [
        "Unlimited questions (fair use)",
        "25 active alerts",
        "CSV, XLSX, Google Sheets exports",
        "Hourly captures",
        "12-month history",
      ],
      cta: "Try Pro",
      variant: "default" as const,
      recommended: true,
    },
    {
      id: "team",
      name: "Team",
      priceMonthly: 99,
      priceYearly: 79.2,
      desc: "For teams.",
      features: [
        "5 members",
        "Unlimited alerts",
        "API access",
        "24-month history",
        "Priority support",
      ],
      cta: "Talk to us",
      variant: "outline" as const,
    },
  ],
};

export const faq = {
  title: "Common questions.",
  items: [
    {
      q: "Is it legal to collect data from the web?",
      a:
        "Pythie only reads public pages, respects robots.txt and rate limits, and does not collect personal data. Some sites forbid extraction in their terms: then Pythie stops and tells you. This is not legal advice. Check your use case if you republish data.",
    },
    {
      q: "Where do the numbers come from?",
      a:
        "From pages Pythie opens during your question. Each figure links to its page with capture date. You can verify everything.",
    },
    {
      q: "What if a site blocks access?",
      a:
        "Pythie does not bypass blocks. It reports the issue, looks elsewhere for the same fact, and states what is missing.",
    },
    {
      q: "Can I trust the answers?",
      a:
        "Math is done by code, not guessed by the model. Figures come from cited sources. When the sample is thin or incomplete, the answer says that first.",
    },
    {
      q: "Are my questions private?",
      a:
        "Visible to you only. Not used to train models. You can delete a conversation and its captures.",
    },
    {
      q: "Can I use the API?",
      a: "Yes, on Pro and Team. Every question and alert is available as JSON.",
    },
  ],
};

export const finalCta = {
  title: "Stop searching.\nAsk.",
  placeholder: "Ask your question",
  submit: "Ask",
};

export const footer = {
  product: "Product",
  resources: "Resources",
  legal: "Legal",
  contact: "Contact",
  productLinks: [
    { href: "#fonctionnement", label: "How it works" },
    { href: "#usages", label: "Use cases" },
    { href: "#tarifs", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ],
  resourceLinks: [
    { href: "#", label: "Documentation" },
    { href: "#api", label: "API" },
    { href: "#", label: "Status" },
    { href: "#", label: "Changelog" },
  ],
  legalLinks: [
    { href: "/legal", label: "Legal notice" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
  madeIn: "Made in Paris. 2026.",
};

export const notFound = {
  code: "404",
  message: "This page does not exist. Or not anymore.",
  back: "Back to home",
};

export const rail = [
  { id: "hero", index: "01", label: "Home" },
  { id: "sources", index: "02", label: "Sources" },
  { id: "compare", index: "03", label: "Compare" },
  { id: "fonctionnement", index: "04", label: "How it works" },
  { id: "usages", index: "05", label: "Use cases" },
  { id: "chiffres", index: "06", label: "Targets" },
  { id: "confiance", index: "07", label: "Trust" },
  { id: "attente", index: "08", label: "Waitlist" },
  { id: "tarifs", index: "09", label: "Pricing" },
  { id: "faq", index: "10", label: "FAQ" },
];

export const app = {
  emptyTitle: "Ask a question",
  emptyBody:
    "Write what you want to measure. Pythie opens pages, computes, and cites sources.",
  inputPlaceholder: "Your question…",
  send: "Send",
  sidebarTitle: "Conversations",
  alertsTitle: "Active alerts",
};
