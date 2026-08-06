# 📘 Matemática Computacional — Anotações de Aula

Este arquivo contém as anotações e exercícios da aula de Matemática Computacional sobre **Sistemas Numéricos e Conversões de Base**.

---

## 🗺️ Conteúdo Programático

- [ ] **1. Sistemas Numéricos**
  - Decimal, Binário, Octal e Hexadecimal
  - Operações em Binário
- [ ] **2. Teoria dos Conjuntos**
- [ ] **3. Matrizes**
  - Operações, Determinantes e Sistemas Lineares
- [ ] **4. Funções**
- [ ] **5. Recursividade**
  - Fatorial e Sequência de Fibonacci
- [ ] **6. Complexidade de Algoritmos**
- [ ] **7. Análise Combinatória**
  - Exemplo: n! = 3! = 1 × 2 × 3 = 6 possibilidades
- [ ] **8. Teoria dos Grafos**
- [ ] **9. Criptografia**

---

## 🔢 1. Sistemas Numéricos e Conversão de Bases

### Definições das Bases
* **Decimal (Base 10):** Utiliza os algarismos de `0` a `9`.
* **Binário (Base 2):** Utiliza os algarismos `0` e `1`.
* **Octal (Base 8):** Utiliza os algarismos de `0` a `7`.
* **Hexadecimal (Base 16):** Utiliza os algarismos de `0` a `9` e as letras de `A` a `F` (onde A = 10, B = 11, C = 12, D = 13, E = 14, F = 15).

---

### 🔄 Conversão: Base 10 → Outras Bases

Para converter da base 10 para qualquer outra base, realizamos divisões sucessivas pela base de destino até que o quociente seja `0`.

> [!TIP]
> **Dica para Binários:** 
> * O último resto obtido é o bit mais significativo (**MSB** - Most Significant Bit).
> * O primeiro resto obtido é o bit menos significativo (**LSB** - Least Significant Bit).
> * Números **pares** sempre resultam em resto `0` na primeira divisão.
> * Números **ímpares** sempre resultam em resto `1` na primeira divisão.

#### A. Decimal para Binário (Base 10 → Base 2)

**Exemplo:** Conversão de (147)₁₀

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

Lendo os restos de baixo para cima, temos:
**(147)₁₀ = (10010011)₂**

> [!NOTE]
> **Nota de Correção:** Nas anotações originais constava (147)₁₀ = (10010001)₂ com a divisão 73 ÷ 2 = 36 dando resto 0. Corrigimos para resto 1, resultando em (10010011)₂. Caso o número inicial fosse (145)₁₀, o resultado seria (10010001)₂.

**Exercício:**
* [ ] (138)₁₀ = ( )₂

---

#### B. Decimal para Octal (Base 10 → Base 8)

**Exemplo:** Conversão de (147)₁₀

| Divisão | Quociente | Resto |
| :---: | :---: | :---: |
| 147 ÷ 8 | 18 | **3** |
| 18 ÷ 8 | 2 | **2** |
| 2 ÷ 8 | 0 | **2** |

Lendo os restos de baixo para cima:
**(147)₁₀ = (223)₈**

**Exercício:**
* [ ] (138)₁₀ = ( )₈

---

#### C. Decimal para Hexadecimal (Base 10 → Base 16)

**Exemplo:** Conversão de (147)₁₀

| Divisão | Quociente | Resto |
| :---: | :---: | :---: |
| 147 ÷ 16 | 9 | **3** |
| 9 ÷ 16 | 0 | **9** |

Lendo os restos de baixo para cima:
**(147)₁₀ = (93)₁₆**

**Exercício:**
* [ ] (138)₁₀ = ( )₁₆

---

### 🔄 Conversão: Outras Bases → Base 10

Para converter qualquer base para a base 10, multiplicamos cada dígito pela base elevada à sua respectiva posição (começando do 0, da direita para a esquerda).

#### A. Binário para Decimal (Base 2 → Base 10)
* [ ] (00111001)₂ = ( )₁₀
* [ ] (11000100)₂ = ( )₁₀

#### B. Octal para Decimal (Base 8 → Base 10)
* [ ] (621)₈ = ( )₁₀
* [ ] (732)₈ = ( )₁₀

#### C. Hexadecimal para Decimal (Base 16 → Base 10)
* [ ] (3AC)₁₆ = ( )₁₀
* [ ] (FOCA)₁₆ = ( )₁₀

---

### 🔄 Conversões Diretas entre Outras Bases

#### A. Binário ↔ Hexadecimal (Base 2 ↔ Base 16)
> *Cada dígito hexadecimal equivale a um grupo de 4 bits (dígitos binários).*

* [ ] (10010110)₂ → ( )₁₆
* [ ] (4FB)₁₆ → ( )₂

#### B. Binário ↔ Octal (Base 2 ↔ Base 8)
> *Cada dígito octal equivale a um grupo de 3 bits (dígitos binários).*

* [ ] (01111110)₂ → ( )₈
* [ ] (11110000)₂ → ( )₈

#### C. Octal ↔ Binário (Base 8 ↔ Base 2)
* [ ] (731)₈ → ( )₂
* [ ] (624)₈ → ( )₂