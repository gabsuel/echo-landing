import { ClipboardCheck, MessageCircle, BarChart3, Settings, Repeat } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Diagnóstico Gratuito",
    description: "Entendemos seu escritório, área de atuação e objetivos.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Estratégia Personalizada",
    description: "Montamos um plano sob medida pra atrair os clientes certos.",
  },
  {
    icon: MessageCircle,
    step: "03",
    title: "Oportunidades Chegam",
    description: "Pessoas interessadas entram em contato pelo WhatsApp todos os dias.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Alinhamento Quinzenal",
    description: "Analisamos seus atendimentos e ajudamos a fechar mais.",
  },
  {
    icon: Repeat,
    step: "05",
    title: "Crescimento Contínuo",
    description: "Otimizamos tudo pra mais clientes pelo menor custo.",
  },
];

export default function ValeSilicioSection() {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <p className="text-primary text-xs md:text-sm font-semibold uppercase tracking-widest mb-3 md:mb-4">
            Processo
          </p>
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-3 md:mb-4">
            Como <span className="text-primary">funciona</span> na prática
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
            Do diagnóstico ao contrato assinado — simples e eficiente.
          </p>
        </div>

        {/* Mobile: vertical stack / Desktop: horizontal grid */}
        <div className="flex flex-col gap-3 md:hidden">
          {steps.map((step) => (
            <div
              key={step.step}
              className="flex items-start gap-4 p-4 rounded-xl border border-border bg-surface"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-primary">{step.step}</span>
                  <h3 className="font-display text-base font-bold">{step.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: 5-column grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((step) => (
            <div
              key={step.step}
              className="relative rounded-2xl border border-border bg-surface p-5 hover:border-border-light transition-colors group"
            >
              <span className="text-4xl lg:text-5xl font-display font-bold text-border absolute top-3 right-3 group-hover:text-primary/15 transition-colors">
                {step.step}
              </span>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-base font-bold mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
