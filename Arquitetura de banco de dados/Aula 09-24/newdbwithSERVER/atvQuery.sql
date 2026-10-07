
-- Nível: Básico (Consultas Simples)
-- Lista de Presença: Escreva uma query que retorne o nome de todos os alunos cadastrados na escola.
SELECT nome FROM Alunos;
-- Corpo Docente: Escreva uma query que mostre o nome e a especialidade de todos os professores.
SELECT nome, especialidade FROM Professores;
-- Catálogo de Matérias: Escreva uma query que liste todos os nomes das disciplinas (turmas) disponíveis.
SELECT nome_disciplina as Disciplina FROM Turmas;

-- Nível: Filtros (Uso do WHERE)
-- Busca Específica: O professor 'Ricardo Santos' precisa ver seus dados. 
-- Escreva uma query que selecione apenas as informações dele.
SELECT * FROM Professores WHERE nome LIKE 'Ricardo Santos';
-- Filtro de Matéria: Escreva uma query que liste apenas a turma cujo nome seja 'Banco de Dados'.
SELECT nome_disciplina FROM Turmas WHERE nome_disciplina LIKE 'Banco de Dados';
-- Pesquisa por Especialidade: Escreva uma query que retorne os professores que dão aula de 'Programação'.
SELECT * FROM Professores WHERE especialidade LIKE 'Programação';

-- Nível: Organização e Joins (Relacionamentos)especialidade
-- Ordem Alfabética: Liste o nome de todos os alunos, mas organize a lista em ordem alfabética (A-Z).
SELECT	 t.nome_disciplina, p.nome, a.nome FROM turmas t JOIN professores p JOIN alunos a ON t.fk_id_professor = p.id_professor; 
-- Quem ensina o quê?: Faça uma consulta que mostre o nome da disciplina ao lado do nome do professor responsável
-- (Dica: Use JOIN entre Turmas e Professores).

-- Ocupação das Turmas: Escreva uma query que mostre quais IDs de alunos estão matriculados na Turma de ID número 1 
-- (Dica: Olhe para a tabela Matriculas).

-- Desafio Final: Escreva uma query que mostre o nome do aluno e o ID da turma em que ele está matriculado.
