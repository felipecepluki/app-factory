import { useState } from "react";
import "./admin.css";
import { auth } from '../../firebaseConnection'
import { signOut } from "firebase/auth"

export function Admin() {
  const [tarefaInput, setTarefaInput] = useState('')

  function handleRegister(e) {
    e.preventDefault()
  }

  async function handleLogout() {
    await signOut(auth);
  }

  return (
    <div className="admin-container">
      <h1>Minhas tarefas</h1>
      <form onSubmit={handleRegister}>
        <textarea 
          placeholder="Digite sua tarefa..." 
          value={tarefaInput} 
          onChange={(e) => setTarefaInput(e.target.value)} 
        />
        <button className="btn-register" type="submit">Registrar tarefa</button>
      </form>
      <article className="list">
        <p>Estudar javascript e react</p>
        <div>
          <button>Editar</button>
          <button className="btn-delete">Concluir</button>
        </div>
        <button className="btn-logout" onClick={handleLogout}>Sair</button>
      </article>
    </div>
  )
}