import React from 'react';
import './Error.css';

let thinkingEmoji = require('../assets/imgs/thinking emoji.png');

const Error = () => {
  return (
    <div className="container-fluid error-container">
      <h1 id="error-message">Sorry, we aren't quite sure what you're looking for...</h1>
      <img src={ thinkingEmoji } alt="thinking emoji" id="thinking-emoji"/>
    </div>
  )
}

export default Error;