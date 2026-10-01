import { providers } from '../../data/mockData';

function Conversas({ conversas, onOpenChat, onShowToast }) {
  function handleAccept(conv, e) {
    e.stopPropagation();
    const pro = providers.find((p) => p.id === conv.providerId) || providers[0];
    onShowToast('Conversa aceita!');
    onOpenChat(pro);
  }

  function handleDeny(conv, e) {
    e.stopPropagation();
    onShowToast('Solicitação recusada.');
  }

  function handleClickItem(conv) {
    const pro = providers.find((p) => p.id === conv.providerId) || providers[0];
    onOpenChat(pro);
  }

  return (
    <div className="conversas-page">
      <h1>Conversas</h1>

      {conversas.map((conv) => (
        <div
          key={conv.id}
          className="conversa-item"
          onClick={() => handleClickItem(conv)}
        >
          <div className="conversa-av" style={{ background: conv.avatarBg }}>
            {conv.avatar}
          </div>

          <div className="conversa-info">
            <div className="time">{conv.horario}</div>
            <h4>{conv.nome}</h4>
            <p>{conv.mensagem}</p>
          </div>

          {conv.tipo === 'solicitacao' ? (
            <div className="conversa-actions">
              <button
                type="button"
                className="conv-btn accept"
                title="Aceitar"
                onClick={(e) => handleAccept(conv, e)}
              >
                ✓
              </button>
              <button
                type="button"
                className="conv-btn deny"
                title="Recusar"
                onClick={(e) => handleDeny(conv, e)}
              >
                🚫
              </button>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default Conversas;
