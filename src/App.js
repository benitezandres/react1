import React from 'react'
import logo from './logo.svg';
import './App.css';
//Import component
import One from './components/One';

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
      <One 
      msg="Saludos desde props" 
      state={true} 
      my_age={"1"}
      fruits={['pera','manzana','mora']}
      my_fun={()=>{
        console.log('Function from parent');
      }}
      
      ></One>
    </div>
  );
}

export default App;
