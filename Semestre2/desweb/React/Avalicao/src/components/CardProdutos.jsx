import { useEffect, useState } from "react"
export default function CardProdutos() {

    const url = "https://fakestoreapi.com/products"
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        fetch(url).then(response => response.json()).then(data => setProdutos(data))
    }, [])

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <input type="text" placeholder="Digite o nome do produto" id="nome" />
                <button onClick={(e) => Buscar(e.target.value)}>Buscar</button>
            </div>

            {produtos.map(produto => (

                <li style={{ padding: "5px", display: "flex", flexDirection: "column", alignItems: "center" }} key={produto.id}>

                    {produto.title}

                    {produto.price}

                    {<img src={produto.image} alt={produto.title}
                        style={{ width: "10%", height: "10%", display: "flex", flexDirection: "column", alignItems: "center" }}
                    />}
                </li>
            ))}
        </div>
    )

}
