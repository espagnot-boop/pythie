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
    "This legal notice (mentions légales) applies to the website pythie.eu and the Pythie online service. It identifies the publisher, hosting provider, and general conditions of use of the site in accordance with applicable French and European requirements for transparency.",
  sections: [
    {
      heading: "Publisher of the website",
      body: `The website ${legalMeta.siteUrl} is published by ${legalMeta.publisher}, based in ${legalMeta.location}.

For any request relating to the site or the service: ${legalMeta.contactEmail}.

Pythie is a software service that helps users obtain figures, charts, and citations from public web pages through natural-language questions. The service is operated from Europe with a focus on GDPR compliance and data minimisation.`,
    },
    {
      heading: "Publication director",
      body: `The publication director is the person responsible for editorial content displayed on pythie.eu (marketing pages, documentation, and legal information).

Publication director: Matis Ghom — ${legalMeta.contactEmail}.

User-generated content (questions, exports) remains under the user’s responsibility; Pythie does not pre-moderate every query but may suspend accounts that violate the Terms.`,
    },
    {
      heading: "Hosting and infrastructure",
      body: `${legalMeta.hosting}

Application logic, databases (when enabled), and static assets may be distributed across regions for performance. We select providers that offer contractual guarantees appropriate to EU customers, including data-processing agreements where personal data is involved.

Status and security incidents affecting personal data will be communicated as required by the GDPR.`,
    },
    {
      heading: "Intellectual property",
      body: `All elements of the site and service — including but not limited to text, layout, trademarks, logos, icons, graphics, code, databases, and audiovisual components — are protected by intellectual property law.

Unless stated otherwise, they are the exclusive property of Pythie or its licensors. Any reproduction, representation, modification, or exploitation without prior written authorisation is prohibited, except for private, non-commercial use or where expressly permitted by law.

The name “Pythie”, the pythie.eu domain, and associated visual identity may not be used in a manner likely to cause confusion without permission.`,
    },
    {
      heading: "Hyperlinks",
      body: `The site may contain links to third-party websites. Pythie does not control those sites and is not responsible for their content, availability, or privacy practices.

Creating a deep link to pythie.eu is permitted provided it does not damage our reputation or present the service in a misleading way. Framing or automated scraping of the marketing site without permission is not allowed.`,
    },
    {
      heading: "Limitation of liability (site)",
      body: `Pythie makes reasonable efforts to keep information on this website accurate and up to date. However, we do not warrant that the site will be error-free, uninterrupted, or free of harmful components.

Information on pythie.eu is provided for general information only. It does not constitute professional, legal, or financial advice. Use of the site is at your own risk.

For limitations related to the paid or beta service itself, see our Terms of service.`,
    },
    {
      heading: "Applicable law",
      body: `This legal notice is governed by French law. In the event of a dispute, and after an attempt at amicable resolution, French courts shall have jurisdiction subject to mandatory rules applicable to consumers residing in the European Union.`,
    },
  ],
};

export const privacyPolicy = {
  title: "Privacy policy",
  intro:
    "This privacy policy describes how Pythie (“we”, “us”) collects, uses, stores, and protects personal data when you visit pythie.eu, join the waitlist, or use the Pythie application. We process data in accordance with Regulation (EU) 2016/679 (GDPR), the French Data Protection Act, and ePrivacy rules where relevant.",
  sections: [
    {
      id: "gdpr",
      heading: "GDPR compliance & your rights",
      body: `Pythie acts as **data controller** for personal data described in this policy (waitlist, accounts, support, and service logs tied to identifiable users).

You have the following rights, subject to conditions in the GDPR:
- • Access — obtain confirmation and a copy of your data
- • Rectification — correct inaccurate data
- • Erasure — request deletion in certain cases (“right to be forgotten”)
- • Restriction — limit processing in certain cases
- • Portability — receive data you provided in a structured, machine-readable format
- • Objection — object to processing based on legitimate interest
- • Withdraw consent — where processing is based on consent

To exercise your rights, email ${legalMeta.contactEmail}. We respond within one month, extendable where permitted. You may also lodge a complaint with the CNIL (France) or your local EU supervisory authority.`,
    },
    {
      heading: "Categories of data we process",
      body: `Depending on how you interact with Pythie, we may process:

**Waitlist & contact**
- • Email address
- • Timestamp of registration and technical metadata (IP address, user agent) for fraud prevention

**Account & service use (when you have access)**
- • Account identifiers and authentication data
- • Questions you submit and configuration (alerts, exports)
- • Derived artefacts: numeric results, charts, links to source pages, capture timestamps
- • Usage metrics (feature usage, error reports) in aggregated or identifiable form where needed for support

**Technical & security**
- • Server and application logs (IP, request paths, timestamps, device/browser type)
- • Abuse-prevention signals

We do **not** sell personal data. We do not knowingly collect special categories of data (health, biometrics, etc.) through the service.`,
    },
    {
      heading: "Purposes and legal bases",
      body: `We process personal data only for specified purposes:

- • **Beta access & contract** (Art. 6(1)(b) GDPR): managing waitlist, creating accounts, providing the service you request
- • **Legitimate interest** (Art. 6(1)(f)): securing the platform, debugging, preventing abuse, improving reliability — balanced against your rights
- • **Legal obligation** (Art. 6(1)(c)): retaining certain records where law requires
- • **Consent** (Art. 6(1)(a)): optional communications where consent is required; you may withdraw at any time

Marketing emails are not sent without a clear legal basis; waitlist messages relate to product access unless you opt in to broader updates.`,
    },
    {
      heading: "Retention periods",
      body: `- • **Waitlist**: until you unsubscribe, object, or 24 months without engagement, then deletion or anonymisation
- • **Account & conversations**: until you delete content, close your account, or 24 months after last activity unless law requires longer retention
- • **Billing records** (if applicable): duration required by French commercial and tax law (typically up to 10 years for invoices)
- • **Security logs**: up to 12 months, unless needed for an ongoing investigation
- • **Support tickets**: up to 24 months after resolution

When data is no longer needed, we delete or irreversibly anonymise it.`,
    },
    {
      heading: "Recipients & subprocessors",
      body: `Access to personal data is limited to authorised personnel and service providers who need it to operate Pythie, under confidentiality and data-processing agreements.

Categories of recipients may include:
- • Cloud hosting and CDN providers (e.g. Vercel)
- • Database hosting (when DATABASE_URL is configured)
- • Email delivery providers (transactional messages)
- • AI inference providers (question processing — we minimise personal data in prompts and do not use your questions to train third-party models where contractually prohibited)

A list of subprocessors can be provided on request at ${legalMeta.contactEmail}.`,
    },
    {
      heading: "International transfers",
      body: `Some providers may process data in the United States or other countries outside the European Economic Area. Where required, we rely on:
- • European Commission adequacy decisions, or
- • Standard Contractual Clauses (SCCs) and supplementary measures

You may request a copy of relevant safeguards by contacting us.`,
    },
    {
      heading: "Public web data & automated processing",
      body: `To answer your questions, Pythie fetches and analyses **public** web pages. That processing concerns page content, not our users’ special categories of data.

We design pipelines to avoid collecting personal data from the open web (e.g. names, emails on listings). If you believe we inadvertently hold personal data about you in a capture, contact us and we will delete it promptly.

Automated decision-making does not produce legal or similarly significant effects solely by algorithm without human review; outputs are informational tools for your judgment.`,
    },
    {
      heading: "Security",
      body: `We implement technical and organisational measures appropriate to the risk: encryption in transit (HTTPS), access controls, least-privilege access for operators, and monitoring for abuse.

No method of transmission over the Internet is 100% secure. We cannot guarantee absolute security but we work to improve it continuously and notify users and authorities of breaches when required by law.`,
    },
    {
      heading: "Children",
      body: `Pythie is not directed at children under 16. We do not knowingly collect data from children. If you believe a child has provided personal data, contact us for deletion.`,
    },
    {
      heading: "Changes to this policy",
      body: `We may update this policy to reflect product, legal, or regulatory changes. The “Last updated” date will change; material changes will be highlighted on the site or by email where appropriate.

Continued use after an update constitutes acceptance where permitted by law; for consent-based processing, we will seek consent again if required.`,
    },
    {
      heading: "Contact & DPO",
      body: `For privacy questions, rights requests, or subprocessors information:

${legalMeta.contactEmail}

We have not appointed a separate Data Protection Officer; the publisher handles privacy requests directly at this stage of the beta.`,
    },
  ],
};

export const cookiePolicy = {
  title: "Cookie policy",
  intro:
    "This cookie policy explains how pythie.eu uses cookies and similar technologies (local storage, session storage). It should be read together with our Privacy policy. We aim for minimal tracking and no advertising surveillance on the marketing site.",
  sections: [
    {
      heading: "What are cookies and similar technologies?",
      body: `Cookies are small text files placed on your device when you visit a website. They can be “session” cookies (deleted when you close the browser) or “persistent” cookies (remain until expiry or deletion).

**Local storage** and **session storage** are browser mechanisms that store data locally; we use them sparingly for interface preferences.

Similar technologies (pixels, tags) are not used for advertising on pythie.eu today.`,
    },
    {
      heading: "Why we use cookies",
      body: `- • Deliver and secure the website (routing, DDoS protection, load balancing)
- • Remember interface preferences (e.g. dark theme)
- • Measure basic performance or errors only if we enable privacy-oriented analytics in the future

We do not use cookies to build advertising profiles or sell data to brokers.`,
    },
    {
      heading: "Cookies & storage we use today",
      body: `**Strictly necessary / hosting (first or third party)**
- • Cookies set by our hosting provider to deliver pages, enforce security, and maintain sessions. These are required for the site to function.

**Preferences (first party)**
- • Theme preference via next-themes may store your choice in local storage (class “dark”). This is not used for tracking across sites.

**Waitlist form**
- • Submitting your email uses a server API call; no marketing cookie is required to complete the form.

**Authentication (when logged in)**
- • Session cookies or tokens may be issued to keep you signed in securely.`,
    },
    {
      heading: "Analytics and marketing",
      body: `We do **not** currently deploy Google Analytics, Meta Pixel, or other third-party advertising trackers on the marketing site.

If we introduce privacy-friendly, EU-aligned analytics (e.g. aggregated visit counts), we will:
- • Update this policy with vendor names and cookie lifetimes
- • Request consent via a banner where required by ePrivacy rules
- • Offer an easy way to refuse non-essential cookies

Embedded content (e.g. social links to X) only loads when you click through; we do not embed tracking widgets in the page body by default.`,
    },
    {
      heading: "Consent and control",
      body: `Strictly necessary cookies do not require consent under EU guidance because the service cannot work without them.

For any non-essential cookies we add later, we will collect consent before placement where required.

You can control cookies through your browser:
- • Block third-party or all cookies
- • Delete existing cookies
- • Use private browsing modes

Blocking all cookies may prevent login or certain features from working.`,
    },
    {
      heading: "Cookie retention",
      body: `Retention depends on the cookie type:
- • Session cookies: deleted when you close the browser
- • Persistent hosting cookies: typically from a few hours to 12 months per provider documentation
- • Local storage (theme): until you clear site data or we change the key

Refer to your browser’s developer tools (“Application” / “Storage”) to inspect stored items for pythie.eu.`,
    },
    {
      heading: "Updates & contact",
      body: `We may revise this policy when our stack changes. Check the “Last updated” date at the top of the page.

Questions about cookies: ${legalMeta.contactEmail}.`,
    },
  ],
};

export const termsOfService = {
  title: "Terms of service",
  intro:
    "These Terms of service (“Terms”) form a binding agreement between you and Pythie regarding access to the website pythie.eu and the Pythie application (the “Service”). Please read them carefully. By creating an account, joining the waitlist where it creates a contractual relationship, or using the Service, you agree to these Terms. If you do not agree, do not use the Service.",
  sections: [
    {
      heading: "1. The Service",
      body: `Pythie allows you to ask questions in natural language about publicly available web data and receive numeric answers, visualisations, tables, and links to source pages, subject to plan limits.

The Service may include:
- • Interactive Q&A and chat-style interfaces
- • Scheduled monitoring and alerts
- • Exports (CSV, XLSX, integrations) on eligible plans
- • API access on eligible plans

We may add, change, or remove features, especially during the **private beta**. We will use reasonable efforts to communicate material changes.`,
    },
    {
      heading: "2. Eligibility",
      body: `You must be at least 18 years old (or the age of majority in your jurisdiction) and able to enter a binding contract.

If you use the Service on behalf of an organisation, you represent that you have authority to bind that organisation. The organisation is responsible for its users’ compliance with these Terms.`,
    },
    {
      heading: "3. Accounts & security",
      body: `You are responsible for maintaining the confidentiality of your credentials and for all activity under your account.

Notify us immediately at ${legalMeta.contactEmail} if you suspect unauthorised access.

We may suspend or terminate accounts that violate these Terms, pose security risks, or abuse fair-use limits.`,
    },
    {
      heading: "4. Acceptable use",
      body: `You agree not to:
- • Use the Service for unlawful purposes or to violate third-party rights
- • Target sites in ways that breach their terms of use, circumvent technical access controls, or ignore robots.txt where applicable
- • Send excessive automated traffic, attempt to probe or disrupt our infrastructure
- • Upload malware, harass staff, or scrape the Service itself without permission
- • Misrepresent outputs as human professional advice (legal, medical, financial) without independent verification
- • Resell or sublicense the Service except as expressly allowed on Team/API plans

We may investigate violations and cooperate with authorities when required by law.`,
    },
    {
      heading: "5. Web data, accuracy & disclaimers",
      body: `Outputs depend on public pages available at the time of your request. Websites change, block access, or contain errors. Pythie aggregates and computes in good faith but **does not guarantee** completeness, accuracy, or fitness for a particular purpose.

**Not professional advice.** Pythie is an information tool. It is not a substitute for licensed legal, financial, tax, or other professional counsel.

**Your decisions.** You remain solely responsible for how you use outputs, including compliance with laws governing republication of data, competition, and intellectual property.

**Third-party sites.** We are not responsible for third-party content, availability, or policies.`,
    },
    {
      heading: "6. Beta programme",
      body: `During the private beta, the Service is provided **as is**, may contain defects, and may be unavailable without notice.

We may:
- • Limit invitations, questions per month, alerts, or API calls
- • Reset or migrate data with notice where feasible
- • Change pricing before general availability; paid plans will show price before charge

Feedback you provide may be used to improve the product without obligation to you unless a separate agreement says otherwise.`,
    },
    {
      heading: "7. Plans, billing & taxes",
      body: `Free, Pro, and Team plans are described on the pricing page. Paid subscriptions renew according to the billing cycle you select unless cancelled.

Prices are shown excluding VAT unless stated otherwise; applicable taxes are added at checkout for EU customers where required.

Refunds follow our published refund policy at launch; during beta, contact us for billing issues. You may cancel renewal in account settings or by email.`,
    },
    {
      heading: "8. Intellectual property",
      body: `**Our IP.** The Service, software, branding, and documentation are owned by Pythie or licensors. These Terms grant you a limited, non-exclusive, non-transferable licence to use the Service for your internal business purposes during your subscription.

**Your content.** You retain rights to questions and data you upload. You grant us a licence to process your content solely to provide and improve the Service, consistent with the Privacy policy.

**Outputs.** Subject to third-party rights in underlying web data, we grant you the right to use exports for your internal business purposes. You must respect source websites’ terms and applicable law when republishing.`,
    },
    {
      heading: "9. Confidentiality & privacy",
      body: `Our Privacy policy explains how we handle personal data. Security measures are described there; you agree to handle any exported data in compliance with GDPR and other laws applicable to you.

If you receive access to non-public beta features or roadmaps, you agree not to disclose confidential information without permission.`,
    },
    {
      heading: "10. Warranty disclaimer",
      body: `To the fullest extent permitted by law, the Service is provided **without warranties** of any kind, whether express or implied, including merchantability, fitness for a particular purpose, and non-infringement.

We do not warrant uninterrupted or error-free operation.`,
    },
    {
      heading: "11. Limitation of liability",
      body: `To the extent permitted by law:
- • Pythie shall not be liable for indirect, incidental, special, consequential, or punitive damages, or loss of profits, data, or goodwill
- • Our **aggregate liability** for any claim arising from these Terms or the Service is limited to the greater of (a) amounts you paid us in the 12 months before the claim, or (b) **€100** for free users

Nothing limits liability for death or personal injury caused by negligence, fraud, or liabilities that cannot be limited under applicable law (including mandatory consumer rights in the EU).`,
    },
    {
      heading: "12. Indemnity",
      body: `You agree to indemnify and hold Pythie harmless from claims arising from your misuse of the Service, your content, or violation of these Terms or third-party rights, except where caused by our intentional misconduct or gross negligence.`,
    },
    {
      heading: "13. Termination",
      body: `You may stop using the Service at any time. We may suspend or terminate access for breach, risk, or discontinuation of the product.

Upon termination, your right to use the Service ends. Provisions that by nature should survive (liability limits, IP, governing law) remain in effect.`,
    },
    {
      heading: "14. Governing law & disputes",
      body: `These Terms are governed by **French law**, without regard to conflict-of-law rules.

If you are a **consumer** in the EU, you benefit from mandatory protections of your country of residence and may bring proceedings in your local courts.

Otherwise, exclusive jurisdiction is attributed to the competent courts of **Paris, France**, subject to mandatory rules.

We encourage you to contact ${legalMeta.contactEmail} first to resolve disputes amicably.`,
    },
    {
      heading: "15. General",
      body: `If any provision is unenforceable, the remainder stays in effect. Failure to enforce a right is not a waiver.

These Terms, the Privacy policy, and Cookie policy constitute the entire agreement regarding the Service unless a separate written agreement applies to enterprise customers.

We may assign these Terms in connection with a merger or sale; you may not assign without our consent.`,
    },
    {
      heading: "16. Contact",
      body: `Legal, billing, and support:

${legalMeta.contactEmail}

Website: ${legalMeta.siteUrl}`,
    },
  ],
};
