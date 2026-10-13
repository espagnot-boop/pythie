"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { dur, ease } from "@/lib/motion";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-border", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between py-6 text-left text-h3 transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        className,
      )}
      {...props}
    >
      {children}
      <span className="relative ml-4 h-4 w-4 shrink-0">
        <span className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-foreground transition-transform duration-200 ease-[cubic-bezier(0.2,0,0,1)] group-data-[state=open]:scale-y-0" />
        <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-foreground" />
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    forceMount
    className="overflow-hidden data-[state=closed]:h-0 data-[state=open]:h-auto"
    {...props}
  >
    <motion.div
      initial={false}
      className={cn("pb-6 text-body-sm", className)}
      transition={{ duration: dur.mid, ease: ease.inOut }}
    >
      {children}
    </motion.div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
