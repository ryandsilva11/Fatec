# 📘 Matemática Computacional — Anotações de Aula

Este arquivo contém as anotações detalhadas, métodos explicados e exercícios resolvidos da aula de Matemática Computacional sobre **Sistemas Numéricos e Conversões de Base**.

---

## 🗺️ Conteúdo Programático do Semestre

- [x] **1. Sistemas Numéricos e Conversões** (Completo neste arquivo)
- [ ] **2. Teoria dos Conjuntos**
- [ ] **3. Matrizes** (Operações, Determinantes e Sistemas Lineares)
- [ ] **4. Funções**
- [ ] **5. Recursividade** (Fatorial e Sequência de Fibonacci)
- [ ] **6. Complexidade de Algoritmos**
- [ ] **7. Análise Combinatória**
- [ ] **8. Teoria dos Grafos**
- [ ] **9. Criptografia**

---

## 📖 Sumário deste Arquivo

1. [Definições das Bases Numéricas](#definicoes-das-bases-numericas)
2. [Método 1: Decimal para Outras Bases (Divisões Sucessivas)](#metodo-1-decimal-para-outras-bases-divisoes-sucessivas)
3. [Método 2: Outras Bases para Decimal (Soma de Potências)](#metodo-2-outras-bases-para-decimal-soma-de-potencias)
4. [Método 3: Conversões Diretas entre Outras Bases (Agrupamento de Bits)](#metodo-3-conversoes-diretas-entre-outras-bases-agrupamento-de-bits)

---

## 🔢 Definições das Bases Numéricas

* **Decimal (Base 10):** Utiliza os algarismos de 0 a 9. É o sistema que usamos no dia a dia.
* **Binário (Base 2):** Utiliza apenas os algarismos 0 e 1. É a base da computação.
* **Octal (Base 8):** Utiliza os algarismos de 0 a 7.
* **Hexadecimal (Base 16):** Utiliza os algarismos de 0 a 9 e as letras de A a F.
  * A = 10, B = 11, C = 12, D = 13, E = 14, F = 15.

---

## 🔄 Método 1: Decimal para Outras Bases (Divisões Sucessivas)

Para converter um número da base 10 para qualquer outra base, dividimos o número sucessivamente pela base de destino até que o quociente seja 0. Os restos das divisões, lidos de **baixo para cima**, formam o número convertido.

### 💡 Como funciona a Divisão Inteira (para conversão)
Quando dividimos números inteiros para conversão de base, nunca usamos vírgula. 
* **Se o número for maior:** Dividimos normalmente. Ex: 17 ÷ 8 cabe 2 vezes e sobra 1.
* **Se o número for menor (Regra de Ouro):** Ex: 2 ÷ 8. Como 8 não cabe dentro do 2, ele cabe 0 vezes e sobram as próprias 2 unidades. O quociente será 0 e o resto será o próprio número menor.

> [!TIP]
> **O Truque da Calculadora para Achar o Resto:**
> Se você usar uma calculadora e o resultado der quebrado (ex: 138 ÷ 8 = 17,25):
> 1. O **Quociente** é o número inteiro antes da vírgula (17).
> 2. O **Resto** é obtido multiplicando a parte decimal pela base: 0,25 × 8 = 2.

### A. Decimal para Binário (Base 10 → Base 2)

**Exemplo: Conversão de (147)₁₀**

| Divisão | Quociente | Resto | Posição |
| :---: | :---: | :---: | :---: |
| 147 ÷ 2 | 73 | **1** | LSB (Menor peso) |
| 73 ÷ 2 | 36 | **1** | |
| 36 ÷ 2 | 18 | **0** | |
| 18 ÷ 2 | 9 | **0** | |
| 9 ÷ 2 | 4 | **1** | |
| 4 ÷ 2 | 2 | **0** | |
| 2 ÷ 2 | 1 | **0** | |
| 1 ÷ 2 | 0 | **1** | MSB (Maior peso) |

Lendo os restos de baixo para cima:
**(147)₁₀ = (10010011)₂**

**Exercício Resolvido:**
* (138)₁₀ = **(10001010)₂**
  *(Cálculo: 138÷2=69 R0; 69÷2=34 R1; 34÷2=17 R0; 17÷2=8 R1; 8÷2=4 R0; 4÷2=2 R0; 2÷2=1 R0; 1÷2=0 R1)*

---

### B. Decimal para Octal (Base 10 → Base 8)

**Exemplo: Conversão de (147)₁₀**

| Divisão | Quociente | Resto |
| :---: | :---: | :---: |
| 147 ÷ 8 | 18 | **3** |
| 18 ÷ 8 | 2 | **2** |
| 2 ÷ 8 | 0 | **2** |

Lendo os restos de baixo para cima:
**(147)₁₀ = (223)₈**

**Exercício Resolvido:**
* (138)₁₀ = **(212)₈**
  *(Cálculo: 138÷8=17 R2; 17÷8=2 R1; 2÷8=0 R2)*

---

### C. Decimal para Hexadecimal (Base 10 → Base 16)

**Exemplo: Conversão de (147)₁₀**

| Divisão | Quociente | Resto |
| :---: | :---: | :---: |
| 147 ÷ 16 | 9 | **3** |
| 9 ÷ 16 | 0 | **9** |

Lendo os restos de baixo para cima:
**(147)₁₀ = (93)₁₆**

**Exercício Resolvido:**
* (138)₁₀ = **(8A)₁₆**
  *(Cálculo: 138÷16=8 R10; 8÷16=0 R8. Como 10 equivale a A, o resultado é 8A)*

---

## 🔄 Método 2: Outras Bases para Decimal (Soma de Potências)

Para converter qualquer base para a base 10 (decimal), multiplicamos cada dígito do número pela base de origem elevada à sua respectiva posição (a posição começa no 0, contando da direita para a esquerda). Depois, somamos todos os resultados.

> [!IMPORTANT]
> **Atenção:** Qualquer número (diferente de zero) elevado a zero é igual a 1 (ex: 2^0 = 1, 8^0 = 1, 16^0 = 1). Sempre some os resultados finais no final, nunca apenas os junte lado a lado.

### A. Binário para Decimal (Base 2 → Base 10)

**Método:**
Pesos das posições (da direita para a esquerda): 2^0=1, 2^1=2, 2^2=4, 2^3=8, 2^4=16, 2^5=32, 2^6=64, 2^7=128...

**Exercícios Resolvidos:**
* (00111001)₂ = **(57)₁₀**
  *(Cálculo: 1×1 + 0×2 + 0×4 + 1×8 + 1×16 + 1×32 = 1 + 8 + 16 + 32 = 57)*
* (11000100)₂ = **(196)₁₀**
  *(Cálculo: 0×1 + 0×2 + 1×4 + 0×8 + 0×16 + 0×32 + 1×64 + 1×128 = 4 + 64 + 128 = 196)*

---

### B. Octal para Decimal (Base 8 → Base 10)

**Método:**
Pesos das posições (da direita para a esquerda): 8^0=1, 8^1=8, 8^2=64, 8^3=512...

**Exercícios Resolvidos:**
* (621)₈ = **(401)₁₀**
  *(Cálculo: 1×1 + 2×8 + 6×64 = 1 + 16 + 384 = 401)*
* (732)₈ = **(474)₁₀**
  *(Cálculo: 2×1 + 3×8 + 7×64 = 2 + 24 + 448 = 474)*

---

### C. Hexadecimal para Decimal (Base 16 → Base 10)

**Método:**
Pesos das posições (da direita para a esquerda): 16^0=1, 16^1=16, 16^2=256, 16^3=4096...

> [!NOTE]
> **Caso do caractere "0" em palavras:** Em pegadinhas como "F0CA" (onde o zero faz papel de "O"), o dígito 0 vale matematicamente 0.

**Exercícios Resolvidos:**
* (3AC)₁₆ = **(940)₁₀**
  *(Cálculo: C×1 + A×16 + 3×256 → 12×1 + 10×16 + 3×256 = 12 + 160 + 768 = 940)*
* (F0CA)₁₆ = **(61642)₁₀**
  *(Cálculo: A×1 + C×16 + 0×256 + F×4096 → 10×1 + 12×16 + 0×256 + 15×4096 = 10 + 192 + 0 + 61440 = 61642)*

---

## 🔄 Método 3: Conversões Diretas entre Outras Bases (Agrupamento de Bits)

Como as bases 8 e 16 são potências de 2 (2^3 = 8 e 2^4 = 16), conseguimos converter entre elas e binário apenas agrupando ou expandindo bits.

### A. Binário ↔ Hexadecimal (Base 2 ↔ Base 16)
* **Regra:** Cada dígito hexadecimal equivale a um grupo de **4 bits** no binário.
* **Pesos do grupo de 4 bits:** 8-4-2-1.

**Exercícios Resolvidos:**
* (10010110)₂ → **(96)₁₆**
  *(Grupo da direita: 0110 = 4+2 = 6. Grupo da esquerda: 1001 = 8+1 = 9)*
* (4FB)₁₆ → **(10011111011)₂**
  *(4 = 0100; F = 1111; B = 1011. Juntando: 010011111011. Pode ocultar o primeiro zero)*

---

### B. Binário ↔ Octal (Base 2 ↔ Base 8)
* **Regra:** Cada dígito octal equivale a um grupo de **3 bits** no binário.
* **Pesos do grupo de 3 bits:** 4-2-1.
* *Nota:* Se sobrar bits incompletos na esquerda ao agrupar da direita para a esquerda, complete com zeros.

**Exercícios Resolvidos:**
* (01111110)₂ → **(176)₈**
  *(Grupos: 01 (vira 001) | 111 | 110 → 1 | 7 | 6)*
* (11110000)₂ → **(360)₈**
  *(Grupos: 11 (vira 011) | 110 | 000 → 3 | 6 | 0)*

---

### C. Octal ↔ Binário (Base 8 ↔ Base 2)
* **Regra:** Cada dígito octal vira um grupo de **3 bits** no binário.

**Exercícios Resolvidos:**
* (731)₈ → **(111011001)₂**
  *(7 = 111; 3 = 011; 1 = 001)*
* (624)₈ → **(110010100)₂**
  *(6 = 110; 2 = 010; 4 = 100)*