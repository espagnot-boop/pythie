import Link from "next/link";
import { legalMeta } from "@/content/legal";
import { Footer } from "@/components/landing/footer";

type Section = {
  id?: string;
  heading: string;
  body: string;
};

type LegalDocumentProps = {
  title: string;
  intro: string;
  sections: Section[];
};

export function LegalDocument({ title, intro, sections }: LegalDocumentProps) {
  return (
    <>
      <article className="section-pad border-b border-border">
        <div className="mx-auto max-w-[720px] px-5 lg:px-8">
          <Link href="/" className="link-hover font-mono text-[13px] text-muted-foreground">
            ← pythie.eu
          </Link>
          <h1 className="mt-8 text-h2">{title}</h1>
          <p className="mt-4 font-mono text-[12px] text-muted-foreground">
            Last updated {legalMeta.lastUpdated}
          </p>
          <p className="mt-8 text-body">{intro}</p>
          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.heading} id={section.id}>
                <h2 className="text-h3">{section.heading}</h2>
                <p className="mt-4 text-body-sm leading-relaxed text-muted-foreground">{section.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-16 border-t border-border pt-8 font-mono text-[13px] text-muted-foreground">
            Contact:{" "}
            <a href={`mailto:${legalMeta.contactEmail}`} className="link-hover text-foreground">
              {legalMeta.contactEmail}
            </a>
          </p>
        </div>
      </article>
      <Footer />
    </>
  );
}
