import { useEffect, useState } from "react";
import "./admin.css";
import { auth, db } from '../../firebaseConnection'
import { signOut } from "firebase/auth"
import { addDoc, collection } from 'firebase/firestore'

export function Admin() {
  const [tarefaInput, setTarefaInput] = useState('')
  const [user, setUser] = useState({})

  useEffect(() => {
    async function loadTarefas() {
      const userDetail = localStorage.getItem("@detailUser")
      setUser(JSON.parse(userDetail))
    }
    loadTarefas()
  })

  async function handleRegister(e) {
    e.preventDefault()
    if (tarefaInput === '') {
      alert("Digite sua tarefa...")
      return;
    }
    await addDoc(collection(db, "tarefas"), {
      tarefa: tarefaInput,
      created: new Date(),
      userUid: user?.uid,
    })
    .then(() => {
      console.log("Tarefa registrada com sucesso")
      setTarefaInput("")
    })
    .catch((error) => {
      console.log("Erro ao registrar" + error)
    })
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