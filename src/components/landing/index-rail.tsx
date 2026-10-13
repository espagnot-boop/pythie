"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { rail } from "@/content/en";
import { dur, ease } from "@/lib/motion";

export function IndexRail() {
  const [active, setActive] = useState(rail[0]?.id ?? "hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    rail.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) setActive(id);
        },
        { threshold: 0.5 },
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className="fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 min-[1280px]:block"
      aria-label="sections"
    >
      <ul className="space-y-3 font-mono text-[12px] text-muted-foreground">
        {rail.map((item) => (
          <li key={item.id} className="group relative flex items-center gap-2">
            {active === item.id && (
              <motion.span
                layoutId="rail-marker"
                className="inline-block h-[6px] w-[6px] bg-accent"
                transition={{ duration: dur.mid, ease: ease.snap }}
              />
            )}
            {active !== item.id && <span className="inline-block h-[6px] w-[6px]" />}
            <button
              type="button"
              className="lowercase hover:text-foreground"
              onClick={() => {
                document.getElementById(item.id)?.scrollIntoView({ behavior: "auto" });
              }}
            >
              {item.index}
            </button>
            <span className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap group-hover:block">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
