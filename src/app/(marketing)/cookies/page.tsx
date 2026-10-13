import type { Metadata } from "next";
import { cookiePolicy } from "@/content/legal";
import { LegalDocument } from "@/components/legal/legal-document";
import { site } from "@/content/en";

export const metadata: Metadata = {
  title: `${cookiePolicy.title} · ${site.name}`,
  description: cookiePolicy.intro,
};

export default function CookiesPage() {
  return (
    <LegalDocument
      title={cookiePolicy.title}
      intro={cookiePolicy.intro}
      sections={cookiePolicy.sections}
    />
  );
}
