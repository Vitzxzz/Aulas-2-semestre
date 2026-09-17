USE `meteflix`;

#Criação da tabela usuários
CREATE TABLE usuarios (
	id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE
);

#Criação da tabela dos filmes
CREATE TABLE filmes (
	id_filme INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    ano_lancamento INT
);


#Criação da tabela das avaliações
CREATE TABLE avaliacoes (
	id_avaliacao INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    id_filme INT,
    avalicao VARCHAR(250) NOT NULL,
    nota DECIMAL(3, 1) CHECK (nota >=0 and nota <= 10),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_filme) REFERENCES filmes(id_filme)
);