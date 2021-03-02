import React from 'react';
import logo from '../../avatar1.png';
import './App.css';
import NavBar from '../NavBar/NavBar';

class App extends React.Component {
  render() { 
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to my site!</p>
      </header>
      
    </div>
  );
  }
}

export default App;
