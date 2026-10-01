#include <stdio.h>
#define MAX 3

int fila[MAX];
int inicio = 0, fim = -1, total = 0;

void enqueue(int v) {
    if (total >= MAX) {
        printf("Fila Cheia!\n");
        return;
    }
    fim = (fim + 1) % MAX; // Avanco circular seguro do indice fim
    fila[fim] = v;
    total++;
}

int dequeue() {
    if (total == 0) {
        printf("Fila Vazia!\n");
        return -1;
    }
    int v = fila[inicio];
    inicio = (inicio + 1) % MAX; // Avanco circular seguro do indice inicio
    total--;
    return v;
}

int main() {
    enqueue(10); 
    enqueue(20); 
    enqueue(30);
    printf("Desenfileirado: %d\n", dequeue()); // Libera a vaga no indice 0
    enqueue(40);                                // Insere com sucesso no indice 0 reaproveitado!
    printf("Desenfileirado: %d\n", dequeue()); // 20
    printf("Desenfileirado: %d\n", dequeue()); // 30
    printf("Desenfileirado: %d\n", dequeue()); // 40
    return 0;
}
