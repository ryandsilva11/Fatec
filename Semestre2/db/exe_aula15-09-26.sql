CREATE DATABASE db_loja_automotiva;

CREATE TABLE cliente(
    email varchar(50),
    telefone char(11),
    cpf char(14) primary key,
    nome varchar(100)
);

CREATE TABLE produto(
    codProduto int primary key.
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
);
