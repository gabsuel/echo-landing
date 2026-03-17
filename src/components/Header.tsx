"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

const WHATSAPP_LINK =
  "https://wa.me/55XXXXXXXXXXX?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Echo%20Agency%20e%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20gratuito%20para%20meu%20escrit%C3%B3rio.";

const navLinks = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Resultados", href: "#resultados" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/echo-logo.png"
            alt="Echo"
            width={24}
            height={24}
            className="w-5 h-5 md:w-7 md:h-7"
            style={{
              filter: "brightness(0) saturate(100%) invert(22%) sepia(97%) saturate(3029%) hue-rotate(211deg) brightness(95%) contrast(101%)",
            }}
          />
          <span className="font-display text-lg md:text-xl font-bold tracking-tight">
            echo<span className="text-primary">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* CTA — desktop only */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold text-sm h-10 px-5 rounded-lg transition-colors"
        >
          Agendar Diagnóstico
          <ArrowRight className="w-4 h-4" />
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-border px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left text-muted-foreground hover:text-foreground py-3.5 px-3 rounded-lg transition-colors text-base"
            >
              {link.label}
            </button>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-primary text-white font-semibold py-3.5 rounded-lg mt-3 text-base"
          >
            Agendar Diagnóstico
          </a>
        </div>
      )}
    </header>
  );
}
