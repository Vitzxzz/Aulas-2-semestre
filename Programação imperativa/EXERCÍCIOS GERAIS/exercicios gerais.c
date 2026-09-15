#include <string.h>
#include <stdio.h>
#include <stdlib.h>

/*
int main(){
    int i;
    char vet[30];
    int total_letra = 0;
    char letra;
    
    printf("Digite qual letra deseja contar:\n");
    scanf(" %c", &letra);
    
    printf("Digite uma palavra:\n");
    scanf("%s", vet);
    
    int tamanho = strlen(vet);
    
    for(i=0; i<tamanho; i++){
        if(vet[i] == letra){
            total_letra++;
        }
    }
    
    printf("Total de [%c] contadas: %d\n", letra, total_letra);
}
*/
int validar(char correto[], char digitado[]){
    if(strcmp(correto, digitado) == 0){
        return 1;
    }else{
        return 0;
    }
}

int main(){
    int acesso = 0;
    int tentativas = 0;
    char nome[30];
    char senha[30];
    char lognome[30];
    char logsenha[30];
    
    while(acesso == 0){
        printf("Bem vindo!\n");
        printf("Percebemos que é seu primeiro acesso, vamos se cadastrar!\n");
        printf("Cadastre um nome de usuário:\n");
        scanf("%s", nome);
        printf("Perfeito %s!, agora vamos cadastrar uma senha.\n", nome);
        scanf("%s", senha);
        int valisenha = strlen(senha);
        int valinome = strlen(nome);
        if(valisenha > 0 && valinome > 0){
            acesso++;
        }
    }
    printf("Bem vindo novamente!\n");
    printf("Vamos efetuar seu login:\n");
    do{
        printf("Digite seu nome:\n");
        scanf("%s", lognome);
        if(validar(nome, lognome) == 1){
            printf("O nome está correto!\n");
        }
        else{
            printf("O nome está incorreto!\n");
        }
    }while(validar(nome, lognome) == 0);
    do{
        printf("Digite sua senha:\n");
        scanf("%s", logsenha);
            if(validar(senha, logsenha) == 1){
                tentativas++;
                printf("A senha está correta!\n");
                printf("Você acertou em %d tentativas.\n", tentativas);
                printf("Bem vindo ao site!\n");
                printf("fim\n");
                }
            else{
            printf("A senha está incorreta!\n");
            tentativas++;
            if(tentativas >= 3){
                printf("Você excedeu o número máximo de tentativas, tente novamente mais tarde.\n");
                printf("Tentativas: %d\n", tentativas);
                return 0;
                }
                }
    }while(validar(senha, logsenha) == 0);
}   
























