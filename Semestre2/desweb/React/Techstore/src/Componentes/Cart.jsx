function Cart(props) {
    return (
        <aside className="cart">
            <h2>Meu Carrinho ({props.produtos.length})</h2>
            {props.produtos.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                props.produtos.map((produto, index) => (
                    <div key={index} className="cart-item">
                        <span>{produto.nome}</span>
                        <strong>R$ {produto.preco}</strong>
                    </div>
                ))
            )}
        </aside>
    );
}

export default Cart;
