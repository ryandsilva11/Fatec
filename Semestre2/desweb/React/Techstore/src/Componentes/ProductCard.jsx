function ProductCard({
    nome,
    categoria,
    descricao,
    preco,
    imagem,
    adicionarCarrinho
}) {
    return (
        <article className="product-card">
            <img src={imagem} alt={nome} />
            <div className="product-info">
                <span>{categoria}</span>
                <h3>{nome}</h3>
                {descricao && <p>{descricao}</p>}
                <strong>R$ {preco}</strong>
                <button onClick={adicionarCarrinho}>
                    Adicionar ao carrinho
                </button>
            </div>
        </article>
    );
}

export default ProductCard;
