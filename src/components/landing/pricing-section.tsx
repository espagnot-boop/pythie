"use client";

import { useState } from "react";
import { pricing } from "@/content/en";
import { MaskLines } from "@/components/motion/mask-lines";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wipe } from "@/components/motion/wipe";
import { DrawBorder } from "@/components/motion/draw-border";
import { Odometer } from "@/components/motion/odometer";
import { useMarksInView } from "@/hooks/use-marks-in-view";
import { SectionIconCheck } from "@/components/landing/section-icons";

export function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="tarifs" className="section-pad border-b border-border">
      <div className="grid-cols-12">
        <MaskLines text={pricing.title} className="col-span-12 text-h2" as="h2" />
        <div className="col-span-12 mt-8 flex border border-border-strong p-1">
          <button
            type="button"
            className={`relative flex-1 py-2 font-mono text-[14px] ${!yearly ? "bg-accent text-accent-foreground" : ""}`}
            onClick={() => setYearly(false)}
          >
            {pricing.monthly}
          </button>
          <button
            type="button"
            className={`relative flex-1 py-2 font-mono text-[14px] ${yearly ? "bg-accent text-accent-foreground" : ""}`}
            onClick={() => setYearly(true)}
          >
            {pricing.yearly}
          </button>
        </div>
        <div className="col-span-12 mt-12 grid gap-6 lg:grid-cols-3">
          {pricing.plans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} yearly={yearly} delay={i * 0.07} />
          ))}
        </div>
        <p className="col-span-12 mt-8 font-mono text-[13px] text-muted-foreground">{pricing.footnote}</p>
      </div>
    </section>
  );
}

function PlanCard({
  plan,
  yearly,
  delay,
}: {
  plan: (typeof pricing.plans)[number];
  yearly: boolean;
  delay: number;
}) {
  const price = yearly ? plan.priceYearly : plan.priceMonthly;
  const { ref, className } = useMarksInView<HTMLDivElement>();
  const displayPrice =
    price === 0
      ? "0"
      : price.toLocaleString("en-US", {
          minimumFractionDigits: price % 1 ? 2 : 0,
          maximumFractionDigits: 2,
        });

  return (
    <Wipe from="bottom" delay={delay}>
      <div
        ref={ref}
        className={`relative flex h-full flex-col border p-6 hard-hover ${plan.recommended ? "border-accent" : "border-border"} ${className}`}
      >
        <span className="marks-bl" />
        <span className="marks-br" />
        {plan.recommended && <DrawBorder beam />}
        {plan.badge && <Badge variant="accent" className="mb-4 w-fit">{plan.badge}</Badge>}
        <h3 className="text-h3">{plan.name}</h3>
        <p className="mt-4 font-mono text-[28px] tabular-nums leading-none">
          <Odometer value={displayPrice} />
          <span className="text-[16px]"> /mo</span>
        </p>
        <p className="mt-2 font-mono text-[12px] text-muted-foreground">
          {yearly ? pricing.billedYearly : pricing.billedMonthly}
        </p>
        <p className="mt-4 text-body-sm">{plan.desc}</p>
        <ul className="mt-6 flex-1 space-y-3 text-body-sm">
          {plan.features.map((f) => (
            <li key={f} className="flex gap-2.5">
              <SectionIconCheck className="mt-0.5 shrink-0 text-accent" />
              {f}
            </li>
          ))}
        </ul>
        <Button variant={plan.variant} className="mt-8 w-full">
          {plan.cta}
        </Button>
      </div>
    </Wipe>
  );
}
