"use client";

import type { ReactNode } from "react";
import { trust } from "@/content/en";
import { MaskLines } from "@/components/motion/mask-lines";
import { Wipe } from "@/components/motion/wipe";
import { DrawBorder } from "@/components/motion/draw-border";
import { useMarksInView } from "@/hooks/use-marks-in-view";
import { EuropeShieldIcon } from "@/components/icons/europe-shield";

function TrustCard({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon?: ReactNode;
}) {
  const { ref, className } = useMarksInView<HTMLDivElement>();
  return (
    <Wipe from="top">
      <div ref={ref} className={`relative min-h-[220px] border border-border p-5 ${className}`}>
        <span className="marks-bl" />
        <span className="marks-br" />
        <DrawBorder />
        <div className="mb-6 flex h-8 w-8 items-center justify-center border border-border-strong text-foreground">
          {icon ?? <span className="block h-3 w-3 border border-border-strong" aria-hidden />}
        </div>
        <h3 className="text-h3">{title}</h3>
        <p className="mt-4 text-body-sm">{body}</p>
      </div>
    </Wipe>
  );
}

function cardIcon(icon?: string) {
  if (icon === "europe") {
    return <EuropeShieldIcon className="h-[18px] w-[18px]" />;
  }
  return undefined;
}

export function TrustSection() {
  return (
    <section id="confiance" className="section-pad border-b border-border">
      <div className="grid-cols-12">
        <MaskLines text={trust.title} className="col-span-12 text-h2 lg:col-span-6" as="h2" />
        <div className="col-span-12 mt-12 grid gap-6 lg:grid-cols-3">
          {trust.cards.map((c) => (
            <TrustCard
              key={c.title}
              title={c.title}
              body={c.body}
              icon={cardIcon(c.icon)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
