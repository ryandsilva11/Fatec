CREATE DATABASE db_loja_automotiva;

CREATE TABLE cliente(
    email varchar(50),
    telefone char(11),
    cpf char(14) primary key,
    nome varchar(100)
);

CREATE TABLE produto(
    codProduto int primary key,
    precoCompra decimal(10,2),
    nome varchar(50),
    marca varchar(30),
    quntidade int,
    especieDestinada varchar(20)
);

CREATE TABLE fornecedor(
    cnpj char(14) primary key,
    nome varchar(50),
    telefone char(11),
    email varchar(50),
    endereco varchar(255)
); 

CREATE TABLE compra(
    codCompra int primary key,
    cpfCliente char(14),
    codProduto int,
    dataCompra date,
    quantidade int,
    foreign key (cpfCliente) references cliente(cpf),
    foreign key (codProduto) references produto(codProduto)
);

INSERT INTO cliente (email, telefone, cpf, nome) VALUES 
('carlos.silva@email.com', '11988887777', '111.222.333-44', 'Carlos Eduardo Silva'),
('mariana.souza@email.com', '11977776666', '555.666.777-88', 'Mariana Souza');

INSERT INTO produto (codProduto, precoCompra, nome, marca, quntidade, especieDestinada) VALUES 
(1, 45.00, 'Óleo Motor 5W30', 'Castrol', 50, 'Carro'),
(2, 120.50, 'Pastilha de Freio', 'Bosch', 30, 'Carro');

INSERT INTO fornecedor (cnpj, nome, telefone, email, endereco) VALUES 
('12345678000199', 'Distribuidora AutoPeças Brasil', '1133334444', 'contato@autopecasbr.com', 'Av. Industrial, 1500 - SP'),
('98765432000111', 'Lubrificantes & Cia', '1122221111', 'vendas@lubrificantes.com', 'Rua das Oficinas, 45 - SP');

INSERT INTO compra (codCompra, cpfCliente, codProduto, dataCompra, quantidade) VALUES 
(1, '111.222.333-44', 1, '2026-09-15', 2),
(2, '555.666.777-88', 2, '2026-09-15', 1);

SELECT * FROM compra WHERE codCompra = 1;

UPDATE cliente SET nome = "Guéviti da Silva" WHERE cpf = "111.222.333-44";

SELECT 
    compra.codCompra,
    cliente.nome AS nome_cliente,
    produto.nome AS nome_produto,
    compra.quantidade,
    compra.dataCompra
FROM compra
INNER JOIN cliente ON compra.cpfCliente = cliente.cpf
INNER JOIN produto ON compra.codProduto = produto.codProduto;

SELECT 
    cliente.nome AS nome_cliente,
    cliente.cpf,
    compra.codCompra,
    compra.dataCompra,
    compra.quantidade
FROM cliente
LEFT JOIN compra ON cliente.cpf = compra.cpfCliente;

SELECT 
    produto.codProduto,
    produto.nome AS nome_produto,
    produto.precoCompra,
    compra.codCompra,
    compra.quantidade
FROM compra
RIGHT JOIN produto ON compra.codProduto = produto.codProduto;
