import React from 'react';
import './App.css';
import { Component } from 'react';
import Post from './components/Post';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Tareas from './components/Tareas.js';


class App extends Component {
  
  render(){
    return <div>
      <BrowserRouter>
        <Link to="/tareas" className='links'>Tareas</Link>
        <Link to="/post" className='links'>Posteos</Link>
        <Routes>
          <Route exact path="/tareas" element={<Tareas/>}/>
          <Route exact path="/post" element={<Post/>}/>
        </Routes>
      </BrowserRouter>
      <h1>Selecciona una opcion</h1>
    </div>
  }
}

export default App;

