import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Results.css';

let trWhiteBlock = require('../assets/imgs/tr white block.png');

class Results extends Component {

  normalize(rating) {
    return Number(((rating + 1) / 2) * 5).toFixed(2);
  }

  componentDidMount = () => {
    console.log("updating prop with " + this.props.rating);
    this.props.update(this.props.rating);
  }

  render() {
    return (
      <div className="container-fluid results-container">
        <NavLink to="/"><img src={ trWhiteBlock } alt="TR logo white" id="tr-white" onClick={ this.props.reset }/></NavLink>
        <div className="row justify-content-center">
          <div className="col-md-8 info-container">
            <div className="row justify-content-center score-container">
              <p id="tr-score">Tru Review score: <span id="score">{ this.normalize(this.props.rating) } &#9733;</span></p>
              <p id="feedback"></p>
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