"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { site } from "@/content/en";

export function Logo({ size = 24 }: { size?: number }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const pupilRef = useRef<HTMLDivElement>(null);
  const blinkRef = useRef(false);
  const isTouch = typeof window !== "undefined" && "ontouchstart" in window;

  useEffect(() => {
    const scheduleBlink = () => {
      const delay = 6000 + Math.random() * 3000;
      return window.setTimeout(() => {
        blinkRef.current = true;
        window.setTimeout(() => {
          blinkRef.current = false;
        }, 120);
        scheduleBlink();
      }, delay);
    };
    const id = scheduleBlink();
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const box = boxRef.current;
      const pupil = pupilRef.current;
      if (!box || !pupil) return;
      const rect = box.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      const max = Math.min(4, dist / 40);
      const angle = Math.atan2(dy, dx);
      const tx = Math.cos(angle) * max;
      const ty = Math.sin(angle) * max + (isTouch ? 2 : 0);
      pupil.style.transform = `translate(${tx}px, ${ty}px) scaleY(${blinkRef.current ? 0.15 : 1})`;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [isTouch]);

  const s = size;
  const inner = Math.round(s * (8 / 24));

  return (
    <Link href="/" className="inline-flex items-center gap-2">
      <div
        ref={boxRef}
        className="relative border border-border-strong bg-background"
        style={{ width: s, height: s }}
      >
        <div
          ref={pupilRef}
          className="absolute left-1/2 top-1/2 bg-accent"
          style={{
            width: inner,
            height: inner,
            marginLeft: -inner / 2,
            marginTop: -inner / 2,
            transition: "transform 120ms steps(1)",
          }}
        />
      </div>
      <span className="font-semibold text-[17px] tracking-tight">{site.name}</span>
    </Link>
  );
}
