import React, { Component } from 'react'
import Tasks from './Tasks.js';
import TaskForm from './TaskForm';
import tareasJson from '../ejemplos/tasks.json';

export default class Tareas extends Component {
    state={
        task:tareasJson
      }
      AddTask = (title, description) => {
        const newTask = {
          id: this.state.task.length,
          title: title,
          description: description,
          done: false
        }
        this.setState({
          task: [...this.state.task, newTask]
        })
      }
      DeleteTask = id => {
        const newTasks = this.state.task.filter(task => task.id !== id)
        this.setState({
          task: newTasks,
        })
        console.log(newTasks)
      }
      CheckDone = id => {
        const newTasks = this.state.task.map(task => {
          if (task.id === id){
            task.done = !task.done;
          }
          return task;
        });
        this.setState({task:newTasks})
      }
  render() {
    return (
      <div>
          <TaskForm addTask={this.AddTask}/>
                <Tasks 
                tareas={this.state.task} 
                deleteTask={this.DeleteTask} 
                checkDone={this.CheckDone}
                />
      </div>
    )
  }
}
