from pokemon import Pokemon
from ataque import Ataque


class PokemonVoador(Pokemon):
    """Subclasse de Pokemon especializada no tipo Voador (Herança)."""
    def __init__(self, nome: str, hp_maximo: int, ataques: list[Ataque]):
        super().__init__(nome, "Voador", hp_maximo, ataques)
