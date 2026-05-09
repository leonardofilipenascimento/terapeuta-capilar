const politicas = [
  {
    titulo: "Em caso de desistência",
    texto: "Avise com 24h de antecedência para que seja possível te reagendar ou disponibilizar a vaga para outra cliente.",
  },
  {
    titulo: "Tempo de tolerância",
    texto: "Atrasos superiores a 15 minutos são automaticamente cancelados.",
  },
  {
    titulo: "Não comparecimento",
    texto: "Em caso de falta sem aviso prévio, o próximo horário será agendado mediante pagamento de 30% do procedimento.",
  },
  {
    titulo: "Compareça com antecedência",
    texto: "Se possível, chegue com 10 minutos de antecedência para garantir seu horário e aproveitar ao máximo o atendimento.",
  },
];

export default function Politicas() {
  return (
    <section className="politicas" id="politicas">
      <p className="section-label">Informações de Atendimento</p>
      <h2 className="section-title reveal">
        Políticas do<br />
        <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Studio</em>
      </h2>
      <div className="pol-grid">
        {politicas.map((p) => (
          <div key={p.titulo} className="pol-item reveal">
            <div className="pol-dot"></div>
            <div>
              <h4>{p.titulo}</h4>
              <p>{p.texto}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
