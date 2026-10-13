import type { Metadata } from "next";
import { privacyPolicy } from "@/content/legal";
import { LegalDocument } from "@/components/legal/legal-document";
import { site } from "@/content/en";

export const metadata: Metadata = {
  title: `${privacyPolicy.title} · ${site.name}`,
  description: privacyPolicy.intro,
};

export default function PrivacyPage() {
  return (
    <LegalDocument
      title={privacyPolicy.title}
      intro={privacyPolicy.intro}
      sections={privacyPolicy.sections}
    />
  );
}
