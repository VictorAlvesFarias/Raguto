import { cn } from "../lib";

// Fixed jitter keeps the hand-cut sticker look without randomness between renders.
const JITTER = [1, 0.82, 0.95, 0.78, 1, 0.88, 0.97, 0.8, 0.92, 0.84, 1, 0.86];

function starPoints(spikes: number) {
  const points: string[] = [];
  for (let i = 0; i < spikes * 2; i++) {
    const angle = (Math.PI * i) / spikes - Math.PI / 2;
    const radius = i % 2 === 0 ? 50 * JITTER[(i / 2) % JITTER.length] : 24;
    points.push(`${(50 + radius * Math.cos(angle)).toFixed(2)},${(50 + radius * Math.sin(angle)).toFixed(2)}`);
  }
  return points.join(" ");
}

const POINTS = starPoints(10);

export function Starburst({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={cn("fill-current", className)}>
      <polygon points={POINTS} strokeLinejoin="round" />
    </svg>
  );
}
