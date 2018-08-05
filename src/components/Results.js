import React, { Component } from 'react';
import './Results.css';

class Results extends Component {

  normalize(rating) {
    console.log(rating)
    return ((rating + 1) / 2) * 5;
  }

  render() {
    return (
      <div className="container-fluid">
        <p>{ this.normalize(this.props.rating) }</p>
      </div>
    )
  }
}

export default Results;