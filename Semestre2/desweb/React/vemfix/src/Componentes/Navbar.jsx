function Navbar({ currentPage, onNavigate }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => onNavigate('home')}>
          <div className="logo-icon">V</div>
          VemFix
        </div>

        <div className="nav-links">
          <a
            onClick={() => onNavigate('home')}
            className={currentPage === 'home' ? 'active' : ''}
          >
            Início
          </a>
          <a
            onClick={() => onNavigate('busca')}
            className={currentPage === 'busca' ? 'active' : ''}
          >
            Busca
          </a>
          <a
            onClick={() => onNavigate('garantias')}
            className={currentPage === 'garantias' ? 'active' : ''}
          >
            Garantias
          </a>
          <a
            onClick={() => onNavigate('suporte')}
            className={currentPage === 'suporte' ? 'active' : ''}
          >
            Suporte
          </a>
          <a
            onClick={() => onNavigate('conversas')}
            className={currentPage === 'conversas' || currentPage === 'chat' ? 'active' : ''}
          >
            chat
          </a>
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="nav-search-btn"
            title="Buscar"
            onClick={() => onNavigate('busca')}
          >
            🔍
          </button>
          <button
            type="button"
            className="btn-cadastrar"
            onClick={() => onNavigate('cadastro')}
          >
            Cadastrar
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
