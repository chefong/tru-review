import React, { Component } from 'react';
import './Home.css';

let trWhiteBlock = require('../assets/imgs/tr white block.png');

class Home extends Component {
  render() {
    return (
      <div className="container-fluid home-container">
        <img src={ trWhiteBlock } alt="TR logo white" id="tr-white"/>
      </div>
    )
  }
}

export default Home;