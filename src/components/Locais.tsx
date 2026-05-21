export default function Locais() {
  return (
    <section className="locais" id="locais">
      <p className="section-label">Onde nos encontrar</p>
      <h2 className="section-title reveal">
        Nosso<br />
        <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Studio</em>
      </h2>
      <div className="locais-grid">
        <div className="local-card reveal">
          <div className="local-num">01</div>
          <p className="local-cidade">Salvador — BA</p>
          <p className="local-end">
            Av. Tancredo Neves<br />
            EDF Esplanada Tower 939, 10º andar<br />
            Sala 1001/1002 — Na Crescer Cosméticos<br />
            <span style={{ color: "var(--gold-dark)", fontSize: "0.8rem" }}>
              Ao lado do Restaurante Barbacoa
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
