"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { hero } from "@/content/en";
import { Badge } from "@/components/ui/badge";
import { MaskLines } from "@/components/motion/mask-lines";
import { Wipe } from "@/components/motion/wipe";
import { ChatBar } from "@/components/landing/chat-bar";
import { HeroDemo } from "@/components/landing/hero-demo";
import { dur, ease, stagger } from "@/lib/motion";

export function Hero() {
  const [time, setTime] = useState("");
  const [badgeText, setBadgeText] = useState("");
  const [showHighlight, setShowHighlight] = useState(false);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let i = 0;
    const chars = hero.badge;
    const type = () => {
      if (i <= chars.length) {
        setBadgeText(chars.slice(0, i));
        i += 1;
        setTimeout(type, 20);
      }
    };
    const start = setTimeout(type, 300);
    return () => clearTimeout(start);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setShowHighlight(true), 1000);
    return () => clearTimeout(t);
  }, []);

  const titleLines = hero.title.split("\n");
  const line3 = titleLines[2] ?? "";
  const beforeHighlight = line3.replace(hero.highlightWord, "").trim();
  const hasHighlight = line3.includes(hero.highlightWord);

  return (
    <section id="hero" className="relative min-h-[88svh] border-b border-border pt-6">
      <HeroGrid />
      <div className="grid-cols-12 relative z-10">
        <div className="col-span-12 lg:col-span-9">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Badge variant="accent">
              {badgeText}
              <span className="block-cursor ml-0.5" />
            </Badge>
            <p
              className="inline-flex w-fit items-center gap-2 border border-[oklch(1_0_0/10%)] px-2.5 py-1 font-mono text-[12px] tabular-nums text-[oklch(0.708_0_0)]"
            >
              <span
                className="size-1.5 shrink-0 bg-accent"
                title="EU-aligned"
                aria-hidden
              />
              {hero.europeAnchor}
            </p>
          </div>
          <MaskLines
            text={`${titleLines[0]}\n${titleLines[1]}`}
            className="text-display"
            as="h1"
            immediate
          />
          {hasHighlight && (
            <h1 className="text-display">
              <span className="inline-block overflow-hidden pb-[0.08em]">
                <motion.span
                  className="inline-block"
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: dur.reveal, ease: ease.out, delay: stagger.base * 2 }}
                >
                  {beforeHighlight}{" "}
                  <span className="relative inline-block">
                    <motion.span
                      className="absolute inset-0 -mx-[0.06em] bg-accent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: showHighlight ? 1 : 0 }}
                      style={{ transformOrigin: "left" }}
                      transition={{ duration: 0.4, ease: ease.out }}
                    />
                    <span className="relative z-10 mix-blend-normal text-accent-foreground">
                      {hero.highlightWord}
                    </span>
                  </span>
                </motion.span>
              </span>
            </h1>
          )}
          <Wipe className="mt-8 max-w-[520px]">
            <p className="text-body">{hero.paragraph}</p>
          </Wipe>
          <div className="mt-10 lg:col-span-10">
            <ChatBar />
          </div>
          <p className="mt-4 font-mono text-[13px] text-muted-foreground">{hero.footnote}</p>
          <HeroDemo />
        </div>
      </div>
      <p className="absolute bottom-6 left-6 z-10 font-mono text-[12px] text-muted-foreground">
        {hero.localTimePrefix} {time}
      </p>
    </section>
  );
}

function HeroGrid() {
  return (
    <div
      className="pointer-events-none absolute inset-0 mx-auto max-w-[1280px] px-6 lg:px-12"
      aria-hidden
    >
      <div className="grid h-full grid-cols-12 gap-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="border-l border-[var(--grid)]"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            style={{ transformOrigin: "top" }}
            transition={{ duration: 0.6, ease: ease.out, delay: i * 0.04 }}
          />
        ))}
      </div>
    </div>
  );
}
