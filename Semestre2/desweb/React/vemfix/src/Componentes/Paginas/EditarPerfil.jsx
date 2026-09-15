import { useState } from 'react';

function EditarPerfil({ onBack, onShowToast }) {
  const [nome, setNome] = useState('Ryan Dias da Silva');
  const [telefone, setTelefone] = useState('(11) 9583-57641');
  const [cidade, setCidade] = useState('Salto - SP');
  const [profissao, setProfissao] = useState('encanador');

  function handleSave(e) {
    e.preventDefault();
    onShowToast('Perfil salvo com sucesso!');
    onBack();
  }

  function handleInactivate() {
    onShowToast('Conta inativada. Você ficará invisível para outros usuários.');
  }

  return (
    <div className="edit-page" style={{ paddingTop: '32px' }}>
      <button
        type="button"
        className="back-btn"
        style={{ padding: 0, marginBottom: '20px' }}
        onClick={onBack}
      >
        ← Voltar
      </button>

      <div className="edit-card">
        <div className="edit-avatar-wrap">
          <div
            className="edit-avatar"
            title="Clique para trocar foto"
            onClick={() => onShowToast('Clique para selecionar foto do dispositivo')}
          >
            RD
          </div>
          <span style={{ fontSize: '12px', opacity: 0.85 }}>Trocar foto</span>
        </div>

        <form onSubmit={handleSave} className="edit-fields">
          <input
            className="edit-field"
            type="text"
            placeholder="Nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            className="edit-field"
            type="tel"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <input
            className="edit-field"
            type="text"
            placeholder="Cidade - Estado"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />

          <select
            className="edit-field"
            title="Tipo de prestador"
            value={profissao}
            onChange={(e) => setProfissao(e.target.value)}
          >
            <option value="">Selecione seu tipo de profissão</option>
            <option value="pedreiro">Pedreiro</option>
            <option value="jardineiro">Jardineiro</option>
            <option value="pintor">Pintor</option>
            <option value="eletricista">Eletricista</option>
            <option value="encanador">Encanador</option>
            <option value="carpinteiro">Carpinteiro</option>
            <option value="marceneiro">Marceneiro</option>
            <option value="mecanico">Mecânico</option>
            <option value="limpeza">Serviço de Limpeza</option>
            <option value="aula">Professor / Aulas</option>
            <option value="design">Design / Criativo</option>
            <option value="reparos">Reparos em Geral</option>
            <option value="outro">Outro</option>
          </select>

          <div className="edit-btns">
            <button
              type="button"
              className="btn-inativar"
              onClick={handleInactivate}
            >
              Inativar conta
            </button>
            <button type="submit" className="btn-salvar">
              Salvar e Sair
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditarPerfil;
