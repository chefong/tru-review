import React, { Component } from 'react';
import  { NavLink, withRouter } from 'react-router-dom';
import ReactStars from 'react-stars';
import './Home.css';

let trWhiteBlock = require('../assets/imgs/tr white block.png');
let base64 = require('base-64');
let spinner = require('../assets/imgs/tail-spin.svg');

const username = process.env.REACT_APP_IBM_USERNAME;
const password = process.env.REACT_APP_IBM_PASSWORD;

class Home extends Component {

  state = {
    stars: 0,
    review: '',
    data: undefined,
    rating: undefined,
    short: false,
    error: false,
    loading: false
  }

  changeStars = stars => {
    this.setState({stars});
  }

  handleSubmit = async e => {
    e.preventDefault();

    this.props.history.push('/home');

    const review = e.target.elements.userReview.value;
    if (review.split(' ').length < 15) {
      this.setState({short: true});
      return;
    }
    const stars = this.state.stars;

    this.setState({review});
    this.setState()

    let auth = base64.encode(username + ":" + password);
    await fetch(`https://cors-anywhere.herokuapp.com/https://gateway.watsonplatform.net/natural-language-understanding/api/v1/analyze?version=2018-07-10&text=${review}&features=sentiment&fallback_to_raw=true&relations.model=en-news&sentiment.document=true`, {
      headers: {
        Accept: "application/json",
        Authorization: "Basic " + auth
      }
    })
    .then(res =>
      res.json(),
      this.setState({loading: true}),
    )
    .then(data => this.setState({data}))
    .catch(error => console.log(error.message));

    // if (!this.state.data.sentiment) {
    //   this.setState({
    //     error: true,
    //     loading: false
    //   });
    //   return;
    // }

    let rating = this.state.data.sentiment.document.score;
    this.setState({rating});

    this.props.afterSubmit(review, stars, rating);
  }

  render() {
    return (
      <div className="container-fluid home-container">
        <NavLink to="/"><img src={ trWhiteBlock } alt="TR logo white" id="tr-white"/></NavLink>
        <form onSubmit={ this.handleSubmit }>
          <div className="container-fluid">
            <p className="review-subtitle-1">Enter your review here.</p>
            <div className="row justify-content-center">
              <textarea className="form-control" id="review-content" name="userReview" placeholder="Your (amazing) review..." rows="8"></textarea>
            </div>
            <div className="row justify-content-center">
              { this.state.short && <div className="alert alert-danger" id="short-message" role="alert">Make sure your review is at least 15 words long.</div> }
            </div>
            <p className="review-subtitle-2">What would you rate your review?</p>
            <div className="row">
              <div className="stars-container">
                <ReactStars
                  value={ this.state.stars }
                  count={5}
                  onChange={ this.changeStars }
                  size={50}
                  color2={'#FFFFFF'}
                />
              </div>
            </div>
            <div className="submit-container">
              <button className="btn btn-secondary" id="submit-button">Submit</button>
            </div>
            <div className="row justify-content-center">
              { this.state.error && <div className="alert alert-danger" id="error-message" role="alert">Sorry, your text couldn't be processed.</div> }
            </div>
            <div className="loading-container">
              { this.state.loading && <img src={spinner} alt="Loading"/> }
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(Home);