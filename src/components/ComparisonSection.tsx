import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Antes eu dependia de indicação e não sabia quando viria o próximo cliente. Hoje acordo com mensagens no WhatsApp de pessoas precisando de advogado.",
    name: "Dr. Rafael M.",
    role: "Advogado Trabalhista — São Paulo",
  },
  {
    quote:
      "Já gastei dinheiro com agência que só me trazia curtida. A Echo trouxe clientes de verdade — e ainda me ensinou a atender melhor.",
    name: "Dra. Camila S.",
    role: "Advogada de Família — Belo Horizonte",
  },
  {
    quote:
      "O alinhamento comercial é o diferencial. Eles ouviram minhas ligações e mostraram onde eu estava perdendo cliente.",
    name: "Dr. André L.",
    role: "Advogado Previdenciário — Curitiba",
  },
  {
    quote:
      "Meu escritório triplicou em 6 meses. Hoje tenho 4 advogados e não paro de receber oportunidades.",
    name: "Dra. Juliana R.",
    role: "Advogada Cível — Rio de Janeiro",
  },
];

export default function ComparisonSection() {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-14">
          <p className="text-primary text-xs md:text-sm font-semibold uppercase tracking-widest mb-3 md:mb-4">
            Depoimentos
          </p>
          <h2 className="font-display text-2xl md:text-4xl font-bold">
            O que nossos <span className="text-primary">clientes</span> dizem
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 md:gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl md:rounded-2xl border border-border bg-surface p-4 md:p-7 hover:border-border-light transition-colors"
            >
              <Quote className="w-6 h-6 md:w-8 md:h-8 text-primary/20 mb-3 md:mb-5" />
              <p className="text-foreground text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-3 md:pt-5 border-t border-border">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-display font-bold text-[10px] md:text-xs">
                    {t.name.split(" ").slice(0, 2).map(w => w[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-[11px] md:text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
