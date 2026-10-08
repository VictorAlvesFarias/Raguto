import { ArrowDown, ArrowUpRight, Pin } from "lucide-react";
import { Leaf } from "../components/Leaf";
import { RotatingBadge } from "../components/RotatingBadge";
import { Starburst } from "../components/Starburst";

const BARS = [
  { height: "34%", color: "bg-tint-1" },
  { height: "48%", color: "bg-tint-2" },
  { height: "42%", color: "bg-tint-1" },
  { height: "63%", color: "bg-tint-3" },
  { height: "58%", color: "bg-tint-2" },
  { height: "76%", color: "bg-tint-1" },
  { height: "92%", color: "bg-accent" },
];

export function Hero() {
  return (
    // min-h (not h) so the content can grow past the viewport on short or narrow screens instead of being clipped;
    // pt clears the fixed header so the centered content never sits under it.
    <section
      id="inicio"
      className="relative flex min-h-svh items-center justify-center overflow-hidden bg-brand pt-28 pb-24 text-cream"
    >
      <Leaf className="absolute -top-24 -right-40 w-[34rem] rotate-[28deg] text-white/[0.05]" />
      <Leaf className="absolute -bottom-48 -left-32 w-[28rem] -rotate-[35deg] text-white/[0.04]" />

      <div className="container-page relative grid items-center gap-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <div>
          <p className="inline-flex -rotate-1 items-center gap-2 bg-pop px-3 py-1.5 text-sm font-semibold text-cream shadow-md">
            Tecnologia não precisa ser complicada!
          </p>

          <h1 className="mt-8 leading-[0.88]">
            <span className="block font-serif text-[clamp(3rem,8vw,6.25rem)] italic">Soluções</span>
            <span className="block font-sans text-[clamp(2.25rem,6vw,4.5rem)] font-extrabold tracking-tight uppercase">
              em tecnologia
            </span>
            <span className="mt-1 block pl-[8%] font-display text-[clamp(3.5rem,10.5vw,8.5rem)] text-accent uppercase">
              que resolvem
            </span>
            <span className="block text-right font-sans text-[clamp(2rem,5vw,3.75rem)] font-extrabold tracking-tight uppercase lg:text-left lg:pl-[30%]">
              de <span className="font-serif font-normal normal-case italic">verdade</span>
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/80">
            A Raguto é uma consultoria de software que transforma dor de cabeça operacional em sistemas, automações e
            produtos digitais que funcionam. Sem tecniquês, sem enrolação.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 font-bold text-brand-deep shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-accent-soft"
            >
              Bora conversar
              <ArrowUpRight className="size-5" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-7 py-4 font-semibold transition hover:border-cream hover:bg-white/5"
            >
              Ver serviços
              <ArrowDown className="size-5" />
            </a>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden>
      <Starburst className="absolute -top-10 -left-8 z-10 w-24 animate-spin-slow text-accent sm:-left-12" />
      <RotatingBadge
        text="sem tecniquês • sem enrolação • "
        className="absolute -top-14 -right-3 z-10 animate-float sm:-right-10"
      />

      <div className="relative rotate-2 rounded-[2rem] bg-tint-1 p-3 shadow-2xl shadow-black/30">
        <Pin className="absolute top-6 right-6 z-10 size-5 rotate-45 fill-accent text-accent" />
        <div className="overflow-hidden rounded-[1.5rem] bg-cream text-ink">
          <div className="flex items-center gap-1.5 border-b border-ink/10 px-4 py-3">
            <span className="size-2.5 rounded-full bg-pop" />
            <span className="size-2.5 rounded-full bg-accent" />
            <span className="size-2.5 rounded-full bg-brand-soft" />
            <span className="ml-3 rounded-full bg-fog px-3 py-0.5 text-xs text-ink/60">seu-negocio.app/painel</span>
          </div>

          <div className="space-y-5 p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-widest text-ink/50 uppercase">Pedidos processados</p>
                <p className="font-display text-4xl text-brand sm:text-5xl">12.480</p>
              </div>
              <span className="rounded-full bg-tint-1 px-3 py-1 text-xs font-bold text-brand">+38% no mês</span>
            </div>

            <div className="flex h-32 items-end gap-2 sm:h-40">
              {BARS.map((bar, index) => (
                <div
                  key={index}
                  className={`flex-1 origin-bottom animate-grow rounded-t-lg ${bar.color}`}
                  style={{ height: bar.height, animationDelay: `${300 + index * 90}ms` }}
                />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-tint-2 p-3.5">
                <p className="text-xs text-ink/60">Trabalho manual</p>
                <p className="text-xl font-extrabold">−72%</p>
              </div>
              <div className="rounded-2xl bg-tint-3 p-3.5">
                <p className="text-xs text-ink/60">Erros de digitação</p>
                <p className="text-xl font-extrabold">quase zero</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-14 -left-2 -rotate-3 rounded-2xl bg-brand-deep p-4 font-mono text-[11px] leading-relaxed text-cream shadow-xl ring-1 ring-white/10 sm:-left-10 sm:text-sm">
        <p>
          <span className="text-accent">const</span> resultado = <span className="text-tint-2">raguto</span>
          .resolver(problema)
        </p>
        <p className="text-tint-1">// ✓ processo automatizado</p>
        <p className="text-tint-1">// ✓ time livre pra crescer</p>
      </div>
    </div>
  );
}
