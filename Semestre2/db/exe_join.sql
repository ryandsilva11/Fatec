CREATE DATABASE biblioteca;

CREATE TABLE autor (
    id_autor INT PRIMARY KEY,
    nome_autor VARCHAR(100),
    nacionalidade VARCHAR(50)
);

INSERT INTO autor (id_autor,nome_autor, nacionalidade) VALUES
(1, 'Machado de Assis', 'Brasileira'),
(2, 'J. K. Rowling', 'Britânica'),
(3, 'George Orwell', 'Britânica'),
(4, 'Clarice Lispector', 'Brasileira');

CREATE TABLE livro (
    id_livro INT PRIMARY KEY,
    titulo VARCHAR(150),
    ano_publicacao INT,
    id_autor INT,
    FOREIGN KEY (id_autor) REFERENCES autor(id_autor)
);

INSERT INTO livro (id_livro, titulo, ano_publicacao, id_autor) VALUES
(1, 'Dom Casmurro', 1899, 1),
(2, 'Harry Potter e a Pedra Filosofal', 1997, 2),
(3, '1984', 1949, 3),
(4, 'A Hora da Estrela', 1977, 4);

CREATE TABLE aluno (
    id_aluno INT PRIMARY KEY,
    nome_aluno VARCHAR(100),
    curso VARCHAR(50)
);

INSERT INTO aluno (id_aluno, nome_aluno, curso) VALUES
(1, 'Ryan Dias', 'Desenvolvimento de Software'),
(2, 'Julia Rocha', 'Banco de Dados'),
(3, 'Guilherme Vilela', 'Gestão Empresarial'),
(4, 'Otavio Pacheco', 'Sistemas para Internet');

CREATE TABLE emprestimo (
    id_emprestimo INT PRIMARY KEY,
    data_emprestimo DATE,
    data_devolucao DATE,
    id_livro INT,
    id_aluno INT,
    FOREIGN KEY (id_livro) REFERENCES livro(id_livro),
    FOREIGN KEY (id_aluno) REFERENCES aluno(id_aluno)
);

INSERT INTO emprestimo (id_emprestimo, data_emprestimo, data_devolucao, id_livro, id_aluno) VALUES
(1, '2026-09-01', '2026-09-15', 1, 1),
(2, '2026-09-02', '2026-09-16', 2, 2),
(3, '2026-09-03', '2026-09-17', 3, 3),
(4, '2026-09-04', '2026-09-18', 4, 4);

SELECT 
    livro.titulo,
    aluno.nome_aluno,
    autor.nome_autor,
    emprestimo.data_emprestimo
FROM
    emprestimo, aluno, livro, autor
WHERE
    emprestimo.id_aluno = aluno.id_aluno AND
    emprestimo.id_livro = livro.id_livro AND
    livro.id_autor = autor.id_autor;
