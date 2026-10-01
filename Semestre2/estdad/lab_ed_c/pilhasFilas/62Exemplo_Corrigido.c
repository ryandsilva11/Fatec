#include <stdio.h>
#include <stdlib.h>

typedef struct No {
    int dado;
    struct No* proximo;
} No;

No* topo = NULL;

void push(int valor) {
    No* novo = (No*)malloc(sizeof(No));
    if (novo == NULL) {
        printf("Erro: Falha na alocacao de memoria (Heap Overflow)!\n");
        return;
    }
    novo->dado = valor;
    novo->proximo = topo;
    topo = novo;
}

int pop() {
    if (topo == NULL) {
        printf("Erro: Pilha vazia (Underflow)!\n");
        return -1;
    }
    No* temp = topo;          // 1. Armazena ponteiro temporario do no
    int valor = temp->dado;   // 2. Extrai o dado do elemento
    topo = topo->proximo;     // 3. Desconecta o no e atualiza o topo
    free(temp);               // 4. Libera a memoria (previne Memory Leak)
    return valor;
}

int main() {
    push(10);
    push(20);
    printf("Desempilhado: %d\n", pop()); // 20
    printf("Desempilhado: %d\n", pop()); // 10
    return 0;
}
