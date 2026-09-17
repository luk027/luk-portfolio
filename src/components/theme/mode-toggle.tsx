"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Button
      type="button"
      variant="link"
      size="icon"
      className={`${cn(className)} transition-transform duration-500 ${theme === "dark" ? "rotate-180" : "rotate-0"} `}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="h-full w-full rotate-0 transition-all" />
      ) : (
        <Moon className="h-full w-full rotate-0 transition-all" />
      )}
    </Button>
  );
}
