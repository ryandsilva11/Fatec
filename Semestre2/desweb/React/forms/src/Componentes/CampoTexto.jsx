import { useState } from 'react'

export default function CampoTexto() {
    const [nome, setNome] = useState('');
    const [lista, setLista] = useState([]);

    function handleTyping(e) {
        setNome(e.target.value);
    }

    function adicionarNome() {
        if (nome.trim() == "") return
        setLista([...lista, nome]);
        setNome("")
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Digite um nome: "
                onChange={handleTyping}>
            </input>
        </div>
    )

}
