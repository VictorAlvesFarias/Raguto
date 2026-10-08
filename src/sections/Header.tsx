import { useEffect, useState } from "react";
import { Dialog } from "radix-ui";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "../components/Logo";
import { cn } from "../lib";

export const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 text-cream transition-all duration-300",
        scrolled ? "bg-brand-deep/85 py-3 shadow-lg shadow-black/10 backdrop-blur-md" : "py-5",
      )}
    >
      <div className="container-page flex items-center justify-between gap-6">
        <a href="#inicio" aria-label="Raguto, voltar ao início">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-cream/80 transition hover:bg-white/10 hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-brand-deep transition hover:-translate-y-0.5 hover:bg-accent-soft md:inline-flex"
        >
          Fale com a gente
          <ArrowUpRight className="size-4" />
        </a>

        <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
          <Dialog.Trigger
            className="grid size-11 place-items-center rounded-full bg-white/10 transition hover:bg-white/20 md:hidden"
            aria-label="Abrir menu"
          >
            <Menu className="size-5" />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 animate-fade-in bg-ink/60 backdrop-blur-sm" />
            <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm animate-slide-in flex-col bg-brand p-6 text-cream shadow-2xl">
              <div className="flex items-center justify-between">
                <Logo />
                <Dialog.Close
                  className="grid size-11 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"
                  aria-label="Fechar menu"
                >
                  <X className="size-5" />
                </Dialog.Close>
              </div>
              <Dialog.Title className="sr-only">Menu de navegação</Dialog.Title>
              <Dialog.Description className="sr-only">Links para as seções da página</Dialog.Description>

              <nav aria-label="Mobile" className="mt-12 flex flex-col gap-2">
                {NAV_LINKS.map((link, index) => (
                  <Dialog.Close asChild key={link.href}>
                    <a
                      href={link.href}
                      className="flex items-baseline gap-4 border-b border-white/10 py-4 font-display text-4xl uppercase transition hover:text-accent"
                    >
                      <span className="font-sans text-sm text-accent">0{index + 1}</span>
                      {link.label}
                    </a>
                  </Dialog.Close>
                ))}
              </nav>

              <Dialog.Close asChild>
                <a
                  href="#contato"
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-bold text-brand-deep"
                >
                  Fale com a gente
                  <ArrowUpRight className="size-5" />
                </a>
              </Dialog.Close>
              <p className="mt-4 text-center font-serif text-lg text-cream/70 italic">
                Tecnologia não precisa ser complicada!
              </p>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
