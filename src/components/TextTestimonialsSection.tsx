"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Funciona para qual área do direito?",
    answer:
      "Trabalhamos com todas as áreas: trabalhista, família, previdenciário, criminal, cível, tributário, empresarial, imobiliário, entre outras. A estratégia é personalizada para a sua área de atuação.",
  },
  {
    question: "Quanto preciso investir?",
    answer:
      "O investimento varia conforme sua região, área do direito e objetivos. No diagnóstico gratuito, apresentamos um plano com valores exatos. Nossos clientes costumam ter retorno já no primeiro mês.",
  },
  {
    question: "Como funciona o alinhamento comercial?",
    answer:
      "Fazemos 2 calls por mês com cada cliente. Ouvimos suas ligações e conversas de WhatsApp. A partir disso, criamos scripts personalizados e ensinamos técnicas para fechar mais contratos.",
  },
  {
    question: "Tem contrato de fidelidade?",
    answer:
      "Não. Nossos clientes ficam porque veem resultado, não porque são obrigados. Resultado é a melhor fidelização.",
  },
  {
    question: "Em quanto tempo começo a receber clientes?",
    answer:
      "A maioria dos escritórios recebe as primeiras oportunidades nos primeiros 7 a 15 dias. Em 30 a 60 dias, o fluxo se estabiliza com previsibilidade.",
  },
  {
    question: "E se eu não souber atender os contatos?",
    answer:
      "É exatamente pra isso que existe o alinhamento comercial. Analisamos seus atendimentos, ouvimos ligações, corrigimos erros e criamos um script personalizado. Você não fica sozinho.",
  },
];

export default function TextTestimonialsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-surface">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-14">
          <p className="text-primary text-xs md:text-sm font-semibold uppercase tracking-widest mb-3 md:mb-4">
            FAQ
          </p>
          <h2 className="font-display text-2xl md:text-4xl font-bold">
            Perguntas <span className="text-primary">frequentes</span>
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className={`rounded-xl border transition-all duration-200 ${
                openIndex === i
                  ? "border-primary/30 bg-card"
                  : "border-border bg-background hover:border-border-light"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left min-h-[48px]"
              >
                <span className="font-semibold pr-4 text-sm">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-muted shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-4 md:px-5 pb-4 md:pb-5 -mt-1">
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
