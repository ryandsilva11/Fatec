export default function Perfil(props) {

    return (
        <div>
            <h2>{props.nome}</h2>
            <p>{props.profissao}</p>
            <p>{props.frase}</p>
            <img src={props.foto} width="25%" alt="foto" />
        </div>
    )
}



