# 📘 Matemática Computacional — Anotações de Aula

Este arquivo contém as anotações e exercícios resolvidos de Matemática Computacional sobre **Sistemas Numéricos e Conversões de Base**.

---

## 🗺️ Conteúdo Programático do Semestre

- [x] **1. Sistemas Numéricos e Conversões**
- [ ] **2. Teoria dos Conjuntos**
- [ ] **3. Matrizes**
- [ ] **4. Funções**
- [ ] **5. Recursividade**
- [ ] **6. Complexidade de Algoritmos**
- [ ] **7. Análise Combinatória**
- [ ] **8. Teoria dos Grafos**
- [ ] **9. Criptografia**

---

## 🔢 1. Sistemas Numéricos e Conversão de Bases

### Definições das Bases
* **Decimal (Base 10):** Algarismos de 0 a 9.
* **Binário (Base 2):** Algarismos 0 e 1.
* **Octal (Base 8):** Algarismos de 0 a 7.
* **Hexadecimal (Base 16):** Algarismos de 0 a 9 e letras de A a F (A=10, B=11, C=12, D=13, E=14, F=15).

---

### 🔄 Conversão: Base 10 → Outras Bases
* **Método:** Divida o número decimal sucessivamente pela base de destino até que o quociente seja 0. Leia os restos de **baixo para cima**.

#### A. Decimal para Binário (Base 10 → Base 2)
* **Exemplo:** (147)₁₀ = **(10010011)₂**
  * 147 ÷ 2 = 73 (resto 1)
  * 73 ÷ 2 = 36 (resto 1)
  * 36 ÷ 2 = 18 (resto 0)
  * 18 ÷ 2 = 9 (resto 0)
  * 9 ÷ 2 = 4 (resto 1)
  * 4 ÷ 2 = 2 (resto 0)
  * 2 ÷ 2 = 1 (resto 0)
  * 1 ÷ 2 = 0 (resto 1)
* **Exercício:** (138)₁₀ = **(10001010)₂**
  * 138 ÷ 2 = 69 (resto 0)
  * 69 ÷ 2 = 34 (resto 1)
  * 34 ÷ 2 = 17 (resto 0)
  * 17 ÷ 2 = 8 (resto 1)
  * 8 ÷ 2 = 4 (resto 0)
  * 4 ÷ 2 = 2 (resto 0)
  * 2 ÷ 2 = 1 (resto 0)
  * 1 ÷ 2 = 0 (resto 1)

#### B. Decimal para Octal (Base 10 → Base 8)
* **Exemplo:** (147)₁₀ = **(223)₈**
  * 147 ÷ 8 = 18 (resto 3)
  * 18 ÷ 8 = 2 (resto 2)
  * 2 ÷ 8 = 0 (resto 2)
* **Exercício:** (138)₁₀ = **(212)₈**
  * 138 ÷ 8 = 17 (resto 2)
  * 17 ÷ 8 = 2 (resto 1)
  * 2 ÷ 8 = 0 (resto 2)

#### C. Decimal para Hexadecimal (Base 10 → Base 16)
* **Exemplo:** (147)₁₀ = **(93)₁₆**
  * 147 ÷ 16 = 9 (resto 3)
  * 9 ÷ 16 = 0 (resto 9)
* **Exercício:** (138)₁₀ = **(8A)₁₆**
  * 138 ÷ 16 = 8 (resto 10 → A)
  * 8 ÷ 16 = 0 (resto 8)

---

### 🔄 Conversão: Outras Bases → Base 10
* **Método:** Multiplique cada dígito pela base elevada à sua posição (começando por 0 na direita) e some tudo. Lembre-se: base^0 = 1.

#### A. Binário para Decimal (Base 2 → Base 10)
* **Exercício 1:** (00111001)₂ = **(57)₁₀**
  * (1 × 2^0) + (0 × 2^1) + (0 × 2^2) + (1 × 2^3) + (1 × 2^4) + (1 × 2^5) = 1 + 0 + 0 + 8 + 16 + 32 = 57
* **Exercício 2:** (11000100)₂ = **(196)₁₀**
  * (1 × 128) + (1 × 64) + (0 × 32) + (0 × 16) + (0 × 8) + (1 × 4) + (0 × 2) + (0 × 1) = 128 + 64 + 4 = 196

#### B. Octal para Decimal (Base 8 → Base 10)
* **Exercício 1:** (621)₈ = **(401)₁₀**
  * (6 × 8^2) + (2 × 8^1) + (1 × 8^0) = (6 × 64) + (2 × 8) + (1 × 1) = 384 + 16 + 1 = 401
* **Exercício 2:** (732)₈ = **(474)₁₀**
  * (7 × 8^2) + (3 × 8^1) + (2 × 8^0) = (7 × 64) + (3 × 8) + (2 × 1) = 448 + 24 + 2 = 474

#### C. Hexadecimal para Decimal (Base 16 → Base 10)
* **Exercício 1:** (3AC)₁₆ = **(940)₁₀**
  * (3 × 16^2) + (A × 16^1) + (C × 16^0) = (3 × 256) + (10 × 16) + (12 × 1) = 768 + 160 + 12 = 940
* **Exercício 2:** (F0CA)₁₆ = **(61642)₁₀** *(Nota: a letra O no exercício original é na verdade o número 0)*
  * (F × 16^3) + (0 × 16^2) + (C × 16^1) + (A × 16^0) = (15 × 4096) + 0 + (12 × 16) + (10 × 1) = 61440 + 0 + 192 + 10 = 61642

---

### 🔄 Conversões Diretas entre Outras Bases

#### A. Binário ↔ Hexadecimal (Base 2 ↔ Base 16)
* **Método:** Cada dígito hexadecimal equivale a 4 bits. Use os pesos 8-4-2-1 para converter os blocos de 4 bits (da direita para a esquerda).
* **Exercício 1 (Bin → Hex):** (10010110)₂ → **(96)₁₆**
  * 1001 = 9  |  0110 = 6
* **Exercício 2 (Hex → Bin):** (4FB)₁₆ → **(10011111011)₂**
  * 4 = 0100  |  F = 1111  |  B = 1011  → 010011111011 (omite primeiro zero)

#### B. Binário ↔ Octal (Base 2 ↔ Base 8)
* **Método:** Cada dígito octal equivale a 3 bits. Use os pesos 4-2-1 para converter os blocos de 3 bits (complete com zeros à esquerda se faltar).
* **Exercício 1 (Bin → Oct):** (01111110)₂ → **(176)₈**
  * 01 (vira 001) = 1  |  111 = 7  |  110 = 6
* **Exercício 2 (Bin → Oct):** (11110000)₂ → **(360)₈**
  * 11 (vira 011) = 3  |  110 = 6  |  000 = 0

#### C. Octal ↔ Binário (Base 8 ↔ Base 2)
* **Método:** Cada dígito octal equivale a 3 bits. Use os pesos 4-2-1 para expandir cada dígito em 3 bits.
* **Exercício 1 (Oct → Bin):** (731)₈ → **(111011001)₂**
  * 7 = 111  |  3 = 011  |  1 = 001
* **Exercício 2 (Oct → Bin):** (624)₈ → **(110010100)₂**
  * 6 = 110  |  2 = 010  |  4 = 100