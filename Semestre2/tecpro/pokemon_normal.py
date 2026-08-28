from pokemon import Pokemon
from ataque import Ataque


class PokemonNormal(Pokemon):
    """Subclasse de Pokemon especializada no tipo Normal (Herança)."""
    def __init__(self, nome: str, hp_maximo: int, ataques: list[Ataque]):
        super().__init__(nome, "Normal", hp_maximo, ataques)
