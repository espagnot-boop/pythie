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

function InlineText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-medium text-foreground">{part.slice(2, -2)}</strong>
    ) : (
      part
    ),
  );
}

function SectionBody({ body }: { body: string }) {
  const blocks = body.split("\n\n").filter(Boolean);
  return (
    <div className="mt-4 space-y-4">
      {blocks.map((block, i) => {
        const lines = block.split("\n");
        const isList = lines.every(
          (line) => line.startsWith("• ") || line.startsWith("- ") || line.startsWith("- •"),
        );
        if (isList) {
          return (
            <ul key={i} className="list-none space-y-2 pl-0 text-body-sm leading-relaxed text-muted-foreground">
              {lines.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="text-foreground" aria-hidden>•</span>
                  <span>
                    <InlineText text={line.replace(/^-\s*/, "").replace(/^•\s*/, "")} />
                  </span>
                </li>
              ))}
            </ul>
          );
        }
        if (lines.length > 1) {
          return (
            <div key={i} className="space-y-3">
              {lines.map((line, j) => (
                <p key={j} className="text-body-sm leading-relaxed text-muted-foreground">
                  <InlineText text={line} />
                </p>
              ))}
            </div>
          );
        }
        return (
          <p key={i} className="text-body-sm leading-relaxed text-muted-foreground">
            <InlineText text={block} />
          </p>
        );
      })}
    </div>
  );
}

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
          <p className="mt-8 text-body leading-relaxed">{intro}</p>
          <div className="mt-12 space-y-12">
            {sections.map((section) => (
              <section key={section.heading} id={section.id}>
                <h2 className="text-h3">{section.heading}</h2>
                <SectionBody body={section.body} />
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
