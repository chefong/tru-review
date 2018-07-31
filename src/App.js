import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Home from './components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="route-container">
            <Route path="/" component={ Welcome } exact/>
            <Route path="/home" component={ Home }/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
