from pokemon import Pokemon
from ataque import Ataque


class PokemonDragao(Pokemon):
    """Subclasse de Pokemon especializada no tipo Dragão (Herança)."""
    def __init__(self, nome: str, hp_maximo: int, ataques: list[Ataque]):
        super().__init__(nome, "Dragão", hp_maximo, ataques)
