import React from 'react';
import './App.css';
import Home from './pages/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    //BEM
    <div className="app">
      <Router>
        <Switch>
          <Route path='/search'>
                <h1>Search page</h1>
                {/* <SearchPage/> */}
          </Route>
          <Route path='/'>
                <Home />
          </Route>
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
