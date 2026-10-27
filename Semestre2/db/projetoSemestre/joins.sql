SELECT v.placa, v.marca, v.modelo, v.ano, c.nome AS proprietario, c.telefone, c.email
FROM veiculo v
    INNER JOIN cliente c ON v.fk_cliente = c.cpf;

SELECT o.id_orcamento, o.titulo, o.valor_tot, o.status, f.nome AS funcionario, f.cargo
FROM orcamento o
    INNER JOIN funcionario f ON o.fk_funcionario = f.id_funcionario;

SELECT o.id_orcamento, o.titulo, o.valor_tot, o.data_emissao, v.placa, v.marca, v.modelo
FROM orcamento o
    INNER JOIN veiculo v ON o.fk_veiculo = v.placa;