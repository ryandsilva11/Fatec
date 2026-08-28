# Atividade Prática: Conceitos de POO e Boas Práticas

**Disciplina:** Técnicas de Programação I  
**Instituição:** Fatec Indaiatuba — Curso DSM  
**Aluno:** Ryan Dias da Silva  
**Data:** Agosto de 2026  

---

## Cenário Escolhido: Mini Sistema de Batalha Pokémon (Jogador vs. CPU)

### **Descrição Geral do Cenário**
O sistema gerencia uma batalha Pokémon por turnos entre o Jogador e a CPU:
- **Seleção de Pokémon:** O jogador escolhe 1 entre 3 opções de Pokémon disponíveis: **Cloyster** (Tipo Água), **Onix** (Tipo Pedra) ou **Pidgeot** (Tipo Voador). A CPU seleciona aleatoriamente 1 entre outras 3 opções: **Wailmer** (Tipo Água), **Rayquaza** (Tipo Dragão) ou **Linoone** (Tipo Normal).
- **Ações de Turno:** Em cada turno, o treinador pode escolher entre **Atacar** (selecionando 1 de 4 golpes disponíveis) ou **Usar Item** do inventário (composto por 5 Poções de +20 HP e 5 Curas de Status).
- **Lógica de Combate da CPU:** A CPU executa sua jogada através de uma lógica de tomada de decisão inteligente (verificando seu HP percentual para usar poção apenas quando necessário e checando alteração de status antes de usar item de cura, evitando desperdício).
- **Fim de Batalha:** A partida encerra quando o HP de um dos Pokémon atinge 0.

---

## Parte 1: Identificação de Conceitos de POO

### **1. Quais seriam as Classes deste sistema?**

* **`Pokemon` (Classe Base):** Define a estrutura e o comportamento genérico de qualquer Pokémon (`nome`, `tipo`, `hp_maximo`, `hp`, `status`, `ataques`, `receber_dano()`, `restaurar_hp()`, `atacar()`).
* **Subclasses Elementais (`PokemonAgua`, `PokemonPedra`, `PokemonVoador`, `PokemonDragao`, `PokemonNormal`):** Classes especializadas que herdam da classe `Pokemon` representando os tipos elementais específicos dos Pokémon.
* **`Item` (Classe Abstrata Base):** Define a estrutura genérica de qualquer item de batalha (`nome`, `quantidade`, `aplicar_efeito()`).
* **`PocaoHP` e `CuraStatus` (Classes Especializadas de Item):** Subclasses que herdam de `Item` e implementam os efeitos concretos de recuperação de vida e remoção de alterações de status.
* **`Ataque`:** Representa a estrutura de um golpe (`nome`, `poder`, `tipo`).
* **`GerenciadorBatalha`:** Classe responsável por controlar o fluxo de turnos, os inventários dos treinadores e a lógica de decisão da CPU.

---

### **2. Identifique os Objetos citados no texto do cenário.**

* **Opções de Objetos do Jogador (Instâncias de Pokémon):**
  * `cloyster_jogador` (Instância de `PokemonAgua`)
  * `onix_jogador` (Instância de `PokemonPedra`)
  * `pidgeot_jogador` (Instância de `PokemonVoador`)
* **Opções de Objetos da CPU (Instâncias de Pokémon):**
  * `wailmer_cpu` (Instância de `PokemonAgua`)
  * `rayquaza_cpu` (Instância de `PokemonDragao`)
  * `linoone_cpu` (Instância de `PokemonNormal`)
* **Objetos de Itens (Instâncias de Item):**
  * `pocao_vida` (Instância de `PocaoHP`, recupera +20 HP)
  * `cura_status` (Instância de `CuraStatus`, cura alterações de status)
* **Objetos de Ataque (Instâncias de Ataque):**
  * ex: `ray_de_gelo`, `tumba_de_pedra`, `vento_ventania`, `ascensao_do_dragao` (Instâncias de `Ataque`).

---

### **3. Onde está ocorrendo a Herança?**

A Herança ocorre em duas hierarquias distintas no sistema:

1. **Hierarquia de Pokémon:**
   * `PokemonAgua`, `PokemonPedra`, `PokemonVoador`, `PokemonDragao` e `PokemonNormal` **herdam da classe pai `Pokemon`**.
   * Elas reaproveitam todos os atributos (`_hp`, `_status`, etc.) e métodos (`receber_dano()`, `atacar()`) da classe pai, definindo automaticamente o tipo elemental correspondente.

2. **Hierarquia de Itens:**
   * `PocaoHP` e `CuraStatus` **herdam da classe abstrata pai `Item`**.
   * Elas reaproveitam a estrutura base de nome e quantidade (`_nome`, `_quantidade`), especializando a ação através do método de efeito.

---

### **4. Onde está ocorrendo o Polimorfismo?**

O Polimorfismo manifesta-se no método **`aplicar_efeito(pokemon)`** definido na classe abstrata `Item`:

* Quando a ação `item.aplicar_efeito(pokemon)` é chamada para um objeto do tipo **`PocaoHP`**, a implementação recupera +20 pontos de HP do Pokémon (respeitando a trava do HP máximo).
* Quando a mesma ação `item.aplicar_efeito(pokemon)` é chamada para um objeto do tipo **`CuraStatus`**, a implementação limpa a alteração de status do Pokémon, restaurando-o para `"Normal"`.

> *Mesmo método com a mesma assinatura (`aplicar_efeito`), gerando comportamentos totalmente diferentes dependendo do tipo do objeto executado.*

---

### **5. Como o Encapsulamento foi aplicado neste cenário?**

O Encapsulamento foi aplicado através da proteção rigorosa dos dados internos dos Pokémon e dos Itens:

1. **Proteção de Atributos:**
   * Os atributos críticos `_hp`, `_hp_maximo` e `_status` são marcados como protegidos (`_`).
   * A leitura externa dos dados é feita através de propriedades/getters seguros (`@property def hp`, `@property def status`).

2. **Trava de Regras de Negócio em Métodos Validadores:**
   * **`receber_dano(quantidade)`:** Utiliza a lógica `dano_real = min(self._hp, quantidade)`, impedindo que o HP de um Pokémon fique negativo (menor que 0).
   * **`restaurar_hp(quantidade)`:** Garante que o HP recuperado nunca ultrapasse o valor definido em `_hp_maximo`.
   * Dessa forma, nenhuma classe externa consegue "forçar" um valor inválido de vida ou alterar o status sem passar pelas validações internas do próprio objeto.

---

## Parte 2: Boas Práticas de Programação (Implementação em Código)

A solução foi estruturada de forma limpa e modularizada na linguagem **Python**, separando as responsabilidades em arquivos individuais:

* [`item.py`](file:///c:/Users/ryand/Desktop/Fatec/Semestre2/tecpro/item.py) — Classe abstrata base `Item`
* [`pocao_hp.py`](file:///c:/Users/ryand/Desktop/Fatec/Semestre2/tecpro/pocao_hp.py) — Subclasse `PocaoHP` (Polimorfismo)
* [`cura_status.py`](file:///c:/Users/ryand/Desktop/Fatec/Semestre2/tecpro/cura_status.py) — Subclasse `CuraStatus` (Polimorfismo)
* [`ataque.py`](file:///c:/Users/ryand/Desktop/Fatec/Semestre2/tecpro/ataque.py) — Classe `Ataque`
* [`pokemon.py`](file:///c:/Users/ryand/Desktop/Fatec/Semestre2/tecpro/pokemon.py) — Classe base `Pokemon` (Encapsulamento de HP/status)
* [`pokemon_agua.py`](file:///c:/Users/ryand/Desktop/Fatec/Semestre2/tecpro/pokemon_agua.py), [`pokemon_pedra.py`](file:///c:/Users/ryand/Desktop/Fatec/Semestre2/tecpro/pokemon_pedra.py), [`pokemon_voador.py`](file:///c:/Users/ryand/Desktop/Fatec/Semestre2/tecpro/pokemon_voador.py), [`pokemon_dragao.py`](file:///c:/Users/ryand/Desktop/Fatec/Semestre2/tecpro/pokemon_dragao.py), [`pokemon_normal.py`](file:///c:/Users/ryand/Desktop/Fatec/Semestre2/tecpro/pokemon_normal.py) — Subclasses de Pokémon (Herança)
* [`gerenciador_batalha.py`](file:///c:/Users/ryand/Desktop/Fatec/Semestre2/tecpro/gerenciador_batalha.py) — Controle de fluxo e Lógica de Decisão da CPU
* [`batalhaPkmn.py`](file:///c:/Users/ryand/Desktop/Fatec/Semestre2/tecpro/batalhaPkmn.py) — Script demonstrativo de execução no terminal
