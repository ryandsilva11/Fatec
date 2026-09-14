from pokemon import Pokemon
from ataque import Ataque


class PokemonFogo(Pokemon):
    def __init__(self, nome: str, hp_maximo: int, ataque: Ataque):
        super().__init__(nome, "Fogo", hp_maximo, ataque)
