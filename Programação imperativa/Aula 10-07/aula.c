#include <stdio.h>
#include <stdlib.h>
int main() {
// Ponteiro para o arquivo
FILE* arquivo;
// Criação do arquivo dados.txt (modo "w" -- write)
arquivo = fopen("dados.txt", "w");
// Verificação se a criação ocorreu com sucesso
if (arquivo != NULL) {
printf("Sucesso na criação do arquivo.\n");
fclose(arquivo); // fecha o arquivo
}
else {
printf("Falha na criação do arquivo.\n");
}
return 0;
}
