import React from 'react';
import './Title.css';

let logo = require('../assets/imgs/tru review logo.png');
let squirrel = require('../assets/imgs/tr squirrel.png');

const Title = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 logo-container">
          <img src={ logo } alt="Tru Review logo" id="tr-logo"/>
        </div>
        <div className="col-sm-6 get-started-container">
          <p id="subtitle">...because your reviews are what truly matters the most.</p>
          <div className="squirrel-container">
            <img src={ squirrel } alt="Tru Review squirrel" id="squirrel"/>
          </div>
          <form action="" className="form-container">
            <div className="button-container">
              <button className="btn btn-primary" id="get-started-button">Get Started</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Title;