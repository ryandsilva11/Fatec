CREATE TABLE cliente(
    codigo_cliente int PRIMARY KEY,
    nome_cliente varchar(50)
);

CREATE TABLE produto(
    codigo_produto int PRIMARY KEY,
    nome_produto varchar(50)
);

CREATE TABLE compra(
    codigo_compra int PRIMARY KEY,
    data date,
    codigo_cliente int,
    codigo_produto int,

    FOREIGN KEY (codigo_cliente) REFERENCES cliente(codigo_cliente),
    FOREIGN KEY (codigo_produto) REFERENCES produto(codigo_produto)
);

CREATE TABLE boleto_cartao(
    codigo_cliente int PRIMARY KEY
    valor int,

    FOREIGN KEY (codigo_cliente) REFERENCES cliente(codigo_cliente)
);

CREATE TABLE funcionario(
    codigo_funcionario int PRIMARY KEY,
    nome_funcionario varchar(50)
    horario_entrada time,
    horario_saida time,
);

CREATE TABLE escala(
    codigo_funcionario int PRIMARY KEY,
    horario_entrada time,
    horario_saida time,

    FOREIGN KEY (codigo_funcionario) REFERENCES funcionario(codigo_funcionario)
);

INSERT INTO cliente VALUES 
    (1, 'Serralheiro'),
    (2, 'Cara do emprego');

INSERT INTO produto VALUES 
    (1, 'Diabo verde'),
    (2, 'Esfregão')

INSERT INTO compra VALUES 
    (1 ,'2025-01-01',1,1),
    (2 ,'2025-05-12',1,2),
    (3 ,'2025-30-5',2,1),
    (4 ,'2025-12-07',2,2);

INSERT INTO funcionario VALUES
    (1, 'Ryan Pague O Valor Normal', '13:44:00', '22:06:00'),
    (2, 'Enzo Guéviti Master', '13:30:00', '21:54:00');

INSERT INTO boleto_cartao VALUES
    (1, 1232),
    (2, 6767);

INSERT INTO escala VALUES
    (1, '13:40:00', '22:00:00'),
    (2, '13:30:00', '21:50:00');
