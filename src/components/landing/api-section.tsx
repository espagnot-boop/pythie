"use client";

import { apiSection } from "@/content/en";
import { SectionIconApi } from "@/components/landing/section-icons";
import { MaskLines } from "@/components/motion/mask-lines";
import { Wipe } from "@/components/motion/wipe";

function MethodBadge({ method }: { method: string }) {
  const isGet = method === "GET";
  return (
    <span
      className={
        isGet
          ? "inline-flex min-w-[52px] justify-center border border-border bg-background px-2 py-0.5 font-mono text-[11px]"
          : "inline-flex min-w-[52px] justify-center border border-accent bg-accent px-2 py-0.5 font-mono text-[11px] text-accent-foreground"
      }
    >
      {method}
    </span>
  );
}

export function ApiSection() {
  return (
    <section id="api" className="section-pad border-b border-border">
      <div className="grid-cols-12 gap-y-10">
        <div className="col-span-12 lg:col-span-5">
          <div className="flex items-start gap-4">
            <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-background">
              <SectionIconApi />
            </span>
            <MaskLines text={apiSection.title} className="text-h2" as="h2" />
          </div>
          <p className="mt-6 text-body">{apiSection.intro}</p>
          <ul className="mt-8 space-y-4">
            {apiSection.endpoints.map((ep) => (
              <li key={ep.path + ep.method} className="flex gap-3 border-t border-border pt-4 first:border-t-0 first:pt-0">
                <MethodBadge method={ep.method} />
                <div className="min-w-0">
                  <p className="font-mono text-[13px]">{ep.path}</p>
                  <p className="mt-1 text-body-sm text-muted-foreground">{ep.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-mono text-[12px] text-muted-foreground">{apiSection.footnote}</p>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <Wipe from="left">
            <div className="border border-border-strong bg-muted/30 p-5 lg:p-6">
              <p className="font-mono text-[11px] text-muted-foreground">{apiSection.exampleLabel}</p>
              <pre className="mt-4 overflow-x-auto whitespace-pre-wrap font-mono text-[12px] leading-relaxed text-foreground">
                {apiSection.exampleChat}
              </pre>
              <div className="my-5 h-px bg-border" />
              <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-[12px] leading-relaxed text-foreground">
                {apiSection.exampleWaitlist}
              </pre>
            </div>
          </Wipe>
        </div>
      </div>
    </section>
  );
}
