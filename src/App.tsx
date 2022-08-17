import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/button/index';

function App() {
  const buttonColors = ['white', 'red', 'blue', 'gold'];
  
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent
          colors={buttonColors}
        >
          Click me!
        </ButtonComponent>
      </header>
    </div>
  );
}

export default App;
