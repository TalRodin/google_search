import React from 'react';
import './App.css';
import Home from './pages/Home'


function App() {
  return (
    //BEM
    <div className="app">
        <h1>Google</h1>
        <Home />
        {/*Search*/}
    </div>
  );
}

export default App;
