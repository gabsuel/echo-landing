import { ArrowRight } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/55XXXXXXXXXXX?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Echo%20Agency%20e%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20gratuito%20para%20meu%20escrit%C3%B3rio.";

export default function TechnologiesSection() {
  return (
    <section className="relative overflow-hidden py-12 md:py-24 lg:py-32">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[200px] md:h-[300px] bg-primary/6 rounded-full blur-[80px] md:blur-[100px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
          Pare de depender de indicação.
          <br />
          <span className="text-primary">Receba clientes todos os dias.</span>
        </h2>

        <p className="text-muted-foreground text-sm md:text-lg mb-8 md:mb-10 max-w-xl mx-auto">
          Atendemos poucos escritórios por mês para manter a qualidade do acompanhamento.
        </p>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold text-base md:text-lg px-6 md:px-10 py-3.5 md:py-5 rounded-xl transition-all duration-300 w-full sm:w-auto justify-center"
        >
          Quero Receber Clientes Todos os Dias
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>

        <p className="text-muted text-xs md:text-sm mt-4 md:mt-6">
          Diagnóstico gratuito · Sem compromisso · 30 minutos
        </p>
      </div>
    </section>
  );
}
