"use client";

import { useEffect, useRef, useState } from "react";
import { beforeAfter } from "@/content/en";
import { MaskLines } from "@/components/motion/mask-lines";
import { Wipe } from "@/components/motion/wipe";
import { useMarksInView } from "@/hooks/use-marks-in-view";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const chartData = [
  { q: "1", v: 4200 },
  { q: "2", v: 4800 },
  { q: "3", v: 5100 },
  { q: "4", v: 4600 },
  { q: "5", v: 5300 },
];

export function BeforeAfterSection() {
  const [split, setSplit] = useState(50);
  const [invited, setInvited] = useState(false);
  const { ref, className: marksClass } = useMarksInView<HTMLDivElement>();
  const dragging = useRef(false);

  useEffect(() => {
    if (invited) return;
    const t = setTimeout(() => {
      setSplit(62);
      setTimeout(() => setSplit(50), 700);
      setInvited(true);
    }, 800);
    return () => clearTimeout(t);
  }, [invited]);

  return (
    <section id="compare" className="section-pad border-b border-border">
      <div className="grid-cols-12">
        <div className="col-span-12 lg:col-span-8">
          <MaskLines text={beforeAfter.title} className="text-h2" as="h2" />
        </div>
        <Wipe className="col-span-12 mt-12">
          <div
            ref={ref}
            className={`relative mx-auto h-[380px] max-w-[1120px] border border-border-strong ${marksClass}`}
          >
            <span className="marks-bl" />
            <span className="marks-br" />
            <div className="absolute inset-0 bg-card p-8">
              <p className="font-mono text-[15px] text-muted-foreground">{beforeAfter.beforeLabel}</p>
              <ul className="mt-6 space-y-2 font-mono text-[15px]">
                {beforeAfter.beforeLines.map((line) => (
                  <li key={line}>&gt; {line}</li>
                ))}
              </ul>
              <p className="absolute bottom-8 left-8 font-mono text-[15px]">{beforeAfter.beforeFoot}</p>
            </div>
            <div
              className="absolute inset-0 bg-accent text-accent-foreground"
              style={{ clipPath: `inset(0 0 0 ${split}%)` }}
            >
              <div className="p-8">
                <p className="font-mono text-[15px]">{beforeAfter.afterLabel}</p>
                <div className="mt-6 border border-foreground p-3 font-mono text-[14px]">
                  {beforeAfter.afterQuestion}
                </div>
                <div className="mt-6 h-[180px]">
                  <BarChart width={400} height={180} data={chartData}>
                    <XAxis dataKey="q" hide />
                    <YAxis hide />
                    <Bar dataKey="v" fill="var(--foreground)" radius={[0, 0, 0, 0]} isAnimationActive={false} />
                  </BarChart>
                </div>
                <p className="mt-4 font-mono text-[15px]">{beforeAfter.afterFoot}</p>
              </div>
            </div>
            <div
              role="slider"
              aria-label={beforeAfter.sliderLabel}
              aria-valuenow={split}
              tabIndex={0}
              className="absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-ew-resize items-center justify-center border border-border-strong bg-background font-mono text-[12px]"
              style={{ left: `calc(${split}% - 20px)` }}
              onPointerDown={() => {
                dragging.current = true;
                setInvited(true);
              }}
              onPointerUp={() => {
                dragging.current = false;
              }}
              onPointerMove={(e) => {
                if (!dragging.current) return;
                const rect = e.currentTarget.parentElement?.getBoundingClientRect();
                if (!rect) return;
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                setSplit(Math.min(85, Math.max(15, x)));
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") setSplit((s) => Math.max(15, s - 5));
                if (e.key === "ArrowRight") setSplit((s) => Math.min(85, s + 5));
              }}
            >
              &lt; &gt;
            </div>
          </div>
        </Wipe>
      </div>
    </section>
  );
}
