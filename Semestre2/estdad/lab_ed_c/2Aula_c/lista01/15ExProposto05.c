#include <stdio.h>

#define TAM 5

void lerNotas(float notas[], int tamanho) {
  for (int i = 0; i < tamanho; i++) {
    printf("Digite a nota do aluno %d: ", i + 1);
    scanf("%f", &notas[i]);
  }
}

float calcularMedia(float notas[], int tamanho) {
  float soma = 0.0f;
  for (int i = 0; i < tamanho; i++) {
    soma += notas[i];
  }
  return soma / tamanho;
}

int main() {
  float notas[TAM];

  printf("--- Leitura das Notas ---\n");
  lerNotas(notas, TAM);

  float media = calcularMedia(notas, TAM);
  printf("\nMedia das notas da turma: %.2f\n", media);

  return 0;
}
