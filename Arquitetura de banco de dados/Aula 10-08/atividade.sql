-- EXERCÍCIO 1: JOIN Simples entre Alunos e Matrículas

-- Liste o nome de todos os alunos e o ID das turmas em que estão matriculados. Ordene alfabeticamente pelo nome do aluno.

-- Exiba o nome do aluno, a disciplina que está cursando e o nome do professor responsável pela turma. Inclua todos os alunos, mesmo que alguma turma não tenha professor atribuído.

-- Mostre o nome de cada professor, sua especialidade e quantos alunos estão matriculados em suas turmas. Exiba os professores mesmo que não tenham nenhum aluno cadastrado.
-- Liste todos os alunos que estão matriculados em turmas de uma disciplina específica. Use "Matemática" como exemplo na cláusula WHERE. Mostre o nome do aluno e a disciplina.
-- Encontre todos os pares de alunos que estão matriculados nas mesmas turmas (turmas em comum). Mostre o nome dos dois alunos e o ID da turma onde ambos estão matriculados. Evite mostrar a mesma dupla duas vezes.

-- PARTE 2: EXERCÍCIOS COM SUBQUERYs

-- Liste o ID e nome da disciplina de cada turma, seguido de uma coluna mostrando a quantidade de alunos matriculados em cada uma. Use uma subquery na cláusula SELECT para calcular a quantidade de alunos.

-- Encontre todos os alunos que estão matriculados em turmas de disciplinas que começam com a letra "M". Use uma subquery para identificar primeiro quais são essas turmas.
-- Liste todos os professores que têm pelo menos uma turma atribuída a eles. Use o operador EXISTS para verificar se cada professor tem turmas.
-- Encontre o professor cuja turma tem o maior número de alunos matriculados. Exiba o nome do professor, o nome da disciplina e a quantidade de alunos.
-- Liste todos os alunos que NÃO estão matriculados em nenhuma turma. Use uma subquery com NOT IN para identificá-los.

/*
DICAS IMPORTANTES
Para JOINs:
INNER JOIN retorna apenas registros que têm correspondência em ambas as tabelas
LEFT JOIN retorna todos os registros da tabela à esquerda, mesmo sem correspondência
Use aliases (a., m., t., p.) para evitar ambiguidade
JOINs são processados antes de WHERE e GROUP BY
Para SUBQUERYs:
Subqueries correlacionadas referenciam a tabela externa
EXISTS é geralmente mais eficiente que IN para grandes datasets
Cuidado: NOT IN retorna nenhum resultado se houver NULL na subquery
Subqueries no SELECT executam para cada linha; use com cautela em grandes tabelas
CTEs (WITH) são uma alternativa moderna e mais legível que subqueries aninhadas
Quando Usar:
Use JOINs para recuperar dados de múltiplas tabelas - geralmente mais eficiente
Use SUBQUERYs para lógica condicional, verificações de existência, comparações com agregações
*/