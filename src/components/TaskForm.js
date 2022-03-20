import React, {Component} from "react";
import "./Task.css";

class TaskForm extends Component{
    state = {
        title:'',
        description:''
    }

    AlEnviar= e =>{
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault();
    }

    AlCambiar = e => {
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        return(
            <form className="container" onSubmit={this.AlEnviar}>

                <input 
                name="title"
                type="text" 
                placeholder="Titulo Tarea" 
                className="inputClass" 
                onChange={this.AlCambiar} 
                value={this.state.title}
                required
                />

                <textarea 
                name="description"
                placeholder="Descripcion Tarea" 
                className="textClass" 
                onChange={this.AlCambiar} 
                value={this.state.descripcion}
                required
                />

                <button className="buttonClass">Agregar tarea</button>
            </form>
        )
    }
}

export default TaskForm;