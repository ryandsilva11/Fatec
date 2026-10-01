import './App.css'
import CalcularNota from './components/CalcularNota'
import CardProdutos from './components/CardProdutos'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Exercicio1" element={<CalcularNota prova1={7} prova2={8} trabalhos={9} pi={10} />} />
        <Route path="/Exercicio2" element={<CardProdutos />} />
      </Routes>
    </BrowserRouter>
  )
}
