from pokemon import Pokemon
from ataque import Ataque


class PokemonFogo(Pokemon):
    """Subclasse de Pokemon especializada no tipo Fogo (Herança)."""
    def __init__(self, nome: str, hp_maximo: int, ataques: list[Ataque]):
        super().__init__(nome, "Fogo", hp_maximo, ataques)
