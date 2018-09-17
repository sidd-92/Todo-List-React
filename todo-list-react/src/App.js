import React, { Component } from "react";
import Todo from "./components/Todo/Todo";
import NewTodo from "./components/NewTodo/New";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Dial from "./components/SpeedDial/Dial";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Title
            </Typography>
          </Toolbar>
        </AppBar>
        <Todo />
        <Dial />

        <NewTodo />
      </React.Fragment>
    );
  }
}

export default App;
