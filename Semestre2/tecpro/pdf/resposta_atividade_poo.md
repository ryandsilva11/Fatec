# Atividade Prática: Conceitos de POO e Boas Práticas

**Disciplina:** Técnicas de Programação I  
**Instituição:** Fatec Indaiatuba — Curso DSM  
**Aluno:** Ryan Dias da Silva  
**Data:** Agosto de 2026  

---

## Cenário Escolhido: Mini Sistema de Batalha Pokémon (Jogador vs. CPU)

### **Descrição Geral do Cenário**
O sistema gerencia uma batalha Pokémon interativa por turnos entre o Jogador e a CPU:
- **Seleção de Pokémon:** O jogador batalha utilizando **Squirtle** (Tipo Água) contra o Pokémon da CPU, **Charmander** (Tipo Fogo).
- **Ações de Turno:** Em cada turno, os Pokémons utilizam seus ataques para causar dano, ou utilizam itens como a **Poção de Vida** para recuperar pontos de vida. A batalha avança passo a passo conforme o usuário pressiona a tecla `Enter`.
- **Fim de Batalha:** A partida encerra automaticamente quando o HP de um dos Pokémon atinge 0, declarando o vencedor.

---

## Parte 1: Identificação de Conceitos de POO

### **1. Quais seriam as Classes deste sistema?**

As classes representam os "moldes" ou "plantas" das entidades do sistema:

* **`Pokemon` (Classe Base):** Define a estrutura e os comportamentos genéricos de qualquer Pokémon (`nome`, `tipo`, `_hp_maximo`, `_hp`, `ataque`, `receber_dano()`, `curar_hp()`, `atacar()`).
* **`PokemonAgua` e `PokemonFogo` (Subclasses Elementais):** Classes especializadas que herdam da classe `Pokemon` e definem automaticamente o tipo elemental correspondente.
* **`Item` (Classe Abstrata Base):** Define o contrato e a estrutura genérica de qualquer item (`nome`, `aplicar_efeito()`).
* **`Pocao` (Subclasse de Item):** Subclasse especializada que herda de `Item` e implementa a ação concreta de recuperação de vida (HP).
* **`Ataque`:** Representa a estrutura de um golpe (`nome`, `poder`, `tipo`).

#### **Exemplo de Código (Classes):**
```python
# Classe Base (Pokemon) em pokemon.py
class Pokemon:
    def __init__(self, nome: str, tipo: str, hp_maximo: int, ataque: Ataque):
        self.nome = nome
        self.tipo = tipo
        self.ataque = ataque
        self._hp_maximo = hp_maximo
        self._hp = hp_maximo

# Subclasse (PokemonAgua) em pokemon_agua.py
class PokemonAgua(Pokemon):
    def __init__(self, nome: str, hp_maximo: int, ataque: Ataque):
        super().__init__(nome, "Água", hp_maximo, ataque)
```

---

### **2. Identifique os Objetos citados no texto do cenário.**

Os objetos são as instâncias concretas criadas a partir das classes durante a execução do programa:

* **Objetos de Pokémon:**
  * `squirtle`: Instância concreta da classe `PokemonAgua` (HP: 100).
  * `charmander`: Instância concreta da classe `PokemonFogo` (HP: 80).
* **Objeto de Item:**
  * `pocao`: Instância concreta da classe `Pocao` (Recupera +30 HP).
* **Objetos de Ataque:**
  * `Jato d'Água`: Instância da classe `Ataque` (Poder: 40, Tipo: Água).
  * `Lança-Chamas`: Instância da classe `Ataque` (Poder: 25, Tipo: Fogo).

#### **Exemplo de Código (Instanciação de Objetos em `batalhaPkmn.py`):**
```python
# Criação dos objetos reais para a batalha
squirtle = PokemonAgua("Squirtle", 100, Ataque("Jato d'Água", 40, "Água"))
charmander = PokemonFogo("Charmander", 80, Ataque("Lança-Chamas", 25, "Fogo"))
pocao = Pocao(cura=30)
```

---

### **3. Onde está ocorrendo a Herança?**

A Herança é o mecanismo onde uma classe filha herda atributos e métodos de uma classe pai. No sistema ela ocorre em duas hierarquias:

1. **Hierarquia de Pokémon:** `PokemonAgua` e `PokemonFogo` herdam da classe pai `Pokemon`. Elas reutilizam o construtor e todos os métodos de combate da classe pai (`receber_dano`, `curar_hp`, `atacar`), repassando apenas o tipo específico.
2. **Hierarquia de Itens:** A classe `Pocao` herda da classe pai abstrata `Item`, reaproveitando o atributo `nome` e implementando a sua própria regra de efeito.

#### **Exemplo de Código (Herança com `super()`):**
```python
# Herança na classe PokemonFogo (pokemon_fogo.py)
class PokemonFogo(Pokemon):
    def __init__(self, nome: str, hp_maximo: int, ataque: Ataque):
        super().__init__(nome, "Fogo", hp_maximo, ataque) # Chama o construtor pai

# Herança na classe Pocao (pocao.py)
class Pocao(Item):
    def __init__(self, cura: int = 20):
        super().__init__("Poção de Vida") # Chama o construtor da classe base Item
        self.cura = cura
```

---

### **4. Onde está ocorrendo o Polimorfismo?**

O Polimorfismo ocorre quando um mesmo método pode apresentar comportamentos diferentes dependendo do objeto que o executa:

* A classe abstrata `Item` declara a assinatura do método abstrato `@abstractmethod def aplicar_efeito(self, pokemon: Pokemon)`.
* A subclasse `Pocao` sobrescreve este método implementando o efeito específico de recuperar os pontos de vida do Pokémon. Quando o jogo executa `pocao.aplicar_efeito(charmander)`, o comportamento disparado é a lógica de cura da `Pocao`.

#### **Exemplo de Código (Polimorfismo):**
```python
# Contrato Abstrato em item.py
class Item(ABC):
    @abstractmethod
    def aplicar_efeito(self, pokemon: Pokemon) -> str:
        pass

# Implementação Polimórfica em pocao.py
class Pocao(Item):
    def aplicar_efeito(self, pokemon: Pokemon) -> str:
        recuperado = pokemon.curar_hp(self.cura)
        return f"[ITEM] {self.nome} usada em {pokemon.nome}! Recuperou {recuperado} HP."
```

---

### **5. Como o Encapsulamento foi applied neste cenário?**

O Encapsulamento consiste em proteger os dados sensíveis dos objetos contra alterações diretas e indevidas, controlando o acesso através de métodos validadores:

1. **Atributos Protegidos:** Os atributos `_hp` e `_hp_maximo` possuem um underline à esquerda (`_`), indicando que não devem ser alterados diretamente por arquivos externos.
2. **Propriedades (Getters Seguros):** O método `@property def hp` permite consultar o valor atual do HP sem permitir alteração direta (`pokemon.hp = -50` gera erro).
3. **Trava de Regras de Negócio em Métodos:**
   * `receber_dano()`: Garante que o HP não fique menor que 0 (`dano_real = min(self._hp, quantidade)`).
   * `curar_hp()`: Garante que a cura nunca faça o HP ultrapassar o valor definido em `_hp_maximo`.

#### **Exemplo de Código (Encapsulamento em `pokemon.py`):**
```python
class Pokemon:
    def __init__(self, nome: str, tipo: str, hp_maximo: int, ataque: Ataque):
        self._hp_maximo = hp_maximo
        self._hp = hp_maximo  # Atributo protegido

    @property
    def hp(self) -> int:
        return self._hp  # Leitura segura (Getter)

    def curar_hp(self, quantidade: int) -> int:
        hp_antigo = self._hp
        # Validação: Garante que não ultrapassa o HP máximo
        self._hp = min(self._hp_maximo, self._hp + quantidade)
        return self._hp - hp_antigo
```

---

## Parte 2: Boas Práticas de Programação (Estrutura do Projeto)

A solução foi desenvolvida de forma limpa, modular e altamente didática na linguagem **Python**, mantendo 1 classe por arquivo:

* [`ataque.py`](file:///c:/Users/ryand/Desktop/Fatec/Semestre2/tecpro/ataque.py) — Classe `Ataque` (`nome`, `poder`, `tipo`)
* [`pokemon.py`](file:///c:/Users/ryand/Desktop/Fatec/Semestre2/tecpro/pokemon.py) — Classe base `Pokemon` (Encapsulamento de `_hp`)
* [`pokemon_agua.py`](file:///c:/Users/ryand/Desktop/Fatec/Semestre2/tecpro/pokemon_agua.py) — Subclasse `PokemonAgua` (Herança)
* [`pokemon_fogo.py`](file:///c:/Users/ryand/Desktop/Fatec/Semestre2/tecpro/pokemon_fogo.py) — Subclasse `PokemonFogo` (Herança)
* [`item.py`](file:///c:/Users/ryand/Desktop/Fatec/Semestre2/tecpro/item.py) — Classe abstrata base `Item` (Abstração com `ABC`)
* [`pocao.py`](file:///c:/Users/ryand/Desktop/Fatec/Semestre2/tecpro/pocao.py) — Subclasse `Pocao` (Herança + Polimorfismo)
* [`batalhaPkmn.py`](file:///c:/Users/ryand/Desktop/Fatec/Semestre2/tecpro/batalhaPkmn.py) — Módulo de execução interativa da batalha por turnos
