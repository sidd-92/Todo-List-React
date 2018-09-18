import React, { Component } from "react";

import TodoList from "../Todo/TodoList";
class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }

    const newItem = {
      text: this.state.text,
      id: Date.now()
    };

    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ""
    }));
  }
  render() {
    return (
      <div>
        <h3>All TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">What Needs to be done</label>
          <input
            type="text"
            autoComplete="off"
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>add# {this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }
}

export default TodoApp;
