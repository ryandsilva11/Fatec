function ProductCard({
    nome,
    categoria,
    preco,
    imagem


}) {
    <img src={imagem} />
}
{
    <h3>{nome}</h3>
}
{
    <span>{categoria}</span>
}
{
    <strong>R$ {preco}</strong>
}

function adicionarCarrinho() {
    alert(`Produto ${props.nome} adicionado ao carrinho!`)

    return (
        <article>
            <h3>
                {props.nome}
            </h3>

            <button onClick={adicionarCarrinho}>Adicionar ao Carrinho</button>
        </article>
    );

}


export default ProductCard
