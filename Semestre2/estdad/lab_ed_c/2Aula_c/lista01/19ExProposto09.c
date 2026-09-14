#include <stdio.h>

#define ORDEM 4

float somarDiagonalPrincipal(float matriz[ORDEM][ORDEM]) {
  float soma = 0.0f;
  for (int i = 0; i < ORDEM; i++) {
    soma += matriz[i][i];
  }
  return soma;
}

int main() {
  float matriz[ORDEM][ORDEM];

  printf("Digite os elementos da matriz real 4x4:\n");
  for (int i = 0; i < ORDEM; i++) {
    for (int j = 0; j < ORDEM; j++) {
      printf("Elemento [%d][%d]: ", i, j);
      scanf("%f", &matriz[i][j]);
    }
  }

  float soma = somarDiagonalPrincipal(matriz);
  printf("\nSoma dos elementos da diagonal principal: %.2f\n", soma);

  return 0;
}
