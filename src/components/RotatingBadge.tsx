import { cn } from "../lib";
import { LogoMark } from "./Logo";

export function RotatingBadge({ text, className }: { text: string; className?: string }) {
  return (
    <div className={cn("grid size-28 place-items-center rounded-full bg-accent text-brand-deep shadow-lg", className)}>
      <svg viewBox="0 0 100 100" aria-hidden className="absolute inset-0 animate-spin-slow">
        <defs>
          <path id="badge-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-current text-[10.5px] font-bold tracking-[0.2em] uppercase">
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <LogoMark className="size-10" />
      <span className="sr-only">{text}</span>
    </div>
  );
}
