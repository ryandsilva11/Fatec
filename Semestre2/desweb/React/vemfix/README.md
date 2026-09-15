# VemFix – Plataforma de Conexão com Prestadores de Serviços

O **VemFix** é uma aplicação web desenvolvida para aproximar clientes e profissionais autônomos (encanadores, eletricistas, pintores, jardineiros, pedreiros, serviços de limpeza, entre outros) de forma ágil, segura e protegida por garantias contratuais.

Esta versão do projeto consiste na migração e componentização completa para **React** e **Vite**, mantendo fidelidade milimétrica à identidade visual original, estruturada com boas práticas de componentização, reatividade por estados (`useState`) e Vanilla CSS responsivo.

---

## 🔗 Link do Repositório Git
* Repositório: [https://github.com/ryandsilva11/Fatec.git](https://github.com/ryandsilva11/Fatec.git)
* Branch: `feat/vemfix-react`
* Caminho do Projeto: `Semestre2/desweb/React/vemfix`

---

## 👥 Integrantes do Grupo
* **Ryan Dias da Silva** (Integrante responsável pela entrega)
* `[Nome do Integrante 2 - RA / Função]`
* `[Nome do Integrante 3 - RA / Função]`
* `[Nome do Integrante 4 - RA / Função]`

---

## 🛠️ Tecnologias Utilizadas
* **HTML5**: Estrutura altamente semântica (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<form>`).
* **CSS3 (Vanilla CSS)**: Design system com variáveis CSS (`:root`), Flexbox, CSS Grid com auto-fit responsivo, transições suaves, sombras padronizadas e tipografia com Google Fonts (`Sora` e `Inter`).
* **JavaScript (ES6+)**: Funções puras, desestruturação de objetos, spread operators, métodos modernos de array (`.map()`, `.filter()`).
* **React**: Componentes funcionais, fluxo de dados unidirecional via props, gerenciamento de estado local (`useState`), renderização condicional e feedback dinâmico.
* **Vite**: Ambiente de desenvolvimento ultrarrápido com Hot Module Replacement (HMR) e empacotamento otimizado para produção.

---

## 🏛️ Arquitetura de Componentes

```
src/
├── data/
│   └── mockData.js             # Base de dados estruturada (prestadores, posts, faqs, chats)
├── Componentes/
│   ├── Navbar.jsx              # Cabeçalho global com logo, links de navegação e botão de cadastro
│   ├── Footer.jsx              # Rodapé com links institucionais, suporte e direitos reservados
│   ├── Toast.jsx               # Notificações flutuantes temporárias de ações do usuário
│   ├── Modais/
│   │   ├── ModalAvaliar.jsx    # Modal com seletor interativo de 1 a 5 estrelas e comentário
│   │   └── ModalPix.jsx        # Modal com opções de QR Code e código Pix copia-e-cola
│   └── Paginas/
│       ├── Home.jsx            # Hero institucional, categorias, etapas de uso e destaques
│       ├── Busca.jsx           # Feed comunitário com filtros, carrossel de prestadores e curtidas
│       ├── Garantias.jsx       # Políticas de segurança, cobertura contra danos e reembolsos
│       ├── Suporte.jsx         # Accordion interativo de perguntas frequentes e formulário de contato
│       ├── Conversas.jsx       # Lista de conversas com solicitações de serviço e botões de aceite
│       ├── Chat.jsx            # Troca de mensagens em tempo real simulada com envio e respostas
│       ├── Perfil.jsx          # Perfil detalhado do prestador com avaliações de clientes
│       ├── EditarPerfil.jsx    # Formulário para alteração de dados cadastrais e especialidade
│       ├── Cadastro.jsx        # Cadastro com abas separadas para Clientes e Prestadores
│       ├── CriarPost.jsx       # Interface para publicação de serviços realizados no feed
│       └── Orcamento.jsx       # Formulário técnico para emissão e envio de orçamentos
└── App.jsx                     # Orquestrador central de rotas de tela, modais e estado global
```

---

## 📱 Principais Telas e Funcionalidades

### 1. Início (`Home`)
* **Hero Institucional**: Chamada visual com botões de início imediato e badges de segurança (*Garantia contra danos*, *Avaliações protegidas*, *Suporte 24h*).
* **Categorias Populares**: Grid com 8 categorias de serviços com contadores de profissionais. O clique em qualquer categoria direciona o usuário para a tela de busca já filtrando pela área escolhida.
* **Como Funciona**: Guia visual com as três etapas da plataforma (*Busque*, *Converse*, *Contrate*).
* **Segurança e Garantias**: Informações sobre a proteção contra danos de até R$ 10.000 e política de reembolso transparente.
* **Profissionais em Destaque**: Cards de prestadores bem avaliados pela comunidade com botão direto para abertura de chat.

### 2. Busca e Feed Comunitário (`Busca`)
* **Barra de Pesquisa**: Filtro em tempo real por termos de busca (nome do profissional, descrição ou categoria).
* **Filtros Rápidos e Seleção**: Dropdown por tipo de prestador e chips de filtragem rápida (*Todas as categorias*, *Melhor Avaliação*, *Favoritos*, *Encanador*, *Pedreiro*, etc.).
* **Carrossel de Prestadores**: Listagem horizontal dos profissionais de destaque com acesso rápido aos respectivos perfis.
* **Feed de Postagens**: Publicações de trabalhos realizados com sistema interativo de **curtir/descurtir** com atualização instantânea do contador e botão de visita ao perfil do profissional.
* **Botão Flutuante (FAB)**: Atalho flutuante (`＋`) para criação de novas postagens no feed.

### 3. Garantias e Proteções (`Garantias`)
* Apresentação da cobertura contra danos à propriedade física durante a execução do serviço.
* Regras e condições para solicitação de reembolso total ou parcial em até 7 dias úteis.
* Passo a passo estruturado para abertura de ocorrência ou solicitação de suporte.

### 4. Central de Suporte (`Suporte`)
* **FAQ Interativo**: Perguntas frequentes com mecanismo de accordion expansível, revelando respostas com transição suave.
* **Formulário Fale Conosco**: Formulário com campos de nome, e-mail, perfil (cliente ou prestador), assunto e mensagem, com disparo de alerta visual via Toast.

### 5. Central de Conversas (`Conversas`)
* Listagem de mensagens e solicitações de orçamento pendentes.
* Botões de ação rápida para aceitar (`✓`) ou recusar (`🚫`) solicitações de contato.
* Acesso imediato à tela de chat ao clicar sobre qualquer item da lista.

### 6. Chat em Tempo Real (`Chat`)
* Interface de conversação com balões estilizados para mensagens enviadas e recebidas.
* Envio de mensagem com a tecla **Enter** ou clique no botão de envio.
* **Resposta automática simulada**: Respostas automáticas do prestador após 1,2 segundos para simular a experiência real.
* **Atalhos Operacionais**:
  * Botão **💠 Pix**: Abre o modal com dados e QR Code de pagamento.
  * Botão **⭐ Avaliar**: Abre o modal de feedback com nota e texto.
  * Botão **📄 Orçamento**: Abre a tela para preenchimento de orçamento detalhado.

### 7. Perfil do Prestador (`Perfil`)
* Banner personalizado com avatar, nome, especialidade, localização e média de avaliações.
* Seção biográfica "Sobre" com descrição dos serviços prestados.
* Lista de avaliações reais de clientes com estrelas e data relativa.
* Selo de proteção oficial VemFix.

### 8. Edição de Perfil (`EditarPerfil`)
* Formulário para atualização do nome completo, telefone para contato, cidade/estado e seleção de ocupação.
* Opção para inativação temporária da conta na plataforma.

### 9. Cadastro de Usuários (`Cadastro`)
* Alternância dinâmica por abas entre **Sou Cliente** e **Sou Prestador**.
* Formulário de cliente com campos de CPF e data de nascimento.
* Formulário de prestador com seleção de categoria de atuação e descrição de experiência profissional.
* Aceite de termos de uso e política de privacidade com redirecionamento ao início após a criação.

### 10. Publicação de Postagem (`CriarPost`)
* Criação de novas postagens para exibição no feed comunitário.
* Área para anexos visuais (fotos/vídeos) e descrição do trabalho realizado.

### 11. Elaboração de Orçamento (`Orcamento`)
* Formulário para detalhamento do serviço, valor total estimado, data prevista, endereço do cliente e anexos fotográficos do problema.

### 12. Modais Globais
* **Modal de Avaliação**: Classificação interativa por 5 estrelas e campo de depoimento escrito.
* **Modal Pix**: Apresentação de opções para envio de QR Code ou cópia automática da chave Pix diretamente para a área de transferência.

---

## 🚀 Como Executar o Projeto Localmente

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na máquina.
2. Clone o repositório ou acesse a pasta do projeto:
   ```bash
   cd Fatec/Semestre2/desweb/React/vemfix
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Acesse o endereço informado no terminal (normalmente `http://localhost:5173`) no seu navegador.
6. Para gerar a versão de produção (build):
   ```bash
   npm run build
   ```
