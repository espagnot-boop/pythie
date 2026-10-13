"use client";

import Link from "next/link";
import { footer, site } from "@/content/en";
import { XLogo } from "@/components/icons";
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
          <a
            href={footer.xUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 link-hover font-mono text-[14px]"
          >
            <XLogo className="size-4 shrink-0" />
            {footer.xHandle}
          </a>
        </div>
      </div>
      <div className="grid-cols-12 pb-4">
        <div className="col-span-12 space-y-2">
          <p className="font-mono text-[12px] text-[oklch(0.708_0_0)]">{footer.europeHosting}</p>
          <p className="font-mono text-[12px] text-muted-foreground">{footer.madeIn}</p>
          <a
            href={footer.xUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[12px] text-muted-foreground transition-colors hover:text-foreground"
          >
            <XLogo className="size-3.5 shrink-0" />
            <span className="link-hover">{footer.xHandle}</span>
          </a>
        </div>
      </div>
      <div className="grid-cols-12 overflow-hidden">
        <div className="col-span-12 flex">
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
