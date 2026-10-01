function Perfil({ provider, onBack, onOpenChat }) {
  const currentProvider = provider || {
    id: 4,
    nome: 'Lucia Ferreira',
    categoria: 'Limpeza',
    cidade: 'São Paulo',
    rating: 5.0,
    avaliacoes: 203,
    servicos: 512,
    avatar: 'LF',
    avatarBg: '#059669',
    sobre: 'Serviços de limpeza residencial e pós-obra. Equipe treinada e produtos de qualidade. Atendo toda a Grande São Paulo com pontualidade e profissionalismo.',
    reviews: [
      { autor: 'Beatriz M.', texto: 'Excelente profissional! Pontual, educada e fez um trabalho impecável. Recomendo!', estrelas: 5, tempo: 'há 2 dias' },
      { autor: 'Rodrigo T.', texto: 'Muito bom, resolveu o problema rápido e com preço justo. Voltarei a contratar.', estrelas: 5, tempo: 'há 1 semana' },
      { autor: 'Carla N.', texto: 'Limpeza pós-obra perfeita. Super recomendo a Lucia para qualquer trabalho de limpeza!', estrelas: 5, tempo: 'há 2 semanas' }
    ]
  };

  return (
    <div className="perfil-page">
      <button
        type="button"
        className="back-btn"
        style={{ padding: 0, marginBottom: '20px' }}
        onClick={onBack}
      >
        ← Voltar
      </button>

      {/* Banner Principal */}
      <div className="perfil-banner">
        <div
          className="perfil-avatar"
          style={{ background: currentProvider.avatarBg }}
        >
          {currentProvider.avatar}
        </div>

        <div style={{ flex: 1 }}>
          <h2>{currentProvider.nome}</h2>
          <div className="meta">
            🧹 {currentProvider.categoria} &nbsp;•&nbsp; 📍 {currentProvider.cidade}
          </div>
          <div className="rating">
            ⭐ <strong>{currentProvider.rating.toFixed(1)}</strong> &nbsp;
            ({currentProvider.avaliacoes} avaliações) &nbsp;•&nbsp;{' '}
            {currentProvider.servicos} serviços
          </div>
        </div>

        <div className="perfil-actions">
          <button
            type="button"
            className="btn-action primary"
            onClick={() => onOpenChat(currentProvider)}
          >
            💬 Conversar
          </button>
        </div>
      </div>

      {/* Seção Sobre */}
      <div className="perfil-section">
        <h3>Sobre</h3>
        <p style={{ fontSize: '14px', color: 'var(--gray-700)', lineHeight: 1.6 }}>
          {currentProvider.sobre || currentProvider.descricao}
        </p>
      </div>

      {/* Seção Avaliações Recentes */}
      <div className="perfil-section">
        <h3>Avaliações Recentes</h3>
        {currentProvider.reviews && currentProvider.reviews.length > 0 ? (
          currentProvider.reviews.map((rev, idx) => (
            <div key={idx} className="review">
              <div className="review-stars">
                {[...Array(rev.estrelas || 5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <div className="review-text">{rev.texto}</div>
              <div className="review-meta">{rev.tempo}</div>
            </div>
          ))
        ) : (
          <p style={{ fontSize: '13px', color: 'var(--gray-500)' }}>
            Nenhuma avaliação ainda.
          </p>
        )}
      </div>

      {/* Selo Protegido */}
      <div className="perfil-protected">
        <div className="icon">✅</div>
        <div className="text">
          <h4>Protegido pela VemFix</h4>
          <p>Garantia contra danos e reembolso incluso em todos os serviços contratados.</p>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
