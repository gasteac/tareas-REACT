
import React from 'react';
import './App.css';


function HelloWorld(props) {
  return (
    <div id='hello'>
      <h3>{props.sub}</h3>
      {props.texto}
    </div>
  )
}

// Funcion flecha

// const App = () => <div>This is my component: <HelloWorld/></div>

// Lo mismo pero como clase

// class App extends React.Component{
//   render(){
//     return <div>This is my component: <HelloWorld/></div>
//   }
// }

// Lo mismo pero como una funcion normal

 function App() {
   return (
     <div>
        This is my component 
        <HelloWorld texto="hola mami jeje"/>
       <HelloWorld texto="jeje" sub="lorem ipsum"/>
       <HelloWorld texto="hola"/>
     </div>
   );
 }

export default App;

