import Image from "next/image";

const servicos = [
  {
    num: "01",
    img: "/images/service-01.jpg",
    ext: "jpg",
    nome: "Consultoria Capilar",
    desc: "Avaliação minuciosa do couro cabeludo e da fibra capilar com plano terapêutico individualizado — incluindo cronograma, produtos e orientações de manutenção.",
    preco: <strong>R$ 120</strong>,
  },
  {
    num: "02",
    img: "/images/service-02.png",
    ext: "png",
    nome: "Lavagem Terapêutica",
    desc: "Mais do que uma simples lavagem — um momento de pausa, reconexão e cuidado profundo do couro cabeludo com massagem relaxante e produtos específicos.",
    preco: (
      <>
        <span className="old-price">R$ 250</span>
        <strong>R$ 180</strong>
        <span style={{ fontSize: "0.6rem", color: "var(--gold-dark)", marginLeft: "0.4rem" }}>PROMO</span>
      </>
    ),
  },
  {
    num: "03",
    img: "/images/service-03.jpg",
    ext: "jpg",
    nome: "Corte",
    desc: "Um bom corte redefine linhas e volumes, valoriza pontos fortes e ajusta a harmonia facial — reforçando identidade e presença.",
    preco: <>a partir de <strong>R$ 120</strong></>,
  },
  {
    num: "04",
    img: "/images/service-04.jpg",
    ext: "jpg",
    nome: "Corte Terapêutico",
    desc: "Retirada das pontas duplas (tricoptilose) por toda a extensão da fibra capilar, preservando o comprimento e preparando o cabelo para absorção máxima dos tratamentos.",
    preco: <>a partir de <strong>R$ 250</strong></>,
  },
  {
    num: "05",
    img: "/images/service-05.jpg",
    ext: "jpg",
    nome: "Escova Terapêutica",
    desc: "Proteção da fibra, controle correto da umidade e temperatura adequada — preservando a saúde do cabelo durante todo o processo.",
    preco: <>a partir de <strong>R$ 80</strong></>,
  },
  {
    num: "06",
    img: "/images/service-06.jpg",
    ext: "jpg",
    nome: "Detox Capilar",
    desc: "Limpeza profunda do couro cabeludo que remove oleosidade excessiva, resíduos e impurezas — desobstruindo os poros para fios mais leves e com frescor.",
    preco: <>a partir de <strong>R$ 250</strong></>,
  },
  {
    num: "07",
    img: "/images/service-07.jpg",
    ext: "jpg",
    nome: "Mechas Terapêuticas",
    desc: "Técnica que minimiza os danos dos produtos transformadores, proporcionando um resultado muito mais saudável e luminoso.",
    preco: <>a partir de <strong>R$ 520</strong></>,
  },
  {
    num: "08",
    img: "/images/service-08.jpg",
    ext: "jpg",
    nome: "Alisamento Ético",
    desc: "Um método onde a prioridade é respeitar os limites reais da fibra capilar. Não é apenas \"alisar\": é avaliar, planejar e executar o procedimento com segurança.",
    preco: <>a partir de <strong>R$ 490</strong></>,
  },
  {
    num: "09",
    img: "/images/service-09.jpg",
    ext: "jpg",
    nome: "Coloração Terapêutica",
    desc: "Formulação de baixo potencial sensibilizante com óleo de macadâmia, dermatologicamente testada. Inclui aplicação, lavagem terapêutica, tratamento específico e finalização.",
    preco: <>a partir de <strong>R$ 250</strong></>,
  },
];

export default function Servicos() {
  return (
    <section className="servicos" id="servicos">
      <div className="servicos-header">
        <div>
          <p className="section-label">O que ofereço</p>
          <h2 className="section-title reveal">
            Serviços &amp;<br />
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Tratamentos</em>
          </h2>
        </div>
        <a
          href="https://wa.me/5571996931410"
          className="btn-outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar disponibilidade
        </a>
      </div>

      <div className="servicos-grid">
        {servicos.map((s) => (
          <div key={s.num} className="servico-card reveal">
            <div className="servico-numero">{s.num}</div>
            <Image
              src={s.img}
              alt={s.nome}
              className="servico-img"
              width={400}
              height={180}
              style={{ objectFit: "cover" }}
            />
            <h3 className="servico-nome">{s.nome}</h3>
            <p className="servico-desc">{s.desc}</p>
            <div className="servico-preco">{s.preco}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
