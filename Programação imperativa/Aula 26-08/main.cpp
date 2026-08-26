//(a) Escreva um programa em C que leia do teclado dois vetores (A e B) com cinco elementos inteiros cada
//um, gere um terceiro vetor (S) com a soma dos correspondentes elementos dos dois primeiros ( S[i] = A[i] +
//B[i] ) e imprima os três vetores.

//(b) Escreva um programa em C que leia do teclado um vetor de N elementos reais, imprima esse vetor e,
//depois, imprima a soma dos elementos equidistantes, isto é, imprime a soma do primeiro com último, depois
//a soma do segundo com o penúltimo, e assim por diante.

//(c) Escreva um programa em C que leia do teclado um vetor de N caráteres, gere um novo vetor de caráteres
//na ordem inversa do primeiro e imprima os dois vetores.

//(d) Escreva um programa em C que leia do teclado uma sequência de N caráteres e identifique se é ou não
//um palíndromo. O valor de N deve ser fornecido pelo usuário, antes da entrada da sequência de caráteres.

//(e) Escreva um programa em C que leia do teclado uma sequência de N valores inteiros e armazene-a em um
//vetor v. Em seguida, leia do teclado um valor inteiro x e procure esse valor no vetor v. O programa deve
//informar se x foi ou não encontrado em v. Se encontrado, deve informar o índice do vetor onde x se
//encontra. Caso contrário, imprime o valor -1.

//(f) Escreva um programa em C que leia do teclado uma sequência de N valores inteiros e armazene-a em um
//vetor v. Em seguida, gere um novo vetor de inteiros com a mesma capacidade e os mesmos elementos de v,
//porém em ordem crescente.

//(g) Escreva um programa em C que leia do teclado uma sequência de N valores inteiros distintos entre si e
//armazene-a em um vetor. Para cada valor da sequência fornecido pelo usuário, o programa deve verificar se,
//de fato, é um valor inédito antes de inseri-lo no vetor. Caso não seja, o programa deve rejeitar o valor
//fornecido.

//(h) Escreva um programa em C que calcule a média e o desvio padrão das notas de uma turma de, no
//máximo, 50 estudantes. Para cada estudante, há uma nota entre 0 e 10, com apenas uma casa decimal.

//==================== EXERCÍCIOS DE MATRIZES ====================

//(a) Considere um conjunto de cidades vizinhas que possuam estradas que as ligam,
//sendo que algumas estradas são de mão dupla, enquanto outras são de mão única.
//Uma matriz de adjacências contendo valores booleanos pode ser usada para
//representar todas as ligações entre cidades. Supondo que o nome dessa matriz seja
//Adj, então, por exemplo, se Adj[1][2] for true, isso indica que é possível ir
//diretamente da cidade 1 para a cidade 2. Escreva uma função que, dada uma matriz de
//adjacências e os números de duas cidades A e B, descubra um caminho entre A e B, se
//existir.

//(b) O Problema das Oito Rainhas consiste em alocar 8 rainhas em um tabuleiro de xadrez de
//modo que nenhuma rainha ameace outra. Escreva um programa em C que represente o
//tabuleiro de xadrez como sendo uma matriz 8x8 de valores booleanos, sendo que o valor true
//indica que há uma rainha alocada na correspondente casa do tabuleiro, e gere, ao menos, uma
//solução para o problema.