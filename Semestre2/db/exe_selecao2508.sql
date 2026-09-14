CREATE DATABASE selecao;

CREATE TABLE pessoal(
    Cod_pessoal INT PRIMARY KEY,
    Nome_pessoal VARCHAR(30),
    Time_pessoal VARCHAR(20)
);

INSERT INTO pessoal VALUES(1, 'Giovana Fadini', 'Corinthians');
INSERT INTO pessoal(Cod_pessoal, Nome_pessoal) VALUES(2, 'Murillo de Souza');
INSERT INTO pessoal VALUES(07, 'Adelaide', 'Corinthians');
INSERT INTO pessoal VALUES(08, 'Marcio Ferraz', 'São Paulo');
INSERT INTO pessoal VALUES(09, 'Vinicius', 'Palmeiras');
INSERT INTO pessoal VALUES(10, 'Willian', 'Santos');
INSERT INTO pessoal VALUES(11, 'Elisa', 'Santos');
INSERT INTO pessoal VALUES(12, 'Fernando', NULL);
INSERT INTO pessoal VALUES(13, 'Eduardo', '            ');
INSERT INTO pessoal VALUES(14, 'Antonia', 'Santos'), (15, 'Célia', 'Palmeiras');
