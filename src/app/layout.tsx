import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://elizangelasantos.com.br"),
  title: "Elizangela Santos — Cabeleireira & Terapeuta Capilar",
  description:
    "Cuidado do couro cabeludo e transformação dos fios com responsabilidade. Protocolos personalizados em Salvador e Lauro de Freitas, BA.",
  keywords: [
    "terapeuta capilar",
    "cabeleireira Salvador",
    "cabeleireira Lauro de Freitas",
    "tratamento capilar",
    "saúde capilar",
    "Elizangela Santos",
    "consultoria capilar",
    "Lavagem terapêutica",
    "detox capilar",
  ],
  authors: [{ name: "Elizangela Santos" }],
  creator: "Elizangela Santos",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Elizangela Santos — Cabeleireira & Terapeuta Capilar",
    description:
      "Cuidado do couro cabeludo e transformação dos fios com responsabilidade. Protocolos personalizados em Salvador e Lauro de Freitas, BA.",
    siteName: "Elizangela Santos",
    images: [
      {
        url: "/images/profile.png",
        width: 800,
        height: 600,
        alt: "Elizangela Santos — Terapeuta Capilar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elizangela Santos — Cabeleireira & Terapeuta Capilar",
    description:
      "Cuidado do couro cabeludo e transformação dos fios com responsabilidade.",
    images: ["/images/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
