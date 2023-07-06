import Nome from "../Nome";

function Alunos({ nome, mudaNome }) {
  return (
    <div>
      <h2>Componente Alunos</h2>
      <Nome nome={nome} />
    </div>
  );
}

export default Alunos;
