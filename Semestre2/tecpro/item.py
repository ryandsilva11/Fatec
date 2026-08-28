from abc import ABC, abstractmethod
from pokemon import Pokemon


class Item(ABC):
    def __init__(self, nome: str):
        self.nome = nome

    @abstractmethod
    def aplicar_efeito(self, pokemon: Pokemon) -> str:
        pass
