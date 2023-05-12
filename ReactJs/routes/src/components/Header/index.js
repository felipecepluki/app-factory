import { Link } from "react-router-dom";
import "./styles.css";

function Header() {
  return (
    <header>
      <h2>Felipe Dev</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </div>
    </header>
  );
}

export default Header;
