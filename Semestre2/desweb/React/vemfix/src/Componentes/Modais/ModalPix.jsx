function ModalPix({ isOpen, onClose, onShowToast }) {
  if (!isOpen) return null;

  const chavePix = '00020126360014BR.GOV.BCB.PIX0114+5511958357641520400005303986582BR5918RyanDias da Silva6009SAOPAULO62140510hhwtpmxP6A6304DDDC';

  function handleCopy() {
    navigator.clipboard?.writeText(chavePix);
    onShowToast('Código Pix copiado e enviado no chat!');
  }

  function handleQrCode() {
    onShowToast('QR Code enviado no chat!');
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} title="Fechar">✕</button>
        <div className="pix-modal">
          <div className="pix-logo">💠</div>
          <h2>Pagamento Pix</h2>

          <div className="pix-options">
            <button
              type="button"
              className="pix-option"
              onClick={handleQrCode}
            >
              <span>Enviar QR Code</span>
              <span className="pix-qr">▣</span>
            </button>
            <button
              type="button"
              className="pix-option"
              onClick={handleCopy}
            >
              <span>Enviar código Pix</span>
              <span>📋</span>
            </button>
          </div>

          <div className="pix-code-box">
            {chavePix}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalPix;
