"use client";

import { useEffect, useRef, useState } from "react";
import { how } from "@/content/en";
import { MaskLines } from "@/components/motion/mask-lines";
import { Switch } from "@/components/ui/switch";
import { Bar, BarChart } from "recharts";

export function HowSection() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / (rect.height - window.innerHeight)));
      if (progress < 0.33) setActive(0);
      else if (progress < 0.66) setActive(1);
      else setActive(2);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="fonctionnement" ref={ref} className="section-pad border-b border-border lg:min-h-[300vh]">
      <div className="grid-cols-12">
        <div className="col-span-12 lg:col-span-5">
          <MaskLines text={how.title} className="text-h2" as="h2" />
          <div className="mt-16 hidden lg:sticky lg:top-[120px] lg:block space-y-8">
            {how.steps.map((step, i) => (
              <div
                key={step.index}
                className={`border-l-2 pl-4 transition-opacity duration-200 ${active === i ? "border-accent opacity-100" : "border-transparent opacity-35"}`}
              >
                <p className="font-mono text-[13px] text-muted-foreground">{step.index}</p>
                <h3 className="text-h3">{step.title}</h3>
                <p className="mt-2 text-body-sm">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 mt-12 lg:col-span-7 lg:mt-0">
          <div className="hidden h-[400px] border border-border bg-card p-5 lg:block">
            {active === 0 && <TypePanel />}
            {active === 1 && <LogPanel />}
            {active === 2 && <ChartPanel />}
          </div>
          <div className="space-y-12 lg:hidden">
            <TypePanel />
            <LogPanel />
            <ChartPanel />
          </div>
        </div>
      </div>
    </section>
  );
}

function TypePanel() {
  const [text, setText] = useState("");
  useEffect(() => {
    let i = 0;
    let del = false;
    const run = () => {
      if (!del) {
        if (i <= how.typeExample.length) {
          setText(how.typeExample.slice(0, i));
          i++;
          setTimeout(run, 30);
        } else {
          setTimeout(() => {
            del = true;
            run();
          }, 1200);
        }
      } else if (i > 0) {
        i--;
        setText(how.typeExample.slice(0, i));
        setTimeout(run, 15);
      } else {
        del = false;
        setTimeout(run, 400);
      }
    };
    run();
  }, []);
  return (
    <div className="relative h-full">
      <p className="font-mono text-[12px] text-muted-foreground">{how.exampleTag}</p>
      <p className="mt-6 text-[16px]">
        {text}
        <span className="block-cursor" />
      </p>
    </div>
  );
}

function LogPanel() {
  const [lines, setLines] = useState<string[]>([]);
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      if (i < how.logLines.length) {
        const line = how.logLines[i];
        if (line) setLines((l) => [...l, line]);
        i++;
      } else {
        setTimeout(() => {
          setLines([]);
          i = 0;
        }, 2000);
      }
    }, 350);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="h-full overflow-hidden font-mono text-[13px]">
      {lines.map((line) => (
        <p key={line} className="mb-2">
          {line} <span className="text-accent">[ok]</span>
        </p>
      ))}
    </div>
  );
}

function ChartPanel() {
  const data = [40, 55, 48, 62, 70, 58, 66].map((v, i) => ({ i: String(i), v }));
  const [alertOn, setAlertOn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setAlertOn(true), 1000);
    return () => clearTimeout(t);
  }, []);
  return (
    <div>
      <BarChart width={400} height={280} data={data}>
        <Bar dataKey="v" fill="var(--chart-2)" radius={[0, 0, 0, 0]} isAnimationActive={false} />
      </BarChart>
      <div className="mt-4 flex items-center gap-3 font-mono text-[13px]">
        {how.alertLine}
        <Switch checked={alertOn} disabled aria-label="alerte" />
      </div>
    </div>
  );
}
