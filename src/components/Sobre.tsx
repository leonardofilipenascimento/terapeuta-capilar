import Image from "next/image";

export default function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-img-wrap reveal">
        <Image
          src="/images/profile.png"
          alt="Elizangela Santos"
          className="sobre-img"
          width={600}
          height={800}
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="sobre-img-frame"></div>
        <div className="sobre-gold-tag">
          <strong>+ 10</strong>
          <span>anos de experiência</span>
        </div>
      </div>
      <div className="sobre-text reveal">
        <p className="section-label">Sobre Mim</p>
        <h2 className="section-title">
          Elizangela<br />
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Santos</em>
        </h2>
        <div className="gold-divider"></div>
        <p>
          Meu trabalho é cuidar da saúde do seu couro cabeludo e transformar seus fios com responsabilidade.
          Através de protocolos personalizados, preparo o cabelo para receber qualquer processo químico com segurança.
        </p>
        <p>
          Aqui, cada detalhe é pensado para que você sinta orgulho do seu cabelo todos os dias.
          Procedimentos que unem estética, saúde capilar e bem-estar — sempre com técnica precisa e cuidado humanizado.
        </p>
        <a
          href="https://instagram.com/elisantos_terapeutacapilar"
          className="sobre-ig"
          target="_blank"
          rel="noopener noreferrer"
        >
          ✦ @elisantos_terapeutacapilar
        </a>
      </div>
    </section>
  );
}
