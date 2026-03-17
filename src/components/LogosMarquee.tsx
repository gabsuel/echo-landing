const areas = [
  "Trabalhista", "Família", "Previdenciário", "Criminal", "Cível",
  "Tributário", "Empresarial", "Imobiliário", "Consumidor", "Digital",
];

export default function LogosMarquee() {
  const all = [...areas, ...areas];

  return (
    <section className="py-5 md:py-8 overflow-hidden border-y border-border">
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee">
          {all.map((area, i) => (
            <div
              key={`${area}-${i}`}
              className="mx-4 md:mx-8 text-muted/40 text-xs md:text-sm font-medium uppercase tracking-widest whitespace-nowrap"
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
