import random
from pokemon import Pokemon
from pocao_hp import PocaoHP
from cura_status import CuraStatus


class GerenciadorBatalha:
    """Classe responsável pelo fluxo de batalha entre o Jogador e a CPU."""
    def __init__(self, pokemon_jogador: Pokemon, pokemon_cpu: Pokemon):
        self.pokemon_jogador = pokemon_jogador
        self.pokemon_cpu = pokemon_cpu
        
        # Inventários independentes (5 Poções + 5 Curas de Status)
        self.inventario_jogador = {
            "pocao": PocaoHP(quantidade=5),
            "cura_status": CuraStatus(quantidade=5)
        }
        self.inventario_cpu = {
            "pocao": PocaoHP(quantidade=5),
            "cura_status": CuraStatus(quantidade=5)
        }

    def executar_logica_combate_cpu(self) -> str:
        """
        Simula a lógica de decisão estratégica da CPU:
        - Se HP < 30% e tiver Poção -> Usa Poção (evita desperdício quando HP está alto)
        - Se possuir Status != 'Normal' e tiver Cura -> Usa Cura de Status (evita gasto à toa)
        - Caso contrário -> Ataca com um golpe selecionado
        """
        hp_percentual = self.pokemon_cpu.hp / self.pokemon_cpu.hp_maximo
        
        if hp_percentual < 0.30 and self.inventario_cpu["pocao"].quantidade > 0:
            return self.inventario_cpu["pocao"].aplicar_efeito(self.pokemon_cpu)
        elif self.pokemon_cpu.status != "Normal" and self.inventario_cpu["cura_status"].quantidade > 0:
            return self.inventario_cpu["cura_status"].aplicar_efeito(self.pokemon_cpu)
        else:
            ataque_escolhido = random.choice(self.pokemon_cpu.ataques)
            return self.pokemon_cpu.atacar(self.pokemon_jogador, ataque_escolhido)
