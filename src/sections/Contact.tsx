import { useState, type FormEvent, type ReactNode } from "react";
import { Label, Select, Toast, ToggleGroup } from "radix-ui";
import { Check, ChevronDown, Mail, MapPin, MessageCircle, Send, X } from "lucide-react";
import { Leaf } from "../components/Leaf";
import { Reveal } from "../components/Reveal";
import { Starburst } from "../components/Starburst";

const NEEDS = [
  "Sistema sob medida",
  "App mobile",
  "Site ou e-commerce",
  "Automação de processos",
  "Integrações & APIs",
  "IA aplicada",
  "Dados & BI",
  "Ainda não sei — quero um diagnóstico",
];

const BUDGETS = ["Até R$ 10 mil", "R$ 10–50 mil", "R$ 50 mil+", "Não sei ainda"];

const inputClass =
  "w-full rounded-2xl border border-brand/15 bg-white/70 px-4 py-3.5 text-ink placeholder:text-ink/40 transition outline-none focus:border-brand focus:bg-white focus:ring-4 focus:ring-accent/40";

export function Contact() {
  const [need, setNeed] = useState("");
  const [budget, setBudget] = useState("");
  const [sending, setSending] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSending(true);
    // TODO: send the form data to the real endpoint (e.g. email service or CRM).
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSending(false);
    form.reset();
    setNeed("");
    setBudget("");
    setToastOpen(false);
    window.setTimeout(() => setToastOpen(true), 50);
  };

  return (
    <section id="contato" className="relative overflow-hidden bg-brand py-24 text-cream sm:py-32">
      <Leaf className="absolute -bottom-40 -left-24 w-[30rem] rotate-[20deg] text-white/[0.05]" />

      <div className="container-page relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <h2 className="leading-[0.9]">
            <span className="block font-serif text-[clamp(3rem,7vw,5.5rem)] italic">Bora tirar</span>
            <span className="block font-display text-[clamp(3.5rem,9vw,7rem)] text-accent uppercase">essa ideia</span>
            <span className="block text-[clamp(2.25rem,5vw,4rem)] font-extrabold tracking-tight uppercase">do papel?</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/80">
            Conta pra gente o que está travando o seu negócio. O primeiro diagnóstico é por nossa conta.
          </p>

          <ul className="mt-10 space-y-4">
            <ContactLine icon={<Mail className="size-5" />} href="mailto:ola@raguto.com.br">
              ola@raguto.com.br
            </ContactLine>
            <ContactLine icon={<MessageCircle className="size-5" />} href="https://wa.me/5500000000000">
              WhatsApp: (00) 00000-0000
            </ContactLine>
            <ContactLine icon={<MapPin className="size-5" />}>Brasil & Portugal · 100% remoto</ContactLine>
          </ul>
        </Reveal>

        <Reveal delay={150} className="relative">
          <Starburst className="absolute -top-10 -right-4 z-10 w-24 animate-spin-slow text-accent sm:-right-8" />
          <form
            onSubmit={handleSubmit}
            className="relative rounded-[2rem] bg-cream p-6 text-ink shadow-2xl shadow-black/30 sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Seu nome" htmlFor="name">
                <input id="name" name="name" required autoComplete="name" placeholder="Como te chamamos?" className={inputClass} />
              </Field>
              <Field label="E-mail" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="voce@empresa.com"
                  className={inputClass}
                />
              </Field>
              <Field label="Empresa" htmlFor="company" className="sm:col-span-2">
                <input id="company" name="company" autoComplete="organization" placeholder="Nome do seu negócio" className={inputClass} />
              </Field>

              <Field label="O que você precisa?" htmlFor="need" className="sm:col-span-2">
                <Select.Root name="need" value={need} onValueChange={setNeed} required>
                  <Select.Trigger id="need" className={`${inputClass} flex items-center justify-between text-left data-[placeholder]:text-ink/40`}>
                    <Select.Value placeholder="Escolha uma opção" />
                    <Select.Icon>
                      <ChevronDown className="size-5 text-brand" />
                    </Select.Icon>
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Content
                      position="popper"
                      sideOffset={8}
                      className="z-50 max-h-[var(--radix-select-content-available-height)] w-[var(--radix-select-trigger-width)] animate-fade-in overflow-hidden rounded-2xl bg-cream p-1.5 shadow-2xl ring-1 ring-brand/10"
                    >
                      <Select.Viewport>
                        {NEEDS.map((item) => (
                          <Select.Item
                            key={item}
                            value={item}
                            className="relative flex cursor-pointer items-center rounded-xl py-2.5 pr-3 pl-9 text-ink outline-none select-none data-[highlighted]:bg-tint-1 data-[state=checked]:font-semibold"
                          >
                            <Select.ItemIndicator className="absolute left-3">
                              <Check className="size-4 text-brand" />
                            </Select.ItemIndicator>
                            <Select.ItemText>{item}</Select.ItemText>
                          </Select.Item>
                        ))}
                      </Select.Viewport>
                    </Select.Content>
                  </Select.Portal>
                </Select.Root>
              </Field>

              <fieldset className="sm:col-span-2">
                <legend className="mb-2 text-sm font-bold text-brand-deep">Investimento previsto</legend>
                <ToggleGroup.Root
                  type="single"
                  value={budget}
                  onValueChange={setBudget}
                  aria-label="Investimento previsto"
                  className="grid grid-cols-2 gap-2 sm:grid-cols-4"
                >
                  {BUDGETS.map((item) => (
                    <ToggleGroup.Item
                      key={item}
                      value={item}
                      className="rounded-2xl border border-brand/15 bg-white/70 px-3 py-3 text-sm font-semibold text-brand-deep transition hover:border-brand data-[state=on]:border-brand data-[state=on]:bg-brand data-[state=on]:text-cream"
                    >
                      {item}
                    </ToggleGroup.Item>
                  ))}
                </ToggleGroup.Root>
                <input type="hidden" name="budget" value={budget} />
              </fieldset>

              <Field label="Conta mais sobre o desafio" htmlFor="message" className="sm:col-span-2">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Ex.: hoje controlamos os pedidos em planilhas e perdemos muito tempo..."
                  className={`${inputClass} resize-none`}
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={sending}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 font-bold text-cream transition hover:-translate-y-0.5 hover:bg-brand-deep disabled:translate-y-0 disabled:opacity-70"
            >
              {sending ? "Enviando..." : "Enviar mensagem"}
              <Send className="size-5" />
            </button>
          </form>
        </Reveal>
      </div>

      <Toast.Root
        open={toastOpen}
        onOpenChange={setToastOpen}
        duration={6000}
        className="flex items-start gap-4 rounded-2xl bg-accent p-5 text-brand-deep shadow-2xl data-[state=open]:animate-slide-in data-[swipe=end]:animate-fade-in"
      >
        <div className="flex-1">
          <Toast.Title className="font-display text-xl uppercase">Mensagem enviada!</Toast.Title>
          <Toast.Description className="mt-1 text-sm">A gente responde em até 24h, combinado?</Toast.Description>
        </div>
        <Toast.Close aria-label="Fechar" className="rounded-full p-1 transition hover:bg-brand-deep/10">
          <X className="size-4" />
        </Toast.Close>
      </Toast.Root>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <Label.Root htmlFor={htmlFor} className="mb-2 block text-sm font-bold text-brand-deep">
        {label}
      </Label.Root>
      {children}
    </div>
  );
}

function ContactLine({ icon, href, children }: { icon: ReactNode; href?: string; children: ReactNode }) {
  const content = (
    <>
      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/10 text-accent">{icon}</span>
      <span className="font-semibold">{children}</span>
    </>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="inline-flex items-center gap-4 transition hover:text-accent">
          {content}
        </a>
      ) : (
        <span className="inline-flex items-center gap-4">{content}</span>
      )}
    </li>
  );
}
