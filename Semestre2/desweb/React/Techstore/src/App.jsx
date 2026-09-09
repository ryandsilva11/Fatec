import { useState } from "react";
import Header from "./Componentes/Header";
import Hero from "./Componentes/Hero";
import Category from "./Componentes/Category";
import ProductCard from "./Componentes/ProductCard";
import Cart from "./Componentes/Cart";
import Footer from "./Componentes/Footer";
import products from "./data/products";

function App() {
  const [categoria, setCategoria] = useState("Todos");
  const [carrinho, setCarrinho] = useState([]);

  function adicionarCarrinho(produto) {
    setCarrinho([...carrinho, produto]);
  }

  const produtosFiltrados =
    categoria === "Todos"
      ? products
      : products.filter((product) => product.categoria === categoria);

  return (
    <>
      <Header />
      <main>
        <Hero />

        <section className="categories">
          <Category
            icone="💻"
            nome="Notebooks"
            onClick={() => setCategoria("Notebooks")}
          />
          <Category
            icone="📱"
            nome="Celulares"
            onClick={() => setCategoria("Celulares")}
          />
          <Category
            icone="🎧"
            nome="Acessórios"
            onClick={() => setCategoria("Acessórios")}
          />
        </section>

        <section className="filters">
          <button
            className={categoria === "Todos" ? "active" : ""}
            onClick={() => setCategoria("Todos")}
          >
            Todos
          </button>
          <button
            className={categoria === "Notebooks" ? "active" : ""}
            onClick={() => setCategoria("Notebooks")}
          >
            Notebooks
          </button>
          <button
            className={categoria === "Celulares" ? "active" : ""}
            onClick={() => setCategoria("Celulares")}
          >
            Celulares
          </button>
          <button
            className={categoria === "Acessórios" ? "active" : ""}
            onClick={() => setCategoria("Acessórios")}
          >
            Acessórios
          </button>
        </section>

        <section className="products">
          {produtosFiltrados.length > 0 ? (
            produtosFiltrados.map((product) => (
              <ProductCard
                key={product.id}
                nome={product.nome}
                categoria={product.categoria}
                descricao={product.descricao}
                preco={product.preco}
                imagem={product.imagem}
                adicionarCarrinho={() => adicionarCarrinho(product)}
              />
            ))
          ) : (
            <p className="no-products">Nenhum produto encontrado.</p>
          )}
        </section>

        <Cart produtos={carrinho} />
      </main>
      <Footer />
    </>
  );
}

export default App;
