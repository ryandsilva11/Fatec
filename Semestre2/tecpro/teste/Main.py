from Carro import Carro
from Ling import Ling
from Pc import Pc
from Game import Game

carro = Carro("Nissan", "Versa")
ling = Ling("Java", "Média", "S Tier")
pc = Pc(16, "Ryzen 5", "RTX 3050", 3000)
game = Game("Zelda OoT", "Nintendo", 99)

print(f"{carro.modelo}\n{carro.marca}")
print()
print(f"{ling.nome}\n{ling.dif}\n{ling.tier}")
print()
print(f"{pc.ram}GB\n{pc.cpu}\n{pc.gpu}\n{pc.preco}")
print()
print(f"{game.nome}\n{game.empresa}\n{game.metac}")
