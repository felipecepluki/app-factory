import { useState } from "react";
import Alunos from "./components/Alunos";

function App() {
  const [nomeALuno, setNomeAluno] = useState("FELIPE");

  return (
    <div>
      <h1>ESCOLA</h1>
      <hr />
      <Alunos nome={nomeALuno} mudaNome={setNomeAluno} />
    </div>
  );
}

export default App;
