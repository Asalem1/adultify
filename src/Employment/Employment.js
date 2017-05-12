import React, { Component } from 'react';
import './Employment.css';
import logo from '../logo.svg';
// import Cooking from './Cooking/Cooking';
// import Equipment from './Equipment/Equipment';

class Employment extends Component {
  render() {
    return (
      <div className="Employment">
        <div className="Employment-header">
          <img src={logo} className="Employment-logo" alt="logo" />
          <h2>Welcome to Adultify</h2>
        </div>
        <p className="Employment-intro">
          In the Employment!
        </p>
      </div>
    );
  }
}

export default Employment;
