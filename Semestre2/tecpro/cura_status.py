from item import Item
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from pokemon import Pokemon


class CuraStatus(Item):
    """Subclasse de Item para remoção de alterações de status (Herança + Polimorfismo)."""
    def __init__(self, quantidade: int = 5):
        super().__init__("Cura de Status", quantidade)

    def aplicar_efeito(self, pokemon: 'Pokemon') -> str:
        # Polimorfismo: Implementação específica de efeito para alteração de status
        if self._quantidade <= 0:
            return f"[FALHA] Sem {self._nome} restantes no inventário!"

        if pokemon.status == "Normal":
            return f"[AVISO] {pokemon.nome} não possui alteração de status!"

        status_antigo = pokemon.status
        self._quantidade -= 1
        pokemon.curar_status()
        return (f"[ITEM] {self._nome} utilizada em {pokemon.nome}! "
                f"Status '{status_antigo}' foi curado para 'Normal'. (Restantes: {self._quantidade})")
