import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-8 md:py-10 border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/echo-logo.png"
              alt="Echo"
              width={20}
              height={20}
              className="w-5 h-5"
              style={{
                filter: "brightness(0) saturate(100%) invert(22%) sepia(97%) saturate(3029%) hue-rotate(211deg) brightness(95%) contrast(101%)",
              }}
            />
            <span className="font-display text-lg font-bold tracking-tight">
              echo<span className="text-primary">.</span>
            </span>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted">
            <a href="#como-funciona" className="hover:text-foreground transition-colors">Como Funciona</a>
            <a href="#resultados" className="hover:text-foreground transition-colors">Resultados</a>
            <a href="#depoimentos" className="hover:text-foreground transition-colors">Depoimentos</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
            <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
          </nav>

          {/* Copyright */}
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Echo Agency
          </p>
        </div>
      </div>
    </footer>
  );
}
