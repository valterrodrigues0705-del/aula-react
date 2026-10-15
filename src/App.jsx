import { useState } from 'react'
import './App.css'
import Aluno from './Aluno'
function App() {
  const [alunos, setAlunos] = useState([])

  let enviarAluno = function alertar() {
    alert("cliquei")
    console.log({
      nome: document.getElementById('nome').value,
      idade: Number(document.getElementById('idade').value),
      curso: document.getElementById('curso').value,
      turno: document.getElementById('turno').value,
    });
    setAlunos([...alunos, {
      nome: document.getElementById('nome').value,
      idade: Number(document.getElementById('idade').value),
      curso: document.getElementById('curso').value,
      turno: document.getElementById('turno').value,
    }])
  }
  return (
    <>
      <section id="center">
        <input type="text" name="nome" id="nome" placeholder='nome do aluno' />
        <input type="number" name="idade" id="idade" placeholder='idade do aluno' />
        <input type="text" name="curso" id="curso" placeholder='curso do aluno' />
        <input type="text" name="turno" id="turno" placeholder='turno do aluno' />
        <input type="submit" value="Enviar" onClick={enviarAluno} />

        {
          alunos.map(
            (aluno, index) => <Aluno key={index} nome={aluno.nome} idade={aluno.idade} curso={aluno.curso} turno={aluno.turno} />
          )
        }
      </section>
    </>
  )
}

export default App
