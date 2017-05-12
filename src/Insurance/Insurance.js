import React, { Component } from 'react';
import './Insurance.css';
import logo from '../logo.svg';
// import Cooking from './Cooking/Cooking';
// import Equipment from './Equipment/Equipment';

class Insurance extends Component {
  render() {
    return (
      <div className="Insurance">
        <div className="Insurance-header">
          <img src={logo} className="Insurance-logo" alt="logo" />
          <h2>Welcome to Adultify</h2>
        </div>
        <p className="Insurance-intro">
          In the Insurance!
        </p>
      </div>
    );
  }
}

export default Insurance;
