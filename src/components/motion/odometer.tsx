"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { dur, ease, inView as inViewConfig } from "@/lib/motion";

type OdometerProps = {
  value: string;
  className?: string;
  delayPerColumn?: number;
};

export function Odometer({
  value,
  className,
  delayPerColumn = 0.08,
}: OdometerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: inViewConfig.once, margin: inViewConfig.margin });
  const reduced = useReducedMotion();
  const active = visible || reduced;

  const chars = value.split("");
  const digitIndices = chars
    .map((c, i) => (/[0-9]/.test(c) ? i : -1))
    .filter((i) => i >= 0);

  return (
    <span ref={ref} className={`tabular-nums inline-flex ${className ?? ""}`}>
      {chars.map((char, i) => {
        if (!/[0-9]/.test(char)) {
          return (
            <span key={i} className="inline-block">
              {char}
            </span>
          );
        }
        const digit = parseInt(char, 10);
        const colIndex = digitIndices.indexOf(i);
        const fromRight = digitIndices.length - 1 - colIndex;
        return (
          <span
            key={i}
            className="inline-block h-[1em] overflow-hidden leading-none"
            style={{ width: "0.6em" }}
          >
            <motion.span
              className="flex flex-col"
              initial={{ y: 0 }}
              animate={{ y: active ? `-${digit}em` : 0 }}
              transition={{
                duration: dur.reveal - 0.2,
                ease: ease.out,
                delay: active ? fromRight * delayPerColumn : 0,
              }}
            >
              {Array.from({ length: 10 }, (_, d) => (
                <span key={d} className="block h-[1em]">
                  {d}
                </span>
              ))}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
