-- 1. Consulta de veículos com dados de contato do proprietário
SELECT v.placa, v.marca, v.modelo, v.ano, c.nome AS proprietario, c.telefone, c.email
FROM veiculo v
    INNER JOIN cliente c ON v.fk_cliente = c.cpf;