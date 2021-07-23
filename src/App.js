import React from 'react'
import logo from './logo.svg';
import './App.css';
//Import component
import Componente from './components/Componente';

function App() {
  return (
    <div className="App">
      <header className="App-header" className="hidden">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Componente msg="Saludos desde props" estado={true} arreglo={['pera','manzana','mora']}></Componente>
    </div>
  );
}

export default App;
