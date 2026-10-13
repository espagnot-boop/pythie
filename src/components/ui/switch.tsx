"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-5 w-10 shrink-0 cursor-pointer items-center border border-border-strong bg-background transition-[background-color,border-color] duration-[160ms] ease-[cubic-bezier(0.2,0,0,1)] data-[state=checked]:bg-accent data-[state=checked]:border-border-strong disabled:opacity-40 disabled:cursor-not-allowed",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-[14px] w-[14px] bg-foreground transition-transform duration-[160ms] ease-[cubic-bezier(0.2,0,0,1)] data-[state=checked]:translate-x-[22px] data-[state=checked]:bg-accent-foreground translate-x-[2px]",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
