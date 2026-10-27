DROP PROCEDURE IF EXISTS sp_cadastrar_veiculo;

DROP PROCEDURE IF EXISTS sp_aplicar_desconto_orcamento;

DELIMITER / /

CREATE PROCEDURE sp_cadastrar_veiculo (
    IN p_placa VARCHAR(8),
    IN p_marca VARCHAR(50),
    IN p_modelo VARCHAR(50),
    IN p_tipo VARCHAR(30),
    IN p_cor VARCHAR(30),
    IN p_ano INT,
    IN p_fk_cliente VARCHAR(14)
)
BEGIN
    INSERT INTO veiculo (placa, marca, modelo, tipo, cor, ano, fk_cliente) 
    VALUES (p_placa, p_marca, p_modelo, p_tipo, p_cor, p_ano, p_fk_cliente);
END //

CREATE PROCEDURE sp_aplicar_desconto_orcamento (
    IN p_id_orcamento INT,
    IN p_percentual_desconto DECIMAL(5,2)
)
BEGIN
    UPDATE orcamento 
    SET valor_tot = valor_tot - (valor_tot * (p_percentual_desconto / 100))
    WHERE id_orcamento = p_id_orcamento;
END //

DELIMITER;