import React, { Component } from "react";

import classes from "./Todo.css";

class Todo extends Component {
  render() {
    return (
      <div className={classes.Space}>
        <p>All Todos</p>
      </div>
    );
  }
}

export default Todo;
