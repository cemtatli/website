"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-1">
        <button className="rounded-md p-2 opacity-50">
          <Sun className="size-4" />
        </button>
        <button className="rounded-md p-2 opacity-50">
          <Moon className="size-4" />
        </button>
        <button className="rounded-md p-2 opacity-50">
          <Monitor className="size-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setTheme("light")}
        className={cn(
          "rounded-md p-2 transition-colors hover:bg-muted",
          theme === "light" && "bg-muted text-foreground"
        )}
        aria-label="Light mode"
      >
        <Sun className="size-4" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={cn(
          "rounded-md p-2 transition-colors hover:bg-muted",
          theme === "dark" && "bg-muted text-foreground"
        )}
        aria-label="Dark mode"
      >
        <Moon className="size-4" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={cn(
          "rounded-md p-2 transition-colors hover:bg-muted",
          theme === "system" && "bg-muted text-foreground"
        )}
        aria-label="System mode"
      >
        <Monitor className="size-4" />
      </button>
    </div>
  );
}
