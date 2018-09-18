import React, { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <ul className="list-group m-2">
        {this.props.items.map(item => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={item.id}
          >
            {item.text}
            <span className="badge badge-primary badge-pill p-2">
              {this.props.date}
            </span>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
