from pokemon import Pokemon
from ataque import Ataque


class PokemonAgua(Pokemon):
    """Subclasse de Pokemon especializada no tipo Água (Herança)."""
    def __init__(self, nome: str, hp_maximo: int, ataques: list[Ataque]):
        super().__init__(nome, "Água", hp_maximo, ataques)
