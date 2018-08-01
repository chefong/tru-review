import React, { Component } from 'react';
import ReactStars from 'react-stars';
import './Form.css';

class Form extends Component {

  state = {
    value: '',
    stars: 0
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.value);
  }

  changeStars = stars => {
    console.log(stars);
    this.setState({stars});
  }
  
  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <div className="container-fluid">
          <p className="review-subtitle-1">Enter your review here.</p>
          <div className="row justify-content-center">
            <textarea className="form-control" id="review-content" value={ this.state.value } onChange={ this.handleChange } placeholder="Your (amazing) review..." rows="8"></textarea>
          </div>
          <p className="review-subtitle-2">How many stars do you think your review is worth?</p>
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
    )
  }
}

export default Form;