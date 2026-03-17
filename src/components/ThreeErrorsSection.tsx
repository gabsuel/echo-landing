"use client";

import { useCallback } from "react";
import { UserX, ThumbsDown, Eye, ArrowRight } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/55XXXXXXXXXXX?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Echo%20Agency%20e%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20gratuito%20para%20meu%20escrit%C3%B3rio.";

const errors = [
  {
    icon: UserX,
    title: "Depende 100% de indicação",
    description:
      "Seu escritório não controla quantos clientes entram por mês. Se as indicações param, o faturamento despenca.",
    stat: "78%",
    statLabel: "dos escritórios dependem só de indicação",
  },
  {
    icon: ThumbsDown,
    title: "Tentou marketing e não funcionou",
    description:
      "Já contratou agência, impulsionou post, investiu em Instagram — e só veio curtida e seguidor, não cliente.",
    stat: "82%",
    statLabel: "dos advogados já se frustraram com marketing",
  },
  {
    icon: Eye,
    title: "Seu concorrente está lotado",
    description:
      "Enquanto você espera o telefone tocar, seus concorrentes recebem clientes pelo Google e Instagram todos os dias.",
    stat: "3x",
    statLabel: "mais contratos com a captação certa",
  },
];

export default function ThreeErrorsSection() {
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
      e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
    },
    []
  );

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-primary text-xs md:text-sm font-semibold uppercase tracking-widest mb-3 md:mb-4">
          Isso te parece familiar?
        </p>
        <h2 className="font-display text-2xl md:text-4xl font-bold mb-3 md:mb-4">
          <span className="text-primary">3 problemas</span> que travam o crescimento do seu escritório
        </h2>
        <p className="text-muted-foreground text-sm md:text-base mb-8 md:mb-14 max-w-lg mx-auto">
          Não é falta de competência. É falta do método certo.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {errors.map((error) => (
            <div
              key={error.title}
              data-glow
              onMouseMove={handleMouseMove}
              className="rounded-2xl relative p-5 md:p-7 border border-border bg-surface transition-all duration-300 hover:border-border-light hover:translate-y-[-2px] text-left"
            >
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <error.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>

              <h3 className="font-display text-lg md:text-xl font-bold mb-2 md:mb-3">
                {error.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {error.description}
              </p>

              <div className="pt-4 border-t border-border">
                <p className="text-2xl md:text-3xl font-display font-bold text-primary">
                  {error.stat}
                </p>
                <p className="text-xs text-muted mt-1">{error.statLabel}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 md:mt-14 inline-flex items-center gap-2 border border-border hover:border-primary/50 hover:bg-primary/5 px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-semibold uppercase tracking-wider transition-all duration-300 text-xs md:text-sm"
        >
          Resolver esses problemas agora
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
