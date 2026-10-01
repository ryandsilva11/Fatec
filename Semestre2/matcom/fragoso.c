#include <stdio.h>

#include <conio.h>

int main() {
  int a[6], b[6], u[12], usr[12], i, j, c, chave;

  printf("\n\nEste e o programa da Uniao");

  for (i = 1; i <= 5; i++)

  {

    printf("\nDigite o %d elemento de A: ", i);

    scanf("%d", &a[i]);
  }

  for (i = 1; i <= 5; i++)

  {

    printf("\nDigite o %d elemento de B: ", i);

    scanf("%d", &b[i]);
  }

  for (i = 1; i <= 5; i++)

  {

    u[i] = a[i];

    u[i + 5] = b[i];
  }

  for (i = 1; i <= 10; i++)

    printf("\nUnião [%d] = %d", i, u[i]);

  c = 1;

  chave = 0;

  usr[1] = u[1];

  for (i = 2; i <= 10; i++)

  {

    for (j = 1; j <= c; j++)

      if (u[i] == usr[j])
        chave = 1;

    if (chave == 0)

    {
      c = c + 1;

      usr[c] = u[i];
    }

    chave = 0;
  }

  printf("\nUniao sem os repetidos");

  for (i = 1; i <= c; i++)

    printf("\n %d", usr[i]);

  return 0;
}
