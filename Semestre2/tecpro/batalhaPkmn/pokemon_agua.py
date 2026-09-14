from pokemon import Pokemon
from ataque import Ataque


class PokemonAgua(Pokemon):
    def __init__(self, nome: str, hp_maximo: int, ataque: Ataque):
        super().__init__(nome, "Água", hp_maximo, ataque)
