import type { Metadata } from "next";
import Link from "next/link";
import { about } from "@/content/about";
import { site } from "@/content/en";
import { Footer } from "@/components/landing/footer";

export const metadata: Metadata = {
  title: `${about.title} · ${site.name}`,
  description: about.intro,
};

export default function AboutPage() {
  return (
    <>
      <article className="section-pad border-b border-border">
        <div className="mx-auto max-w-[720px] px-5 lg:px-8">
          <Link href="/" className="link-hover font-mono text-[13px] text-muted-foreground">
            ← pythie.eu
          </Link>
          <p className="mt-8 font-mono text-[12px] text-accent">{about.role}</p>
          <h1 className="mt-2 text-h2">{about.name}</h1>
          <p className="mt-6 text-body">{about.intro}</p>
          <div className="mt-12 space-y-10">
            {about.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-h3">{section.heading}</h2>
                <p className="mt-4 text-body-sm leading-relaxed text-muted-foreground">{section.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-16 border-t border-border pt-8 font-mono text-[13px] text-muted-foreground">
            <a href={`mailto:${about.email}`} className="link-hover text-foreground">{about.email}</a>
          </p>
        </div>
      </article>
      <Footer />
    </>
  );
}
