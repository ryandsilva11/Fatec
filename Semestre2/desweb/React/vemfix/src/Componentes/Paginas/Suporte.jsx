import { useState } from 'react';
import { faqs } from '../../data/mockData';

function Suporte({ onShowToast }) {
  const [openFaqId, setOpenFaqId] = useState(null);

  // Estados locais do formulário de contato
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [perfil, setPerfil] = useState('Cliente');
  const [assunto, setAssunto] = useState('Dúvida geral');
  const [mensagem, setMensagem] = useState('');

  function toggleFaq(id) {
    setOpenFaqId(openFaqId === id ? null : id);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      onShowToast('Por favor, preencha os campos obrigatórios.');
      return;
    }
    onShowToast('Mensagem enviada com sucesso! Responderemos em breve.');
    setNome('');
    setEmail('');
    setMensagem('');
  }

  return (
    <div className="suporte-page">
      <h1>Central de Suporte</h1>
      <p className="subtitle">Estamos aqui para ajudar clientes e prestadores</p>

      {/* Accordion de FAQ */}
      <section className="faq-section">
        <h2>Perguntas Frequentes</h2>
        {faqs.map((faq) => {
          const isOpen = openFaqId === faq.id;
          return (
            <div key={faq.id} className="faq-item">
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFaq(faq.id)}
              >
                <span>{faq.pergunta}</span>
                <span className={`faq-arrow ${isOpen ? 'open' : ''}`}>▼</span>
              </button>
              {isOpen && (
                <div className="faq-answer open">
                  {faq.resposta}
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Formulário de Contato */}
      <section className="contact-section">
        <h2>Fale Conosco</h2>
        <p className="sub">Para clientes e prestadores — respondemos em até 24h</p>

        <form onSubmit={handleSubmit}>
          <div className="contact-form-grid">
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>E-mail</label>
              <input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Eu sou</label>
              <select
                value={perfil}
                onChange={(e) => setPerfil(e.target.value)}
              >
                <option value="Cliente">Cliente</option>
                <option value="Prestador">Prestador</option>
              </select>
            </div>

            <div className="form-group">
              <label>Assunto</label>
              <select
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
              >
                <option value="Problema com serviço">Problema com serviço</option>
                <option value="Reembolso">Reembolso</option>
                <option value="Dúvida geral">Dúvida geral</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div className="form-group form-full">
              <label>Mensagem</label>
              <textarea
                placeholder="Descreva sua dúvida ou problema..."
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              ></textarea>
            </div>
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%' }}>
            Enviar Mensagem
          </button>
        </form>
      </section>
    </div>
  );
}

export default Suporte;
