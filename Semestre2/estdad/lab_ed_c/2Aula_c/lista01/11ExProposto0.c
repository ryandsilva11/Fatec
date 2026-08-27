#include <stdio.h>

float converterDolarParaReal(float dolar) { return dolar / 5.15f; }

int main() {
  float dolar;
  printf("Digite o valor em dolares: U$");
  scanf("%f", &dolar);
  printf("O valor em reais eh: R$%.2f\n", converterDolarParaReal(dolar));
  return 0;
}