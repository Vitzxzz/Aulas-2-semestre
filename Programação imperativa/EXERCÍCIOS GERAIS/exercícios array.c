#include <stdio.h>
//Declare um array de 5 inteiros, preencha cada posição pedindo valores ao usuário com scanf, e depois imprima todos os valores usando um for.
/*
int main()
{
int array[5];
for(int i=0; i<5; i++){
    printf("Digite um número para o array: \n");
    scanf("%d", &array[i]);
}
    
for(int i=0; i<5; i++){
    printf("array[%d] = num %d\n", i, array[i]);
}
}
*/

//Dado um array de 6 números já preenchido no código, calcule e imprima a soma de todos os elementos.
/*
int main(){
    
int vetor[6] = {15, 20, 25, 30, 35, 40};
int soma = 0;
    
for(int i=0; i<6; i++){
    soma += vetor[i];
}
printf("soma: %d", soma);
return 0;
}
*/

//Peça 10 números ao usuário, guarde em um array e encontre o maior e o menor valor, imprimindo ambos ao final.
/*
int main(){
    int array[10];
    int maior = 0;
    int menor = 100;
    for(int i=0; i<10; i++){
        printf("Digite um número: %d \n", i);
        scanf("%d", &array[i]);
    }
    for(int i=0; i<10; i++){
        if (array[i]>maior){
            maior = array[i];
        }
        else if (array[i]<menor){
            menor = array[i];
        }
    }
    printf("Maior: %d \n Menor: %d", maior, menor);
}
*/

//Crie um array de 8 inteiros e inverta a ordem dos elementos (o primeiro vira o último, e assim por diante), imprimindo o array antes e depois da inversão.
/*
int main(){
    int array[8] = {1, 2, 3, 4, 5, 6, 7, 8};
    int i;
    int inicio = 0, fim = 7, aux;
    
    for(i=0; i<8; i++){
        printf("Array:%d \n", array[i]);
    }
    while(inicio<fim){
       aux = array[inicio];
       array[inicio] = array[fim];
       array[fim] = aux;
       inicio++;
       fim--;
    }
    for(i=0; i<8; i++){
        printf("Array invertida:%d \n", array[i]);
    }
}
*/
// Peça 7 números ao usuário e crie dois vetores que mostrem quais são pares e quais são ímpares, usando o operador % (resto da divisão).
/*
int main(){
    
    int i;
    int par[7];
    int impar[7];
    int numeros[7];
    int qtd_par=0, qtd_impar=0;
    
    for(i=0; i<7; i++){
        printf("Digite os números: [%d]\n", i+1);
        scanf("%d", &numeros[i]);
    }
    for(i=0; i<7; i++){
        int res = numeros[i]%2;
        if(res == 0){
            par[qtd_par] = numeros[i];
            qtd_par++;
        }
        else if(res != 0){
            impar[qtd_impar] = numeros[i];
            qtd_impar++;
        }
    }
    for(i=0; i<qtd_par; i++){
        printf("Par = [%d] \n", par[i]);
    }
    for(i=0; i<qtd_impar; i++){
        printf("Impar = [%d]\n", impar[i]);
    }
}
*/













