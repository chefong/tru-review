import React from 'react';
import { NavLink } from 'react-router-dom';
import './Welcome.css';

let logo = require('../assets/imgs/tr-logo.png');
let squirrel = require('../assets/imgs/tr squirrel.png');

const Welcome = () => {
  return (
    <div className="container-fluid welcome-container">
      <div className="row">
        <div className="col-sm-6 logo-container">
          <img src={ logo } alt="Tru Review logo" id="tr-logo"/>
        </div>
        <div className="col-sm-6 get-started-container">
          <p id="subtitle">...because your reviews <span id="truly">truly</span> mean everything.</p>
          <div className="squirrel-container">
            <img src={ squirrel } alt="Tru Review squirrel" id="squirrel"/>
          </div>
          <form action="" className="form-container">
            <div className="button-container">
              <button className="btn btn-primary" id="get-started-button"><NavLink to="/home" id="getting-started-link">Get Started</NavLink></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Welcome;