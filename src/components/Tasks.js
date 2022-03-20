import React, {Component} from "react";
import Task from "./Task.js"

class Tasks extends Component{
    render(){
        return this.props.tareas.map(task => <Task tarea={task}/>);
    }
}
export default Tasks;