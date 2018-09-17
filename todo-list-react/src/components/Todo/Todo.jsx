import React, { Component } from "react";
import Button from "@material-ui/core/Button";
//import MenuIcon from "@material-ui/icons/Menu";
import Add from "@material-ui/icons/Add";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import "./Todo.css";

class Todo extends Component {
  render() {
    return (
      <Paper style={{ width: "25%", height: "auto", padding: "15px" }}>
        <Typography variant="headline" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography>
        <Button
          style={{ margin: "2px" }}
          fullWidth
          variant="outlined"
          color="secondary"
        >
          Delete
          <DeleteIcon />
        </Button>
        <Button
          style={{ margin: "2px" }}
          variant="outlined"
          fullWidth
          color="primary"
        >
          Add
          <Add />
        </Button>
      </Paper>
    );
  }
}

export default Todo;
