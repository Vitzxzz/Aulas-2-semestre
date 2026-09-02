#include <stdio.h>



//EXERCICIOS DA AULA DE PROGRAMACAO IMPERATIVA



//IF ELSE:

//(a) Escreva um programa na linguagem C que, dados dois numeros inteiros distintos fornecidos pelo usuario (via
//teclado), imprima-os em ordem crescente.
//Obs:
//O programa deve certificar que os dois numeros sejam distintos entre si.
//O programa nao pode empregar nenhum comando de repetição, nem armazenar dados em array.

//int main(){
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
//
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


//#include <stdio.h>

//int main()
//{
//    double num1;
//    double num2;
//    char op;
//    double res;
    
//    printf("Digite o primeiro número:\n");
//    scanf("%lf", &num1);
//    printf("Digite o segundo número:\n");
//    scanf("%lf", &num2);
//    printf("Digite o operador: (+) (-) (*) (/)\n");
//    scanf(" %c", &op);
    
//    switch (op){
//        case '+': res = num1 + num2; printf("O resultado foi: %.2lf", res); break;
//        case '-': res = num1 - num2; printf("O resultado foi: %.2lf", res); break;
//        case '*': res = num1 * num2; printf("O resultado foi: %.2lf", res); break;
//        case '/': res = num1 / num2; printf("O resultado foi: %.2lf", res); break;
//        default: printf("OPERADOR INVÁLIDO");
//    }
//    return 0;
//}


//WHILE - DO WHILE - FOR

//a) Sendo H = 1 + 1/2 + 1/3 + ¼ + ... 1/N, escreva um programa em C para gerar o número H.
//O valor de N deve ser fornecido pelo usuário. Use a estrutura for para somar a sequência de termos.

//#include <stdio.h>

//int main(){
//    double h = 0.0;
//    int n;
//  
//    printf("Digite seu número: \n");
//    scanf("%d", &n);
//    for(int i = 1; i <= n; i++){
//        h += 1.0/i;
//    }
//    printf("%lf", h); 
//    return 0;
//}

//(b) Escreva um programa em C para calcular o fatorial de um número N fornecido pelo usuário.
//Use a estrutura for para gerar a sequência de termos.
//#include <stdio.h>

//int main(){
//    int N = 0;
//    long fat = 1;
    
//    printf("Digite um número: \n");
//    scanf("%d", &N);
    
//    for(int i = 1; i <= N; i++){
//        printf("%d", i);
//         fat *= i;
//    }
//}

//(c) Escreva um programa em C para calcular o valor da série S abaixo.
//O valor de N deve ser fornecido pelo usuário. Use a estrutura do-while para somar a sequência de termos.
//S = 1/N + 2/N-1 + 3/N-2 + ...+ N-1/2 + N/1

//int main(){
//    int N;
//    double S = 1.0;
//    int numero;
//    int denominador;
    
//    printf("Digite um número:\n");
//    scanf("%d", &N);
    
//    if(N > 0){
//        numero = 1;
//        denominador = N;
        
//        do{
//            S += (double)numero/denominador;
//            numero++;
//            denominador--;
//            printf("Série: %lf \n", S);
//            printf("Número: %d \n", numero);
//            printf("Denominador: %d \n\n", denominador);
//        }while (numero < N);
//    }
//}

//(d) Escreva um programa em C para imprimir os 30 primeiros números naturais pares.
//Use a estrutura for para gerar a sequência de termos.

//int main(){
//    for(int i = 0; i < 30; i++){
//        if(i%2 == 0){
//            printf("É par: %d \n", i);
//        }
//    }
//}



//CONST - ENUM - TYPEDEF

//(a) Defina um tipo enumerado para representar 10 moedas diferentes (real, dólar, libra, etc).

//enum MOEDA { real, dolar, libra, euro, iene, peso, franco, rupia, rublo, robux };

//int main(){
//    enum MOEDA moedas;
//    int conversao;
//    
//    printf("Digite qual moeda você gostaria de conferir\n");
//    scanf("%d", &conversao);
//    moedas = conversao;
    
//    switch(moedas){
//        case real:
//            puts("Sua moeda é o real!"); break;
//        case dolar:
//            puts("Sua moeda é o dolar!"); break;
//        case libra:
//            puts("Sua moeda é o libra!"); break;
//        case euro:
//            puts("Sua moeda é o euro!"); break;
//        case iene:
//            puts("Sua moeda é o iene!"); break;
//        case peso:
//            puts("Sua moeda é o peso!"); break;
//        case franco:
//            puts("Sua moeda é o franco-suíco!"); break;
//        case rupia:
//            puts("Sua moeda é o rupia-indiana!"); break;
//        case rublo:
//            puts("Sua moeda é o rublo-russo!"); break;
//        case robux:
//            puts("Sua moeda é o robux do jogo roblox!"); break;
//        default:
//            puts("Moeda não cadastrada."); break;
//    }
//    return 0;
//}

//(b) Defina um tipo enumerado para representar 10 línguas diferentes (português, alemão, francês, etc).


/*enum linguas { portugues, ingles, alemao, japones, espanhol, frances, hindi, russo, mandarim, chat };

int main(){
    enum linguas idiomas;
    int conversao;
    
    printf("Digite qual idioma você gostaria de conferir\n");
    scanf("%d", &conversao);
    idiomas = conversao;
    
    switch(idiomas){
        case portugues:
            puts("Seu idioma é o portugues!"); break;
        case ingles:
            puts("Seu idioma é o ingles!"); break;
        case alemao:
            puts("Seu idioma é o alemao!"); break;
        case japones:
            puts("Seu idioma é o japones!"); break;
        case espanhol:
            puts("Seu idioma é o espanhol!"); break;
        case frances:
            puts("Seu idioma é o frances!"); break;
        case hindi:
            puts("Seu idioma é o hindi!"); break;
        case mandarim:
            puts("Seu idioma é o mandarim!"); break;
        case russo:
            puts("Seu idioma é o russo!"); break;
        case chat:
            puts("Seu idioma é o chat do jogo roblox!"); break;
        default:
            puts("Idioma não cadastrado."); break;
    }
    return 0;
}
*/
