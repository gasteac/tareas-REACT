import React, {Component} from "react";
import Task from "./Task.js"

class Tasks extends Component{
    render(){
        return this.props.tareas.map(task => <Task 
            tarea={task} 
            key={task.id} 
            deleteTask={this.props.deleteTask} 
            checkDone={this.props.checkDone}/>)
    }
}
export default Tasks;