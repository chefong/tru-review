import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from './components/Welcome';
import Home from './components/Home';
import Error from './components/Error';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ Welcome } exact/>
            <Route path="/home" component={ Home }/>
            <Route component ={ Error }/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
