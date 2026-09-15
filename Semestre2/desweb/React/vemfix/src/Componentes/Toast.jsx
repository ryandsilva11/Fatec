function Toast({ mensagem }) {
  return (
    <div className={`toast ${mensagem ? 'show' : ''}`} id="toast" role="alert">
      {mensagem}
    </div>
  );
}

export default Toast;
