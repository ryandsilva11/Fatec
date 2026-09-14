#include <stdio.h>

float celsiusParaFahrenheit(float celsius) {
  return celsius * 1.8f + 32.0f;
}

int main() {
  float temp1, temp2, temp3;

  printf("Digite a 1a temperatura em Celsius: ");
  scanf("%f", &temp1);

  printf("Digite a 2a temperatura em Celsius: ");
  scanf("%f", &temp2);

  printf("Digite a 3a temperatura em Celsius: ");
  scanf("%f", &temp3);

  printf("\n--- Conversoes ---\n");
  printf("%.2f C = %.2f F\n", temp1, celsiusParaFahrenheit(temp1));
  printf("%.2f C = %.2f F\n", temp2, celsiusParaFahrenheit(temp2));
  printf("%.2f C = %.2f F\n", temp3, celsiusParaFahrenheit(temp3));

  return 0;
}
