import React from 'react';
import './App.css';
import { Component } from 'react';
import tareasJson from './ejemplos/tasks.json';
import Tasks from './components/Tasks.js';

class App extends Component {
  state={
    tasks:tareasJson
  }
  render(){
    return (
      <Tasks tareas={this.state.tasks}/>
    )
  }
}

export default App;

