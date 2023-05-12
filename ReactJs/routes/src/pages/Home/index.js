import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/sobre">Sobre</Link>
      <br />
      <Link to="/contato">Contato</Link>
      <hr />
      <Link to="/produto/12345">Acessar produto 12345</Link>
    </div>
  );
}

export default Home;
