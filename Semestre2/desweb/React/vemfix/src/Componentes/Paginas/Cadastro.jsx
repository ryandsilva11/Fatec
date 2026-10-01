import { useState } from 'react';

function Cadastro({ onBack, onNavigate, onShowToast }) {
  const [tab, setTab] = useState('cliente');

  // Form cliente
  const [nomeC, setNomeC] = useState('');
  const [emailC, setEmailC] = useState('');
  const [telC, setTelC] = useState('');
  const [cidadeC, setCidadeC] = useState('');
  const [cpfC, setCpfC] = useState('');
  const [nascC, setNascC] = useState('');
  const [senhaC, setSenhaC] = useState('');
  const [termosC, setTermosC] = useState(false);

  // Form prestador
  const [nomeP, setNomeP] = useState('');
  const [emailP, setEmailP] = useState('');
  const [telP, setTelP] = useState('');
  const [cidadeP, setCidadeP] = useState('');
  const [categoriaP, setCategoriaP] = useState('Encanador');
  const [expP, setExpP] = useState('');
  const [senhaP, setSenhaP] = useState('');
  const [termosP, setTermosP] = useState(false);

  function handleSubmitCliente(e) {
    e.preventDefault();
    if (!nomeC || !emailC || !senhaC) {
      onShowToast('Por favor, preencha nome, e-mail e senha.');
      return;
    }
    if (!termosC) {
      onShowToast('Por favor, aceite os termos de uso.');
      return;
    }
    onShowToast('Conta criada com sucesso! Bem-vindo ao VemFix 🎉');
    onNavigate('home');
  }

  function handleSubmitPrestador(e) {
    e.preventDefault();
    if (!nomeP || !emailP || !senhaP) {
      onShowToast('Por favor, preencha nome, e-mail e senha.');
      return;
    }
    if (!termosP) {
      onShowToast('Por favor, aceite os termos de uso.');
      return;
    }
    onShowToast('Conta de prestador criada com sucesso! Bem-vindo ao VemFix 🎉');
    onNavigate('home');
  }

  return (
    <div className="cadastro-page">
      <button
        type="button"
        className="back-btn"
        style={{ padding: 0, marginBottom: '20px' }}
        onClick={onBack}
      >
        ← Voltar
      </button>

      <div className="cadastro-card">
        <h1>Crie sua Conta</h1>
        <p className="cadastro-subtitle">Rápido e simples — comece em menos de 1 minuto</p>

        {/* Alternância de Abas */}
        <div className="tabs">
          <button
            type="button"
            className={`tab ${tab === 'cliente' ? 'active' : ''}`}
            onClick={() => setTab('cliente')}
          >
            Sou Cliente
          </button>
          <button
            type="button"
            className={`tab ${tab === 'prestador' ? 'active' : ''}`}
            onClick={() => setTab('prestador')}
          >
            Sou Prestador
          </button>
        </div>

        {/* Formulário Cliente */}
        {tab === 'cliente' ? (
          <form className="cadastro-form" onSubmit={handleSubmitCliente}>
            <div className="form-group">
              <label>Nome completo</label>
              <input
                type="text"
                placeholder="Seu nome"
                value={nomeC}
                onChange={(e) => setNomeC(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>E-mail</label>
              <input
                type="email"
                placeholder="seu@email.com"
                value={emailC}
                onChange={(e) => setEmailC(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Telefone</label>
              <input
                type="tel"
                placeholder="(11) 99999-9999"
                value={telC}
                onChange={(e) => setTelC(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Cidade</label>
              <input
                type="text"
                placeholder="Sua cidade"
                value={cidadeC}
                onChange={(e) => setCidadeC(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>CPF</label>
              <input
                type="text"
                placeholder="000.000.000-00"
                value={cpfC}
                onChange={(e) => setCpfC(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Data de nascimento</label>
              <input
                type="date"
                value={nascC}
                onChange={(e) => setNascC(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Senha</label>
              <input
                type="password"
                placeholder="Mínimo 8 dígitos"
                value={senhaC}
                onChange={(e) => setSenhaC(e.target.value)}
              />
            </div>

            <div className="cadastro-terms">
              <input
                type="checkbox"
                id="termos-c"
                checked={termosC}
                onChange={(e) => setTermosC(e.target.checked)}
              />
              <label htmlFor="termos-c">
                Concordo com os <a>Termos de Uso e Política de Privacidade</a>
              </label>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%' }}>
              Criar Conta
            </button>

            <p className="cadastro-footer">
              Já tem conta? <a onClick={() => onNavigate('home')}>Entrar</a>
            </p>
          </form>
        ) : (
          /* Formulário Prestador */
          <form className="cadastro-form" onSubmit={handleSubmitPrestador}>
            <div className="form-group">
              <label>Nome completo</label>
              <input
                type="text"
                placeholder="Seu nome"
                value={nomeP}
                onChange={(e) => setNomeP(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>E-mail</label>
              <input
                type="email"
                placeholder="seu@email.com"
                value={emailP}
                onChange={(e) => setEmailP(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Telefone</label>
              <input
                type="tel"
                placeholder="(11) 99999-9999"
                value={telP}
                onChange={(e) => setTelP(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Cidade</label>
              <input
                type="text"
                placeholder="Sua cidade"
                value={cidadeP}
                onChange={(e) => setCidadeP(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Categoria de Serviço</label>
              <select
                value={categoriaP}
                onChange={(e) => setCategoriaP(e.target.value)}
              >
                <option value="Encanador">Encanador</option>
                <option value="Eletricista">Eletricista</option>
                <option value="Pintor">Pintor</option>
                <option value="Jardineiro">Jardineiro</option>
                <option value="Limpeza">Limpeza</option>
                <option value="Pedreiro">Pedreiro</option>
                <option value="Ar condicionado">Ar condicionado</option>
                <option value="Chaveiro">Chaveiro</option>
              </select>
            </div>
            <div className="form-group">
              <label>Breve descrição da experiência</label>
              <textarea
                placeholder="Conte um pouco sobre sua experiência..."
                value={expP}
                onChange={(e) => setExpP(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label>Senha</label>
              <input
                type="password"
                placeholder="Mínimo 8 dígitos"
                value={senhaP}
                onChange={(e) => setSenhaP(e.target.value)}
              />
            </div>

            <div className="cadastro-terms">
              <input
                type="checkbox"
                id="termos-p"
                checked={termosP}
                onChange={(e) => setTermosP(e.target.checked)}
              />
              <label htmlFor="termos-p">
                Concordo com os <a>Termos de Uso e Política de Privacidade</a>
              </label>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%' }}>
              Criar Conta
            </button>

            <p className="cadastro-footer">
              Já tem conta? <a onClick={() => onNavigate('home')}>Entrar</a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default Cadastro;
