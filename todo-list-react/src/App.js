import React, { Component } from "react";
import NewTodo from "./components/NewTodo/New";
import Todo from "./components/Todo/Todo";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Todo />
        <NewTodo />
      </React.Fragment>
    );
  }
}

export default App;
