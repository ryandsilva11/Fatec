from item import Item
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from pokemon import Pokemon


class PocaoHP(Item):
    """Subclasse de Item para restauração de pontos de vida (Herança + Polimorfismo)."""
    def __init__(self, quantidade: int = 5):
        super().__init__("Poção de Vida (+20 HP)", quantidade)

    def aplicar_efeito(self, pokemon: 'Pokemon') -> str:
        # Polimorfismo: Implementação específica de efeito para cura de HP
        if self._quantidade <= 0:
            return f"[FALHA] Sem {self._nome} restantes no inventário!"
        
        if pokemon.hp >= pokemon.hp_maximo:
            return f"[AVISO] HP de {pokemon.nome} já está no máximo!"

        self._quantidade -= 1
        cura_realizada = pokemon.restaurar_hp(20)
        return (f"[ITEM] {self._nome} utilizada em {pokemon.nome}! "
                f"Recuperou {cura_realizada} HP. (Restantes: {self._quantidade})")
