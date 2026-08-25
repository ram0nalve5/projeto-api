import React, { useState, useEffect } from 'react'

function App() {
  const [tarefas, setTarefas] = useState([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setTarefas(dados)
        setCarregando(false)
      })
  }, [])

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">

        {/* Cabeçalho */}
        <div className="text-center mb-5">
          <h1 className="fw-bold text-primary">
            Tarefas
          </h1>

          <p className="text-muted fs-5">
            Tarefas carregadas através da API JSONPlaceholder
          </p>
        </div>

        {/* Card principal */}
        <div className="card shadow border-0 mx-auto" style={{ maxWidth: '800px' }}>

          <div className="card-header bg-primary text-white py-3">
            <h2 className="h4 mb-0">
              Lista de tarefas
            </h2>
          </div>

          <div className="card-body p-0">

            {carregando ? (
              <div className="text-center py-5">
                <div
                  className="spinner-border text-primary mb-3"
                  role="status"
                >
                  <span className="visually-hidden">
                    Carregando...
                  </span>
                </div>

                <p className="text-muted mb-0">
                  Carregando tarefas...
                </p>
              </div>
            ) : (
              <ul className="list-group list-group-flush">
                {tarefas.map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-center p-3"
                  >
                    <div>
                      <span className="fw-semibold">
                        {item.title}
                      </span>
                    </div>

                    {item.completed ? (
                      <span className="badge bg-success rounded-pill">
                        Concluído
                      </span>
                    ) : (
                      <span className="badge bg-warning text-dark rounded-pill">
                        Pendente
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            )}

          </div>

          {/* Rodapé */}
          {!carregando && (
            <div className="card-footer bg-white text-muted text-center">
              Total de tarefas: <strong>{tarefas.length}</strong>
            </div>
          )}

        </div>

      </div>
    </div>
  )
}

export default App
