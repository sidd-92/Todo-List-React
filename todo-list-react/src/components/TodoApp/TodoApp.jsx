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
        <h3>List of All Todos</h3>
        <form onSubmit={this.handleSubmit} className="form-inline">
          <label htmlFor="new-todo">What Needs to be done</label>
          <input
            className="form-control mx-1"
            required
            type="text"
            autoComplete="off"
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />

          <button className="btn btn-primary btn-sm">
            add# {this.state.items.length + 1}
          </button>
        </form>
        <TodoList items={this.state.items} date="1st Jan" />
      </div>
    );
  }
}

export default TodoApp;
