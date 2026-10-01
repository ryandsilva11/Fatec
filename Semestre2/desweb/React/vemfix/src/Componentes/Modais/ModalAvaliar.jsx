import { useState } from 'react';

function ModalAvaliar({ isOpen, onClose, onShowToast }) {
  const [rating, setRating] = useState(0);
  const [comentario, setComentario] = useState('');

  if (!isOpen) return null;

  function handleSubmit(e) {
    e.preventDefault();
    if (rating === 0) {
      onShowToast('Por favor, selecione uma nota de 1 a 5 estrelas.');
      return;
    }
    onShowToast('Avaliação enviada! Obrigado pelo seu feedback. ⭐');
    setRating(0);
    setComentario('');
    onClose();
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} title="Fechar">✕</button>
        <div className="avaliar-modal">
          <h2>Avaliar Prestador</h2>

          <div className="stars-row">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                className={`star-btn ${star <= rating ? 'active' : ''}`}
                onClick={() => setRating(star)}
                title={`${star} estrelas`}
              >
                ★
              </button>
            ))}
          </div>

          <textarea
            placeholder="Descrição por escrito (opcional)"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          ></textarea>

          <button
            type="button"
            className="btn-primary"
            style={{ width: '100%' }}
            onClick={handleSubmit}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalAvaliar;
