#include <stdio.h>
#include <stdlib.h>

typedef struct No {
    int dado;
    struct No* prox;
} No;

No* inicio = NULL;
No* fim = NULL;

void enqueue(int valor) {
    No* novo = (No*)malloc(sizeof(No));
    if (novo == NULL) return;
    novo->dado = valor;
    novo->prox = NULL;
    if (fim == NULL) {
        inicio = fim = novo;
    } else {
        fim->prox = novo;
        fim = novo;
    }
}

int dequeue() {
    if (inicio == NULL) {
        printf("Erro: Fila Vazia (Underflow)!\n");
        return -1;
    }
    No* temp = inicio;         // 1. Guarda referencia temporaria do no
    int valor = temp->dado;    // 2. Salva o dado para retorno
    inicio = inicio->prox;     // 3. Avanca o inicio para o proximo
    
    if (inicio == NULL) {      // 4. Sincroniza fim se a fila esvaziou
        fim = NULL;
    }
    
    free(temp);                // 5. Libera a memoria alocada (previne Memory Leak)
    return valor;
}

int main() {
    enqueue(10); 
    enqueue(20);
    printf("Desenfileirado: %d\n", dequeue()); // 10
    printf("Desenfileirado: %d\n", dequeue()); // 20 (inicio e fim tornam-se NULL)
    return 0;
}
