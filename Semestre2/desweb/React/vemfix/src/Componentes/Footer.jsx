function Footer({ onNavigate }) {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo">
            <div className="icon">V</div>
            VemFix
          </div>
          <p>
            Conectamos clientes e prestadores de serviço com confiança, praticidade e qualidade garantida.
          </p>
        </div>

        <div className="footer-col">
          <h5>Plataforma</h5>
          <ul>
            <li><a onClick={() => onNavigate('busca')}>Buscar Serviços</a></li>
            <li><a onClick={() => onNavigate('cadastro')}>Cadastrar-se</a></li>
            <li><a onClick={() => onNavigate('garantias')}>Garantias</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Suporte</h5>
          <ul>
            <li><a onClick={() => onNavigate('suporte')}>Central de Ajuda</a></li>
            <li><a onClick={() => onNavigate('suporte')}>Fale Conosco</a></li>
            <li><a onClick={() => onNavigate('garantias')}>Política de Reembolso</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Institucional</h5>
          <ul>
            <li><a onClick={() => onNavigate('garantias')}>Termos de uso</a></li>
            <li><a onClick={() => onNavigate('garantias')}>Privacidade</a></li>
            <li><a onClick={() => onNavigate('garantias')}>Responsabilidades</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 VemFix – Todos os direitos reservados
      </div>
    </footer>
  );
}

export default Footer;
