#include <stdio.h>
#define MAX 5

int pilha[MAX];
int topo = -1;

int push(int valor) {
    if (topo >= MAX - 1) {
        printf("Erro: Pilha cheia (Stack Overflow)!\n");
        return 0;
    }
    pilha[++topo] = valor;
    return 1;
}

int pop() {
    // Validacao de subfluxo (Stack Underflow)
    if (topo == -1) {
        printf("Erro: Pilha vazia (Stack Underflow)!\n");
        return -1;
    }
    return pilha[topo--];
}

int main() {
    push(10);
    push(20);
    printf("Desempilhando: %d\n", pop()); // 20
    printf("Desempilhando: %d\n", pop()); // 10
    printf("Desempilhando: %d\n", pop()); // Dispara aviso de Underflow de forma segura
    return 0;
}
