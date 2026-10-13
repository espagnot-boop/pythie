import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap border text-[13px] font-mono h-9 px-4 disabled:opacity-40 disabled:cursor-not-allowed hard-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
  {
    variants: {
      variant: {
        default:
          "border-border-strong bg-accent text-accent-foreground",
        outline:
          "border-border-strong bg-transparent text-foreground",
        ghost:
          "border-transparent bg-transparent hover:bg-muted",
        link: "border-transparent bg-transparent link-hover h-auto px-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

function LoaderSquares() {
  return (
    <span className="loader-squares" aria-hidden>
      <i />
      <i />
      <i />
    </span>
  );
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, loading, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? <LoaderSquares /> : children}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants, LoaderSquares };
