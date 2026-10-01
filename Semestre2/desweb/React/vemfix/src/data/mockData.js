export const categories = [
  { id: 'encanador', nome: 'Encanador', icone: '🔧', bg: '#fef3c7', count: '124 profissionais' },
  { id: 'eletricista', nome: 'Eletricista', icone: '⚡', bg: '#dbeafe', count: '98 profissionais' },
  { id: 'pintor', nome: 'Pintor', icone: '🖌️', bg: '#fce7f3', count: '76 profissionais' },
  { id: 'jardineiro', nome: 'Jardineiro', icone: '🌿', bg: '#d1fae5', count: '53 profissionais' },
  { id: 'limpeza', nome: 'Limpeza', icone: '🧹', bg: '#ede9fe', count: '201 profissionais' },
  { id: 'pedreiro', nome: 'Pedreiro', icone: '🏗️', bg: '#ffedd5', count: '87 profissionais' },
  { id: 'ar-condicionado', nome: 'Ar condicionado', icone: '❄️', bg: '#cffafe', count: '64 profissionais' },
  { id: 'chaveiro', nome: 'Chaveiro', icone: '🔑', bg: '#fef9c3', count: '41 profissionais' },
];

export const providers = [
  {
    id: 1,
    nome: 'Carlos Silva',
    categoria: 'Encanador',
    cidade: 'São Paulo',
    rating: 4.9,
    avaliacoes: 127,
    servicos: 340,
    avatar: 'CS',
    avatarBg: '#059669',
    descricao: 'Encanador profissional com 15 anos de experiência. Especialista em vazamentos, reparos hidráulicos e instalações.',
    preco: 80,
    sobre: 'Atuo há mais de uma década no setor de instalações e manutenções hidráulicas, residenciais e prediais. Trabalho com laudo de vazamentos, troca de tubulação, desentupimento e instalações sanitárias.',
    reviews: [
      { autor: 'Marcos P.', texto: 'Chegou rápido e resolveu o vazamento em meia hora!', estrelas: 5, tempo: 'há 1 dia' },
      { autor: 'Clara S.', texto: 'Muito profissional e preço honesto.', estrelas: 5, tempo: 'há 5 dias' }
    ]
  },
  {
    id: 2,
    nome: 'Ana Rodrigues',
    categoria: 'Eletricista',
    cidade: 'São Paulo',
    rating: 4.8,
    avaliacoes: 98,
    servicos: 256,
    avatar: 'AR',
    avatarBg: '#7c3aed',
    descricao: 'Eletricista certificada. Instalações residenciais e comerciais, reparos e manutenção preventiva.',
    preco: 90,
    sobre: 'Eletrotécnica formada com certificação NR10. Instalação de quadros de força, fiação completa, chuveiros, tomadas e iluminação em LED.',
    reviews: [
      { autor: 'Renata L.', texto: 'Excelente serviço, muito caprichosa com a fiação.', estrelas: 5, tempo: 'há 3 dias' }
    ]
  },
  {
    id: 3,
    nome: 'Roberto Mendes',
    categoria: 'Pintor',
    cidade: 'Rio de Janeiro',
    rating: 4.7,
    avaliacoes: 85,
    servicos: 198,
    avatar: 'RM',
    avatarBg: '#dc2626',
    descricao: 'Pintor residencial e comercial. Acabamento impecável e pontualidade garantida.',
    preco: 60,
    sobre: 'Pintura interna e externa, textura projetada, massa corrida e aplicação de verniz. Deixo o ambiente totalmente limpo após o serviço.',
    reviews: [
      { autor: 'Juliana F.', texto: 'Pintura impecável no meu apartamento!', estrelas: 5, tempo: 'há 1 semana' }
    ]
  },
  {
    id: 4,
    nome: 'Lucia Ferreira',
    categoria: 'Limpeza',
    cidade: 'Salto - SP',
    rating: 5.0,
    avaliacoes: 203,
    servicos: 512,
    avatar: 'LF',
    avatarBg: '#059669',
    descricao: 'Serviços de limpeza residencial e pós-obra. Equipe treinada e produtos de qualidade.',
    preco: 70,
    sobre: 'Serviços de limpeza residencial e pós-obra. Equipe treinada e produtos de qualidade. Atendo toda a Grande São Paulo e região de Salto/Itu com pontualidade e profissionalismo.',
    reviews: [
      { autor: 'Beatriz M.', texto: 'Excelente profissional! Pontual, educada e fez um trabalho impecável. Recomendo!', estrelas: 5, tempo: 'há 2 dias' },
      { autor: 'Rodrigo T.', texto: 'Muito bom, resolveu o problema rápido e com preço justo. Voltarei a contratar.', estrelas: 5, tempo: 'há 1 semana' },
      { autor: 'Carla N.', texto: 'Limpeza pós-obra perfeita. Super recomendo a Lucia para qualquer trabalho de limpeza!', estrelas: 5, tempo: 'há 2 semanas' }
    ]
  },
  {
    id: 5,
    nome: 'Pedro Almeida',
    categoria: 'Pedreiro',
    cidade: 'Belo Horizonte',
    rating: 4.6,
    avaliacoes: 64,
    servicos: 145,
    avatar: 'PA',
    avatarBg: '#dc2626',
    descricao: 'Pedreiro especializado em reformas, construções e acabamentos. Trabalho com qualidade.',
    preco: 100,
    sobre: 'Mais de 20 anos de experiência em alvenaria, pisos, contrapisos, muros e reformas em geral.',
    reviews: [
      { autor: 'Geraldo O.', texto: 'Reforma do muro ficou excelente.', estrelas: 5, tempo: 'há 4 dias' }
    ]
  },
  {
    id: 6,
    nome: 'Mariana Costa',
    categoria: 'Jardineiro',
    cidade: 'Curitiba',
    rating: 5.0,
    avaliacoes: 112,
    servicos: 289,
    avatar: 'MC',
    avatarBg: '#7c3aed',
    descricao: 'Paisagista e jardineira. Criação e manutenção de jardins, podas e paisagismo.',
    preco: 55,
    sobre: 'Especialista em plantas ornamentais, podas artísticas, gramados e hortas caseiras.',
    reviews: [
      { autor: 'Fernando K.', texto: 'Meu jardim parecia abandonado e agora virou cartão postal.', estrelas: 5, tempo: 'há 6 dias' }
    ]
  }
];

export const initialPosts = [
  {
    id: 1,
    autor: 'Pedro Almeida',
    categoria: 'Pedreiro',
    cidade: 'Belo Horizonte',
    avatar: 'PA',
    avatarBg: '#dc2626',
    rating: '4.6',
    texto: 'Mais um trabalho realizado com sucesso! Reforma de muro com acabamento impecável. 💪🏗️',
    iconeImg: '🏗️',
    imgBg: '#d1d5db',
    curtidas: 993456,
    curtido: false,
    providerId: 5
  },
  {
    id: 2,
    autor: 'Lucia Ferreira',
    categoria: 'Limpeza',
    cidade: 'Salto',
    avatar: 'LF',
    avatarBg: '#059669',
    rating: '5.0',
    texto: 'Limpeza pós-obra finalizada! Cliente muito satisfeito. Contrate agora! 🧹✨',
    iconeImg: '🧹',
    imgBg: '#d1fae5',
    curtidas: 12340,
    curtido: false,
    providerId: 4
  },
  {
    id: 3,
    autor: 'Mariana Costa',
    categoria: 'Jardineiro',
    cidade: 'Curitiba',
    avatar: 'MC',
    avatarBg: '#7c3aed',
    rating: '5.0',
    texto: 'Jardim transformado! Projeto completo de paisagismo residencial. 🌿🌸',
    iconeImg: '🌿',
    imgBg: '#d1fae5',
    curtidas: 8700,
    curtido: false,
    providerId: 6
  }
];

export const faqs = [
  {
    id: 1,
    pergunta: 'Como funciona a garantia dos meus direitos?',
    resposta: 'A VemFix oferece proteção contra danos à propriedade de até R$10.000, reembolso em casos de serviço não realizado ou insatisfatório, e suporte 24h para resolução de conflitos entre clientes e prestadores.'
  },
  {
    id: 2,
    pergunta: 'Como solicitar reembolso?',
    resposta: 'Acesse "Meus Serviços", selecione o serviço, clique em "Solicitar Reembolso", descreva o problema e nossa equipe analisará em até 48h. O reembolso é processado em até 7 dias úteis.'
  },
  {
    id: 3,
    pergunta: 'Os prestadores são verificados?',
    resposta: 'Sim! Todos os prestadores passam por verificação de identidade (CPF), análise de histórico e validação antes de serem listados na plataforma.'
  },
  {
    id: 4,
    pergunta: 'Como funciona o pagamento?',
    resposta: 'O pagamento é feito via Pix (QR Code ou copia e cola), diretamente pelo chat com o prestador após a aprovação do orçamento. A plataforma garante a segurança da transação.'
  },
  {
    id: 5,
    pergunta: 'Posso cancelar um serviço?',
    resposta: 'Sim. Cancelamentos antes do início do serviço garantem reembolso total. Após o início, o reembolso será parcial dependendo do progresso do serviço.'
  }
];

export const initialConversas = [
  {
    id: 1,
    nome: 'Pedro Almeida',
    avatar: 'PA',
    avatarBg: '#dc2626',
    horario: '10:18',
    mensagem: 'Pedro Almeida quer começar uma conversa com você. Tipo de serviço: Encanador',
    tipo: 'solicitacao',
    providerId: 5
  },
  {
    id: 2,
    nome: 'Lucia Ferreira',
    avatar: 'LF',
    avatarBg: '#059669',
    horario: '19:41',
    mensagem: 'Perfeito! Confirmado para sexta.',
    tipo: 'normal',
    providerId: 4
  },
  {
    id: 3,
    nome: 'Mariana Costa',
    avatar: 'MC',
    avatarBg: '#7c3aed',
    horario: '08:30',
    mensagem: 'Olá! Posso ir amanhã às 14h. Fica bem?',
    tipo: 'normal',
    providerId: 6
  }
];

export const initialChatMessages = [
  { id: 1, tipo: 'received', texto: 'Olá! Vi que você precisa de um encanador. Como posso ajudar?', horario: '09:15' },
  { id: 2, tipo: 'sent', texto: 'Oi Carlos! Tenho um vazamento na cozinha, embaixo da pia.', horario: '09:20' },
  { id: 3, tipo: 'received', texto: 'Entendi. Pelo que descreve, pode ser a conexão do sifão. Geralmente é um reparo simples.', horario: '09:32' },
  { id: 4, tipo: 'sent', texto: 'Que bom! Quanto ficaria mais ou menos?', horario: '09:45' },
  { id: 5, tipo: 'received', texto: 'Para esse tipo de reparo, fica entre R$80 e R$120, dependendo da peça necessária.', horario: '09:59' },
  { id: 6, tipo: 'received', texto: 'Posso ir amanhã às 14h, tudo bem?', horario: '10:32' }
];
