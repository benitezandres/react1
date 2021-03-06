import React from 'react'
import logo from './logo.svg';
import './App.css';
//Import component
import One from './components/One';
import ComponentState from './components/ComponentState'
import RenderingConditional from './components/RenderConditional';
import RenderElement from './components/RenderElement';
import ComponentEvent from './components/ComponentEvent';
import ComponentEventES7 from './components/ComponentEventES7';

import ComponentEventNew from './components/ComponentEventNew';
import CommunicationParent from './components/CommponentComunication';
import ComponentLifeCycle from './components/ComponentLifeCycle';
import ComponentAjax from './components/ComponentAjax';

//Functional
import ContadorFun from './components/ContatorFun';
import ScrollHooks from './components/ScrollHooks';

function App() {
  return (
    <div className="App">
      <header className="App-header" className="hidden">
        
        {/*<img src={logo} className="App-logo" alt="logo" /> */}
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
      {/* 
      <One 
      msg="Saludos desde props" 
      state={true} 
      my_age={"1"}
      fruits={['pera','manzana','mora']}
      my_fun={()=>{
        console.log('Function from parent');
      }}
      
      ></One>
      <ComponentState msg="Message from parent"></ComponentState>
      <RenderingConditional></RenderingConditional>
      <RenderElement></RenderElement>
      <ComponentEvent></ComponentEvent>
      <ComponentEventES7></ComponentEventES7>
      <ComponentEventNew></ComponentEventNew>
      <CommunicationParent></CommunicationParent>
      <ComponentLifeCycle></ComponentLifeCycle>
      <ComponentAjax></ComponentAjax>
      <ContadorFun></ContadorFun>
      */}

      <ScrollHooks></ScrollHooks>
    </div>
  );
}

export default App;
