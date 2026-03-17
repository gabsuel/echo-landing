import { Check, X, ArrowRight } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/55XXXXXXXXXXX?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Echo%20Agency%20e%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20gratuito%20para%20meu%20escrit%C3%B3rio.";

const rows = [
  "Especializada em escritórios de advocacia",
  "Oportunidades reais no WhatsApp todo dia",
  "Alinhamento comercial quinzenal",
  "Análise dos seus atendimentos",
  "Script personalizado por área do direito",
  "Follow-up estruturado",
  "Criativos estratégicos",
  "Foco em contratos, não curtidas",
];

export default function GrowthIndustrialSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-14">
          <p className="text-primary text-xs md:text-sm font-semibold uppercase tracking-widest mb-3 md:mb-4">
            Comparativo
          </p>
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-3 md:mb-4">
            Por que a Echo e não{" "}
            <span className="text-primary">outra agência</span>?
          </h2>
        </div>

        {/* Mobile: card layout */}
        <div className="md:hidden space-y-2">
          {rows.map((feature) => (
            <div
              key={feature}
              className="flex items-center justify-between p-4 rounded-xl border border-border bg-card"
            >
              <span className="text-sm font-medium flex-1 mr-4">{feature}</span>
              <div className="flex items-center gap-4 shrink-0">
                <div className="flex flex-col items-center gap-0.5">
                  <X className="w-4 h-4 text-muted/40" />
                  <span className="text-[9px] text-muted">Outras</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-[9px] text-primary">Echo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: table layout */}
        <div className="hidden md:block rounded-2xl border border-border bg-card overflow-hidden">
          <div className="grid grid-cols-[1fr_100px_100px] gap-4 px-6 py-4 border-b border-border bg-surface-light">
            <div />
            <div className="text-xs text-muted text-center font-semibold uppercase tracking-wider">
              Outras
            </div>
            <div className="text-xs text-primary text-center font-semibold uppercase tracking-wider">
              Echo
            </div>
          </div>
          {rows.map((feature, i) => (
            <div
              key={feature}
              className={`grid grid-cols-[1fr_100px_100px] gap-4 px-6 py-4 ${
                i < rows.length - 1 ? "border-b border-border/50" : ""
              } hover:bg-surface-light/50 transition-colors`}
            >
              <div className="text-sm font-medium">{feature}</div>
              <div className="flex justify-center">
                <X className="w-4 h-4 text-muted/40" />
              </div>
              <div className="flex justify-center">
                <Check className="w-4 h-4 text-primary" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-6 md:px-8 py-3.5 md:py-4 rounded-xl transition-colors text-sm md:text-base"
          >
            Escolher a Echo
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
