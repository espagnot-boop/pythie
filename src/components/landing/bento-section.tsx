"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { bento } from "@/content/en";
import { MaskLines } from "@/components/motion/mask-lines";
import { Wipe } from "@/components/motion/wipe";
import { Counter } from "@/components/motion/counter";
import { useMarksInView } from "@/hooks/use-marks-in-view";
import { dur, ease, inView as inViewConfig } from "@/lib/motion";

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
        <div className="col-span-12 mt-10 grid gap-5 lg:grid-cols-12">
          <BentoShell className="lg:col-span-7 lg:min-h-[300px]" title={c0.title} body={c0.body}>
            <LivePriceChart />
          </BentoShell>
          <BentoShell className="lg:col-span-5 lg:min-h-[300px]" title={c1.title} body={c1.body}>
            <ShrinkflationVisual />
          </BentoShell>
          <BentoShell className="lg:col-span-4 lg:min-h-[300px]" title={c2.title} body={c2.body}>
            <CompetitorTable />
          </BentoShell>
          <BentoShell className="lg:col-span-4 lg:min-h-[300px]" title={c3.title} body={c3.body}>
            <MarketBars />
          </BentoShell>
          <BentoShell className="lg:col-span-4 lg:min-h-[300px]" title={c4.title} body={c4.body}>
            <AlertStack />
          </BentoShell>
          <BentoShell className="lg:col-span-12 lg:min-h-[220px]" title={c5.title} body={c5.body}>
            <ExportRow />
          </BentoShell>
        </div>
      </div>
    </section>
  );
}

function BentoShell({
  title,
  body,
  className,
  children,
}: {
  title: string;
  body: string;
  className?: string;
  children: React.ReactNode;
}) {
  const { ref, className: marks } = useMarksInView<HTMLDivElement>();
  return (
    <Wipe from="top">
      <div
        ref={ref}
        className={`relative flex flex-col border border-border bg-card p-5 ${marks} ${className ?? ""}`}
      >
        <span className="marks-bl" />
        <span className="marks-br" />
        <h3 className="text-h3">{title}</h3>
        <p className="mt-2 max-w-prose text-body-sm">{body}</p>
        <div className="mt-5 flex-1">{children}</div>
      </div>
    </Wipe>
  );
}

function LivePriceChart() {
  const ref = useRef<SVGSVGElement>(null);
  const visible = useInView(ref, { once: true, margin: inViewConfig.margin });
  const points = [12, 18, 16, 22, 20, 28, 26, 32, 30, 36, 34, 40, 38, 44, 42, 48, 46, 52, 50, 56, 54, 58, 56, 60];
  const w = 320;
  const h = 100;
  const pad = 4;
  const coords = points.map((y, i) => {
    const x = pad + (i / (points.length - 1)) * (w - pad * 2);
    const yy = h - pad - (y / 60) * (h - pad * 2);
    return `${x},${yy}`;
  });
  const polyline = coords.join(" ");
  const last = coords[coords.length - 1]?.split(",") ?? ["0", "0"];

  return (
    <div className="relative border border-border bg-background p-3">
      <span className="font-mono text-[11px] text-muted-foreground">{bento.exampleTag}</span>
      <svg ref={ref} viewBox={`0 0 ${w} ${h}`} className="mt-2 h-[100px] w-full">
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1={pad}
            y1={pad + (i * (h - pad * 2)) / 3}
            x2={w - pad}
            y2={pad + (i * (h - pad * 2)) / 3}
            stroke="var(--border)"
            strokeWidth={1}
            strokeDasharray="2 4"
          />
        ))}
        <motion.polyline
          fill="none"
          stroke="var(--chart-2)"
          strokeWidth={2}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          points={polyline}
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: dur.slow, ease: ease.out }}
        />
        {visible && (
          <rect
            x={Number(last[0]) - 4}
            y={Number(last[1]) - 4}
            width={8}
            height={8}
            fill="var(--chart-2)"
          />
        )}
      </svg>
    </div>
  );
}

function ShrinkflationVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: true, margin: inViewConfig.margin });

  return (
    <div ref={ref} className="space-y-3 font-mono text-[12px]">
      <div className="grid grid-cols-2 gap-3">
        <div className="border border-border bg-background p-3">
          <p className="text-muted-foreground">Before</p>
          <p className="mt-2 text-[15px]">{bento.shrinkBefore}</p>
          <div className="mt-3 h-10 w-full bg-muted" />
        </div>
        <div className="border border-border-strong bg-background p-3">
          <p className="text-muted-foreground">After</p>
          <p className="mt-2 text-[15px]">
            <Counter value={270} duration={800} /> g
          </p>
          <motion.div
            className="mt-3 h-10 bg-muted"
            initial={{ width: "100%" }}
            animate={visible ? { width: "90%" } : { width: "100%" }}
            transition={{ duration: 0.8, ease: ease.inOut }}
          />
        </div>
      </div>
      <div className="flex items-center justify-between border border-border px-3 py-2">
        <span>Price</span>
        <span className="tabular-nums">{bento.shrinkPrice}</span>
      </div>
      <div className="flex items-center justify-between border border-border px-3 py-2">
        <span>Per kg</span>
        <span className="tabular-nums">
          {bento.shrinkPerKgBefore} → {bento.shrinkPerKgAfter}
        </span>
      </div>
      <p className="inline-block border border-border-strong bg-accent px-2 py-0.5 text-accent-foreground">
        {bento.shrinkDelta}
      </p>
    </div>
  );
}

const competitorRows = [
  { name: "SKU A", price: "$24.00", newPrice: "$26.50" },
  { name: "SKU B", price: "$12.00", newPrice: "$12.00" },
  { name: "SKU C", price: "$8.40", newPrice: "$9.10" },
  { name: "SKU D", price: "$31.00", newPrice: "$31.00" },
];

function CompetitorTable() {
  const [highlight, setHighlight] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setHighlight((h) => (h + 1) % competitorRows.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="overflow-hidden border border-border font-mono text-[12px]">
      <div className="grid grid-cols-[1fr_auto_auto] gap-2 border-b border-border bg-muted px-3 py-2 text-muted-foreground">
        <span>Item</span>
        <span>Was</span>
        <span>Now</span>
      </div>
      {competitorRows.map((row, i) => {
        const changed = row.price !== row.newPrice;
        const active = highlight === i && changed;
        return (
          <div
            key={row.name}
            className={`grid grid-cols-[1fr_auto_auto] gap-2 border-b border-border px-3 py-2 last:border-0 ${active ? "border-l-2 border-l-accent bg-accent/15" : ""}`}
          >
            <span>{row.name}</span>
            <span className={active ? "line-through opacity-50" : ""}>{row.price}</span>
            <span className="tabular-nums">{row.newPrice}</span>
          </div>
        );
      })}
    </div>
  );
}

const marketData = [
  { label: "Vendor A", value: 92 },
  { label: "Vendor B", value: 74 },
  { label: "Vendor C", value: 58 },
  { label: "Vendor D", value: 41 },
  { label: "Vendor E", value: 28 },
  { label: "Vendor F", value: 19 },
];

function MarketBars() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: true, margin: inViewConfig.margin });

  return (
    <div ref={ref} className="space-y-2">
      {marketData.map((row, i) => (
        <div key={row.label} className="flex items-center gap-2">
          <span className="w-16 shrink-0 font-mono text-[11px] text-muted-foreground">{row.label}</span>
          <div className="relative h-4 flex-1 bg-muted">
            <motion.div
              className="absolute inset-y-0 left-0 bg-chart-2"
              initial={{ scaleX: 0 }}
              animate={visible ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.5, ease: ease.out, delay: i * 0.07 }}
              style={{ width: `${row.value}%`, transformOrigin: "left" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function AlertStack() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    let count = 0;
    const tick = () => {
      count = (count + 1) % (bento.alerts.length + 1);
      setShown(count);
    };
    const id = setInterval(tick, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative min-h-[148px]">
      {bento.alerts.map((text, i) => (
        <motion.div
          key={text}
          className="absolute left-0 right-0 border border-border-strong bg-background px-3 py-2 font-mono text-[12px]"
          initial={false}
          animate={
            i < shown
              ? { opacity: 1, x: 0, y: i * 36 }
              : { opacity: 0, x: 20, y: i * 8 }
          }
          transition={{ duration: dur.mid, ease: ease.out }}
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
}

function ExportRow() {
  const [typed, setTyped] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: true, margin: inViewConfig.margin });

  useEffect(() => {
    if (!visible) return;
    let i = 0;
    const code = bento.exportCode;
    const tick = () => {
      if (i <= code.length) {
        setTyped(code.slice(0, i));
        i++;
        setTimeout(tick, 22);
      }
    };
    tick();
  }, [visible]);

  return (
    <div ref={ref} className="flex flex-col gap-4 sm:flex-row sm:items-stretch">
      <div className="flex shrink-0 flex-wrap gap-2 sm:w-[280px]">
        {bento.exportTiles.map((t) => (
          <div
            key={t}
            className="flex h-16 w-16 items-center justify-center border border-border bg-background font-mono text-[12px] transition-[background-color,color] duration-100 hover:bg-accent hover:text-accent-foreground"
          >
            {t}
          </div>
        ))}
      </div>
      <div className="flex min-h-[64px] flex-1 items-center border border-border-strong bg-background px-4 font-mono text-[13px]">
        <code>
          {typed}
          <span className="block-cursor" />
        </code>
      </div>
    </div>
  );
}
