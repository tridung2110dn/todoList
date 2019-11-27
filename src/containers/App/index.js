import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import uuid from 'react-uuid';

import Header from '../Header';
import ActiveTasks from '../ActiveTasks';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{ id: 1, task: "Hello", isCompleted: false },],
      completed: [],
      id: 0,
      task: "",
      isEdit: false,
      isCompleted: false,
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('Submit has submitted !');
    if (!this.state.task) return

    //this.state.tasks.indexOf(this.state.task)

    const newTask = {
      id: this.state.id,
      task: this.state.task,
      isCompleted: this.state.isCompleted
    };
    const updatedTasks = [...this.state.tasks, newTask];
    this.setState({
      tasks: updatedTasks,
      id: uuid(),
      task: "",
      isEdit: false,
      isCompleted: false,
    });
  }

  handleChange = e => {
    this.setState({
      task: e.target.value
    })
  }

  // handle check ICON
  completedTask = id => {
    const completedTask = this.state.tasks.find(task => (task.id === id))
    if (completedTask) completedTask.isCompleted = true;

    const updateCompleted = [...this.state.completed, completedTask];
    const updateTasks = this.state.tasks.filter(task => task.id !== id)

    this.setState({
      completed: updateCompleted,
      tasks: updateTasks,
    });
  }

  // delete Task
  deleteTask = (id, isCompleted) => {
    let updateTasks = [];
    if (!isCompleted) {
      updateTasks = this.state.tasks.filter(task => task.id !== id)
      this.setState({
        tasks: updateTasks,
      });
    } else {
      updateTasks = this.state.completed.filter(task => task.id !== id)
      this.setState({
        completed: updateTasks,
      });
    }
  }

  returnTask = id => {
    // find task with given id
    const findTask = this.state.completed.find(task => task.id === id);
    // delete task with given id
    const updateCompleted = this.state.completed.filter(task => task.id !== id)
    // update active task with finded task.
    const updateTask = [...this.state.tasks, findTask];

    this.setState({
      tasks: updateTask,
      completed: updateCompleted
    })
  }

  render() {
    return (
      <div className="app">
        <Container className="justify-content-md-center mt-5">

          <Header
            activeTasks={this.state.tasks.length}
            task={this.state.task}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />

          <Switch>
            <Route exact path="/">
              <ActiveTasks tasks={this.state.tasks} completedTask={this.completedTask} deleteTask={this.deleteTask} />
            </Route>

            <Route path="/completed">
              <ActiveTasks tasks={this.state.completed} returnTask={this.returnTask} deleteTask={this.deleteTask} />
            </Route>
          </Switch>

        </Container>
      </div>
    )
  }
}

export default App;