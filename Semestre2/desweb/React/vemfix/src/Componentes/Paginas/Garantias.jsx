function Garantias() {
  return (
    <div className="garantias-page">
      <h1>Garantias e Proteções</h1>
      <p className="subtitle">Sua segurança é nossa prioridade número um</p>

      {/* Card 1: Proteção contra danos */}
      <div className="garantia-card">
        <div className="garantia-card-header">
          <div className="gi">🛡️</div>
          <h3>Proteção Contra Danos à Propriedade</h3>
        </div>
        <p>
          A VemFix assume responsabilidade quando um prestador cadastrado causa danos à propriedade do cliente durante a execução de um serviço contratado pela plataforma.
        </p>
        <ul className="garantia-list">
          <li>Cobertura de até R$ 10.000 por ocorrência</li>
          <li>Registre a ocorrência em até 72 horas após o serviço</li>
          <li>Envie fotos e documentação pelo app</li>
          <li>Análise e resposta em até 5 dias úteis</li>
        </ul>
      </div>

      {/* Card 2: Reembolso */}
      <div className="garantia-card">
        <div className="garantia-card-header">
          <div className="gi">💳</div>
          <h3>Política de Reembolso</h3>
        </div>
        <p>Todo dinheiro depositado na plataforma pode ser devolvido conforme as seguintes condições:</p>
        <ul className="garantia-list">
          <li>Reembolso total — Cancelamento antes do início do serviço</li>
          <li>Reembolso parcial — Serviço incompleto ou insatisfatório (até 48h após)</li>
          <li>Crédito na plataforma — Opção de receber como saldo para uso futuro</li>
          <li>Devolução processada em até 7 dias úteis</li>
        </ul>
      </div>

      {/* Passo a Passo */}
      <div className="how-to-claim">
        <h3>Como Solicitar Garantia ou Reembolso</h3>
        <div className="claim-steps">
          <div className="claim-step">
            <div className="num">1</div>
            <span>Acesse "Meus Serviços" e selecione o serviço contratado</span>
          </div>
          <div className="claim-step">
            <div className="num">2</div>
            <span>Clique em "Reportar Problema" ou "Solicitar Reembolso"</span>
          </div>
          <div className="claim-step">
            <div className="num">3</div>
            <span>Descreva o ocorrido e anexe fotos se necessário</span>
          </div>
          <div className="claim-step">
            <div className="num">4</div>
            <span>Nossa equipe analisará e retornará em até 48h</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Garantias;
