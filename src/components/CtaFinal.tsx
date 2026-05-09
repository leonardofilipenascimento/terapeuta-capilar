export default function CtaFinal() {
  return (
    <section className="cta-final" id="contato">
      <div className="cta-bg"></div>
      <div className="cta-content reveal">
        <p className="section-label">Viva essa experiência</p>
        <h2 className="section-title">
          Transforme seus<br />
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>fios</em>
        </h2>
        <p>
          Agendamentos exclusivos pelo WhatsApp. Cada protocolo é pensado para que você sinta orgulho do seu cabelo todos os dias.
        </p>
        <div className="cta-btns">
          <a
            href="https://wa.me/5571996931410"
            className="btn-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp (71) 99693-1410
          </a>
          <a
            href="https://instagram.com/elisantos_terapeutacapilar"
            className="btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
