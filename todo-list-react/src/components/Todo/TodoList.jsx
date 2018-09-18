import React, { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <ul className="list-group">
        {this.props.items.map(item => (
          <li className="list-group-item" key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
