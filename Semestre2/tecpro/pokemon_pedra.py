from pokemon import Pokemon
from ataque import Ataque


class PokemonPedra(Pokemon):
    """Subclasse de Pokemon especializada no tipo Pedra (Herança)."""
    def __init__(self, nome: str, hp_maximo: int, ataques: list[Ataque]):
        super().__init__(nome, "Pedra", hp_maximo, ataques)
