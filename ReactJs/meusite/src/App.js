import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "Felipe",
      contador: 0,
    };
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar() {
    let state = this.state;
    state.contador += 1;
    state.nome = "Jose";
    this.setState(state);
  }

  diminuir() {
    let state = this.state;
    if (state.contador === 0) {
      alert("Opa, chegou a zero!");
      return;
    }
    state.contador -= 1;
    this.setState(state);
  }

  render() {
    return (
      <div>
        <h1>Contador</h1>
        <h3>
          {this.state.nome}
          <button onClick={this.diminuir}> - </button>
          {this.state.contador}
        </h3>
        <button onClick={this.aumentar}> + </button>
      </div>
    );
  }
}

export default App;
