"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { dur, ease, inView as inViewConfig } from "@/lib/motion";

type DrawBorderProps = {
  className?: string;
  beam?: boolean;
};

export function DrawBorder({ className, beam = false }: DrawBorderProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const visible = useInView(wrapRef, { once: inViewConfig.once, margin: inViewConfig.margin });
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = wrapRef.current?.parentElement;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      if (!entry) return;
      const { width, height } = entry.contentRect;
      setSize({ w: Math.floor(width), h: Math.floor(height) });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  if (reduced) return null;

  return (
    <div ref={wrapRef} className={`pointer-events-none absolute inset-0 ${className ?? ""}`}>
      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        width={size.w}
        height={size.h}
      >
        <motion.rect
          x={0.5}
          y={0.5}
          width={Math.max(0, size.w - 1)}
          height={Math.max(0, size.h - 1)}
          fill="none"
          stroke="var(--border-strong)"
          strokeWidth={1}
          pathLength={100}
          strokeDasharray="100"
          initial={{ strokeDashoffset: 100 }}
          animate={visible ? { strokeDashoffset: 0 } : { strokeDashoffset: 100 }}
          transition={{ duration: dur.draw, ease: ease.inOut }}
        />
        {beam && visible && (
          <motion.rect
            x={0.5}
            y={0.5}
            width={Math.max(0, size.w - 1)}
            height={Math.max(0, size.h - 1)}
            fill="none"
            stroke="var(--accent)"
            strokeWidth={2}
            pathLength={100}
            strokeDasharray="6 94"
            animate={{ strokeDashoffset: [0, -100] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        )}
      </svg>
    </div>
  );
}
