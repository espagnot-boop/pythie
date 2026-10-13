"use client";

import Link from "next/link";
import { footer, site } from "@/content/en";
import { motion } from "motion/react";
import { dur, ease, inView } from "@/lib/motion";

export function Footer() {
  const letters = site.name.split("");
  return (
    <footer className="relative border-t border-border pt-24 pb-0">
      <div className="grid-cols-12 pb-24">
        <div className="col-span-6 md:col-span-3">
          <p className="font-mono text-[14px] text-muted-foreground">{footer.product}</p>
          <ul className="mt-4 space-y-2 font-mono text-[14px]">
            {footer.productLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-hover">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-6 mt-8 md:col-span-3 md:mt-0">
          <p className="font-mono text-[14px] text-muted-foreground">{footer.resources}</p>
          <ul className="mt-4 space-y-2 font-mono text-[14px]">
            {footer.resourceLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="link-hover">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-6 mt-8 md:col-span-3 md:mt-0">
          <p className="font-mono text-[14px] text-muted-foreground">{footer.legal}</p>
          <ul className="mt-4 space-y-2 font-mono text-[14px]">
            {footer.legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-hover">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-6 mt-8 md:col-span-3 md:mt-0">
          <p className="font-mono text-[14px] text-muted-foreground">{footer.contact}</p>
          <a href={`mailto:${site.contactEmail}`} className="mt-4 block link-hover font-mono text-[14px]">
            {site.contactEmail}
          </a>
        </div>
      </div>
      <div className="space-y-2 px-6 pb-4 lg:px-12">
        <p className="font-mono text-[12px] text-[oklch(0.708_0_0)]">{footer.europeHosting}</p>
        <p className="font-mono text-[12px] text-muted-foreground">{footer.madeIn}</p>
      </div>
      <div className="overflow-hidden px-6 lg:px-12">
        <div className="flex">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              className="inline-block overflow-hidden font-semibold text-[18vw] leading-[0.85] text-foreground"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={inView}
              transition={{ duration: dur.reveal, ease: ease.out, delay: i * 0.09 }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>
    </footer>
  );
}
