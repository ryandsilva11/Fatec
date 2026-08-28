from abc import ABC, abstractmethod
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from pokemon import Pokemon


class Item(ABC):
    """Classe Base/Abstrata para itens de batalha (Herança)."""
    def __init__(self, nome: str, quantidade: int):
        self._nome = nome                # Atributo protegido (Encapsulamento)
        self._quantidade = quantidade    # Atributo protegido

    @property
    def nome(self) -> str:
        return self._nome

    @property
    def quantidade(self) -> int:
        return self._quantidade

    @abstractmethod
    def aplicar_efeito(self, pokemon: 'Pokemon') -> str:
        """Método abstrato que será sobrescrito pelas subclasses (Polimorfismo)."""
        pass
