import React from "react";

const BemVindo = (props) => (
  <div>
    <h2>Bem-vindo(a) {props.nome}</h2>
    <h3>Tenho {props.idade} anos</h3>
  </div>
);

function App() {
  return (
    <div>
      <h1>
        Olá Mundo!
        <BemVindo nome="Felipe" idade="18" />
        <BemVindo nome="Rafael" idade="16" />
      </h1>
    </div>
  );
}

export default App;
