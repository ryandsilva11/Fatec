# 🔢 Conversão de Bases Numéricas

## 🔄 Decimal para Binário (Base 10 → Base 2)

* **Método:** Divida o número sucessivamente por 2 até o quociente ser 0. Leia os restos de baixo para cima.
* **Exemplo:** (147)₁₀ = (10010011)₂

  * 147 ÷ 2 = 73 (resto 1)
  * 73 ÷ 2 = 36 (resto 1)
  * 36 ÷ 2 = 18 (resto 0)
  * 18 ÷ 2 = 9 (resto 0)
  * 9 ÷ 2 = 4 (resto 1)
  * 4 ÷ 2 = 2 (resto 0)
  * 2 ÷ 2 = 1 (resto 0)
  * 1 ÷ 2 = 0 (resto 1)
* **Exercício:** (138)₁₀ = (10001010)₂

  * 138 ÷ 2 = 69 (resto 0)
  * 69 ÷ 2 = 34 (resto 1)
  * 34 ÷ 2 = 17 (resto 0)
  * 17 ÷ 2 = 8 (resto 1)
  * 8 ÷ 2 = 4 (resto 0)
  * 4 ÷ 2 = 2 (resto 0)
  * 2 ÷ 2 = 1 (resto 0)
  * 1 ÷ 2 = 0 (resto 1)

---

## 🔄 Decimal para Octal (Base 10 → Base 8)

* **Método:** Divida o número sucessivamente por 8 até o quociente ser 0. Leia os restos de baixo para cima.
* **Exemplo:** (147)₁₀ = (223)₈

  * 147 ÷ 8 = 18 (resto 3)
  * 18 ÷ 8 = 2 (resto 2)
  * 2 ÷ 8 = 0 (resto 2)
* **Exercício:** (138)₁₀ = (212)₈

  * 138 ÷ 8 = 17 (resto 2)
  * 17 ÷ 8 = 2 (resto 1)
  * 2 ÷ 8 = 0 (resto 2)

---

## 🔄 Decimal para Hexadecimal (Base 10 → Base 16)

* **Método:** Divida o número sucessivamente por 16 até o quociente ser 0. Leia os restos de baixo para cima. (Tabela: A=10, B=11, C=12, D=13, E=14, F=15).
* **Exemplo:** (147)₁₀ = (93)₁₆

  * 147 ÷ 16 = 9 (resto 3)
  * 9 ÷ 16 = 0 (resto 9)
* **Exercício:** (138)₁₀ = (8A)₁₆

  * 138 ÷ 16 = 8 (resto 10 → A)
  * 8 ÷ 16 = 0 (resto 8)

---

## 🔄 Binário para Decimal (Base 2 → Base 10)

* **Método:** Multiplique cada bit pelo peso de sua posição (potências de 2 da direita para a esquerda: 1, 2, 4, 8, 16, 32, 64, 128...) e some tudo.
* **Exercício 1:** (00111001)₂ = (57)₁₀

  * (1 × 32) + (1 × 16) + (1 × 8) + (1 × 1) = 32 + 16 + 8 + 1 = 57
* **Exercício 2:** (11000100)₂ = (196)₁₀

  * (1 × 128) + (1 × 64) + (1 × 4) = 128 + 64 + 4 = 196

---

## 🔄 Octal para Decimal (Base 8 → Base 10)

* **Método:** Multiplique cada dígito pelo peso de sua posição (potências de 8 da direita para a esquerda: 1, 8, 64...) e some tudo.
* **Exercício 1:** (621)₈ = (401)₁₀

  * (6 × 64) + (2 × 8) + (1 × 1) = 384 + 16 + 1 = 401
* **Exercício 2:** (732)₈ = (474)₁₀

  * (7 × 64) + (3 × 8) + (2 × 1) = 448 + 24 + 2 = 474

---

## 🔄 Hexadecimal para Decimal (Base 16 → Base 10)

* **Método:** Multiplique cada dígito pelo peso de sua posição (potências de 16 da direita para a esquerda: 1, 16, 256, 4096...) e some tudo. (Valores: A=10, B=11, C=12, D=13, E=14, F=15).
* **Exercício 1:** (3AC)₁₆ = (940)₁₀

  * (3 × 256) + (10 × 16) + (12 × 1) = 768 + 160 + 12 = 940
* **Exercício 2:** (F0CA)₁₆ = (61642)₁₀

  * (15 × 4096) + (0 × 256) + (12 × 16) + (10 × 1) = 61440 + 0 + 192 + 10 = 61642

---

## 🔄 Binário para Hexadecimal (Base 2 → Base 16)

* **Método:** Separe o binário em blocos de 4 bits da direita para a esquerda. Converta cada bloco em um dígito usando a tabela 8-4-2-1.
* **Exercício:** (10010110)₂ → (96)₁₆

  * 1001 = 9
  * 0110 = 6

---

## 🔄 Hexadecimal para Binário (Base 16 → Base 2)

* **Método:** Converta cada dígito hexadecimal em um grupo de 4 bits usando a tabela 8-4-2-1.
* **Exercício:** (4FB)₁₆ → (10011111011)₂

  * 4 = 0100
  * F = 1111
  * B = 1011

---

## 🔄 Binário para Octal (Base 2 → Base 8)

* **Método:** Separe o binário em blocos de 3 bits da direita para a esquerda (complete com zero na esquerda se faltar). Converta cada bloco em um dígito usando a tabela 4-2-1.
* **Exercício 1:** (01111110)₂ → (176)₈

  * 01 (vira 001) = 1
  * 111 = 7
  * 110 = 6
* **Exercício 2:** (11110000)₂ → (360)₈

  * 11 (vira 011) = 3
  * 110 = 6
  * 000 = 0

---

## 🔄 Octal para Binário (Base 8 → Base 2)

* **Método:** Converta cada dígito octal em um grupo de 3 bits usando a tabela 4-2-1.
* **Exercício 1:** (731)₈ → (111011001)₂

  * 7 = 111
  * 3 = 011
  * 1 = 001
* **Exercício 2:** (624)₈ → (110010100)₂

  * 6 = 110
  * 2 = 010
  * 4 = 100
