"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/55XXXXXXXXXXX?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Echo%20Agency%20e%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20gratuito%20para%20meu%20escrit%C3%B3rio.";

const rotatingWords = [
  "DE INDICAÇÃO",
  "DO BOCA A BOCA",
  "DE ESPERAR O TELEFONE TOCAR",
  "DE RESULTADOS IMPREVISÍVEIS",
];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Subtle blue glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[250px] md:h-[400px] bg-primary/8 rounded-full blur-[100px] md:blur-[120px] animate-pulse-glow" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-20 md:py-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-light text-muted-foreground text-xs sm:text-sm mb-6 md:mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          Marketing Digital para Advogados
        </div>

        {/* Headline */}
        <h1 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] tracking-tight">
          Seu escritório ainda depende
          <span
            className={`text-primary block mt-2 md:mt-3 transition-all duration-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            {rotatingWords[wordIndex]}
          </span>
        </h1>

        {/* Sub */}
        <p className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto mt-5 md:mt-8 leading-relaxed px-2">
          Nós colocamos pessoas que precisam de um advogado no seu WhatsApp todos
          os dias — e te ensinamos a fechar cada uma delas.
        </p>

        {/* CTA */}
        <div className="mt-8 md:mt-10">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold text-base md:text-lg px-6 md:px-8 py-3.5 md:py-4 rounded-xl transition-all duration-300 w-full sm:w-auto justify-center"
          >
            Quero Receber Clientes Todos os Dias
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <p className="text-muted text-xs sm:text-sm mt-4 md:mt-5">
          Diagnóstico gratuito · Sem compromisso · 30 minutos
        </p>

        {/* Stats row */}
        <div className="mt-10 md:mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-sm md:max-w-lg mx-auto">
          <div>
            <p className="font-display text-xl md:text-3xl font-bold text-primary">+200</p>
            <p className="text-muted text-[10px] md:text-xs mt-1">Escritórios atendidos</p>
          </div>
          <div>
            <p className="font-display text-xl md:text-3xl font-bold text-primary">4x</p>
            <p className="text-muted text-[10px] md:text-xs mt-1">Mais contratos</p>
          </div>
          <div>
            <p className="font-display text-xl md:text-3xl font-bold text-primary">7 dias</p>
            <p className="text-muted text-[10px] md:text-xs mt-1">Para resultados</p>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
