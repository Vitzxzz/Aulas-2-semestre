#include <stdio.h>



//EXERCICIOS DA AULA DE PROGRAMACAO IMPERATIVA



//IF ELSE:

//(a) Escreva um programa na linguagem C que, dados dois numeros inteiros distintos fornecidos pelo usuario (via
//teclado), imprima-os em ordem crescente.
//Obs:
//O programa deve certificar que os dois nnmeros sejam distintos entre si.
//O programa nao pode empregar nenhum comando de repetição, nem armazenar dados em array.

//int main()
//{
//int a;
//int b;
//printf("Digite um número inteiro: ");
//scanf("%d", &a);
//printf("Digite um número diferente do anterior: ");
//scanf("%d", &b);
//if (a == b){
    //printf("O número é igual o anterior.");    
    //}
//else if (a>b){
    //printf("Os números em forma crescente: %d, %d\n", b, a );
//}
//else{
    //printf("Os números em forma crescente: %d, %d\n", a, b);
//}
//}

//(b) Escreva um programa na linguagem C que, dadas três letras distintas fornecidas pelo usuário (via teclado),
//imprima-as em ordem alfabética.
//Obs:
//O programa deve certificar que as três letras sejam distintas entre si.
//O programa não pode empregar nenhum comando de repetição, nem armazenar dados em array.

//int main(){
//    char var1;
//    char var2;
//    char var3;

//    printf("Digite uma letra: 1/3");
//    scanf(" %c", &var1);
//    printf("Digite uma letra diferente da anterior: 2/3");
//    scanf(" %c", &var2);
//    printf("Digite uma letra diferente das anteriores: 3/3");
//    scanf(" %c", &var3);
//
//    if (var1 == var2 || var1 == var3 || var2 == var3){
//        printf("As letras são iguais.");
//    }
//    else if(var1 < var2 && var2 < var3){
//        printf("As letras em ordem alfabética: %c, %c, %c", var1, var2, var3);
//    }
//    else if(var1 < var3 && var3 < var2){
//        printf("As letras em ordem alfabética: %c, %c, %c", var1, var3, var2);
//    }
//    else if(var2 < var1 && var1 < var3){
//        printf("As letras em ordem alfabética: %c, %c, %c", var2, var1, var3);
//    }
//    else if(var2 < var3 && var3 < var1){
//        printf("As letras em ordem alfabética: %c, %c, %c", var2, var3, var1);
//    }
//   else if(var3 < var1 && var1 < var2){
//        printf("As letras em ordem alfabética: %c, %c, %c", var3, var1, var2);
//    }
//    else{
//        printf("As letras em ordem alfabética: %c, %c, %c", var3, var2, var1);
//    }
//}

//SWITCH:

//Escreva um programa em C para simular uma calculadora com as quatro operações básicas (adição, subtração,
//multiplicação e divisão). O programa deve receber, como entrada, dois operandos (valores do tipo double) e um
//operador (um valor do tipo char). Como saída, o programa deve exibir o resultado da aplicação do operador sobre os
//dois operandos.
//Obs:
//O programa deve empregar o comando switch para decidir qual das quatro operações deve ser realizada.
//O programa deve impedir a tentativa de divisão por zero.



//WHILE - DO WHILE - FOR

//a) Sendo H = 1 + 1/2 + 1/3 + ¼ + ... 1/N, escreva um programa em C para gerar o número H.
//O valor de N deve ser fornecido pelo usuário. Use a estrutura for para somar a sequência de termos.

//(b) Escreva um programa em C para calcular o fatorial de um número N fornecido pelo usuário.
//Use a estrutura for para gerar a sequência de termos.

//(c) Escreva um programa em C para calcular o valor da série S abaixo.
//O valor de N deve ser fornecido pelo usuário. Use a estrutura do-while para somar a sequência de termos.
//S = 1/N + 2/N-1 + 3/N-2 + ...+ N-1/2 + N/1

//(d) Escreva um programa em C para imprimir os 30 primeiros números naturais pares.
//Use a estrutura for para gerar a sequência de termos.



//CONST - ENUM - TYPEDEF

//(a) Defina um tipo enumerado para representar 10 moedas diferentes (real, dólar, libra, etc).

//(b) Defina um tipo enumerado para representar 10 línguas diferentes (português, alemão, francês, etc).
