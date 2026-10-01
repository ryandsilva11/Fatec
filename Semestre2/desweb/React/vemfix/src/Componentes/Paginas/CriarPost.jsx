import { useState } from 'react';

function CriarPost({ onBack, onAddPost, onShowToast }) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!titulo.trim()) {
      onShowToast('Por favor, informe o título do seu post.');
      return;
    }

    onAddPost({
      titulo,
      descricao
    });

    onShowToast('Post publicado com sucesso!');
  }

  return (
    <div className="post-page">
      <button
        type="button"
        className="back-btn"
        style={{ padding: 0, marginBottom: '20px' }}
        onClick={onBack}
      >
        ← Voltar
      </button>

      <div className="post-card">
        <h1>Criar Post</h1>
        <p className="post-subtitle">Compartilhe seu trabalho com a comunidade</p>

        <form onSubmit={handleSubmit} className="post-form">
          <div className="form-group">
            <label>Título (obrigatório)</label>
            <input
              type="text"
              placeholder="Título do seu post"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Anexos</label>
            <div
              className="upload-box"
              onClick={() => onShowToast('Selecione imagens ou vídeos para o post')}
            >
              <div className="icon">🖼️</div>
              Adicionar Anexos (imagens ou vídeos)
            </div>
          </div>

          <div className="form-group">
            <label>Descrição (opcional)</label>
            <textarea
              placeholder="Descreva seu trabalho..."
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%' }}>
            Publicar Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default CriarPost;
