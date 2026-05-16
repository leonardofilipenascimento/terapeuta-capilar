import Image from "next/image";

const servicos = [
  {
    num: "01",
    img: "/images/service-01.jpg",
    nome: "Consultoria Capilar",
    desc: "A Consultoria Capilar consiste em uma avaliação minuciosa do couro cabeludo e da estrutura da fibra capilar, utilizando análise visual, observação clínica e identificação de sinais como inflamação, sensibilidade, queda, porosidade, elasticidade comprometida, afinamento e desequilíbrios das glândulas sebáceas. Com base nesses achados, é elaborado um plano terapêutico individualizado, incluindo recomendações de tratamento, cronograma, produtos adequados e orientações de manutenção para restaurar e preservar a saúde capilar.",
    preco: <strong>R$ 120,00</strong>,
  },
  {
    num: "02",
    img: "/images/service-02.png",
    nome: "Lavagem Terapêutica",
    desc: "Mais do que uma simples lavagem, esse é um convite para desacelerar. Um momento pensado para pausar a rotina, silenciar a mente e se reconectar consigo mesma. A lavagem terapêutica é realizada com produtos específicos para o couro cabeludo, respeitando suas necessidades e promovendo equilíbrio desde a raiz. Associada a manobras de massagem relaxante, estimula a circulação, alivia tensões e proporciona uma sensação profunda de bem-estar. Aqui, cada toque tem intenção. Cada movimento é conduzido para cuidar não só dos fios, mas também de você. Um momento exclusivo. Um tempo seu. Um cuidado que vai além da estética — é experiência, é presença, é terapia.",
    preco: (
      <>
        <span className="old-price">R$ 250,00</span>
        <strong>R$ 180,00</strong>
        <span style={{ fontSize: "0.6rem", color: "var(--gold-dark)", marginLeft: "0.4rem" }}>por tempo limitado</span>
      </>
    ),
  },
  {
    num: "03",
    img: "/images/service-04.jpg",
    nome: "Corte",
    desc: "Tem como objetivo a retirada das pontas duplas (tricoptilose) por toda a extensão da fibra capilar, preservando o comprimento. Esse processo melhora o alinhamento do fio e deixa o cabelo preparado para receber os tratamentos com melhor absorção e resultado.",
    preco: <><strong>R$ 120,00</strong></>,
  },
  {
    num: "04",
    img: "/images/service-03.jpg",
    nome: "Corte Terapêutico",
    desc: "O impacto do corte na imagem pessoal. Um bom corte redefine linhas e volumes, valoriza pontos fortes e ajusta a harmonia facial. Essa mudança simples transforma a forma como a pessoa se vê e como é percebida, reforçando identidade e presença.",
    preco: <>a partir de <strong>R$ 250,00</strong></>,
  },
  {
    num: "05",
    img: "/images/service-06.jpg",
    nome: "Escova Terapêutica",
    desc: "Na escova terapêutica, o objetivo é proteger a fibra, controlar a umidade correta, usar temperatura adequada e preservar a saúde do cabelo durante todo o processo.",
    preco: <>a partir de <strong>R$ 80,00</strong></>,
  },
  {
    num: "06",
    img: "/images/service-05.jpg",
    nome: "Detox Capilar",
    desc: "O detox capilar é uma limpeza profunda do couro cabeludo que remove oleosidade excessiva, resíduos de produtos e impurezas. Ele desobstrui os poros, melhora a saúde do couro cabeludo e deixa os fios mais leves, soltos e com sensação de frescor. Normalmente é feito 1 vez por mês ou a cada 15 dias.",
    preco: <>a partir de <strong>R$ 250,00</strong></>,
  },
  {
    num: "07",
    img: "/images/service-08.jpg",
    nome: "Mechas Terapêuticas",
    desc: "A técnica tem o objetivo de minimizar ao máximo os danos causados pelos produtos transformadores, lhe proporcionando um cabelo muito mais saudável.",
    preco: <>a partir de <strong>R$ 520,00</strong></>,
  },
  {
    num: "08",
    img: "/images/service-07.jpg",
    nome: "Alisamento Ético",
    desc: "Um alisamento que segue um método onde a prioridade é respeitar os limites reais da fibra capilar antes de qualquer transformação. Não é apenas \"alisar\": é avaliar, planejar e executar o procedimento de forma segura.",
    preco: <>a partir de <strong>R$ 490,00</strong></>,
  },
  {
    num: "09",
    img: "/images/service-09.png",
    nome: "Coloração Terapêutica",
    desc: "Formulação de baixo potencial sensibilizante, desenvolvida para reduzir reações adversas comuns em colorações tradicionais. Menor sobrecarga de agentes agressivos, com componentes como óleo de macadâmia para proteger a pele e reduzir irritações. Dermatologicamente testada.",
    preco: <>a partir de <strong>R$ 250,00</strong></>,
    lista: ["Aplicação", "Lavagem terapêutica", "Tratamento específico", "Finalização"],
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
            {s.lista && (
              <ul className="servico-lista">
                {s.lista.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            <div className="servico-preco">{s.preco}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
