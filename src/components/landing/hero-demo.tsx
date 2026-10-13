"use client";

import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { scenarios, defaultScenarioId } from "@/lib/scenarios";
import { hero } from "@/content/en";
import { Wipe } from "@/components/motion/wipe";
import { useMarksInView } from "@/hooks/use-marks-in-view";

export function HeroDemo() {
  const [activeId, setActiveId] = useState(defaultScenarioId);
  const scenario = scenarios[activeId] ?? scenarios[defaultScenarioId]!;
  const { ref, className: marksClass } = useMarksInView<HTMLDivElement>();

  useEffect(() => {
    const onChip = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail && scenarios[detail]) setActiveId(detail);
    };
    window.addEventListener("pythie-chip", onChip);
    return () => window.removeEventListener("pythie-chip", onChip);
  }, []);

  return (
    <Wipe className="mt-10">
      <div ref={ref} className={`border border-border bg-card p-4 ${marksClass}`}>
        <span className="marks-bl" />
        <span className="marks-br" />
        <p className="font-mono text-[13px] text-muted-foreground">{scenario.question}</p>
        <p className="mt-4 text-body-sm">{scenario.answer}</p>
        <div className="mt-6 h-[200px] w-full">
          <BarChart data={scenario.chart} width={600} height={200}>
            <CartesianGrid strokeDasharray="2 4" vertical={false} stroke="var(--border)" />
            <XAxis dataKey="label" tick={{ fontSize: 12, fontFamily: "var(--font-mono)" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12, fontFamily: "var(--font-mono)" }} axisLine={false} tickLine={false} width={40} />
            <Bar dataKey="value" fill="var(--chart-2)" radius={[0, 0, 0, 0]} isAnimationActive={false} />
          </BarChart>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {hero.chips.map((chip) => (
          <button
            key={chip.id}
            type="button"
            className="h-9 border border-border px-3 font-mono text-[13px] transition-[background-color,color] duration-80 hover:bg-foreground hover:text-background"
            onClick={() => {
              window.dispatchEvent(new CustomEvent("pythie-chip", { detail: chip.id }));
              window.dispatchEvent(
                new CustomEvent("pythie-type-question", { detail: scenarios[chip.id]?.question }),
              );
            }}
          >
            {chip.label}
          </button>
        ))}
      </div>
    </Wipe>
  );
}
