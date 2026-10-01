import { useState } from 'react';
import {
  initialPosts,
  initialConversas,
  initialChatMessages,
  providers
} from './data/mockData';

// Componentes globais
import Navbar from './Componentes/Navbar';
import Footer from './Componentes/Footer';
import Toast from './Componentes/Toast';
import ModalAvaliar from './Componentes/Modais/ModalAvaliar';
import ModalPix from './Componentes/Modais/ModalPix';

// Páginas
import Home from './Componentes/Paginas/Home';
import Busca from './Componentes/Paginas/Busca';
import Garantias from './Componentes/Paginas/Garantias';
import Suporte from './Componentes/Paginas/Suporte';
import Conversas from './Componentes/Paginas/Conversas';
import Chat from './Componentes/Paginas/Chat';
import Perfil from './Componentes/Paginas/Perfil';
import EditarPerfil from './Componentes/Paginas/EditarPerfil';
import Cadastro from './Componentes/Paginas/Cadastro';
import CriarPost from './Componentes/Paginas/CriarPost';
import Orcamento from './Componentes/Paginas/Orcamento';

function App() {
  // Controle de navegação entre telas
  const [currentPage, setCurrentPage] = useState('home');
  const [previousPage, setPreviousPage] = useState('home');

  // Prestador atualmente selecionado para Perfil e Chat
  const [selectedProvider, setSelectedProvider] = useState(providers[0]);

  // Filtro de categoria selecionado para a página Busca
  const [selectedCategory, setSelectedCategory] = useState('Todas as categorias');

  // Estados dinâmicos da aplicação
  const [posts, setPosts] = useState(initialPosts);
  const [conversas] = useState(initialConversas);
  const [chatMessages, setChatMessages] = useState(initialChatMessages);

  // Modais e Toasts
  const [toastMessage, setToastMessage] = useState(null);
  const [toastTimeoutId, setToastTimeoutId] = useState(null);
  const [isModalAvaliarOpen, setIsModalAvaliarOpen] = useState(false);
  const [isModalPixOpen, setIsModalPixOpen] = useState(false);

  // Função central de notificação Toast
  function showToast(mensagem) {
    if (toastTimeoutId) {
      clearTimeout(toastTimeoutId);
    }
    setToastMessage(mensagem);
    const id = setTimeout(() => {
      setToastMessage(null);
    }, 3000);
    setToastTimeoutId(id);
  }

  // Função central de navegação
  function navigate(page) {
    setPreviousPage(currentPage);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function goBack() {
    setCurrentPage(previousPage || 'home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Ações de seleção de prestador e categoria
  function handleSelectCategory(categoria) {
    setSelectedCategory(categoria);
    navigate('busca');
  }

  function handleViewProfile(provider) {
    setSelectedProvider(provider);
    navigate('perfil');
  }

  function handleOpenChat(provider) {
    setSelectedProvider(provider);
    navigate('chat');
  }

  // Interação de curtir/descurtir posts
  function handleToggleLike(postId) {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          const jaCurtido = post.curtido;
          return {
            ...post,
            curtido: !jaCurtido,
            curtidas: jaCurtido ? post.curtidas - 1 : post.curtidas + 1
          };
        }
        return post;
      })
    );
  }

  // Adição de novo post a partir da página CriarPost
  function handleAddPost({ titulo, descricao }) {
    const novoPost = {
      id: Date.now(),
      autor: 'Ryan Dias da Silva',
      categoria: 'Prestador',
      cidade: 'Salto - SP',
      avatar: 'RD',
      avatarBg: '#1a9e6e',
      rating: '5.0',
      texto: `${titulo} - ${descricao}`,
      iconeImg: '🛠️',
      imgBg: '#e6f7f1',
      curtidas: 1,
      curtido: true,
      providerId: 1
    };

    setPosts([novoPost, ...posts]);
    navigate('busca');
  }

  // Envio de mensagem no chat com resposta simulada
  function handleSendMessage(texto) {
    const now = new Date();
    const horario = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

    const novaMensagem = {
      id: Date.now(),
      tipo: 'sent',
      texto,
      horario
    };

    setChatMessages((prev) => [...prev, novaMensagem]);

    // Resposta automática simulada do prestador
    setTimeout(() => {
      const respostas = [
        'Ok! Entendido.',
        'Combinado, estarei lá no horário.',
        'Perfeito! Qualquer dúvida pode me avisar por aqui.',
        'Ótimo! Até lá. 👍'
      ];
      const respostaAleatoria = respostas[Math.floor(Math.random() * respostas.length)];

      const msgResposta = {
        id: Date.now() + 1,
        tipo: 'received',
        texto: respostaAleatoria,
        horario
      };

      setChatMessages((prev) => [...prev, msgResposta]);
    }, 1200);
  }

  return (
    <div className="app-root">
      {/* Barra de Navegação Fixa */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigate}
      />

      {/* Roteamento de Telas Baseado em Estado */}
      <main>
        {currentPage === 'home' && (
          <Home
            onNavigate={navigate}
            onSelectCategory={handleSelectCategory}
            onOpenChat={handleOpenChat}
          />
        )}

        {currentPage === 'busca' && (
          <Busca
            posts={posts}
            onToggleLike={handleToggleLike}
            onViewProfile={handleViewProfile}
            onOpenChat={handleOpenChat}
            onNavigate={navigate}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        )}

        {currentPage === 'garantias' && (
          <Garantias />
        )}

        {currentPage === 'suporte' && (
          <Suporte onShowToast={showToast} />
        )}

        {currentPage === 'conversas' && (
          <Conversas
            conversas={conversas}
            onOpenChat={handleOpenChat}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'chat' && (
          <Chat
            provider={selectedProvider}
            messages={chatMessages}
            onSendMessage={handleSendMessage}
            onBack={() => navigate('conversas')}
            onNavigate={navigate}
            onOpenPixModal={() => setIsModalPixOpen(true)}
            onOpenAvaliarModal={() => setIsModalAvaliarOpen(true)}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'perfil' && (
          <Perfil
            provider={selectedProvider}
            onBack={goBack}
            onOpenChat={handleOpenChat}
          />
        )}

        {currentPage === 'editar' && (
          <EditarPerfil
            onBack={goBack}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'cadastro' && (
          <Cadastro
            onBack={goBack}
            onNavigate={navigate}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'post' && (
          <CriarPost
            onBack={goBack}
            onAddPost={handleAddPost}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'orcamento' && (
          <Orcamento
            onBack={goBack}
            onNavigate={navigate}
            onShowToast={showToast}
          />
        )}
      </main>

      {/* Rodapé (exibido na maioria das páginas exceto chat em tela cheia) */}
      {currentPage !== 'chat' && (
        <Footer onNavigate={navigate} />
      )}

      {/* Botão Flutuante de Atalho (Demo Helper do site original) */}
      <div className="floating-helper">
        <button
          type="button"
          onClick={() => navigate('editar')}
        >
          ✏️ Editar Perfil
        </button>
      </div>

      {/* Modais Globais */}
      <ModalAvaliar
        isOpen={isModalAvaliarOpen}
        onClose={() => setIsModalAvaliarOpen(false)}
        onShowToast={showToast}
      />

      <ModalPix
        isOpen={isModalPixOpen}
        onClose={() => setIsModalPixOpen(false)}
        onShowToast={showToast}
      />

      {/* Notificação Toast */}
      <Toast mensagem={toastMessage} />
    </div>
  );
}

export default App;
