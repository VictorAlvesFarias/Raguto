import { Accordion } from "radix-ui";
import { ArrowUpRight, Plus } from "lucide-react";
import { Reveal } from "../components/Reveal";

const QUESTIONS = [
  {
    question: "Quanto custa um projeto?",
    answer:
      "Depende do tamanho do problema — e é por isso que o diagnóstico inicial é gratuito. Depois dele você recebe uma proposta fechada, com escopo, prazo e valor, sem custo escondido.",
  },
  {
    question: "Quanto tempo leva pra ficar pronto?",
    answer:
      "A primeira entrega funcionando costuma ir ao ar em cerca de 15 dias. Projetos maiores são divididos em etapas pra você já colher resultado enquanto o resto é construído.",
  },
  {
    question: "Vocês atendem empresas pequenas?",
    answer:
      "Sim! Boa parte dos nossos clientes são pequenos e médios negócios. Adaptamos a solução ao seu momento — às vezes uma automação simples resolve mais que um sistema gigante.",
  },
  {
    question: "O código fica com quem?",
    answer: "Com você, 100%. Repositório, documentação e acessos são seus desde o primeiro dia.",
  },
  {
    question: "E depois que o sistema estiver no ar?",
    answer:
      "Oferecemos planos de suporte e evolução contínua: monitoramento, correções rápidas e novas funcionalidades conforme o seu negócio cresce.",
  },
  {
    question: "Vocês atendem fora do Brasil?",
    answer: "Atendemos clientes no Brasil e em Portugal, com reuniões remotas e o mesmo cuidado de sempre.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-fog py-24 sm:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="leading-[0.95] text-brand-deep">
            <span className="block text-[clamp(2.25rem,5vw,4rem)] font-extrabold tracking-tight uppercase">Perguntas</span>
            <span className="block text-[clamp(2.25rem,5vw,4rem)] font-extrabold tracking-tight uppercase">
              que <span className="font-serif font-normal text-pop normal-case italic">sempre</span>
            </span>
            <span className="block font-display text-[clamp(3rem,7vw,5.5rem)] text-brand uppercase">aparecem</span>
          </h2>
          <p className="mt-6 max-w-sm text-ink/70">Não achou a sua? Manda pra gente que respondemos rapidinho.</p>
          <a
            href="#contato"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 font-bold text-cream transition hover:-translate-y-0.5 hover:bg-brand-deep"
          >
            Perguntar agora
            <ArrowUpRight className="size-5" />
          </a>
        </Reveal>

        <Accordion.Root type="single" collapsible defaultValue="item-0" className="flex flex-col gap-3">
          {QUESTIONS.map((item, index) => (
            <Accordion.Item
              key={item.question}
              value={`item-${index}`}
              className="overflow-hidden rounded-[1.5rem] bg-cream transition data-[state=open]:bg-tint-3 data-[state=open]:shadow-lg data-[state=open]:shadow-brand/10"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-lg font-bold text-brand-deep sm:px-8 sm:py-6 sm:text-xl">
                  {item.question}
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand text-accent transition duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:bg-pop group-data-[state=open]:text-cream">
                    <Plus className="size-5" />
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <p className="px-6 pb-6 leading-relaxed text-ink/75 sm:px-8 sm:pb-7">{item.answer}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
