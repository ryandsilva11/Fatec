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
  - Exemplo: $n! = 3! = 1 \times 2 \times 3 = 6$ possibilidades
- [ ] **8. Teoria dos Grafos**
- [ ] **9. Criptografia**

---

## 🔢 1. Sistemas Numéricos e Conversão de Bases

### Definições das Bases
* **Decimal (Base 10):** Utiliza os algarismos de `0` a `9`.
* **Binário (Base 2):** Utiliza os algarismos `0` e `1`.
* **Octal (Base 8):** Utiliza os algarismos de `0` a `7`.
* **Hexadecimal (Base 16):** Utiliza os algarismos de `0` a `9` e as letras de `A` a `F` (onde $A=10, B=11, C=12, D=13, E=14, F=15$).

---

### 🔄 Conversão: Base 10 $\rightarrow$ Outras Bases

Para converter da base 10 para qualquer outra base, realizamos divisões sucessivas pela base de destino até que o quociente seja `0`.

> [!TIP]
> **Dica para Binários:** 
> * O último resto obtido é o bit mais significativo (**MSB** - Most Significant Bit).
> * O primeiro resto obtido é o bit menos significativo (**LSB** - Least Significant Bit).
> * Números **pares** sempre resultam em resto `0` na primeira divisão.
> * Números **ímpares** sempre resultam em resto `1` na primeira divisão.

#### A. Decimal para Binário (Base 10 $\rightarrow$ Base 2)

**Exemplo:** Conversão de $(147)_{10}$

| Divisão | Quociente | Resto | Posição |
| :---: | :---: | :---: | :---: |
| $147 \div 2$ | $73$ | **1** | LSB (Menor peso) |
| $73 \div 2$ | $36$ | **1** | |
| $36 \div 2$ | $18$ | **0** | |
| $18 \div 2$ | $9$ | **0** | |
| $9 \div 2$ | $4$ | **1** | |
| $4 \div 2$ | $2$ | **0** | |
| $2 \div 2$ | $1$ | **0** | |
| $1 \div 2$ | $0$ | **1** | MSB (Maior peso) |

Lendo os restos de baixo para cima, temos:
$$(147)_{10} = (10010011)_2$$

> [!NOTE]
> **Nota de Correção:** Nas anotações originais constava $(147)_{10} = (10010001)_2$ com a divisão $73 \div 2 = 36$ dando resto $0$. Corrigimos para resto $1$, resultando em $(10010011)_2$. Caso o número inicial fosse $(145)_{10}$, o resultado seria $(10010001)_2$.

**Exercício:**
* [ ] $(138)_{10} = (\quad\quad)_2$

---

#### B. Decimal para Octal (Base 10 $\rightarrow$ Base 8)

**Exemplo:** Conversão de $(147)_{10}$

| Divisão | Quociente | Resto |
| :---: | :---: | :---: |
| $147 \div 8$ | $18$ | **3** |
| $18 \div 8$ | $2$ | **2** |
| $2 \div 8$ | $0$ | **2** |

Lendo os restos de baixo para cima:
$$(147)_{10} = (223)_8$$

**Exercício:**
* [ ] $(138)_{10} = (\quad\quad)_8$

---

#### C. Decimal para Hexadecimal (Base 10 $\rightarrow$ Base 16)

**Exemplo:** Conversão de $(147)_{10}$

| Divisão | Quociente | Resto |
| :---: | :---: | :---: |
| $147 \div 16$ | $9$ | **3** |
| $9 \div 16$ | $0$ | **9** |

Lendo os restos de baixo para cima:
$$(147)_{10} = (93)_{16}$$

**Exercício:**
* [ ] $(138)_{10} = (\quad\quad)_{16}$

---

### 🔄 Conversão: Outras Bases $\rightarrow$ Base 10

Para converter qualquer base para a base 10, multiplicamos cada dígito pela base elevada à sua respectiva posição (começando do $0$, da direita para a esquerda).

#### A. Binário para Decimal (Base 2 $\rightarrow$ Base 10)
* [ ] $(00111001)_2 = (\quad\quad)_{10}$
* [ ] $(11000100)_2 = (\quad\quad)_{10}$

#### B. Octal para Decimal (Base 8 $\rightarrow$ Base 10)
* [ ] $(621)_8 = (\quad\quad)_{10}$
* [ ] $(732)_8 = (\quad\quad)_{10}$

#### C. Hexadecimal para Decimal (Base 16 $\rightarrow$ Base 10)
* [ ] $(3AC)_{16} = (\quad\quad)_{10}$
* [ ] $(FOCA)_{16} = (\quad\quad)_{10}$

---

### 🔄 Conversões Diretas entre Outras Bases

#### A. Binário $\leftrightarrow$ Hexadecimal (Base 2 $\leftrightarrow$ Base 16)
> *Cada dígito hexadecimal equivale a um grupo de 4 bits (dígitos binários).*

* [ ] $(10010110)_2 \rightarrow (\quad\quad)_{16}$
* [ ] $(4FB)_{16} \rightarrow (\quad\quad)_2$

#### B. Binário $\leftrightarrow$ Octal (Base 2 $\leftrightarrow$ Base 8)
> *Cada dígito octal equivale a um grupo de 3 bits (dígitos binários).*

* [ ] $(01111110)_2 \rightarrow (\quad\quad)_8$
* [ ] $(11110000)_2 \rightarrow (\quad\quad)_8$

#### C. Octal $\leftrightarrow$ Binário (Base 8 $\leftrightarrow$ Base 2)
* [ ] $(731)_8 \rightarrow (\quad\quad)_2$
* [ ] $(624)_8 \rightarrow (\quad\quad)_2$
