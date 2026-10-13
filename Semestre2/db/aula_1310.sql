CREATE DATABASE aula_1310;

USE aula_1310;

CREATE TABLE pkmn (
    id_pkmn INT AUTO_INCREMENT PRIMARY KEY,
    nome_pkmn VARCHAR(50) NOT NULL
);

CREATE TABLE movimento (
    id_movimento INT NOT NULL,
    nome_movimento VARCHAR(50) NOT NULL
);

ALTER TABLE movimento ADD PRIMARY KEY (id_movimento);

ALTER TABLE movimento ADD tipo VARCHAR(15) NOT NULL;

ALTER TABLE movimento
ADD CONSTRAINT fk_movimento_pkmn FOREIGN KEY (id_movimento) REFERENCES pkmn (id_pkmn);

ALTER TABLE movimento DROP COLUMN nome_movimento;

ALTER TABLE pkmn RENAME TO pokemon;

DESCRIBE pokemon;

DESCRIBE movimento;