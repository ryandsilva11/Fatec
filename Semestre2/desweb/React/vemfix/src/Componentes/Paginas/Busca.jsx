import { useState } from 'react';
import { providers } from '../../data/mockData';

function Busca({
  posts,
  onToggleLike,
  onViewProfile,
  onOpenChat,
  onNavigate,
  selectedCategory,
  onSelectCategory
}) {
  const [searchTerm, setSearchTerm] = useState('');

  // Lista de chips de filtros rápidos
  const chips = [
    'Todas as categorias',
    'Melhor Avaliação',
    '❤️ Favoritos',
    'Encanador',
    'Pedreiro',
    'Pintor',
    'Eletricista'
  ];

  // Filtra os posts pelo texto e pela categoria selecionada
  const filteredPosts = posts.filter((post) => {
    const matchBusca =
      searchTerm === '' ||
      post.autor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.texto.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.categoria.toLowerCase().includes(searchTerm.toLowerCase());

    const matchCategoria =
      !selectedCategory ||
      selectedCategory === 'Todas as categorias' ||
      selectedCategory === 'Melhor Avaliação' ||
      selectedCategory === '❤️ Favoritos' ||
      post.categoria.toLowerCase() === selectedCategory.toLowerCase();

    return matchBusca && matchCategoria;
  });

  return (
    <div className="busca-page">
      {/* Header do Feed */}
      <div className="feed-header">
        <div className="search-input-wrap">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Buscar por posts ou prestadores"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="select-wrap">
          <label htmlFor="provider-type-select">Tipo de prestador</label>
          <select
            id="provider-type-select"
            value={selectedCategory || ''}
            onChange={(e) => onSelectCategory(e.target.value || 'Todas as categorias')}
          >
            <option value="Todas as categorias">Todos</option>
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

        <div className="filter-chips">
          {chips.map((chip) => (
            <div
              key={chip}
              className={`chip ${
                (selectedCategory === chip) || (!selectedCategory && chip === 'Todas as categorias')
                  ? 'active'
                  : ''
              } ${chip.includes('Favoritos') ? 'fav' : ''}`}
              onClick={() => onSelectCategory(chip)}
            >
              {chip.includes('Encanador') && '🔧 '}
              {chip.includes('Pedreiro') && '🧱 '}
              {chip.includes('Pintor') && '🎨 '}
              {chip.includes('Eletricista') && '🛠️ '}
              {chip}
            </div>
          ))}
        </div>
      </div>

      {/* Prestadores em Destaque (Carrossel Horizontal) */}
      <div className="feed-top-pros">
        {providers.map((pro) => (
          <div
            key={pro.id}
            className="top-pro-chip"
            onClick={() => onViewProfile(pro)}
          >
            <div className="av" style={{ background: pro.avatarBg }}>
              {pro.avatar}
            </div>
            <div>
              <div className="name">{pro.nome}</div>
              <div className="loc">{pro.categoria} – {pro.cidade}</div>
            </div>
            <div className="rating">★ {pro.rating.toFixed(1)}</div>
          </div>
        ))}
      </div>

      {/* Conteúdo do Feed */}
      <div className="feed-content">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => {
            const providerRef = providers.find((p) => p.id === post.providerId) || providers[0];

            return (
              <article key={post.id} className="feed-post">
                <div className="post-header">
                  <div className="av" style={{ background: post.avatarBg }}>
                    {post.avatar}
                  </div>
                  <div className="info">
                    <h4>{post.autor}</h4>
                    <p>{post.categoria} – {post.cidade}</p>
                  </div>
                  <div className="rating">★ {post.rating}</div>
                </div>

                <div className="post-caption">{post.texto}</div>

                <div className="post-img" style={{ background: post.imgBg }}>
                  {post.iconeImg}
                </div>

                <div className="post-actions">
                  <button
                    type="button"
                    className={`post-action ${post.curtido ? 'liked' : ''}`}
                    onClick={() => onToggleLike(post.id)}
                  >
                    {post.curtido ? '♥' : '♡'}{' '}
                    <span>{post.curtidas.toLocaleString('pt-BR')}</span>
                  </button>

                  <button
                    type="button"
                    className="post-action"
                    onClick={() => onViewProfile(providerRef)}
                  >
                    ↗ Visitar perfil
                  </button>

                  <button
                    type="button"
                    className="post-action"
                    onClick={() => onOpenChat(providerRef)}
                  >
                    💬 Contatar
                  </button>
                </div>
              </article>
            );
          })
        ) : (
          <div style={{ textAlign: 'center', padding: '40px', color: 'var(--gray-500)' }}>
            Nenhum post encontrado para esta busca ou filtro.
          </div>
        )}
      </div>

      {/* Botão Flutuante (FAB) para Criar Post */}
      <button
        type="button"
        className="fab"
        title="Novo post"
        onClick={() => onNavigate('post')}
      >
        ＋
      </button>
    </div>
  );
}

export default Busca;
