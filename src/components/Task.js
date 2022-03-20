import React, {Component} from "react";
import "./Task.css";
import PropTypes from 'prop-types';


class Task extends Component{
  
    render(){
        return <div className="elDiv">
            {this.props.tarea.id} - 
            {this.props.tarea.title} - 
            {this.props.tarea.description} -
            {String(" " + this.props.tarea.done)}
            <input type="checkBox" onChange={this.props.checkDone.bind(this, this.props.tarea.id)}/>
            <button className="buttom" onClick={this.props.deleteTask.bind(this, this.props.tarea.id)}>Eliminar</button>
        </div>
    }
}

Task.propTypes = {
    tarea: PropTypes.object.isRequired
}

export default Task;