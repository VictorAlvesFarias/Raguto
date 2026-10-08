import { ArrowUp } from "lucide-react";
import { Logo } from "../components/Logo";
import { NAV_LINKS } from "./Header";

export function Footer() {
  return (
    <footer className="bg-brand-deep pt-20 pb-10 text-cream">
      <div className="container-page">
        <p className="font-display text-[clamp(3rem,13vw,11rem)] leading-[0.85] text-accent uppercase">
          Tecnologia sem <span className="font-serif font-normal text-cream normal-case italic">complicação</span>
        </p>

        <div className="mt-16 flex flex-col gap-10 border-t border-white/10 pt-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Consultoria de software que resolve problemas reais com tecnologia. Brasil & Portugal.
            </p>
          </div>

          <nav aria-label="Rodapé" className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-cream/70 transition hover:text-accent">
                {link.label}
              </a>
            ))}
            <a href="#contato" className="text-cream/70 transition hover:text-accent">
              Contato
            </a>
            <a href="https://instagram.com" className="text-cream/70 transition hover:text-accent">
              Instagram
            </a>
          </nav>

          <a
            href="#inicio"
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 px-5 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent"
          >
            Voltar ao topo
            <ArrowUp className="size-4" />
          </a>
        </div>

        <p className="mt-12 text-xs text-cream/40">© {new Date().getFullYear()} Raguto. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
