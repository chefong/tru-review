import React, { Component } from 'react';
import  { NavLink } from 'react-router-dom';
import Form from './Form';
import './Home.css';

let trWhiteBlock = require('../assets/imgs/tr white block.png');

class Home extends Component {
  render() {
    return (
      <div className="container-fluid home-container">
        <NavLink to="/"><img src={ trWhiteBlock } alt="TR logo white" id="tr-white"/></NavLink>
        <Form />
      </div>
    )
  }
}

export default Home;