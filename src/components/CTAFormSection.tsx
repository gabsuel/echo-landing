"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Send } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/55XXXXXXXXXXX?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Echo%20Agency%20e%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20gratuito%20para%20meu%20escrit%C3%B3rio.";

export default function CTAFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contato" className="section-padding">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left */}
          <div>
            <p className="text-primary text-xs md:text-sm font-semibold uppercase tracking-widest mb-3 md:mb-4">
              Próximo Passo
            </p>
            <h2 className="font-display text-2xl md:text-4xl font-bold mb-3 md:mb-4">
              Agende seu diagnóstico{" "}
              <span className="text-primary">gratuito</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
              Em 30 minutos, vamos analisar seu escritório e te mostrar exatamente
              como começar a receber clientes todos os dias.
            </p>

            <ul className="space-y-2.5 md:space-y-3 mb-8">
              {[
                "Entendemos sua área e seus objetivos",
                "Analisamos o que você já tentou",
                "Apresentamos o plano personalizado",
                "Você decide sem pressão",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-muted-foreground text-sm">{b}</span>
                </li>
              ))}
            </ul>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-primary hover:bg-primary-light text-white font-semibold text-base md:text-lg px-6 md:px-8 py-3.5 md:py-4 rounded-xl transition-all duration-300 w-full sm:w-auto justify-center sm:justify-start"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar pelo WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right - Form */}
          <div className="rounded-xl md:rounded-2xl border border-border bg-surface p-4 md:p-7">
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-display text-lg md:text-xl font-bold mb-2">
                  Recebemos seu contato!
                </h3>
                <p className="text-muted-foreground text-sm">
                  Nossa equipe entrará em contato em até 24h.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <p className="font-display text-base md:text-lg font-bold text-center">
                  Ou preencha o formulário
                </p>
                <p className="text-muted text-xs md:text-sm text-center mb-2">
                  Retornamos em até 24h
                </p>
                <div>
                  <label className="block text-xs md:text-sm font-medium mb-1.5 text-muted-foreground">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full h-11 md:h-11 px-3 md:px-4 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted/50 transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium mb-1.5 text-muted-foreground">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full h-11 px-3 md:px-4 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted/50 transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium mb-1.5 text-muted-foreground">
                    Área do Direito
                  </label>
                  <select
                    required
                    className="w-full h-11 px-3 md:px-4 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled>Selecione sua área</option>
                    <option>Direito Trabalhista</option>
                    <option>Direito de Família</option>
                    <option>Direito Previdenciário</option>
                    <option>Direito Criminal</option>
                    <option>Direito Cível</option>
                    <option>Direito Tributário</option>
                    <option>Direito Empresarial</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium mb-1.5 text-muted-foreground">
                    Cidade / Estado
                  </label>
                  <input
                    type="text"
                    className="w-full h-11 px-3 md:px-4 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted/50 transition-colors"
                    placeholder="Ex: São Paulo, SP"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-light text-white font-semibold h-12 rounded-lg transition-colors inline-flex items-center justify-center gap-2 mt-1"
                >
                  <Send className="w-4 h-4" />
                  Agendar Diagnóstico Gratuito
                </button>
                <p className="text-[11px] md:text-xs text-muted text-center">
                  Seus dados estão seguros. Não enviamos spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
