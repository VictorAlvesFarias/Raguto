import { useRef } from "react";
import { ScrollArea } from "radix-ui";
import { ArrowLeft, ArrowRight, Pin } from "lucide-react";
import { Leaf } from "../components/Leaf";
import { Reveal } from "../components/Reveal";
import { Starburst } from "../components/Starburst";
import { cn } from "../lib";

const STEPS = [
  {
    title: "Café & diagnóstico",
    text: "A gente senta (de verdade ou no Meet), entende a sua dor e mapeia onde a tecnologia realmente ajuda.",
    tone: "bg-cream text-brand-deep",
    accent: "text-pop",
  },
  {
    title: "Proposta sem letra miúda",
    text: "Escopo, prazo e investimento claros. Se algo não fizer sentido pro seu momento, a gente fala.",
    tone: "bg-accent text-brand-deep",
    accent: "text-cream",
  },
  {
    title: "Protótipo clicável",
    text: "Você vê, clica e opina nas telas antes de escrevermos uma linha de código. Zero surpresa.",
    tone: "bg-tint-2 text-brand-deep",
    accent: "text-pop",
  },
  {
    title: "Entregas a cada 2 semanas",
    text: "Sprints curtos com demo ao vivo. Você acompanha o progresso de perto, sem relatório enfadonho.",
    tone: "bg-tint-1 text-brand-deep",
    accent: "text-brand-soft",
  },
  {
    title: "Lançamento",
    text: "Colocamos no ar, migramos os dados e treinamos o seu time. Pode estourar o espumante.",
    tone: "bg-pop text-cream",
    accent: "text-accent",
  },
  {
    title: "Suporte & evolução",
    text: "A gente não some depois do deploy: acompanhamos métricas, corrigimos rápido e evoluímos junto.",
    tone: "bg-tint-3 text-brand-deep",
    accent: "text-pop",
  },
];

export function Process() {
  const viewportRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const card = viewport.querySelector<HTMLElement>("[data-step]");
    viewport.scrollBy({ left: direction * ((card?.offsetWidth ?? 320) + 20), behavior: "smooth" });
  };

  return (
    <section id="como-funciona" className="relative overflow-hidden bg-brand py-24 text-cream sm:py-32">
      <Leaf className="absolute top-10 -right-24 w-96 rotate-[140deg] text-white/[0.04]" />

      <div className="container-page relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <Reveal className="max-w-3xl">
          <h2 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] text-accent uppercase">
            O que acontece depois que você contrata a Raguto?
          </h2>
          <p className="mt-5 inline-block -rotate-1 bg-pop px-3 py-1.5 font-semibold shadow-md">
            Arrasta pro lado pra descobrir!
          </p>
        </Reveal>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Etapa anterior"
            className="grid size-14 place-items-center rounded-full border border-cream/30 transition hover:border-accent hover:bg-accent hover:text-brand-deep"
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Próxima etapa"
            className="grid size-14 place-items-center rounded-full bg-accent text-brand-deep transition hover:bg-accent-soft"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>

      <ScrollArea.Root className="bleed-scope relative mt-14 w-full" type="always">
        <ScrollArea.Viewport ref={viewportRef} className="bleed-row w-full snap-x snap-mandatory">
          <ol className="flex gap-5 pb-8">
            {STEPS.map((step, index) => (
              <li
                key={step.title}
                data-step
                className={cn(
                  "relative flex aspect-[4/5] w-[80vw] max-w-[22rem] shrink-0 snap-start flex-col overflow-hidden rounded-[1.75rem] p-7 shadow-xl shadow-black/20 sm:w-[22rem]",
                  step.tone,
                )}
              >
                {index === 0 && <Pin className="absolute top-6 right-6 size-5 rotate-45 fill-current" />}
                <span className={cn("font-display text-[7rem] leading-none", step.accent)}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-auto font-display text-[2.1rem] leading-[1.05] uppercase">{step.title}</h3>
                <p className="mt-3 leading-relaxed opacity-80">{step.text}</p>
                <div className="mt-6 flex items-center justify-between text-xs font-bold tracking-widest uppercase opacity-60">
                  <span>
                    {index + 1}/{STEPS.length}
                  </span>
                  {index < STEPS.length - 1 && <span>arrasta →</span>}
                </div>
                {index === STEPS.length - 1 && (
                  <Starburst className="absolute -right-8 -bottom-8 w-28 text-pop/30" />
                )}
              </li>
            ))}
            <li aria-hidden className="w-[max(0px,calc(var(--bleed)-1.25rem))] shrink-0" />
          </ol>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          orientation="horizontal"
          className="right-[var(--bleed)]! left-[var(--bleed)]! flex h-2 touch-none rounded-full bg-white/10 select-none"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-full bg-accent" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </section>
  );
}
