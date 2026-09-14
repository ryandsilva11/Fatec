#include <stdio.h>

void calcularTotalPedido(float valorBruto, float *valorFinal, float *custoFrete) {
  float valorComDesconto = valorBruto;

  if (valorBruto > 200.0f) {
    valorComDesconto = valorBruto * 0.90f;
  }

  if (valorComDesconto > 250.0f) {
    *custoFrete = 0.0f;
  } else {
    *custoFrete = 15.0f;
  }

  *valorFinal = valorComDesconto + *custoFrete;
}

int main() {
  float valorBruto, valorFinal, custoFrete;

  printf("Digite o valor bruto das mercadorias: R$");
  scanf("%f", &valorBruto);

  calcularTotalPedido(valorBruto, &valorFinal, &custoFrete);

  printf("Custo do frete: R$%.2f\n", custoFrete);
  printf("Valor final a ser pago: R$%.2f\n", valorFinal);

  return 0;
}
