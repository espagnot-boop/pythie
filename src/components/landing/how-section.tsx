"use client";

import { useEffect, useRef, useState } from "react";
import { how } from "@/content/en";
import { MaskLines } from "@/components/motion/mask-lines";
import { Switch } from "@/components/ui/switch";
import { Bar, BarChart } from "recharts";
import { howStepIcons } from "@/components/landing/section-icons";

const STICKY_TOP = 72;

export function HowSection() {
  const [active, setActive] = useState(0);
  const triggersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const elements = triggersRef.current.filter(Boolean) as HTMLDivElement[];
    if (elements.length === 0) return;

    const observers = elements.map((el, index) => {
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) setActive(index);
        },
        {
          root: null,
          rootMargin: `-${STICKY_TOP + 80}px 0px -45% 0px`,
          threshold: 0,
        },
      );
      io.observe(el);
      return io;
    });

    return () => observers.forEach((io) => io.disconnect());
  }, []);

  return (
    <section id="fonctionnement" className="section-pad border-b border-border">
      <div className="grid-cols-12 lg:items-start">
        <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-[72px] lg:self-start">
          <MaskLines text={how.title} className="text-h2" as="h2" />
          <div className="mt-10 space-y-8">
            {how.steps.map((step, i) => {
              const StepIcon = howStepIcons[i];
              return (
              <div
                key={step.index}
                className={`border-l-2 pl-4 transition-opacity duration-200 ${active === i ? "border-accent opacity-100" : "border-transparent opacity-35"}`}
              >
                <div className="flex items-center gap-3">
                  {StepIcon && (
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-border bg-background">
                      <StepIcon className="text-foreground" />
                    </span>
                  )}
                  <p className="font-mono text-[13px] text-muted-foreground">{step.index}</p>
                </div>
                <h3 className="mt-2 text-h3">{step.title}</h3>
                <p className="mt-2 text-body-sm">{step.body}</p>
              </div>
            );
            })}
          </div>
        </div>

        <div className="col-span-12 mt-12 lg:col-span-7 lg:mt-0">
          <div className="hidden lg:block">
            <div
              className="sticky z-10 border border-border bg-card p-5"
              style={{ top: STICKY_TOP }}
            >
              <div className="h-[360px]">
                {active === 0 && <TypePanel />}
                {active === 1 && <LogPanel />}
                {active === 2 && <ChartPanel />}
              </div>
            </div>
            {how.steps.map((step, i) => (
              <div
                key={step.index}
                ref={(el) => {
                  triggersRef.current[i] = el;
                }}
                className="h-[85vh]"
                aria-hidden
              />
            ))}
          </div>

          <div className="space-y-8 lg:hidden">
            {how.steps.map((step, i) => (
              <div key={step.index}>
                <p className="mb-3 font-mono text-[13px] text-muted-foreground">{step.index}</p>
                <div className="min-h-[280px] border border-border bg-card p-5">
                  {i === 0 && <TypePanel />}
                  {i === 1 && <LogPanel />}
                  {i === 2 && <ChartPanel />}
                </div>
              </div>
            ))}
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
    let cancelled = false;
    const run = () => {
      if (cancelled) return;
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
    return () => {
      cancelled = true;
    };
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
  const data = [40, 55, 48, 62, 70, 58, 66].map((v, idx) => ({ i: String(idx), v }));
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
        <Switch checked={alertOn} disabled aria-label="Alert toggle" />
      </div>
    </div>
  );
}
