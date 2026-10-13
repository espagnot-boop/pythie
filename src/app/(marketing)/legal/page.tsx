import type { Metadata } from "next";
import { legalNotice } from "@/content/legal";
import { LegalDocument } from "@/components/legal/legal-document";
import { site } from "@/content/en";

export const metadata: Metadata = {
  title: `${legalNotice.title} · ${site.name}`,
  description: legalNotice.intro,
};

export default function LegalPage() {
  return (
    <LegalDocument
      title={legalNotice.title}
      intro={legalNotice.intro}
      sections={legalNotice.sections}
    />
  );
}
