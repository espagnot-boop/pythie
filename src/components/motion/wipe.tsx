"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { dur, ease, inView } from "@/lib/motion";

const clipFrom = {
  left: "inset(0 100% 0 0)",
  right: "inset(0 0 0 100%)",
  top: "inset(0 0 100% 0)",
  bottom: "inset(100% 0 0 0)",
} as const;

type WipeProps = {
  children: ReactNode;
  from?: keyof typeof clipFrom;
  className?: string;
  delay?: number;
};

export function Wipe({
  children,
  from = "left",
  className,
  delay = 0,
}: WipeProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ clipPath: clipFrom[from] }}
      whileInView={{ clipPath: "inset(0 0 0 0)" }}
      viewport={inView}
      transition={{ duration: dur.slow, ease: ease.out, delay }}
    >
      {children}
    </motion.div>
  );
}
