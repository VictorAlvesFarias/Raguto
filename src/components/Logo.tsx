import { cn } from "../lib";

const RAY_ANGLES = [-80, -50, -25, 0, 25, 50, 80];

/** Arch-shaped "r" with a little sun on top — the Raguto mark. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden className={cn("fill-current", className)}>
      <path d="M13 42V27a11 11 0 0 1 22 0v1.5a4.5 4.5 0 0 1-9 0V27a2 2 0 0 0-4 0v15z" />
      <circle cx="24" cy="9" r="2.6" />
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        {RAY_ANGLES.map((angle) => (
          <line key={angle} x1="24" y1="4.8" x2="24" y2="2.4" transform={`rotate(${angle} 24 9)`} />
        ))}
      </g>
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="grid size-10 place-items-center rounded-full bg-brand-deep ring-1 ring-white/10">
        <LogoMark className="size-7 text-accent" />
      </span>
      <span className="text-xl font-extrabold tracking-tight">
        raguto<span className="text-accent">.</span>
      </span>
    </span>
  );
}
