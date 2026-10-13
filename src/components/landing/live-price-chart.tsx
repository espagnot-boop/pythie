"use client";

import { useMemo, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { bento } from "@/content/en";
import { livePriceMeta, livePriceSeries, livePriceStats } from "@/lib/live-price-series";
import { dur, ease, inView as inViewConfig } from "@/lib/motion";

type TooltipPayload = {
  payload?: { date: string; price: number };
};

function LivePriceTooltip({ active, payload }: { active?: boolean; payload?: TooltipPayload[] }) {
  if (!active || !payload?.[0]?.payload) return null;
  const { date, price } = payload[0].payload;
  return (
    <div className="border border-border-strong bg-background px-2.5 py-1.5 font-mono text-[11px] shadow-none">
      <p className="text-muted-foreground">{date}</p>
      <p className="tabular-nums text-foreground">
        {livePriceMeta.unit} {price.toLocaleString("en-GB")}
      </p>
    </div>
  );
}

export function LivePriceChart() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: true, margin: inViewConfig.margin });
  const stats = useMemo(() => livePriceStats(livePriceSeries), []);
  const changeLabel = `${stats.changePct >= 0 ? "+" : ""}${stats.changePct.toFixed(1)}%`;
  const changeUp = stats.changePct >= 0;

  const chartData = livePriceSeries.map((p) => ({
    ...p,
    date: p.date,
  }));

  return (
    <div ref={ref} className="border border-border bg-background">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border px-3 py-2">
        <div className="min-w-0">
          <p className="font-mono text-[11px] text-muted-foreground">{bento.exampleTag}</p>
          <p className="mt-0.5 truncate font-mono text-[12px]">{livePriceMeta.title}</p>
          <p className="mt-0.5 font-mono text-[10px] text-muted-foreground">{livePriceMeta.sources}</p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <span className="size-1.5 animate-pulse bg-accent" aria-hidden />
          <span className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
            {livePriceMeta.cadence}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-px border-b border-border bg-border font-mono text-[11px]">
        <div className="bg-background px-3 py-2">
          <p className="text-muted-foreground">Now</p>
          <p className="mt-1 tabular-nums text-[15px]">
            €{stats.current.toLocaleString("en-GB")}
          </p>
        </div>
        <div className="bg-background px-3 py-2">
          <p className="text-muted-foreground">30d</p>
          <p
            className={`mt-1 tabular-nums text-[15px] ${changeUp ? "text-foreground" : "text-muted-foreground"}`}
          >
            {changeLabel}
          </p>
        </div>
        <div className="bg-background px-3 py-2">
          <p className="text-muted-foreground">Range</p>
          <p className="mt-1 tabular-nums text-[12px] leading-tight">
            €{stats.low.toLocaleString("en-GB")}–{stats.high.toLocaleString("en-GB")}
          </p>
        </div>
      </div>

      <motion.div
        className="h-[168px] w-full px-1 pt-2 pb-1"
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: dur.slow, ease: ease.out }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="livePriceFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--chart-2)" stopOpacity={0.35} />
                <stop offset="100%" stopColor="var(--chart-2)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="2 4" vertical={false} stroke="var(--border)" />
            <XAxis
              dataKey="index"
              tickFormatter={(idx) => livePriceSeries[idx]?.axisLabel ?? ""}
              tick={{ fontSize: 10, fontFamily: "var(--font-mono)", fill: "var(--muted-foreground)" }}
              axisLine={false}
              tickLine={false}
              interval="preserveStartEnd"
              minTickGap={28}
            />
            <YAxis
              domain={["dataMin - 12", "dataMax + 12"]}
              tick={{ fontSize: 10, fontFamily: "var(--font-mono)", fill: "var(--muted-foreground)" }}
              axisLine={false}
              tickLine={false}
              width={44}
              tickFormatter={(v) => `€${Math.round(v / 10) * 10}`}
            />
            <Tooltip
              content={<LivePriceTooltip />}
              cursor={{ stroke: "var(--border-strong)", strokeWidth: 1, strokeDasharray: "3 3" }}
            />
            <Area
              type="monotone"
              dataKey="price"
              stroke="var(--chart-2)"
              strokeWidth={1.75}
              fill="url(#livePriceFill)"
              dot={false}
              activeDot={{ r: 3, fill: "var(--chart-2)", stroke: "var(--background)", strokeWidth: 2 }}
              isAnimationActive={visible}
              animationDuration={900}
              animationEasing="ease-out"
            />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>
      <p className="border-t border-border px-3 py-2 font-mono text-[10px] text-muted-foreground">
        {bento.livePriceFoot}
      </p>
    </div>
  );
}
