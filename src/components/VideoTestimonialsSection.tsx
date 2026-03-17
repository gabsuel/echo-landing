import { Play, ArrowRight } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/55XXXXXXXXXXX?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Echo%20Agency%20e%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20gratuito%20para%20meu%20escrit%C3%B3rio.";

export default function VideoTestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #0A0A0A, #050505, #0A0A0A)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 text-center py-12 md:py-24 lg:py-32">
        <p className="text-primary text-xs md:text-sm font-semibold uppercase tracking-widest mb-3 md:mb-4">
          Depoimento
        </p>
        <h2 className="font-display text-2xl md:text-4xl font-bold mb-3 md:mb-4">
          Quem <span className="text-primary italic">confia</span> na Echo
        </h2>
        <p className="text-muted-foreground text-sm md:text-base mb-6 md:mb-10">
          Veja o que nossos clientes dizem sobre a transformação dos seus escritórios
        </p>

        {/* Video */}
        <div className="relative rounded-xl md:rounded-2xl overflow-hidden max-w-4xl mx-auto aspect-video flex items-center justify-center group cursor-pointer border border-border bg-surface">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="relative z-10 w-14 h-14 md:w-20 md:h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/30 transition-all border border-primary/30">
            <Play className="w-6 h-6 md:w-8 md:h-8 text-primary fill-primary ml-0.5" />
          </div>
          <p className="absolute bottom-3 left-3 md:bottom-6 md:left-6 text-xs md:text-sm text-muted z-10">
            &ldquo;Antes eu dependia de indicação, hoje recebo 5 contatos por dia&rdquo;
          </p>
        </div>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 md:mt-12 inline-flex items-center gap-2 border border-border hover:border-primary/50 hover:bg-primary/5 px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-semibold uppercase tracking-wider transition-all duration-300 text-xs md:text-sm"
        >
          Quero resultados assim
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
