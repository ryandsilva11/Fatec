import { useState } from "react"

export default function Contador() {

    const [cont, setCont] = useState(0);

    return (
        <div>
            <h2>{cont}</h2>
            <button onClick={() => setCont(cont + 1)}>Somar</button>
            <button onClick={() => setCont(cont - 1)}>Subtrair</button>
            <button onClick={() => setCont(0)}>Zerar</button>
        </div>
    )
}