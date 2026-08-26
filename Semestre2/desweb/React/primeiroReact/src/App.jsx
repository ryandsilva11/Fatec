import Header from "./Componentes/Header"
import Card from "./Componentes/Card"
import Footer from "./Componentes/Footer"

function App() {

  return (
    <div>
      <Header />
      <Card titulo="React" descricao="Biblioteca de componetes." />
      <Card titulo="JavaScript" descricao="Linguagem base do React." />
      <Card titulo="Vite" descricao="Ferramenta de build rápida." />
      <Footer />
    </div>
  )
}

export default App
