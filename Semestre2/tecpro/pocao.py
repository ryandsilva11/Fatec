from item import Item
from pokemon import Pokemon


class Pocao(Item):
    def __init__(self, cura: int = 20):
        super().__init__("Poção de Vida")
        self.cura = cura

    def aplicar_efeito(self, pokemon: Pokemon) -> str:
        recuperado = pokemon.curar_hp(self.cura)
        return f"[ITEM] {self.nome} usada em {pokemon.nome}! Recuperou {recuperado} HP (HP: {pokemon.hp}/{pokemon.hp_maximo})."
