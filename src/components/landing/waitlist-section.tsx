"use client";

import { waitlist } from "@/content/en";
import { MaskLines } from "@/components/motion/mask-lines";
import { WaitlistForm } from "@/components/landing/waitlist-form";

export function WaitlistSection() {
  return (
    <section id="attente" className="section-pad border-b border-border">
      <div className="grid-cols-12">
        <MaskLines text={waitlist.title} className="col-span-12 text-h2 lg:col-span-8" as="h2" />
        <div className="col-span-12 mt-12 max-w-xl">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
