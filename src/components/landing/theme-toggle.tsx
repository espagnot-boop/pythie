"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "@/components/icons";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggle = () => {
    const next = (resolvedTheme ?? theme) === "dark" ? "light" : "dark";
    if (typeof document !== "undefined" && document.startViewTransition) {
      document.startViewTransition(() => setTheme(next));
    } else {
      setTheme(next);
    }
  };

  return (
    <Button
      variant="outline"
      className="h-9 w-9 p-0"
      onClick={toggle}
      aria-label="Toggle theme"
      suppressHydrationWarning
    >
      <span className="dark:hidden" aria-hidden>
        <Moon />
      </span>
      <span className="hidden dark:inline" aria-hidden>
        <Sun />
      </span>
    </Button>
  );
}
