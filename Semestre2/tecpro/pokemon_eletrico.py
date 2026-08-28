from pokemon import Pokemon
from ataque import Ataque


class PokemonEletrico(Pokemon):
    """Subclasse de Pokemon especializada no tipo Elétrico (Herança)."""
    def __init__(self, nome: str, hp_maximo: int, ataques: list[Ataque]):
        super().__init__(nome, "Elétrico", hp_maximo, ataques)
