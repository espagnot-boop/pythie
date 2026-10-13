import { sourcesRail } from "@/content/en";

export function SourcesBand() {
  const items = [...sourcesRail.items, ...sourcesRail.items];
  return (
    <section id="sources" className="border-b border-border">
      <div className="flex h-16 items-center border-y border-border">
        <div className="shrink-0 border-r border-border bg-background px-6 font-mono text-[14px]">
          {sourcesRail.label}
        </div>
        <div className="overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap px-8 font-mono text-[14px]">
            {items.map((item, i) => (
              <span key={i} className="inline-flex items-center gap-8">
                {item}
                <span className="inline-block h-[6px] w-[6px] bg-border-strong" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
