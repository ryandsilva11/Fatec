// ============ DATA ============
const providers = [
  { id: 1, name: "Carlos Silva", category: "Encanador", rating: 4.9, reviews: 127, price: 80, jobs: 340, city: "São Paulo", bio: "Encanador profissional com 15 anos de experiência. Especialista em vazamentos, instalações e manutenção hidráulica.", avatar: "CS", color: "bg-blue-100 text-blue-700" },
  { id: 2, name: "Ana Rodrigues", category: "Eletricista", rating: 4.8, reviews: 98, price: 90, jobs: 256, city: "São Paulo", bio: "Eletricista certificada. Instalações residenciais e comerciais, reparos e manutenção preventiva.", avatar: "AR", color: "bg-purple-100 text-purple-700" },
  { id: 3, name: "Roberto Mendes", category: "Pintor", rating: 4.7, reviews: 85, price: 60, jobs: 198, city: "Rio de Janeiro", bio: "Pintor residencial e comercial. Acabamento impecável e pontualidade garantida.", avatar: "RM", color: "bg-amber-100 text-amber-700" },
  { id: 4, name: "Lucia Ferreira", category: "Limpeza", rating: 5.0, reviews: 203, price: 70, jobs: 512, city: "São Paulo", bio: "Serviços de limpeza residencial e pós-obra. Equipe treinada e produtos de qualidade.", avatar: "LF", color: "bg-rose-100 text-rose-700" },
  { id: 5, name: "Pedro Almeida", category: "Pedreiro", rating: 4.6, reviews: 64, price: 100, jobs: 145, city: "Belo Horizonte", bio: "Pedreiro especializado em reformas, construções e acabamentos. Trabalho com qualidade.", avatar: "PA", color: "bg-orange-100 text-orange-700" },
  { id: 6, name: "Mariana Costa", category: "Jardineiro", rating: 4.9, reviews: 112, price: 55, jobs: 289, city: "Curitiba", bio: "Paisagista e jardineira. Criação e manutenção de jardins, podas e paisagismo.", avatar: "MC", color: "bg-green-100 text-green-700" },
];

const chatConversations = [
  { id: 1, providerId: 1, lastMsg: "Posso ir amanhã às 14h, tudo bem?", time: "10:32", unread: 1, messages: [
    { from: "provider", text: "Olá! Vi que você precisa de um encanador. Como posso ajudar?", time: "09:15" },
    { from: "user", text: "Oi Carlos! Tenho um vazamento na cozinha, embaixo da pia.", time: "09:20" },
    { from: "provider", text: "Entendi. Pelo que descreve, pode ser a conexão do sifão. Geralmente é um reparo simples.", time: "09:22" },
    { from: "user", text: "Que bom! Quanto ficaria mais ou menos?", time: "09:25" },
    { from: "provider", text: "Para esse tipo de reparo, fica entre R$80 e R$120, dependendo da peça necessária.", time: "09:28" },
    { from: "provider", text: "Posso ir amanhã às 14h, tudo bem?", time: "10:32" },
  ]},
  { id: 2, providerId: 4, lastMsg: "Perfeito! Confirmado para sexta.", time: "Ontem", unread: 1, messages: [
    { from: "user", text: "Oi Lucia! Preciso de uma limpeza completa no apartamento.", time: "14:00" },
    { from: "provider", text: "Olá! Claro, qual o tamanho do apartamento?", time: "14:05" },
    { from: "user", text: "80m², 2 quartos.", time: "14:07" },
    { from: "provider", text: "Perfeito! Confirmado para sexta.", time: "14:15" },
  ]},
];

const faqs = [
  { q: "Como funciona a garantia contra danos?", a: "Se um prestador causar danos à sua propriedade durante o serviço, você pode registrar uma ocorrência em até 72 horas. Nossa equipe avalia e cobre reparos de até R$ 10.000." },
  { q: "Como solicito reembolso?", a: "Acesse 'Meus Serviços', selecione o serviço e clique em 'Solicitar Reembolso'. Descreva o motivo e nossa equipe analisará em até 48h. O valor é devolvido em até 7 dias úteis." },
  { q: "Os prestadores são verificados?", a: "Sim! Todos passam por verificação de identidade, antecedentes e comprovação de experiência profissional antes de serem aprovados na plataforma." },
  { q: "Como funciona o pagamento?", a: "O pagamento é feito pela plataforma. O valor fica retido até a conclusão do serviço, garantindo segurança para ambas as partes." },
  { q: "Posso cancelar um serviço?", a: "Sim! Cancelamentos antes do início do serviço têm reembolso total. Após o início, analisamos caso a caso para garantir justiça." },
];

let currentPage = 'home';
let currentChatId = null;
let registerRole = 'client';

// ============ NAVIGATION ============
function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  const el = document.getElementById('page-' + page);
  if (el) { el.classList.remove('hidden'); }
  currentPage = page;
  document.getElementById('app').scrollTop = 0;
  lucide.createIcons();
}

function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('hidden');
}

// ============ PROVIDERS ============
function renderProviderCard(p, featured) {
  return `<div class="bg-white rounded-2xl border border-stone-100 p-5 hover:shadow-lg hover:shadow-emerald-50 hover:border-emerald-200 transition-all cursor-pointer" onclick="showProfile(${p.id})">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-12 h-12 rounded-full ${p.color} flex items-center justify-center font-bold text-sm">${p.avatar}</div>
      <div class="flex-1 min-w-0">
        <div class="font-semibold text-stone-900 truncate">${p.name}</div>
        <div class="text-sm text-stone-400">${p.category} · ${p.city}</div>
      </div>
      ${p.rating >= 4.8 ? '<span class="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full shrink-0">Top</span>' : ''}
    </div>
    <div class="flex items-center gap-4 text-sm text-stone-500 mb-3">
      <span class="flex items-center gap-1"><i data-lucide="star" class="w-4 h-4 text-amber-400 fill-amber-400"></i><strong class="text-stone-800">${p.rating}</strong> (${p.reviews})</span>
      <span>${p.jobs} serviços</span>
    </div>
    <p class="text-sm text-stone-500 line-clamp-2 mb-3">${p.bio}</p>
    <div class="flex items-center justify-between">
      <span class="text-emerald-700 font-bold">R$ ${p.price}/h</span>
      <button onclick="event.stopPropagation();openChat(${p.id})" class="px-3 py-1.5 text-sm bg-emerald-50 text-emerald-700 font-semibold rounded-lg hover:bg-emerald-100 transition-colors">Conversar</button>
    </div>
  </div>`;
}

function renderFeatured() {
  const container = document.getElementById('featured-providers');
  container.innerHTML = providers.slice(0, 3).map(p => renderProviderCard(p, true)).join('');
  lucide.createIcons();
}

function filterProviders() {
  const q = document.getElementById('search-input').value.toLowerCase();
  const cat = document.getElementById('category-filter').value;
  const sort = document.getElementById('sort-filter').value;
  let filtered = providers.filter(p => {
    const matchQ = !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.bio.toLowerCase().includes(q);
    const matchCat = !cat || p.category === cat;
    return matchQ && matchCat;
  });
  if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
  else if (sort === 'price-low') filtered.sort((a, b) => a.price - b.price);
  else if (sort === 'price-high') filtered.sort((a, b) => b.price - a.price);
  else if (sort === 'jobs') filtered.sort((a, b) => b.jobs - a.jobs);

  const container = document.getElementById('search-results');
  if (filtered.length === 0) {
    container.innerHTML = '<div class="col-span-full text-center py-12 text-stone-400"><i data-lucide="search" class="w-12 h-12 mx-auto mb-3 opacity-50"></i><p class="font-medium">Nenhum profissional encontrado</p><p class="text-sm">Tente outros termos de busca</p></div>';
  } else {
    container.innerHTML = filtered.map(p => renderProviderCard(p)).join('');
  }
  lucide.createIcons();
}

// ============ PROFILE ============
function showProfile(id) {
  const p = providers.find(x => x.id === id);
  if (!p) return;
  document.getElementById('profile-content').innerHTML = `
    <button onclick="navigateTo('search')" class="flex items-center gap-1 text-stone-500 hover:text-stone-700 mb-6 text-sm"><i data-lucide="arrow-left" class="w-4 h-4"></i> Voltar</button>
    <div class="bg-white rounded-2xl border border-stone-100 overflow-hidden">
      <div class="bg-gradient-to-r from-emerald-600 to-teal-500 p-6 flex flex-col sm:flex-row items-center gap-4">
        <div class="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-2xl">${p.avatar}</div>
        <div class="text-center sm:text-left">
          <h1 class="text-2xl font-bold text-white">${p.name}</h1>
          <p class="text-emerald-100">${p.category} · ${p.city}</p>
          <div class="flex items-center gap-3 mt-2 text-emerald-100 text-sm justify-center sm:justify-start">
            <span class="flex items-center gap-1"><i data-lucide="star" class="w-4 h-4 fill-amber-300 text-amber-300"></i> ${p.rating} (${p.reviews} avaliações)</span>
            <span>${p.jobs} serviços</span>
          </div>
        </div>
      </div>
      <div class="p-6">
        <div class="flex flex-wrap gap-3 mb-6">
          <button onclick="openChat(${p.id})" class="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors"><i data-lucide="message-circle" class="w-4 h-4"></i> Conversar</button>
          <span class="px-5 py-2.5 bg-stone-100 text-stone-700 font-semibold rounded-xl">R$ ${p.price}/hora</span>
        </div>
        <h2 class="font-bold text-stone-900 mb-2">Sobre</h2>
        <p class="text-stone-600 mb-6">${p.bio}</p>
        <h2 class="font-bold text-stone-900 mb-3">Avaliações Recentes</h2>
        <div class="space-y-3">
          <div class="bg-stone-50 rounded-xl p-4">
            <div class="flex items-center gap-2 mb-1"><span class="text-amber-400 text-sm">★★★★★</span><span class="text-xs text-stone-400">há 2 dias</span></div>
            <p class="text-sm text-stone-600">Excelente profissional! Pontual, educado e fez um trabalho impecável. Recomendo!</p>
          </div>
          <div class="bg-stone-50 rounded-xl p-4">
            <div class="flex items-center gap-2 mb-1"><span class="text-amber-400 text-sm">★★★★★</span><span class="text-xs text-stone-400">há 1 semana</span></div>
            <p class="text-sm text-stone-600">Muito bom, resolveu o problema rápido e com preço justo. Voltarei a contratar.</p>
          </div>
        </div>
        <div class="mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-100 flex items-start gap-3">
          <i data-lucide="shield-check" class="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"></i>
          <div class="text-sm"><strong class="text-emerald-800">Protegido pela VemFix</strong><br><span class="text-emerald-700">Garantia contra danos e reembolso incluso em todos os serviços.</span></div>
        </div>
      </div>
    </div>`;
  navigateTo('profile');
}

// ============ CHAT ============
function renderChatList() {
  const container = document.getElementById('chat-list-container');
  container.innerHTML = chatConversations.map(c => {
    const p = providers.find(x => x.id === c.providerId);
    return `<div onclick="openChatConversation(${c.id})" class="flex items-center gap-3 p-4 bg-white rounded-xl border border-stone-100 hover:border-emerald-200 hover:shadow-md transition-all cursor-pointer">
      <div class="w-12 h-12 rounded-full ${p.color} flex items-center justify-center font-bold text-sm shrink-0">${p.avatar}</div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center justify-between"><span class="font-semibold text-stone-900">${p.name}</span><span class="text-xs text-stone-400">${c.time}</span></div>
        <p class="text-sm text-stone-500 truncate">${c.lastMsg}</p>
      </div>
      ${c.unread ? `<span class="w-5 h-5 bg-emerald-500 text-white text-xs rounded-full flex items-center justify-center font-bold shrink-0">${c.unread}</span>` : ''}
    </div>`;
  }).join('');
  if (chatConversations.length === 0) {
    container.innerHTML = '<div class="text-center py-12 text-stone-400"><i data-lucide="message-circle" class="w-12 h-12 mx-auto mb-3 opacity-50"></i><p>Nenhuma conversa ainda</p></div>';
  }
  lucide.createIcons();
}

function openChat(providerId) {
  let conv = chatConversations.find(c => c.providerId === providerId);
  if (!conv) {
    conv = { id: chatConversations.length + 1, providerId, lastMsg: "", time: "Agora", unread: 0, messages: [] };
    chatConversations.push(conv);
  }
  openChatConversation(conv.id);
}

function openChatConversation(id) {
  currentChatId = id;
  const conv = chatConversations.find(c => c.id === id);
  const p = providers.find(x => x.id === conv.providerId);
  conv.unread = 0;
  document.getElementById('chat-avatar').className = `w-10 h-10 rounded-full ${p.color} flex items-center justify-center font-bold`;
  document.getElementById('chat-avatar').textContent = p.avatar;
  document.getElementById('chat-name').textContent = p.name;
  renderMessages();
  navigateTo('chat');
}

function renderMessages() {
  const conv = chatConversations.find(c => c.id === currentChatId);
  const container = document.getElementById('chat-messages');
  container.innerHTML = conv.messages.map(m => `
    <div class="flex ${m.from === 'user' ? 'justify-end' : 'justify-start'} chat-bubble-in">
      <div class="${m.from === 'user' ? 'bg-emerald-600 text-white' : 'bg-white border border-stone-100 text-stone-800'} px-4 py-2.5 rounded-2xl max-w-[80%] ${m.from === 'user' ? 'rounded-br-md' : 'rounded-bl-md'}">
        <p class="text-sm">${m.text}</p>
        <p class="text-[10px] ${m.from === 'user' ? 'text-emerald-200' : 'text-stone-400'} mt-1 text-right">${m.time}</p>
      </div>
    </div>`).join('');
  container.scrollTop = container.scrollHeight;
  lucide.createIcons();
}

function sendMessage(e) {
  e.preventDefault();
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;
  const conv = chatConversations.find(c => c.id === currentChatId);
  const now = new Date();
  const time = now.getHours().toString().padStart(2,'0') + ':' + now.getMinutes().toString().padStart(2,'0');
  conv.messages.push({ from: 'user', text, time });
  conv.lastMsg = text;
  conv.time = time;
  input.value = '';
  renderMessages();

  // Simulated reply
  setTimeout(() => {
    const replies = ["Perfeito, vou anotar!", "Combinado! Qualquer dúvida me avise.", "Entendi, sem problemas.", "Ótimo! Vamos acertar os detalhes."];
    conv.messages.push({ from: 'provider', text: replies[Math.floor(Math.random() * replies.length)], time });
    conv.lastMsg = conv.messages[conv.messages.length - 1].text;
    renderMessages();
  }, 1200);
}

// ============ FAQ ============
function renderFAQs() {
  const container = document.getElementById('faq-container');
  container.innerHTML = faqs.map((f, i) => `
    <div class="bg-white rounded-xl border border-stone-100 overflow-hidden">
      <button onclick="toggleFaq(${i})" class="w-full flex items-center justify-between p-4 text-left hover:bg-stone-50 transition-colors">
        <span class="font-medium text-stone-800 pr-4">${f.q}</span>
        <i data-lucide="chevron-down" class="w-5 h-5 text-stone-400 shrink-0 transition-transform faq-icon-${i}"></i>
      </button>
      <div id="faq-answer-${i}" class="hidden px-4 pb-4"><p class="text-sm text-stone-600">${f.a}</p></div>
    </div>`).join('');
  lucide.createIcons();
}

function toggleFaq(i) {
  const answer = document.getElementById('faq-answer-' + i);
  answer.classList.toggle('hidden');
}

// ============ REGISTER ============
function setRegisterRole(role) {
  registerRole = role;
  const clientTab = document.getElementById('reg-client-tab');
  const providerTab = document.getElementById('reg-provider-tab');
  const fields = document.getElementById('provider-fields');
  if (role === 'client') {
    clientTab.className = 'flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all bg-white shadow text-emerald-700';
    providerTab.className = 'flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all text-stone-500';
    fields.classList.add('hidden');
  } else {
    providerTab.className = 'flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all bg-white shadow text-emerald-700';
    clientTab.className = 'flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all text-stone-500';
    fields.classList.remove('hidden');
  }
}

function handleRegister(e) {
  e.preventDefault();
  showToast('Conta criada com sucesso! Bem-vindo à VemFix 🎉', 'success');
  e.target.reset();
}

function handleSupportSubmit(e) {
  e.preventDefault();
  showToast('Mensagem enviada! Responderemos em até 24h.', 'success');
  e.target.reset();
}

// ============ TOAST ============
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  const colors = type === 'success' ? 'bg-emerald-600' : 'bg-red-500';
  toast.className = `${colors} text-white px-5 py-3 rounded-xl shadow-lg text-sm font-medium toast-in max-w-sm`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.className = toast.className.replace('toast-in', 'toast-out');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============ ELEMENT SDK ============
const defaultConfig = {
  hero_title: "Encontre o profissional ideal",
  hero_subtitle: "Conectamos você aos melhores prestadores de serviço da sua região, com garantia de qualidade e proteção total.",
  cta_button_text: "Começar Agora",
  background_color: "#f5f5f4",
  surface_color: "#ffffff",
  text_color: "#1c1917",
  primary_action_color: "#059669",
  secondary_action_color: "#0d9488",
  font_family: "DM Sans",
  font_size: 16,
};

function applyConfig(config) {
  const c = { ...defaultConfig, ...config };
  // Text
  document.getElementById('hero-title').textContent = c.hero_title;
  document.getElementById('hero-subtitle').textContent = c.hero_subtitle;
  document.getElementById('cta-btn').textContent = c.cta_button_text;

  // Colors
  document.getElementById('app').style.backgroundColor = c.background_color;
  document.querySelectorAll('.bg-white').forEach(el => el.style.backgroundColor = c.surface_color);
  document.body.style.color = c.text_color;

  // Font
  const fontStack = `${c.font_family}, 'DM Sans', sans-serif`;
  document.body.style.fontFamily = fontStack;

  // Font size
  const base = c.font_size;
  document.getElementById('hero-title').style.fontSize = `${base * 2.5}px`;
  document.getElementById('hero-subtitle').style.fontSize = `${base * 1.15}px`;
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange: async (config) => applyConfig(config),
    mapToCapabilities: (config) => ({
      recolorables: [
        { get: () => config.background_color || defaultConfig.background_color, set: (v) => { config.background_color = v; window.elementSdk.setConfig({ background_color: v }); } },
        { get: () => config.surface_color || defaultConfig.surface_color, set: (v) => { config.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); } },
        { get: () => config.text_color || defaultConfig.text_color, set: (v) => { config.text_color = v; window.elementSdk.setConfig({ text_color: v }); } },
        { get: () => config.primary_action_color || defaultConfig.primary_action_color, set: (v) => { config.primary_action_color = v; window.elementSdk.setConfig({ primary_action_color: v }); } },
        { get: () => config.secondary_action_color || defaultConfig.secondary_action_color, set: (v) => { config.secondary_action_color = v; window.elementSdk.setConfig({ secondary_action_color: v }); } },
      ],
      borderables: [],
      fontEditable: { get: () => config.font_family || defaultConfig.font_family, set: (v) => { config.font_family = v; window.elementSdk.setConfig({ font_family: v }); } },
      fontSizeable: { get: () => config.font_size || defaultConfig.font_size, set: (v) => { config.font_size = v; window.elementSdk.setConfig({ font_size: v }); } },
    }),
    mapToEditPanelValues: (config) => new Map([
      ["hero_title", config.hero_title || defaultConfig.hero_title],
      ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
      ["cta_button_text", config.cta_button_text || defaultConfig.cta_button_text],
    ]),
  });
}

// ============ INIT ============
renderFeatured();
filterProviders();
renderChatList();
renderFAQs();
lucide.createIcons();