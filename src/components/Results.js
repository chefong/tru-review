import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Results.css';

let trWhiteBlock = require('../assets/imgs/tr white block.png');

class Results extends Component {

  state = {
    stars: 0,
    review: '',
    rating: undefined
  }

  normalize(rating) {
    return Number(((rating + 1) / 2) * 5).toFixed(2);
  }

  componentDidMount = () => {
    console.log("updating prop with " + this.props.rating);
    this.props.update(this.props.rating);
    this.setState({
      stars: this.props.stars,
      review: this.props.review,
      rating: this.normalize(this.props.rating)
    })
  }

  feedback = () => {
    console.log("feedback");
    let userRating = this.state.stars;
    console.log(userRating);
    let truRating = this.state.rating;
    console.log(truRating);

    if (Math.abs(userRating - truRating) <= 0.5) {
      return "Nice! We pretty much agree with your rating too.";
    }
    else if (userRating - truRating > 0.5) {
      return "You seem to be a bit too generous. Try reflecting more in your words or consider lowering that rating...";
    }
    else {
      return "You might be a bit too harsh. You might want to consider increasing your rating or reflecting more in your words...";
    }
  }

  render() {
    return (
      <div className="container-fluid results-container">
        <NavLink to="/"><img src={ trWhiteBlock } alt="TR logo white" id="tr-white" onClick={ this.props.reset }/></NavLink>
        <div className="row justify-content-center">
          <div className="col-md-8 info-container">
            <div className="row justify-content-center score-container">
              <p id="tr-score">Tru Review rating: <span id="score">{ this.state.rating } &#9733;</span></p>
            </div>
            <div className="row justify-content-center feedback-container">
              <p id="feedback">{ this.feedback() }</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <NavLink to="/home" onClick={ this.props.reset }><button className="btn btn-primary" id="back-button">&larr; Back</button></NavLink>
        </div>
      </div>
    )
  }
}

export default Results;