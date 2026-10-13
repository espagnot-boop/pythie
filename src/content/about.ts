import { site } from "@/content/en";

export const about = {
  title: "About",
  name: "Matis Ghom",
  role: "Founder",
  email: site.contactEmail,
  intro:
    "I’m Matis Ghom. I’m studying computer science at École Polytechnique in Paris and building Pythie from Europe.",
  sections: [
    {
      heading: "What I’m doing",
      body:
        "Between classes and research, I work on systems that turn messy public web data into numbers people can trust: sourced, reproducible, and explainable. Pythie is that bet — ask in plain language, get charts and citations, not a black box.",
    },
    {
      heading: "Why Polytechnique & why Europe",
      body:
        "Polytechnique trained me to care about rigour — models, algorithms, and engineering discipline. Pythie applies that to real-world data collection: respect robots.txt, no personal data, infrastructure aligned with European expectations. The .eu domain is intentional: sovereignty and compliance are product features, not footnotes.",
    },
    {
      heading: "Background",
      body:
        "Computer science student with a focus on software engineering, data systems, and applied AI. I like hard problems at the intersection of browsers, APIs, and human-readable answers.",
    },
    {
      heading: "Get in touch",
      body: `Questions about the beta, partnerships, or the roadmap: ${site.contactEmail}.`,
    },
  ],
};
