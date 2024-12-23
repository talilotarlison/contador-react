import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MeuContador from './assets/MeuContador'
import  React, { useState } from 'react';

function App() { 
  var mensagem = true;
      // Declare a new state variable, which we'll call "count"
  var [contador, setContador] = useState(10);
    //console.log(contador);

  return (
    <div>
      <h1>{mensagem?'Meu Projeto React':'Hello word'} </h1>
      <MeuContador>
         <h2>Meu contador de Numeros</h2>
         <h3>{contador}</h3>
         <button onClick={()=>setContador(contador= contador + 1)}>Contador</button>
      </MeuContador>
    </div>  
    )
}

export default App
