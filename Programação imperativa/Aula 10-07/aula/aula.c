#include <stdio.h>
#include <stdlib.h>
int main() {
    // Ponteiro para o arquivo
    FILE* entrada;
    // Abertura do arquivo dados.txt para leitura (modo "r" -- read)
    entrada = fopen("dados.txt", "r");
    // Verificação se a abertura ocorreu com sucesso
    if (entrada != NULL) {
    printf("Sucesso na abertura do arquivo.\n");
    fclose(entrada); // fecha o arquivo
    }
    else {
    printf("Falha na abertura do arquivo.\n");
    }
return 0;
}