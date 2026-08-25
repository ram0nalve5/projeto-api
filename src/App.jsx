import React, { useState, useEffect } from 'react'
// import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {

  // Guardar e carregar tarefas
  const [tarefas, setTarefas] = useState([])
  const [carregando, setCarregando] = useState(true)

  // UseEffect com fetch (requisições assíncronas) -> Funciona com promise
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setTarefas(dados) // Salva os dados vindos da API
        setCarregando(false) // Desativa o carregamento
      });
  }, []); // Array vazio para executar o efeito apenas 1 vez

  return (
    <>
      <div>
        <div>
          <h2>Tarefas vindas da API</h2>
          <p>Consumindo dados de JSONPlaceholder via fetch e useEffects</p>
          { carregando ? (
            <div>Carregando...</div>
          ) : (
            <ul>
              {tarefas.map((item) => (
                <li key={item.id}>{item.title} - {item.completed ? "Concluido" : "Pendente"}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}

export default App