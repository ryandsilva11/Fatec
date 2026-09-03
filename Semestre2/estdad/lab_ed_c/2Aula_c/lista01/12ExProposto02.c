#include <stdio.h>

float calcularIMC(float peso, float altura) {
  return peso / (altura * altura);
}

int main() {
  float peso, altura, imc;

  printf("Digite o peso (kg): ");
  scanf("%f", &peso);

  printf("Digite a altura (m): ");
  scanf("%f", &altura);

  imc = calcularIMC(peso, altura);
  printf("IMC: %.2f\n", imc);

  if (imc < 18.5f) {
    printf("Classificacao: Abaixo do peso\n");
  } else if (imc <= 24.9f) {
    printf("Classificacao: Peso normal\n");
  } else {
    printf("Classificacao: Acima do peso\n");
  }

  return 0;
}
