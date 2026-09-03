#include <stdio.h>

#define TAM 10

int buscarElemento(int vetor[], int tamanho, int x) {
  for (int i = 0; i < tamanho; i++) {
    if (vetor[i] == x) {
      return i;
    }
  }
  return -1;
}

int main() {
  int vetor[TAM];
  int x, posicao;

  printf("Digite %d numeros inteiros:\n", TAM);
  for (int i = 0; i < TAM; i++) {
    printf("Elemento [%d]: ", i);
    scanf("%d", &vetor[i]);
  }

  printf("\nDigite o valor a ser procurado (X): ");
  scanf("%d", &x);

  posicao = buscarElemento(vetor, TAM, x);

  if (posicao != -1) {
    printf("O elemento %d foi encontrado na posicao (indice): %d\n", x, posicao);
  } else {
    printf("O elemento %d nao foi encontrado no vetor (retorno: %d)\n", x, posicao);
  }

  return 0;
}
