-- 1. Criar a tabela de Professores
CREATE TABLE Professores (
    id_professor INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome TEXT NOT NULL,
    especialidade TEXT
);

-- 2. Criar a tabela de Alunos
CREATE TABLE Alunos (
    id_aluno INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome TEXT NOT NULL
);

-- 3. Criar a tabela de Turmas (com a ligação para o Professor)
CREATE TABLE Turmas (
    id_turma INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome_disciplina TEXT NOT NULL,
    fk_id_professor INTEGER,
    FOREIGN KEY (fk_id_professor) REFERENCES Professores(id_professor)
);

-- 4. Criar a tabela de ligação Aluno_Turma (N:N)
CREATE TABLE Matriculas (
    fk_id_aluno INTEGER,
    fk_id_turma INTEGER,
    PRIMARY KEY (fk_id_aluno, fk_id_turma),
    FOREIGN KEY (fk_id_aluno) REFERENCES Alunos(id_aluno),
    FOREIGN KEY (fk_id_turma) REFERENCES Turmas(id_turma)
);