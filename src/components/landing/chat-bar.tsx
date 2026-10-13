"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { hero } from "@/content/en";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "@/components/icons";
import { useMarksInView } from "@/hooks/use-marks-in-view";
import { DrawBorder } from "@/components/motion/draw-border";
import { LoaderSquares } from "@/components/ui/button";

type ChatBarProps = {
  placeholderCycle?: boolean;
  accentFrame?: boolean;
  submitLabel?: string;
  className?: string;
};

export function ChatBar({
  placeholderCycle = true,
  accentFrame = false,
  submitLabel = hero.sendLabel,
  className,
}: ChatBarProps) {
  const router = useRouter();
  const { ref, className: marksClass } = useMarksInView<HTMLDivElement>();
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [typed, setTyped] = useState("");
  const phIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);
  const pause = useRef(false);
  const timer = useRef<number | undefined>(undefined);

  const placeholders = hero.placeholders;
  const showAnim = placeholderCycle && !focused && value.length === 0;

  useEffect(() => {
    if (!showAnim) return;

    const tick = () => {
      const current = placeholders[phIndex.current] ?? "";
      if (pause.current) return;

      if (!deleting.current) {
        if (charIndex.current < current.length) {
          const jitter = 28 + (Math.random() * 20 - 10);
          setTyped(current.slice(0, charIndex.current + 1));
          charIndex.current += 1;
          timer.current = window.setTimeout(tick, jitter);
          return;
        }
        timer.current = window.setTimeout(() => {
          deleting.current = true;
          tick();
        }, 2200);
        return;
      }

      if (charIndex.current > 0) {
        charIndex.current -= 1;
        setTyped(current.slice(0, charIndex.current));
        timer.current = window.setTimeout(tick, 12);
        return;
      }
      deleting.current = false;
      phIndex.current = (phIndex.current + 1) % placeholders.length;
      pause.current = true;
      timer.current = window.setTimeout(() => {
        pause.current = false;
        tick();
      }, 300);
    };

    tick();
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [showAnim, placeholders]);

  const submit = async () => {
    const q = value.trim();
    if (!q) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 400));
    router.push(`/app?q=${encodeURIComponent(q)}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void submit();
    }
  };

  const showPlaceholder = !value && !focused;

  return (
    <div
      ref={ref}
      className={`relative border ${accentFrame ? "border-foreground" : "border-border-strong"} ${marksClass} ${focused ? "hard-hover -translate-x-1 -translate-y-1 shadow-[4px_4px_0_0_var(--accent)]" : ""} ${className ?? ""}`}
    >
      <span className="marks-bl" />
      <span className="marks-br" />
      <DrawBorder />
      <div className="relative p-4 pb-14">
        <Textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={onKeyDown}
          aria-label="question"
          className="min-h-[88px]"
        />
        {showPlaceholder && showAnim && (
          <div
            className="pointer-events-none absolute left-4 top-4 text-[16px] text-muted-foreground"
            aria-hidden
          >
            {typed}
            <span className="block-cursor" />
          </div>
        )}
        <p className="absolute bottom-4 left-4 font-mono text-[12px] text-muted-foreground">
          {hero.chatHint}
        </p>
        <button
          type="button"
          onClick={() => void submit()}
          disabled={!value.trim() || loading}
          className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center border border-border-strong bg-accent text-accent-foreground hard-hover disabled:opacity-40"
          aria-label={submitLabel}
        >
          {loading ? <LoaderSquares /> : <Send />}
        </button>
      </div>
    </div>
  );
}
