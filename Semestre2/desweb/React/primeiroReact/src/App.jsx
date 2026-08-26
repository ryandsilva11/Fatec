import Header from "./Componentes/Header"
import Perfil from "./Componentes/Perfil"
import Footer from "./Componentes/Footer"

function App() {

  return (
    <div>
      <Header />
      <Perfil nome="John Rod" profissao="Farmador de aura" frase="Vai tomando" />
      <Footer />
    </div>
  )
}

export default App
