ALTER TABLE cliente ADD COLUMN data_nascimento DATE;

ALTER TABLE veiculo ADD COLUMN observacoes TEXT;

ALTER TABLE pecas ADD COLUMN estoque_minimo INT DEFAULT 10;