"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Servicos from "@/components/Servicos";
import Fidelidade from "@/components/Fidelidade";
import Politicas from "@/components/Politicas";
import Locais from "@/components/Locais";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Nav />
      <Hero />
      <Sobre />
      <Servicos />
      <Fidelidade />
      <Politicas />
      <Locais />
      <CtaFinal />
      <Footer />
    </>
  );
}
