export default function Card(props) {

    return (
        <card>
            <h2>{props.titulo}</h2>
            <p>{props.descricao}</p>
            <img src={props.foto} alt="foto" />
        </card>
    )
}