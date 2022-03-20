import React, {Component} from "react";

class Task extends Component{
    render(){
        return <div>
            {this.props.tarea.id} - {this.props.tarea.title} - {this.props.tarea.description}
            <input type="checkBox"/>
            <button>X</button>
        </div>
    }
}
export default Task;