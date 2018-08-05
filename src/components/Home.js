import React, { Component } from 'react';
import  { NavLink } from 'react-router-dom';
import ReactStars from 'react-stars';
import './Home.css';

let trWhiteBlock = require('../assets/imgs/tr white block.png');
let base64 = require('base-64');

const username = process.env.REACT_APP_IBM_USERNAME;
const password = process.env.REACT_APP_IBM_PASSWORD;

class Home extends Component {

  state = {
    stars: 0,
    data: undefined
  }

  changeStars = stars => {
    // console.log(stars);
    this.setState({stars});
  }

  normalize = () => {

  }

  handleSubmit = async e => {
    e.preventDefault();
    const userReview = e.target.elements.userReview.value;
    const userStars = this.state.stars;

    let auth = base64.encode(username + ":" + password);

    await fetch(`https://cors-anywhere.herokuapp.com/https://gateway.watsonplatform.net/natural-language-understanding/api/v1/analyze?version=2018-07-10&text=${userReview}&features=sentiment&fallback_to_raw=true&relations.model=en-news&sentiment.document=true`, {
      headers: {
        Accept: "application/json",
        Authorization: "Basic " + auth
      }
    })
    .then(res => res.json())
    .then(data => this.setState({data}));

    console.log(this.state.data);
    console.log(this.state.stars);
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
          </div>
        </form>
      </div>
    )
  }
}

export default Home;