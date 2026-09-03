#include <stdio.h>

#define LINHAS 3
#define COLUNAS 3

void encontrarMaiorElemento(int matriz[LINHAS][COLUNAS], int *maior, int *linha, int *coluna) {
  *maior = matriz[0][0];
  *linha = 0;
  *coluna = 0;

  for (int i = 0; i < LINHAS; i++) {
    for (int j = 0; j < COLUNAS; j++) {
      if (matriz[i][j] > *maior) {
        *maior = matriz[i][j];
        *linha = i;
        *coluna = j;
      }
    }
  }
}

int main() {
  int matriz[LINHAS][COLUNAS];
  int maior, linha, coluna;

  printf("Digite os elementos da matriz 3x3:\n");
  for (int i = 0; i < LINHAS; i++) {
    for (int j = 0; j < COLUNAS; j++) {
      printf("Elemento [%d][%d]: ", i, j);
      scanf("%d", &matriz[i][j]);
    }
  }

  encontrarMaiorElemento(matriz, &maior, &linha, &coluna);

  printf("\nMaior valor encontrado: %d\n", maior);
  printf("Localizacao: Linha %d, Coluna %d\n", linha, coluna);

  return 0;
}
