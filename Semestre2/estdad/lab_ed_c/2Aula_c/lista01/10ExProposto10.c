#include <stdio.h>

#define LINHAS_A 3
#define COLUNAS_A 2

void transporMatriz(int A[LINHAS_A][COLUNAS_A], int B[COLUNAS_A][LINHAS_A]) {
  for (int i = 0; i < LINHAS_A; i++) {
    for (int j = 0; j < COLUNAS_A; j++) {
      B[j][i] = A[i][j];
    }
  }
}

void imprimirMatrizA(int matriz[LINHAS_A][COLUNAS_A]) {
  for (int i = 0; i < LINHAS_A; i++) {
    for (int j = 0; j < COLUNAS_A; j++) {
      printf("%4d ", matriz[i][j]);
    }
    printf("\n");
  }
}

void imprimirMatrizB(int matriz[COLUNAS_A][LINHAS_A]) {
  for (int i = 0; i < COLUNAS_A; i++) {
    for (int j = 0; j < LINHAS_A; j++) {
      printf("%4d ", matriz[i][j]);
    }
    printf("\n");
  }
}

int main() {
  int A[LINHAS_A][COLUNAS_A];
  int B[COLUNAS_A][LINHAS_A];

  printf("Digite os elementos da matriz A (3x2):\n");
  for (int i = 0; i < LINHAS_A; i++) {
    for (int j = 0; j < COLUNAS_A; j++) {
      printf("Elemento [%d][%d]: ", i, j);
      scanf("%d", &A[i][j]);
    }
  }

  transporMatriz(A, B);

  printf("\n--- Matriz A (3x2) ---\n");
  imprimirMatrizA(A);

  printf("\n--- Matriz B - Transposta (2x3) ---\n");
  imprimirMatrizB(B);

  return 0;
}
