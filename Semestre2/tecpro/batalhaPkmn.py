"""
Atividade Prática de POO - Técnicas de Programação I
Aluno: Ryan Dias da Silva
Cenário: Mini Sistema de Batalha Pokémon (Demonstração dos Conceitos de POO)
Módulo Principal de Execução

Opções do Player: Cloyster (Água), Onix (Pedra), Pidgeot (Voador)
Opções da CPU: Wailmer (Água), Rayquaza (Dragão), Linoone (Normal) - Escolha Aleatória

Conceitos Demonstrados:
1. Encapsulamento: Atributos privados/protegidos (_hp, _status) acessados/modificados 
   apenas por métodos com validação (getters, setters e métodos de ação).
2. Herança: Subclasses de Item (PocaoHP, CuraStatus) e Subclasses de Pokemon (PokemonAgua, PokemonPedra, PokemonVoador, PokemonDragao, PokemonNormal).
3. Polimorfismo: O método 'aplicar_efeito' na hierarquia de Item possui comportamentos 
   diferentes para cada tipo de item.
4. Lógica de Combate CPU: Estrutura de decisão simulada para o oponente escolher ações estrategicamente.
"""

import random
from ataque import Ataque
from pokemon_agua import PokemonAgua
from pokemon_pedra import PokemonPedra
from pokemon_voador import PokemonVoador
from pokemon_dragao import PokemonDragao
from pokemon_normal import PokemonNormal
from gerenciador_batalha import GerenciadorBatalha


def criar_opcoes_pokemon():
    """Cria e retorna os dicionários com as opções de Pokémon do Jogador e da CPU."""
    
    # 1. Opções do Jogador (Cloyster, Onix, Pidgeot)
    opcoes_jogador = {
        "1": PokemonAgua("Cloyster", 100, [
            Ataque("Raio de Gelo", 35, "Gelo"),
            Ataque("Jato d'Água", 25, "Água"),
            Ataque("Quebra-Concha", 20, "Normal"),
            Ataque("Espinho", 15, "Normal")
        ]),
        "2": PokemonPedra("Onix", 110, [
            Ataque("Tumba de Pedra", 30, "Pedra"),
            Ataque("Investida", 15, "Normal"),
            Ataque("Terremoto", 40, "Terra"),
            Ataque("Cauda de Ferro", 25, "Aço")
        ]),
        "3": PokemonVoador("Pidgeot", 95, [
            Ataque("Vento Ventania", 30, "Voador"),
            Ataque("Ataque de Asa", 25, "Voador"),
            Ataque("Ataque Rápido", 15, "Normal"),
            Ataque("Vendaval", 35, "Voador")
        ])
    }

    # 2. Opções da CPU (Wailmer, Rayquaza, Linoone)
    opcoes_cpu = [
        PokemonAgua("Wailmer", 120, [
            Ataque("Jato d'Água", 25, "Água"),
            Ataque("Pulsão d'Água", 30, "Água"),
            Ataque("Golpe de Corpo", 20, "Normal"),
            Ataque("Surfe", 35, "Água")
        ]),
        PokemonDragao("Rayquaza", 130, [
            Ataque("Pulso do Dragão", 40, "Dragão"),
            Ataque("Ascensão do Dragão", 45, "Voador"),
            Ataque("Velocidade Extrema", 30, "Normal"),
            Ataque("Hiper-Raio", 50, "Normal")
        ]),
        PokemonNormal("Linoone", 90, [
            Ataque("Garra de Raciocínio", 25, "Normal"),
            Ataque("Investida", 15, "Normal"),
            Ataque("Cabeçada", 20, "Normal"),
            Ataque("Corte", 30, "Normal")
        ])
    ]

    return opcoes_jogador, opcoes_cpu


def demonstrar_batalha():
    print("=" * 65)
    print("   DEMONSTRAÇÃO DE CONCEITOS DE POO - SISTEMA DE BATALHA POKÉMON")
    print("=" * 65)

    opcoes_jogador, opcoes_cpu = criar_opcoes_pokemon()

    # Escolha do Jogador (simulada escolhendo a opção 1: Cloyster)
    jogador_pkmn = opcoes_jogador["1"]  # Cloyster (Água)

    # Escolha da CPU (Seleção Aleatória entre Wailmer, Rayquaza e Linoone)
    cpu_pkmn = random.choice(opcoes_cpu)

    batalha = GerenciadorBatalha(jogador_pkmn, cpu_pkmn)

    print(f"\n[INÍCIO DE BATALHA] Jogador: {jogador_pkmn.nome} ({jogador_pkmn.tipo}) VS CPU: {cpu_pkmn.nome} ({cpu_pkmn.tipo})\n")

    # Turno 1: Jogador Ataca (Demonstração de métodos e mensagens de combate)
    print("--- TURNO 1 (Jogador) ---")
    ataque_jogador = jogador_pkmn.ataques[0]
    resultado_ataque = jogador_pkmn.atacar(cpu_pkmn, ataque_jogador)
    print(resultado_ataque)

    # Turno 1: CPU responde via Lógica de Combate
    print("\n--- TURNO 1 (CPU - Lógica de Decisão) ---")
    resultado_cpu = batalha.executar_logica_combate_cpu()
    print(resultado_cpu)

    # Turno 2: Simulação de alteração de status e Encapsulamento
    print("\n--- TURNO 2 (Demonstração de Encapsulamento & Status) ---")
    jogador_pkmn.aplicar_status("Paralisado")
    print(f"[STATUS] {jogador_pkmn.nome} foi afetado pelo status: '{jogador_pkmn.status}'")

    # Turno 2: Polimorfismo - Uso de Item 'CuraStatus' pelo Jogador
    print("\n--- TURNO 2 (Jogador - Polimorfismo ao Usar Item) ---")
    msg_item = batalha.inventario_jogador["cura_status"].aplicar_efeito(jogador_pkmn)
    print(msg_item)

    # Turno 3: Polimorfismo - Uso de Item 'PocaoHP' pelo Jogador
    print("\n--- TURNO 3 (Jogador - Uso de Poção HP) ---")
    msg_pocao = batalha.inventario_jogador["pocao"].aplicar_efeito(jogador_pkmn)
    print(msg_pocao)

    print("\n" + "=" * 65)
    print("   FIM DA DEMONSTRAÇÃO DOS CONCEITOS DE POO")
    print("=" * 65)


if __name__ == "__main__":
    demonstrar_batalha()
