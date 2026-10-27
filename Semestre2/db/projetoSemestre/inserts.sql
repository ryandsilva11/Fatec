INSERT INTO
    cliente (
        cpf,
        nome,
        telefone,
        email,
        endereco
    )
VALUES (
        '123.456.789-01',
        'Ana Silva',
        '(19) 98765-4321',
        'ana.silva@gmail.com',
        'Rua das Flores, 143 - Campinas/SP'
    ),
    (
        '987.654.321-02',
        'Carlos Eduardo',
        '(19) 97654-3210',
        'carlos.eduardo@gmail.com',
        'Rua Candelária, 26 - Indaiatuba/SP'
    ),
    (
        '456.789.123-03',
        'Mariana Oliveira',
        '(19) 99876-5432',
        'mariana.oliveira@gmail.com',
        'Rua 24 de Julho, 78 - Indaiatuba/SP'
    );

INSERT INTO
    funcionario (
        nome,
        telefone,
        email,
        endereco,
        salario,
        carga_horaria,
        cargo
    )
VALUES (
        'Roberto Alves',
        '(19) 91234-5678',
        'roberto.alves@gmail.com',
        'Rua Araguaia, 530 - Indaiatuba/SP',
        4500.00,
        40,
        'Gerente'
    ),
    (
        'Fernanda Lima',
        '(19) 98765-4321',
        'fernanda.lima@gmail.com',
        'Rua Costa Aguiar, 1200 - Campinas/SP',
        6200.50,
        44,
        'Vendedora'
    ),
    (
        'Lucas Mendes',
        '(19) 97654-8910',
        'lucas.mendes@gmail.com',
        'Rua Dom Pedro I, 45 - Indaiatuba/SP',
        3200.00,
        30,
        'Mecanico'
    );

INSERT INTO
    veiculo (
        placa,
        marca,
        modelo,
        tipo,
        cor,
        ano,
        fk_cliente
    )
VALUES (
        'GHI-3456',
        'Toyota',
        'Corolla',
        'Sedan',
        'Preto',
        2022,
        '123.456.789-01'
    ),
    (
        'JKL-7890',
        'Honda',
        'Civic',
        'Sedan',
        'Cinza',
        2019,
        '987.654.321-02'
    ),
    (
        'MNO-1357',
        'Peugeot',
        '208',
        'Hatch',
        'Branco',
        2022,
        '456.789.123-03'
    );

INSERT INTO
    pecas (
        nome,
        tipo,
        descricao,
        valor,
        quantidade_estoque
    )
VALUES (
        'Amortecedor Dianteiro',
        'Suspensão',
        'Amortecedor hidráulico dianteiro para veículos leves',
        280.00,
        15
    );

INSERT INTO
    pecas (
        nome,
        tipo,
        descricao,
        valor,
        quantidade_estoque
    )
VALUES (
        'Correia Dentada',
        'Motor',
        'Correia de sincronização do motor',
        95.00,
        40
    );

INSERT INTO
    pecas (
        nome,
        tipo,
        descricao,
        valor,
        quantidade_estoque
    )
VALUES (
        'Bateria 60Ah',
        'Elétrica',
        'Bateria automotiva livre de manutenção 60 Amperes',
        450.00,
        12
    );

INSERT INTO
    orcamento (
        titulo,
        descricao,
        data_emissao,
        valor_tot,
        status,
        fk_veiculo,
        fk_funcionario
    )
VALUES (
        'Revisão da Suspensão Dianteira',
        'Substituição de amortecedores desgastados',
        '2026-10-15',
        560.00,
        'Aprovado',
        'GHI-3456',
        3
    ),
    (
        'Troca Preventiva de Correia e Bateria',
        'Revisão periódica de 60.000 km',
        '2026-10-20',
        545.00,
        'Concluído',
        'JKL-7890',
        3
    ),
    (
        'Diagnóstico de Falha na Partida',
        'Veículo não dá partida, bateria sem carga',
        '2026-10-26',
        450.00,
        'Pendente',
        'MNO-1357',
        3
    );

INSERT INTO
    orcamento_pecas (
        fk_orcamento,
        fk_peca,
        quantidade,
        preco_unitario
    )
VALUES (1, 1, 2, 280.00),
    (2, 2, 1, 95.00),
    (2, 3, 1, 450.00),
    (3, 3, 1, 450.00);