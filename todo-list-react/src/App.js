import React, { Component } from "react";
import Todo from "./components/Todo/Todo";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Todo />
        <Todo />
      </React.Fragment>
    );
  }
}

export default App;
