import { Tabs } from "radix-ui";
import {
  BarChart3,
  Cloud,
  Code,
  Compass,
  Plug,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "../components/Reveal";
import { Starburst } from "../components/Starburst";
import { cn } from "../lib";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  tone: string;
};

const CATEGORIES: { value: string; label: string; services: Service[] }[] = [
  {
    value: "construir",
    label: "Construir",
    services: [
      {
        icon: Code,
        title: "Sistemas sob medida",
        description: "ERPs, portais e painéis internos feitos pro jeito que a sua empresa trabalha — e não o contrário.",
        tags: ["Web", "Dashboards", "Portais"],
        tone: "bg-tint-1",
      },
      {
        icon: Smartphone,
        title: "Apps mobile",
        description: "Aplicativos iOS e Android rápidos e bonitos, pra seus clientes ou pro seu time em campo.",
        tags: ["iOS", "Android", "PWA"],
        tone: "bg-tint-2",
      },
      {
        icon: ShoppingBag,
        title: "Sites & e-commerce",
        description: "Lojas e sites que carregam rápido, aparecem no Google e convertem visita em venda.",
        tags: ["Loja virtual", "SEO", "Landing pages"],
        tone: "bg-tint-3",
      },
    ],
  },
  {
    value: "automatizar",
    label: "Automatizar",
    services: [
      {
        icon: Workflow,
        title: "Automação de processos",
        description: "Aquela planilha que alguém atualiza na mão todo dia? A gente transforma em fluxo automático.",
        tags: ["RPA", "Workflows", "Planilhas → sistema"],
        tone: "bg-tint-3",
      },
      {
        icon: Plug,
        title: "Integrações & APIs",
        description: "ERP, CRM, gateway de pagamento e marketplace conversando entre si, sem copiar e colar.",
        tags: ["REST", "Webhooks", "ERPs"],
        tone: "bg-tint-4",
      },
      {
        icon: Sparkles,
        title: "IA aplicada",
        description: "Chatbots, leitura de documentos e triagem inteligente — IA onde ela gera resultado, não hype.",
        tags: ["LLMs", "Chatbots", "OCR"],
        tone: "bg-tint-2",
      },
    ],
  },
  {
    value: "evoluir",
    label: "Evoluir",
    services: [
      {
        icon: Compass,
        title: "Consultoria & arquitetura",
        description: "Diagnóstico técnico, plano de ação e escolha de tecnologia antes de você gastar um real à toa.",
        tags: ["Diagnóstico", "Roadmap", "Code review"],
        tone: "bg-tint-1",
      },
      {
        icon: Cloud,
        title: "Cloud & DevOps",
        description: "Infra estável, deploy sem susto e conta de nuvem que não assusta no fim do mês.",
        tags: ["AWS", "CI/CD", "Monitoramento"],
        tone: "bg-tint-4",
      },
      {
        icon: BarChart3,
        title: "Dados & BI",
        description: "Seus números organizados em painéis claros, pra decidir com base em dado e não em achismo.",
        tags: ["Power BI", "Data warehouse", "KPIs"],
        tone: "bg-tint-3",
      },
    ],
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-cream pt-32 pb-24 sm:pb-32">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <h2 className="leading-[0.9] text-brand">
              <span className="block font-serif text-[clamp(3rem,7vw,5.5rem)] italic">Serviços</span>
              <span className="block font-sans text-[clamp(2.25rem,5.5vw,4.5rem)] font-extrabold tracking-tight uppercase">
                da Raguto
              </span>
              <span className="block pl-[14%] font-sans text-[clamp(2.25rem,5.5vw,4.5rem)] font-extrabold tracking-tight uppercase">
                que <span className="font-serif font-normal normal-case italic">você</span>
              </span>
              <span className="block font-sans text-[clamp(2.25rem,5.5vw,4.5rem)] font-extrabold tracking-tight uppercase">
                talvez <span className="font-serif font-normal text-pop normal-case italic">precise</span>
              </span>
            </h2>
          </Reveal>
          <Reveal delay={150} className="max-w-xs">
            <p className="text-sm font-bold tracking-wider text-brand/80 uppercase">
              Se você estava em dúvida se a Raguto era pro seu negócio, tá na hora de descobrir.
            </p>
          </Reveal>
        </div>

        <Tabs.Root defaultValue="construir" className="mt-14">
          <Tabs.List
            aria-label="Categorias de serviço"
            className="inline-flex max-w-full gap-1 overflow-x-auto rounded-full bg-fog p-1.5"
          >
            {CATEGORIES.map((category) => (
              <Tabs.Trigger
                key={category.value}
                value={category.value}
                className="shrink-0 rounded-full px-5 py-2.5 text-sm font-bold text-brand/70 transition hover:text-brand data-[state=active]:bg-brand data-[state=active]:text-cream data-[state=active]:shadow-md sm:px-7"
              >
                {category.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {CATEGORIES.map((category) => (
            <Tabs.Content
              key={category.value}
              value={category.value}
              className="mt-8 grid animate-fade-in gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {category.services.map((service, index) => (
                <ServiceCard key={service.title} service={service} featured={index === 0} />
              ))}
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  );
}

function ServiceCard({ service, featured }: { service: Service; featured: boolean }) {
  const Icon = service.icon;
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[1.75rem] p-7 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand/10",
        service.tone,
      )}
    >
      {featured && (
        <Starburst className="absolute -top-6 -right-6 w-24 text-accent opacity-80 transition duration-500 group-hover:rotate-45" />
      )}
      <span className="relative grid size-14 place-items-center rounded-2xl bg-brand text-accent transition group-hover:-rotate-6">
        <Icon className="size-6" />
      </span>
      <h3 className="mt-6 font-display text-3xl tracking-wide text-brand-deep uppercase">{service.title}</h3>
      <p className="mt-3 leading-relaxed text-ink/75">{service.description}</p>
      <ul className="mt-auto flex flex-wrap gap-2 pt-6">
        {service.tags.map((tag) => (
          <li key={tag} className="rounded-full bg-cream/70 px-3 py-1 text-xs font-semibold text-brand">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
