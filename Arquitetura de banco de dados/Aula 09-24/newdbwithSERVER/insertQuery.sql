INSERT INTO Professores (nome, especialidade) VALUES ('Ricardo Santos', 'Matemática');
INSERT INTO Professores (nome, especialidade) VALUES ('Ana Paula', 'História');
INSERT INTO Professores (nome, especialidade) VALUES ('Carlos Souza', 'Programação');

-- O Professor 1 (Ricardo) dará Cálculo e Álgebra
INSERT INTO Turmas (nome_disciplina, fk_id_professor) VALUES ('Cálculo I', 1);
INSERT INTO Turmas (nome_disciplina, fk_id_professor) VALUES ('Álgebra Linear', 1);

-- A Professora 2 (Ana) dará História do Brasil
INSERT INTO Turmas (nome_disciplina, fk_id_professor) VALUES ('História do Brasil', 2);

-- O Professor 3 (Carlos) dará Banco de Dados
INSERT INTO Turmas (nome_disciplina, fk_id_professor) VALUES ('Banco de Dados', 3);

INSERT INTO Alunos (nome) VALUES ('Mariana Lima');
INSERT INTO Alunos (nome) VALUES ('João Pedro');
INSERT INTO Alunos (nome) VALUES ('Beatriz silva');
INSERT INTO Alunos (nome) VALUES ('Lucas Oliveira');

-- Mariana (Aluno 1) está em Cálculo (Turma 1) e Banco de Dados (Turma 4)
INSERT INTO Matriculas (fk_id_aluno, fk_id_turma) VALUES (1, 1);
INSERT INTO Matriculas (fk_id_aluno, fk_id_turma) VALUES (1, 4);

-- João Pedro (Aluno 2) está em Cálculo (Turma 1) e História (Turma 3)
INSERT INTO Matriculas (fk_id_aluno, fk_id_turma) VALUES (2, 1);
INSERT INTO Matriculas (fk_id_aluno, fk_id_turma) VALUES (2, 3);

-- Beatriz (Aluno 3) está apenas em Banco de Dados (Turma 4)
INSERT INTO Matriculas (fk_id_aluno, fk_id_turma) VALUES (3, 4);

-- Lucas (Aluno 4) está em todas as turmas do Ricardo (Turmas 1 e 2)
INSERT INTO Matriculas (fk_id_aluno, fk_id_turma) VALUES (4, 1);
INSERT INTO Matriculas (fk_id_aluno, fk_id_turma) VALUES (4, 2);