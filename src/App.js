import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Welcome from './components/Welcome';
import Home from './components/Home';
import Error from './components/Error';
import Results from './components/Results';
import './App.css';

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

  resetSubmit = () => {
    this.setState({
      submitted: false
    });
  }

  updateRating = rating => {
    console.log("Update rating in App.js");
    this.setState({rating});
    console.log(this.state.rating);
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
              <Results review={ this.state.review } stars={ this.state.stars } rating={ this.state.rating } reset={ this.resetSubmit } update={ this.updateRating }/>
            )}/>
            <Route component ={ Error }/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
