import { categories, providers } from '../../data/mockData';

function Home({ onNavigate, onSelectCategory, onOpenChat }) {
  // Pega os 3 primeiros profissionais para destaque
  const destaques = providers.slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero">
        <h1>Encontre o profissional ideal</h1>
        <p>
          Conectamos você aos melhores prestadores de serviço da sua região, com praticidade, qualidade e proteção total.
        </p>
        <div className="hero-btns">
          <button
            type="button"
            className="btn-primary"
            onClick={() => onNavigate('busca')}
          >
            Começar Agora
          </button>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => onNavigate('cadastro')}
          >
            Cadastrar Agora
          </button>
        </div>
        <div className="hero-badges">
          <div className="hero-badge">
            <span className="icon">🛡️</span> Garantia contra danos
          </div>
          <div className="hero-badge">
            <span className="icon">⭐</span> Avaliações protegidas
          </div>
          <div className="hero-badge">
            <span className="icon">💬</span> Suporte 24h
          </div>
        </div>
      </section>

      {/* Categorias Populares */}
      <section className="section">
        <div className="section-title">
          <h2>Categorias populares</h2>
        </div>
        <div className="section-subtitle">
          Encontre o serviço que você precisa
        </div>
        <div className="categories-grid">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="cat-card"
              onClick={() => onSelectCategory(cat.nome)}
            >
              <div className="cat-icon" style={{ background: cat.bg }}>
                {cat.icone}
              </div>
              <div className="cat-name">{cat.nome}</div>
              <div className="cat-count">{cat.count}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Como Funciona */}
      <section className="how-section">
        <div className="section-title">
          <h2>Como Funciona?</h2>
        </div>
        <div className="section-subtitle">
          Contrate profissionais qualificados em três passos simples
        </div>
        <div className="how-steps">
          <div className="how-step">
            <div className="how-step-num">🔍</div>
            <h3>1. Busque</h3>
            <p>Busque por categoria, localização ou nome do profissional. Veja avaliações e portfólio.</p>
          </div>
          <div className="how-step">
            <div className="how-step-num">💬</div>
            <h3>2. Converse</h3>
            <p>Converse diretamente com o prestador, combine detalhes e alinhe expectativas.</p>
          </div>
          <div className="how-step">
            <div className="how-step-num">✅</div>
            <h3>3. Contrate</h3>
            <p>Contrate com segurança. A plataforma garante proteção e assegura os seus direitos.</p>
          </div>
        </div>
      </section>

      {/* Segurança */}
      <section className="section">
        <div className="section-title">
          <h2>Sua Segurança é nossa prioridade</h2>
        </div>
        <div className="section-subtitle">
          Transparência e proteção em todas as contratações
        </div>
        <div className="security-grid">
          <div className="security-card">
            <div className="sc-icon">🛡️</div>
            <h4>Garantia Contra Danos</h4>
            <p>A VemFix assume responsabilidade quando um prestador cadastrado causa danos à propriedade do cliente durante a execução de um serviço contratado pela plataforma.</p>
          </div>
          <div className="security-card">
            <div className="sc-icon">💰</div>
            <h4>Reembolso Garantido</h4>
            <p>Todo dinheiro depositado na plataforma pode ser devolvido conforme as condições da nossa política de reembolso, processada em até 7 dias úteis.</p>
          </div>
          <div className="security-card">
            <div className="sc-icon">⭐</div>
            <h4>Avaliações Verificadas</h4>
            <p>Todas as avaliações são de clientes que realmente contrataram o serviço. Transparência total para você tomar a melhor decisão.</p>
          </div>
          <div className="security-card">
            <div className="sc-icon">✅</div>
            <h4>Prestadores Verificados</h4>
            <p>Todos os prestadores passam por verificação de identidade e histórico antes de serem listados na plataforma.</p>
          </div>
        </div>
      </section>

      {/* Profissionais em Destaque */}
      <section className="section" style={{ background: 'var(--gray-100)' }}>
        <div className="section-title">
          <h2>Profissionais em Destaque</h2>
        </div>
        <div className="section-subtitle">
          Altamente avaliados pela comunidade
        </div>
        <div className="pros-grid">
          {destaques.map((pro) => (
            <div key={pro.id} className="pro-card">
              <div className="pro-card-header">
                <div className="pro-avatar" style={{ background: pro.avatarBg }}>
                  {pro.avatar}
                </div>
                <div className="pro-info">
                  <h4>{pro.nome}</h4>
                  <p>{pro.categoria} – {pro.cidade}</p>
                </div>
              </div>
              <div className="pro-rating">
                <span className="star">★</span> {pro.rating}{' '}
                <span style={{ color: 'var(--gray-500)', fontWeight: 400, marginLeft: '4px' }}>
                  ({pro.avaliacoes}) {pro.servicos} serviços
                </span>
              </div>
              <div className="pro-desc">{pro.descricao}</div>
              <button
                type="button"
                className="btn-conversar"
                onClick={() => onOpenChat(pro)}
              >
                Conversar
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
