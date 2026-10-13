"use client";

import { waitlist } from "@/content/en";
import { MaskLines } from "@/components/motion/mask-lines";
import { WaitlistForm } from "@/components/landing/waitlist-form";
import { SectionIconWaitlist } from "@/components/landing/section-icons";

export function WaitlistSection() {
  return (
    <section id="attente" className="section-pad border-b border-border">
      <div className="grid-cols-12">
        <div className="col-span-12 flex items-start gap-4 lg:col-span-8">
          <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-border-strong bg-background">
            <SectionIconWaitlist className="text-foreground" />
          </span>
          <MaskLines text={waitlist.title} className="text-h2" as="h2" />
        </div>
        <div className="col-span-12 mt-12 max-w-xl">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
