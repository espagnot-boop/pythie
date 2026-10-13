"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { nav } from "@/content/en";
import { Logo } from "@/components/landing/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "@/components/icons";
import { ThemeToggle } from "@/components/landing/theme-toggle";
import { MaskLines } from "@/components/motion/mask-lines";

const links = [
  { href: "#fonctionnement", label: nav.fonctionnement },
  { href: "#usages", label: nav.usages },
  { href: "#tarifs", label: nav.tarifs },
  { href: "#faq", label: nav.faq },
];

export function NavBar() {
  const { scrollY } = useScroll();
  const heightMv = useTransform(scrollY, [0, 120], [60, 48]);
  const logoSizeMv = useTransform(scrollY, [0, 120], [22, 18]);
  const [height, setHeight] = useState(60);
  const [logoSize, setLogoSize] = useState(22);

  useMotionValueEvent(heightMv, "change", setHeight);
  useMotionValueEvent(logoSizeMv, "change", setLogoSize);

  return (
    <>
      <motion.header
        className="fixed left-0 right-0 top-0 z-40 border-b border-border bg-background"
        style={{ height }}
      >
        <div className="mx-auto flex h-full max-w-[1120px] items-center justify-between px-5 lg:px-8">
          <Logo size={logoSize} />
          <nav className="hidden items-center gap-8 md:flex" aria-label="navigation principale">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="link-hover font-mono text-[14px]">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" className="hidden sm:inline-flex" asChild>
              <Link href="/app">{nav.login}</Link>
            </Button>
            <Button className="hidden sm:inline-flex" asChild>
              <Link href="/app">{nav.try}</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" aria-label={nav.menu}>
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="mt-16 space-y-6">
                  {links.map((l) => (
                    <Link key={l.href} href={l.href} className="block text-display">
                      <MaskLines text={l.label} as="h2" immediate />
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>
      <div style={{ height }} aria-hidden />
    </>
  );
}
