import { useState, useRef, useEffect } from 'react';

function Chat({
  provider,
  messages,
  onSendMessage,
  onBack,
  onNavigate,
  onOpenPixModal,
  onOpenAvaliarModal,
  onShowToast
}) {
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  // Garante scroll automático para a última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  function handleSend() {
    const text = inputText.trim();
    if (!text) return;
    onSendMessage(text);
    setInputText('');
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  }

  const currentProvider = provider || {
    nome: 'Carlos Silva',
    categoria: 'Encanador',
    avatar: 'CS',
    avatarBg: '#059669'
  };

  return (
    <div className="chat-page">
      {/* Header do Chat */}
      <div className="chat-header">
        <button
          type="button"
          className="chat-back"
          onClick={onBack}
          title="Voltar às conversas"
        >
          ←
        </button>
        <div
          className="chat-header-av"
          style={{ background: currentProvider.avatarBg }}
        >
          {currentProvider.avatar}
        </div>
        <div className="chat-header-info">
          <h4>{currentProvider.nome}</h4>
          <p>Online</p>
        </div>

        <div className="chat-header-actions">
          <button
            type="button"
            className="chat-header-btn"
            title="Abrir Pix"
            onClick={onOpenPixModal}
          >
            💠 Pix
          </button>
          <button
            type="button"
            className="chat-header-btn"
            title="Avaliar serviço"
            onClick={onOpenAvaliarModal}
          >
            ⭐ Avaliar
          </button>
          <button
            type="button"
            className="chat-header-btn"
            title="Elaborar Orçamento"
            onClick={() => onNavigate('orcamento')}
          >
            📄 Orçamento
          </button>
        </div>
      </div>

      {/* Lista de Mensagens */}
      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`msg ${msg.tipo}`}>
            <div className="bubble">{msg.texto}</div>
            <div className="msg-time">{msg.horario}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Barra de Entrada */}
      <div className="chat-input-bar">
        <input
          type="text"
          className="chat-input"
          placeholder="Digite sua mensagem..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          className="chat-input-btn attach"
          title="Anexar arquivo"
          onClick={() => onShowToast('Escolha o arquivo para enviar')}
        >
          📎
        </button>
        <button
          type="button"
          className="chat-input-btn money"
          title="Orçamento / Pagamento"
          onClick={() => onNavigate('orcamento')}
        >
          💲
        </button>
        <button
          type="button"
          className="chat-input-btn send"
          title="Enviar mensagem"
          onClick={handleSend}
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default Chat;
