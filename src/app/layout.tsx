import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Echo Agency | Marketing Digital para Advogados — Clientes Todos os Dias",
  description:
    "A Echo Agency gera oportunidades reais de novos clientes todos os dias para advogados e escritórios de advocacia. Pare de depender de indicação.",
  keywords: [
    "marketing para advogados",
    "clientes para escritório de advocacia",
    "marketing digital advogados",
    "captar clientes advocacia",
    "marketing jurídico",
  ],
  openGraph: {
    title: "Echo Agency | Clientes Todos os Dias para seu Escritório",
    description:
      "Nós colocamos pessoas que precisam de um advogado no seu WhatsApp todos os dias — e te ensinamos a fechar cada uma delas.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
