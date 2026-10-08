import { Quote } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { Starburst } from "../components/Starburst";
import { cn } from "../lib";

// Placeholder testimonials — replace with real client quotes before launch.
const TESTIMONIALS = [
  {
    quote:
      "A gente vivia de planilha e WhatsApp. Em dois meses a Raguto colocou tudo num sistema só e o fechamento do mês caiu de 4 dias pra 1 manhã.",
    name: "Carla Mendes",
    role: "Sócia, Clínica Bem Viver",
    tone: "bg-tint-2",
    rotate: "lg:-rotate-2",
  },
  {
    quote:
      "Finalmente uma consultoria que explica as coisas sem jargão. Cada entrega vinha com demo e a gente sempre sabia onde o projeto estava.",
    name: "Rafael Tavares",
    role: "COO, Rota Logística",
    tone: "bg-tint-3",
    rotate: "lg:translate-y-8",
  },
  {
    quote:
      "Integraram nosso e-commerce com o ERP e o marketplace. Acabou o retrabalho e o estoque bate certinho todo dia.",
    name: "Juliana Prado",
    role: "Fundadora, Casa Prado",
    tone: "bg-tint-1",
    rotate: "lg:rotate-2",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <Starburst className="absolute top-16 -left-10 w-32 text-accent/40" />
      <div className="container-page relative">
        <Reveal className="text-center">
          <h2 className="text-[clamp(2.25rem,5vw,4rem)] leading-none font-extrabold tracking-tight text-brand-deep uppercase">
            Quem já resolveu,{" "}
            <span className="font-serif font-normal text-pop normal-case italic">recomenda</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <Reveal key={item.name} delay={index * 120}>
              <figure
                className={cn(
                  "flex h-full flex-col rounded-[1.75rem] p-8 shadow-lg shadow-brand/10 transition duration-300 hover:rotate-0",
                  item.tone,
                  item.rotate,
                )}
              >
                <Quote className="size-9 fill-brand text-brand" />
                <blockquote className="mt-5 text-lg leading-relaxed text-ink/85">“{item.quote}”</blockquote>
                <figcaption className="mt-auto flex items-center gap-3 pt-8">
                  <span className="grid size-11 place-items-center rounded-full bg-brand font-display text-lg text-accent">
                    {item.name[0]}
                  </span>
                  <span>
                    <span className="block font-bold text-brand-deep">{item.name}</span>
                    <span className="block text-sm text-ink/60">{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
