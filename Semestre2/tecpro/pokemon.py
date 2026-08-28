from ataque import Ataque


class Pokemon:
    """Classe Base representando uma entidade Pokémon (Encapsulamento de dados)."""
    def __init__(self, nome: str, tipo: str, hp_maximo: int, ataques: list[Ataque]):
        self._nome = nome
        self._tipo = tipo
        self._hp_maximo = hp_maximo
        self._hp = hp_maximo              # Encapsulamento: HP é protegido
        self._status = "Normal"           # Encapsulamento: Status é controlado
        self._ataques = ataques[:4]       # Limite de até 4 ataques

    # Encapsulamento via Properties (Getters)
    @property
    def nome(self) -> str:
        return self._nome

    @property
    def tipo(self) -> str:
        return self._tipo

    @property
    def hp(self) -> int:
        return self._hp

    @property
    def hp_maximo(self) -> int:
        return self._hp_maximo

    @property
    def status(self) -> str:
        return self._status

    @property
    def ataques(self) -> list[Ataque]:
        return self._ataques

    # Encapsulamento de Regra de Negócio: Alteração controlada do HP
    def receber_dano(self, quantidade: int) -> int:
        """Aplica dano garantindo que o HP não fique menor que 0."""
        dano_real = min(self._hp, quantidade)
        self._hp -= dano_real
        return dano_real

    def restaurar_hp(self, quantidade: int) -> int:
        """Restaura HP garantindo que não ultrapasse o HP máximo."""
        hp_antigo = self._hp
        self._hp = min(self._hp_maximo, self._hp + quantidade)
        return self._hp - hp_antigo

    def aplicar_status(self, novo_status: str):
        """Define uma alteração de status (ex: Paralisado, Queimado)."""
        self._status = novo_status

    def curar_status(self):
        """Restaura o status para o estado Normal."""
        self._status = "Normal"

    def esta_desmaiado(self) -> bool:
        """Verifica se o HP chegou a 0 (condição de derrota)."""
        return self._hp <= 0

    def atacar(self, alvo: 'Pokemon', ataque: Ataque) -> str:
        """Executa um ataque contra o Pokémon alvo."""
        dano = ataque.poder
        dano_causado = alvo.receber_dano(dano)
        return (f"[COMBATE] {self._nome} usou {ataque.nome} contra {alvo.nome}! "
                f"Causou {dano_causado} de dano. ({alvo.nome} HP: {alvo.hp}/{alvo.hp_maximo})")
