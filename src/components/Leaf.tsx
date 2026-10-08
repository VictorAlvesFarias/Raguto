import { useId } from "react";
import { cn } from "../lib";

/** Oversized, faded leaf used as background texture on green sections. Veins are cut out with a mask. */
export function Leaf({ className }: { className?: string }) {
  const maskId = useId();
  return (
    <svg viewBox="0 0 200 200" aria-hidden className={cn("pointer-events-none fill-current", className)}>
      <mask id={maskId}>
        <rect width="200" height="200" fill="white" />
        <path
          d="M100 24V184M100 70l-34-26M100 70l34-26M100 110l-46-34M100 110l46-34M100 150l-40-30M100 150l40-30"
          fill="none"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </mask>
      <path mask={`url(#${maskId})`} d="M100 4C168 44 196 118 100 196C4 118 32 44 100 4Z" />
    </svg>
  );
}
