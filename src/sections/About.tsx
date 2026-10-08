import { Check } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { cn } from "../lib";

const VALUES = [
  "Escopo claro e preço justo",
  "Entregas visíveis a cada 2 semanas",
  "O código é 100% seu",
  "Atendimento humano, sem robô",
];

const STATS = [
  { value: "+60", label: "projetos entregues", tone: "bg-cream", rotate: "-rotate-2" },
  { value: "98%", label: "dos clientes continuam com a gente", tone: "bg-accent", rotate: "rotate-1" },
  { value: "15d", label: "até a primeira entrega no ar", tone: "bg-tint-2", rotate: "rotate-2" },
  { value: "24h", label: "pra responder qualquer chamado", tone: "bg-tint-1", rotate: "-rotate-1" },
];

export function About() {
  return (
    <section id="sobre" className="bg-fog py-24 sm:py-32">
      <div className="container-page grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] font-extrabold tracking-tight text-brand-deep">
            A gente traduz <span className="font-serif font-normal text-pop italic">tecniquês</span> pra{" "}
            <span className="font-serif font-normal text-pop italic">português.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
            A Raguto nasceu de uma ideia simples: tecnologia boa é aquela que some no dia a dia e deixa o seu time livre
            pro que importa. Somos desenvolvedores, designers e gente de produto que gosta de entender o negócio antes
            de abrir o editor de código.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {VALUES.map((value) => (
              <li key={value} className="flex items-center gap-3 font-semibold text-brand-deep">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand text-accent">
                  <Check className="size-4" strokeWidth={3} />
                </span>
                {value}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 100}>
              <div
                className={cn(
                  "flex aspect-square flex-col justify-between rounded-[1.75rem] p-5 shadow-lg shadow-brand/10 transition hover:rotate-0 sm:p-7",
                  stat.tone,
                  stat.rotate,
                )}
              >
                <span className="font-display text-[clamp(3rem,9vw,5.5rem)] leading-none text-brand-deep">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-brand-deep/75 sm:text-base">{stat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
