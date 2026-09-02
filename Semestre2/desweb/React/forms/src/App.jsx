import { useState } from 'react'

function App() {
  const [cont, setCont] = useState(0)

  function alterarContador() {
    setCont(cont + 1)
  }

  return (
    <>
      <div>
        <h2>{cont}</h2>
        <button onClick={alterarContador}>Adicionar</button>
      </div>
    </>
  )
}

export default App