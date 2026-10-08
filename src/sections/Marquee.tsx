const ITEMS = [
  "Sistemas sob medida",
  "Automação",
  "Apps mobile",
  "Integrações & APIs",
  "Cloud",
  "Dados & BI",
  "IA aplicada",
  "Consultoria",
];

export function Marquee() {
  return (
    // The outer box clips the scrolling track to the viewport; vertical padding leaves room for the tilt.
    <div className="relative z-10 -my-9 overflow-hidden py-3" aria-hidden>
      <div className="-mx-4 -rotate-[1.5deg] overflow-hidden bg-accent py-4 text-brand-deep shadow-lg">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center">
              {ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-6 pr-6 font-display text-2xl tracking-wide uppercase sm:text-3xl"
                >
                  {item}
                  <span className="text-pop">✦</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
