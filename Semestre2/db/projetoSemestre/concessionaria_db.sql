-- =============================================================================
-- Projeto: Sistema de Banco de Dados para Concessionária / Oficina Mecânica
-- Disciplina: Banco de Dados - FATEC (Semestre 2)
-- Arquivo: concessionaria_db.sql
-- =============================================================================

CREATE DATABASE IF NOT EXISTS concessionaria_db;
USE concessionaria_db;

-- -----------------------------------------------------------------------------
-- 1. Tabela: cliente
-- Armazena os dados dos clientes/proprietários dos veículos
-- -----------------------------------------------------------------------------
CREATE TABLE cliente (
    cpf VARCHAR(14) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    endereco VARCHAR(200)
);

-- -----------------------------------------------------------------------------
-- 2. Tabela: funcionario
-- Armazena os colaboradores (mecânicos, atendentes, gerentes)
-- -----------------------------------------------------------------------------
CREATE TABLE funcionario (
    id_funcionario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    endereco VARCHAR(200),
    salario DECIMAL(10, 2) NOT NULL,
    carga_horaria INT NOT NULL,
    cargo VARCHAR(50) NOT NULL
);

-- -----------------------------------------------------------------------------
-- 3. Tabela: veiculo
-- Armazena os veículos atendidos, vinculados ao CPF do proprietário (cliente)
-- -----------------------------------------------------------------------------
CREATE TABLE veiculo (
    placa VARCHAR(8) PRIMARY KEY,
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    tipo VARCHAR(30) NOT NULL,
    cor VARCHAR(30) NOT NULL,
    ano INT NOT NULL,
    fk_cliente VARCHAR(14) NOT NULL,
    CONSTRAINT fk_veiculo_cliente FOREIGN KEY (fk_cliente) 
        REFERENCES cliente (cpf) 
        ON UPDATE CASCADE 
        ON DELETE RESTRICT
);

-- -----------------------------------------------------------------------------
-- 4. Tabela: pecas
-- Catálogo de peças/produtos e controle do saldo em estoque
-- -----------------------------------------------------------------------------
CREATE TABLE pecas (
    id_peca INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    descricao TEXT,
    valor DECIMAL(10, 2) NOT NULL,
    quantidade_estoque INT NOT NULL DEFAULT 0
);

-- -----------------------------------------------------------------------------
-- 5. Tabela: orcamento
-- Registra os orçamentos emitidos para os veículos por um funcionário
-- -----------------------------------------------------------------------------
CREATE TABLE orcamento (
    id_orcamento INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descricao TEXT,
    data_emissao DATE NOT NULL,
    valor_tot DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    status VARCHAR(30) NOT NULL DEFAULT 'Pendente',
    fk_veiculo VARCHAR(8) NOT NULL,
    fk_funcionario INT NOT NULL,
    CONSTRAINT fk_orcamento_veiculo FOREIGN KEY (fk_veiculo) 
        REFERENCES veiculo (placa) 
        ON UPDATE CASCADE 
        ON DELETE RESTRICT,
    CONSTRAINT fk_orcamento_funcionario FOREIGN KEY (fk_funcionario) 
        REFERENCES funcionario (id_funcionario) 
        ON UPDATE CASCADE 
        ON DELETE RESTRICT
);

-- -----------------------------------------------------------------------------
-- 6. Tabela Associativa: orcamento_pecas
-- Relacionamento N:N entre orcamento e pecas (itens e histórico de preço)
-- -----------------------------------------------------------------------------
CREATE TABLE orcamento_pecas (
    id_orcamento_peca INT AUTO_INCREMENT PRIMARY KEY,
    fk_orcamento INT NOT NULL,
    fk_peca INT NOT NULL,
    quantidade INT NOT NULL DEFAULT 1,
    preco_unitario DECIMAL(10, 2) NOT NULL,
    CONSTRAINT fk_orcamento_pecas_orcamento FOREIGN KEY (fk_orcamento) 
        REFERENCES orcamento (id_orcamento) 
        ON UPDATE CASCADE 
        ON DELETE CASCADE,
    CONSTRAINT fk_orcamento_pecas_peca FOREIGN KEY (fk_peca) 
        REFERENCES pecas (id_peca) 
        ON UPDATE CASCADE 
        ON DELETE RESTRICT
);
