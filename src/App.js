import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import createHistory from "history/createBrowserHistory"
import Welcome from './components/Welcome';
import Home from './components/Home';
import Error from './components/Error';
import Results from './components/Results';
import './App.css';

const history = createHistory();

class App extends Component {

  state = {
    submitted: undefined,
    review: '',
    stars: 0,
    rating: undefined
  }

  afterSubmit = (review, stars, rating) => {
    console.log("calling handleSubmit from App.js");
    this.setState({
      submitted: true,
      review,
      stars,
      rating
    });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Welcome }/>
            <Route path="/home" render={() => (
              this.state.submitted ? (
                <Redirect to="/results"/>
              ) : (
                <Home afterSubmit={ this.afterSubmit }/>
              )
            )}/>
            <Route path="/results" render={() => (
              this.state.rating ? (
                <Results review={ this.state.review } stars={ this.state.stars } rating={ this.state.rating }/>
              ) : (
                <Redirect to="/home"/>
              )
            )}/>
            <Route component ={ Error }/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
