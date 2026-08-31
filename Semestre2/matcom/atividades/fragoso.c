#include <conio.h>
#include <stdio.h>
#include <stdlib.h>

int main() {
  system("cls");
  int a[6], u[12], usr[12], i, c, j, chave;
  printf("Este eh o programa da Uniao.");
  system("cls");

  c = 1;
  chave = 0;
  usr[1] = u[1];

  for (i = 2; i <= 10; i++) {

    for (j = 1; j <= c; j++) {

      if (u[i] == usr[j]) {
        chave = 1;
      }
    }

    if (chave == 0) {
      c++;
      usr[c] = u[i];
    }

    chave = 0;

    printf("\nUniao sem os repetidos:");
    for (i = 1; i <= c; i++) {
      printf("\n %d", usr[i]);
    }

    return 0;
  }
}