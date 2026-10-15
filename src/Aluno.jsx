import './aluno.css'
function Aluno(props) {
    return (
        <>
        <div>
            <h3>{props.nome}</h3>
            <p>{props.idade}</p>
            <p>{props.curso}-{props.turno}</p>
        </div>
        </>
    )
}
export default Aluno