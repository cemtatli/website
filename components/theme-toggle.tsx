"use client";

import { useTheme } from "next-themes";
import { HugeiconsIcon } from "@hugeicons/react";
import { Sun03Icon, Moon02Icon } from "@hugeicons/core-free-icons";
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
          <HugeiconsIcon icon={Sun03Icon} size={16} />
        </button>
        <button className="rounded-md p-2 opacity-50">
          <HugeiconsIcon icon={Moon02Icon} size={16} />
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
        <HugeiconsIcon icon={Sun03Icon} size={16} />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={cn(
          "rounded-md p-2 transition-colors hover:bg-muted",
          theme === "dark" && "bg-muted text-foreground"
        )}
        aria-label="Dark mode"
      >
        <HugeiconsIcon icon={Moon02Icon} size={16} />
      </button>
    </div>
  );
}
