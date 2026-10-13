import { sourcesRail } from "@/content/en";
import { SectionIconSources } from "@/components/landing/section-icons";

export function SourcesBand() {
  const items = [...sourcesRail.items, ...sourcesRail.items];
  return (
    <section id="sources" className="border-b border-border">
      <div className="border-y border-border">
        <div className="grid-cols-12 gap-y-0">
          <div className="col-span-12 flex h-16 min-w-0 items-center">
            <div className="flex shrink-0 items-center gap-2.5 border-r border-border bg-background py-4 pr-6 font-mono text-[14px]">
              <SectionIconSources className="text-muted-foreground" width={16} height={16} />
              {sourcesRail.label}
            </div>
            <div className="min-w-0 flex-1 overflow-hidden">
              <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap pl-6 font-mono text-[14px]">
                {items.map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-8">
                    {item}
                    <span className="inline-block h-[6px] w-[6px] bg-border-strong" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
