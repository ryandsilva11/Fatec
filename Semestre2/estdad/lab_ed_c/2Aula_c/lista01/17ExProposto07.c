#include <stdio.h>

#define TAM 6

void inverterVetor(int vetor[], int tamanho) {
  int inicio = 0;
  int fim = tamanho - 1;
  while (inicio < fim) {
    int temp = vetor[inicio];
    vetor[inicio] = vetor[fim];
    vetor[fim] = temp;
    inicio++;
    fim--;
  }
}

void imprimirVetor(int vetor[], int tamanho) {
  for (int i = 0; i < tamanho; i++) {
    printf("%d ", vetor[i]);
  }
  printf("\n");
}

int main() {
  int vetor[TAM];

  printf("Digite %d numeros inteiros:\n", TAM);
  for (int i = 0; i < TAM; i++) {
    printf("Elemento [%d]: ", i);
    scanf("%d", &vetor[i]);
  }

  printf("\nVetor original: ");
  imprimirVetor(vetor, TAM);

  inverterVetor(vetor, TAM);

  printf("Vetor modificado (invertido): ");
  imprimirVetor(vetor, TAM);

  return 0;
}
