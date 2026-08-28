class Ataque:
    """Representa uma opção de ataque disponível para os Pokémon."""
    def __init__(self, nome: str, poder: int, tipo: str):
        self.nome = nome
        self.poder = poder
        self.tipo = tipo

    def __str__(self) -> str:
        return f"{self.nome} ({self.tipo} - Poder: {self.poder})"
