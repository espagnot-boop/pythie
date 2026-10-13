import type { Metadata } from "next";
import { termsOfService } from "@/content/legal";
import { LegalDocument } from "@/components/legal/legal-document";
import { site } from "@/content/en";

export const metadata: Metadata = {
  title: `${termsOfService.title} · ${site.name}`,
  description: termsOfService.intro,
};

export default function TermsPage() {
  return (
    <LegalDocument
      title={termsOfService.title}
      intro={termsOfService.intro}
      sections={termsOfService.sections}
    />
  );
}
