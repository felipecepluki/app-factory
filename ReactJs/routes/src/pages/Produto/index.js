import { useParams } from "react-router-dom";

function Produto() {
  const { id } = useParams();

  return (
    <div>
      <h2>Meu produto é 12345</h2>
    </div>
  );
}

export default Produto;
