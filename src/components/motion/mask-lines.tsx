"use client";

import { motion, useReducedMotion } from "motion/react";
import { dur, ease, inView, stagger } from "@/lib/motion";

type MaskLinesProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2";
  immediate?: boolean;
};

export function MaskLines({
  text,
  className,
  as = "h1",
  immediate = false,
}: MaskLinesProps) {
  const reduced = useReducedMotion();
  const lines = text.split("\n");
  const Tag = as;

  if (reduced) {
    return (
      <Tag className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block"
            initial={{ y: immediate ? 0 : "105%" }}
            animate={{ y: 0 }}
            transition={{
              duration: dur.reveal,
              ease: ease.out,
              delay: immediate ? stagger.base * i : 0,
            }}
            {...(immediate
              ? {}
              : {
                  whileInView: { y: 0 },
                  viewport: inView,
                  initial: { y: "105%" },
                })}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
