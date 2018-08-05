import React, { Component } from 'react';
import './Results.css';

class Results extends Component {

  state = {
    review: '',
    stars: 0,
    rating: undefined
  }

  componentDidMount = () => {
    this.setState({
      review: this.props.review,
      stars: this.props.stars,
      rating: this.props.rating
    })
  }

  normalize = () => {

  }

  render() {
    return (
      <div className="container-fluid">
        <p>{ this.state.rating }</p>
      </div>
    )
  }
}

export default Results;