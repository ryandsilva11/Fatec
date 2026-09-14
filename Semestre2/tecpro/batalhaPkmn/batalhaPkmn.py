"""
Atividade Prática de POO - Técnicas de Programação I
Aluno: Ryan Dias da Silva
Cenário: Batalha Pokémon Scriptada (Demonstração de POO)
"""

from ataque import Ataque
from pokemon_agua import PokemonAgua
from pokemon_fogo import PokemonFogo
from pocao import Pocao


def demonstrar_batalha():
    print("=" * 65)
    print("   DEMONSTRAÇÃO DE CONCEITOS DE POO - BATALHA POKÉMON")
    print("=" * 65)

    squirtle = PokemonAgua("Squirtle", 100, Ataque("Jato d'Água", 40, "Água"))

    charmander = PokemonFogo("Charmander", 80, Ataque("Lança-Chamas", 25, "Fogo"))
    pocao = Pocao(cura=30)

    print(f"\n[INÍCIO] {squirtle.nome} ({squirtle.tipo})  VS  {charmander.nome} ({charmander.tipo})")

    input("\n[Pressione Enter para iniciar o Turno 1...]")
    print("--- TURNO 1 (Jogador Ataca) ---")
    print(squirtle.atacar(charmander))

    input("\n[Pressione Enter para a resposta da CPU...]")
    print("--- TURNO 2 (CPU Ataca) ---")
    print(charmander.atacar(squirtle))

    input("\n[Pressione Enter para o Turno 3 (Uso de Item)...]")
    print("--- TURNO 3 (CPU usa Item de Cura ---")
    print(pocao.aplicar_efeito(charmander))

    input("\n[Pressione Enter para avançar a batalha...]")
    print("--- TURNO 4 (Squirtle ataca novamente) ---")
    print(squirtle.atacar(charmander))

    input("\n[Pressione Enter para o Golpe Final...]")
    print("--- TURNO 5 (Golpe Final) ---")
    print(squirtle.atacar(charmander))

    if charmander.hp <= 0:
        print(f"\n[FIM DE BATALHA] {charmander.nome} desmaiou! {squirtle.nome} é o Vencedor!")

    print("\n" + "=" * 65)
    print("   FIM DA DEMONSTRAÇÃO DOS CONCEITOS DE POO")
    print("=" * 65)


demonstrar_batalha()


