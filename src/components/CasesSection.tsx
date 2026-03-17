import { ArrowRight } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/55XXXXXXXXXXX?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Echo%20Agency%20e%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20gratuito%20para%20meu%20escrit%C3%B3rio.";

export default function CasesSection() {
  return (
    <section id="resultados" className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-primary text-xs md:text-sm font-semibold uppercase tracking-widest mb-3 md:mb-4">
          Resultados Reais
        </p>
        <h2 className="font-display text-2xl md:text-4xl font-bold mb-3 md:mb-4">
          Escritórios que <span className="text-primary">transformaram</span> seus resultados
        </h2>
        <p className="text-muted-foreground text-sm md:text-base mb-8 md:mb-12 max-w-2xl">
          Veja como advogados saíram da dependência de indicação e passaram a receber
          clientes todos os dias.
        </p>

        {/* Main case */}
        <div className="grid lg:grid-cols-2 gap-4 md:gap-6">
          {/* Card */}
          <div className="rounded-2xl border border-border bg-card p-5 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex gap-2 mb-4 md:mb-6 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  Case Destaque
                </span>
                <span className="px-3 py-1 rounded-full border border-border text-xs text-muted">
                  Direito Trabalhista
                </span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold mb-2">
                De 3 clientes por mês para 25+
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Escritório que dependia 100% de indicação. Em 90 dias, passou a
                receber oportunidades todos os dias no WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8">
              <div className="bg-background rounded-xl p-3 md:p-4">
                <p className="text-[10px] md:text-xs uppercase text-muted font-semibold mb-1">Antes</p>
                <p className="font-semibold text-sm">3 clientes/mês</p>
              </div>
              <div className="bg-primary/5 rounded-xl p-3 md:p-4 border border-primary/10">
                <p className="text-[10px] md:text-xs uppercase text-primary font-semibold mb-1">Com a Echo</p>
                <p className="font-semibold text-sm">+25 clientes/mês</p>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 lg:grid-rows-2 lg:grid-cols-1 gap-3 md:gap-4">
            <div className="rounded-2xl border border-border bg-card p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-8">
              <p className="text-4xl md:text-5xl font-display font-bold text-primary">8x</p>
              <div>
                <p className="font-semibold text-sm mb-0.5">Mais clientes novos</p>
                <p className="text-muted-foreground text-xs hidden md:block">
                  Crescimento consistente e previsível.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-8">
              <p className="text-4xl md:text-5xl font-display font-bold text-primary">4x</p>
              <div>
                <p className="font-semibold text-sm mb-0.5">Mais contratos fechados</p>
                <p className="text-muted-foreground text-xs hidden md:block">
                  Com alinhamento comercial quinzenal.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary cases */}
        <div className="grid sm:grid-cols-2 gap-3 md:gap-6 mt-4 md:mt-6">
          <div className="rounded-2xl border border-border bg-card p-4 md:p-6">
            <div className="flex gap-2 mb-3 md:mb-4 flex-wrap">
              <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Case</span>
              <span className="px-2.5 py-1 rounded-full border border-border text-xs text-muted">Família</span>
            </div>
            <h3 className="font-display text-base md:text-lg font-bold mb-2">Escritório Família & Sucessões</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              De 1 cliente a cada 2 semanas para contatos diários.
            </p>
            <div className="flex gap-6">
              <div>
                <p className="text-xl md:text-2xl font-display font-bold text-primary">12x</p>
                <p className="text-xs text-muted">mais oportunidades</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-display font-bold text-primary">-65%</p>
                <p className="text-xs text-muted">custo por cliente</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-4 md:p-6">
            <div className="flex gap-2 mb-3 md:mb-4 flex-wrap">
              <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Case</span>
              <span className="px-2.5 py-1 rounded-full border border-border text-xs text-muted">Previdenciário</span>
            </div>
            <h3 className="font-display text-base md:text-lg font-bold mb-2">Escritório Previdência Total</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Cada real investido volta em contratos assinados.
            </p>
            <div className="flex gap-6">
              <div>
                <p className="text-xl md:text-2xl font-display font-bold text-primary">5x</p>
                <p className="text-xs text-muted">retorno sobre investimento</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-display font-bold text-primary">+30</p>
                <p className="text-xs text-muted">contratos/mês</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 md:mt-14">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border hover:border-primary/50 hover:bg-primary/5 px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-semibold uppercase tracking-wider transition-all duration-300 text-xs md:text-sm"
          >
            Quero resultados assim
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
