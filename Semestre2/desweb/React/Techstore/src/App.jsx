import Header from "./Componentes/Header";
import Hero from "./Componentes/Hero";
import products from "./data/products";
import { useState } from "react";
function App() {
  const [quantidade, setQuantidade] = useState(0);

  function AdicionarItem() {
    setQuantidade(quantidade + 1)
  }

  return (
    <>
      <Header />

      <Hero />

      <Category
        icone="Computador"
        nome="Notebooks"
      />

      <Category
        icone="Celular"
        nome="Celulares"
      />

      <Category
        icone="Celular"
        nome="Acessórios"
      />

      <button onClick={AdicionarCarrinho}>
        Carrinho ({quantidade})
      </button>

      <ProductCard />
      nome="Notebook pro"
      categoria="Computador
      descricao="Notebook para os estudos e trabalho"
      preco="5000,00"
      imagem="https://images.unsplash.com/photo-1525547719530-fa606cfc22ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      adicionarCarrinho={AdicionarItem}



      {products.map((product) => (
        <ProductCard
          key={product.id}
          nome={product.nome}
          categoria={product.categoria}
          descricao={product.descricao}
          preco={product.preco}
          imagem={product.imagem}
        />
      ))}
    </>
  )
}

export default App
