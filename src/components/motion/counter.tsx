"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { inView as inViewConfig } from "@/lib/motion";

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

type CounterProps = {
  value: number;
  duration?: number;
  decimals?: number;
  className?: string;
};

export function Counter({
  value,
  duration = 1200,
  decimals = 0,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: inViewConfig.once, margin: inViewConfig.margin });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(() => (reduced ? value : 0));
  const started = useRef(false);

  useEffect(() => {
    if (!visible || reduced || started.current) return;
    started.current = true;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setDisplay(value * easeOutExpo(t));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, value, duration, reduced]);

  const formatted = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(reduced ? value : display);

  return (
    <span ref={ref} className={className}>
      {formatted}
    </span>
  );
}
