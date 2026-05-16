export default function Fidelidade() {
  return (
    <section className="fidelidade" id="fidelidade">
      <p className="section-label">Programa</p>
      <h2 className="section-title reveal">Fidelidade &amp;<br />Recompensas</h2>
      <div className="fid-grid">
        <div className="fid-item reveal">
          <div className="fid-icon">✦</div>
          <h3>Procedimento Duplo</h3>
          <p>Fazendo mais de um procedimento 2x dentro de 30 dias, você ganha um desconto ou mimo especial.</p>
        </div>
        <div className="fid-item reveal">
          <div className="fid-icon">◈</div>
          <h3>Pacote de Sessões</h3>
          <p>Fechando 4 sessões de tratamento, você ganha uma escova. Fechando mais de um procedimento, ganha um tratamento.</p>
        </div>
        <div className="fid-item reveal">
          <div className="fid-icon">⬡</div>
          <h3>Desconto no Pagamento</h3>
          <p>Até 10% de desconto em pagamentos via Pix, espécie ou débito.</p>
        </div>
        <div className="fid-item reveal">
          <div className="fid-icon">◇</div>
          <h3>Manutenções</h3>
          <p>Realizar a manutenção de químicas dentro do prazo estabelecido também gera bônus e descontos.</p>
        </div>
      </div>
    </section>
  );
}
