import { site } from "@/content/en";

export const legalMeta = {
  lastUpdated: "13 October 2026",
  contactEmail: "founder@pythie.eu",
  siteUrl: site.url,
  publisher: "Pythie",
  location: "Paris, France",
  hosting: "Vercel Inc. (United States) — EU traffic may be processed under Vercel’s DPA and SCCs where applicable.",
};

export const legalNotice = {
  title: "Legal notice",
  intro:
    "This page provides mandatory publisher information for the pythie.eu website and the Pythie service.",
  sections: [
    {
      heading: "Publisher",
      body: `${legalMeta.publisher} — ${legalMeta.location}. Contact: ${legalMeta.contactEmail}.`,
    },
    {
      heading: "Publication director",
      body: `Publication director: Pythie team (${legalMeta.contactEmail}).`,
    },
    {
      heading: "Hosting",
      body: legalMeta.hosting,
    },
    {
      heading: "Intellectual property",
      body:
        "Text, graphics, logos, and software on this site are owned by Pythie or its licensors. Reproduction without permission is prohibited except where allowed by law.",
    },
    {
      heading: "Limitation of liability",
      body:
        "Pythie strives to keep information accurate but does not guarantee completeness. Use of the site is at your own risk. See our Terms for service limitations.",
    },
  ],
};

export const privacyPolicy = {
  title: "Privacy policy",
  intro:
    "We process personal data in line with the GDPR and applicable EU law. This policy explains what we collect, why, and your rights.",
  sections: [
    {
      id: "gdpr",
      heading: "GDPR compliance",
      body:
        "Pythie acts as data controller for account and waitlist data. We collect only what we need, document purposes, and honour access, rectification, erasure, restriction, portability, and objection rights. To exercise them, email founder@pythie.eu. You may lodge a complaint with your EU supervisory authority.",
    },
    {
      heading: "Data we collect",
      body:
        "Waitlist: email address. Service use: questions you submit, derived captures of public pages linked to your session, and technical logs (IP, browser, timestamps) for security and abuse prevention. We do not buy or sell personal data.",
    },
    {
      heading: "Legal bases",
      body:
        "Contract/pre-contract steps (beta access), legitimate interest (security, product improvement), and consent where required (e.g. marketing if ever offered separately).",
    },
    {
      heading: "Retention",
      body:
        "Waitlist emails until you unsubscribe or 24 months of inactivity. Conversation data until you delete it or close your account. Logs: up to 12 months unless law requires longer.",
    },
    {
      heading: "Processors & transfers",
      body:
        "We use infrastructure and AI providers under data-processing agreements. Some subprocessors may be outside the EEA; we rely on SCCs or adequacy decisions where required.",
    },
    {
      heading: "Public web data",
      body:
        "Pythie reads public pages to answer your questions. We do not intentionally collect personal data from those pages. If you believe we hold personal data about you, contact us for deletion.",
    },
    {
      heading: "Contact",
      body: `Privacy requests: ${legalMeta.contactEmail}.`,
    },
  ],
};

export const cookiePolicy = {
  title: "Cookie policy",
  intro:
    "We use a small set of cookies and similar technologies. We do not use advertising trackers on pythie.eu.",
  sections: [
    {
      heading: "What are cookies?",
      body:
        "Cookies are small files stored on your device. Local storage works similarly for in-browser preferences.",
    },
    {
      heading: "Cookies we use",
      body:
        "Strictly necessary: session and security cookies from our host (e.g. Vercel) to deliver the site. Preferences: theme choice stored locally (dark mode). Waitlist: no cookie required for the form itself.",
    },
    {
      heading: "Analytics",
      body:
        "We do not run third-party advertising or social pixels on the marketing site. If we add privacy-friendly analytics later, we will update this page and ask for consent where required.",
    },
    {
      heading: "Managing cookies",
      body:
        "You can block or delete cookies in your browser settings. Blocking essential cookies may break parts of the site.",
    },
    {
      heading: "Contact",
      body: `Questions: ${legalMeta.contactEmail}.`,
    },
  ],
};

export const termsOfService = {
  title: "Terms of service",
  intro:
    "These terms govern access to Pythie during the private beta. By using the service, you agree to them.",
  sections: [
    {
      heading: "Service",
      body:
        "Pythie turns natural-language questions into figures, charts, and links to public web sources. Features and limits may change during beta.",
    },
    {
      heading: "Eligibility & account",
      body:
        "You must be able to form a binding contract and comply with applicable law. Keep credentials confidential.",
    },
    {
      heading: "Acceptable use",
      body:
        "No unlawful scraping, bypassing access controls, harassment, or misuse of outputs to infringe third-party rights. Respect robots.txt and site terms of sources you target.",
    },
    {
      heading: "Web data & disclaimers",
      body:
        "Outputs depend on public pages available at run time. Pythie is not legal, financial, or professional advice. Verify critical decisions independently. We are not liable for third-party site changes or blocks.",
    },
    {
      heading: "Beta",
      body:
        "The service may be interrupted, modified, or withdrawn. We may cap usage (fair use). Fees for paid plans will be shown before billing.",
    },
    {
      heading: "Intellectual property",
      body:
        "We grant you a limited licence to use outputs for your internal business purposes. Pythie retains all rights in the product.",
    },
    {
      heading: "Liability",
      body:
        "To the extent permitted by law, Pythie is not liable for indirect damages. Our aggregate liability is limited to fees paid in the 12 months before the claim, or €100 if you are on a free plan.",
    },
    {
      heading: "Governing law",
      body:
        "These terms are governed by French law, without prejudice to mandatory consumer protections in your country of residence. Courts of Paris have jurisdiction where permitted.",
    },
    {
      heading: "Contact",
      body: `Legal & support: ${legalMeta.contactEmail}.`,
    },
  ],
};
