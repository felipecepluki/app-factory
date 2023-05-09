import React, { Component } from "react";

class Membro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: props.nome,
    };
    this.entrar = this.entrar.bind(this);
  }

  entrar(nome) {
    this.setState({
      nome: nome,
    });
  }

  render() {
    return (
      <div>
        <h2>Bem-vindo {this.state.nome}</h2>
        <button onClick={() => this.entrar("Felipe")}>
          Entrar como Felipe
        </button>
        <button onClick={() => this.setState({ nome: "" })}>Sair</button>
      </div>
    );
  }
}

export default Membro;
