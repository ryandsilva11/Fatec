export default function CalcularNota(props) {
    return (
        <div>
            <h1 className='nota'>Nota: {3 - 3.5 - 1.5 + (props.prova1 + props.prova2 + props.trabalhos + props.pi)}</h1>
            <h1></h1>
        </div>

    )
}       