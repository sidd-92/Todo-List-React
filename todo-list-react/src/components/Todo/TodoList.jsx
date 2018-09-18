import React, { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <ul className="list-group m-2">
        {this.props.items.map(item => (
          <button
            className="list-group-item list-group-item-action"
            key={item.id}
          >
            {item.text}
            <span className="badge badge-primary badge-pill m-2">
              {this.props.date}
            </span>
          </button>
        ))}
      </ul>
    );
  }
}

export default TodoList;
