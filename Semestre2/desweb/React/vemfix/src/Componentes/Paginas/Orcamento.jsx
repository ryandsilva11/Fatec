import { useState } from 'react';

function Orcamento({ onBack, onNavigate, onShowToast }) {
  const [titulo, setTitulo] = useState('Reparo Hidráulico - Vazamento na Cozinha');
  const [data, setData] = useState('2025-03-20');
  const [nomeCliente, setNomeCliente] = useState('Mariana Costa');
  const [endereco, setEndereco] = useState('Rua das Flores, 120 - Centro');
  const [valor, setValor] = useState('110,00');
  const [descProblema, setDescProblema] = useState('Vazamento contínuo na conexão do sifão com gotejamento no gabinete.');
  const [descServico, setDescServico] = useState('Substituição do sifão sanfonado, vedação das conexões e teste de estanqueidade.');

  function handleSend(e) {
    e.preventDefault();
    onShowToast('Orçamento enviado ao cliente com sucesso!');
    onNavigate('conversas');
  }

  function handleSave(e) {
    e.preventDefault();
    onShowToast('Orçamento salvo com sucesso!');
    onNavigate('conversas');
  }

  return (
    <div className="orcamento-page">
      <button
        type="button"
        className="back-btn"
        style={{ padding: 0, marginBottom: '20px' }}
        onClick={onBack}
      >
        ← Voltar
      </button>

      <div className="orcamento-card">
        <h1>Elaborar Orçamento</h1>
        <p className="orcamento-subtitle">Preencha os dados do orçamento para o cliente</p>

        <form className="orcamento-form">
          <div className="form-group">
            <label>Título do Orçamento</label>
            <input
              type="text"
              placeholder="Insira o Título"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>

          <div className="orcamento-row">
            <div className="form-group">
              <label>Data</label>
              <input
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Nome do Cliente</label>
              <input
                type="text"
                placeholder="Nome do cliente"
                value={nomeCliente}
                onChange={(e) => setNomeCliente(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Endereço do Cliente</label>
            <input
              type="text"
              placeholder="Endereço do cliente"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Valor Estimado (R$)</label>
            <input
              type="text"
              placeholder="Valor estimado"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Fotos e Vídeos do Problema</label>
            <div className="orcamento-imgs">
              <div
                className="orcamento-img-box"
                title="Adicionar foto"
                onClick={() => onShowToast('Adicionar foto')}
              >
                🖼️
              </div>
              <div
                className="orcamento-img-box"
                title="Adicionar foto ou anexo"
                onClick={() => onShowToast('Adicionar foto ou anexo')}
              >
                ＋
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Descrição do Problema</label>
            <textarea
              placeholder="Detalhe o problema do cliente..."
              value={descProblema}
              onChange={(e) => setDescProblema(e.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <label>Descrição do Serviço</label>
            <textarea
              placeholder="Detalhe o que planeja para resolver o problema..."
              value={descServico}
              onChange={(e) => setDescServico(e.target.value)}
            ></textarea>
          </div>

          <div className="orcamento-actions">
            <button
              type="button"
              className="btn-primary"
              style={{ flex: 1 }}
              onClick={handleSend}
            >
              Enviar
            </button>
            <button
              type="button"
              className="btn-secondary"
              style={{ flex: 1 }}
              onClick={handleSave}
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Orcamento;
