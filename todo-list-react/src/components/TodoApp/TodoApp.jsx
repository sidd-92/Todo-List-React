import React, { Component } from "react";

import TodoList from "../Todo/TodoList";
class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "", date: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleDateChange(e) {
    let date = e.target.value.toString();
    
    this.setState({
      date: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }

    const newItem = {
      text: this.state.text,
      date: this.state.date,
      id: Date.now()
    };

    this.setState(state => ({
      items: state.items.concat(newItem),
      text: "",
      date: newItem.date
    }));
  }
  render() {
    return (
      <div>
        <h3>List of All Todos</h3>
        <form
          onSubmit={this.handleSubmit}
          className="form-inline position-sticky"
        >
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
          <input
            className="form-control mx-1"
            required
            type="date"
            autoComplete="off"
            onChange={this.handleDateChange}
            id="new-date"
          />

          <button className="btn btn-primary btn-sm">
            add# {this.state.items.length + 1}
          </button>
        </form>
        <TodoList items={this.state.items} date={this.state.date} />
      </div>
    );
  }
}

export default TodoApp;
