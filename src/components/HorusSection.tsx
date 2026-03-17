import { MessageSquare, BarChart3, Phone, Handshake } from "lucide-react";

const pillars = [
  {
    icon: MessageSquare,
    title: "Geração de Oportunidades",
    description:
      "Pessoas que realmente precisam de um advogado chegam até você todos os dias, prontas para contratar.",
  },
  {
    icon: BarChart3,
    title: "Criativos que Atraem o Cliente Certo",
    description:
      "Roteiros e conteúdos estratégicos que posicionam você como autoridade e atraem quem tem um problema real.",
  },
  {
    icon: Phone,
    title: "Alinhamento Comercial",
    description:
      "Ouvimos seus atendimentos e te ensinamos a transformar cada contato em contrato assinado.",
  },
];

export default function HorusSection() {
  return (
    <section id="como-funciona" className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div>
            <p className="text-primary text-xs md:text-sm font-semibold uppercase tracking-widest mb-3 md:mb-4">
              Nossos 3 Pilares
            </p>
            <h2 className="font-display text-2xl md:text-4xl font-bold mb-3 md:mb-4">
              Não entregamos só contatos —{" "}
              <span className="text-primary">ensinamos seu escritório a fechar</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base mb-6 md:mb-10 leading-relaxed">
              A maioria dos escritórios perde cliente no atendimento, não na captação.
              Por isso, vamos além: do primeiro contato ao contrato assinado.
            </p>

            <div className="space-y-3 md:space-y-4">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-xl border border-border bg-background hover:border-border-light transition-colors"
                >
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <p.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-base md:text-lg font-bold mb-1">{p.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Differentiator card */}
          <div className="rounded-2xl border border-border overflow-hidden bg-card">
            <div className="p-5 md:p-8 border-b border-border bg-primary/5">
              <Handshake className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4" />
              <h3 className="font-display text-xl md:text-2xl font-bold mb-2 md:mb-3">
                Nosso Diferencial
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                2 calls por mês com cada cliente. Ouvimos suas ligações e conversas
                de WhatsApp. Criamos um script personalizado pra sua área do direito.
              </p>
            </div>
            <div className="p-5 md:p-8 space-y-3 md:space-y-4">
              {[
                ["Análise real", "dos seus atendimentos — não achismo"],
                ["Script personalizado", "por área do direito"],
                ["Follow-up estruturado", "para não perder nenhuma oportunidade"],
                ["Te ensinamos a fechar", "cada oportunidade vira contrato"],
              ].map(([bold, rest]) => (
                <div key={bold} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-primary text-xs font-bold">
                    ✓
                  </span>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">{bold}</span> {rest}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
