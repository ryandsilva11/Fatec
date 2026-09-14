import Header from "./Componentes/Header"
import Perfil from "./Componentes/Perfil"
import Footer from "./Componentes/Footer"
import foto from "./img/lord.jpeg"

function App() {

  return (
    <div>
      <Header />

      <Perfil

        foto={foto}
        nome="John Rod"
        profissao="Farmador de aura"
        frase="Vai tomando"

      />

      <Footer />
    </div>
  )
}

export default App
