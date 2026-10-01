import { useState } from "react";
import "./App.css"
export default function App() {

  const [txt, setTxt] = useState("Hello World")

  let pessoa = [{
    nome: "Ryan",
    idade: 22
  }, {
    nome: "Mateus",
    idade: 19
  }, {
    nome: "Thiago",
    idade: 20
  }]

  return (
    <>
      <button className="saibaMais" onClick={() => setTxt("Guéviti")}>Click me</button>
      <p>{txt}</p>
      {
        pessoa.map((pessoa) => {
          return <div>{pessoa.nome} - {pessoa.idade}</div>
        })
      }
    </>
  )
}
