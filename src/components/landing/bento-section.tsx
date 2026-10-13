"use client";

import { bento } from "@/content/en";
import { MaskLines } from "@/components/motion/mask-lines";
import { Wipe } from "@/components/motion/wipe";
import { Counter } from "@/components/motion/counter";
import { useMarksInView } from "@/hooks/use-marks-in-view";

const cards = bento.cards;
const c0 = cards[0]!;
const c1 = cards[1]!;
const c2 = cards[2]!;
const c3 = cards[3]!;
const c4 = cards[4]!;
const c5 = cards[5]!;

export function BentoSection() {
  return (
    <section id="usages" className="section-pad border-b border-border">
      <div className="grid-cols-12">
        <MaskLines text={bento.title} className="col-span-12 text-h2 lg:col-span-8" as="h2" />
        <div className="col-span-12 mt-12 grid gap-6 lg:grid-cols-12">
          <BentoCard className="lg:col-span-7" title={c0.title} body={c0.body} />
          <BentoCard className="lg:col-span-5" title={c1.title} body={c1.body} shrink />
          <BentoCard className="lg:col-span-4" title={c2.title} body={c2.body} />
          <BentoCard className="lg:col-span-4" title={c3.title} body={c3.body} bars />
          <BentoCard className="lg:col-span-4" title={c4.title} body={c4.body} alerts />
          <BentoCard className="lg:col-span-12 min-h-[240px]" title={c5.title} body={c5.body} exports />
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  title,
  body,
  className,
  shrink,
  bars,
  alerts,
  exports: exportsMode,
}: {
  title: string;
  body: string;
  className?: string;
  shrink?: boolean;
  bars?: boolean;
  alerts?: boolean;
  exports?: boolean;
}) {
  const { ref, className: marks } = useMarksInView<HTMLDivElement>();
  return (
    <Wipe from="top">
      <div
        ref={ref}
        className={`relative flex min-h-[260px] flex-col border border-border p-5 ${marks} ${className ?? ""}`}
      >
        <span className="marks-bl" />
        <span className="marks-br" />
        <h3 className="text-h3">{title}</h3>
        <p className="mt-2 text-body-sm">{body}</p>
        <div className="mt-auto pt-8">
          {shrink && (
            <div className="flex gap-4 font-mono text-[13px]">
              <div className="flex-1 border border-border p-4">{bento.shrinkBefore}</div>
              <div className="flex-1 border border-border p-4">
                <Counter value={270} duration={800} /> g
              </div>
              <p className="text-accent">{bento.shrinkDelta}</p>
            </div>
          )}
          {bars && (
            <div className="space-y-2">
              {[90, 70, 55, 40, 30, 20].map((w) => (
                <div key={w} className="h-3 bg-chart-2" style={{ width: `${w}%` }} />
              ))}
            </div>
          )}
          {alerts && (
            <div className="space-y-2 font-mono text-[13px]">
              {bento.alerts.map((a) => (
                <div key={a} className="border border-border-strong p-2">{a}</div>
              ))}
            </div>
          )}
          {exportsMode && (
            <div className="flex flex-wrap gap-4">
              {bento.exportTiles.map((t) => (
                <div
                  key={t}
                  className="flex h-24 w-24 items-center justify-center border border-border font-mono text-[14px] hover:bg-accent hover:text-accent-foreground"
                >
                  {t}
                </div>
              ))}
              <pre className="font-mono text-[13px]">{bento.exportCode}</pre>
            </div>
          )}
        </div>
      </div>
    </Wipe>
  );
}
