import React, { Component } from "react";
import Feed from "./components/Feed";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: 1, username: "Felipe", curtidas: 10, comentarios: 2 },
        { id: 2, username: "Joao", curtidas: 120, comentarios: 24 },
        { id: 3, username: "Magali", curtidas: 30, comentarios: 12 },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.feed.map((item) => {
          return (
            <Feed
              id={item.id}
              username={item.username}
              curtidas={item.curtidas}
              comentarios={item.comentarios}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
