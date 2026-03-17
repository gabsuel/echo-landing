import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogosMarquee from "@/components/LogosMarquee";
import CasesSection from "@/components/CasesSection";
import ThreeErrorsSection from "@/components/ThreeErrorsSection";
import VideoTestimonialsSection from "@/components/VideoTestimonialsSection";
import HorusSection from "@/components/HorusSection";
import ValeSilicioSection from "@/components/ValeSilicioSection";
import GrowthIndustrialSection from "@/components/GrowthIndustrialSection";
import ComparisonSection from "@/components/ComparisonSection";
import TextTestimonialsSection from "@/components/TextTestimonialsSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import CTAFormSection from "@/components/CTAFormSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero — headline + CTA + trust indicators */}
        <HeroSection />
        {/* Áreas do Direito marquee + stat */}
        <LogosMarquee />
        {/* 3 Problemas que travam o escritório */}
        <ThreeErrorsSection />
        {/* 3 Pilares — Oportunidades, Criativos, Alinhamento Comercial */}
        <HorusSection />
        {/* Como Funciona — 5 steps */}
        <ValeSilicioSection />
        {/* Cases de Sucesso */}
        <CasesSection />
        {/* Depoimento em vídeo */}
        <VideoTestimonialsSection />
        {/* Comparativo — Echo vs agências genéricas */}
        <GrowthIndustrialSection />
        {/* Depoimentos textuais */}
        <ComparisonSection />
        {/* FAQ */}
        <TextTestimonialsSection />
        {/* CTA Final — WhatsApp + Formulário */}
        <CTAFormSection />
        {/* CTA grande azul */}
        <TechnologiesSection />
      </main>
      <Footer />
    </>
  );
}
