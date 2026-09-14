from ataque import Ataque


class Pokemon:
    def __init__(self, nome: str, tipo: str, hp_maximo: int, ataque: Ataque):
        self.nome = nome
        self.tipo = tipo
        self.ataque = ataque
        self._hp_maximo = hp_maximo
        self._hp = hp_maximo  # Atributo protegido (Encapsulamento)

    @property
    def hp(self) -> int:
        return self._hp

    @property
    def hp_maximo(self) -> int:
        return self._hp_maximo

    def receber_dano(self, quantidade: int) -> int:
        dano_real = min(self._hp, quantidade)
        self._hp -= dano_real
        return dano_real

    def curar_hp(self, quantidade: int) -> int:
        hp_antigo = self._hp
        self._hp = min(self._hp_maximo, self._hp + quantidade)
        return self._hp - hp_antigo

    def atacar(self, alvo: 'Pokemon') -> str:
        dano = alvo.receber_dano(self.ataque.poder)
        return f"[COMBATE] {self.nome} usou {self.ataque.nome}! Causou {dano} de dano em {alvo.nome} (HP: {alvo.hp}/{alvo.hp_maximo})."
