export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-eyebrow">Cabeleireira &amp; Terapeuta Capilar</p>
        <h1 className="hero-title">
          Saúde,<br />
          <em>beleza</em> e<br />
          presença.
        </h1>
        <p className="hero-sub">
          Cuidado do couro cabeludo e transformação dos fios com responsabilidade.
          Protocolos personalizados para que você sinta orgulho do seu cabelo todos os dias.
        </p>
        <a
          href="https://wa.me/5571996931410"
          className="btn-gold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agendar pelo WhatsApp
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
      <div className="hero-line"></div>
    </section>
  );
}
