// root component, wrapper component that houses all of the others
// the only way to effect the app, is to go through here
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  )
}

export default App;
