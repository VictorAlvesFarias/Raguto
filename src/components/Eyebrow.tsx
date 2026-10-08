import type { ReactNode } from "react";
import { cn } from "../lib";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-current/25 px-3.5 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase",
        className,
      )}
    >
      <span aria-hidden className="text-accent">
        ✦
      </span>
      {children}
    </span>
  );
}
